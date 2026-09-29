
export type PromptCategory =
  | "coding"
  | "writing"
  | "learning"
  | "research"
  | "productivity";

export interface PromptResponse {
  content: string;
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
  // ==========================================================
  // CODING
  // ==========================================================

  coding: [
    {
      id: "understand-concept",
      title: "Understand a Concept",
      description:
        "Understand a programming concept from the fundamentals to practical usage with clear explanations and examples.",
      prompt:
        "Explain the programming concept I provide from beginner to advanced level. Start with the core idea, explain how it works, provide practical examples, discuss common mistakes, and describe when the concept is useful in real projects.",
      responses: [
        {
          content:
            "A programming concept is easier to understand when you connect the theory with the problem it solves. Start by understanding the core idea, then examine how it behaves in actual code and finally consider where it is useful in a real application.\n\nFor example, when learning asynchronous JavaScript, it is useful to understand promises before moving to async/await. Once the basic mechanism is clear, you can explore error handling, multiple asynchronous operations, and how asynchronous behavior interacts with the event loop.\n\nThe goal should not be memorizing syntax. A strong understanding means you can explain the concept in your own words, recognize when it is useful, identify common mistakes, and apply it to a new problem.",
        },
      ],
    },

    {
      id: "debug-fix-code",
      title: "Debug & Fix Code",
      description:
        "Find the root cause of a JavaScript, TypeScript, React, or frontend problem and understand how to fix it.",
      prompt:
        "Analyze the code and error information I provide. Identify the likely root cause, explain why the problem occurs, suggest a corrected approach, and recommend improvements that make the implementation more reliable and maintainable.",
      responses: [
        {
          content:
            "A reliable debugging process starts by reproducing the problem consistently. Instead of immediately changing the code, first identify exactly what is failing and under which conditions it happens.\n\nNext, inspect the error message and locate the file and line involved. Trace the values entering that section of the application and check whether they match what the code expects.\n\nFor frontend applications, browser DevTools can help inspect errors, network requests, DOM changes, and breakpoints. React DevTools can be useful for examining component props and state.\n\nOnce the root cause is identified, make the smallest change necessary to correct the underlying problem. Avoid changing several unrelated areas simultaneously because that makes it difficult to determine which change actually solved the issue.",
        },
      ],
    },

    {
      id: "review-improve-code",
      title: "Review & Improve Code",
      description:
        "Get a structured developer-style review focused on correctness, readability, maintainability, accessibility, and architecture.",
      prompt:
        "Review the code I provide as an experienced software developer. Analyze correctness, readability, maintainability, performance, accessibility, error handling, type safety, and architecture. Explain each important issue and suggest practical improvements.",
      responses: [
        {
          content:
            "A useful code review should begin with correctness. The implementation should first satisfy its intended behavior before optimization or stylistic improvements are considered.\n\nAfter correctness, examine readability and maintainability. Look for unclear naming, duplicated logic, unnecessarily large components, deeply nested conditions, excessive state, and responsibilities that should be separated.\n\nFor frontend applications, accessibility and user experience are also important. Interactive elements should have appropriate semantics, keyboard behavior, focus states, and sufficient visual contrast.\n\nA strong review should not simply list problems. Each important issue should explain why it matters and, when possible, provide a practical alternative that fits the existing architecture.",
        },
      ],
    },

    {
      id: "build-feature",
      title: "Build a Feature",
      description:
        "Turn a product requirement into a practical implementation plan with architecture, components, data flow, and edge cases.",
      prompt:
        "Help me design and implement the software feature I describe. Break the requirement into smaller tasks, suggest an appropriate architecture, identify UI and data requirements, explain the data flow, consider edge cases, and provide a practical implementation strategy.",
      responses: [
        {
          content:
            "A large feature should first be converted into a clear set of requirements before implementation begins.\n\nStart by identifying what the user should be able to do, what information the feature needs, and what should happen after each interaction. Then divide the feature into smaller areas such as UI components, state management, API communication, validation, error handling, and persistence.\n\nNext, identify dependencies. For example, an authentication-dependent feature may need the user session before the main functionality can work.\n\nFinally, build the smallest complete version of the feature first. Once the primary workflow works correctly, additional states, animations, optimizations, and advanced functionality can be added.",
        },
      ],
    },

    {
      id: "optimize-code",
      title: "Optimize Code",
      description:
        "Improve code quality, efficiency, and maintainability without changing the intended behavior.",
      prompt:
        "Analyze the code I provide for unnecessary complexity, duplicated logic, performance problems, and maintainability issues. Explain what should be improved and provide a cleaner approach while preserving the intended behavior.",
      responses: [
        {
          content:
            "Code optimization should begin with understanding the actual problem rather than applying performance techniques automatically.\n\nFirst examine whether the code is doing unnecessary work, repeating expensive operations, rendering unnecessarily, or maintaining state that could be derived instead.\n\nThen consider structural improvements such as extracting reusable logic, simplifying conditions, reducing duplication, and separating responsibilities.\n\nIn frontend applications, performance should also be considered from the user's perspective. Large bundles, unnecessary network requests, excessive rendering, and unoptimized images can all affect the experience.\n\nThe best optimization is usually the one that improves measurable behavior while keeping the code understandable.",
        },
      ],
    },

    {
      id: "design-architecture",
      title: "Design Architecture",
      description:
        "Plan a scalable frontend structure for components, features, data fetching, state, and shared functionality.",
      prompt:
        "Design a scalable frontend architecture for the application I describe. Explain how components, features, API communication, state management, and shared functionality should be organized.",
      responses: [
        {
          content:
            "A scalable frontend architecture should separate responsibilities without introducing unnecessary complexity.\n\nUI components should primarily focus on presentation and user interaction, while data fetching, business logic, and reusable utilities can be separated when the application becomes large enough to justify it.\n\nFor feature-heavy applications, organizing code around features can make ownership and maintenance easier. Shared components can remain in a common area while feature-specific components and logic stay together.\n\nArchitecture should evolve with the application. A small project does not necessarily need a complex state-management or abstraction layer from the beginning. Start with clear boundaries and introduce additional structure when the application's requirements justify it.",
        },
      ],
    },
  ],

  // ==========================================================
  // WRITING
  // ==========================================================

  writing: [
    {
      id: "draft-email",
      title: "Draft an Email",
      description:
        "Create a clear, concise, and professional email for workplace, academic, business, or career communication.",
      prompt:
        "Write a professional email based on the information I provide. Keep the message clear, concise, respectful, and appropriate for the intended recipient. Preserve the important details without making the email unnecessarily long.",
      responses: [
        {
          content:
            "A professional email should make its purpose clear as early as possible. Start with an appropriate greeting, briefly explain why you are writing, provide the relevant information, and finish with a clear next step or polite closing.\n\nFor job-related communication, it is usually helpful to mention the position, briefly connect your relevant background to the opportunity, and provide your resume or portfolio when appropriate.\n\nAvoid unnecessary background information or very long paragraphs. The recipient should be able to understand the purpose of the message quickly while still receiving all the information needed to respond.",
        },
      ],
    },

    {
      id: "rewrite-refine",
      title: "Rewrite & Refine",
      description:
        "Improve clarity, grammar, structure, and naturalness while preserving your original meaning.",
      prompt:
        "Rewrite the text I provide to make it clearer, more natural, and professional while preserving the original meaning. Do not add information that was not provided.",
      responses: [
        {
          content:
            "A strong rewrite should improve the communication without changing what the writer actually wants to say.\n\nThe process usually involves removing unnecessary repetition, improving sentence structure, replacing unclear expressions, correcting grammar, and making the overall flow easier to follow.\n\nThe appropriate tone depends on the audience. A message to a manager may require a more formal tone, while communication with a colleague can be professional but conversational.\n\nThe goal is not to make every sentence sound complicated. Professional writing is often clearer when it uses direct language and shorter sentences.",
        },
      ],
    },

    {
      id: "linkedin-post",
      title: "Create a LinkedIn Post",
      description:
        "Turn a project, achievement, learning experience, or professional milestone into an authentic LinkedIn post.",
      prompt:
        "Create a professional LinkedIn post from the information I provide. Make it authentic, clear, and useful rather than overly promotional. Include an engaging opening, the main experience or lesson, and an appropriate closing.",
      responses: [
        {
          content:
            "A useful LinkedIn post should give the reader something more than an announcement. Instead of simply saying that you learned a technology, completed a project, or reached a milestone, explain what you discovered and why it mattered.\n\nA practical structure is to begin with the milestone, describe an interesting challenge or lesson, explain what you learned, and finish with what you plan to explore next.\n\nSpecific details make professional posts more meaningful. Mentioning a real project, technical challenge, design decision, or lesson learned usually creates more value than listing technologies without context.",
        },
      ],
    },

    {
      id: "create-documentation",
      title: "Create Documentation",
      description:
        "Create clear technical documentation that helps developers understand, install, use, and maintain a project.",
      prompt:
        "Create professional technical documentation for the project or feature I provide. Include an overview, requirements, installation, configuration, usage examples, important implementation details, and troubleshooting guidance where appropriate.",
      responses: [
        {
          content:
            "Good technical documentation should allow someone unfamiliar with the project to understand what it does and how to start working with it.\n\nA useful structure normally begins with an overview and the project's purpose. It can then explain prerequisites, installation, environment configuration, available scripts, usage, architecture, and deployment.\n\nExamples are particularly valuable because they show how the documented feature is actually used. Troubleshooting information can also reduce the amount of time developers spend solving common setup problems.\n\nDocumentation should be maintained as the project changes. Outdated instructions can be more confusing than having no documentation at all.",
        },
      ],
    },

    {
      id: "cover-letter",
      title: "Write a Cover Letter",
      description:
        "Create a concise, role-focused cover letter that connects your background with the position.",
      prompt:
        "Write a concise cover letter based on my background and the job description I provide. Focus on relevant skills, projects, experience, and motivation without simply repeating my resume.",
      responses: [
        {
          content:
            "A useful cover letter should complement the resume rather than repeat it word for word.\n\nStart by showing clear interest in the specific position. Then connect two or three relevant experiences, projects, or skills to what the role requires.\n\nFor an entry-level candidate, practical projects can provide valuable evidence of ability. Explain what you built, what technologies you used, and what problems you solved rather than simply listing technologies.\n\nThe final paragraph can briefly express interest in discussing the opportunity further and provide a professional closing.",
        },
      ],
    },

    {
      id: "summarize-content",
      title: "Summarize Content",
      description:
        "Turn long articles, documents, notes, or explanations into concise summaries while preserving important information.",
      prompt:
        "Summarize the content I provide. Identify the central ideas, important supporting details, conclusions, and actionable information while removing unnecessary repetition.",
      responses: [
        {
          content:
            "An effective summary should preserve the meaning and important information of the original material while significantly reducing its length.\n\nStart by identifying the central argument or purpose. Then determine which supporting points are necessary for understanding that main idea and remove examples or repetition that do not add essential context.\n\nFor technical or professional content, it can also be useful to separate the main findings from recommendations or action items.\n\nA good summary should allow someone who has not read the complete material to understand its most important points without incorrectly changing the original message.",
        },
      ],
    },

    {
      id: "polish-writing",
      title: "Polish Your Writing",
      description:
        "Correct grammar, spelling, punctuation, and sentence structure while preserving your original voice.",
      prompt:
        "Correct the grammar, spelling, punctuation, and sentence structure of the text I provide. Preserve my original meaning and writing style as much as possible.",
      responses: [
        {
          content:
            "Grammar improvement should focus on making the writing correct and easier to understand without unnecessarily changing the writer's personality or intended message.\n\nCommon improvements include correcting verb agreement, article usage, punctuation, sentence structure, spelling, and unclear references.\n\nIt is also useful to consider consistency. Professional writing should maintain a consistent tense, terminology, formatting style, and level of formality.\n\nA polished text does not necessarily need complicated vocabulary. Clear and natural language is usually more effective than unnecessarily formal wording.",
        },
      ],
    },
  ],

  // ==========================================================
  // LEARNING
  // ==========================================================

  learning: [
    {
      id: "learn-new-skill",
      title: "Learn a New Skill",
      description:
        "Study a new subject progressively with explanations, practical examples, exercises, and common mistakes.",
      prompt:
        "Teach me the subject I provide based on my current knowledge level. Explain each concept clearly, connect it to practical examples, identify common mistakes, and provide exercises that reinforce the concept.",
      responses: [
        {
          content:
            "A strong learning path should begin with the fundamentals and gradually move toward more complex ideas.\n\nFirst establish the basic vocabulary and mental models. Once the foundation is comfortable, introduce intermediate concepts and connect them to practical situations.\n\nLearning becomes more effective when explanation is combined with active practice. After studying a concept, try to reproduce it without looking at the solution, explain it in your own words, and solve a slightly different problem.\n\nThe goal is not simply to remember information. You should eventually be able to recognize when the concept is useful and apply it to a new situation.",
        },
      ],
    },

    {
      id: "interview-preparation",
      title: "Prepare for an Interview",
      description:
        "Prepare for technical interviews through theory, coding exercises, project discussions, and practical questions.",
      prompt:
        "Create a structured technical interview preparation session based on my target role. Include theory questions, coding problems, practical scenarios, project discussion questions, and follow-up questions.",
      responses: [
        {
          content:
            "A strong technical interview preparation plan should combine several types of practice rather than focusing only on memorizing theory.\n\nStart with fundamentals relevant to the target role. For a frontend position, this may include JavaScript, TypeScript, React, Next.js, browser behavior, HTTP, accessibility, performance, and basic web security.\n\nCoding practice should focus on understanding the problem before writing the solution. After solving a problem, review the complexity, edge cases, and alternative approaches.\n\nProject discussions are equally important. Be prepared to explain your architecture, technical decisions, challenges, debugging process, trade-offs, and what you would improve if you had more time.",
        },
      ],
    },

    {
      id: "understand-hooks",
      title: "Understand React Hooks",
      description:
        "Learn how React Hooks work, when they should be used, and which common mistakes to avoid.",
      prompt:
        "Explain React Hooks from beginner to advanced level. Explain the purpose of commonly used Hooks, when each should be used, common mistakes, and practical examples.",
      responses: [
        {
          content:
            "React Hooks allow function components to use capabilities such as state, effects, context, and refs.\n\nuseState is commonly used when a component needs to manage local state. useRef is useful for storing mutable values or accessing DOM elements without causing a render when the value changes. useContext allows components to consume shared context.\n\nuseEffect is different because it is primarily intended for synchronizing a component with an external system, such as a subscription, browser API, or network-related side effect. It should not automatically be used for every piece of derived logic.\n\nMore advanced Hooks such as useMemo and useCallback can help in specific performance-sensitive situations, but adding them everywhere can make code harder to understand without providing meaningful benefits.",
        },
      ],
    },

    {
      id: "learning-plan",
      title: "Build a Learning Plan",
      description:
        "Turn a learning goal into a structured roadmap with progressive topics, practical exercises, and milestones.",
      prompt:
        "Create a structured learning plan based on my goal, current knowledge, and available time. Organize the subjects progressively, include hands-on practice, and define measurable milestones.",
      responses: [
        {
          content:
            "An effective learning plan should begin with the desired outcome rather than simply creating a long list of topics.\n\nFirst identify the target skill and your current level. Then divide the subject into foundational concepts, intermediate knowledge, advanced topics, and practical application.\n\nEach stage should include active practice. Reading or watching lessons can introduce a concept, but building something with it provides stronger evidence that the concept is understood.\n\nProgress can be measured through completed projects, solved problems, explanations you can give without notes, and your ability to apply the knowledge to unfamiliar situations.",
        },
      ],
    },

    {
      id: "learn-from-example",
      title: "Learn from an Example",
      description:
        "Understand a concept by analyzing a real example and explaining why each important part works.",
      prompt:
        "Analyze the example I provide and teach me the concepts behind it. Explain what each important part does, why it is written that way, how the pieces interact, and what would happen if the implementation changed.",
      responses: [
        {
          content:
            "Learning from an existing example is useful because it connects abstract concepts with an actual implementation.\n\nStart by identifying the overall purpose of the example. Then break it into smaller sections and explain the responsibility of each part.\n\nAfter understanding the implementation, examine the relationships between the parts. For example, in a frontend application, it can be useful to understand how user interaction changes state, how state affects rendering, and how data is eventually sent to or received from an API.\n\nFinally, consider variations. Changing one part of the example and predicting the result is an effective way to test whether the underlying concept has actually been understood.",
        },
      ],
    },

    {
      id: "learn-step-by-step",
      title: "Learn Step by Step",
      description:
        "Learn a difficult topic through a structured explanation that gradually moves from simple ideas to deeper concepts.",
      prompt:
        "Teach me the topic I provide as a patient instructor. Start with the basic idea, build toward advanced concepts, use practical examples, explain common misunderstandings, and finish with practice questions.",
      responses: [
        {
          content:
            "A good teaching explanation should introduce complexity gradually rather than presenting every detail at once.\n\nBegin with the simplest mental model that accurately describes the topic. Once that foundation is clear, introduce the next layer of detail and connect it to the original idea.\n\nExamples are useful because they show how the concept behaves in practice. However, examples should support the explanation rather than replace it.\n\nA final test is whether you can explain the concept yourself. If you can describe what it does, why it exists, when it should be used, and what common mistakes look like, your understanding is becoming practical rather than purely theoretical.",
        },
      ],
    },
  ],

  // ==========================================================
  // RESEARCH
  // ==========================================================

  research: [
    {
      id: "explore-technology",
      title: "Explore a Technology",
      description:
        "Explore a technology's purpose, architecture, ecosystem, use cases, advantages, limitations, and practical considerations.",
      prompt:
        "Research the technology I provide. Explain what it is, what problem it solves, how it works at a high level, common use cases, advantages, limitations, ecosystem, and situations where another approach may be more appropriate.",
      responses: [
        {
          content:
            "A useful technology evaluation should begin with the problem the technology is designed to solve.\n\nAfter establishing its purpose, examine its architecture, primary features, ecosystem, learning curve, common use cases, and practical limitations.\n\nIt is also important to distinguish documented facts from opinions. Official documentation can provide information about capabilities and supported features, while developer experiences may provide insight into workflow, common problems, and practical trade-offs.\n\nThe final decision should be based on the application's requirements rather than popularity alone. A technology can be useful while still being inappropriate for a particular project.",
        },
      ],
    },

    {
      id: "compare-options",
      title: "Compare Options",
      description:
        "Compare technologies and approaches using practical criteria while understanding the trade-offs behind each option.",
      prompt:
        "Compare the options I provide based on architecture, developer experience, performance considerations, ecosystem, learning curve, scalability, deployment, and typical use cases. Explain the trade-offs without assuming that one solution is universally better.",
      responses: [
        {
          content:
            "A meaningful comparison should begin with the requirements of the project rather than with popularity.\n\nDepending on the situation, useful comparison criteria may include architecture, ecosystem, developer experience, performance characteristics, deployment options, learning curve, community resources, and long-term maintenance.\n\nTrade-offs are particularly important. One option may provide a simpler development experience for a particular application, while another may offer more flexibility or different architectural capabilities.\n\nA useful comparison therefore explains how each option behaves under different requirements rather than presenting a single universal choice.",
        },
      ],
    },

    {
      id: "explore-best-practices",
      title: "Explore Best Practices",
      description:
        "Explore established practices for building reliable, maintainable, accessible, and scalable applications.",
      prompt:
        "Research important best practices for the topic I provide. Explain why each practice matters, when it applies, common mistakes, and how it can be implemented in a real project.",
      responses: [
        {
          content:
            "Best practices should be understood as approaches that help solve recurring problems rather than rules that must always be followed without context.\n\nFor frontend development, examples include semantic HTML, accessible interaction patterns, clear component boundaries, predictable state management, error handling, responsive design, performance optimization, and consistent code organization.\n\nEach practice should be evaluated according to the problem it addresses. For example, a particular abstraction may be valuable in a large application but unnecessary in a small project.\n\nThe most useful practices are those that improve reliability, maintainability, user experience, or developer productivity in the specific context of the application.",
        },
      ],
    },

    {
      id: "explore-api",
      title: "Explore an API",
      description:
        "Understand an API's authentication, endpoints, responses, errors, limits, and integration requirements before using it.",
      prompt:
        "Analyze the API information I provide. Explain authentication, endpoints, request and response structures, status codes, errors, pagination, rate limits, important edge cases, and considerations for integrating it into an application.",
      responses: [
        {
          content:
            "Before integrating an API, first understand how the API expects clients to communicate with it.\n\nImportant areas include authentication, available endpoints, HTTP methods, request parameters, request bodies, response formats, status codes, error responses, pagination, and rate limits.\n\nThe actual response data should also be inspected during development. Documentation usually describes the intended structure, but real responses can contain optional fields, empty values, unexpected states, or edge cases.\n\nFor frontend applications, keeping API communication organized in a dedicated data-access layer can make error handling, type definitions, and future API changes easier to manage.",
        },
      ],
    },

    {
      id: "explore-web-security",
      title: "Explore Web Security",
      description:
        "Understand important security considerations for authentication, authorization, input handling, data protection, and APIs.",
      prompt:
        "Explain the major security considerations for the application or technology I provide. Cover authentication, authorization, input validation, data protection, common vulnerabilities, and practical defensive measures.",
      responses: [
        {
          content:
            "Modern web application security involves several layers rather than one single protection mechanism.\n\nAuthentication determines who a user is, while authorization determines what that authenticated user is allowed to do. These concepts should not be treated as interchangeable.\n\nApplications should also validate untrusted input, protect sensitive information, use secure session mechanisms, and avoid exposing secrets in client-side code.\n\nCommon concerns include cross-site scripting, cross-site request forgery, insecure authorization, injection vulnerabilities, weak credential handling, and accidental exposure of sensitive data.\n\nSecurity decisions should be made at the appropriate trust boundary. Client-side validation can improve user experience, but sensitive validation and authorization must also be enforced on the server.",
        },
      ],
    },

    {
      id: "explore-topic",
      title: "Explore a Topic",
      description:
        "Explore a broad topic through background information, important concepts, evidence, practical implications, and limitations.",
      prompt:
        "Research the topic I provide and organize the information into background, important concepts, current understanding, practical implications, limitations, and areas where information may be uncertain or contested.",
      responses: [
        {
          content:
            "A good research process begins by clearly defining the question being investigated.\n\nOnce the scope is established, gather information from reliable sources and separate established facts from interpretation, opinion, and uncertain claims.\n\nOrganize the findings into a logical structure so the reader can understand the background first, followed by the main evidence, practical implications, limitations, and unresolved questions.\n\nResearch becomes more useful when uncertainty is made explicit. Not every claim has the same level of evidence, and identifying those differences helps readers understand the subject more accurately.",
        },
      ],
    },
  ],

  // ==========================================================
  // PRODUCTIVITY
  // ==========================================================

  productivity: [
    {
      id: "plan-your-day",
      title: "Plan Your Day",
      description:
        "Create a realistic daily plan based on priorities, available time, deadlines, and unexpected work.",
      prompt:
        "Help me plan my day based on the tasks, deadlines, and available time I provide. Prioritize important work, organize tasks into realistic blocks, and leave enough flexibility for unexpected issues.",
      responses: [
        {
          content:
            "A useful daily plan should prioritize outcomes rather than attempting to fill every minute.\n\nStart by identifying the task that has the highest impact or the most important deadline. Then organize the remaining tasks according to urgency, importance, and dependencies.\n\nLarge tasks can be divided into focused work sessions with clear outcomes. Smaller administrative tasks can be grouped together rather than interrupting deeper work repeatedly.\n\nIt is also important to leave some buffer time. A schedule with no flexibility can become unrealistic as soon as an unexpected problem appears.",
        },
      ],
    },

    {
      id: "break-down-task",
      title: "Break Down a Task",
      description:
        "Turn a large or unclear task into smaller actionable steps with clear outcomes and dependencies.",
      prompt:
        "Break the task I provide into smaller actionable steps. Identify dependencies, suggest an appropriate order, define the expected outcome of each major step, and point out anything that may require clarification.",
      responses: [
        {
          content:
            "A large task becomes easier to manage when its desired outcome is clearly defined first.\n\nOnce the outcome is known, divide the work into logical stages. For a software feature, for example, the stages might include requirements, design, implementation, testing, and deployment.\n\nEach stage can then be divided into smaller tasks until the individual actions are clear enough to complete independently.\n\nDependencies should also be identified. If one task requires another task to be completed first, making that relationship explicit helps prevent rework and confusion.",
        },
      ],
    },

    {
      id: "focus-session",
      title: "Start a Focus Session",
      description:
        "Design a distraction-free work session around one clearly defined goal and a measurable outcome.",
      prompt:
        "Design a focused work session for the task I provide. Define the objective, preparation steps, work structure, distractions to eliminate, and a clear definition of what should be completed by the end.",
      responses: [
        {
          content:
            "A focused work session should begin with one clearly defined objective. Instead of saying 'work on the project,' define a concrete outcome such as completing a specific component, fixing a particular bug, or writing a section of documentation.\n\nBefore starting, prepare the files, references, tools, and information required for the task. This reduces unnecessary interruptions once the session begins.\n\nDuring the session, avoid expanding the scope unless the new issue is necessary for the original objective. Record unrelated ideas or tasks separately so they do not interrupt the current work.\n\nAt the end, record what was completed and identify the next concrete step. This makes it easier to continue later.",
        },
      ],
    },

    {
      id: "plan-project",
      title: "Plan a Project",
      description:
        "Turn a project idea into a structured roadmap from requirements and architecture through implementation and deployment.",
      prompt:
        "Create a development roadmap for the project I describe. Organize it into requirements, planning, architecture, UI, implementation, testing, optimization, and deployment. Identify dependencies and recommend a logical development sequence.",
      responses: [
        {
          content:
            "A project roadmap should describe how an idea will move from requirements to a working product.\n\nBegin with the problem the project solves and identify the primary users and workflows. Then establish the core requirements before selecting architecture and technologies.\n\nThe implementation should prioritize the core user journey. Authentication, database design, APIs, primary UI, and essential business logic should generally be addressed before secondary features and visual polish.\n\nOnce the core workflow is functional, testing, accessibility, performance optimization, error handling, and deployment can be addressed systematically.\n\nA roadmap should remain flexible. Requirements can change as the project develops, so the roadmap should guide development without becoming a rigid list that prevents adaptation.",
        },
      ],
    },

    {
      id: "organize-ideas",
      title: "Organize Your Ideas",
      description:
        "Turn scattered notes, thoughts, requirements, or ideas into a clear and structured plan.",
      prompt:
        "Organize the ideas I provide into clear categories. Identify the main objective, supporting ideas, priorities, dependencies, unanswered questions, and practical next steps.",
      responses: [
        {
          content:
            "When ideas are scattered across notes or conversations, the first step is to identify the central objective.\n\nNext, group related ideas together and distinguish between requirements, optional improvements, questions, decisions, and future possibilities.\n\nPriorities can then be established based on importance and dependencies. Some ideas may be valuable but should not be addressed until the core objective has been completed.\n\nFinally, convert the organized information into concrete next steps. A structured list is most useful when it makes it clear what should happen next rather than simply reorganizing the original notes.",
        },
      ],
    },

    {
      id: "plan-your-week",
      title: "Plan Your Week",
      description:
        "Create a realistic weekly plan that balances important goals, recurring responsibilities, learning, and unfinished work.",
      prompt:
        "Help me create a realistic weekly plan based on my goals, responsibilities, deadlines, and available time. Prioritize important outcomes, divide larger goals into manageable tasks, and leave room for unexpected work.",
      responses: [
        {
          content:
            "A useful weekly plan should begin with the outcomes that matter most during the week.\n\nIdentify important deadlines, recurring responsibilities, and larger goals. Then divide larger goals into smaller tasks that can be completed during individual work sessions.\n\nAvoid assigning every available hour to planned work. Unexpected tasks, delays, and changes are normal, so leaving some capacity makes the plan more realistic.\n\nAt the end of the week, review what was completed, what moved forward, and what should be carried into the following week. This creates a planning cycle rather than treating each week as an isolated checklist.",
        },
      ],
    },
  ],
};
