

// // "use client";

// // import { Moon, Sun } from "lucide-react";
// // import { useTheme } from "@/providers/ThemeProvider";

// // export default function ThemeToggle() {
// //   const { theme, toggleTheme } = useTheme();

// //   return (
// //     <button
// //       type="button"
// //       onClick={toggleTheme}
// //       aria-label="Toggle theme"
// //       className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent"
// //     >
// //       {theme === "dark" ? (
// //         <Sun className="size-4" />
// //       ) : (
// //         <Moon className="size-4" />
// //       )}
// //     </button>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "@/providers/ThemeProvider";

// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Server + first client render must be identical
//   if (!mounted) {
//     return (
//       <button
//         type="button"
//         aria-label="Toggle theme"
//         className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground"
//       >
//         <span className="h-4 w-4" />
//       </button>
//     );
//   }

//   return (
//     <button
//       type="button"
//       onClick={toggleTheme}
//       aria-label="Toggle theme"
//       title={
//         theme === "dark"
//           ? "Switch to light mode"
//           : "Switch to dark mode"
//       }
//       className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-accent"
//     >
//       {theme === "dark" ? (
//         <Sun className="h-4 w-4" />
//       ) : (
//         <Moon className="h-4 w-4" />
//       )}
//     </button>
//   );
// }

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleToggle = () => {
    const isDark =
      document.documentElement.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-accent"
    >
      {/* Moon - visible in light mode */}
      <Moon className="h-4 w-4 dark:hidden" />

      {/* Sun - visible in dark mode */}
      <Sun className="hidden h-4 w-4 dark:block" />
    </button>
  );
}