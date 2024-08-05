import LottieAnimation from "../../components/lottie-animation/lottie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import highfive from "../../animations/high-five.json";
import Navbar from "../../components/navbar/navbar";
import Carousel from "../../components/logo-carousel/carousel";
import Modal from "../../components/modal/modal";
import Input from "../../components/input/input";
import { useState } from "react";

import "./home.css";

const Home = () => {
  const [showModalEntrar, setModalEntrar] = useState(false);
  const [showModalComecar, setModalComecar] = useState(false);

  return (
    <>
      <Navbar>
        <div className="col-6 d-flex justify-content-end">
          <button
            type="button"
            className="btn text-light border-0 btn-logar"
            onClick={() => setModalEntrar(true)}
          >
            Entrar
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-logar"
            onClick={() => setModalComecar(true)}
          >
            Começar
          </button>
        </div>

        <Modal
          show={showModalEntrar}
          title="Entrar"
          onClose={() => setModalEntrar(false)}
          style={{ width: "500px" }}
        >
          <Input
            type={"text"}
            icon={<FontAwesomeIcon icon={faUser} />}
            placeHolder={"Login"}
            name={"login"}
          ></Input>
        </Modal>

        <Modal
          show={showModalComecar}
          title="Começar"
          onClose={() => setModalComecar(false)}
          style={{ width: "500px" }}
        >
          <Input
            type={"text"}
            icon={<FontAwesomeIcon icon={faUser} />}
            placeHolder={"Login"}
            name={"login"}
          ></Input>
        </Modal>
      </Navbar>

      <main>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-7 text-start d-flex align-items-center">
              <h1 id="home-title">
                ideias que transformam, parcerias que evoluem.
              </h1>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <LottieAnimation
                lottie={highfive}
                height={"auto"}
                width={"100%"}
              />
            </div>
          </div>
        </div>

        <Carousel />
      </main>
    </>
  );
};

export default Home;
