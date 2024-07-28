import logo from "../../assets/img/gateway_logo_branco.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar cabecalho d-flex justify-content-center">
        <div className="container row">
          <div className="col-6 d-flex justify-content-start">
            <a className="" href="/">
              <img
                src={logo}
                className="d-inline-block align-top logo"
                alt="gateway__"
              />
            </a>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              type="button"
              className="btn text-light border-0 btn-logar"
              data-bs-toggle="modal"
              data-bs-target="#modal-login"
            >
              <span>Entrar</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-logar"
              data-bs-toggle="modal"
              data-bs-target="#modal-login"
            >
              <span>Começar</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
