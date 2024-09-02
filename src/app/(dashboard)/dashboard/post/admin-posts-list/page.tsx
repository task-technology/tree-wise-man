import dynamic from 'next/dynamic';
const AdminPostList = dynamic(() => import("@modules/Dashboard Content/Posts pages/Admin Posts List/AdminPostList"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <AdminPostList />
    </div>
  );
};

export default page;
