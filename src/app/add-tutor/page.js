// export default function Page() {
//   return (
//     <div className="p-10 text-4xl">
//       add-tutor
//     </div>
//   );
// }

// import PrivateRoute
//   from "@/routes/PrivateRoute";

// const AddTutorPage = () => {

//   return (

//     <PrivateRoute>

//       <div>
//         Add Tutor Page
//       </div>

//     </PrivateRoute>
//   );
// };

// export default AddTutorPage;

"use client";

import { useState } from "react";
import axios from "axios";
import PrivateRoute from "@/routes/PrivateRoute";

const AddTutorPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const tutorData = {
      tutorName: form.tutorName.value,
      subject: form.subject.value,
      price: form.price.value,
      image: form.image.value,
      totalSlot: parseInt(form.totalSlot.value),
      sessionDate: form.sessionDate.value,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/tutors",
        tutorData
      );

      if (res.data.insertedId) {
        alert("Tutor added successfully!");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add tutor");
    }

    setLoading(false);
  };

  return (
    <PrivateRoute>
      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl mb-6">Add Tutor</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-base-100 p-6 shadow rounded-xl"
        >
          <input
            name="tutorName"
            placeholder="Tutor Name"
            className="input input-bordered w-full"
            required
          />

          <input
            name="subject"
            placeholder="Subject"
            className="input input-bordered w-full"
            required
          />

          <input
            name="price"
            placeholder="Price (e.g. $20/hour)"
            className="input input-bordered w-full"
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />

          <input
            name="totalSlot"
            type="number"
            placeholder="Total Slots"
            className="input input-bordered w-full"
            required
          />

          <input
            name="sessionDate"
            type="date"
            className="input input-bordered w-full"
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Tutor"}
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
};

export default AddTutorPage;