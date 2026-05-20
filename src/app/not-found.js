import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="my-5">Page Not Found</p>

      <Link href="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}