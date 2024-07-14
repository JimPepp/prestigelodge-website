'use client'
import Image from "next/image";
export default function Profile({ name, info, img, left, email }) {
  let reverse = "";

  if (left === true) reverse = "lg:flex-row";
  else reverse = "lg:flex-row-reverse";

  return (
    <>
      <div
        className={`flex flex-col-reverse ${reverse} justify-center items-center text-center py-5`}
      >
        <div className="p-10">
          <p className="text-3xl lg:text-4xl">{name}</p>
          <p className="text-xl lg:text-2xl">{info}</p>
          <p className="text-xl lg:text-2xl">{email}</p>
        </div>
        <div className=" rounded-full">
          <Image
            src={img} 
            width={1500}
            height={1000}
            className="rounded-full max-h-32 max-w-32 lg:max-h-64 lg:max-w-64 border-amber-200 border-t-amber-100 border-l-amber-100 borderbl border-4"
            alt={`A picture of ${name}`}
          />
        </div>
      </div>
    </>
  );
}
