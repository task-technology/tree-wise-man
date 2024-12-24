"use client";
import { authKey } from "@config/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getFromCookie } from "../../../../../shared/helpers/local_storage";
import { constructQuery } from "../../../../../shared/helpers/constructQuery";
import { keys, tableHeader, tableLayout } from "./config/constant";

import { deletePhoto } from "@components/Photo Upload/helpers/handlePhotoDelete";
import { showSwal } from "../../../../../shared/helpers/SwalShower";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import CommonTable from "@components/Common Table/CommonTable";
import { WarningSwal } from "../../../../../shared/helpers/warningSwal";
import Pagination from "@components/Pagination/Pagination";
import {
  useDeleteHeroAdsMutation,
  useGetHeroAdsQuery,
} from "../../../../../redux/features/api/ads";

const HeroList = () => {
  const token = getFromCookie(authKey);

  const { data: postData, isLoading: postDataLoading } = useGetHeroAdsQuery({
    token,
  });
  const [postDelete, { isLoading: postDeleteLoading }] =
    useDeleteHeroAdsMutation();

  const handleDelete = async (id: string) => {
    const singleData = postData?.data?.find((data: any) => data?.id === id);

    if (singleData?.image) {
      await deletePhoto(singleData?.image);
    }
    if (singleData?.banner) {
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
            <h5 className="font-semibold text-2xl ">Hero Ads List</h5>
          </div>
          <CommonTable
            deleteFn={(id: string) => WarningSwal(handleDelete, id)}
            deleteBtn
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={postData?.data}
            loading={postDataLoading || postDeleteLoading}
          />
        </section>
      </Container>
    </div>
  );
};

export default HeroList;
