import React, { useEffect, useState } from "react";
import axios from "../axios";
import PizzaCard from "../components/PizzaCard";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("/pizzas")
      .then((res) => setPizzas(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Pizza Menu</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza._id} className="col-md-4">
            <PizzaCard pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
