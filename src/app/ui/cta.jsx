import Image from "next/image";

export default function CTA({ displayImages, reverse }) {
  let hideImages = " hidden ";
  let showGrid = " ";
  let reversed = "ltr";

  if (displayImages) {
    hideImages = " ";
    showGrid = " grid grid-cols-1 gap-4 md:grid-cols-2 ";
  }

  if (reverse){
    reversed = "rtl"
  }

  return (
    <>
      <section>
        <div className="max-w-screen-3xl px-4">
          <div className={`${showGrid}`} dir={`${reversed}`}>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl text-text md:text-3xl">
                  Focus on what you do best
                </h2>

                <p className="text-text/90 sm:mt-4 text-xl lg:text-2xl sm:block">
                  Keep your focus on running your business. Handling marketing is
                  time consuming, let us handle it for you
                </p>

                <p className="text-text/90 sm:mt-4 text-xl lg:text-2xl sm:block">
                  Interested to learn more? Contact us now and we'll give you a
                  free marketing consultation
                </p>

                <div className="mt-4 md:mt-8">
                  <p className={`text-base lg:text-xl`}>
                    <a
                      href="/contactus"
                      className="mt-8 inline-block text-xl rounded border border-current px-8 py-3 font-medium text-text transition hover:scale-110 bg-amber-200 hover:shadow-xl focus:outline-none focus:ring active:text-amber-200"
                    >
                      Get In Touch
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${hideImages} grid grid-cols-2 gap-4`}>
              <Image
                width={500}
                height={500}
                alt=""
                src="/images/MeetingRoom.png"
                className="h-40 w-full object-cover sm:h-56 md:h-128"
              />

              <Image
                width={500}
                height={500}
                alt=""
                src="/images/restaurant-pexels.png"
                className="h-40 w-full object-cover sm:h-56 md:h-128"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
