"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";

const AUTO_ROTATE_MS = 5000;
const FADE_MS = 350;

function ChevronLeft() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseUntilRef = useRef(0);
  const project = projects[activeIndex];

  const goTo = useCallback((index: number) => {
    const nextIndex = (index + projects.length) % projects.length;

    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

    setVisible(false);
    fadeTimeoutRef.current = setTimeout(() => {
      setActiveIndex(nextIndex);
      setVisible(true);
    }, FADE_MS);
  }, []);

  const navigate = useCallback(
    (index: number) => {
      pauseUntilRef.current = Date.now() + AUTO_ROTATE_MS;
      goTo(index);
    },
    [goTo],
  );

  const goNext = useCallback(() => {
    navigate(activeIndex + 1);
  }, [activeIndex, navigate]);

  const goPrev = useCallback(() => {
    navigate(activeIndex - 1);
  }, [activeIndex, navigate]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return;

      setVisible(false);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
        setVisible(true);
        pauseUntilRef.current = Date.now() + AUTO_ROTATE_MS;
      }, FADE_MS);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  const arrowClassName =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition-all hover:border-orange-500/30 hover:bg-white/[0.06] hover:text-orange-400 sm:h-12 sm:w-12";

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          aria-label="Previous project"
          className={`${arrowClassName} hidden sm:flex`}
          onClick={goPrev}
        >
          <ChevronLeft />
        </button>

        <article
          className={`group mx-auto flex min-h-[420px] w-full max-w-3xl flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 ease-in-out sm:min-h-[400px] sm:p-10 ${
            visible ? "opacity-100" : "opacity-0"
          } hover:-translate-y-1.5 hover:border-orange-500/30 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(249,115,22,0.12),0_0_0_1px_rgba(249,115,22,0.15)]`}
          style={{
            transitionProperty:
              "opacity, transform, box-shadow, border-color, background-color",
          }}
        >
          <div className="mb-5 h-px w-16 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-300 group-hover:w-24" />

          <p className="text-sm font-medium uppercase tracking-widest text-orange-400/80">
            Featured Project
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
          {project.tagline && (
            <p className="mt-1 text-sm font-medium text-orange-300/90">
              {project.tagline}
            </p>
          )}

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full border bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 ${
                  project.title === "Threat Intelligence Dashboard"
                    ? "border-orange-500/25"
                    : "border-white/8"
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>

          <p
            className={`mt-6 text-base leading-relaxed text-zinc-400 ${
              !project.highlights ? "flex-1" : ""
            }`}
          >
            {project.description}
          </p>

          {project.highlights && (
            <ul className="mt-4 flex-1 space-y-2.5">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400/80" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/8 pt-6">
            {project.live && (
              <a
                href={project.live}
                target={project.live.startsWith("#") ? undefined : "_blank"}
                rel={
                  project.live.startsWith("#")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(249,115,22,0.2)] transition-all hover:shadow-[0_0_32px_rgba(249,115,22,0.3)]"
              >
                Live Demo
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-orange-500/30 hover:text-white"
            >
              View Code
            </a>
          </div>
        </article>

        <button
          type="button"
          aria-label="Next project"
          className={`${arrowClassName} hidden sm:flex`}
          onClick={goNext}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          aria-label="Previous project"
          className={arrowClassName}
          onClick={goPrev}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next project"
          className={arrowClassName}
          onClick={goNext}
        >
          <ChevronRight />
        </button>
      </div>

      <div
        className="mt-8 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Project slides"
      >
        {projects.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-label={`Go to ${item.title}`}
            aria-selected={index === activeIndex}
            onClick={() => navigate(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                : "w-2.5 bg-white/20 hover:bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
