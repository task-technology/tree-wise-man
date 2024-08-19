export const sidebarData = [
  { label: "Home", link: "/dashboard", icon: "home", access: "anyone" },

  {
    label: "Posts",
    icon: "posts",
    access: "anyone",
    sub_label: [
      {
        label: "Create Post",
        link: "/dashboard/post/create-post",
        access: "anyone",
      },
      {
        label: "Posts List",
        link: "/dashboard/post/posts-list",
        access: "anyone",
      },
      {
        label: "Admin Posts List",
        link: "/dashboard/post/admin-posts-list",
        access: "admin",
      },
    ],
  },
  {
    label: "Users",
    icon: "users",
    access: "admin",
    sub_label: [
      {
        label: "Create Admin",
        link: "/dashboard/user/create-user",
        access: "admin",
      },
      {
        label: "Create User",
        link: "/dashboard/user/create-admin",
        access: "admin",
      },
      {
        label: "User List",
        link: "/dashboard/user/user-list",
        access: "admin",
      },
    ],
  },

  {
    label: "Payments",

    icon: "payment",

    access: "anyone",
    sub_label: [
      {
        label: "Create payment",
        link: "/dashboard/payment/first-payment",
        access: "admin",
      },
      {
        label: "Update Plan",
        link: "/dashboard/payment/payment-packages",
        access: "admin",
      },
      {
        label: "Payments List",
        link: "/dashboard/payment/payments-list",
        access: "admin",
      },
    ],
  },
  {
    label: "My Profile",
    link: "/dashboard/profile/my-profile",
    icon: "user",

    access: "anyone",
  },
];
