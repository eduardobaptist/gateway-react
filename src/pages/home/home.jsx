import LottieAnimation from "../../components/lottie-animation/lottie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faBuilding,
  faCircleInfo,
  faEnvelope,
  faPhone,
  faAlignLeft
} from "@fortawesome/free-solid-svg-icons";

import highfive from "../../animations/high-five.json";
import Navbar from "../../components/navbar/navbar";
import Carousel from "../../components/logo-carousel/carousel";
import Modal from "../../components/modal/modal";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useState } from "react";

import "./home.css";

const Home = () => {
  const [showModalEntrar, setModalEntrar] = useState(false);
  const [showModalComecar, setModalComecar] = useState(false);
  const [modeloCadastro, setModeloCadastro] = useState(1);

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
          <div className="m-3">
            <div className="mb-3">
              <Input
                type={"text"}
                icon={<FontAwesomeIcon icon={faUser} className="icon-color" />}
                placeHolder={"Login"}
                name={"login"}
                className="mb-3"
              ></Input>
            </div>
            
            <div className="mb-2">
              <Input
                type={"password"}
                icon={<FontAwesomeIcon icon={faLock} className="icon-color" />}
                placeHolder={"Senha"}
                name={"senha"}
                className="mb-3"
              ></Input>
            </div>

            <p>
              <a href="/" className="esqueci-senha">
                Esqueci minha senha
              </a>
            </p>

            <div className="d-block">
              <Button
                text={"Entrar"}
                width={"100%"}
                backgroundColor="var(--azul-agregar)"
                bootstrapCls={"btn text-white"}
                height={"50px"}
              ></Button>

              <div className="d-flex align-items-center text-center mb-2">
                <hr className="flex-grow-1" />
                <span className="px-2">OU</span>
                <hr className="flex-grow-1" />
              </div>

              <Button
                text={"Cadastre-se"}
                width={"100%"}
                backgroundColor="var(--verde-gateway)"
                bootstrapCls={"btn text-white"}
                height={"50px"}
                onClick={() => {
                  setModalEntrar(false);
                  setModalComecar(true);
                }}
              ></Button>
            </div>
          </div>
        </Modal>

        <Modal
          show={showModalComecar}
          title="Começar"
          onClose={() => setModalComecar(false)}
          style={{ width: "500px" }}
        >
          <div className="row">
            <div className="col d-flex justify-content-center btn-group btn-group-toggle m-3">
              <label
                className={`btn ${
                  modeloCadastro === 1
                    ? "switch-active text-white"
                    : "switch-inactive border-right-0"
                }`}
              >
                <input
                  type="radio"
                  name="empresa"
                  id="switch-empresa"
                  autocomplete="off"
                  onClick={() => setModeloCadastro(1)}
                ></input>
                Empresa
              </label>
              <label
                className={`btn ${
                  modeloCadastro === 2
                    ? "switch-active text-white"
                    : "switch-inactive border-left-0"
                }`}
              >
                <input
                  type="radio"
                  name="ict"
                  id="switch-ict"
                  autocomplete="off"
                  onClick={() => setModeloCadastro(2)}
                ></input>
                Instituição
              </label>
            </div>
          </div>
          <div className="m-3">
            {modeloCadastro === 1 ? (
              <div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <Input
                      type={"text"}
                      icon={
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="icon-color"
                        />
                      }
                      placeHolder={"Razão social"}
                      name={"razao"}
                    ></Input>
                  </div>

                  <div className="col-md-6 mb-3">
                    <Input
                      type={"text"}
                      icon={
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          className="icon-color"
                        />
                      }
                      placeHolder={"CNPJ"}
                      name={"CNPJ"}
                    ></Input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <Input
                      type={"email"}
                      icon={
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="icon-color"
                        />
                      }
                      placeHolder={"E-mail"}
                      name={"email"}
                    ></Input>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Input
                      type={"text"}
                      icon={
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="icon-color"
                        />
                      }
                      placeHolder={"Telefone"}
                      name={"telefone"}
                    ></Input>
                  </div>
                  <div className="col mb-3">
                    <Input
                      type={"text"}
                      icon={
                        <FontAwesomeIcon
                          icon={faAlignLeft}
                          className="icon-color"
                        />
                      }
                      placeHolder={"Breve descrição sobre a empresa"}
                      name={"descricao"}
                    ></Input>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
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
