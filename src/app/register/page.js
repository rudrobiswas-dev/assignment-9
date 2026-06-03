"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth"; // ✅ new import
import { AuthContext } from "@/providers/AuthProvider";

export default function RegisterPage() {
  const { createUser, googleLogin } = useContext(AuthContext);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // PASSWORD VALIDATION
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      toast.error("Password must be 6 characters");
      setLoading(false);
      return;
    }

    if (!uppercase.test(password)) {
      toast.error("Need uppercase letter");
      setLoading(false);
      return;
    }

    if (!lowercase.test(password)) {
      toast.error("Need lowercase letter");
      setLoading(false);
      return;
    }

    try {
      const result = await createUser(email, password); // ✅ capture result

      // ✅ update Firebase profile with name and photo
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo || "",
      });

      toast.success("Registration successful!");
      router.push("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE REGISTER
  const handleGoogleRegister = async () => {
    try {
      await googleLogin();
      toast.success("Google login successful!");
      router.push("/");
    } catch (err) {
      console.log("FULL ERROR:", err);
      toast.error(err.message);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-100 px-5 py-20">
      <Toaster position="top-center" />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-125 h-125 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-spin [animation-duration:20s]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ backgroundImage: `linear-linear(rgba(255,255,255,0.08) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
        </div>
      </div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md">
        <div className="absolute -inset-0.5 rounded-[35px] bg-linear-to-r from-primary via-secondary to-accent blur-xl opacity-40 animate-pulse"></div>

        <div className="relative overflow-hidden rounded-[35px] border border-base-300 bg-base-100/70 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <div className="absolute top-0 left-full w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent animate-[shine_5s_linear_infinite]"></div>

          {/* HEADING */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/70 border border-base-300 text-sm mb-5 animate-pulse">
              🚀 Join TutorHub
            </div>
            <h1 className="text-4xl font-black text-base-content">
              Create Your
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> Account</span>
            </h1>
            <p className="mt-4 text-base-content/70">Start your learning journey today</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="label"><span className="label-text font-semibold">Full Name</span></label>
              <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:outline-none transition-all" />
            </div>

            {/* EMAIL */}
            <div>
              <label className="label"><span className="label-text font-semibold">Email</span></label>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:outline-none transition-all" />
            </div>

            {/* PHOTO */}
            <div>
              <label className="label"><span className="label-text font-semibold">Photo URL</span></label>
              <input type="text" placeholder="Enter photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:outline-none transition-all" />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="label"><span className="label-text font-semibold">Password</span></label>
              <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:outline-none transition-all" />
            </div>

            {/* BUTTON */}
            <button type="submit" disabled={loading} className="relative overflow-hidden w-full h-14 rounded-2xl font-bold text-white bg-linear-to-r from-primary via-secondary to-accent hover:scale-[1.02] transition-all duration-300 shadow-xl group">
              <span className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10">{loading ? "Registering..." : "Create Account"}</span>
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-px bg-base-300"></div>
            <span className="text-base-content/60 text-sm">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-base-300"></div>
          </div>

          {/* GOOGLE */}
          <button onClick={handleGoogleRegister} className="w-full h-14 rounded-2xl border border-base-300 bg-base-200/40 hover:bg-base-200 hover:scale-[1.02] transition-all duration-300 font-semibold">
            Continue with Google
          </button>

          {/* LOGIN LINK */}
          <p className="text-center mt-7 text-base-content/70">
            Already have an account?
            <Link href="/login" className="ml-2 font-bold text-primary hover:underline">Login</Link>
          </p>

        </div>
      </div>
    </section>
  );
}