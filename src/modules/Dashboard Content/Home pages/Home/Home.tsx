"use client";
import React, { useEffect, useState } from "react";
import { getUserInfo, isLoggedIn } from "../../../../shared/auth/auth.service";

import { icons } from "@libs/Icons";
import StatsCard from "./partials/Dashboard Stats Card/StatsCard";
import LoadingSpinner from "@widgets/Loading Spinner/LoadingSpinner";
import { useGetAnalyticsQuery } from "../../../../redux/features/api/others";
import { getFromCookie } from "../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import CommonTable from "@components/Common Table/CommonTable";
import { useGetPostsAdminQuery } from "../../../../redux/features/api/posts";
import { tableHeader, tableLayout } from "./config/constant";

const Home = () => {
  const token = getFromCookie(authKey);
  const [user, setUser] = useState<any>(null);
  const { data: allData, isLoading } = useGetAnalyticsQuery({ token });
  const { data: adminPostData, isLoading: adminPostLoading } =
    useGetPostsAdminQuery({ token });
  useEffect(() => {
    const userInfo = getUserInfo();
    setUser(userInfo);
  }, []);

  if (!user || isLoading) {
    return <LoadingSpinner fullHight />;
  }
  return (
    <div className="p-5 bg-gray-100 min-h-screen ">
      <h2 className="text-4xl font-bold mb-8 mt-10  md:mt-0 md:ml-14 lg:ml-0">
        Welcome, {user?.name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Users"
          value={allData?.data?.totalUsers}
          icon={icons?.usersForDashboard}
        />
        <StatsCard
          title="Total Posts"
          value={allData?.data?.totalPosts}
          icon={icons?.dollarSignForDashboard}
        />
        <StatsCard
          title="Subscribed Users"
          value={allData?.data?.totalSubscribedUsers}
          icon={icons?.fileTextForDashboard}
        />
        <StatsCard
          title="Total Post Click"
          value={allData?.data?.totalPostClicks}
          icon={icons?.briefCaseForDashboard}
        />
      </div>
      <div>
        <CommonTable
          dataLayout={tableLayout}
          headerData={tableHeader}
          itemData={adminPostData?.data}
          loading={adminPostLoading}
        />
      </div>
    </div>
  );
};

export default Home;
