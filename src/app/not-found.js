import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-base-100 overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="
          absolute top-20 left-20
          w-80 h-80
          bg-primary/20
          rounded-full
          blur-3xl
          animate-pulse
        "></div>

        <div className="
          absolute bottom-20 right-20
          w-80 h-80
          bg-secondary/20
          rounded-full
          blur-3xl
          animate-pulse
        "></div>

        <div className="
          absolute top-1/2 left-1/2
          w-96 h-96
          bg-accent/10
          rounded-full
          blur-3xl
          -translate-x-1/2
          -translate-y-1/2
          animate-spin
          [animation-duration:20s]
        "></div>
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          text-center
          max-w-xl
          p-10
          rounded-3xl
          bg-base-100/70
          backdrop-blur-xl
          border border-base-300
          shadow-2xl
        "
      >
        {/* 404 */}
        <h1
          className="
            text-8xl
            md:text-9xl
            font-black
            bg-linear-to-r
            from-primary
            via-secondary
            to-accent
            bg-clip-text
            text-transparent
            animate-pulse
          "
        >
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-black text-base-content">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-base-content/70 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="
            inline-block
            mt-8
            px-8
            py-4
            rounded-2xl
            font-bold
            text-primary-content
            bg-linear-to-r
            from-primary
            via-secondary
            to-accent
            hover:scale-105
            transition-all
            duration-300
            shadow-xl
          "
        >
          ← Back To Home
        </Link>
      </div>
    </div>
  );
}