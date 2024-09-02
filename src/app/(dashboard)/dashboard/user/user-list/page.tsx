
import dynamic from 'next/dynamic';
const UserList = dynamic(() => import("@modules/Dashboard Content/Users pages/User List/UserList"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export default page;
