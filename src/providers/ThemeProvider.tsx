
// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   type ReactNode,
// } from "react";

// type Theme = "light" | "dark";

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
//   setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(
//   undefined
// );

// interface ThemeProviderProps {
//   children: ReactNode;
//   defaultTheme?: Theme;
// }

// export default function ThemeProvider({
//   children,
//   defaultTheme = "light",
// }: ThemeProviderProps) {
//   const [theme, setThemeState] = useState<Theme>(() => {
//     // Browser only
//     if (typeof window !== "undefined") {
//       const savedTheme = window.localStorage.getItem("theme");

//       if (savedTheme === "light" || savedTheme === "dark") {
//         return savedTheme;
//       }
//     }

//     return defaultTheme;
//   });

//   /*
//    * Synchronize React theme with the DOM
//    * and localStorage.
//    */
//   useEffect(() => {
//     const root = document.documentElement;

//     root.dataset.theme = theme;

//     root.classList.toggle("dark", theme === "dark");

//     window.localStorage.setItem("theme", theme);
//   }, [theme]);

//   const setTheme = (newTheme: Theme) => {
//     setThemeState(newTheme);
//   };

//   const toggleTheme = () => {
//     setThemeState((currentTheme) =>
//       currentTheme === "dark" ? "light" : "dark"
//     );
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//         setTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error(
//       "useTheme must be used inside ThemeProvider"
//     );
//   }

//   return context;
// }

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}