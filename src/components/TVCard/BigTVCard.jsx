import { ResultOfSearchingById } from "../../assets/utils/ResultOfSearchingById";
import "../../styles/Card.css";
import { Center } from "./Center";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { Bottom } from "./Bottom";

export const BigTVCard = ({ id }) => {
  const tv = ResultOfSearchingById(id);
  return (
    <>
      <div className="TVCard">
        <LeftSide tv={tv} />
        <Center tv={tv} />
        <RightSide tv={tv} />
      </div>
      <Bottom tv={tv} />
    </>
  );
};
