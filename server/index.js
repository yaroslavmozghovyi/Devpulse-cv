import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8010;
const clientDist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../client/dist');

app.use(cors());
app.use(express.json());

const yaroslavProfile = {
  personalInfo: {
    name: "Yaroslav Mozghovyi",
    title: "Computer Science Student & Full-Stack Developer",
    degree: "Bachelor’s in Computer Science (Informatics)",
    university: "Sumy State University (2023 - 2027)",
    location: "Sumy / Kyiv, Ukraine",
    roleInUniversity: "Elected Class Monitor (3+ years)",
    status: "Open for Junior/Intern Full-Stack & Backend Roles",
    contacts: {
      email: "yaroslavmozghovyi@gmail.com",
      telegram: "@yarik_jan",
      linkedin: "Yaroslav Mozghovyi",
      tiktok: "@_senpa1_"
    }
  },
  skills: {
    languages: ["JavaScript", "Python", "C++", "Java", "SQL", "HTML5/CSS3"],
    webAndBackend: ["Node.js", "Express.js", "React (Vite)", "REST API Architecture"],
    devOpsAndTools: ["Git/GitHub", "GitLab", "Docker", "VS Code", "PyCharm"],
    foundations: ["OOP", "Data Structures & Algorithms", "DBMS", "Computer Networks", "Operating Systems"]
  },
  publications: [
    {
      id: "pub-2026",
      title: "Analysis of DBMS efficiency for storing reinforcement learning telemetry under limited computational resources",
      conference: "IMA-2026, Sumy, Ukraine",
      year: 2026,
      topics: ["Database Systems", "Reinforcement Learning", "Telemetry"]
    },
    {
      id: "pub-2024-1",
      title: "Procedural generation in games: Opportunities for creating infinite worlds",
      conference: "13th International Scientific Conference Current Problems of Modern Technologies",
      year: 2024,
      topics: ["Procedural Generation", "Algorithms", "C++"]
    },
    {
      id: "pub-2024-2",
      title: "Strategies and practices for countering the growing number of cyberattacks",
      conference: "15th Student Conference First Step into Science",
      year: 2024,
      topics: ["Cybersecurity", "Network Protocols"]
    }
  ],
  certifications: [
    "English for STEM (Specialized Language Training)",
    "Digital Security at the Personal Level",
    "Word & Excel: Tools and Lifehacks (36-hour intensive)"
  ],
  languages: [
    { name: "Ukrainian", level: "Native" },
    { name: "English", level: "B1 (STEM Certified)" },
    { name: "French", level: "A1" }
  ]
};

// REST API Ендпоінти
app.get('/api/v1/healthcheck', (req, res) => {
  res.status(200).json({
    status: "OK",
    serverUptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/v1/profile', (req, res) => {
  res.status(200).json({ success: true, data: yaroslavProfile });
});

app.get('/api/v1/publications', (req, res) => {
  res.status(200).json({ success: true, count: yaroslavProfile.publications.length, publications: yaroslavProfile.publications });
});

app.get('/api/v1/skills', (req, res) => {
  res.status(200).json({ success: true, skills: yaroslavProfile.skills });
});

app.use('/devpulse-cv', express.static(clientDist));
app.get('/devpulse-cv/*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});
app.get('/', (req, res) => {
  res.redirect('/devpulse-cv/');
});

app.listen(PORT, () => {
  console.log(`[DevPulse API Server] Працює на порту ${PORT}`);
});