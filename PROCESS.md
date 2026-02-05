1. Architecture

The folder structure was designed to balance clarity, scalability, and modularity:

public/: Contains static assets (index.html, icons, manifest) that are directly served without processing. This ensures React manages only dynamic content while static files remain lightweight.

src/: Core application logic and UI components.

components/: Each UI section (Navbar, Hero, Projects, TechStack, Footer) is isolated into its own file, promoting reusability and easier debugging.

data/: Centralized data sources (projects.js, skills.js) keep content separate from presentation, allowing updates without modifying component logic.

App.js: Root component orchestrating layout and routing.

index.js & index.css: Entry point and global styles.

Configuration files (tailwind.config.js, postcss.config.js, .gitignore, package.json): Placed at the root for easy access and project-wide configuration.

build/: Auto-generated production-ready files after deployment.

node_modules/: Dependency management handled by npm.

This structure follows React best practices and ensures that future scaling — like adding new sections or features — can be done without disrupting existing modules.

2. AI Usage

I used AI (Gemini and other AI coding agents) to assist with front-end development, prompt engineering, and debugging. Here are examples of the prompts I used and how I structured them:

 1. Generating Component Boilerplate

Prompt:
"Create a responsive React Hero section with animated background blobs using Tailwind CSS.
Include text, a call-to-action button, and ensure mobile responsiveness."

Goal: Quickly generate reusable component code while ensuring responsiveness.

Engineering Approach: Specified the framework (React + Tailwind), feature requirements (animations, buttons), and output expectations (mobile-friendly).

 2. Optimizing Performance
Prompt:
"Analyze my React portfolio site and suggest changes to improve Lighthouse scores
for performance, accessibility, and best practices."

Goal: Identify bottlenecks and improve overall site performance.

Engineering Approach: Provided context about the site (React app) and specific metrics (Lighthouse score).

 3. Debugging Errors

Prompt:
"I'm getting an error in React: 'export SiMicrosoftazure not found'.
Suggest a fix for using react-icons and remove icons for items without official support."

Goal: Fix icon import errors without breaking the rest of the site.

Engineering Approach: Shared exact error message and project context to get a precise solution.

Prompt Engineering Strategy:
Be explicit about frameworks, technologies, and requirements.
Include relevant code or error context.
Clearly define the expected output (fix, optimization, or code snippet).
Ask for solutions that improve maintainability and performance.

3. Challenges

Issue: While adding icons for all skills, I encountered errors like:

ERROR in ./src/components/TechStack.jsx
export 'SiMicrosoftazure' (imported as 'SiMicrosoftazure') was not found in 'react-icons'

Cause: Some skills (like "REST API Basics" or "Power BI") did not have official icons in react-icons. Attempting to import them caused the build to fail.

Solution:
Created an iconMap object that maps each skill to a valid icon.
Skipped skills without icons instead of importing non-existent icons:
// Only render icon if it exists
{Icon && <Icon className="w-5 h-5" />}
For Azure, where an exact icon wasn’t available (Azure Data Factory), used a fallback icon (FaMicrosoft) to maintain consistency.

Result:
The TechStack component rendered correctly without errors.
Skills without icons (REST API Basics, Power BI) still displayed their names cleanly.
The component remained reusable and scalable for adding new skills later.