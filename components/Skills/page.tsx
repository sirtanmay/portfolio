import React from "react";

const Skills = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>

      <h2 className="text-lg font-semibold tracking-tight">
        Languages & Databases
      </h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Javascript",
          "Typescript",
          "HTML5",
          "MongoDB",
          "PostgreSQL",
          "Prisma",
        ].map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {skill}
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold tracking-tight">
        Frameworks / Libraries
      </h2>
      <div className="flex flex-wrap gap-2">
        {[
          "ReactJS",
          "React Native",
          "NextJS",
          "NodeJS",
          "ExpressJS",
          "Bootstrap",
          "Tailwind CSS",
          "ShadCN",
          "Material UI",
          "GSAP",
          "CSS3",
          "REST API",
          "Vite",
          "Microservices",
        ].map((framework) => (
          <div
            key={framework}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {framework}
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold tracking-tight">State Management</h2>
      <div className="flex flex-wrap gap-2">
        {["Redux", "Zustand", "React Context API"].map((state) => (
          <div
            key={state}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {state}
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold tracking-tight">DevOps/Tools</h2>
      <div className="flex flex-wrap gap-2">
        {["Docker", "Kubernetes", "ArgoCD"].map((state) => (
          <div
            key={state}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {state}
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold tracking-tight">Software</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Android Studio",
          "XCode",
          "VSCode",
          "Interface Builder (Figma, XD)",
        ].map((software) => (
          <div
            key={software}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {software}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
