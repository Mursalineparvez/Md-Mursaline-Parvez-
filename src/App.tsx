import { useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { LeadershipSection } from './components/LeadershipSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#09090B] dark:text-zinc-100">
      <Navbar />
      <main>
        <HeroSection isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <LeadershipSection />
        <SkillsSection />
      </main>
      <ContactSection />
    </div>
  );
}
