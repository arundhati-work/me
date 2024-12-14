export const huntgig = {
    "title": "Huntgig",
    "shortDescription": "A Full Stack Job Portal with Role-Based Access",
    "createdDate": "Nov 2024",
    "description": "Huntgig is a comprehensive job portal application built with the MERN stack, featuring distinct portals for Admins and Employees. Admins can create job postings and manage users, while employees can browse and apply for jobs. The application implements role-based access control, JWT authentication, and follows best practices for secure data handling.",
    "coverImage": "/projectImages/huntgig/huntgigBanner.png",
    "technicalChallenges": [
      {
        "challenge": "Role-Based Access Control",
        "solution": "Implemented JWT-based authentication system with separate routes and components for Admin and Employee roles, including route protection and unauthorized access handling"
      },
      {
        "challenge": "Form Validation",
        "solution": "Created robust validation for user signup and login including complex password requirements (8+ characters, uppercase, lowercase, numbers, special characters) and email format verification"
      },
      {
        "challenge": "State Management",
        "solution": "Utilized Redux for centralized state management to handle user authentication, job listings, and user data across multiple components"
      }
    ],
    "techStack": {
        "frontend": ["React", "Redux", "Material-UI", "React Router"],
        "backend": ["Node.js", "Express.js", "MongoDB", "Mongoose"],
        "tools": ["JWT", "Git", "Postman"]
    },
    "futureEnhancements": [
    "Add advanced job search and filtering capabilities",
    "Implement real-time notifications for job application status",
    "Add resume upload and parsing functionality",
    "Add analytics dashboard for admins"
  ],
    "gallery": [
    "/projectImages/huntgig/huntgig-home.png",
    "/projectImages/huntgig/huntgig-about.png",
    "/projectImages/huntgig/huntgig-signup.png",
    "/projectImages/huntgig/huntgig-admin-create-job.png",
    "/projectImages/huntgig/huntgig-admin-view-employees.png",
    "/projectImages/huntgig/huntgig-employee-apply-jobs.png"
  ],
    "links": {
    "github": "https://github.com/arundhati-work/Huntgig"
    }
  }