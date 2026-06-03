// "use client";

// import axios from "axios";

// import {
//   useEffect,
//   useState,
//   useContext,
// } from "react";

// import { useRouter }
//   from "next/navigation";

// import { AuthContext }
//   from "@/providers/AuthProvider";

// const TutorsPage = () => {

//   const [tutors, setTutors] =
//     useState([]);

//   const [search, setSearch] =
//     useState("");

//   const [startDate, setStartDate] =
//     useState("");

//   const [endDate, setEndDate] =
//     useState("");

//   const router = useRouter();

//   const { user } =
//     useContext(AuthContext);

//   // FETCH TUTORS
//   const fetchTutors = async () => {

//     try {

//       const res = await axios.get(
//         "http://localhost:5000/tutors",
//         {
//           params: {
//             search,
//             startDate,
//             endDate,
//           },
//         }
//       );

//       setTutors(res.data);

//     } catch (error) {

//       console.log(error);

//     }
//   };

//   // INITIAL LOAD
//   useEffect(() => {

//     fetchTutors();

//   }, []);

//   // RESET
//   const handleReset = async () => {

//     setSearch("");
//     setStartDate("");
//     setEndDate("");

//     try {

//       const res = await axios.get(
//         "http://localhost:5000/tutors"
//       );

//       setTutors(res.data);

//     } catch (error) {

//       console.log(error);

//     }
//   };

//   // BOOKING HANDLER
//   const handleBooking = (id) => {

//     if (user) {

//       router.push(`/booking/${id}`);

//     } else {

//       router.push("/login");

//     }
//   };

//   return (

//     <div className="p-10">

//       <h1 className="text-4xl mb-8">
//         Tutors
//       </h1>

//       {/* FILTERS */}
//       <div className="grid md:grid-cols-3 gap-4 mb-6">

//         <input
//           type="text"
//           placeholder="Search Tutor Name"
//           className="input input-bordered w-full"
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//         />

//         <input
//           type="date"
//           className="input input-bordered w-full"
//           value={startDate}
//           onChange={(e) =>
//             setStartDate(e.target.value)
//           }
//         />

//         <input
//           type="date"
//           className="input input-bordered w-full"
//           value={endDate}
//           onChange={(e) =>
//             setEndDate(e.target.value)
//           }
//         />

//       </div>

//       {/* BUTTONS */}
//       <div className="flex gap-4 mb-10">

//         <button
//           onClick={fetchTutors}
//           className="btn btn-primary"
//         >
//           Search
//         </button>

//         <button
//           onClick={handleReset}
//           className="btn btn-outline"
//         >
//           Reset
//         </button>

//       </div>

//       {/* TUTORS */}
//       <div className="grid md:grid-cols-3 gap-6">

//         {tutors.length > 0 ? (

//           tutors.map((tutor) => (

//             <div
//               key={tutor._id}
//               className="card bg-base-100 shadow-xl"
//             >

//               <figure>

//                 <img
//                   src={tutor.image}
//                   alt={tutor.name}
//                   className="h-48 w-full object-cover"
//                 />

//               </figure>

//               <div className="card-body">

//                 <h2 className="card-title">
//                   {tutor.name}
//                 </h2>

//                 <p>
//                   {tutor.subject}
//                 </p>

//                 <p className="text-primary font-semibold">
//                   {tutor.hourlyFee}
//                 </p>

//                 <p>
//                   {tutor.location}
//                 </p>

//                 <p>
//                   {tutor.teachingMode}
//                 </p>

//                 <button
//                   onClick={() =>
//                     handleBooking(tutor._id)
//                   }
//                   className="btn btn-primary w-full"
//                 >
//                   Book Session
//                 </button>

//               </div>

//             </div>

//           ))

//         ) : (

//           <p className="text-red-500 text-xl">
//             No Tutor Found
//           </p>

//         )}

//       </div>

//     </div>
//   );
// };

// export default TutorsPage;




"use client";

import Image from "next/image";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { user } = useContext(AuthContext);

  // FIXED: always use latest filters
  const fetchTutors = async (customFilters = {}) => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/tutors", {
        params: {
          search: customFilters.search ?? search,
          startDate: customFilters.startDate ?? startDate,
          endDate: customFilters.endDate ?? endDate,
        },
      });

      setTutors(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // initial load
  useEffect(() => {
    fetchTutors();
  }, []);

  // SEARCH button handler
  const handleSearch = () => {
    fetchTutors();
  };

  // RESET FIXED
  const handleReset = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");
    fetchTutors({
      search: "",
      startDate: "",
      endDate: "",
    });
  };

  // booking
  const handleBooking = (id) => {
    if (user) {
      router.push(`/booking/${id}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl mb-8">Tutors</h1>

      {/* FILTERS */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Tutor Name"
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="date"
          className="input input-bordered w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          className="input input-bordered w-full"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mb-10">
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>

        <button onClick={handleReset} className="btn btn-outline">
          Reset
        </button>
      </div>

      {/* LOADING */}
      {loading && <p className="text-blue-500">Loading...</p>}

      {/* TUTORS */}
      {/* TUTORS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          lg:gap-8
          max-w-7xl
          mx-auto
        "
      >
        {tutors.length > 0 ? (
          tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="
                group
                relative
                flex flex-col
                h-full
                overflow-hidden
                rounded-3xl
                bg-base-100/90
                backdrop-blur-xl
                border border-base-300
                shadow-xl
                hover:shadow-primary/20
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-60 sm:h-64 md:h-72 overflow-hidden">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                " />

                {/* Subject */}
                <div className="
                  absolute top-4 left-4
                  px-4 py-2
                  rounded-full
                  bg-primary text-primary-content
                  text-xs sm:text-sm
                  font-bold
                ">
                  {tutor.subject}
                </div>

                {/* Mode */}
                <div className="
                  absolute top-4 right-4
                  px-3 py-1
                  rounded-full
                  bg-base-100/80
                  backdrop-blur-md
                  text-xs
                  font-semibold
                  border border-base-300
                ">
                  {tutor.teachingMode}
                </div>

                {/* Name */}
                <div className="absolute bottom-5 left-5">
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {tutor.name}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {tutor.institution}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-5">

                {/* Location + Experience */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-base-content/50">Location</p>
                    <h4 className="font-bold text-sm">{tutor.location}</h4>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-base-content/50">Experience</p>
                    <h4 className="font-bold text-primary">
                      {tutor.experience}
                    </h4>
                  </div>
                </div>

                {/* Time */}
                <div className="rounded-2xl bg-base-200 p-4 border border-base-300">
                  <p className="text-xs uppercase tracking-widest text-base-content/50 mb-1">
                    Available Time
                  </p>
                  <h3 className="font-bold text-sm">
                    {tutor.availableDays}
                  </h3>
                  <p className="text-primary font-semibold mt-1 text-sm">
                    {tutor.availableTime}
                  </p>
                </div>

                {/* Session */}
                <div className="flex justify-between rounded-2xl bg-base-200 px-4 py-3 border border-base-300">
                  <div>
                    <p className="text-xs text-base-content/50">Session Start</p>
                    <h4 className="font-bold text-sm">
                      {tutor.sessionStart}
                    </h4>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-base-content/50">Total Slots</p>
                    <h4 className="font-black text-secondary text-xl">
                      {tutor.totalSlot}
                    </h4>
                  </div>
                </div>

                {/* Fee */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-base-content/50">Hourly Fee</p>
                    <h2 className="text-2xl font-black text-primary">
                      {tutor.hourlyFee}
                    </h2>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-success/20 text-success border border-success/30 text-xs font-bold">
                    Available
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleBooking(tutor._id)}
                  className="
                    mt-auto
                    w-full
                    py-3
                    rounded-2xl
                    font-bold
                    text-primary-content
                    bg-linear-to-r
                    from-primary
                    via-secondary
                    to-accent
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    shadow-xl
                  "
                >
                  Book Session →
                </button>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <p className="text-red-500 text-xl text-center col-span-full">
              No Tutor Found
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default TutorsPage;