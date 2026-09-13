import { projects } from '@/data/portfolio';
import { notFound } from 'next/navigation';
export function generateStaticParams() { return projects.map(({ id }) => ({ id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const project = projects.find(p => p.id === id); return { title: project ? `${project.title} — Selected Works` : 'Project not found' }; }
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; if (!projects.some(p => p.id === id)) notFound(); return null; }
