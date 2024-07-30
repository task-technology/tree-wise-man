const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <h1
        className={`${className} text-center uppercase text-3xl font-bold py-2 border-b-2 border-primary`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
