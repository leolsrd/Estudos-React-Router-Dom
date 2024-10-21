// import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NameDetail = ({ name }) => {
  return (
    <div>
      <h2>Olá, {name}</h2>
    </div>
  );
};

NameDetail.propTypes = {
  name: PropTypes.string,
};

export default NameDetail;
