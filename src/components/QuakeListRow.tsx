import { Quake } from "../redux/slices/quakesSlice";

// components
import { Info2Icon } from "./Icons";

interface SingleQuakeProps {
  quake: Quake;
}

function QuakeListRow({ quake }: SingleQuakeProps) {
  // get the integer value
  const magLevel = () => {
    let mag = parseInt(quake.magnitude, 10);
    return mag <= 0 ? 1 : mag;
  };
  return (
    <div className="item">
      <div className="magn" data-mag={magLevel()}>
        <div className="level">{quake.magnitude}</div>
      </div>

      <a className="quakeinfo" href={quake.link} target="_blank" title="Λεπτομέριες">
        <Info2Icon />
      </a>

      <div className="title">{quake.title}</div>

      <div className="details">
        <div className="date">
          <span>Ημερ/νία:</span>
          <span>{quake.date}</span>
        </div>

        <div className="date">
          <span>Ώρα:</span>
          <span>{quake.time}</span>
        </div>

        <div className="before">
          <span>{quake.timeago}</span>
        </div>
      </div>
    </div>
  );
}

export default QuakeListRow;
