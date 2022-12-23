import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Homeapi() {
  const [character, setCharacter] = React.useState({});
  React.useEffect(() => {
    getCharacter().then((data) => {
      setCharacter(data);
    });
  }, []);

  const getCharacter = async () => {
    const { data } = await axios.get("http://localhost:8888/movies");
    return data;
  };

  return (
    <>
      {character?.results?.map((char) => (
        <div>
          <img src={char.picture} alt={char.title} />
          <div>{char.name}</div>
        </div>
      ))}
    </>
  );
}

export default Homeapi;
