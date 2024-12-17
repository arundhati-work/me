// src/data/projects.js
import huntgigBanner from "../assets/projects/huntgig/huntgigBanner.png";
import huntgigHome from "../assets/projects/huntgig/huntgig-home.png";
import huntgigAbout from "../assets/projects/huntgig/huntgig-about.png";
import huntgigAdminCreateJob from "../assets/projects/huntgig/huntgig-admin-create-job.png";
import huntgigSignup from "../assets/projects/huntgig/huntgig-signup.png";
import huntgigAdminViewEmployees from "../assets/projects/huntgig/huntgig-admin-view-employees.png";
import huntgigEmployeeApplyJobs from "../assets/projects/huntgig/huntgig-employee-apply-jobs.png";

import shnugglersHomeLightMode from "../assets/projects/shnugglers/home-light-mode.png";
import shnugglersDarkMode from "../assets/projects/shnugglers/home-dark-mode.png";
import shnugglersPetsList from "../assets/projects/shnugglers/pets-list.png";
import shnugglersAdoptionForm from "../assets/projects/shnugglers/adoption-form.png";

import calicoCalculator from "../assets/projects/calico/calculator.png";
import calicoLogin from "../assets/projects/calico/login.png";
import calicoValidation from "../assets/projects/calico/validation.png";
import calicoCalculatorError from "../assets/projects/calico/calculator-error.png";
import calicoStopwatch from "../assets/projects/calico/stopwatch.png";
import calicoStopwatchDate from "../assets/projects/calico/stopwatch-date.png";

import stickersincHero from "../assets/projects/stickerinc/hero.png";
import stickersincAbout from "../assets/projects/stickerinc/about.png";
import stickersincReviews from "../assets/projects/stickerinc/reviews.png";
import stickersincSubscriptions from "../assets/projects/stickerinc/subscriptions.png";
import stickersincCustom from "../assets/projects/stickerinc/custom.png";
import stickersincFooter from "../assets/projects/stickerinc/footer.png";

export const projects = [
    {
      id: "huntgig",
      title: "Huntgig",
      shortDescription: "A Full Stack Job Portal with Role-Based Access",
      createdDate: "Nov 2024",
      description: "Huntgig is a comprehensive job portal application built with the MERN stack, featuring distinct portals for Admins and Employees. Admins can create job postings and manage users, while employees can browse and apply for jobs. The application implements role-based access control, JWT authentication, and follows best practices for secure data handling.",
      coverImage: huntgigBanner,
      technicalChallenges: [
        {
          challenge: "Role-Based Access Control",
          solution: "Implemented JWT-based authentication system with separate routes and components for Admin and Employee roles, including route protection and unauthorized access handling"
        },
        {
          challenge: "Form Validation",
          solution: "Created robust validation for user signup and login including complex password requirements (8+ characters, uppercase, lowercase, numbers, special characters) and email format verification"
        },
        {
          challenge: "State Management",
          solution: "Utilized Redux for centralized state management to handle user authentication, job listings, and user data across multiple components"
        }
      ],
      techStack: {
        frontend: ["React", "Redux", "Material-UI", "React Router"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
        tools: ["JWT", "Git", "Postman"]
      },
      futureEnhancements: [
        "Add advanced job search and filtering capabilities",
        "Implement real-time notifications for job application status",
        "Add resume upload and parsing functionality",
        "Add analytics dashboard for admins"
      ],
      gallery: [
        huntgigHome,
        huntgigAbout,
        huntgigSignup,
        huntgigAdminCreateJob,
        huntgigAdminViewEmployees,
        huntgigEmployeeApplyJobs
      ],
      links: {
        github: "https://github.com/arundhati-work/Huntgig"
      }
    },
    {
      id: "shnugglers",
      title: "Shnugglers",
      shortDescription: "A Responsive Pet Adoption Platform with Theme Switching",
      createdDate: "Dec 2024",
      description: "Shnugglers is a heartwarming pet adoption website dedicated to connecting loving families with their future furry companions. Built with a focus on user experience, the platform features a responsive design with dark/light mode switching, comprehensive pet listings, and an intuitive adoption process. The website showcases pets through detailed cards and profiles, while implementing modern SASS features and responsive design principles.",
      coverImage: shnugglersHomeLightMode,
      technicalChallenges: [
        {
          challenge: "Theme Management",
          solution: "Implemented a dynamic theme switching system using SASS mixins and custom properties to handle dark/light mode transitions seamlessly"
        },
        {
          challenge: "Responsive Design",
          solution: "Created a fluid layout using CSS Grid and Flexbox combinations, with carefully crafted media queries for mobile optimization"
        },
        {
          challenge: "Dynamic Content Loading",
          solution: "Developed a JSON-based pet information system to dynamically populate adoption pages while maintaining consistent styling"
        }
      ],
      techStack: {
        frontend: ["HTML5", "SASS", "JavaScript"],
        styling: ["CSS Grid", "Flexbox", "Custom Properties"],
        tools: ["VS Code", "Live Server", "Git"]
      },
      futureEnhancements: [
        "Implement pet search and filtering functionality",
        "Add user authentication and profiles",
        "Create a dashboard for shelter management",
        "Add real-time adoption status updates"
      ],
      gallery: [
        shnugglersHomeLightMode,
        shnugglersDarkMode,
        shnugglersPetsList,
        shnugglersPetsList,
        shnugglersAdoptionForm
      ],
      links: {
        github: "https://github.com/arundhati-work/Shnugglers",
        demo: "https://arundhati-work.github.io/shnugglers/"
      }
    },
    {
        id: "calico",
        title: "Cali.co",
        shortDescription: "Calculator & Stopwatch App with User Authentication",
        createdDate: "Oct 2024",
        description: "Cali.co is a comprehensive web application that combines a calculator and stopwatch functionality with secure user authentication. The app features robust input validation, real-time error messaging, and asynchronous timer operations. Built with a focus on user experience, the application demonstrates advanced JavaScript concepts including Promises, async/await, and jQuery validation.",
        coverImage: calicoCalculator,
        technicalChallenges: [
          {
            challenge: "Complex Form Validation",
            solution: "Implemented comprehensive regex-based validation for email (northeastern.edu domain), username (alphanumeric + underscore), and password (8+ chars, uppercase, lowercase, number, special char) with real-time error feedback using jQuery"
          },
          {
            challenge: "Asynchronous Timer Implementation",
            solution: "Created a robust stopwatch feature using async/await, Promises, and interval management (setInterval/clearInterval) for accurate time tracking and formatting"
          },
          {
            challenge: "State Management Across Pages",
            solution: "Developed a system to maintain user session state across multiple pages (Login, Calculator, Stopwatch) while ensuring secure access and proper state cleanup on logout"
          }
        ],
        techStack: {
          frontend: ["HTML5", "SASS", "JavaScript", "jQuery"],
          features: ["Regex Validation", "Async/Await", "Promises"],
          tools: ["VS Code", "Git", "Live Server"]
        },
        futureEnhancements: [
          "Add scientific calculator functionality",
          "Implement lap timing in stopwatch",
          "Add user profile customization",
          "Implement data persistence for calculator history",
          "Add multiple timer support",
          "Create a dark/light theme toggle"
        ],
        gallery: [
          calicoLogin,
          calicoValidation,
          calicoCalculator,
          calicoCalculatorError,
          calicoStopwatch,
          calicoStopwatchDate
        ],
        features: {
          authentication: [
            "Northeastern.edu email validation",
            "Complex password requirements",
            "Real-time validation feedback",
            "Session management across pages"
          ],
          calculator: [
            "Basic arithmetic operations",
            "Number-only input validation",
            "Error handling for division by zero",
            "Operation visualization",
            "Reset functionality"
          ],
          stopwatch: [
            "HH:MM:SS format display",
            "Start/Stop/Reset controls",
            "Date picker integration",
            "Async timer implementation"
          ]
        },
        links: {
          github: "https://github.com/arundhati-work/Calico",
          demo: "https://arundhati-work.github.io/Calico/"
        }
    },
    {
        id: "stickersinc",
        title: "Stickers.inc",
        shortDescription: "Interactive E-commerce Platform for Sticker Enthusiasts",
        createdDate: "Sep 2024",
        description: "Stickers.inc is a comprehensive e-commerce platform based in Boston, dedicated to providing a variety of stickers for all tastes and preferences. The website showcases subscription services and custom sticker ordering capabilities, with a focus on creating an engaging shopping experience through interactive elements and multimedia content.",
        coverImage: stickersincHero,
        technicalChallenges: [
          {
            challenge: "Responsive Navigation",
            solution: "Implemented a dual-mode navigation system with a horizontal menu for desktop and a hamburger menu with sliding drawer for mobile views"
          },
          {
            challenge: "Interactive Elements",
            solution: "Created multiple interactive components including expandable location summaries, modal dialogs for purchases and quotes, and multimedia testimonials"
          },
          {
            challenge: "Form Integration",
            solution: "Developed multiple interconnected forms for custom orders, subscriptions, and newsletter signups with consistent styling and user experience"
          }
        ],
        techStack: {
          frontend: ["HTML5", "CSS3", "JavaScript"],
          multimedia: ["Audio", "Video", "Images"],
          components: ["Modal Dialogs", "Forms", "Tables"]
        },
        futureEnhancements: [
          "Add shopping cart functionality",
          "Implement user accounts and order history",
          "Add real-time sticker customization preview",
          "Integrate payment gateway",
          "Add sticker design upload capability",
          "Implement order tracking system"
        ],
        gallery: [
          stickersincHero,
          stickersincAbout,
          stickersincReviews,
          stickersincSubscriptions,
          stickersincCustom,
          stickersincFooter
        ],
        features: {
          core: [
            "Responsive design for all screen sizes",
            "Interactive custom sticker ordering",
            "Subscription service management",
            "Multimedia testimonials integration"
          ],
          userInterface: [
            "Dual-mode navigation system",
            "Modal dialogs for interactions",
            "Expandable location details",
            "Newsletter subscription integration"
          ],
          forms: [
            "Custom sticker order form",
            "Subscription signup form",
            "Newsletter subscription",
            "Quote request system"
          ]
        },
        htmlElements: {
          structure: [
            "Semantic HTML5 elements",
            "Responsive header and footer",
            "Navigation menus",
            "Tables for subscription plans"
          ],
          multimedia: [
            "Video in hero section",
            "Audio testimonials",
            "Optimized images",
            "Custom favicon"
          ],
          interactive: [
            "Form elements",
            "Summary elements",
            "Modal dialogs",
            "Navigation buttons"
          ]
        },
        links: {
          github: "https://github.com/arundhati-work/stickersinc",
          demo: "https://arundhati-work.github.io/stickersinc/"
        }
    }
];

// Helper functions
export const getProjectById = (id) => {
    return projects.find(project => project.id === id);
};

export const getAllProjects = () => {
    return projects;
};