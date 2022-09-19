import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroApi from "../../api/HeroesApi";

const DcPages = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    obtenerHeroes();
  }, []);

  const obtenerHeroes = async () => {
    try {
      const response = await heroApi.get("/superheroes?tipo=heroes-dc");
      setHeroes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      
      <section className="container">
        <div className="row">
          {heroes.map((heroe) => (
            <div className="card " key={heroe.id}>
              <div className="conimg">
                <img src={heroe.imagen} alt={heroe.imagen} />
              </div>
              <div className="card-body">
                <h5>{heroe.nombre}</h5>
                <p>{heroe.descripcion.substring(0,100).concat("...")}</p>
                
                <Link to={`/heroes/${heroe.id}`}>
                 <button className="btn_perfil"            
                
                >Perfil</button>
                </Link>
               
              </div>
              <div className="imgdefault"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DcPages;
