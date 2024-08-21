"use client";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import TableStatus from "@components/TableStatus/TableStatus";
import { btnValues, keys, tableHeader, tableLayout } from "./config/constant";
import CommonTable from "@components/Common Table/CommonTable";
import Pagination from "@components/Pagination/Pagination";
import {
  useGetPostsAdminQuery,
  usePostDeleteMutation,
} from "../../../../redux/features/api/posts";
import { authKey } from "@config/constants";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import { WarningSwal } from "../../../../shared/helpers/warningSwal";
import { getFromCookie } from "../../../../shared/helpers/local_storage";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import FilterSystem from "@components/Filter System/FilterSystem";
import { deletePhoto } from "@components/Photo Upload/helpers/handlePhotoDelete";

const AdminPostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const searchParams: any = useSearchParams();
  const query = constructQuery({
    searchParams,
    limit,
    page: currentPage,
    keys,
  });

  const token = getFromCookie(authKey);
  const { data: adminPostData, isLoading: adminPostLoading } =
    useGetPostsAdminQuery({ token, query });
  useEffect(() => {
    if (adminPostData) {
      setTotalItems(adminPostData?.meta.total);
      setLimit(adminPostData?.meta.limit);
      setCurrentPage(adminPostData?.meta?.page);
    }
  }, [adminPostData]);

  const [postDelete, { isLoading: postDeleteLoading }] =
    usePostDeleteMutation();

  const handleDelete = async (id: string) => {
    const singleData = adminPostData?.data?.find(
      (data: any) => data?.id === id
    );

    await deletePhoto(singleData?.image);
    const result = await postDelete({ token, id });
    showSwal(result);
  };

  return (
    <div className="pt-10">
      <Container>
        <div className="pb-14">
          <SearchBar />
        </div>
        <section className="py-10 bg-solidWhite px-5">
          <div className="pb-5 flex justify-between items-center w-full">
            <TableStatus btnValues={btnValues} status />
            <FilterSystem />
          </div>
          <CommonTable
            deleteFn={(id: string) => WarningSwal(handleDelete, id)}
            deleteBtn
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={adminPostData?.data}
            loading={adminPostLoading || postDeleteLoading}
            editPageLink="/dashboard/post/post-edit-by-admin"
          />
          <div className="fixed bottom-5  right-5">
            <Pagination
              currentPage={currentPage}
              limit={limit}
              setCurrentPage={setCurrentPage}
              totalItems={totalItems}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AdminPostList;
