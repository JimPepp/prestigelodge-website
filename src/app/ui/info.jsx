'use client'

import { Fh2h3, Fparagraph } from "../modules/fonts";
import Image from 'next/image';

export default function Info(props) {
  let title = props.title;
  let paragraph = props.paragraph;
  let image= props.img;
  let alt = props.alt;
  let width = props.width;
  let height = props.height;
  let reverse = props.reverse;
  var rowValue;

  if (reverse)
    rowValue = "md:flex-row-reverse"
  else
    rowValue = "md:flex-row"

  return (
    <div className={`flex flex-col lg:hidden ${rowValue.valueOf()} items-center md:p-8 pt-8`}>
      <div className="justify-center text-center px-8 pb-8">
        <h5 className={`${Fh2h3.className} text-xl`}>{title}</h5>
        <p className={`${Fparagraph.className} text-base mt-5`}>{paragraph}
        </p>
      </div>
      <Image
          src={image}
          width={width}
          height={height}
          alt={alt}
          className="object-cover max-h-96 md:max-w-screen-md object-center"
        />
    </div>
  );
}