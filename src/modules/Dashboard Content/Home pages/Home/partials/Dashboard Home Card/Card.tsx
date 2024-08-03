const Card = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  children: any;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <div className="flex items-center mb-4">
      {Icon && <Icon className="text-2xl text-blue-500 mr-3" />}
      <h3 className="text-xl font-semibold border-b pb-2">{title}</h3>
    </div>
    {children}
  </div>
);

export default Card;
