import { icons } from "@libs/Icons"

export const home_data = {
  //
  slides: [
    {
      id: 1,
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "Welcome to Our Website",
      title: "Discover Amazing Products",
      btnValue: "Shop Now",
      btnLink: "/shop",
      image:
        "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      logo: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "Explore Our Collection",
      title: "Find What You Love",
      btnValue: "Explore",
      btnLink: "/explore",
      image:
        "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      logo: "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "Contact Us Today",
      title: "We Are Here to Help",
      btnValue: "Contact Us",
      btnLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],

  search: {
    first_title: "Enter your zip code to find",
    sec_title: "a Tree Wise Man",
    description:
      "near you",
    button: {
      text: "GO",
      link: "/contact",
      label: "Enter your zip code",
      placeholder: "Enter Zip Code"
    },
  },
  frequently_asked_questions: [
    {
      id:1,
      question:"What are basic FAQ questions?",
      answer:"What is General FAQ? It is a collection of common questions and answers not specific to a product, feature, or service. They usually cover payment policies, how to contact customer support, and refund policies."
    },
    {
      id:2,
      question:"What does FAQ mean?",
      answer:"/ˌef eɪ ˈkjuː/, /fæk/ ​used in writing to mean ' frequently asked questions. ' (a list of questions and answers about a particular subject, especially one giving basic information for users of a website)"
    },
    {
      id:3,
      question:"What are general questions?",
      answer:"General questions are broad and do not require a specific answer. They are often used to gather general information about a subject. For example: What is the capital of France? Specific questions are more focused and require a specific answer."
    },
    {
      id:4,
      question:"How is 20 questions so smart?",
      answer:"The 20Q AI uses an artificial neural network to pick the questions and to guess. After the player has answered the twenty questions posed (sometimes fewer), 20Q makes a guess. If it is incorrect, it asks more questions, then guesses again."
    },
  ],
  testimonials:[
    {
      id:1,
      image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"John Doe",
      designation:"CEO, Tree Wise Man",
      description:"Tree Wise Man is a fantastic platform that has helped me create my own unique and beautiful treehouse. I am so grateful for the support and guidance I received."
    },{
      id:2,
      image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Jane Doe",
      designation:"CTO, Tree Wise Man",
      description:"Tree Wise Man has been a game-changer for my business. I have learned so much from the support and guidance I received from the team."
    },
    {
      id:3,
      image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Mark Doe",
      designation:"Product Manager, Tree Wise Man",
      description:"Tree Wise Man has been a life-changing experience for me. I have learned so much about creating products and services that make a difference in people's lives."
    },
    {
      id:4,
      image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Sarah Doe",
      designation:"Marketing Manager, Tree Wise Man",
      description:"Tree Wise Man has been a source of inspiration and motivation for me. I have learned so much about creating a strong and effective marketing strategy."
    }
  ]
}



export const how_we_work = {
  title:"Designed to perfectly fit to your lifestyle",
  description:"Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed.",
  steps:[
    {
      id:1,
      icon:icons.grid,
      title:"Apps and Notifications",
      description:"Called person are around county talked her esteem. Those fully these way nay thing seems."
    },
    {
      id:2,
      icon:icons.setting,
      title:"Customizable Watch Faces",
      description:"Called person are around county talked her esteem. Those fully these way nay thing seems."
    },
    {
      id:3,
      icon:icons.compass,
      title:"Built-in GPS",
      description:"Called person are around county talked her esteem. Those fully these way nay thing seems."
    },
    {
      id:4,
      icon:icons.barChart,
      title:"Third-Party Health Apps",
      description:"Called person are around county talked her esteem. Those fully these way nay thing seems."
    },
    {
      id:4,
      icon:icons.pieChart,
      title:"Activity Rings",
      description:"Called person are around county talked her esteem. Those fully these way nay thing seems."
    },
    {
      id:4,
      icon:icons.heart,
      title:"Heart Rate Sensor",
      description:"Called person are around county talked her esteem. Those fully these way nay thing seems."
    },

  ]
      
}