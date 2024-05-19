import { useParams } from "react-router-dom";
import { BigTVCard } from "../components/TVCard/BigTVCard.jsx";
import "../styles/Card.css";

export const TVCard = () => {
  const { id } = useParams();
  return (
    <>
      <BigTVCard id={id} />
    </>
  );
};
