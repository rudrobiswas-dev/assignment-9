// export default function HomePage() {
//   return (
//     <div>
//       {/* Hero */}
//       <div className="hero min-h-[80vh] bg-base-200">
//         <div className="hero-content text-center">
//           <div>
//             <h1 className="text-5xl font-bold">
//               Book Expert Tutors Easily
//             </h1>

//             <p className="py-6 max-w-xl">
//               Find tutors based on subjects and schedule
//               online learning sessions smoothly.
//             </p>

//             <button className="btn btn-primary">
//               Explore Tutors
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tutors Section */}
//       <section className="py-16 px-5">
//         <h2 className="text-4xl font-bold text-center mb-10">
//           Available Tutors
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {[1,2,3,4,5,6].map((item) => (
//             <div
//               key={item}
//               className="card bg-base-100 shadow-xl"
//             >
//               <figure>
//                 <img
//                   src="https://i.ibb.co.com/x7P24fL/teacher.jpg"
//                   alt="Tutor"
//                   className="h-60 w-full object-cover"
//                 />
//               </figure>

//               <div className="card-body">
//                 <h2 className="card-title">
//                   John Doe
//                 </h2>

//                 <p>Mathematics Expert</p>

//                 <p>$20/hour</p>

//                 <button className="btn btn-primary">
//                   Book Session
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import tutors from "@/data/tutors.json";

export default function HomePage() {
  return (
    <div>
      <section
  className="
    relative overflow-hidden
    bg-base-100
    min-h-screen
    flex items-center
    py-20
    px-4 sm:px-6 lg:px-10 xl:px-20
    transition-colors duration-500
  "
>
  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    {/* Glow 1 */}
    <div
      className="
        absolute top-10 left-10
        w-72 h-72
        bg-primary/20
        rounded-full
        blur-3xl
        animate-pulse
      "
    ></div>

    {/* Glow 2 */}
    <div
      className="
        absolute bottom-10 right-10
        w-100 h-100
        bg-secondary/20
        rounded-full
        blur-3xl
        animate-pulse
      "
    ></div>

    {/* Glow 3 */}
    <div
      className="
        absolute top-1/2 left-1/2
        w-125 h-125
        bg-accent/10
        rounded-full
        blur-3xl
        -translate-x-1/2
        -translate-y-1/2
        animate-spin
        [animation-duration:20s]
      "
    ></div>

    {/* Grid */}
    <div className="absolute inset-0 opacity-10">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
            linear-linear(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-linear(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  </div>

  {/* Main Content */}
  <div
    className="
      relative z-10
      w-full
      max-w-7xl
      mx-auto

      flex
      flex-col-reverse
      lg:flex-row

      items-center
      justify-between

      gap-16 lg:gap-24
    "
  >

    {/* LEFT TEXT */}
    <div
      className="
        flex-1
        max-w-2xl
        text-center
        lg:text-left
      "
    >

      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          gap-2

          px-5 py-2.5
          rounded-full

          bg-base-200/60
          backdrop-blur-md

          border border-base-300

          text-base-content/70
          font-medium

          mb-7

          animate-pulse
        "
      >
        🚀 Best Online Learning Platform
      </div>

      {/* Heading */}
      <h1
        className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          xl:text-7xl

          font-black
          leading-tight

          text-base-content
        "
      >
        Find Your

        <span
          className="
            bg-linear-to-r
            from-primary
            via-secondary
            to-accent

            bg-clip-text
            text-transparent

            animate-pulse
          "
        >
          {" "}Perfect Tutor
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-7
          text-base
          sm:text-lg

          leading-relaxed

          text-base-content/70

          max-w-xl

          mx-auto
          lg:mx-0
        "
      >
        Learn faster with expert tutors from around the world.
        Book sessions instantly and improve your skills with
        modern interactive learning experiences.
      </p>

      {/* Buttons */}
      <div
        className="
          mt-10

          flex
          flex-col
          sm:flex-row

          items-center
          lg:items-start

          gap-5
        "
      >

        
        {/* Primary Button */}
        <Link href="/tutors">
          <button
            className="
              relative
              overflow-hidden
              px-8 py-4
              rounded-2xl
              bg-primary
              text-primary-content
              font-bold
              shadow-2xl
              hover:scale-105
              transition-all
              duration-300
              group
            "
          >
            {/* Shine */}
            <span
              className="
                absolute inset-0
                bg-white/20
                translate-x-full
                group-hover:translate-x-full
                transition-transform
                duration-1000
              "
            ></span>

            <span
              className="
                relative z-10
                flex items-center gap-2
              "
            >
              Explore Tutors

              <span
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                →
              </span>
            </span>
          </button>
        </Link>

        {/* Secondary Button */}
        <button
          className="
            px-8 py-4

            rounded-2xl

            border border-base-300

            text-base-content

            hover:bg-base-200

            hover:scale-105

            transition-all
            duration-300
          "
        >
          Watch
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div
      className="
        flex-1

        relative

        flex
        justify-center
        items-center
      "
    >

      {/* Glow Border */}
      <div
        className="
          absolute
          -inset-4

          rounded-[40px]

          bg-linear-to-r
          from-primary
          via-secondary
          to-accent

          blur-2xl
          opacity-60

          animate-pulse
        "
      ></div>

      {/* Image */}
      <div className="relative group">

        <Image
          src="/images/my-photos.png"
          alt="Hero Image"
          width={500}
          height={500}
          priority
          className="
            relative z-10

            w-70
            sm:w-87.5
            md:w-105
            lg:w-117.5

            h-auto

            rounded-[35px]

            object-cover

            border border-base-300

            shadow-2xl

            group-hover:scale-105
            group-hover:-rotate-1

            transition-all
            duration-500
          "
        />

        {/* Floating Card */}
        <div
          className="
            absolute

            -bottom-5
            left-1/2
            -translate-x-1/2

            lg:left-0
            lg:translate-x-0

            bg-base-200/70
            backdrop-blur-xl

            border border-base-300

            px-5 py-4

            rounded-2xl

            shadow-2xl

            animate-bounce
          "
        >
          <h3
            className="
              text-base-content
              font-black
              text-lg
            "
          >
            500+ Tutors
          </h3>

          <p
            className="
              text-base-content/70
              text-sm
            "
          >
            Trusted worldwide
          </p>
        </div>
      </div>
    </div>
  </div>
      </section>

      <section className="relative py-24 px-5 overflow-hidden bg-base-100 transition-colors duration-500">
    {/* Animated Background */}
    <div className="absolute inset-0">

      {/* Glow Effects */}
      <div className="
        absolute top-0 left-0
        w-96 h-96
        bg-primary/20
        rounded-full
        blur-3xl
        animate-pulse
      "></div>

      <div className="
        absolute bottom-0 right-0
        w-125 h-125
        bg-secondary/10
        rounded-full
        blur-3xl
        animate-pulse
        delay-1000
      "></div>

      <div className="
        absolute top-1/2 left-1/2
        w-100 h-100
        bg-accent/10
        rounded-full
        blur-3xl
        animate-bounce
      "></div>

      {/* Grid Effect */}
      <div
        className="
          absolute inset-0 opacity-10
          bg-[linear-linear(rgba(255,255,255,0.08)_1px,transparent_1px),
          linear-linear(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-size-[50px_50px]
        "
      ></div>

      {/* Overlay */}
      <div className="
        absolute inset-0
        bg-linear-to-b
        from-base-100
        via-base-200/40
        to-base-100
      "></div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-black
            bg-linear-to-r
            from-base-content
            via-base-content/70
            to-primary
            bg-clip-text
            text-transparent
          "
        >
          Available Tutors
        </h2>

        <p className="text-base-content/70 mt-4 text-lg">
          Learn from professional tutors
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          lg:gap-8
          max-w-7xl
          mx-auto
        "
      >
        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="
              group
              relative
              flex flex-col
              h-full
              overflow-hidden
              rounded-3xl
              bg-base-100/90
              backdrop-blur-xl
              border border-base-300
              shadow-xl
              hover:shadow-primary/20
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            {/* Image */}
            <div className="relative h-60 sm:h-64 md:h-72 overflow-hidden">

              <Image
                src={tutor.image}
                alt={tutor.name}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="
                absolute inset-0
                bg-linear-to-t
                from-black/80
                via-black/20
                to-transparent
              "></div>

              {/* Subject Badge */}
              <div className="
                absolute top-4 left-4
                px-4 py-2
                rounded-full
                bg-primary text-primary-content
                text-xs sm:text-sm
                font-bold
              ">
                {tutor.subject}
              </div>

              {/* Teaching Mode */}
              <div className="
                absolute top-4 right-4
                px-3 py-1
                rounded-full
                bg-base-100/80
                backdrop-blur-md
                text-xs
                font-semibold
                border border-base-300
              ">
                {tutor.teachingMode}
              </div>

              {/* Name */}
              <div className="absolute bottom-5 left-5">
                <h2 className="
                  text-2xl sm:text-3xl
                  font-black
                  text-white
                ">
                  {tutor.name}
                </h2>

                <p className="text-white/80 text-sm">
                  {tutor.institution}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-5">

              {/* Location + Experience */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-base-content/50">
                    Location
                  </p>

                  <h4 className="font-bold text-sm sm:text-base">
                    {tutor.location}
                  </h4>
                </div>

                <div className="text-right">
                  <p className="text-xs text-base-content/50">
                    Experience
                  </p>

                  <h4 className="font-bold text-primary">
                    {tutor.experience}
                  </h4>
                </div>
              </div>

              {/* Available Time */}
              <div className="
                rounded-2xl
                bg-base-200
                p-4
                border border-base-300
              ">
                <p className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-base-content/50
                  mb-1
                ">
                  Available Time
                </p>

                <h3 className="
                  font-bold
                  text-sm sm:text-base
                  leading-relaxed
                ">
                  {tutor.availableDays}
                </h3>

                <p className="text-primary font-semibold mt-1 text-sm">
                  {tutor.availableTime}
                </p>
              </div>

              {/* Session */}
              <div className="
                flex items-center justify-between
                rounded-2xl
                bg-base-200
                px-4 py-3
                border border-base-300
              ">
                <div>
                  <p className="text-xs text-base-content/50">
                    Session Start
                  </p>

                  <h4 className="font-bold text-sm">
                    {tutor.sessionStart}
                  </h4>
                </div>

                <div className="text-right">
                  <p className="text-xs text-base-content/50">
                    Total Slots
                  </p>

                  <h4 className="font-black text-secondary text-xl">
                    {tutor.totalSlot}
                  </h4>
                </div>
              </div>

              {/* Fee */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/50">
                    Hourly Fee
                  </p>

                  <h2 className="
                    text-2xl sm:text-3xl
                    font-black
                    text-primary
                  ">
                    {tutor.hourlyFee}
                  </h2>
                </div>

                <div className="
                  px-4 py-2
                  rounded-full
                  bg-success/20
                  text-success
                  border border-success/30
                  text-xs sm:text-sm
                  font-bold
                ">
                  Available
                </div>
              </div>

              {/* Button */}
              <Link href={`/booking/${tutor._id}`}>
                <button
                  className="
                    mt-auto
                    w-full
                    relative
                    overflow-hidden
                    py-3 sm:py-4
                    rounded-2xl
                    font-bold
                    text-primary-content
                    bg-linear-to-r
                    from-primary
                    via-secondary
                    to-accent
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    shadow-xl
                  "
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Session
                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
      </section>
  
      <section className="relative py-24 px-5 overflow-hidden bg-base-200 transition-colors duration-500">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="
            absolute top-10 left-10
            w-80 h-80
            bg-primary/20
            rounded-full
            blur-3xl
            animate-pulse
          "></div>

          <div className="
            absolute bottom-0 right-0
            w-96 h-96
            bg-secondary/20
            rounded-full
            blur-3xl
            animate-pulse
          "></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="
              text-4xl
              sm:text-5xl
              font-black
              text-base-content
            ">
              Why Students Choose Us
            </h2>

            <p className="
              mt-4
              text-lg
              text-base-content/70
              max-w-2xl
              mx-auto
            ">
              We provide modern interactive learning experiences
              designed to help students grow faster.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Expert Tutors",
                desc: "Learn from highly skilled and experienced tutors worldwide.",
                icon: "🎓",
              },
              {
                title: "Flexible Booking",
                desc: "Book sessions anytime according to your schedule.",
                icon: "📅",
              },
              {
                title: "Live Learning",
                desc: "Interactive online classes with real-time communication.",
                icon: "💻",
              },
              {
                title: "Affordable Price",
                desc: "Quality education at student-friendly pricing.",
                icon: "💰",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-base-100
                  border border-base-300
                  p-8
                  shadow-2xl
                  hover:-translate-y-3
                  hover:border-primary/40
                  transition-all
                  duration-500
                "
              >

                {/* Glow */}
                <div className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                ">
                  <div className="
                    absolute -inset-1
                    bg-linear-to-r
                    from-primary
                    via-secondary
                    to-accent
                    blur-2xl
                    opacity-20
                  "></div>
                </div>

                <div className="relative z-10">

                  <div className="
                    text-5xl
                    mb-6
                  ">
                    {item.icon}
                  </div>

                  <h3 className="
                    text-2xl
                    font-black
                    text-base-content
                    mb-4
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-base-content/70
                    leading-relaxed
                  ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5 overflow-hidden bg-base-200 transition-colors duration-500">

  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="
      absolute top-10 left-10
      w-80 h-80
      bg-primary/20
      rounded-full
      blur-3xl
      animate-pulse
    "></div>

    <div className="
      absolute bottom-0 right-0
      w-96 h-96
      bg-secondary/20
      rounded-full
      blur-3xl
      animate-pulse
    "></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="
        text-4xl
        sm:text-5xl
        font-black
        text-base-content
      ">
        What Makes Us Different
      </h2>

      <p className="
        mt-4
        text-lg
        text-base-content/70
        max-w-2xl
        mx-auto
      ">
        A smarter learning platform built for consistency, clarity,
        and real progress in every session.
      </p>
    </div>

    {/* Features */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Top Instructors",
          desc: "Connect with verified educators who guide you step-by-step.",
          icon: "🏆",
        },
        {
          title: "Easy Scheduling",
          desc: "Choose your own time and learn without disrupting your routine.",
          icon: "⏰",
        },
        {
          title: "Real-Time Classes",
          desc: "Engage in interactive lessons with instant feedback and support.",
          icon: "🚀",
        },
        {
          title: "Budget Friendly",
          desc: "High-quality education that stays affordable for everyone.",
          icon: "💡",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            bg-base-100
            border border-base-300
            p-8
            shadow-2xl
            hover:-translate-y-3
            hover:border-primary/40
            transition-all
            duration-500
          "
        >

          {/* Glow */}
          <div className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition duration-500
          ">
            <div className="
              absolute -inset-1
              bg-linear-to-r
              from-primary
              via-secondary
              to-accent
              blur-2xl
              opacity-20
            "></div>
          </div>

          <div className="relative z-10">

            <div className="text-5xl mb-6">
              {item.icon}
            </div>

            <h3 className="
              text-2xl
              font-black
              text-base-content
              mb-4
            ">
              {item.title}
            </h3>

            <p className="
              text-base-content/70
              leading-relaxed
            ">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
      </section>

    </div>
  );
}