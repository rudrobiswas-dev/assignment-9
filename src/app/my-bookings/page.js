"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/my-bookings?email=${user.email}`
      )
      .then((res) => {
        setBookings(res.data);
      })
      .catch(() => {
        toast.error("Failed to load bookings");
      });
  }, []);

  // cancel booking
  const handleCancel = async (id) => {
    const confirmCancel = confirm("Cancel booking?");
    if (!confirmCancel) return;

    try {
      await axios.patch(
        `http://localhost:5000/bookings/${id}`,
        {
          status: "cancelled",
        }
      );

      const updated = bookings.map((booking) => {
        if (booking._id === id) {
          return {
            ...booking,
            status: "cancelled",
          };
        }
        return booking;
      });

      setBookings(updated);

      toast.success("Booking cancelled");
    } catch (error) {
      console.log(error);
      toast.error("Failed to cancel booking");
    }
  };

  // empty state
  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 px-5">
        <Toaster position="top-right" />

        <div className="text-center bg-base-200/60 backdrop-blur-xl border border-base-300 rounded-3xl p-10 shadow-2xl max-w-lg w-full">
          <h1 className="text-4xl font-black text-base-content">
            No Bookings Found
          </h1>

          <p className="mt-4 text-base-content/70">
            You have not booked any tutor sessions yet.
          </p>
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
              My Bookings
            </h1>

            <p className="mt-4 text-lg text-base-content/70">
              Manage all your booked tutor sessions
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100/80 backdrop-blur-xl shadow-2xl">
            <table className="table">
              <thead>
                <tr className="bg-base-200 text-base-content">
                  <th>Tutor Name</th>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-base-200/50 transition-colors">
                    <td className="font-bold">{booking.tutorName}</td>
                    <td>{booking.studentName}</td>
                    <td>{booking.studentEmail}</td>

                    <td>
                      <div
                        className={`inline-flex px-4 py-2 rounded-full text-xs font-bold border ${
                          booking.status === "cancelled"
                            ? "bg-error/20 text-error border-error/30"
                            : "bg-success/20 text-success border-success/30"
                        }`}
                      >
                        {booking.status}
                      </div>
                    </td>

                    <td className="text-center">
                      <button
                        onClick={() => handleCancel(booking._id)}
                        disabled={booking.status === "cancelled"}
                        className={`btn btn-sm rounded-xl text-white border-none px-5 ${
                          booking.status === "cancelled"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-error hover:scale-105 transition-all duration-300"
                        }`}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBookingsPage;