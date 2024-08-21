"use client";
import { FC } from "react";
import Image from "next/image";
import { UserProfile } from "./config/type";
import { getFromCookie } from "../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { getUserInfo } from "../../../../shared/auth/auth.service";
import { useGetSingleUserQuery } from "../../../../redux/features/api/users";
import LoadingSpinner from "@widgets/Loading Spinner/LoadingSpinner";
import { useGetSingleAdminQuery } from "../../../../redux/features/api/admin";

const MyProfile: FC<UserProfile> = () => {
  const token = getFromCookie(authKey);
  const user: any = getUserInfo();
  // Call both queries
  const { data: adminData, isLoading: adminLoading } = useGetSingleAdminQuery({
    token,
    id: user?.id,
  });
  const { data: userData, isLoading: userLoading } = useGetSingleUserQuery({
    token,
    id: user?.id,
  });

  // Determine which data to use based on user's role
  const isLoading = adminLoading || userLoading;
  const singleData = user?.role ? adminData : userData;

  if (isLoading) {
    return <LoadingSpinner fullHight />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="relative">
          <div className="h-48 bg-blue-500">
            {/* You can use a background image here if desired */}
          </div>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
            <Image
              src={singleData?.data?.profileImage}
              alt={`${singleData?.data?.name}'s profile picture`}
              width={150}
              height={150}
              priority
              className="rounded-full  border-4 border-white"
            />
          </div>
        </div>
        <div className="text-center mt-20 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {singleData?.data?.name}
          </h1>
          <p className="text-lg text-gray-600">{singleData?.data?.email}</p>
        </div>
        <div className="px-6 py-4 border-t">
          <div className="flex justify-between items-center pb-2 md:pb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Details
            </h2>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">
              Joining Date:
              <span className="font-normal pl-1">
                {singleData?.data?.createdAt?.slice(0, 10)}
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-700">Phone Number</h3>
              <p className="text-gray-600">{singleData?.data?.contactNo}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-700">Company</h3>
              <p className="text-gray-600">{singleData?.data?.company}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-700">Designation</h3>
              <p className="text-gray-600">{singleData?.data?.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
