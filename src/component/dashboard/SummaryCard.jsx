// eslint-disable-next-line react/prop-types
const SummaryCard = ({icon, value, description}) => {
  return (
    <div className="rounded-lg relative shadow-md m-6 w-full h-[8.3rem] bg-white-color flex justify-center items-center lg:w-1/4 lg:flex-row">
      <div className="absolute left-4 bg-orange-color bg-opacity-20 rounded-full text-orange-color text-2xl font-semibold w-16 h-16 flex justify-center items-center">
        {icon}
      </div>
      <div className="font-semibold text-right absolute right-4">
        <div className="text-neutral-800 text-lg">{value}</div>
        <div className="text-neutral-400">{description}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
