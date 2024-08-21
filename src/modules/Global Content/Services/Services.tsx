"use client";
import Card from "@components/Card";
import Form from "./partials/Form/Form";
import Image from "next/image";
import Button from "@components/Button";
import { useGetPostsQuery } from "../../../redux/features/api/posts";
import LoadingSpinner from "@widgets/Loading Spinner/LoadingSpinner";
import { getFromCookie } from "../../../shared/helpers/local_storage";
import { useClickCountServiceMutation } from "../../../redux/features/api/others";
import { handleSubmit } from "./Helpers/handleServiceCount";
import { icons } from "@libs/Icons";
import { useSearchParams } from "next/navigation";
import { emptyData } from "@config/constants";

const Services = () => {
  const token = getFromCookie("accessToken");
  const queryParams = useSearchParams();
  const query = queryParams?.get("searchTerm") || "";
  const {
    data: serviceData,
    isLoading: serviceLoading,
    error,
  } = useGetPostsQuery({
    query,
  });

  const [serviceClick] = useClickCountServiceMutation();

  if (error) {
    return <div>Error loading services</div>; // Simple error handling
  }

  return (
    <main className="bg-gray-100 min-h-screen flex mt-20 justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center space-y-2 md:space-y-8 px-4 py-3 md:py-6">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
          Find Services by Zip Code and State
        </h2>
        <Form />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {serviceLoading ? (
            <div className="col-span-2 w-full">
              <LoadingSpinner />
            </div>
          ) : serviceData?.data?.length > 0 ? (
            serviceData?.data?.map((result: any, index: number) => (
              <Card
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 p-4 sm:p-5"
              >
                <section className="flex flex-col items-center sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mx-auto md:mx-0 w-[180px] relative h-[180px]">
                    <Image
                      src={result?.image}
                      alt="Company Logo"
                      fill
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 180px"
                      priority
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2 pb-2">
                        <h4 className="text-lg sm:text-xl font-bold">
                          {result?.title}
                        </h4>
                        <span className="text-sm">
                          <strong>Joining Date:</strong>{" "}
                          {result?.createdAt?.slice(0, 10)}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {result?.urlLink && (
                          <span
                            className="hover:scale-110 text-xl"
                            onClick={() =>
                              handleSubmit({
                                serviceClick,
                                token,
                                url: result?.urlLink,
                                id: result?.id,
                              })
                            }
                            aria-label="Open link"
                          >
                            {icons.earth}
                          </span>
                        )}
                        {result?.facebookLink && (
                          <span
                            onClick={() =>
                              handleSubmit({
                                serviceClick,
                                token,
                                url: result?.facebookLink,
                                id: result?.id,
                              })
                            }
                            className="text-fb hover:scale-110 text-xl"
                            aria-label="Facebook link"
                          >
                            {icons.fb}
                          </span>
                        )}
                        {result?.instaLink && (
                          <span
                            onClick={() =>
                              handleSubmit({
                                serviceClick,
                                token,
                                url: result?.instaLink,
                                id: result?.id,
                              })
                            }
                            className="hover:scale-110 text-xl"
                            aria-label="Instagram link"
                          >
                            {icons.Instagram}
                          </span>
                        )}
                        {result?.twitterLink && (
                          <span
                            onClick={() =>
                              handleSubmit({
                                serviceClick,
                                token,
                                url: result?.twitterLink,
                                id: result?.id,
                              })
                            }
                            className="hover:scale-110 text-xl"
                            aria-label="Twitter link"
                          >
                            {icons.Twitter}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="py-2 text-sm sm:text-base min-h-28">
                      <strong>About us:</strong> {result?.content}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                      <div className="flex items-center gap-2">
                        <Image
                          height={35}
                          width={35}
                          src={result?.author?.profileImage}
                          alt="Author"
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-sm">
                            {result?.author?.name}
                          </h3>
                          <h3 className="text-xs">
                            {result?.author?.designation}
                          </h3>
                        </div>
                      </div>
                      <span
                        onClick={() =>
                          handleSubmit({
                            serviceClick,
                            token,
                            url: `tel:${result?.author?.contactNo}`,
                            id: result?.id,
                            tel: true,
                          })
                        }
                        aria-label="Contact author"
                      >
                        <Button className="mt-4 sm:mt-0 !py-1 !px-5 !text-sm hover:scale-110">
                          Contact Us
                        </Button>
                      </span>
                    </div>
                  </div>
                </section>
              </Card>
            ))
          ) : (
            <div className="text-center font-medium text-2xl col-span-2">
              {emptyData} Available
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Services;
