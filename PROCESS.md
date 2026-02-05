1. Project Planning
- Decided to create a personal portfolio website to showcase skills, projects, and contact information.
- Planned the website sections:
- Hero Section
- About Section (optional)
- Tech Stack Section
- Projects Section
- Contact Section
- Chose React for dynamic UI and Tailwind CSS for fast, responsive styling.
- Sketched a basic layout and flow of sections.

2. Project Setup
- Initialized the project using Create React App:
npx create-react-app portfolio
npm install react-icons gh-pages
- Set up the folder structure:
src/
  components/   # React components for each section
  data/         # Separate data files for projects and tech stack
  assets/       # Images and icons



3. Development Process

Navbar

Built a responsive navbar with React state to handle the hamburger menu.
Used Tailwind classes for styling and responsiveness:
flex, items-center, justify-between
hidden md:flex for desktop menu
md:hidden for mobile menu toggle
Added smooth scrolling to sections.
  
 Hero Section

-  Implemented animated background blobs using absolute divs and Tailwind positioning.
-  Used flex items-center justify-center for vertical and horizontal centering.
-  Added text and buttons linking to Projects and Contact sections.
  
 Tech Stack Section

-  Stored tech stack in src/data/techStack.js:
   const techStack = [
    { name: "React", icon: "<ReactIcon />" },
    { name: "Tailwind CSS", icon: "<TailwindIcon />" },
     // ...other tech
    ];
  export default techStack;
- Rendered dynamically using .map().
- Ensured responsiveness with flex-wrap and responsive prefixes.
  
Projects Section

- Created src/data/projects.js with objects containing project title, description, and link.
- Displayed projects dynamically using .map().
- Tailwind classes for layout and spacing:
- Mobile: flex-col
- Desktop: md:flex-row md:flex-wrap
- Added hover effects and buttons for project links.

Contact Section

- Added social icons for GitHub, LinkedIn, Email, and Phone using react-icons.
- Implemented hover animations with Tailwind:
- transition
- hover:scale-105
- Used React state to animate icons when the section is active (optional).

4. Mobile Responsiveness
- Used Tailwind responsive prefixes (sm:, md:, lg:) throughout.
- Tested all sections on multiple screen sizes.
- Updated Projects and Tech Stack sections to wrap properly on smaller screens.
- Ensured Hero text and Navbar adjust for mobile devices.

5. AI Assistance
- AI (ChatGPT) was used to:
- Suggest responsive Tailwind classes for Navbar, Hero, and Projects.
- Generate examples for Hero animations.
- Prompts used:
- "Make my React Navbar fully responsive using Tailwind CSS."
- "Create animated blobs for Hero section in React."
- "Make project cards stack on mobile using Tailwind CSS."

6. Build & Deployment
- Built the project:
npm run build
- Deployed to GitHub Pages:
npx gh-pages -d build
- Verified live demo at:
https://Neelamma-S.github.io/personal-portfolio

7. Lessons Learned
- Using Tailwind CSS responsive prefixes makes mobile-first design much faster.
- Keeping data in src/data/ allows easy updates without touching components.
- Managing components separately improves code readability and maintainability.
- AI can help optimize code, but understanding the logic is crucial to ensure correctness.
- Responsive testing on real devices is important to ensure layouts work across all screen sizes.

8. Workflow Diagram

User Interaction → React Components → Data from src/data/ → Render UI → Tailwind Styling → Responsive Layout → Deployment



