import LottieAnimation from "../../components/lottie-animation/lottie";
import highfive from "../../animations/high-five.json";
import Navbar from "../../components/navbar/navbar";
import Carousel from "../../components/logo-carousel/carousel";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />

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
