const LoadingSpinner = ({ fullHight = false }: { fullHight?: boolean }) => {
  return (
    <div
      className={`${
        fullHight ? "min-h-screen" : "min-h-20"
      } flex justify-center items-center `}
    >
      <svg
        className="w-16 h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <linearGradient id="a9">
          <stop offset="0" stopColor="#0079C8" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#0079C8"></stop>
        </linearGradient>
        <circle
          fill="none"
          stroke="url(#a9)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray="0 44 0 44 0 44 0 44 0 360"
          cx="100"
          cy="100"
          r="70"
          style={{ transformOrigin: "center" }}
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="discrete"
            dur="2s"
            values="360;324;288;252;216;180;144;108;72;36"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
