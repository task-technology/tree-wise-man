"use client";
import CommonTable from "@components/Common Table/CommonTable";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import { WarningSwal } from "../../../../../shared/helpers/warningSwal";
import { keys, tableHeader, tableLayout } from "./config/constant";
import Pagination from "@components/Pagination/Pagination";
import {
  useDeleteHeadlineAdsMutation,
  useGetHeadlineAdsQuery,
} from "../../../../../redux/features/api/ads";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { authKey } from "@config/constants";
import { constructQuery } from "../../../../../shared/helpers/constructQuery";
import { getFromCookie } from "../../../../../shared/helpers/local_storage";
import { deletePhoto } from "@components/Photo Upload/helpers/handlePhotoDelete";
import { showSwal } from "../../../../../shared/helpers/SwalShower";

const HeadlineList = () => {
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

  const { data: postData, isLoading: postDataLoading } = useGetHeadlineAdsQuery(
    {
      token,
      query,
    }
  );
  const [postDelete, { isLoading: postDeleteLoading }] =
    useDeleteHeadlineAdsMutation();
  useEffect(() => {
    if (postData) {
      setTotalItems(postData?.meta.total);
      setLimit(postData?.meta.limit);
      setCurrentPage(postData?.meta?.page);
    }
  }, [postData]);

  const handleDelete = async (id: string) => {
    const singleData = postData?.data?.find((data: any) => data?.id === id);

    if (singleData?.image) {
      await deletePhoto(singleData?.image);
    }
    const result = await postDelete({ token, id });
    showSwal(result);
  };
  return (
    <div className="pt-10">
      <Container>
        <div className="pb-14 ">
          <SearchBar />
        </div>
        <section className="py-10 bg-solidWhite px-5 rounded-t-md">
          <div className="pb-5">
            <h5 className="font-semibold text-2xl ">Headline Ads List</h5>
          </div>
          <CommonTable
            deleteFn={(id: string) => WarningSwal(handleDelete, id)}
            deleteBtn
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={postData?.data}
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

export default HeadlineList;
