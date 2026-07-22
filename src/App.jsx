import { useEffect, useState } from 'react';

const roles = ['Full-Stack Developer', 'Mobile App Builder', 'AI Curious Engineer'];

const skillGroups = [
  { title: 'Languages', swatch: 'var(--coral)', items: ['Python', 'Java', 'JavaScript', 'C++', 'Dart', 'HTML5', 'CSS3'] },
  { title: 'Frontend', swatch: 'var(--teal)', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Backend', swatch: 'var(--plum)', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Mobile', swatch: 'var(--sun)', items: ['Flutter'] },
  { title: 'Databases', swatch: 'var(--coral)', items: ['MongoDB', 'MySQL', 'Firebase'] },
  { title: 'Tools', swatch: 'var(--teal)', items: ['Git', 'GitHub', 'Figma', 'Odoo', 'VS Code', 'Jira', 'Trello'] }
];

const projects = [
  {
    emoji: '🌴',
    title: 'NakhlaSense',
    stack: 'React • Node.js • Express.js • MongoDB',
    desc: 'A full-stack agricultural management platform that streamlines crop monitoring and farm operations, with responsive dashboards and secure authentication.',
    feats: ['Responsive dashboards for farm data', 'User authentication & role handling', 'RESTful APIs for crop and farm management']
  },
  {
    emoji: '📱',
    title: 'Notifdy',
    stack: 'Flutter • Firebase',
    desc: 'A cross-platform mobile app that delivers real-time notifications with a clean, modern user experience.',
    feats: ['Real-time push notifications', 'Cross-platform iOS & Android build', 'Modern, minimal UI']
  },
  {
    emoji: '💻',
    title: 'KAN Website',
    stack: 'React • Node.js • MySQL',
    desc: 'A responsive full-stack website with dynamic content management, built on REST APIs and a relational database.',
    feats: ['REST API integration', 'Dynamic content management', 'Responsive, mobile-friendly layout']
  },
  {
    emoji: '🤖',
    title: 'AI-Based Prediction Model',
    stack: 'Python • ML',
    desc: 'A machine learning project focused on intelligent prediction and practical data-driven decision support.',
    feats: ['Feature engineering and modeling', 'Data analysis workflows', 'Practical prediction outcomes']
  }
];

export default function App() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="brand"><span className="brand-mark">&lt;/&gt;</span> Funoon Albalawi</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="doodles" aria-hidden="true">
          <svg className="doodle" style={{ top: '14%', left: '78%', width: '70px' }} viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="#5B2A86" strokeWidth="4" strokeDasharray="6 8" /></svg>
          <svg className="doodle" style={{ top: '62%', left: '88%', width: '56px' }} viewBox="0 0 100 40"><text x="0" y="30" fontFamily="JetBrains Mono, monospace" fontSize="30" fill="#0FA898">{ }</text></svg>
          <svg className="doodle" style={{ top: '8%', left: '4%', width: '50px', transform: 'rotate(-8deg)' }} viewBox="0 0 100 40"><text x="0" y="30" fontFamily="JetBrains Mono, monospace" fontSize="28" fill="#FF6B5B">&lt;/&gt;</text></svg>
          <svg className="doodle" style={{ top: '74%', left: '6%', width: '60px' }} viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="none" stroke="#FFC93C" strokeWidth="5" rx="16" transform="rotate(12 50 50)" /></svg>
        </div>
        <div className="wrap hero-inner">
          <div className="eyebrow"><span className="dot"></span> Dhahran, Saudi Arabia · Open to internships</div>
          <h1>Funoon<br /><span className="hl">Albalawi</span></h1>
          <div className="role-line">{roles[roleIndex]}</div>
          <p className="bio">Software Engineering student at KFUPM who enjoys building full-stack web and mobile apps that solve real problems — with clean UI, scalable code, and a growing curiosity about machine learning.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">See my work →</a>
            <a className="btn btn-secondary" href="#contact">Let's talk</a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <div className="section-tag">01 · About</div>
          <h2>The short version</h2>
          <div className="about-grid" style={{ marginTop: '32px' }}>
            <div className="about-text">
              <p>I'm Funoon, a Software Engineering student at King Fahd University of Petroleum & Minerals (KFUPM). I enjoy building full-stack web and mobile applications that solve real-world problems.</p>
              <p>My experience spans React, Node.js, Flutter, and Python, alongside modern software engineering practices like Agile and clean design patterns. I'm passionate about clean UI, scalable systems, and continuously learning — right now that means going deeper into AI and machine learning.</p>
            </div>
            <div className="fact-cards">
              <div className="fact-card"><span className="ico">🎓</span><div><div className="label">Studying at</div><div className="value">KFUPM — Software Engineering</div></div></div>
              <div className="fact-card"><span className="ico">🧭</span><div><div className="label">Focus areas</div><div className="value">Full-stack, mobile, UI/UX, data & ML</div></div></div>
              <div className="fact-card"><span className="ico">📍</span><div><div className="label">Based in</div><div className="value">Dhahran, Saudi Arabia</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="section-tag">02 · Toolbox</div>
          <h2>What I build with</h2>
          <p className="section-lead">A working set of languages, frameworks, and tools I reach for across web, mobile, and data projects.</p>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3><span className="swatch" style={{ background: group.swatch }}></span>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="section-tag">03 · Selected Work</div>
          <h2>Things I've built</h2>
          <p className="section-lead">A mix of full-stack platforms, a mobile app, and a machine learning project — swap in screenshots here to make this section pop even more.</p>
          <div className="project-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="pin">{project.emoji}</div>
                <h3>{project.title}</h3>
                <p className="desc">{project.desc}</p>
                <div className="stack">{project.stack}</div>
                <ul className="feat-list">
                  {project.feats.map((feat) => <li key={feat}>{feat}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-panel">
            <h2>Let's build something cool</h2>
            <p>I'm always interested in projects that blend product thinking, engineering, and a little bit of imagination.</p>
            <div className="contact-row">
              <a className="contact-pill" href="https://github.com/funoonAlbalawi12/Profile.git" target="_blank" rel="noreferrer">GitHub</a>
              <a className="contact-pill" href="mailto:funoon@example.com">Email</a>
              <a className="contact-pill" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2026 Funoon Albalawi — Built with React + Vite</footer>
    </>
  );
}
