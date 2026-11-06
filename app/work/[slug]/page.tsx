import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS, getProjectBySlug, getNextProject } from "@/lib/projects-data";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Filma Studio",
    };
  }

  return {
    title: `${project.title} · Commercial Case Study | Filma Studio`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Filma Studio Lahore`,
      description: project.overview,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}

