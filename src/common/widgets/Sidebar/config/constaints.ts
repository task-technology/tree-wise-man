export const sidebarData = [
  { label: "Home", link: "/dashboard", icon: "home" },

  {
    label: "Posts",
    icon: "posts",
    sub_label: [
      { label: "Create Post", link: "/dashboard/post/create-post" },
      { label: "Posts List", link: "/dashboard/post/posts-list" },
      { label: "Admin Posts List", link: "/dashboard/post/admin-posts-list" },
    ],
  },
  {
    label: "Users",
    icon: "users",
    sub_label: [
      { label: "Create User", link: "/dashboard/user/create-user" },
      { label: "User List", link: "/dashboard/user/user-list" },
    ],
  },
  {
    label: "Subscriptions List",
    link: "/dashboard/subscription/subscriptions-list",
    icon: "subscription",
  },
  {
    label: "Payments List",
    link: "/dashboard/payment/payments-list",
    icon: "paymentsList",
  },
  {
    label: "My Profile",
    link: "/dashboard/profile/my-profile",
    icon: "profile",
  },
];
