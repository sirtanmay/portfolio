import React from "react";

const Skills = () => {
	return (
		<section className="space-y-4">
			<h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
			<h2 className="text-lg font-semibold tracking-tight">Experienced</h2>
			<div className="flex flex-wrap gap-2">
				{[
					"React",
					"React Native",
					"Next.js",
					"Next Auth",
					"TypeScript",
					"Sanity",
					"Tailwind CSS",
					"JavaScript",
					"HTML/CSS",
					"Git",
					"Responsive Design",
					"UI/UX",
				].map((skill) => (
					<div
						key={skill}
						className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
					>
						{skill}
					</div>
				))}
			</div>
			<h2 className="text-lg font-semibold tracking-tight">Familiar</h2>
			<div className="flex flex-wrap gap-2">
				{[
					"Angular",
					"VueJS",
					"GraphQL",
					"MongoDB",
					"Microfrontend",
				].map((familiarSkill) => (
					<div
						key={familiarSkill}
						className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
					>
						{familiarSkill}
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
