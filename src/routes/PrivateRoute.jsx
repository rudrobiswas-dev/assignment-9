
"use client";

import {
  useContext,
  useEffect,
} from "react";

import {
  useRouter,
  usePathname,
} from "next/navigation";

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

    const pathname =
      usePathname();

    useEffect(() => {

      if (
        !loading &&
        !user
      ) {

        router.push(
          `/login?redirect=${pathname}`
        );

      }

    }, [
      user,
      loading,
      router,
      pathname,
    ]);

    if (loading) {

      return (
        <div className="min-h-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );

    }

    if (!user) {

      return null;

    }

    return children;
  };

export default PrivateRoute;