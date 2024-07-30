"use client";
import { FC } from "react";
import Image from "next/image";
import { UserProfile } from "./config/type";
import { user } from "./config/constant";

const MyProfile: FC<UserProfile> = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="relative">
          <div className="h-48 bg-blue-500">
            {/* You can use a background image here if desired */}
          </div>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
            <Image
              src={user?.profilePicture}
              alt={`${user?.name}'s profile picture`}
              width={150}
              height={150}
              layout="cover"
              className="rounded-full  border-4 border-white"
            />
          </div>
        </div>
        <div className="text-center mt-32 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>
          <p className="text-lg text-gray-600">{user?.email}</p>
          <p className="text-sm text-gray-500 mt-2">{user?.bio}</p>
        </div>
        <div className="px-6 py-4 border-t">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-700">Phone Number</h3>
              <p className="text-gray-600">{user?.phoneNumber}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-700">Company</h3>
              <p className="text-gray-600">{user?.companyName}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-700">Designation</h3>
              <p className="text-gray-600">{user?.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
