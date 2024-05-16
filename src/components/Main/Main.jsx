import { IMG_URL } from "../../assets/server";
import { dataFetcher } from "../../assets/server";
import { useEffect, useState } from "react";

export const Main = () => {
  const [pop, setPop] = useState();

  useEffect(() => {
    const popular = async () => {
      const data = await dataFetcher("tv/popular?");
      setPop(data);
    };
    popular();
  }, []);

  return (
    pop &&
    pop.results &&
    pop.results.length > 0 && (
      <div
        style={{
          backgroundImage: `url(${IMG_URL}${pop.results[0].backdrop_path})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
        }}
      ></div>
    )
  );
};
