"use client";
import CommonTable from "@components/Common Table/CommonTable";
import { btnValues, data, tableHeader, tableLayout } from "./config/constant";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import TableStatus from "@components/TableStatus/TableStatus";
import Pagination from "@components/Pagination/Pagination";
import { useGetPostsQuery } from "../../../../redux/features/api/posts";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";

const PostsList = () => {
  const token = getFromLocalStorage(authKey);
  const { data: postData } = useGetPostsQuery({ token });
  console.log(postData);
  return (
    <div className="pt-10">
      <Container>
        <div className="w-1/4 pb-14">
          <SearchBar />
        </div>
        <section className="py-10 bg-solidWhite px-5">
          <div className="pb-5">
            <TableStatus btnValues={btnValues} status />
          </div>
          <CommonTable
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={postData?.data}
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
