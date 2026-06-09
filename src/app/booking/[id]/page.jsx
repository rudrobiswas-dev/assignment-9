"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

const BookingPage = () => {
  const params = useParams();
  const { user } = useContext(AuthContext); 

  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://assignment-9-backend-omega.vercel.app/tutors/${params.id}`)
      .then((res) => {
        setTutor(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-base-100">
      <div className="relative text-center">
        <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full animate-pulse"></div>

        <span className="loading loading-ring loading-lg text-primary"></span>

        <h2 className="mt-6 text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Loading...
        </h2>

        <p className="text-base-content/60 mt-2">
          Preparing your tutor session
        </p>
      </div>
    </div>
  );
}

  // tutor not found
  if (!tutor) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div
        className="
          max-w-lg w-full
          rounded-3xl
          border border-base-300
          bg-base-100/70
          backdrop-blur-xl
          shadow-2xl
          p-10
          text-center
        "
      >
        <div className="text-7xl mb-4">😕</div>

        <h1 className="text-4xl font-black text-error">
          Tutor Not Found
        </h1>

        <p className="mt-4 text-base-content/70">
          The tutor you are looking for may have been removed
          or the link is invalid.
        </p>

        <button
          onClick={() => window.history.back()}
          className="
            btn btn-primary
            mt-8
            rounded-2xl
          "
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

  // slot check
  const noSlot = tutor.totalSlot <= 0;

  // session date check
  const today = new Date().toISOString().split("T")[0];
  const sessionBlocked = today < tutor.sessionStart;

  // booking handler
  const handleBooking = async (e) => {
    e.preventDefault();
    setMessage("");

    if (noSlot) return setMessage("No available slots left.");
    if (sessionBlocked) return setMessage(`Booking will open on ${tutor.sessionStart}`);

    const bookingData = {
      studentName: user.displayName,  
      studentEmail: user.email,       
      phone,
      tutorId: tutor._id,
      tutorName: tutor.tutorName,
      subject: tutor.subject,
       sessionStart: tutor.sessionStart,
      fee: tutor.hourlyFee,
      status: "booked",
      bookedAt: new Date(),
    };

    try {
      setBookingLoading(true);
      const res = await axios.post("https://assignment-9-backend-omega.vercel.app/bookings", bookingData);
      console.log(res.data);
      setMessage("Session booked successfully!");
      setPhone("");
    } catch (error) {
      console.log(error);
      setMessage("Booking failed.");
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-6 md:p-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="card bg-base-100 shadow-2xl">
          <figure>
            <img src={tutor.image} alt={tutor.tutorName || "Tutor"} className="h-80 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h1 className="text-4xl font-bold">{tutor.tutorName}</h1>
            <p className="text-lg">Subject: <span className="font-semibold ml-2">{tutor.subject}</span></p>
            <p>Hourly Fee: <span className="font-bold text-primary ml-2">{tutor.hourlyFee}</span></p>
            <p>Experience: <span className="ml-2">{tutor.experience}</span></p>
            <p>Institution: <span className="ml-2">{tutor.institution}</span></p>
            <p>Location: <span className="ml-2">{tutor.location}</span></p>
            <p>Teaching Mode: <span className="ml-2">{tutor.teachingMode}</span></p>
            <p>Available Time: <span className="ml-2">{tutor.availableTime}</span></p>
            <p>Session Start: <span className="ml-2">{tutor.sessionStart}</span></p>
            <p>
              Remaining Slots:{" "}
              <span className={`ml-2 font-bold ${tutor.totalSlot <= 2 ? "text-red-500" : "text-green-600"}`}>
                {tutor.totalSlot}
              </span>
            </p>
            {noSlot && <div className="alert alert-error mt-4"><span>No available slots left.</span></div>}
            {sessionBlocked && <div className="alert alert-warning mt-4"><span>Booking opens on {tutor.sessionStart}</span></div>}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold mb-5">Book Session</h2>

            <form onSubmit={handleBooking} className="space-y-4">

              {/* Student Name */}
              <div>
                <label className="label">Student Name</label>
                <input
                  type="text"
                  value={user?.displayName || ""}  
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">Student Email</label>
                <input
                  type="email"
                  value={user?.email || ""}  // ✅ real email
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="label">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Tutor ID */}
              <div>
                <label className="label">Tutor ID</label>
                <input type="text" value={tutor._id} readOnly className="input input-bordered w-full" />
              </div>

              {/* Tutor Name */}
              <div>
                <label className="label">Tutor Name</label>
                <input type="text" value={tutor.tutorName || ""} readOnly className="input input-bordered w-full" />
              </div>

              {/* Status */}
              <div>
                <label className="label">Booking Status</label>
                <input type="text" value="Booked" readOnly className="input input-bordered w-full" />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={bookingLoading || noSlot || sessionBlocked}
                className="btn btn-primary w-full"
              >
                {bookingLoading ? "Booking..." : "Confirm Booking"}
              </button>

            </form>

            {message && (
              <div className="mt-5">
                <div className="alert alert-info"><span>{message}</span></div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingPage;