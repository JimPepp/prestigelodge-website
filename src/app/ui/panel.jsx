import { Fh2h3, Fparagraph } from "../modules/fonts";

export default function Panel(props) {
  let title = props.title;
  let paragraph = props.paragraph;

  return (
    <>
      <h5 className={`${Fh2h3.className} panel-title overlay-txt`}>{title}</h5>
      <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
        {paragraph}
      </p>
    </>
  );
}
