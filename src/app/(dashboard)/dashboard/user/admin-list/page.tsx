import dynamic from 'next/dynamic';
const AdminList = dynamic(() => import("@modules/Dashboard Content/Users pages/Admin List/AdminList"), {
  ssr: false,
});
const page = () => {
  return (
    <div>
      <AdminList />
    </div>
  );
};

export default page;
