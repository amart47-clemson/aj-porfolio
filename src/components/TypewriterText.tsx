"use client";

import { useEffect, useState } from "react";
import { typewriterRoles } from "@/lib/data";

export function TypewriterText() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterRoles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % typewriterRoles.length);
      }, 400);
    } else {
      const speed = isDeleting ? 35 : 75;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <p
      className="mt-4 min-h-[2rem] text-xl font-medium text-orange-400 sm:min-h-[2.25rem] sm:text-2xl"
      aria-live="polite"
    >
      <span className="bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-transparent">
        {text}
      </span>
      <span className="typewriter-cursor ml-0.5 text-orange-400">|</span>
    </p>
  );
}
