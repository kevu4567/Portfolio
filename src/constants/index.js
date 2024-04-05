import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "OddsView Analytics LLC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Designed and implemented various subscription models to align with diverse user needs, improving user experience and service personalization.",
      "Collaborated in the development of a responsive React Native, ensuring a consistent and engaging user experience across various devices.",
      "Engineered a user profile page with image upload functionality, utilizing AWS S3 for secure storage and DynamoDB for data integration, enhancing content management.",
      "Deployed the web application to AWS EC2, achieving scalability and improved performance.",
    ],
  },
  {
    title: "Programming Intern",
    company_name: "IT Expert System, Inc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Automated routine tasks and enhanced operational efficiency by creating Linux shell scripts for system monitoring and network traffic analysis.",
      "Assembled and programmed a Freenove smart car using Raspberry Pi, integrating obstacle avoidance, face recognition and precision line-following features through Python programming.",
      " Incorporated an array of sensors, including heart rate monitoring, smoke detection, temperature, humidity, and GPS. These sensors collectively ensured driver safety and well-being by detecting abnormal heart pulses, smoke presence, maintaining an ideal cabin environment for cardiac patients, and providing emergency location services through API integration.",
    ],
  },
  {
    title: "IT Service Technician",
    company_name: "Insight Enterprises",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Performed upgrades and installed updates on the devices in the most efficient and cost-effective way to resolve the problem.",
      "Learned from IT professionals to meet the support needs of a fast-paced technology serving clients around the world.",
      "Ensured that each update and upgrade met the specific needs and standards expected by the client, tailoring each solution to the device’s unique requirements and testing functionality to the devices are ready to roll out.",
      "Used problem-solving skills for troubleshooting problems.",
    ],
  },
  {
    title: "Sales Associate",
    company_name: "InMotion Entertainment Group, LLC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2021 - Jul 2022",
    points: [
      "Greeted customers & educate them to ensure they get the appropriate product selection and satisfaction.",
      "Successfully achieved sales exceeding $250K in a year with support from the manager.",
      "Maintained a professional display and presentation of products to enhance the shopping experience.",
      "Demonstrated strong product knowledge to assist customers with inquiries and suggest complementary items.",
      "Provided courteous and tactful customer service to drive customer loyalty and repeat business.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our app 'EasyCare', but Kevin proved me wrong.",
    name: "Dhruv Patel",
    designation: "SWE",
    company: "Caterpillar",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    testimonial:
      "I've been looking for a web developer who truly cares about their clients' success.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Kevin is an amazing developer! An asset to any team.",
    name: "Jil Patel",
    designation: "SWE",
    company: "Motorola Solutions",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

const projects = [
  {
    name: "Hospital Vaccination Database System Development",
    description:
      "Developed a hospital vaccination database system using React backend, Vite frontend, streamlining admin operations, and enhancing patient experience through easy registration and real-time vaccine tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "Sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kevu4567/Hospital-management",
  },
  {
    name: "Easy Care",
    description:
      "Developed 'EasyCare', a user-centric software interface focused on simplicity, usability, learnability, and efficiency using HTML, CSS, and React, through collaborative problem-solving and iterative refinements to enhance user experience. Emphasized responsive design and continuous improvement, guided by core design principles, to achieve a seamless and efficient interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kevu4567/EasyCare",
  },
//  {
 //   name: "Trip Guide (**In Progress)",
 //   description:
 //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
 //   tags: [
 //     {
  //      name: "nextjs",
  //      color: "blue-text-gradient",
  //    },
   //   {
   //     name: "supabase",
   //     color: "green-text-gradient",
   //   },
   //   {
   //     name: "css",
   //     color: "pink-text-gradient",
   //   },
  //  ],
  //  image: tripguide,
  //  source_code_link: "https://github.com/",
 // },
];

export { services, technologies, experiences, testimonials, projects };
