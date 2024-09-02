
import dynamic from 'next/dynamic';
const PaymentsList = dynamic(() => import("@modules/Dashboard Content/Payments pages/Payments List/PaymentsList"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <PaymentsList />
    </div>
  );
};

export default page;
