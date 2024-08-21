"use client";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import { keys, tableHeader, tableLayout } from "./config/constant";
import CommonTable from "@components/Common Table/CommonTable";
import Pagination from "@components/Pagination/Pagination";
import { authKey } from "@config/constants";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import { WarningSwal } from "../../../../shared/helpers/warningSwal";
import { getFromCookie } from "../../../../shared/helpers/local_storage";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import { deletePhoto } from "@components/Photo Upload/helpers/handlePhotoDelete";
import {
  useAdminDeleteMutation,
  useGetAdminQuery,
} from "../../../../redux/features/api/admin";

const AdminList = () => {
  const token = getFromCookie(authKey);
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

  const { data: userData, isLoading: userDataLoading } = useGetAdminQuery({
    token,
    query,
  });
  useEffect(() => {
    if (userData) {
      setTotalItems(userData?.meta.total);
      setLimit(userData?.meta.limit);
      setCurrentPage(userData?.meta?.page);
    }
  }, [userData]);

  const [userDelete, { isLoading: userDeleteLoading }] =
    useAdminDeleteMutation();

  const handleDelete = async (id: string) => {
    const singleData = userData?.data?.find((data: any) => data?.id === id);

    await deletePhoto(singleData?.profileImage);

    const result = await userDelete({ token, id });
    showSwal(result);
  };
  return (
    <div className="pt-10">
      <Container>
        <div className="pb-14">
          <SearchBar />
        </div>
        <section className="py-10 bg-solidWhite px-5">
          <div className="pb-5">
            <h5 className="font-semibold text-2xl ">Admin List</h5>
          </div>
          {/* <div className="pb-5">
            <TableStatus btnValues={btnValues} status />
          </div> */}
          <CommonTable
            deleteFn={(id: string) => WarningSwal(handleDelete, id)}
            deleteBtn
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={userData?.data}
            loading={userDataLoading || userDeleteLoading}
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

export default AdminList;
