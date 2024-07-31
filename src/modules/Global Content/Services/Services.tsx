"use client";
import Card from "@components/Card";
import Form from "./partials/Form/Form";
import Image from "next/image";
import Button from "@components/Button";
import { useGetPostsQuery } from "../../../redux/features/api/posts";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import Link from "next/link";

const Services = () => {
  const token = getFromLocalStorage("accessToken");
  const { data: serviceData, isLoading: serviceLoading } = useGetPostsQuery({
    token,
  });

  if (serviceLoading) {
    return <div>Loading</div>;
  }
  console.log(serviceData);
  return (
    <main className="bg-gray-100 min-h-screen flex mt-20 justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center space-y-8 px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Find Services by Zip Code and State
        </h2>
        <Form />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {serviceData?.data?.map((result: any, index: string) => (
            <Card
              href={`${result?.urlLink}`}
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 p-3"
            >
              <section className="flex gap-5 justify-between">
                <div className="">
                  <Image
                    height={180}
                    width={180}
                    src={result.image !== "/" ? result.image : result?.logo}
                    alt="Company Logo"
                    className="mr-4 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">
                      {result?.author?.name}
                    </h4>
                    <span className="text-sm">
                      <strong>Joining Date:</strong>{" "}
                      {result?.createdAt?.slice(0, 10)}
                    </span>
                    <p className="py-3">{result?.content}</p>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center gap-2 ">
                      <div>
                        <Image
                          height={35}
                          width={35}
                          src={result?.logo}
                          alt="Company Logo"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">
                          {result?.ownerName}
                        </h3>
                        <h3 className="text-xs">CEO</h3>
                      </div>
                    </div>
                    <div>
                      <Link href={`${result?.urlLink}`}>
                        <Button className="!py-1 !px-5">Contact Us</Button>
                      </Link>
                    </div>
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
