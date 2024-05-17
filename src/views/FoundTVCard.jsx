import { useParams } from "react-router-dom";
import { dataFetcher } from "../assets/domain/apiClient";
import { useState, useEffect } from "react";
import "../styles/Card.css";
import { LeftSide } from "../components/FoundCard/LeftSide";
import { RightSide } from "../components/FoundCard/RightSide";
import { Center } from "../components/FoundCard/Center";
import { Bottom } from "../components/FoundCard/Bottom";

export const FoundTVCard = () => {
  const { id } = useParams();
  const [foundTVbyID, setFoundTVbyID] = useState(id);
  const [rating, setRating] = useState(0);
  const [casting, setCasting] = useState();

  useEffect(() => {
    const Fetcher = async () => {
      const data = await dataFetcher(`tv/${id}?`);
      const ratingData = await dataFetcher(`tv/${id}/content_ratings?`);
      const castData = await dataFetcher(`tv/${id}/aggregate_credits?`);
      setFoundTVbyID(data);
      setRating(ratingData?.results?.[15]?.rating);
      setCasting(castData?.cast?.slice(0, 15));
    };
    Fetcher();
  }, [id]);

  return (
    <>
      <div className="TVCard">
        <LeftSide foundTVbyID={foundTVbyID} />
        <Center foundTVbyID={foundTVbyID} rating={rating} />
        <RightSide foundTVbyID={foundTVbyID} />
      </div>
      <Bottom casting={casting} />
    </>
  );
};
