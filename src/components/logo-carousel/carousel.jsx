import bruning from "../../assets/img/bruning-logo.png";
import fockink from "../../assets/img/fockink-logo.png";
import tromink from "../../assets/img/tromink-logo.png";
import cotripal from "../../assets/img/cotripal-logo.png";
import kepler from "../../assets/img/kepler-weber-logo.png";
import saur from "../../assets/img/saur-logo.png";
import prefeitura from "../../assets/img/prefeitura-panambi-logo.png";
import agregar from "../../assets/img/agregar-logo.png";
import aci from "../../assets/img/aci-logo.png";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <img src={bruning} alt="" />
        <img src={fockink} alt="" />
        <img src={tromink} alt="" />
        <img src={cotripal} alt="" />
        <img src={kepler} alt="" />
        <img src={saur} alt="" />
        <img src={prefeitura} alt="" />
        <img src={agregar} alt="" />
        <img src={aci} alt="" />
      </div>
      <div className="slide-track">
        <img src={bruning} alt="" />
        <img src={fockink} alt="" />
        <img src={tromink} alt="" />
        <img src={cotripal} alt="" />
        <img src={kepler} alt="" />
        <img src={saur} alt="" />
        <img src={prefeitura} alt="" />
        <img src={agregar} alt="" />
        <img src={aci} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
