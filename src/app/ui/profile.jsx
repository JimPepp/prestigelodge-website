import Image from "next/image";

export default function Proflie({ name, info, img, left, email, tel }) {
  let reverse = " ";

  if (left) reverse = " ";
  else reverse = "-reverse";

  return (
    <>
      <div
        className={`flex flex-col-reverse lg:flex-row${reverse} justify-center items-center text-center py-5`}
      >
        <div className="p-10">
          <p className="text-xl lg:text-3xl">{name}</p>
          <p className="text-base lg:text-xl">{info}</p>
          <p className="text-base lg:text-xl">{email}</p>
        </div>
        <div className=" rounded-full">
          <Image
            src={img}
            width={1500}
            height={1000}
            className="rounded-full max-h-32 max-w-32 lg:max-h-64 lg:max-w-64 border-amber-200 border-t-amber-100 border-l-amber-100 borderbl border-4"
          />
        </div>
      </div>
    </>
  );
}
