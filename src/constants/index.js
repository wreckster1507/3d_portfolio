import {
    snake,
    bookstore,
    campchase,
    fullstack,
    unity,
    foundation,
    datastructures,
    csharp,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    python,
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
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Machine Learning Enthusiast",
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
        name: "TypeScript",
        icon: typescript,
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
    {
        name: "python",
        icon: python,
    },
    {
        name: "csharp",
        icon: csharp
    },
];

const experiences = [
    {
        title: "Python",
        company_name: "Python",
        icon: python,
        iconBg: "#E6DEDD",
        date: "july 2022 - sept 2022",
        points: [
            "data types ,variables,arrays,tuples,list,set",
            "decision making statements,loops, functions",
            "functions,higher order functions",
            "object oriented programming",
            "tkinter",
            "ai and machine learning fundamentals"
        ],
    },
    {
        title: "Data Structures",
        company_name: "Python",
        icon: datastructures,
        iconBg: "#383E56",
        date: "sept 2022",
        points: [
            "Searching- linear search, binary search",
            "Sorting- bubbleSort,quickSort,selectionSort,mergeSort",
            "Stack,Queue,Circular Queue,",
            "LinkedLists-Singly LinkedList,Doubly LinkedList,Implentation of Stack and Queue using LinkedList",
            "Tree-Binary Tree, Binary Search Tree,Tree traversal",
            "Graph-Breadth First Search,Depth First Search"
        ],
    },
    {
        title: "HTML CSS Javascript",
        company_name: "Web fundamentals",
        icon: foundation,
        iconBg: "#E6DEDD",
        date: "dec 2022 - march 2023",
        points: [
            "HTML",
            "CSS - Box Model,CSS properties,Responsive CSS,Flexbox,Bootstrap,Bulma",
            "JavaScript - variables,arrays,objects,decision making statements,loops,functions,callback and arrow functitons",
            "DOM - eventlisteners,keyboard events,event objects,event bubbling , event delegation",
        ],
    },
    {
        title: "Unity",
        company_name: "C#",
        icon: unity,
        iconBg: "#383E56",
        date: "july 2023 - sept 2023",
        points: [
            "Learning Unity Interface,Game View,Hierarchy,Inspector",
            "C# - variables,decision making statements, loops,functions",
            "Euphoria Engine - Naturalmotion ,unity plugins",
            "Unity Asset Store",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "html,css,javascript",
        icon: fullstack,
        iconBg: "#E6DEDD",
        date: "sept 2023 - Present",
        points: [
            "Asynchronous Javascript (AJAX) , API , node , NPM , creating servers with Express , Dynamic HTML with Templating ",
            "RESTful Routes , MongoDb , MiddleWare , Error Handling , Data Relationships , Validating Data",
            "Express Routers , cookies, session , flash , authentication , authorization , deploying",
            "React - JSX , events , State Concepts , component Design , Effects , Material UI",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Beacon.li",
        icon: fullstack,
        iconBg: "#E6DEDD",
        date: "May 2024 - June 2024",
        points: [
        "I had the privilege of interning with Rare Bits Technology Pvt Ltd as a Web Development Intern, where I honed my skills in front-end technologies. During this internship, I actively contributed to:",
        "Front-End Development: Developing projects using React, HTML, and CSS.",
        "Collaboration: Participating in design discussions and brainstorming sessions with the team.",
        "Teamwork: Demonstrating a collaborative spirit and consistently fostering a positive and cheerful work environment.",
        "This experience not only strengthened my technical expertise but also allowed me to grow as a team player. I'm grateful for the guidance and support I received during my tenure at Rare Bits Technology Pvt Ltd."
        ],
    },
    {
        title: "Web Developer Project Intern", 
        company_name: "InfraBIM Techno Solutions",
        icon: fullstack,
        iconBg: "#E6DEDD",
        date: "May 2024 - Jun 2024",
        points: [
            "I had the opportunity to intern at InfraBIM Techno Solutions, where I worked on the project 'Dashboard Design for ShopTalk Web App.'",
            "During this internship, I gained hands-on experience in:",
            "Frontend Development: Using HTML, CSS, Bootstrap for responsive design.",
            "Dashboard Layout Design: Creating user-friendly and visually appealing interfaces.",
            "React Component Development: Designing and implementing dynamic components.",
            "This experience strengthened my MERN stack development skills and enhanced my proficiency in building scalable web applications. I'm grateful for the valuable mentorship and support received throughout the internship."
        ]
    },
    {
        title: "Chief Technology Officer", 
        company_name: "EventAura",
        icon: fullstack,
        iconBg: "#E6DEDD",
        date: "May 2024 - present",
        points: [
            "As a MERN stack specialist, I focus on building scalable, efficient, and user-centric platforms to revolutionize event management and beyond. Leveraging technologies like MongoDB, Express.js, React, and Node.js, I'm passionate about creating seamless digital experiences.",
            "Website: eventaura.tech"
        ]
    },
];

const testimonials = [
    {
        testimonial:
            "The Web Developer Bootcamp 2024",
        name: "Udemy",
        designation: "ID",
        company: "UC-a2cd4b8b-c0f2-439c-aad3-40648b56f413",
        image: "https://d1yei2z3i6k35z.cloudfront.net/161/62e117a8612af_Udemy_Logo.png",
    },
    {
        testimonial:
            "Python Programming Essentials",
        name: "Coursera",
        designation: "ID",
        company: "ZLBKNFA8MTKP",
        image: "https://tradesense.ru/img/stocks/COUR.png",
    },
    {
        testimonial:
            "Python Basics",
        name: "Coursera",
        designation: "ID",
        company: "6XAM6YG5M3VU",
        image: "https://tradesense.ru/img/stocks/COUR.png",
    },
];

const projects = [
    {
        name: "CampChase",
        description:
            "ChaseCamp is a dynamic web application developed for outdoor enthusiasts who crave unique camping experiences. This platform offers an array of features designed to enhance your journey, from discovering new campgrounds to connecting with a passionate community of fellow campers.",
        tags: [
            {
                name: "HTML,CSS,Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "node.js,mongoDB,express",
                color: "green-text-gradient",
            },
            {
                name: "EJS",
                color: "pink-text-gradient",
            },
        ],
        image: campchase,
        source_code_link: "https://github.com/wreckster1507/CampChase",
    },
    {
        name: "Bookstore",
        description:
            "A full-stack web application for managing a bookstore, built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node.js,express",
                color: "green-text-gradient",
            },
            {
                name: "mongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: bookstore,
        source_code_link: "https://github.com/wreckster1507/BookStore",
    },
    {
        name: "Snake Game",
        description:
            "This is a simple implementation of the classic Snake Game using HTML, CSS, and JavaScript. The game is played on a grid, where the player controls a snake that moves around the board, eats food, and grows longer. The goal is to achieve the highest score by collecting as much food as possible without colliding with the boundaries of the board or the snake itself.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: snake,
        source_code_link: "https://github.com/wreckster1507/snake-game",
    },
];

export { services, technologies, experiences, testimonials, projects };