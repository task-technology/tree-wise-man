"use client";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import { keys, tableHeader, tableLayout } from "./config/constant";
import CommonTable from "@components/Common Table/CommonTable";
import Pagination from "@components/Pagination/Pagination";
import { useGetPaymentDataQuery } from "../../../../redux/features/api/payments";
import { getFromCookie } from "../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { constructQuery } from "../../../../shared/helpers/constructQuery";

const PaymentsList = () => {
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
  const { data: paymentData, isLoading } = useGetPaymentDataQuery({
    token,
    query,
  });
  console.log(paymentData);

  useEffect(() => {
    if (paymentData) {
      setTotalItems(paymentData?.meta.total);
      setLimit(paymentData?.meta.limit);
      setCurrentPage(paymentData?.meta?.page);
    }
  }, [paymentData]);

  return (
    <div className="pt-10">
      <Container>
        <div className="pb-14 ">
          <SearchBar />
        </div>
        <section className="py-10 bg-solidWhite px-5">
          <div className="pb-5">
            <h5 className="font-semibold text-2xl ">Payment List</h5>
          </div>
          <CommonTable
            loading={isLoading}
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={paymentData?.data}
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

export default PaymentsList;
