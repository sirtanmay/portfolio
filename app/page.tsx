"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import About from "@/components/About/page";
import Skills from "@/components/Skills/page";

export default function Home() {
	return (
		<main className="min-h-screen bg-background p-8 md:p-12 lg:p-16">
			<div className="max-w-4xl mx-auto space-y-12">
				{/* Hero Section */}
				<section className="space-y-4">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
						Tanmay Varshney
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground">
						Frontend Developer crafting beautiful web experiences
					</p>
					<div className="flex gap-4 pt-4">
						<Button variant="outline" size="icon">
							<Github
								className="h-5 w-5"
								onClick={() => window.open("https://github.com/sirtanmay")}
							/>
						</Button>
						<Button variant="outline" size="icon">
							<Linkedin
								className="h-5 w-5"
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/tanmay-varshney-44077014a/"
									)
								}
							/>
						</Button>
						<Button variant="outline" size="icon">
							<Mail
								className="h-5 w-5"
								onClick={() =>
									window.open("mailto:tanmay.varshney04@gmail.com")
								}
							/>
						</Button>
					</div>
				</section>

				{/* About Section */}
				<About />

				{/* Projects Section */}
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold tracking-tight">
						Featured Projects
					</h2>
					<div className="grid gap-6 md:grid-cols-2">
						{/* <Card>
							<CardHeader>
								<CardTitle>E-commerce Platform</CardTitle>
								<CardDescription>
									Next.js · TypeScript · Tailwind
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-4">
									A modern e-commerce platform with real-time inventory
									management and seamless checkout experience.
								</p>
								<Button variant="outline" size="sm">
									<ExternalLink className="h-4 w-4 mr-2" />
									View Project
								</Button>
							</CardContent>
						</Card> */}

						<Card>
							<CardHeader>
								<CardTitle>Dashboard UI</CardTitle>
								<CardDescription>React · Redux · Chart.js</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-4">
									Analytics dashboard with real-time data visualization and
									responsive design.
								</p>
								<Button
									variant="outline"
									size="sm"
									onClick={() =>
										window.open("https://byewind-dashboard-tanmay.vercel.app/")
									}
								>
									<ExternalLink className="h-4 w-4 mr-2" />
									View Project
								</Button>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Skills Section */}
				<Skills />
			</div>
		</main>
	);
}
