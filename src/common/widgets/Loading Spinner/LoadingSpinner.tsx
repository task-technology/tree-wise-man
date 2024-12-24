const LoadingSpinner = ({
  fullHight = false,
  className,
}: {
  fullHight?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`${className} ${
        fullHight ? "min-h-screen" : "min-h-20"
      } flex justify-center items-center `}
    >
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default LoadingSpinner;
