import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NameDetail from "./NameDetail";

const Name = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  var [renderNameDetail, setRenderNameDetail] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Valor submetido: ${name}`);
    if (name === "") {
      setRenderNameDetail("");
      setRenderNameDetail(
        <div>
          <p>Nome não pode ser vazio</p>
        </div>
      );
      return navigate("/name");
    } else {
      setRenderNameDetail(<NameDetail name={name} />);
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
      <button type="submit">Enviar</button>
      <div className="nameDetail">{renderNameDetail}</div>
    </form>
  );
};

export default Name;
