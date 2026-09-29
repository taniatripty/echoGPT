## Project Overview

EchoGPT is a modern AI workspace designed to bring multiple AI-powered experiences into a single, intuitive platform. This project is a complete UI/UX redesign of the EchoGPT web application, focusing on creating a clean, responsive, accessible, and user-friendly experience across desktop, tablet, and mobile devices.

The application provides a centralized workspace where users can interact with AI chat, explore different AI models, generate images, experiment with video creation, manage conversation history, and customize their experience.

### Key Highlights

- Modern and responsive landing page with a clear product-focused layout.
- AI chat dashboard with prompt suggestions and category-based prompts.
- Support for multiple AI model selections.
- Image Studio interface for image-generation workflows.
- Video Studio interface for video-generation workflows.
- Chat history management with conversation storage and deletion.
- User authentication using email/password and Google OAuth.
- User profile menu with account information and logout functionality.
- Light and dark theme support.
- Settings modal for application preferences and AI model selection.
- Responsive sidebar navigation for the AI workspace.
- Product preview section showcasing the main application interfaces.
- Accessibility-focused UI with semantic HTML, keyboard-friendly interactions, labels, and appropriate contrast.
- Terms of Use and Privacy Policy pages.
- Newsletter/email functionality using EmailJS.
- Responsive layouts optimized for different screen sizes.

### Project Goals

The main goals of this project are to:

1. Improve the overall EchoGPT user experience.
2. Create a consistent visual design system across the application.
3. Make the interface responsive across different devices.
4. Provide clear navigation between AI features and tools.
5. Improve accessibility and usability.
6. Create a scalable frontend structure for future AI integrations.
7. Provide a professional foundation for integrating real AI services and additional features in the future.


## Setup Instructions

Follow the steps below to run EchoGPT locally.

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/taniatripty/echoGPT.git

cd echoGPT

```

### 2. Install Dependencies

```bash
npm install

```
### 3.Configure Environment Variables
 
 ```bash
 # NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=echoGPTDB

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

```

### 4. Run the Development Server

```bash
npm run dev 
```

### 5.Build for Production

```bash
npm run build 
```

### 6. Then start the production server

```bash
npm  start 
```

## Technologies Used

### Frontend

- **Next.js** – React framework for building the application.
- **React** – Component-based UI development.
- **TypeScript** – Type-safe JavaScript development.
- **Tailwind CSS** – Utility-first CSS framework for responsive styling.
- **shadcn/ui** – Reusable and accessible UI components.
- **Lucide React** – Icons used throughout the application.
- **React Icons** – Additional brand and social media icons.
- **Framer Motion** – Animations and interactive UI effects.

### Authentication

- **NextAuth.js** – Authentication and session management.
- **Google OAuth** – Google-based authentication.
- **Credentials Authentication** – Email/password authentication.

### Database

- **MongoDB** – Database for application and authentication-related data.
- **MongoDB Native Driver** – Server-side MongoDB database operations.

### Email

- **EmailJS** – Client-side email and newsletter functionality.

## Assumptions

While redesigning EchoGPT, I made a few practical assumptions based on the existing application, the assignment requirements, and the overall user experience I wanted to create:

- I assumed EchoGPT should feel like a **single AI workspace** where users can access chat, image, video, AI models, and other tools without having to move between completely different interfaces.

- I focused on making the experience **simple and intuitive**, so a new user can understand the main features without needing much guidance.

- I assumed users would expect both **light and dark themes**, so I designed the interface to work consistently in both modes.

- I treated the AI Chat, Image Studio, and Video Studio as the main experiences and designed their interfaces around a similar visual language and interaction pattern.

- For the chat experience, I used **demo responses and local conversation handling** to demonstrate the complete frontend interaction without depending on a live AI service.

- I assumed that image and video generation would eventually be connected to real AI services, so the current interfaces are designed to make those integrations easier in the future.

- I assumed users would want to access their account information quickly, so I added a profile menu with account details, theme controls, and logout functionality.

- I designed the application to be **responsive from the beginning**, assuming that users may access EchoGPT from desktop, tablet, or mobile devices.

- I considered accessibility throughout the redesign, assuming that users may navigate the application using different input methods and accessibility needs.

- I kept the overall design flexible so that additional AI models, tools, integrations, and subscription features can be added without requiring a complete redesign of the application.

- I treated the existing EchoGPT concept as the foundation and focused on improving its **visual consistency, navigation, usability, responsiveness, and overall user experience**.

## Additional Features Implemented

- **AI Chat Prompt Library** – Added categorized, ready-to-use prompts for Coding, Writing, Learning, Research, and Productivity to help users get started quickly.

- **Image & Video Studio** – Added dedicated creative workspaces with upload, preview, model selection, aspect-ratio, duration, and generation workflows.

- **User Profile & Theme System** – Added a profile menu with account information, logout, and theme controls, along with a consistent light/dark mode across the application.