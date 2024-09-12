import { icons } from "@libs/Icons";

export const home_data = {
  //
  slides: [
    {
      id: 1,
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724228008/cedric-streit-H7qMwOxf6Z8-unsplash_s0nskr.jpg",
      headline: "Welcome to Our Website",
      title: "Discover Amazing Products",
      btnValue: "Shop Now",
      btnLink: "/shop",
      image:
        "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724227680/heber-davis-5vKQOaAL3IQ-unsplash_kuolww.jpg",
    },
    {
      id: 2,
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724228009/krish-parmar-QsnLLIHwY8Y-unsplash_vn6ugg.jpg",
      headline: "Explore Our Collection",
      title: "Find What You Love",
      btnValue: "Explore",
      btnLink: "/explore",
      image:
        "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724227680/dan-edwards-SId-lmFXSDU-unsplash_aqa6r8.jpg",
    },
    {
      id: 3,
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724228047/chris-kursikowski-ze5wHM9kplc-unsplash_t2elhd.jpg",
      headline: "Contact Us Today",
      title: "We Are Here to Help",
      btnValue: "Contact Us",
      btnLink: "/contact",
      image:
        "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724227682/collab-media-4qidjSH-9x0-unsplash_d3njpn.jpg",
    },
  ],

  search: {
    first_title: "Ready to Find",
    sec_title: "TREE WISE MEN",
    description: "Near You?",
    button: {
      text: "GO",
      link: "/contact",
      label: "Search by state or zip code",
      placeholder: "Enter Zip Code",
    },
  },
  frequently_asked_questions: [
    {
      id: 1,
      question: "What are basic FAQ questions?",
      answer:
        "What is General FAQ? It is a collection of common questions and answers not specific to a product, feature, or service. They usually cover payment policies, how to contact customer support, and refund policies.",
    },
    {
      id: 2,
      question: "What does FAQ mean?",
      answer:
        "/ˌef eɪ ˈkjuː/, /fæk/ ​used in writing to mean ' frequently asked questions. ' (a list of questions and answers about a particular subject, especially one giving basic information for users of a website)",
    },
    {
      id: 3,
      question: "What are general questions?",
      answer:
        "General questions are broad and do not require a specific answer. They are often used to gather general information about a subject. For example: What is the capital of France? Specific questions are more focused and require a specific answer.",
    },
    {
      id: 4,
      question: "How is 20 questions so smart?",
      answer:
        "The 20Q AI uses an artificial neural network to pick the questions and to guess. After the player has answered the twenty questions posed (sometimes fewer), 20Q makes a guess. If it is incorrect, it asks more questions, then guesses again.",
    },
  ],
  testimonials: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724229857/foto-sushi-6anudmpILw4-unsplash_ikkoon.jpg",
      name: "John Doe",
      designation: "CEO, Tree Wise Man",
      description:
        "Tree Wise Man is a fantastic platform that has helped me create my own unique and beautiful treehouse. I am so grateful for the support and guidance I received.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724229857/foto-sushi-6anudmpILw4-unsplash_ikkoon.jpg",
      name: "John Doe",
      designation: "CEO, Tree Wise Man",
      description:
        "Tree Wise Man is a fantastic platform that has helped me create my own unique and beautiful treehouse. I am so grateful for the support and guidance I received.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724229857/foto-sushi-6anudmpILw4-unsplash_ikkoon.jpg",
      name: "John Doe",
      designation: "CEO, Tree Wise Man",
      description:
        "Tree Wise Man is a fantastic platform that has helped me create my own unique and beautiful treehouse. I am so grateful for the support and guidance I received.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724229857/foto-sushi-6anudmpILw4-unsplash_ikkoon.jpg",
      name: "John Doe",
      designation: "CEO, Tree Wise Man",
      description:
        "Tree Wise Man is a fantastic platform that has helped me create my own unique and beautiful treehouse. I am so grateful for the support and guidance I received.",
    },
  ],
};

export const how_we_work = {
  title:
    "A professional tree company can help you care for your trees throughout the year so that they are less likely to be impacted by severe storms. Arborists can inspect your trees for conditions that could predispose your trees to fall or break.",
  description:
    "Expertly performed tree care will keep your trees looking beautiful, complete, and healthy. Periodic tree trimming and pruning will help keep your trees vibrant by removing dead and dying branches and encouraging new growth while controlling tree size. Regular tree care can also reduce hazards such as falling limbs or low-hanging branches and make trees more storm-resistant.",
  steps: [
    {
      id: 1,
      icon: icons.treesRoot,
      title: "Root Aeration",
      description:
        "Did you know that trees need oxygen? Yes, trees do need oxygen, just like other living organisms, to process the food they create through photosynthesis; they use oxygen for cellular respiration to break down sugars and release energy for growth, although they produce significantly more oxygen than they consume through the process of photosynthesis. Root aeration helps trees grow and stay healthy by loosening compacted soil around their roots.                          ",
    },
    {
      id: 2,
      icon: icons.chainsaw,
      title: "Land Clearing",
      description:
        "Are you building a new home or need some property cleared out? Qualified arborists can help you with an in-depth walk through and analysis. Together, they will give you the best course of action and a step-by-step process on how the project will be performed. Also, your local Arborist will help you to address any government concerns regarding permits, etc.",
    },
    {
      id: 3,
      icon: icons.assessment,
      title: "Assessments",
      description:
        "Tree assessments are the first step in determining if your trees can be saved. If you are concerned about a dead, dangerous, or diseased tree, the highly-qualified tree specialists will discuss your options and costs up-front, whether it be the cost of tree removal, the cost for stump grinding, or any other services. ",
    },
    {
      id: 4,
      icon: icons.fallingTree,
      title: "Tree Removal",
      description:
        "The goal is always to save a tree, but if a damaged tree is threatening to fall and compromise your residential or commercial property? These companies will be able to protect you and your loved ones using the latest and greatest technologies should your trees need to be removed.",
    },
    {
      id: 5,
      icon: icons.exclamation,
      title: "Emergencies",
      description:
        "Has a natural disaster recently impacted your area? Is a tree at risk of falling on your property? If you need emergency tree removal, one of these local companies can get out to you quickly and get the dangerous trees removed. ",
    },
    {
      id: 6,
      icon: icons.treeBranch,
      title: "Tree Pruning",
      description:
        "Are your tree branches too close to the house or affecting your curb appeal? Arborists can help you maintain a safe, beautiful, and well-maintained & manicured landscape by practicing proper pruning techniques.           ",
    },
    {
      id: 7,
      icon: icons.chemicalDrop,
      title: "Bio-Remediation",
      description:
        "Much like how the human body requires proper nutrients, your trees may be suffering due to poor soil conditions, such as the presence of contaminants, toxins, or other pollutants.",
    },
    {
      id: 8,
      icon: icons.regrowth,
      title: "Stump Grinding",
      description:
        "Stump grinding is a vital process to remove tree stumps and roots to prevent any future growth.                       ",
    },
  ],
};

export const aboutCompanyData = {
  title: "LOCAL CHRISTIAN-OWNED TREE SERVICES ARE READY TO SERVE YOUR NEEDS!",
  about: `Trees are a living legacy and a future investment in your residential  and commercial property. These Christian-Owned tree services have worked         with many of your neighbors for years, helping to care for their trees     
        and enhance the value of their homes and businesses. Arborists provide
        personalized care and expertise for every tree care need, understanding
        that trees represent an important and enjoyable part of your daily
        environment.
`,
};
