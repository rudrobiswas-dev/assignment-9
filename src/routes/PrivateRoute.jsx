// "use client";

// import { useContext } from "react";

// import { AuthContext } from "@/providers/AuthProvider";

// import { useRouter } from "next/navigation";

// import Loading from "@/components/Loading";

// const PrivateRoute = ({ children }) => {

//   const { user, loading } =
//     useContext(AuthContext);

//   const router = useRouter();

//   // while checking login
//   if (loading) {
//     return <Loading />;
//   }

//   // if not logged in
//   if (!user) {

//     router.push("/login");

//     return null;
//   }

//   // if logged in
//   return children;
// };

// export default PrivateRoute;

"use client";

import {
  useContext,
  useEffect,
} from "react";

import { useRouter }
  from "next/navigation";

import { AuthContext }
  from "@/providers/AuthProvider";

const PrivateRoute =
  ({ children }) => {

    const {
      user,
      loading,
    } = useContext(AuthContext);

    const router =
      useRouter();

    useEffect(() => {

      if (
        !loading &&
        !user
      ) {

        router.push("/login");

      }

    }, [user, loading, router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!user) {
      return null;
    }

    return children;
  };

export default PrivateRoute;