import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import heroApi from "../../api/HeroesApi";

const HeroPage = () => {
  const [heroes, setHeroes] = useState([]);
  const { heroId } = useParams();

  useEffect(() => {
    obtenerHeroes();
  }, []);

  const obtenerHeroes = async () => {
    try {
      const response = await heroApi.get(`/superheroes/${heroId}`);
      setHeroes(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card " key={heroes.id}>
        <div className="conimg">
          <img src={heroes.imagen} alt="imagen" />
        </div>
        <div className="card-body">
          <h3>Nombre: </h3><p>{heroes.nombre}</p><br />
          <h3>Editorial: </h3><p>{heroes.editorial}</p><br />
          <h3>Estreno: </h3><p>{heroes.estreno}</p><br />
          <h3>Descripción: </h3><p>{heroes.descripcion}</p><br />
          <h3>Poderes: </h3><p>{heroes.poderes}</p><br />
        </div>
        <div className="imgdefault"></div>
      </div>
    </div>
  );
};

export default HeroPage;
