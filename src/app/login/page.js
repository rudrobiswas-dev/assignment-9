"use client";

import {
  useContext,
  useState
} from "react";

import Link from "next/link";

import { useRouter }
from "next/navigation";

import axios from "axios";

import toast, {
  Toaster
} from "react-hot-toast";

import {
  AuthContext
} from "@/providers/AuthProvider";

export default function LoginPage() {

  const {
    loginUser,
    googleLogin
  } = useContext(AuthContext);

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // LOGIN
  const handleCredentialLogin =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      try {

        const result =
          await loginUser(
            email,
            password
          );

        const user = {
          email:
            result.user.email,
        };

        const res =
          await axios.post(
            "http://localhost:5000/jwt",
            user
          );

        localStorage.setItem(
          "access-token",
          res.data.token
        );

        toast.success(
          "Login successful!"
        );

        router.push("/");

      } catch (err) {

        toast.error(
          err.message ||
          "Login failed"
        );

      } finally {

        setLoading(false);
      }
    };

  // GOOGLE LOGIN
  const handleGoogleLogin =
    async () => {

      try {

        const result =
          await googleLogin();

        const user = {
          email:
            result.user.email,
        };

        const res =
          await axios.post(
            "http://localhost:5000/jwt",
            user
          );

        localStorage.setItem(
          "access-token",
          res.data.token
        );

        toast.success(
          "Google login successful!"
        );

        router.push("/");

      } catch (err) {

        toast.error(
          err.message
        );
      }
    };

  return (

    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-base-100
        px-5
        py-20
      "
    >

      <Toaster position="top-center" />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Glow 1 */}
        <div
          className="
            absolute
            top-0
            left-0
            w-96
            h-96
            bg-primary/20
            rounded-full
            blur-3xl
            animate-pulse
          "
        ></div>

        {/* Glow 2 */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-112.5
            h-112.5
            bg-secondary/20
            rounded-full
            blur-3xl
            animate-pulse
          "
        ></div>

        {/* Glow 3 */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            w-125
            h-125
            bg-accent/10
            rounded-full
            blur-3xl
            -translate-x-1/2
            -translate-y-1/2
            animate-spin
            [animation-duration:20s]
          "
        ></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-linear(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-linear(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* CARD */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-md
        "
      >

        {/* Glow Border */}
        <div
          className="
            absolute
            -inset-0.5
            rounded-[35px]
            bg-linear-to-r
            from-primary
            via-secondary
            to-accent
            blur-xl
            opacity-40
            animate-pulse
          "
        ></div>

        <div
          className="
            relative
            overflow-hidden
            rounded-[35px]
            border
            border-base-300
            bg-base-100/70
            backdrop-blur-2xl
            shadow-2xl
            p-8
            md:p-10
          "
        >

          {/* TOP SHINE */}
          <div
            className="
              absolute
              top-0
              left-full
              w-full
              h-0.5
              bg-linear-to-r
              from-transparent
              via-white
              to-transparent
              animate-[shine_5s_linear_infinite]
            "
          ></div>

          {/* HEADING */}
          <div className="text-center mb-8">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-base-200/70
                border
                border-base-300
                text-sm
                mb-5
                animate-pulse
              "
            >
              🔐 Welcome Back
            </div>

            <h1
              className="
                text-4xl
                font-black
                text-base-content
              "
            >
              Login To

              <span
                className="
                  bg-linear-to-r
                  from-primary
                  via-secondary
                  to-accent
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}TutorHub
              </span>
            </h1>

            <p
              className="
                mt-4
                text-base-content/70
              "
            >
              Continue your learning journey
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={
              handleCredentialLogin
            }
            className="space-y-5"
          >

            {/* EMAIL */}
            <div>

              <label className="label">
                <span className="label-text font-semibold">
                  Email
                </span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
                className="
                  input
                  input-bordered
                  w-full
                  h-14
                  rounded-2xl
                  bg-base-200/50
                  border-base-300
                  focus:border-primary
                  focus:outline-none
                  transition-all
                "
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="label">
                <span className="label-text font-semibold">
                  Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
                className="
                  input
                  input-bordered
                  w-full
                  h-14
                  rounded-2xl
                  bg-base-200/50
                  border-base-300
                  focus:border-primary
                  focus:outline-none
                  transition-all
                "
              />

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                relative
                overflow-hidden
                w-full
                h-14
                rounded-2xl
                font-bold
                text-white
                bg-linear-to-r
                from-primary
                via-secondary
                to-accent
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-xl
                group
              "
            >

              {/* SHINE */}
              <span
                className="
                  absolute
                  inset-0
                  bg-white/20
                  translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-1000
                "
              ></span>

              <span className="relative z-10">

                {
                  loading
                    ? "Logging in..."
                    : "Login"
                }

              </span>

            </button>

          </form>

          {/* DIVIDER */}
          <div
            className="
              flex
              items-center
              gap-4
              my-7
            "
          >
            <div className="flex-1 h-px bg-base-300"></div>

            <span className="text-base-content/60 text-sm">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 h-px bg-base-300"></div>
          </div>

          {/* GOOGLE BUTTON */}
          <button
            onClick={
              handleGoogleLogin
            }
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-base-300
              bg-base-200/40
              hover:bg-base-200
              hover:scale-[1.02]
              transition-all
              duration-300
              font-semibold
            "
          >
            Continue with Google
          </button>

          {/* REGISTER */}
          <p
            className="
              text-center
              mt-7
              text-base-content/70
            "
          >
            Do not have an account?

            <Link
              href="/register"
              className="
                ml-2
                font-bold
                text-primary
                hover:underline
              "
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}