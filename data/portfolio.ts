export const profile = {
  name: 'Rainie Guo',
  year: '2026',
  introduction: 'I am a multidisciplinary designer exploring the connections between visual communication, space and everyday life.',
  biography: 'Write a short introduction here: your background, the questions that drive your practice, and what you hope to explore next.',
  fields: ['Visual Design', 'Creative Communication', 'Landscape Architecture', 'Photography', 'Art Direction', 'AI-assisted Design'],
  email: 'fayeadler024@Gmail.com',
  links: [] as { label: string; url: string }[],
};
export const covers = [{ src: '/assets/cover/cover.png', alt: 'Portfolio — multidisciplinary design, original collage cover', width: 1890, height: 1063 }];
export type Project = { id: string; title: string; subtitle?: string; year: string; category: string; description: string; role: string; tools: string[]; accent: string; pages: string[]; pageAlt: string[] };
const projectDefinitions = [
  { title: 'Concrete', subtitle: 'Record Moment through Photos', category: 'Visual Design', count: 6, accent: '#713B20', description: 'A photography and social platform that brings image-making back to its everyday purpose: recording memories, sharing experiences, and finding resonance through other people’s stories.' },
  { title: 'Interstices of Cities', subtitle: 'The Youth Live in Megacities', category: 'Creative Communication', count: 6, accent: '#59634F', description: 'An exhibition exploring urban villages and the lives of young people within them. The project considers these communities as places of arrival, adaptation, and belonging amid urban transformation.' },
  { title: 'Josie’s Daydream Album', subtitle: 'Stories of A Girl', category: 'Book / Visual Design', count: 10, accent: '#75657C', description: 'A narrative book following Josie’s pursuit of a new life in the city. Through collage and visual storytelling, it explores the distance between aspiration, social expectations, and personal wellbeing.' },
  { title: 'Photography', subtitle: '', category: 'Photography', count: 2, accent: '#95654F', description: 'A collection of observations of landscapes, built environments, and everyday details, recorded through photography.' },
];
export const projects: Project[] = projectDefinitions.map((project, i) => ({
  id: `project-${String(i + 1).padStart(2, '0')}`,
  title: project.title, subtitle: project.subtitle, year: '2026', category: project.category,
  description: project.description, role: 'Designer', tools: [], accent: project.accent,
  pages: Array.from({ length: project.count }, (_, n) => `/assets/project-${String(i + 1).padStart(2, '0')}/${String(n + 1).padStart(2, '0')}.png`),
  pageAlt: Array.from({ length: project.count }, (_, n) => i === 3 ? `Photography — blank landscape A4 page ${n + 1} of 2, awaiting artwork` : `${project.title} — original landscape A4 portfolio page ${n + 1} of ${project.count}`),
}));
