import Card from "@components/Card";
import branchData from "@config/newtech_Branch_address.json";
const BranchCards = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-4 gap-5 px-2 mx-auto">
      {branchData &&
        branchData.map((branch) => {
          return (
            <Card
              href={branch.link}
              key={branch.id}
              className="border-4 !border-white max-w-[400px] flex justify-center items-center"
            >
              <div className="text-center text-white">
                <h2 className=" text-lg lg:text-2xl">{branch?.Branch_name}</h2>
                <address className="text-sm lg:text-base">
                  {branch?.address}
                </address>
                {branch?.tel && (
                  <p className="text-sm lg:text-base">
                    <span>Tel :</span>
                    <span> {branch?.tel}</span>
                  </p>
                )}
                {branch?.email && (
                  <p className="text-sm lg:text-base">
                    <span>E-mail :</span>
                    <span> {branch?.email}</span>
                  </p>
                )}
              </div>
            </Card>
          );
        })}
    </div>
  );
};

export default BranchCards;
