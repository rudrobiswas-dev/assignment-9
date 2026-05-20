"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tutors")
      .then((res) => {
        setTutors(res.data);
      })
      .catch((err) => {
        console.log("Error fetching tutors:", err);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl mb-8">Tutors</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="card bg-base-100 shadow-xl"
          >
            {/* IMAGE */}
            <figure>
              <img
                src={tutor.image}
                alt={tutor.tutorName}
                className="h-48 w-full object-cover"
              />
            </figure>

            {/* CONTENT */}
            <div className="card-body">
              <h2 className="card-title">
                {tutor.tutorName}
              </h2>

              <p>{tutor.subject}</p>

              <p className="text-primary font-semibold">
                {tutor.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;