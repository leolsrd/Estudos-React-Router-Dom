// import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NameDetail = ({ name }) => {
  // const { state } = useLocation();
  // const { idName } = state();

  return (
    <div>
      <h1>Olá, {name}</h1>
    </div>
  );
};

NameDetail.propTypes = {
  name: PropTypes.string,
};

export default NameDetail;
