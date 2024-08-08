import React from "react";
import { getUserInfo, isLoggedIn } from "../../../../shared/auth/auth.service";

import { icons } from "@libs/Icons";
import StatsCard from "./partials/Dashboard Stats Card/StatsCard";
import Card from "./partials/Dashboard Home Card/Card";

const Home = () => {
  const user: any = getUserInfo();
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-8">Welcome, {user.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Users"
          value="1,234"
          icon={icons?.usersForDashboard}
        />
        <StatsCard
          title="Payments Processed"
          value="$12,345"
          icon={icons?.dollarSignForDashboard}
        />
        <StatsCard
          title="Active Subscriptions"
          value="123"
          icon={icons?.fileTextForDashboard}
        />
        <StatsCard
          title="Companies Registered"
          value="45"
          icon={icons?.briefCaseForDashboard}
        />
      </div>

      {user.role === "admin" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Payments List" icon={icons?.creditCardForDashboard}>
            {/* Replace with your actual payments list component */}
            <div className="text-gray-600">Payments data goes here...</div>
          </Card>
          <Card title="User List" icon={icons?.usersForDashboard}>
            {/* Replace with your actual user list component */}
            <div className="text-gray-600">Users data goes here...</div>
          </Card>
          <Card title="Subscription List" icon={icons?.fileTextForDashboard}>
            {/* Replace with your actual subscription list component */}
            <div className="text-gray-600">Subscriptions data goes here...</div>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Company Details" icon={icons?.briefcaseForDashboard}>
            {/* Replace with your actual company details component */}
            <div className="text-gray-600">
              Company details data goes here...
            </div>
          </Card>
          <Card title="Subscription Details" icon={icons?.fileTextForDashboard}>
            {/* Replace with your actual subscription details component */}
            <div className="text-gray-600">
              Subscription details data goes here...
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Home;
