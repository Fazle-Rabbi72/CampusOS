/**
 * Developer profile behind CampusOS, shown on /contributors.
 *
 * Only public professional details live here. Add `links` (LinkedIn, GitHub, portfolio) when you have the URLs;
 * the page renders whatever is in the array and hides the row when it is empty.
 */

export interface ContributorLink {
  label: string;
  href: string;
}

export interface ContributorRole {
  title: string;
  org: string;
  period: string;
}

export interface Contributor {
  id: string;
  name: string;
  headline: string;
  location: string;
  /** Path under /public (resized WebP, square). */
  photo: string;
  photoAlt: string;
  summary: string;
  skills: string[];
  /** Short experience lines, newest first. */
  roles: ContributorRole[];
  highlights: string[];
  /** Programme, batch and shift, e.g. "CSE · Batch 62 · Day". */
  batch: string;
  education?: string;
  languages?: string[];
  funFact?: string;
  email: string;
  /** International number with the country code, digits only after the plus sign (used for the wa.me link). */
  whatsapp: { display: string; digits: string };
  links: ContributorLink[];
}

export const CONTRIBUTORS: Contributor[] = [
  {
    id: "fazle-rabbi",
    name: "Fazle Rabbi",
    headline: "CSE student · Full-stack web developer",
    location: "Bangladesh",
    photo: "/contributors/fazle-rabbi.webp",
    photoAlt: "Portrait of Fazle Rabbi",
    summary: "A passionate CSE student who loves coding, problem-solving and building impactful software. Currently working on full-stack web applications.",
    skills: ["Python", "Django", "FastAPI", "SQL", "MySQL", "PostgreSQL", "AI/ML", "React", "Full-stack web", "AWS", "System design", "Problem solving"],
    roles: [],
    highlights: [
      "Designed and developed CampusOS, a unified campus hub for City University.",
      "Works across the stack: Python (Django, FastAPI), SQL databases (MySQL, PostgreSQL) and AI/ML.",
      "Building full-stack web applications while learning React, AWS and system design.",
      "Loves exploring new technologies and working on innovative projects.",
    ],
    batch: "CSE · Batch 62 · Day",
    education: "B.Sc. in Computer Science & Engineering, City University (Batch 62, Day)",
    email: "rabbifazle.contact@gmail.com",
    whatsapp: { display: "+880 1736-208819", digits: "8801736208819" },
    links: [
      { label: "GitHub", href: "https://github.com/Fazle-Rabbi72" },
      { label: "LinkedIn", href: "https://linkedin.com/in/fazle-rabbi-852616252" },
    ],
  },
];
