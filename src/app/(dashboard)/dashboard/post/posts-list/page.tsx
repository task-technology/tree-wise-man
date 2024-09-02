import dynamic from 'next/dynamic';
const PostsList = dynamic(() => import("@modules/Dashboard Content/Posts pages/Posts List/PostsList"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <PostsList />
    </div>
  );
};

export default page;
