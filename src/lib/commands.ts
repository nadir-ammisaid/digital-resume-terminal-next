import { Command } from "./types";
import { personalData } from "./data";
import {
  formatSkillsTable,
  formatProjectsList,
  formatExperienceList,
  formatEducationList,
  generateMatrixRain,
} from "./utils";

export const commands: Record<string, Command> = {
  help: {
    description: "Affiche la liste des commandes disponibles",
    category: "navigation",
    execute: () => `
<span class="text-terminal-green font-semibold">Commandes Disponibles:</span>

<span class="text-terminal-info">📋 Navigation & Information</span>
  <span class="text-terminal-green">about</span>        - En savoir plus sur moi
  <span class="text-terminal-green">skills</span>       - Voir mes compétences techniques
  <span class="text-terminal-green">experience</span>   - Afficher mon expérience professionnelle  
  <span class="text-terminal-green">education</span>    - Voir ma formation
  <span class="text-terminal-green">projects</span>     - Lister mes projets
  <span class="text-terminal-green">contact</span>      - Obtenir mes coordonnées
  <span class="text-terminal-green">languages</span>    - Voir les langues que je parle

<span class="text-terminal-info">🔧 Utilitaires</span>
  <span class="text-terminal-green">download</span>     - Télécharger mon CV (PDF)
  <span class="text-terminal-green">github</span>       - Ouvrir mon profil GitHub
  <span class="text-terminal-green">linkedin</span>     - Ouvrir mon profil LinkedIn
  <span class="text-terminal-green">clear</span>        - Effacer le terminal
  <span class="text-terminal-green">theme</span>        - Changer le thème du terminal

<span class="text-terminal-warning">💡 Astuces:</span>
• Utilisez TAB pour l'auto-complétion
• Utilisez ↑/↓ pour naviguer dans l'historique
• Certaines commandes cachées existent... à vous de les trouver !`,
  },

  about: {
    description: "En savoir plus sur moi",
    category: "info",
    execute: () => `
<span class="text-terminal-green font-semibold">À Propos de Moi</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${personalData.about.detailed}

<span class="text-terminal-green font-semibold">Informations clés:</span>
• 🎓 <span class="text-terminal-info">Formation:</span> Master en Architecture des Systèmes d'Information (Epitech)
• 💼 <span class="text-terminal-info">Statut:</span> ${personalData.status}
• 🌍 <span class="text-terminal-info">Langues:</span> Français (natif), Anglais (bilingue), Arabe (bilingue)
• 📍 <span class="text-terminal-info">Localisation:</span> ${personalData.location}
• 🎯 <span class="text-terminal-info">Objectif:</span> Rejoindre <span class="text-terminal-green">Worldline</span> en janvier 2026

<span class="text-terminal-warning">Fun fact:</span> Passionné de billard 🎱, un jeu où chaque coup demande stratégie et précision... tout comme le code !`,
  },

  skills: {
    description: "Voir mes compétences techniques",
    category: "info",
    execute: () => {
      let html = `Compétences Techniques
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:
  • TypeScript     ████████████████░░░░  85%
  • React          ██████████████████░░  90%
  • Next.js        ████████████████░░░░  80%
  • HTML/CSS       ███████████████████░  95%
  • Tailwind CSS   ██████████████░░░░░░  70%

Backend:
  • Node.js        ███████████████░░░░░  75%
  • Express        ███████████████░░░░░  75%
  • Spring Boot    ██████████░░░░░░░░░░  50%
  • REST APIs      ████████████████░░░░  80%

Base de données:
  • MySQL          ████████████████░░░░  80%
  • MongoDB        ██████████░░░░░░░░░░  50%

Outils & Méthodologies:
  • Git            ███████████████████░  95%
  • Docker         ██████████░░░░░░░░░░  50%
  • Linux          ██████████████░░░░░░  70%
  • Agile/Scrum    ██████████████████░░  90%

💡 Légende: █ = Maîtrisé | ░ = En apprentissage`;
      return html;
    },
  },

  experience: {
    description: "Afficher mon expérience professionnelle",
    category: "info",
    execute: () => `
<span class="text-terminal-green font-semibold">Expérience Professionnelle</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formatExperienceList(personalData.experience)}

<span class="text-terminal-info">💼 Expérience antérieure (hors tech):</span>
• Gestionnaire de comptes - Groupe Alptis (2019-2024)
• Gestionnaire de comptes - Fortrade (2017-2019)

Ces expériences m'ont apporté rigueur, gestion client et esprit analytique.`,
  },

  education: {
    description: "Voir ma formation",
    category: "info",
    execute: () => `
<span class="text-terminal-green font-semibold">Formation & Éducation</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formatEducationList(personalData.education)}

<span class="text-terminal-info">🎓 Formations complémentaires:</span>
• Licence Science des matériaux - Université d'Oran (2011-2014)
• Année préparatoire scientifique - Universität Duisburg-Essen (2014-2016)
• BAC Général S avec mention - Enic Naric (2011)`,
  },

  projects: {
    description: "Lister mes projets",
    category: "info",
    execute: () => `
<span class="text-terminal-green font-semibold">Mes Projets</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formatProjectsList(personalData.projects)}

<span class="text-terminal-info">🔗 Pour voir plus de projets:</span>
• GitHub: <a href="https://${
      personalData.contact.github
    }" target="_blank" class="text-terminal-info hover:text-terminal-green">${
      personalData.contact.github
    }</a>
• Tapez <span class="text-terminal-green">'github'</span> pour ouvrir directement mon profil`,
  },

  contact: {
    description: "Obtenir mes coordonnées",
    category: "info",
    execute: () => `
<span class="text-terminal-green font-semibold">Contactez-moi</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-terminal-info">📧 Email:</span>      ${personalData.contact.email}
<span class="text-terminal-info">💼 LinkedIn:</span>   ${personalData.contact.linkedin}
<span class="text-terminal-info">🐙 GitHub:</span>     ${personalData.contact.github}
<span class="text-terminal-info">📱 Téléphone:</span>  ${personalData.contact.phone}
<span class="text-terminal-info">📍 Localisation:</span> ${personalData.location}

<span class="text-terminal-warning">💡 Disponible pour:</span>
• Opportunités d'alternance (dès janvier 2026)
• Projets de collaboration open-source
• Discussions techniques et échanges

<span class="text-terminal-green">N'hésitez pas à me contacter !</span>`,
  },

  languages: {
    description: "Voir les langues que je parle",
    category: "info",
    execute: () => {
      let html = `
<span class="text-terminal-green font-semibold">Langues Parlées</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;
      personalData.languages.forEach((lang) => {
        html += `<span class="text-terminal-info">${lang.name.padEnd(
          15
        )}</span> ${lang.level}\n`;
      });
      return html;
    },
  },

  download: {
    description: "Télécharger mon CV (PDF)",
    category: "utility",
    execute:
      () => `<span class="text-terminal-warning">📥 Téléchargement de cv-nadir-ammisaid.pdf...</span>
<span class="text-terminal-info">[Simulation] En production, ceci déclencherait le téléchargement de mon CV</span>`,
  },

  github: {
    description: "Ouvrir mon profil GitHub",
    category: "utility",
    execute: () => {
      const githubUrl = `https://${personalData.contact.github}`;
      window.open(githubUrl, "_blank");
      return `<span class="text-terminal-info">🐙 Ouverture de GitHub dans un nouvel onglet...</span>
<span class="text-terminal-green">Lien:</span> <a href="${githubUrl}" target="_blank" class="text-terminal-info hover:text-terminal-green">${githubUrl}</a>`;
    },
  },

  linkedin: {
    description: "Ouvrir mon profil LinkedIn",
    category: "utility",
    execute: () => {
      const linkedinUrl = `https://${personalData.contact.linkedin}`;
      window.open(linkedinUrl, "_blank");
      return `<span class="text-terminal-info">💼 Ouverture de LinkedIn dans un nouvel onglet...</span>
<span class="text-terminal-green">Lien:</span> <a href="${linkedinUrl}" target="_blank" class="text-terminal-info hover:text-terminal-green">${linkedinUrl}</a>`;
    },
  },

  clear: {
    description: "Effacer le terminal",
    category: "utility",
    execute: () => "CLEAR_TERMINAL",
  },

  start: {
    description: "Introduction rapide",
    category: "info",
    execute: () => `
<span class="text-terminal-green font-semibold">👋 Salut ! Je suis ${personalData.name}</span>

Je suis un développeur Full-Stack passionné, spécialisé dans l'écosystème JavaScript/TypeScript avec React et Node.js.

<span class="text-terminal-info">🎯 En bref :</span>
• 🚀 Spécialisé en TypeScript, React, et Node.js
• 🎓 Étudiant en Master à Epitech (Architecture SI)
• 💼 Future alternance chez Worldline (jan 2026)
• 🌍 Bilingue français/anglais

<span class="text-terminal-warning">🔍 Pour explorer :</span>
• Tapez <span class="text-terminal-green">'help'</span> pour voir toutes les commandes
• <span class="text-terminal-green">'skills'</span> pour mes compétences
• <span class="text-terminal-green">'projects'</span> pour mes réalisations

<span class="text-terminal-green">Bienvenue dans mon CV interactif ! 🚀</span>`,
  },

  sudo: {
    description: "Commande sudo (Easter egg)",
    category: "hidden",
    hidden: true,
    execute: (args) => {
      if (args && args.join(" ").includes("rm -rf")) {
        return `<span class="text-terminal-error">❌ Accès refusé ! Nice try though... 😏</span>
<span class="text-terminal-warning">⚠️ Cette commande pourrait être dangereuse !</span>`;
      }
      return `<span class="text-terminal-error">❌ Permission denied: You don't have sudo privileges here! 😄</span>`;
    },
  },

  whoami: {
    description: "Qui suis-je ? (Easter egg)",
    category: "hidden",
    hidden: true,
    execute:
      () => `<span class="text-terminal-info">visitor</span> - Mais la vraie question c'est... qui êtes-VOUS ? 🤔
            
<span class="text-terminal-green">Indices sur votre identité:</span>
• Vous savez utiliser un terminal... 👨‍💻
• Vous connaissez la commande 'whoami' 🧠
• Vous explorez mon CV de manière créative 🚀`,
  },

  matrix: {
    description: "Effet Matrix (Easter egg)",
    category: "hidden",
    hidden: true,
    execute: () => {
      generateMatrixRain();
      return `<span class="text-terminal-green">🔴 Follow the white rabbit... 🐰</span>
<span class="text-terminal-info">The Matrix has you...</span>
<span class="text-terminal-warning">Wake up, Neo... The terminal is calling</span>`;
    },
  },

  unknown: {
    description: "Commande non reconnue",
    category: "system",
    hidden: true,
    execute: (args?: string[]) => {
      const commandName = args?.[0] || "unknown";
      return `<span class="text-terminal-error">❌ Commande non trouvée: "${commandName}"</span>

Tapez <span class="text-terminal-green">'help'</span> pour voir toutes les commandes disponibles.`;
    },
  },
};

export function getCommandSuggestions(input: string): string[] {
  return Object.keys(commands)
    .filter(
      (cmd) => !commands[cmd].hidden && cmd.startsWith(input.toLowerCase())
    )
    .sort();
}
