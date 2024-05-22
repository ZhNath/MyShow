import { ResultOfSearchingById } from "../../assets/utils/ResultOfSearchingById";
import { Center } from "./Center";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { Bottom } from "./Bottom";

export const BigTVCard = ({ id }) => {
  const tv = ResultOfSearchingById(id);
  return (
    <>
      <div className="tvCard">
        <LeftSide tv={tv} />
        <Center tv={tv} />
        <RightSide tv={tv} />
      </div>
      <Bottom tv={tv} />
    </>
  );
};
