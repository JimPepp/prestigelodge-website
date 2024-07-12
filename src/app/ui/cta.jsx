import { Fh2h3 } from "../styles/fonts";

export default function CTA() {
  return (
    <>
      <div className="flex flex-col py-10 px-8 lg:px-[20%] 3xl:px-[35%] justify-center items-center">
        <h1 className={`${Fh2h3.className} text-center text-xl lg:text-2xl`}>
          Put your energy in running your business And we'll handle your
          marketing for you!
        </h1>
        <h1 className={`${Fh2h3.className} text-center text-xl lg:text-2xl`}>
          We're offering you a free marketing consultation!
        </h1>
        <p
          className={`${Fh2h3.className} sndbtn nav-item py-3 text-xl lg:text-2xl`}
        >
          <a href="/contactus">Contact us now!</a>
        </p>
      </div>
    </>
  );
}
