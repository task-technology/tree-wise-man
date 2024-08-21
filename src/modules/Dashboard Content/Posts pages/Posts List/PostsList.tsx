"use client";
import CommonTable from "@components/Common Table/CommonTable";
import { keys, tableHeader, tableLayout } from "./config/constant";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import Pagination from "@components/Pagination/Pagination";
import {
  useGetMyPostQuery,
  usePostDeleteMutation,
} from "../../../../redux/features/api/posts";
import { authKey } from "@config/constants";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import { WarningSwal } from "../../../../shared/helpers/warningSwal";
import { getFromCookie } from "../../../../shared/helpers/local_storage";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { deletePhoto } from "@components/Photo Upload/helpers/handlePhotoDelete";

const PostsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const searchParams: any = useSearchParams();
  const token = getFromCookie(authKey);
  const query = constructQuery({
    searchParams,
    limit,
    page: currentPage,
    keys,
  });

  const { data: postData, isLoading: postDataLoading } = useGetMyPostQuery({
    token,
    query,
  });
  const [postDelete, { isLoading: postDeleteLoading }] =
    usePostDeleteMutation();
  useEffect(() => {
    if (postData) {
      setTotalItems(postData?.meta.total);
      setLimit(postData?.meta.limit);
      setCurrentPage(postData?.meta?.page);
    }
  }, [postData]);

  const handleDelete = async (id: string) => {
    const singleData = postData?.data?.find((data: any) => data?.id === id);

    await deletePhoto(singleData?.image);
    const result = await postDelete({ token, id });
    showSwal(result);
  };

  return (
    <div className="pt-10">
      <Container>
        <div className="pb-14 ">
          <SearchBar showNotice />
        </div>
        <section className="py-10 bg-solidWhite px-5 rounded-t-md">
          <div className="pb-5">
            <h5 className="font-semibold text-2xl ">Post List</h5>
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
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              limit={limit}
              totalItems={totalItems}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default PostsList;
