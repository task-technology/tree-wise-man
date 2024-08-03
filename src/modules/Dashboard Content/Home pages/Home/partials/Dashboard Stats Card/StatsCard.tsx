const StatsCard = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div
    className="bg-gradient-to-r from-blue-400 to-indigo-500
 text-white shadow-lg rounded-lg p-6 flex items-center"
  >
    {Icon && <Icon className="text-3xl mr-4" />}
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default StatsCard;
