import { Fh1 } from "../modules/fonts";

export default function Footer() {
  return (
    <>
      <div className="flex flex-row py-0 justify-center items-center">
        <div className="w-[10%] lg:w-[15%] h-0.5 bg-text"></div>
        <h1
          className={`${Fh1.className} text-5xl lg:text-6xl mx-4 md:mx-6 lg:mx-10 text-center`}
        >
          Prestige Lodge
        </h1>
        <div className="w-[10%] lg:w-[15%] h-0.5 bg-text"></div>
      </div>
      <div className="flex flex-row justify-center">
        <h3
          className={`${Fh1.className} text-3xl lg:text-4xl text-secondary text-center`}
        >
          Elevating Hospitality and Dining
        </h3>
      </div>

      <div className="flex flex-col items-center py-5">
        <p className="text-2xl">Piraeus, Athens - Greece</p>
      </div>
      {/* <div className="flex flex-col items-center py-5">
        <p className=" text-secondary text-3xl">SITEMAP</p>
        <div className="w-[20%] md:w-[10%] lg:w-[10%] 3xl:max-w-[3%] h-0.5 bg-text"></div>
        <div className=" flex flex-col items-center text-2xl pt-4">
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="/services">
            Services
          </a>
          <a className="nav-item" href="/contactus">
            Contact us
          </a>
        </div>
      </div> */}
      <div className="flex flex-col items-center text-center py-5 text-2xl">
        <p>© 2024 Prestige Lodge. All rights reserved.</p>
      </div>
    </>
  );
}
