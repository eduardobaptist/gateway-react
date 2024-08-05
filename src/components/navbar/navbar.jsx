import logo from "../../assets/img/gateway_logo_branco.png";
import "./navbar.css";

const Navbar = ({children}) => {
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
          {children}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
