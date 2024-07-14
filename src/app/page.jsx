import { Header, Intro, CTA, Footer } from "./ui/uiComponents";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />
      <Intro />
      <CTA />
      <div className="flex flex-col py-8 lg:px-[20%] xl:px-[35%] 3xl:px-[40%]">
        <div className="flex flex-col justify-center px-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-center pt-3">
            Marketing is important.
          </h1>
          <p className="text-center text-xl">
            Utilizing various marketing techniques is the best way to approach
            customers. It is another important task that requires a lot of
            effort and time...
          </p>
        </div>
        <div className="flex flex-col justify-center px-5 lg:pt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center pt-3">
            Another task to consider!
          </h1>
          <p className="text-center text-xl">
            Running a hospitality business has you fully occupied, with a lot of
            important tasks. You can relieve yourself from that stress by having
            somebody else handling that.
          </p>
        </div>
      </div>

      <section className="flex justify-center">
        <div className="max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 max-w-3xl gap-y-8 lg:items-center">
            <div className="mx-auto text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                How will you achieve your goals?
              </h2>

              <p className="mt-4 text-text text-xl">
                When it comes to marketing there are many approaches to reaching
                your goals. Focus on the many tasks already occupying your
                schedule. Let us handle your marketing for you, freeing you
                time!
              </p>

              <a
                href="/contactus"
                className="mt-8 inline-block text-xl rounded border border-current px-8 py-3 font-medium text-text transition hover:scale-110 bg-amber-200 hover:shadow-xl focus:outline-none focus:ring active:text-amber-200"
              >
                Get In Touch!
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-amber-100 p-4 shadow-sm hover:border-amber-200 hover:ring-1 hover:ring-amber-200 focus:outline-none focus:ring"
                href="/contactus"
              >
                <span className="flex justify-center  rounded-lg p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </span>

                <h2 className="mt-2 text-2xl text-center font-bold sm:text-3xl">
                  Websites
                </h2>

                <p className="text-center sm:mt-1 sm:block sm:text-xl sm:text-text opacity-85">
                  Completely tailored to your business.
                </p>
              </a>

              <a
                className="block rounded-xl border border-amber-100 p-4 shadow-sm hover:border-amber-200 hover:ring-1 hover:ring-amber-200 focus:outline-none focus:ring"
                href="/contactus"
              >
                <span className="flex justify-center rounded-lg p-3">
                  <svg
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 5V19.5H20M7.5 16L11.5 11.5L15.5 14L19.5 8.5"
                      stroke="#27201B"
                      strokeWidth="1"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-xl text-center font-bold sm:text-3xl">
                  Marketing
                </h2>

                <p className="text-center sm:mt-1 sm:block sm:text-xl sm:text-text opacity-85">
                  More attention, more customers!
                </p>
              </a>

              <a
                className="block rounded-xl border border-amber-100 p-4 shadow-sm hover:border-amber-200 hover:ring-1 hover:ring-amber-200 focus:outline-none focus:ring"
                href="/contactus"
              >
                <span className="flex justify-center rounded-lg p-3">
                  <svg
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#27201B"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </span>

                <h2 className="mt-2 text-xl text-center font-bold sm:text-3xl">
                  Online presence
                </h2>

                <p className="text-center sm:mt-1 sm:block sm:text-xl sm:text-text opacity-85">
                  Your social media and brand impact!
                </p>
              </a>

              <a
                className="block rounded-xl border border-amber-100 p-4 shadow-sm hover:border-amber-200 hover:ring-1 hover:ring-amber-200 focus:outline-none focus:ring"
                href="/contactus"
              >
                <span className="flex justify-center rounded-lg p-3">
                  <svg
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 14 15.5 17.5 12.5 20.5C9.5 17.5 6.5 14 6.5 10.5Z"
                      stroke="#27201B"
                      strokeWidth="1"
                    />
                    <path
                      d="M14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5Z"
                      stroke="#27201B"
                      strokeWidth="1"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-xl text-center font-bold sm:text-3xl">
                  Local
                </h2>

                <p className="text-center sm:mt-1 sm:block sm:text-xl sm:text-text opacity-85">
                  We're local and directly approachable.
                </p>
              </a>

              <a
                className="block rounded-xl border border-amber-100 p-4 shadow-sm hover:border-amber-200 hover:ring-1 hover:ring-amber-200 focus:outline-none focus:ring"
                href="/contactus"
              >
                <span className="flex justify-center rounded-lg p-3">
                  <svg
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#27201B"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>

                <h2 className="mt-2 text-xl text-center font-bold sm:text-3xl">
                  Result - Driven
                </h2>

                <p className="text-center sm:mt-1 sm:block sm:text-xl sm:text-text opacity-85">
                  Bringing you results is our sole priority!
                </p>
              </a>

              <a
                className="block rounded-xl border border-amber-100 p-4 shadow-sm hover:border-amber-200 hover:ring-1 hover:ring-amber-200 focus:outline-none focus:ring"
                href="/contactus"
              >
                <span className="flex justify-center rounded-lg p-3">
                  <svg
                    viewBox="0 0 25 25"
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9957 11.5C14.8197 10.912 11.9957 9 10.4957 9C8.9957 9 5.17825 11.7674 6 13C7 14.5 9.15134 11.7256 10.4957 12C11.8401 12.2744 13 13.5 13 14.5C13 15.5 11.8401 16.939 10.4957 16.5C9.15134 16.061 8.58665 14.3415 7.4957 14C6.21272 13.5984 5.05843 14.6168 5.5 15.5C5.94157 16.3832 7.10688 17.6006 8.4957 19C9.74229 20.2561 11.9957 21.5 14.9957 20C17.9957 18.5 18.5 16.2498 18.5 13C18.5 11.5 13.7332 5.36875 11.9957 4.5C10.9957 4 10 5 10.9957 6.5C11.614 7.43149 13.5 9.27705 14 10.3751M15.5 8C15.5 8 15.3707 7.5 14.9957 6C14.4957 4 15.9957 3.5 16.4957 4.5C17.1281 5.76491 18.2872 10.9147 18.4957 13"
                      stroke="#27201B"
                      strokeWidth="1"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-xl text-center font-bold sm:text-3xl">
                  Guarantee
                </h2>

                <p className="text-center sm:mt-1 sm:block sm:text-xl sm:text-text opacity-85">
                  You don't have to bear all the risk.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
