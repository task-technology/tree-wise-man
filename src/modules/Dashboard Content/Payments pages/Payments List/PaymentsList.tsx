import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";
import TableStatus from "@components/TableStatus/TableStatus";
import { btnValues, data, tableHeader, tableLayout } from "./config/constant";
import CommonTable from "@components/Common Table/CommonTable";
import Pagination from "@components/Pagination/Pagination";

const PaymentsList = () => {
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
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={data}
          />
          <div className="fixed bottom-5  right-5">
            <Pagination />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default PaymentsList;
