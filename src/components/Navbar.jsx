// // // "use client";

// // // import Link from "next/link";

// // // // import { useTheme } from "next-themes";

// // // const Navbar = () => {
// // //   return (
// // //     <div className="navbar bg-base-100 shadow-md px-5">
// // //       <div className="flex-1">
// // //         <Link href="/" className="text-2xl font-bold text-primary">
// // //           MediQueue
// // //         </Link>
// // //       </div>

// // //       <div className="flex gap-3">
// // //         <Link href="/">Home</Link>
// // //         <Link href="/tutors">Tutors</Link>
// // //         <Link href="/login">Login</Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };


// // // // const { theme, setTheme } = useTheme();

// // // // <button
// // // //   className="btn btn-sm"
// // // //   onClick={() =>
// // // //     setTheme(theme === "light" ? "dark" : "light")
// // // //   }
// // // // >
// // // //   Theme
// // // // </button>




// // // export default Navbar;


// // // "use client";

// // // import Link from "next/link";

// // // import { useTheme } from "next-themes";

// // // import { useEffect, useState } from "react";

// // // const Navbar = () => {
// // //   const [mounted, setMounted] =
// // //     useState(false);

// // //   const { theme, setTheme } =
// // //     useTheme();

// // //   useEffect(() => {
// // //     setMounted(true);
// // //   }, []);

// // //   if (!mounted) return null;

// // //   return (
// // //     <div className="navbar bg-base-100 shadow-md px-5">
// // //       <div className="flex-1">
// // //         <Link
// // //           href="/"
// // //           className="text-2xl font-bold text-primary"
// // //         >
// // //           MediQueue
// // //         </Link>
// // //       </div>

// // //       <div className="flex items-center gap-4">
// // //         <Link href="/">Home</Link>

// // //         <Link href="/tutors">
// // //           Tutors
// // //         </Link>

// // //         <Link href="/login">
// // //           Login
// // //         </Link>

// // //         <button
// // //           className="btn btn-sm"
// // //           onClick={() =>
// // //             setTheme(
// // //               theme === "light"
// // //                 ? "dark"
// // //                 : "light"
// // //             )
// // //           }
// // //         >
// // //           {theme === "light"
// // //             ? "Dark"
// // //             : "Light"}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;

// // "use client";

// // import Link from "next/link";

// // import { useEffect, useState } from "react";

// // const Navbar = () => {

// //   const [theme, setTheme] =
// //     useState("light");

// //   // load saved theme
// //   useEffect(() => {

// //     const savedTheme =
// //       localStorage.getItem("theme")
// //       || "light";

// //     setTheme(savedTheme);

// //     document.documentElement.setAttribute(
// //       "data-theme",
// //       savedTheme
// //     );

// //   }, []);

// //   // change theme
// //   const toggleTheme = () => {

// //     const newTheme =
// //       theme === "light"
// //         ? "dark"
// //         : "light";

// //     setTheme(newTheme);

// //     localStorage.setItem(
// //       "theme",
// //       newTheme
// //     );

// //     document.documentElement.setAttribute(
// //       "data-theme",
// //       newTheme
// //     );
// //   };

// //   return (
// //     <div className="navbar bg-base-100 shadow-md px-5">

// //       <div className="flex-1">

// //         <Link
// //           href="/"
// //           className="text-2xl font-bold text-primary"
// //         >
// //           MediQueue
// //         </Link>

// //       </div>

// //       <div className="flex items-center gap-4">

// //         <Link href="/">Home</Link>

// //         <Link href="/tutors">
// //           Tutors
// //         </Link>

// //         <Link href="/login">
// //           Login
// //         </Link>

// //         <button
// //   className={`btn btn-sm gap-2 rounded-full border transition-all duration-300 ${
// //     theme === "light"
// //       ? "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
// //       : "bg-slate-800 border-slate-700 text-indigo-300 hover:bg-slate-700"
// //   }`}
// //   onClick={toggleTheme}
// // >
// //   {theme === "light" ? (
// //     <>
// //       {/* Sun Icon */}
// //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 animate-spin-slow">
// //         <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.66 6.34l1.58-1.58M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
// //       </svg>
// //       <span>Dark</span>
// //     </>
// //   ) : (
// //     <>
// //       {/* Moon Icon */}
// //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
// //         <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
// //       </svg>
// //       <span>Light</span>
// //     </>
// //   )}
// // </button>

// //       </div>

// //     </div>
// //   );
// // };

// // export default Navbar;


// "use client";

// import Link from "next/link";

// import {
//   useContext,
//   useEffect,
//   useState
// } from "react";

// import {
//   useRouter
// } from "next/navigation";

// import axios from "axios";

// import toast, {
//   Toaster
// } from "react-hot-toast";

// import {
//   AuthContext
// } from "@/providers/AuthProvider";

// const Navbar = () => {

//   const {
//     user,
//     logoutUser
//   } = useContext(AuthContext);

//   const [theme, setTheme] =
//     useState("light");

//   // LOAD THEME
//   useEffect(() => {

//     const savedTheme =
//       localStorage.getItem("theme")
//       || "light";

//     setTheme(savedTheme);

//     document.documentElement.setAttribute(
//       "data-theme",
//       savedTheme
//     );

//   }, []);

//   // TOGGLE THEME
//   const toggleTheme = () => {

//     const newTheme =
//       theme === "light"
//         ? "dark"
//         : "light";

//     setTheme(newTheme);

//     localStorage.setItem(
//       "theme",
//       newTheme
//     );

//     document.documentElement.setAttribute(
//       "data-theme",
//       newTheme
//     );
//   };

//   // LOGOUT
//   const handleLogout =
//     async () => {

//       try {

//         await logoutUser();

//         localStorage.removeItem(
//           "access-token"
//         );

//         toast.success(
//           "Logout successful!"
//         );

//       } catch (err) {

//         toast.error(
//           err.message
//         );

//       }
//     };

//   return (

//     <div
//       className="
//         navbar
//         bg-base-100
//         shadow-md
//         px-5
//       "
//     >

//       <Toaster
//         position="top-center"
//       />

//       {/* LOGO */}
//       <div className="flex-1">

//         <Link
//           href="/"
//           className="
//             text-2xl
//             font-bold
//             text-primary
//           "
//         >
//           MediQueue
//         </Link>

//       </div>

//       {/* MENU */}
//       <div
//         className="
//           flex
//           items-center
//           gap-4
//         "
//       >

//         <Link href="/">
//           Home
//         </Link>

//         <Link href="/tutors">
//           Tutors
//         </Link>

//         {
//           user && (
//             <>
//               <Link href="/add-tutor">
//                 Add Tutor
//               </Link>

//               <Link href="/my-tutors">
//                 My Tutors
//               </Link>

//               <Link href="/my-bookings">
//                 My Bookings
//               </Link>
//             </>
//           )
//         }

//         {
//           user ? (

//             <button
//               onClick={
//                 handleLogout
//               }
//               className="
//                 btn
//                 btn-sm
//                 btn-error
//               "
//             >
//               Logout
//             </button>

//           ) : (

//             <>
//               <Link href="/login">
//                 Login
//               </Link>

//               <Link href="/register">
//                 Register
//               </Link>
//             </>

//           )
//         }

//         {/* THEME BUTTON */}
//         <button
//           className={`
//             btn
//             btn-sm
//             gap-2
//             rounded-full
//             border
//             transition-all
//             duration-300

//             ${
//               theme === "light"
//                 ? `
//                   bg-amber-50
//                   border-amber-200
//                   text-amber-700
//                   hover:bg-amber-100
//                 `
//                 : `
//                   bg-slate-800
//                   border-slate-700
//                   text-indigo-300
//                   hover:bg-slate-700
//                 `
//             }
//           `}

//           onClick={toggleTheme}
//         >

//           {
//             theme === "light"
//               ? "🌙 Dark"
//               : "☀️ Light"
//           }

//         </button>

//       </div>

//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import {
  useContext,
  useEffect,
  useState,
} from "react";

import toast, {
  Toaster,
} from "react-hot-toast";

import {
  AuthContext,
} from "@/providers/AuthProvider";

const Navbar = () => {

  const {
    user,
    logoutUser,
  } = useContext(AuthContext);

  const [theme, setTheme] =
    useState("light");

  // LOAD THEME
  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme")
      || "light";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

  }, []);

  // TOGGLE THEME
  const toggleTheme = () => {

    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);

    localStorage.setItem(
      "theme",
      newTheme
    );

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );
  };

  // LOGOUT
  const handleLogout =
    async () => {

      try {

        await logoutUser();

        localStorage.removeItem(
          "access-token"
        );

        toast.success(
          "Logout successful!"
        );

      } catch (err) {

        toast.error(
          err.message
        );

      }
    };

  return (

    <div
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-base-100/70
        border-b border-base-300
        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      "
    >

      <Toaster position="top-center" />

      <div className="navbar max-w-7xl mx-auto px-4">

        {/* LOGO */}
        <div className="flex-1">

          <Link
            href="/"
            className="
              text-3xl font-black
              bg-linear-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              hover:scale-110
              transition-all
              duration-300
              animate-pulse
            "
          >
            MediQueue
          </Link>

        </div>

        {/* MENU */}
        <div
          className="
            hidden md:flex
            items-center
            gap-2
          "
        >

          <NavItem
            href="/"
            label="Home"
          />

          <NavItem
            href="/tutors"
            label="Tutors"
          />

          {
            user && (
              <>
                <NavItem
                  href="/add-tutor"
                  label="Add Tutor"
                />

                <NavItem
                  href="/my-tutors"
                  label="My Tutors"
                />

                <NavItem
                  href="/my-bookings"
                  label="Bookings"
                />
              </>
            )
          }

          {
            user ? (

              <button
                onClick={
                  handleLogout
                }
                className="
                  px-5 py-2
                  rounded-full
                  font-semibold
                  bg-linear-to-r
                  from-red-500
                  to-pink-500
                  text-white
                  shadow-lg
                  hover:scale-110
                  hover:rotate-1
                  transition-all
                  duration-300
                  active:scale-95
                "
              >
                Logout
              </button>

            ) : (

              <>
                <NavItem
                  href="/login"
                  label="Login"
                />

                <Link
                  href="/register"
                  className="
                    relative
                    overflow-hidden
                    px-5 py-2
                    rounded-full
                    font-bold
                    text-white
                    bg-linear-to-r
                    from-cyan-500
                    via-blue-500
                    to-purple-600
                    shadow-lg
                    hover:scale-110
                    transition-all
                    duration-300
                    before:absolute
                    before:top-0
                    before:left-full
                    before:w-full
                    before:h-full
                    before:bg-white/20
                    before:skew-x-12
                    hover:before:left-[120%]
                    before:transition-all
                    before:duration-700
                  "
                >
                  Register
                </Link>
              </>

            )
          }

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="
              ml-2
              w-12 h-12
              rounded-full
              flex items-center justify-center
              text-xl
              border border-base-300
              bg-linear-to-br
              from-gray-800
              to-black
              text-yellow-300
              shadow-lg
              hover:rotate-180
              hover:scale-110
              transition-all
              duration-500
              animate-bounce
            "
          >

            {
              theme === "light"
                ? "🌙"
                : "☀️"
            }

          </button>

        </div>

        {/* MOBILE MENU */}
        <div className="dropdown dropdown-end md:hidden">

          <label
            tabIndex={0}
            className="
              btn btn-circle
              bg-linear-to-r
              from-cyan-500
              to-blue-500
              border-none
              text-white
            "
          >

            ☰

          </label>

          <ul
            tabIndex={0}
            className="
              menu menu-sm
              dropdown-content
              mt-3 z-1
              p-3 shadow
              bg-base-100
              rounded-box
              w-56
              gap-2
            "
          >

            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/tutors">
                Tutors
              </Link>
            </li>

            {
              user && (
                <>
                  <li>
                    <Link href="/add-tutor">
                      Add Tutor
                    </Link>
                  </li>

                  <li>
                    <Link href="/my-tutors">
                      My Tutors
                    </Link>
                  </li>

                  <li>
                    <Link href="/my-bookings">
                      My Bookings
                    </Link>
                  </li>
                </>
              )
            }

            {
              user ? (
                <li>
                  <button
                    onClick={
                      handleLogout
                    }
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/login">
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link href="/register">
                      Register
                    </Link>
                  </li>
                </>
              )
            }

          </ul>

        </div>

      </div>

    </div>
  );
};

// NAV ITEM COMPONENT
const NavItem = ({
  href,
  label,
}) => {

  return (

    <Link
      href={href}
      className="
        relative
        px-4 py-2
        font-semibold
        rounded-full
        overflow-hidden
        transition-all
        duration-300
        hover:text-white
        hover:bg-linear-to-r
        hover:from-cyan-500
        hover:to-purple-500
        hover:scale-105
        before:absolute
        before:bottom-0
        before:left-1/2
        before:w-0
        before:h-0.5
        before:bg-cyan-400
        before:transition-all
        before:duration-300
        hover:before:w-full
        hover:before:left-0
      "
    >
      {label}
    </Link>

  );
};

export default Navbar;