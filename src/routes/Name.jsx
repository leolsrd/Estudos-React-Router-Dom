import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NameDetail from "./NameDetail";

const Name = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Valor submetido: ${name}`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name === "") {
      return navigate("/name");
    } else {
      const retorno = (
        <div>
          <NameDetail name={name} />
        </div>
      );
      return retorno;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Name Page</h1>
      <label htmlFor="name">
        Digite seu nome:
        <br />
        <input type="text" onChange={handleChange} name="nome" value={name} />
      </label>
      <br />
      <br />
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
      {name.length >= 3 ? <NameDetail name={name} /> : ""}
    </form>
  );
};

export default Name;
