export const sidebarData = [
  { label: "Home", link: "/dashboard/home", icon: "home", access: "admin" },
  {
    label: "My Profile",
    link: "/dashboard/profile/my-profile",
    icon: "user",

    access: "user",
  },
  {
    label: "Admin Profile",
    link: "/dashboard/profile/admin-profile",
    icon: "user",

    access: "admin",
  },
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
    label: "Widgets",
    icon: "slide",
    access: "admin",
    sub_label: [
      {
        label: "Add New Banner",
        link: "/dashboard/ads/change-hero",
        access: "admin",
      },
      // {
      //   label: "Add New Headline",
      //   link: "/dashboard/ads/change-headline",
      //   access: "admin",
      // },
      {
        label: "Banner Ads List",
        link: "/dashboard/ads/hero-ads-list",
        access: "admin",
      },
      // {
      //   label: "Headline Ads List",
      //   link: "/dashboard/ads/headline-ads-list",
      //   access: "admin",
      // },
    ],
  },
  {
    label: "Users",
    icon: "users",
    access: "admin",
    sub_label: [
      {
        label: "Create User",
        link: "/dashboard/user/create-user",
        access: "admin",
      },
      {
        label: "Create Admin",
        link: "/dashboard/user/create-admin",
        access: "admin",
      },
      {
        label: "User List",
        link: "/dashboard/user/user-list",
        access: "admin",
      },
      {
        label: "Admin List",
        link: "/dashboard/user/admin-list",
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
        access: "anyone",
      },

      {
        label: "Payments List",
        link: "/dashboard/payment/payments-list",
        access: "anyone",
      },
    ],
  },
  {
    label: "Others",

    icon: "others",

    access: "admin",
    sub_label: [
      {
        label: "Change Password",
        link: "/dashboard/others/change-password",
        access: "admin",
      },
    ],
  },
];
