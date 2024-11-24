export const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2020 - Present",
    description: "Led development of mission-critical applications using modern technologies.",
    technologies: ["React", "Node.js", "TypeScript"]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Digital Solutions Inc",
    period: "2018 - 2020",
    description: "Developed and maintained full-stack web applications.",
    technologies: ["Vue.js", "Python", "Docker"]
  }
];

export async function GET() {
  return new Response(JSON.stringify(experiences), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
