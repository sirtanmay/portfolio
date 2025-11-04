import React from "react";

const About = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      <div className="text-muted-foreground leading-relaxed">
        <p>
          I’m a dedicated Fullstack UI Developer with 3 years of experience
          creating engaging, responsive, and high-performance web and mobile
          applications. My expertise lies in building user-centric interfaces
          using React JS, React Native, Next.js, and Tailwind CSS. I’m
          passionate about crafting seamless user experiences that prioritize
          both functionality and aesthetic appeal.
          <br />
          Key Strengths:
        </p>
        <ul>
          <li>
            - Proficient in React for building efficient, component-based
            applications.
          </li>
          <li>
            - Skilled in NextJS to optimize performance, SSR and enhance SEO for
            web apps.
          </li>
          <li>
            - Experienced with React Native to develop cross-platform mobile
            applications.
          </li>
          <li>
            - Expertise in Tailwind CSS for rapid UI development and clean,
            maintainable design.
          </li>
          <li>
            - Well versed in containerization using Docker for consistent
            development and deployment via Kubernetes clusters to streamline
            CI/CD pipelines.
          </li>
        </ul>
        <p>
          I thrive in collaborative environments and enjoy staying up-to-date
          with the latest frontend technologies to deliver impactful solutions.
          Open to connecting with fellow tech enthusiasts and professionals!
        </p>
      </div>
    </section>
  );
};

export default About;
