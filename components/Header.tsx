"use client";

import { HiSun, HiMoon } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDark(true);
    }
  }, []);

  return (
    <header className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">John D. Lee</h1>
        <div className="flex gap-2.5">
          <a
            href="https://github.com/john-dlee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="John on GitHub"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <SiGithub className="size-5" />
          </a>

          <a
            href="mailto:john.d.lee.au@gmail.com"
            aria-label="Email John"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <HiOutlineMail className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex"
          >
            {isDark ? (
              <HiSun className="hover:text-accent transition-colors size-5" />
            ) : (
              <HiMoon className="hover:text-accent transition-colors size-5" />
            )}
          </button>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        UNSW Computer Science graduate. Currently developing a full-stack, 
        mobile-first web application for a local sushi takeaway store using
        Next.js, React, and Supabase to sync customer orders with a live kitchen
        dashboard in real time.
      </p>
    </header>
  );
}