"use client";

import { useContext, useState } from "react";
import axios from "axios";
import PrivateRoute from "@/routes/PrivateRoute";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

const AddTutorPage = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const tutorData = {
  tutorName: form.name.value,
  image:
    form.image.value ||
    "/images/teacher6.jpg",
  subject: form.subject.value,
  availableDays: form.availableDays.value,
  availableTime: form.availableTime.value,
  hourlyFee: parseFloat(form.hourlyFee.value),
  totalSlot: parseInt(form.totalSlot.value),
  sessionStart: form.sessionStart.value,
  institution: form.institution.value,
  experience: form.experience.value,
  location: form.location.value,
  teachingMode: form.teachingMode.value,
  createdAt: new Date(),
};

    const loadingToast = toast.loading("Adding tutor...");

    try {
      const res = await axios.post(
        "https://assignment-9-backend-omega.vercel.app/tutors",
        tutorData
      );

      toast.dismiss(loadingToast);

      if (res.data.insertedId) {
        toast.success("Tutor added successfully!");
        form.reset();
      } else {
        toast.error("Failed to add tutor!");
      }
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToast);
      toast.error("Failed to add tutor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PrivateRoute>
      <div className="max-w-3xl mx-auto p-6 md:p-10">
        <div className="bg-base-100 shadow-xl rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-2">Add Tutor</h1>

          <p className="text-base-content/70 mb-8">
            Create your tutoring profile and start accepting students.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Tutor Name */}
            <div>
              <label className="label">Tutor Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.name || ""}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Image */}
            <div>
              <label className="label">Image</label>
              <input
                type="text"
                name="image"
                defaultValue={user?.image || ""}
                className="input input-bordered w-full"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="label">Subject / Category</label>
              <select
                name="subject"
                className="select select-bordered w-full"
                required
              >
                <option value="">Select Subject</option>
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
              <label className="label">Teaching Mode</label>
              <select
                name="teachingMode"
                className="select select-bordered w-full"
                required
              >
                <option value="">Select Mode</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Both</option>
              </select>
            </div>

            {/* Available Days */}
            <div>
              <label className="label">Available Days</label>
              <input
                type="text"
                name="availableDays"
                className="input input-bordered w-full"
                placeholder="Sun - Thu"
                required
              />
            </div>

            {/* Available Time */}
            <div>
              <label className="label">Available Time Slot</label>
              <input
                type="text"
                name="availableTime"
                className="input input-bordered w-full"
                placeholder="5:00 PM - 8:00 PM"
                required
              />
            </div>

            {/* Hourly Fee */}
            <div>
              <label className="label">Hourly Fee</label>
              <input
                type="number"
                name="hourlyFee"
                className="input input-bordered w-full"
                placeholder="500"
                required
              />
            </div>

            {/* Total Slot */}
            <div>
              <label className="label">Total Slot</label>
              <input
                type="number"
                name="totalSlot"
                className="input input-bordered w-full"
                placeholder="20"
                required
              />
            </div>

            {/* Session Start Date */}
            <div>
              <label className="label">Session Start Date</label>
              <input
                type="date"
                name="sessionStartDate"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                placeholder="Dhaka"
                required
              />
            </div>

            {/* Institution */}
            <div className="md:col-span-2">
              <label className="label">Institution</label>
              <input
                type="text"
                name="institution"
                className="input input-bordered w-full"
                placeholder="Dhaka University"
                required
              />
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <label className="label">Experience</label>
              <textarea
                name="experience"
                className="textarea textarea-bordered w-full h-28"
                placeholder="Describe teaching experience..."
                required
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? "Adding Tutor..." : "Add Tutor"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default AddTutorPage;