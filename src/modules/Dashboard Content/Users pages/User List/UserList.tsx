"use client";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import TableStatus from "@components/TableStatus/TableStatus";
import { btnValues, tableHeader, tableLayout } from "./config/constant";
import CommonTable from "@components/Common Table/CommonTable";
import Pagination from "@components/Pagination/Pagination";
import {
  useGetUsersQuery,
  useUserDeleteMutation,
} from "../../../../redux/features/api/users";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import { WarningSwal } from "../../../../shared/helpers/warningSwal";

const UserList = () => {
  const token = getFromLocalStorage(authKey);
  const { data: userData, isLoading: userDataLoading } = useGetUsersQuery({
    token,
  });
  const [userDelete, { isLoading: userDeleteLoading }] =
    useUserDeleteMutation();

  const handleDelete = async (id: string) => {
    const result = await userDelete({ token, id });
    showSwal(result);
    console.log(id);
  };
  console.log(userData);
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
            itemData={userData?.data}
            loading={userDataLoading || userDeleteLoading}
          />
          <div className="fixed bottom-5  right-5">
            <Pagination />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default UserList;
