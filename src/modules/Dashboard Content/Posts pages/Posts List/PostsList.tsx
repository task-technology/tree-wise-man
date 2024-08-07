"use client";
import CommonTable from "@components/Common Table/CommonTable";
import { btnValues, tableHeader, tableLayout } from "./config/constant";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import TableStatus from "@components/TableStatus/TableStatus";
import Pagination from "@components/Pagination/Pagination";
import {
  useGetPostsQuery,
  usePostDeleteMutation,
} from "../../../../redux/features/api/posts";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import { WarningSwal } from "../../../../shared/helpers/warningSwal";

const PostsList = () => {
  const token = getFromLocalStorage(authKey);
  const { data: postData, isLoading: postDataLoading } = useGetPostsQuery({
    token,
  });
  const [postDelete, { isLoading: postDeleteLoading }] =
    usePostDeleteMutation();
  const handleDelete = async (id: string) => {
    const result = await postDelete({ token, id });
    showSwal(result);
    console.log(id);
  };
  console.log(postData);
  return (
    <div className="pt-10">
      <Container>
        <div className="w-full md:w-2/4 lg:w-1/4  pb-14 ">
          <SearchBar />
        </div>
        <section className="py-10 bg-solidWhite px-5">
          <div className="pb-5">
            <TableStatus btnValues={btnValues} status />
          </div>
          <CommonTable
            deleteFn={(id: string) => WarningSwal(handleDelete, id)}
            deleteBtn
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={postData?.data}
            editPageLink="/dashboard/post/post-edit"
            loading={postDataLoading || postDeleteLoading}
          />
          <div className="fixed bottom-5  right-5">
            <Pagination />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default PostsList;
