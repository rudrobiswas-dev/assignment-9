const Footer = () => {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-base-100
        border-t border-base-300
        transition-colors duration-500
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Glow 1 */}
        <div
          className="
            absolute top-0 left-0
            w-80 h-80
            bg-primary/20
            rounded-full
            blur-3xl
            animate-pulse
          "
        ></div>

        {/* Glow 2 */}
        <div
          className="
            absolute bottom-0 right-0
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
            [animation-duration:25s]
          "
        ></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Main Footer */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-20
          py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-14
          "
        >

          {/* Brand */}
          <div>
            {/* Logo */}
            <div
              className="
                inline-flex items-center gap-3
                mb-6
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-linear-to-r
                  from-primary
                  via-secondary
                  to-accent

                  flex items-center justify-center

                  text-white
                  text-2xl
                  font-black

                  shadow-2xl
                  animate-pulse
                "
              >
                M
              </div>

              <div>
                <h2
                  className="
                    text-3xl
                    font-black
                    text-base-content
                  "
                >
                  MediQueue
                </h2>

                <p className="text-base-content/60 text-sm">
                  Tutor Booking Platform
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                text-base-content/70
                leading-relaxed
                max-w-sm
              "
            >
              Learn smarter with expert tutors worldwide.
              Interactive online sessions, modern learning,
              and fast booking experience.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">

              <button
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-base-200
                  border border-base-300

                  flex items-center justify-center

                  hover:scale-110
                  hover:border-primary
                  hover:text-primary

                  transition-all duration-300
                "
              >
                🌐
              </button>

              <button
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-base-200
                  border border-base-300

                  flex items-center justify-center

                  hover:scale-110
                  hover:border-secondary
                  hover:text-secondary

                  transition-all duration-300
                "
              >
                📘
              </button>

              <button
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-base-200
                  border border-base-300

                  flex items-center justify-center

                  hover:scale-110
                  hover:border-accent
                  hover:text-accent

                  transition-all duration-300
                "
              >
                📸
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="
                text-xl
                font-black
                text-base-content
                mb-7
              "
            >
              Services
            </h3>

            <ul className="space-y-4">

              {[
                "Math Tutors",
                "Physics Tutors",
                "Online Sessions",
                "Programming Tutors",
                "Language Learning",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="
                      text-base-content/70
                      hover:text-primary

                      flex items-center gap-2

                      transition-all duration-300
                      hover:translate-x-1
                    "
                  >
                    <span className="text-primary">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="
                text-xl
                font-black
                text-base-content
                mb-7
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "Find Tutors",
                "Become Tutor",
                "About Us",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="
                      text-base-content/70
                      hover:text-secondary

                      flex items-center gap-2

                      transition-all duration-300
                      hover:translate-x-1
                    "
                  >
                    <span className="text-secondary">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="
                text-xl
                font-black
                text-base-content
                mb-7
              "
            >
              Contact
            </h3>

            <div className="space-y-5">

              <div
                className="
                  flex items-start gap-4
                  p-4
                  rounded-2xl
                  bg-base-200/60
                  backdrop-blur-xl
                  border border-base-300
                "
              >
                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-primary/20
                    flex items-center justify-center
                    text-xl
                  "
                >
                  📍
                </div>

                <div>
                  <h4 className="font-bold text-base-content">
                    Location
                  </h4>

                  <p className="text-base-content/70 text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-start gap-4
                  p-4
                  rounded-2xl
                  bg-base-200/60
                  backdrop-blur-xl
                  border border-base-300
                "
              >
                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-secondary/20
                    flex items-center justify-center
                    text-xl
                  "
                >
                  ✉️
                </div>

                <div>
                  <h4 className="font-bold text-base-content">
                    Email
                  </h4>

                  <p className="text-base-content/70 text-sm">
                    support@mediqueue.com
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-start gap-4
                  p-4
                  rounded-2xl
                  bg-base-200/60
                  backdrop-blur-xl
                  border border-base-300
                "
              >
                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-accent/20
                    flex items-center justify-center
                    text-xl
                  "
                >
                  📞
                </div>

                <div>
                  <h4 className="font-bold text-base-content">
                    Phone
                  </h4>

                  <p className="text-base-content/70 text-sm">
                    +880 1234-567890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-20
            pt-8
            border-t border-base-300

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-5
          "
        >
          <p className="text-base-content/60 text-sm">
            © 2026 MediQueue. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="
                text-base-content/60
                hover:text-primary
                text-sm
                transition
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-base-content/60
                hover:text-secondary
                text-sm
                transition
              "
            >
              Terms
            </a>

            <a
              href="#"
              className="
                text-base-content/60
                hover:text-accent
                text-sm
                transition
              "
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;