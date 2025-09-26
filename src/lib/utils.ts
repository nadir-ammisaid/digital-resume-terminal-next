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
  let html = `${category}:\n`;

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

    html += `<span class="text-terminal-info">[${exp.period}]</span> <span class="text-terminal-green font-semibold">${exp.title}</span> @ ${exp.company}\n`;
    html += `  📍 ${exp.location}\n`;
    html += `  • ${exp.description}\n`;

    if (exp.technologies) {
      html += `  • Tech: ${exp.technologies.join(", ")}\n`;
    }

    if (status) {
      html += `  • ${status}\n`;
    }

    html += "\n";
  });

  return html;
}

export function formatEducationList(education: Education[]): string {
  let html = "";

  education.forEach((edu) => {
    html += `<span class="text-terminal-info">[${edu.period}]</span> <span class="text-terminal-green font-semibold">${edu.degree}</span>\n`;
    html += `  📍 ${edu.school}, ${edu.location}\n`;
    html += `  • ${edu.description}\n\n`;
  });

  return html;
}

export function generateMatrixRain(): void {
  if (typeof window === "undefined") return;

  const chars = "0123456789ABCDEF";
  const columns = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const char = document.createElement("div");
      char.className =
        "fixed text-terminal-green font-mono text-sm z-50 pointer-events-none animate-matrix-rain";
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.floor(Math.random() * columns) * 20 + "px";
      char.style.animationDelay = Math.random() * 2 + "s";

      document.body.appendChild(char);

      setTimeout(() => {
        if (document.body.contains(char)) {
          document.body.removeChild(char);
        }
      }, 3000);
    }, i * 100);
  }
}

export function playSound(soundName: string): void {
  if (typeof window === "undefined") return;

  try {
    const audio = new Audio(`/assets/sounds/${soundName}.mp3`);
    audio.volume = 0.3;
    audio.play().catch(() => {});
  } catch (error) {}
}

export function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
