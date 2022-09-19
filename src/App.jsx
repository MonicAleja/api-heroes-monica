import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./style.css";

function App() {
  const [heroe, setHeroes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/superheroes");
    const data = await response.json();
    setHeroes(data);
    console.log(data);
  };

  function ruta(e) {
    if (e == "Marvel Comics") {
      return "marvel.png";
    } else {
      return "dc.png";
    }
  }

  return (
    <>
      <Header />
     <section className="container">
        <div className="row">
        {heroe.map((heroe) => (
          <div className="card " key={heroe.id}>
            <div className="conimg">
              <img src={heroe.imagen} alt="imagen" />
            </div>
            <div className="card-body">
              <h5>{heroe.nombre}</h5>
              <p>{heroe.descripcion}</p>
            </div>
            <div className="imgdefault">
              <img src={"src/" + ruta(heroe.editorial)} />
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
   
  );
}

export default App;
