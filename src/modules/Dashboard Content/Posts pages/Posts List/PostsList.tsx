import CommonTable from "@components/Common Table/CommonTable";
import { data, tableHeader, tableLayout } from "./config/constant";
import Container from "@components/Container/Container";
import SearchBar from "@components/Searchbar/SearchBar";

const PostsList = () => {
  return (
    <div>
      <Container>
        <div className="w-1/3 py-10">
          <SearchBar />
        </div>
        <section className="py-10">
          <CommonTable
            dataLayout={tableLayout}
            headerData={tableHeader}
            itemData={data}
          />
        </section>
      </Container>
    </div>
  );
};

export default PostsList;
