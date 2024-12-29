export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "GoShop - A Dry Fruit Selling website with admin Dashboard",
    desc: "This is a modern eCommerce application built with Next.js, leveraging server-side rendering and dynamic imports for optimal performance.",
    subdesc:
      "Next.js 14, Tailwind CSS, Stripe Payment Gateway, Firebase for Backend,Next-ui, material-ui, a Rich text Editor, swr-store for real-time data synchronization, framer-motion for smooth-animations, react-chart-js for creating beautiful and customizable charts and many more.",
    href: "https://ecommerce-nextjs-mudit.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-1-logo.svg",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/javascript.svg",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
      {
        id: 5,
        name: "Firebase",
        path: "https://www.gstatic.com/devrel-devsite/prod/v5ab6fd0ad9c02b131b4d387b5751ac2c3616478c6dd65b5e931f0805efa1009c/firebase/images/lockup.svg",
      },
      {
        id: 6,
        name: "Stripe",
        path: "/assets/Stripe.svg",
      },
    ],
  },
  {
    title: "KryptNetwork - A Blockchain DApp for secure Etherium transfer ",
    desc: "KryptNetwork is a decentralized application (DApp) that enables users to transfer Ethereum securely from one MetaMask wallet to another. Leveraging React for the frontend and Ethereum smart contracts for the backend, KryptNetwok ensures transparent and reliable transactions on the blockchain.",
    subdesc:
      "React.js, ether.js, Etherium Blockchain, solidity, hardhat framework, Alchemy for deploying the blockchain, Metamask Wallet, Etherium Sepolia test Network, MetaMask Authentication and many more features..",
    href: "https://krypt-network.vercel.app",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-2-logo.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/javascript.svg",
      },
      {
        id: 4,
        name: "Solidity",
        path: "/assets/Solidity.svg",
      },
      {
        id: 5,
        name: "Hardhat",
        path: "/assets/Hardhat.svg",
      },
      {
        id: 6,
        name: "MetaMask",
        path: "data:image/svg+xml,%3csvg%20fill='none'%20height='33'%20viewBox='0%200%2035%2033'%20width='35'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.25'%3e%3cpath%20d='m32.9582%201-13.1341%209.7183%202.4424-5.72731z'%20fill='%23e17726'%20stroke='%23e17726'/%3e%3cg%20fill='%23e27625'%20stroke='%23e27625'%3e%3cpath%20d='m2.66296%201%2013.01714%209.809-2.3254-5.81802z'/%3e%3cpath%20d='m28.2295%2023.5335-3.4947%205.3386%207.4829%202.0603%202.1436-7.2823z'/%3e%3cpath%20d='m1.27281%2023.6501%202.13055%207.2823%207.46994-2.0603-3.48166-5.3386z'/%3e%3cpath%20d='m10.4706%2014.5149-2.0786%203.1358%207.405.3369-.2469-7.969z'/%3e%3cpath%20d='m25.1505%2014.5149-5.1575-4.58704-.1688%208.05974%207.4049-.3369z'/%3e%3cpath%20d='m10.8733%2028.8721%204.4819-2.1639-3.8583-3.0062z'/%3e%3cpath%20d='m20.2659%2026.7082%204.4689%202.1639-.6105-5.1701z'/%3e%3c/g%3e%3cpath%20d='m24.7348%2028.8721-4.469-2.1639.3638%202.9025-.039%201.231z'%20fill='%23d5bfb2'%20stroke='%23d5bfb2'/%3e%3cpath%20d='m10.8732%2028.8721%204.1572%201.9696-.026-1.231.3508-2.9025z'%20fill='%23d5bfb2'%20stroke='%23d5bfb2'/%3e%3cpath%20d='m15.1084%2021.7842-3.7155-1.0884%202.6243-1.2051z'%20fill='%23233447'%20stroke='%23233447'/%3e%3cpath%20d='m20.5126%2021.7842%201.0913-2.2935%202.6372%201.2051z'%20fill='%23233447'%20stroke='%23233447'/%3e%3cpath%20d='m10.8733%2028.8721.6495-5.3386-4.13117.1167z'%20fill='%23cc6228'%20stroke='%23cc6228'/%3e%3cpath%20d='m24.0982%2023.5335.6366%205.3386%203.4946-5.2219z'%20fill='%23cc6228'%20stroke='%23cc6228'/%3e%3cpath%20d='m27.2291%2017.6507-7.405.3369.6885%203.7966%201.0913-2.2935%202.6372%201.2051z'%20fill='%23cc6228'%20stroke='%23cc6228'/%3e%3cpath%20d='m11.3929%2020.6958%202.6242-1.2051%201.0913%202.2935.6885-3.7966-7.40495-.3369z'%20fill='%23cc6228'%20stroke='%23cc6228'/%3e%3cpath%20d='m8.392%2017.6507%203.1049%206.0513-.1039-3.0062z'%20fill='%23e27525'%20stroke='%23e27525'/%3e%3cpath%20d='m24.2412%2020.6958-.1169%203.0062%203.1049-6.0513z'%20fill='%23e27525'%20stroke='%23e27525'/%3e%3cpath%20d='m15.797%2017.9876-.6886%203.7967.8704%204.4833.1949-5.9087z'%20fill='%23e27525'%20stroke='%23e27525'/%3e%3cpath%20d='m19.8242%2017.9876-.3638%202.3584.1819%205.9216.8704-4.4833z'%20fill='%23e27525'%20stroke='%23e27525'/%3e%3cpath%20d='m20.5127%2021.7842-.8704%204.4834.6236.4406%203.8584-3.0062.1169-3.0062z'%20fill='%23f5841f'%20stroke='%23f5841f'/%3e%3cpath%20d='m11.3929%2020.6958.104%203.0062%203.8583%203.0062.6236-.4406-.8704-4.4834z'%20fill='%23f5841f'%20stroke='%23f5841f'/%3e%3cpath%20d='m20.5906%2030.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026%201.231-4.1572-1.9696%201.4551%201.1921%202.9489%202.0344h5.0536l2.962-2.0344%201.442-1.1921z'%20fill='%23c0ac9d'%20stroke='%23c0ac9d'/%3e%3cpath%20d='m20.2659%2026.7082-.6236-.4406h-3.6635l-.6236.4406-.3508%202.9025.3248-.2851h4.9626l.3378.2851z'%20fill='%23161616'%20stroke='%23161616'/%3e%3cpath%20d='m33.5168%2011.3532%201.1043-5.36447-1.6629-4.98873-12.6923%209.3944%204.8846%204.1205%206.8983%202.0085%201.52-1.7752-.6626-.4795%201.0523-.9588-.8054-.622%201.0523-.8034z'%20fill='%23763e1a'%20stroke='%23763e1a'/%3e%3cpath%20d='m1%205.98873%201.11724%205.36447-.71451.5313%201.06527.8034-.80545.622%201.05228.9588-.66255.4795%201.51997%201.7752%206.89835-2.0085%204.8846-4.1205-12.69233-9.3944z'%20fill='%23763e1a'%20stroke='%23763e1a'/%3e%3cpath%20d='m32.0489%2016.5234-6.8983-2.0085%202.0786%203.1358-3.1049%206.0513%204.1052-.0519h6.1318z'%20fill='%23f5841f'%20stroke='%23f5841f'/%3e%3cpath%20d='m10.4705%2014.5149-6.89828%202.0085-2.29944%207.1267h6.11883l4.10519.0519-3.10487-6.0513z'%20fill='%23f5841f'%20stroke='%23f5841f'/%3e%3cpath%20d='m19.8241%2017.9876.4417-7.5932%202.0007-5.4034h-8.9119l2.0006%205.4034.4417%207.5932.1689%202.3842.013%205.8958h3.6635l.013-5.8958z'%20fill='%23f5841f'%20stroke='%23f5841f'/%3e%3c/g%3e%3c/svg%3e",
      },
      {
        id: 7,
        name: "Ethereum",
        path: "/assets/Etherium.svg",
      },
    ],
  },
  // {
  //   title: "CarePulse - Health Management System",
  //   desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
  //   subdesc:
  //     "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
  //   href: "https://www.youtube.com/watch?v=lEflo_sc82g",
  //   texture: "/textures/project/project3.mp4",
  //   logo: "/assets/project-logo3.png",
  //   logoStyle: {
  //     backgroundColor: "#60f5a1",
  //     background:
  //       "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
  //     border: "0.2px solid rgba(208, 213, 221, 1)",
  //     boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
  //   },
  //   spotlight: "/assets/spotlight3.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Horizon - Online Banking Platform",
  //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
  //   subdesc:
  //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "/textures/project/project4.mp4",
  //   logo: "/assets/project-logo4.png",
  //   logoStyle: {
  //     backgroundColor: "#0E1F38",
  //     border: "0.2px solid #0E2D58",
  //     boxShadow: "0px 0px 60px 0px #2F67B64D",
  //   },
  //   spotlight: "/assets/spotlight4.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
