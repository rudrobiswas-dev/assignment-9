
"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/providers/AuthProvider";

export default function Page() {
  const { user } = useContext(AuthContext); // ✅ real Firebase user

  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  // load bookings
  useEffect(() => {
    if (!user?.email) return; // ✅ wait for user to load
    fetchBookings();
  }, [user]); // ✅ re-run when user changes

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/my-bookings?email=${user.email}` // ✅ real email
      );
      setBookings(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  // DELETE BOOKING
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Delete booking?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/bookings/${id}`);
      setBookings(bookings.filter((booking) => booking._id !== id));
      toast.success("Booking deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete booking");
    }
  };

  // UPDATE BOOKING
  const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    await axios.patch(
      `http://localhost:5000/bookings/update/${selectedBooking._id}`,
      {
        phone: selectedBooking.phone,
        tutorName: selectedBooking.tutorName,
        studentName: selectedBooking.studentName,
        subject: selectedBooking.subject,
        sessionStart: selectedBooking.sessionStart,
      }
    );

    setBookings(
      bookings.map((booking) =>
        booking._id === selectedBooking._id
          ? selectedBooking
          : booking
      )
    );

    document.getElementById("edit_modal").close();
    toast.success("Booking updated successfully");
  } catch (error) {
    console.log(error);
    toast.error("Failed to update booking");
  }
};

  // LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Toaster position="top-right" />
        <p>Loading...</p>
      </div>
    );
  }

  // EMPTY STATE
  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 px-5">
        <Toaster position="top-right" />
        <div className="text-center bg-base-200/60 backdrop-blur-xl border border-base-300 rounded-3xl p-10 shadow-2xl max-w-lg w-full">
          <h1 className="text-4xl font-black text-base-content">No Bookings Found</h1>
          <p className="mt-4 text-base-content/70">You have not booked any tutor sessions yet.</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Toaster position="top-right" />
      <section className="relative min-h-screen overflow-hidden bg-base-100 px-4 sm:px-6 lg:px-10 py-16">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-base-content">
              My Tutors
            </h1>
            <p className="mt-4 text-lg text-base-content/70">Manage all your tutor bookings</p>
          </div>
          {/* TABLE */}
          <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100/80 backdrop-blur-xl shadow-2xl">
            <table className="table">
              <thead>
                <tr className="bg-base-200 text-base-content">
                  <th>Tutor</th>
                  <th>Student</th>
                  <th>Subject</th>
                  <th>Session Start</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-base-200/50 transition-colors">
                    <td className="font-bold">{booking.tutorName}</td>
                    <td>{booking.studentName}</td>
                    <td>{booking.subject}</td>
                    <td>{booking.sessionStart}</td>
                    <td>{booking.phone}</td>
                    <td>
                      <div className={`inline-flex px-4 py-2 rounded-full text-xs font-bold border ${
                        booking.status === "cancelled"
                          ? "bg-error/20 text-error border-error/30"
                          : "bg-success/20 text-success border-success/30"
                      }`}>
                        {booking.status}
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-3 justify-center">
                        <button
                          className="btn btn-sm rounded-xl bg-primary text-white"
                          onClick={() => {
                            setSelectedBooking(booking);
                            document.getElementById("edit_modal").showModal();
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm rounded-xl bg-error text-white"
                          onClick={() => handleDelete(booking._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* MODAL */}
        <dialog id="edit_modal" className="modal">
          <div className="modal-box rounded-3xl bg-base-100 border border-base-300 shadow-2xl">
            <h3 className="font-black text-3xl mb-6">Edit Booking</h3>

            {selectedBooking && (
              <form onSubmit={handleUpdate} className="space-y-4">
                <input
                  className="input input-bordered w-full rounded-2xl"
                  value={selectedBooking.tutorName}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, tutorName: e.target.value })}
                />
                <input
                  className="input input-bordered w-full rounded-2xl"
                  value={selectedBooking.studentName}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, studentName: e.target.value })}
                />
                <input
                  className="input input-bordered w-full rounded-2xl"
                  value={selectedBooking.subject}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, subject: e.target.value })}
                />

                  <input
                type="date"
                className="input input-bordered w-full rounded-2xl"
                value={selectedBooking.sessionStart || ""}
                onChange={(e) =>
                  setSelectedBooking({
                    ...selectedBooking,
                    sessionStart: e.target.value,
                  })
                }
              />
                <input
                  className="input input-bordered w-full rounded-2xl"
                  value={selectedBooking.phone}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, phone: e.target.value })}
                />
                <button type="submit" className="btn btn-primary w-full rounded-2xl">
                  Save Changes
                </button>
              </form>
            )}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn rounded-2xl">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </>
  );
}