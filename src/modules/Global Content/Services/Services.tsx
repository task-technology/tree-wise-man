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
import Error from "@components/Error/Error";
import ContactForm from "./Helpers/ContactForm/ContactForm";
import Pagination from "@components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import { keys } from "./config/constant";

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);

  const token = getFromCookie("accessToken");
  const searchParams: any = useSearchParams();
  const query = constructQuery({
    searchParams,
    limit,
    page: currentPage,
    keys,
  });
  const {
    data: serviceData,
    isLoading: serviceLoading,
    error,
  } = useGetPostsQuery({ query });

  useEffect(() => {
    if (serviceData) {
      setTotalItems(serviceData?.meta.total);
      setLimit(serviceData?.meta.limit);
      setCurrentPage(serviceData?.meta?.page);
    }
  }, [serviceData]);

  const [serviceClick] = useClickCountServiceMutation();

  if (error) {
    return <Error />;
  }
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col lg:flex-row mt-20 justify-center w-full px-2 md:pl-4">
      <div className="relative max-w-7xl w-full lg:w-9/12 flex flex-col items-center space-y-2 md:space-y-8 py-3 md:py-6">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
          Find Tree Wise Men Near Me
        </h2>
        <Form />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-5 pb-32 md:pb-28">
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
                  {result?.image ? (
                    <div className="flex-shrink-0 mx-auto md:mx-0 w-[180px] relative h-[180px]">
                      <Image
                        src={result?.image}
                        alt="Company Logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 180px"
                        priority
                        style={{ objectFit: "contain" }}
                        className="rounded-full bg-white border border-grayForBorder"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 mx-auto md:mx-0 w-[180px] relative h-[180px]">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvpnbsehd/image/upload/v1727698743/demo_logo_qdotoc.jpg"
                        }
                        alt="Company Logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 180px"
                        priority
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                  )}

                  <div className="md:flex-1 w-full">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2 pb-2">
                        <h4 className="text-lg sm:text-xl font-bold">
                          {result?.title}
                        </h4>

                        <p className="text-sm">
                          <strong>State: </strong>
                          {result?.state}{" "}
                          <abbr title="Zip Code" className="no-underline">
                            <span>({result?.zipCode})</span>
                          </abbr>
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {result?.urlLink && (
                          <span
                            className="text-internet hover:scale-110 text-xl cursor-pointer"
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
                            className="text-fb hover:scale-110 text-xl cursor-pointer"
                            aria-label="Facebook link"
                          >
                            {icons.fb}
                          </span>
                        )}
                        {result?.instagramLink && (
                          <span
                            onClick={() =>
                              handleSubmit({
                                serviceClick,
                                token,
                                url: result?.instagramLink,
                                id: result?.id,
                              })
                            }
                            className="text-instagram hover:scale-110 text-xl cursor-pointer"
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
                            className="hover:scale-110 text-xl cursor-pointer"
                            aria-label="Twitter link"
                          >
                            {icons.Twitter}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="py-2 text-sm md:text-base min-h-36">
                      <strong>About us:</strong> {result?.content}
                    </p>
                    <div className="flex  justify-between items-center  mt-2 md:mt-4">
                      <div className="flex items-center gap-2">
                        {result?.profileImage ? (
                          <Image
                            height={35}
                            width={35}
                            src={result?.profileImage}
                            alt="Author"
                            className="rounded-full"
                          />
                        ) : (
                          <span className="rounded-full text-base md:text-lg border border-grayForBorder p-2">
                            {icons?.user}
                          </span>
                        )}
                        <div>
                          <h3 className="font-semibold text-sm">
                            {result?.ownerName || result?.author?.name}
                          </h3>
                          <h3 className="text-xs">
                            {result?.ownerDesignation ||
                              result?.author?.designation}
                          </h3>
                        </div>
                      </div>
                      <div
                        onClick={() =>
                          handleSubmit({
                            serviceClick,
                            token,
                            url: `tel:${result?.contactNo}`,
                            id: result?.id,
                            tel: true,
                          })
                        }
                        aria-label="Contact author"
                      >
                        <div className="flex h-full items-center justify-center gap-2 hover:text-fb cursor-pointer">
                          <span className="text-xl pt-[3px]">
                            {icons?.call}
                          </span>
                          <span>{result?.contactNo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Card>
            ))
          ) : (
            <div className="text-center py-10 md:py-0 font-medium text-2xl col-span-2">
              {emptyData} Available
            </div>
          )}
        </div>
        <div className="absolute bottom-4 md:left-0  px-5">
          <Pagination
            className="shadow-none bg-none"
            currentPage={currentPage}
            limit={limit}
            setCurrentPage={setCurrentPage}
            totalItems={totalItems}
          />
        </div>
      </div>

      <section className="w-full lg:w-3/12  ">
        <div className="relative w-full min-h-60  md:h-1/5 bg-white shadow-inner p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588025.8527729951!2d-94.769030085425!3d38.97850405193589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafc85451c2529a8d%3A0xe74dfcf82864c1f5!2sThe%20Tree%20Wise%20Men!5e0!3m2!1sen!2sbd!4v1726142072069!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>
        <div className="h-4/5">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Services;
