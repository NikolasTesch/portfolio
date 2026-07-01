"use client";

import dynamic from "next/dynamic";

export const About = dynamic(
  () => import("./About").then((mod) => ({ default: mod.About })),
  { ssr: false }
);

export const Skills = dynamic(
  () => import("./Skills").then((mod) => ({ default: mod.Skills })),
  { ssr: false }
);

export const Projects = dynamic(
  () => import("./Projects").then((mod) => ({ default: mod.Projects })),
  { ssr: false }
);

export const Contact = dynamic(
  () => import("./Contact").then((mod) => ({ default: mod.Contact })),
  { ssr: false }
);
