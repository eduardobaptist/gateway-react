import Lottie from "react-lottie";

const LottieAnimation = ({ lottie, width, height }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default LottieAnimation;
