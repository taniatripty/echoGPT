export type PromptCategory =
  | "coding"
  | "writing"
  | "learning"
  | "research"
  | "productivity";

export interface PromptResponse {
  content: string;
  highlights?: string[];
}

export interface PromptSuggestion {
  id: string;
  title: string;
  description: string;
  prompt: string;
  responses: PromptResponse[];
}

export const promptSuggestions: Record<
  PromptCategory,
  PromptSuggestion[]
> = {
  // =========================================================
  // CODING
  // =========================================================
  coding: [
    {
      id: "explain-react",
      title: "Explain React",
      description: "Understand React from beginner to advanced",
      prompt:
        "Explain React from beginner to advanced with practical examples.",
      responses: [
        {
          content:
            "React is a JavaScript library for building user interfaces from reusable components. Instead of manually changing the DOM, you describe what the UI should look like for a particular state, and React updates the interface when that state changes.",
          highlights: [
            "Component-based architecture",
            "Declarative UI",
            "State and props",
          ],
        },
        {
          content:
            "A useful way to understand React is to think in terms of components and state. Components describe pieces of your interface, while state represents information that can change. When state changes, React renders the UI again using the new state.",
          highlights: [
            "Components describe UI",
            "State controls dynamic behavior",
            "Props pass data between components",
          ],
        },
        {
          content:
            "React helps developers build large interfaces by breaking them into small reusable components. Modern React also uses Hooks such as useState and useEffect, while frameworks like Next.js add features such as Server Components and routing.",
          highlights: [
            "Reusable components",
            "Hooks",
            "Works with modern frameworks",
          ],
        },
      ],
    },

    {
      id: "typescript",
      title: "TypeScript Help",
      description: "Improve your TypeScript knowledge",
      prompt:
        "Explain TypeScript and show me how it improves a JavaScript project.",
      responses: [
        {
          content:
            "TypeScript adds static type checking to JavaScript. It allows you to describe what kind of data your variables, functions, objects, and components expect before your application runs.",
          highlights: [
            "Static type checking",
            "Better autocomplete",
            "Safer refactoring",
          ],
        },
        {
          content:
            "The biggest advantage of TypeScript is that many mistakes can be discovered while you are writing code instead of after the application is running. Interfaces, unions, generics, and utility types help you describe complex application data.",
          highlights: [
            "Interfaces",
            "Union types",
            "Generics",
          ],
        },
        {
          content:
            "For a React application, TypeScript can make component props, API responses, form values, and state much easier to understand. This becomes especially useful as the application grows.",
          highlights: [
            "Typed React props",
            "Typed API responses",
            "Better maintainability",
          ],
        },
      ],
    },

    {
      id: "nextjs",
      title: "Learn Next.js",
      description: "Understand the App Router",
      prompt:
        "Explain Next.js App Router and how it differs from traditional React applications.",
      responses: [
        {
          content:
            "Next.js is a React framework that provides routing, server rendering, Server Components, API route handlers, metadata handling, and other production features around React.",
          highlights: [
            "App Router",
            "Server Components",
            "Route Handlers",
          ],
        },
        {
          content:
            "With the App Router, folders inside the app directory can represent routes. Files such as page.tsx define pages, while layout.tsx defines shared layouts around those pages.",
          highlights: [
            "app/page.tsx",
            "Nested layouts",
            "File-based routing",
          ],
        },
        {
          content:
            "One important difference between plain React and Next.js is that Next.js can execute components on the server by default. Client Components are introduced only when browser-side interaction or APIs such as useState are needed.",
          highlights: [
            "Server-first architecture",
            "Client Components",
            "Better rendering flexibility",
          ],
        },
      ],
    },

    {
      id: "debug-code",
      title: "Debug My Code",
      description: "Find bugs and improve your code",
      prompt:
        "Give me a systematic process for debugging frontend JavaScript and TypeScript code.",
      responses: [
        {
          content:
            "Start by reproducing the problem consistently. Then inspect the error message, identify the exact file and line, and trace the values flowing into the failing code.",
          highlights: [
            "Reproduce the issue",
            "Read the error",
            "Trace the data",
          ],
        },
        {
          content:
            "A good debugging workflow is to reduce the problem to the smallest possible case. Check your inputs, state values, API responses, and assumptions one by one rather than changing many things at once.",
          highlights: [
            "Reduce the problem",
            "Inspect state",
            "Check API data",
          ],
        },
        {
          content:
            "For React applications, React DevTools, browser DevTools, console logging, breakpoints, and Network inspection are particularly useful. The goal is to discover the actual cause rather than simply hiding the error.",
          highlights: [
            "React DevTools",
            "Browser breakpoints",
            "Network inspection",
          ],
        },
      ],
    },

    {
      id: "code-review",
      title: "Review My Code",
      description: "Get a senior-style code review",
      prompt:
        "Review frontend code like a senior developer and explain what should be improved.",
      responses: [
        {
          content:
            "A useful code review should examine correctness first, followed by readability, maintainability, accessibility, performance, and consistency with the project's architecture.",
          highlights: [
            "Correctness",
            "Maintainability",
            "Accessibility",
          ],
        },
        {
          content:
            "Look for duplicated logic, unclear naming, unnecessarily large components, excessive state, missing error handling, and weak type definitions. These areas commonly make frontend projects harder to maintain.",
          highlights: [
            "Avoid duplication",
            "Improve naming",
            "Reduce unnecessary state",
          ],
        },
        {
          content:
            "A strong review does not only point out problems. It explains why the current implementation is problematic and provides a practical alternative that fits the existing project structure.",
          highlights: [
            "Explain the problem",
            "Show an alternative",
            "Respect project architecture",
          ],
        },
      ],
    },
  ],

  // =========================================================
  // WRITING
  // =========================================================
  writing: [
    {
      id: "professional-email",
      title: "Write an Email",
      description: "Create a professional email",
      prompt: "Write a professional email for a job application.",
      responses: [
        {
          content:
            "A strong job application email should be concise, professional, and focused on why your background is relevant to the position. Include a clear subject, short introduction, relevant skills, and a simple call to action.",
          highlights: [
            "Clear subject",
            "Short introduction",
            "Relevant skills",
          ],
        },
        {
          content:
            "For a job application, avoid sending a very long message. Introduce yourself, mention the role you're applying for, briefly describe your strongest relevant skills, and provide your portfolio or CV.",
          highlights: [
            "Keep it concise",
            "Mention the position",
            "Include portfolio/CV",
          ],
        },
        {
          content:
            "The most effective structure is usually: greeting, purpose, two or three sentences about your qualifications, links or attachments, and a polite closing.",
          highlights: [
            "Simple structure",
            "Relevant qualifications",
            "Professional closing",
          ],
        },
      ],
    },

    {
      id: "rewrite-text",
      title: "Rewrite My Text",
      description: "Make your writing clearer",
      prompt: "Rewrite my text to sound professional and natural.",
      responses: [
        {
          content:
            "I can improve the wording while preserving your original meaning. A professional rewrite should normally focus on clarity, concise sentences, natural wording, and an appropriate tone.",
          highlights: [
            "Preserve meaning",
            "Improve clarity",
            "Natural language",
          ],
        },
        {
          content:
            "A polished version should remove unnecessary repetition and replace informal or unclear phrases with direct language.",
          highlights: [
            "Remove repetition",
            "Use direct language",
            "Improve readability",
          ],
        },
        {
          content:
            "The final tone can also be adjusted depending on the audience—for example, professional, friendly, academic, persuasive, or conversational.",
          highlights: [
            "Professional",
            "Friendly",
            "Academic",
          ],
        },
      ],
    },

    {
      id: "linkedin-post",
      title: "Create LinkedIn Post",
      description: "Write an engaging professional post",
      prompt: "Create a LinkedIn post about learning a new technology.",
      responses: [
        {
          content:
            "A good learning-focused LinkedIn post can briefly explain what you learned, what challenged you, and what you plan to build with the new skill.",
          highlights: [
            "What you learned",
            "What challenged you",
            "What comes next",
          ],
        },
        {
          content:
            "Instead of simply saying that you learned a technology, share a specific lesson or small project. Concrete experiences make professional posts more useful.",
          highlights: [
            "Share a specific lesson",
            "Mention a project",
            "Add practical value",
          ],
        },
        {
          content:
            "A simple structure is: learning milestone → interesting discovery → practical example → next goal.",
          highlights: [
            "Milestone",
            "Discovery",
            "Next goal",
          ],
        },
      ],
    },

    {
      id: "documentation",
      title: "Write Documentation",
      description: "Create clear technical documentation",
      prompt: "Create documentation for a frontend project.",
      responses: [
        {
          content:
            "Good project documentation should help a new developer understand what the project does, how to install it, how to configure environment variables, and how to run it locally.",
          highlights: [
            "Project overview",
            "Installation",
            "Environment setup",
          ],
        },
        {
          content:
            "For technical documentation, organize information from general to specific: overview, requirements, installation, configuration, scripts, architecture, and deployment.",
          highlights: [
            "Logical structure",
            "Configuration",
            "Deployment",
          ],
        },
        {
          content:
            "Screenshots, examples, API descriptions, and common troubleshooting steps can make documentation much easier to use.",
          highlights: [
            "Examples",
            "Screenshots",
            "Troubleshooting",
          ],
        },
      ],
    },

    {
      id: "cover-letter",
      title: "Write Cover Letter",
      description: "Create a tailored cover letter",
      prompt: "Write a concise cover letter for a frontend developer position.",
      responses: [
        {
          content:
            "A strong cover letter connects your experience and projects directly to the responsibilities of the position instead of repeating your entire resume.",
          highlights: [
            "Tailor to the role",
            "Highlight projects",
            "Avoid repeating the CV",
          ],
        },
        {
          content:
            "For an entry-level frontend role, focus on practical projects, technologies you have used, problem-solving experience, and your motivation to contribute and learn.",
          highlights: [
            "Projects",
            "Technical skills",
            "Learning mindset",
          ],
        },
        {
          content:
            "Keep the letter focused. One or two strong examples are generally more useful than a long list of technologies.",
          highlights: [
            "Keep it focused",
            "Use strong examples",
            "Avoid skill dumping",
          ],
        },
      ],
    },
  ],

  // =========================================================
  // LEARNING
  // =========================================================
  learning: [
    {
      id: "javascript-concept",
      title: "Learn JavaScript",
      description: "Understand JavaScript concepts",
      prompt: "Teach me an important JavaScript concept from beginner to advanced.",
      responses: [
        {
          content:
            "A good way to learn JavaScript is to understand the language model first: variables, values, functions, objects, arrays, scope, closures, asynchronous behavior, and the event loop.",
          highlights: [
            "Scope",
            "Closures",
            "Event loop",
          ],
        },
        {
          content:
            "Instead of memorizing syntax, focus on understanding why JavaScript behaves the way it does. Then reinforce each concept with small coding exercises.",
          highlights: [
            "Understand behavior",
            "Practice small examples",
            "Build gradually",
          ],
        },
        {
          content:
            "For interview preparation, combine theory with coding. After learning a concept, try to explain it, write a small example, and solve a related problem.",
          highlights: [
            "Theory",
            "Explanation",
            "Coding practice",
          ],
        },
      ],
    },

    {
      id: "interview-prep",
      title: "Interview Preparation",
      description: "Prepare for frontend interviews",
      prompt: "Create a frontend developer interview preparation plan.",
      responses: [
        {
          content:
            "A frontend interview plan should cover JavaScript fundamentals, React, Next.js, TypeScript, browser concepts, HTTP, accessibility, performance, and practical coding.",
          highlights: [
            "JavaScript",
            "React",
            "TypeScript",
          ],
        },
        {
          content:
            "Divide preparation into theory, coding exercises, project discussions, and mock interviews. This prevents preparation from becoming only memorization.",
          highlights: [
            "Theory",
            "Coding",
            "Mock interviews",
          ],
        },
        {
          content:
            "Your own projects are especially useful interview material. Be ready to explain architecture, technical decisions, challenges, debugging, and future improvements.",
          highlights: [
            "Project architecture",
            "Technical decisions",
            "Challenges",
          ],
        },
      ],
    },

    {
      id: "react-hooks",
      title: "Understand React Hooks",
      description: "Learn Hooks with examples",
      prompt: "Explain React Hooks and when to use them.",
      responses: [
        {
          content:
            "React Hooks let function components use React features such as state, context, refs, and effects. Common Hooks include useState, useEffect, useContext, useRef, useMemo, and useCallback.",
          highlights: [
            "useState",
            "useEffect",
            "useContext",
          ],
        },
        {
          content:
            "Hooks should be selected based on the problem you are solving. For example, useState manages local state, useRef stores mutable values without causing renders, and useEffect synchronizes with external systems.",
          highlights: [
            "State",
            "Refs",
            "External synchronization",
          ],
        },
        {
          content:
            "Avoid adding Hooks just because they are available. Start with the simplest state structure and introduce a Hook when your component actually needs that behavior.",
          highlights: [
            "Keep components simple",
            "Use Hooks intentionally",
            "Avoid unnecessary effects",
          ],
        },
      ],
    },

    {
      id: "system-design",
      title: "Frontend Architecture",
      description: "Understand scalable frontend architecture",
      prompt: "Explain how to structure a scalable frontend application.",
      responses: [
        {
          content:
            "A scalable frontend separates responsibilities such as UI components, features, data fetching, business logic, utilities, and shared configuration.",
          highlights: [
            "Separate responsibilities",
            "Reusable components",
            "Feature organization",
          ],
        },
        {
          content:
            "For larger applications, organize code around features rather than creating one enormous components directory. Shared components can remain separate while feature-specific code stays together.",
          highlights: [
            "Feature-based structure",
            "Shared components",
            "Localize feature logic",
          ],
        },
        {
          content:
            "Architecture should evolve with the application. Avoid introducing complex patterns before the project actually needs them.",
          highlights: [
            "Start simple",
            "Scale gradually",
            "Avoid overengineering",
          ],
        },
      ],
    },

    {
      id: "accessibility",
      title: "Learn Accessibility",
      description: "Build accessible interfaces",
      prompt: "Explain frontend accessibility and WCAG fundamentals.",
      responses: [
        {
          content:
            "Web accessibility means designing interfaces that can be used by people with different abilities and assistive technologies. Keyboard navigation, semantic HTML, labels, focus states, and sufficient contrast are important foundations.",
          highlights: [
            "Semantic HTML",
            "Keyboard navigation",
            "Focus states",
          ],
        },
        {
          content:
            "Accessibility should be considered during component design rather than added at the end. Buttons, forms, dialogs, navigation, and dynamic content all need appropriate semantics and interaction behavior.",
          highlights: [
            "Accessible forms",
            "Accessible dialogs",
            "Semantic controls",
          ],
        },
        {
          content:
            "WCAG provides internationally recognized accessibility guidance organized around principles such as perceivable, operable, understandable, and robust content.",
          highlights: [
            "Perceivable",
            "Operable",
            "Understandable",
            "Robust",
          ],
        },
      ],
    },
  ],

  // =========================================================
  // RESEARCH
  // =========================================================
  research: [
    {
      id: "technology-research",
      title: "Research Technology",
      description: "Explore a technology deeply",
      prompt: "Research a technology and explain its advantages and limitations.",
      responses: [
        {
          content:
            "A useful technology evaluation should examine what the technology solves, its architecture, ecosystem, learning curve, performance characteristics, limitations, and common use cases.",
          highlights: [
            "Use cases",
            "Ecosystem",
            "Limitations",
          ],
        },
        {
          content:
            "Technology research should distinguish documented facts from opinions. Compare official documentation with practical developer experiences when making architectural decisions.",
          highlights: [
            "Official documentation",
            "Practical experience",
            "Separate facts from opinions",
          ],
        },
        {
          content:
            "The right technology depends on the project's requirements. There is rarely one solution that is optimal for every application.",
          highlights: [
            "Project requirements",
            "Trade-offs",
            "Context matters",
          ],
        },
      ],
    },

    {
      id: "compare-frameworks",
      title: "Compare Frameworks",
      description: "Compare development technologies",
      prompt: "Compare two frontend frameworks based on practical development needs.",
      responses: [
        {
          content:
            "A meaningful framework comparison should look at routing, rendering, data fetching, ecosystem, developer experience, deployment, performance, and the project's team requirements.",
          highlights: [
            "Rendering",
            "Data fetching",
            "Ecosystem",
          ],
        },
        {
          content:
            "Avoid comparing frameworks only by popularity. The more useful question is which technical capabilities match the application's actual requirements.",
          highlights: [
            "Requirements first",
            "Technical capabilities",
            "Context",
          ],
        },
        {
          content:
            "Framework choices involve trade-offs. One framework may simplify a particular architecture while another may provide more flexibility or a different development model.",
          highlights: [
            "Trade-offs",
            "Architecture",
            "Flexibility",
          ],
        },
      ],
    },

    {
      id: "best-practices",
      title: "Find Best Practices",
      description: "Research development practices",
      prompt: "Find important frontend development best practices.",
      responses: [
        {
          content:
            "Important frontend practices include semantic HTML, reusable components, clear state management, responsive design, accessibility, error handling, performance optimization, and consistent code organization.",
          highlights: [
            "Accessibility",
            "Performance",
            "Maintainability",
          ],
        },
        {
          content:
            "Best practices should solve real problems rather than become rules followed without context. A practice is valuable when it improves reliability, maintainability, user experience, or developer productivity.",
          highlights: [
            "Reliability",
            "User experience",
            "Developer productivity",
          ],
        },
        {
          content:
            "Keep your development practices documented and consistent. This makes collaboration and future maintenance much easier.",
          highlights: [
            "Document decisions",
            "Consistency",
            "Maintainability",
          ],
        },
      ],
    },

    {
      id: "api-research",
      title: "Research APIs",
      description: "Understand API architecture",
      prompt: "Explain how to evaluate and integrate a REST API.",
      responses: [
        {
          content:
            "When evaluating an API, examine authentication, endpoints, request and response formats, status codes, pagination, rate limits, error handling, and documentation.",
          highlights: [
            "Authentication",
            "Status codes",
            "Error handling",
          ],
        },
        {
          content:
            "A frontend integration should have a clear API layer instead of scattering fetch calls throughout UI components. This makes error handling and future API changes easier.",
          highlights: [
            "API layer",
            "Centralized handling",
            "Maintainability",
          ],
        },
        {
          content:
            "Always inspect actual API responses during development. Documentation may describe the intended response while real-world data can include optional fields or edge cases.",
          highlights: [
            "Inspect responses",
            "Handle optional fields",
            "Prepare for edge cases",
          ],
        },
      ],
    },

    {
      id: "security-research",
      title: "Web Security",
      description: "Learn common web security concepts",
      prompt: "Explain important security concerns in modern web applications.",
      responses: [
        {
          content:
            "Important web security areas include authentication, authorization, input validation, secure cookies, CSRF protection, XSS prevention, secret management, and secure API design.",
          highlights: [
            "Authentication",
            "Authorization",
            "Input validation",
          ],
        },
        {
          content:
            "Never treat frontend validation as a security boundary. Sensitive validation and authorization checks must also happen on the server.",
          highlights: [
            "Server-side validation",
            "Authorization",
            "Trust boundaries",
          ],
        },
        {
          content:
            "Security should be designed into the application architecture. Keeping secrets out of client bundles and validating untrusted input are basic but important practices.",
          highlights: [
            "Protect secrets",
            "Validate input",
            "Secure architecture",
          ],
        },
      ],
    },
  ],

  // =========================================================
  // PRODUCTIVITY
  // =========================================================
  productivity: [
    {
      id: "daily-plan",
      title: "Plan My Day",
      description: "Create a focused daily plan",
      prompt: "Create a productive daily plan for a developer.",
      responses: [
        {
          content:
            "Start by identifying the one task that has the highest impact. Then divide the remaining work into focused blocks and leave some time for unexpected issues.",
          highlights: [
            "Prioritize one major task",
            "Focused work blocks",
            "Leave buffer time",
          ],
        },
        {
          content:
            "A practical developer schedule can include learning, project development, debugging, communication, and a short review at the end of the day.",
          highlights: [
            "Learning",
            "Development",
            "Daily review",
          ],
        },
        {
          content:
            "Avoid filling every minute of the day. A realistic plan with fewer important tasks is easier to complete than an overloaded checklist.",
          highlights: [
            "Realistic goals",
            "Fewer priorities",
            "Avoid overload",
          ],
        },
      ],
    },

    {
      id: "learning-plan",
      title: "Create Learning Plan",
      description: "Build a structured study routine",
      prompt: "Create a structured learning plan for becoming a better frontend developer.",
      responses: [
        {
          content:
            "Divide learning into fundamentals, framework knowledge, practical projects, debugging, and interview preparation. Each stage should include hands-on practice.",
          highlights: [
            "Fundamentals",
            "Projects",
            "Interview preparation",
          ],
        },
        {
          content:
            "A strong learning routine alternates between studying concepts and building something with them. This turns passive knowledge into practical skill.",
          highlights: [
            "Study",
            "Build",
            "Practice",
          ],
        },
        {
          content:
            "Track progress by completed concepts and projects rather than only counting hours. A finished small project can demonstrate more progress than many hours of passive reading.",
          highlights: [
            "Track outcomes",
            "Build projects",
            "Measure practical progress",
          ],
        },
      ],
    },

    {
      id: "break-task",
      title: "Break Down Task",
      description: "Turn a large task into steps",
      prompt: "Break a large software development task into manageable steps.",
      responses: [
        {
          content:
            "Start by defining the desired outcome. Then divide it into requirements, UI, data flow, implementation, testing, and deployment.",
          highlights: [
            "Define outcome",
            "Split requirements",
            "Test the result",
          ],
        },
        {
          content:
            "If a task still feels too large, keep breaking it down until each step can be completed independently and has a clear expected result.",
          highlights: [
            "Smaller steps",
            "Clear outcomes",
            "Independent tasks",
          ],
        },
        {
          content:
            "A useful task breakdown also identifies dependencies. Knowing what must be completed first prevents unnecessary rework.",
          highlights: [
            "Identify dependencies",
            "Order tasks",
            "Reduce rework",
          ],
        },
      ],
    },

    {
      id: "focus-session",
      title: "Focus Session",
      description: "Create a distraction-free work session",
      prompt: "Create a focused coding session plan.",
      responses: [
        {
          content:
            "Choose one clearly defined coding goal, remove unnecessary distractions, prepare the files and references you need, and work until the goal or a natural checkpoint is reached.",
          highlights: [
            "One clear goal",
            "Remove distractions",
            "Prepare resources",
          ],
        },
        {
          content:
            "Before starting, write down what 'done' means for the session. This prevents you from continuously expanding the scope while working.",
          highlights: [
            "Define done",
            "Control scope",
            "Stay focused",
          ],
        },
        {
          content:
            "At the end of the session, record what was completed and the next concrete step. This makes it easier to restart later.",
          highlights: [
            "Record progress",
            "Define next step",
            "Easy restart",
          ],
        },
      ],
    },

    {
      id: "project-roadmap",
      title: "Build Project Roadmap",
      description: "Plan a project from idea to deployment",
      prompt: "Create a roadmap for building a modern web application.",
      responses: [
        {
          content:
            "Begin with requirements and user flows, then design the data model and architecture. After that, build the core functionality before adding secondary features and polish.",
          highlights: [
            "Requirements",
            "Architecture",
            "Core functionality",
          ],
        },
        {
          content:
            "A practical roadmap can follow this sequence: planning → UI design → project setup → authentication → core features → testing → optimization → deployment.",
          highlights: [
            "Planning",
            "Core features",
            "Deployment",
          ],
        },
        {
          content:
            "Build the smallest useful version first. Once the core workflow works, add enhancements based on actual requirements instead of trying to build everything simultaneously.",
          highlights: [
            "Build MVP first",
            "Validate the workflow",
            "Add features gradually",
          ],
        },
      ],
    },
  ],
};