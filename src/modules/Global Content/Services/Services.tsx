"use client";
import Card from "@components/Card";
import Form from "./partials/Form/Form";
import Image from "next/image";
import Button from "@components/Button";
import { useGetPostsQuery } from "../../../redux/features/api/posts";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import Link from "next/link";
import LoadingSpinner from "@widgets/Loading Spinner/LoadingSpinner";

const Services = () => {
  const token = getFromLocalStorage("accessToken");
  const { data: serviceData, isLoading: serviceLoading } = useGetPostsQuery({
    token,
  });

  if (serviceLoading) {
    return <LoadingSpinner fullHight />;
  }
  return (
    <main className="bg-gray-100 min-h-screen flex mt-20 justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center space-y-2 md:space-y-8 px-4 py-3  md:py-12">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
          Find Services by Zip Code and State
        </h2>
        <Form />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {serviceData?.data?.map((result: any, index: string) => (
            <Card
              href={`${result?.urlLink}`}
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 p-4 sm:p-5"
            >
              <section className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <Image
                    height={180}
                    width={180}
                    src={result.image !== "/" ? result.image : result?.logo}
                    alt="Company Logo"
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl font-bold">
                      {result?.author?.name}
                    </h4>
                    <span className="text-sm">
                      <strong>Joining Date:</strong>{" "}
                      {result?.createdAt?.slice(0, 10)}
                    </span>
                    <p className="py-2 text-sm sm:text-base">
                      {result?.content}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <Image
                        height={35}
                        width={35}
                        src={result?.logo}
                        alt="Company Logo"
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-sm">
                          {result?.ownerName}
                        </h3>
                        <h3 className="text-xs">CEO</h3>
                      </div>
                    </div>
                    <Link href={`${result?.urlLink}`}>
                      <Button className="mt-4 sm:mt-0 !py-1 !px-5 text-sm">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
