"use client";

import axios from "axios";

import {
  useEffect,
  useState,
  useContext,
} from "react";

import { useRouter }
  from "next/navigation";

import { AuthContext }
  from "@/providers/AuthProvider";

const TutorsPage = () => {

  const [tutors, setTutors] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const router = useRouter();

  const { user } =
    useContext(AuthContext);

  // FETCH TUTORS
  const fetchTutors = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/tutors",
        {
          params: {
            search,
            startDate,
            endDate,
          },
        }
      );

      setTutors(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // INITIAL LOAD
  useEffect(() => {

    fetchTutors();

  }, []);

  // RESET
  const handleReset = async () => {

    setSearch("");
    setStartDate("");
    setEndDate("");

    try {

      const res = await axios.get(
        "http://localhost:5000/tutors"
      );

      setTutors(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // BOOKING HANDLER
  const handleBooking = (id) => {

    if (user) {

      router.push(`/booking/${id}`);

    } else {

      router.push("/login");

    }
  };

  return (

    <div className="p-10">

      <h1 className="text-4xl mb-8">
        Tutors
      </h1>

      {/* FILTERS */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <input
          type="text"
          placeholder="Search Tutor Name"
          className="input input-bordered w-full"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <input
          type="date"
          className="input input-bordered w-full"
          value={startDate}
          onChange={(e) =>
            setStartDate(e.target.value)
          }
        />

        <input
          type="date"
          className="input input-bordered w-full"
          value={endDate}
          onChange={(e) =>
            setEndDate(e.target.value)
          }
        />

      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mb-10">

        <button
          onClick={fetchTutors}
          className="btn btn-primary"
        >
          Search
        </button>

        <button
          onClick={handleReset}
          className="btn btn-outline"
        >
          Reset
        </button>

      </div>

      {/* TUTORS */}
      <div className="grid md:grid-cols-3 gap-6">

        {tutors.length > 0 ? (

          tutors.map((tutor) => (

            <div
              key={tutor._id}
              className="card bg-base-100 shadow-xl"
            >

              <figure>

                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="h-48 w-full object-cover"
                />

              </figure>

              <div className="card-body">

                <h2 className="card-title">
                  {tutor.name}
                </h2>

                <p>
                  {tutor.subject}
                </p>

                <p className="text-primary font-semibold">
                  {tutor.hourlyFee}
                </p>

                <p>
                  {tutor.location}
                </p>

                <p>
                  {tutor.teachingMode}
                </p>

                <button
                  onClick={() =>
                    handleBooking(tutor._id)
                  }
                  className="btn btn-primary w-full"
                >
                  Book Session
                </button>

              </div>

            </div>

          ))

        ) : (

          <p className="text-red-500 text-xl">
            No Tutor Found
          </p>

        )}

      </div>

    </div>
  );
};

export default TutorsPage;