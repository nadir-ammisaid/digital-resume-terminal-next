import { clsx, type ClassValue } from "clsx";
import { Skills, Experience, Project, Education } from "./types";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function createProgressBar(
  percentage: number,
  width: number = 20
): string {
  const filled = Math.round((percentage / 100) * width);
  const empty = width - filled;

  const filledChars = "█".repeat(filled);
  const emptyChars = "░".repeat(empty);

  return `${filledChars}${emptyChars}`;
}

export function formatSkillsTable(
  skills: Record<string, any>,
  category: string
): string {
  let html = `<span class="text-terminal-info">${category}:</span>\n`;

  Object.entries(skills).forEach(([skill, data]) => {
    const progressBar = createProgressBar(data.level);
    const skillName = skill.padEnd(15);
    html += `  • ${skillName} ${progressBar}  ${data.level}%\n`;
  });

  return html;
}

export function formatProjectsList(projects: Project[]): string {
  let html = "";

  projects.forEach((project, index) => {
    const status =
      project.status === "En cours"
        ? '<span class="text-terminal-warning">🔄 En cours</span>'
        : '<span class="text-terminal-info">✅ Terminé</span>';

    html += `<span class="text-terminal-info">${index + 1}. ${
      project.name
    }</span>\n`;
    html += `   Tech: ${project.technologies.join(", ")}\n`;
    html += `   ${project.description}\n`;
    html += `   Statut: ${status}\n`;

    if (project.github) {
      html += `   🔗 GitHub: <a href="${project.github}" target="_blank" class="text-terminal-info hover:text-terminal-green">${project.github}</a>\n`;
    }

    if (project.demo) {
      html += `   🌐 Demo: <a href="${project.demo}" target="_blank" class="text-terminal-info hover:text-terminal-green">${project.demo}</a>\n`;
    }

    html += "\n";
  });

  return html;
}

export function formatExperienceList(experiences: Experience[]): string {
  let html = "";

  experiences.forEach((exp) => {
    const status = exp.status
      ? `<span class="text-terminal-warning">${exp.status}</span>`
      : "";

    html += `<span class="text-terminal-info">[${exp.period}]</span> ${exp.title} @ <span class="text-terminal-green">${exp.company}</span>\n`;
    html += `  📍 ${exp.location}\n`;
    html += `  ${exp.description}\n`;

    if (exp.technologies) {
      html += `  Tech: ${exp.technologies.join(", ")}\n`;
    }

    if (status) {
      html += `  ${status}\n`;
    }

    html += "\n";
  });

  return html;
}

export function formatEducationList(education: Education[]): string {
  let html = "";

  education.forEach((edu) => {
    html += `<span class="text-terminal-info">[${edu.period}]</span> <span class="text-terminal-green">${edu.degree}</span>\n`;
    html += `  📍 ${edu.school}, ${edu.location}\n`;
    html += `  ${edu.description}\n\n`;
  });

  return html;
}

export function generateMatrixRain(): void {
  // Matrix rain effect - placeholder function
  console.log("Matrix rain effect triggered");
}

export function generateUniqueId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
