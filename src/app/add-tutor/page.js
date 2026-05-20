// // export default function Page() {
// //   return (
// //     <div className="p-10 text-4xl">
// //       add-tutor
// //     </div>
// //   );
// // }

// // import PrivateRoute
// //   from "@/routes/PrivateRoute";

// // const AddTutorPage = () => {

// //   return (

// //     <PrivateRoute>

// //       <div>
// //         Add Tutor Page
// //       </div>

// //     </PrivateRoute>
// //   );
// // };

// // export default AddTutorPage;

// "use client";

// import { useState } from "react";
// import axios from "axios";
// import PrivateRoute from "@/routes/PrivateRoute";

// const AddTutorPage = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;

//     const tutorData = {
//       tutorName: form.tutorName.value,
//       subject: form.subject.value,
//       price: form.price.value,
//       image: form.image.value,
//       totalSlot: parseInt(form.totalSlot.value),
//       sessionDate: form.sessionDate.value,
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/tutors",
//         tutorData
//       );

//       if (res.data.insertedId) {
//         alert("Tutor added successfully!");
//         form.reset();
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Failed to add tutor");
//     }

//     setLoading(false);
//   };

//   return (
//     <PrivateRoute>
//       <div className="p-10 max-w-xl mx-auto">
//         <h1 className="text-3xl mb-6">Add Tutor</h1>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-4 bg-base-100 p-6 shadow rounded-xl"
//         >
//           <input
//             name="tutorName"
//             placeholder="Tutor Name"
//             className="input input-bordered w-full"
//             required
//           />

//           <input
//             name="subject"
//             placeholder="Subject"
//             className="input input-bordered w-full"
//             required
//           />

//           <input
//             name="price"
//             placeholder="Price (e.g. $20/hour)"
//             className="input input-bordered w-full"
//             required
//           />

//           <input
//             name="image"
//             placeholder="Image URL"
//             className="input input-bordered w-full"
//             required
//           />

//           <input
//             name="totalSlot"
//             type="number"
//             placeholder="Total Slots"
//             className="input input-bordered w-full"
//             required
//           />

//           <input
//             name="sessionDate"
//             type="date"
//             className="input input-bordered w-full"
//             required
//           />

//           <button
//             type="submit"
//             className="btn btn-primary w-full"
//             disabled={loading}
//           >
//             {loading ? "Adding..." : "Add Tutor"}
//           </button>
//         </form>
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
      photo: form.photo.value,

      subject: form.subject.value,

      availableDays: form.availableDays.value,
      availableTime: form.availableTime.value,

      hourlyFee: parseFloat(form.hourlyFee.value),

      totalSlot: parseInt(form.totalSlot.value),

      sessionStartDate:
        form.sessionStartDate.value,

      institution: form.institution.value,

      experience: form.experience.value,

      location: form.location.value,

      teachingMode: form.teachingMode.value,

      createdAt: new Date(),
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
      <div className="max-w-3xl mx-auto p-6 md:p-10">
        <div className="bg-base-100 shadow-xl rounded-2xl p-8">

          <h1 className="text-4xl font-bold mb-2">
            Add Tutor
          </h1>

          <p className="text-base-content/70 mb-8">
            Create your tutoring profile and
            start accepting students.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >

            {/* Tutor Name */}
            <div>
              <label className="label">
                Tutor Name
              </label>

              <input
                type="text"
                name="tutorName"
                placeholder="Enter tutor name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Photo */}
            <div>
              <label className="label">
                Photo URL
              </label>

              <input
                type="text"
                name="photo"
                placeholder="Paste imgbb/postimage link"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="label">
                Subject / Category
              </label>

              <select
                name="subject"
                className="select select-bordered w-full"
                required
              >
                <option value="">
                  Select Subject
                </option>

                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>English</option>
                <option>ICT</option>
              </select>
            </div>

            {/* Teaching Mode */}
            <div>
              <label className="label">
                Teaching Mode
              </label>

              <select
                name="teachingMode"
                className="select select-bordered w-full"
                required
              >
                <option value="">
                  Select Mode
                </option>

                <option>Online</option>
                <option>Offline</option>
                <option>Both</option>
              </select>
            </div>

            {/* Available Days */}
            <div>
              <label className="label">
                Available Days
              </label>

              <input
                type="text"
                name="availableDays"
                placeholder="Sun - Thu"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Available Time */}
            <div>
              <label className="label">
                Available Time Slot
              </label>

              <input
                type="text"
                name="availableTime"
                placeholder="5:00 PM - 8:00 PM"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Hourly Fee */}
            <div>
              <label className="label">
                Hourly Fee
              </label>

              <input
                type="number"
                name="hourlyFee"
                placeholder="500"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Total Slot */}
            <div>
              <label className="label">
                Total Slot
              </label>

              <input
                type="number"
                name="totalSlot"
                placeholder="20"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Session Date */}
            <div>
              <label className="label">
                Session Start Date
              </label>

              <input
                type="date"
                name="sessionStartDate"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="label">
                Location
              </label>

              <input
                type="text"
                name="location"
                placeholder="Dhaka"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Institution */}
            <div className="md:col-span-2">
              <label className="label">
                Institution
              </label>

              <input
                type="text"
                name="institution"
                placeholder="Dhaka University"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <label className="label">
                Experience
              </label>

              <textarea
                name="experience"
                placeholder="Describe teaching experience..."
                className="textarea textarea-bordered w-full h-28"
                required
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading
                  ? "Adding Tutor..."
                  : "Add Tutor"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default AddTutorPage;