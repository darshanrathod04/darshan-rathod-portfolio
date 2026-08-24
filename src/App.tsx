import AmbientBackground from "./components/AmbientBackground";
import CustomCursor from "./components/cursor/CustomCursor";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import TechnologyEcosystem from "./sections/TechnologyEcosystem";
import ProjectWorkspace from "./sections/ProjectWorkspace";
import DeveloperIntelligence from "./sections/DeveloperIntelligence";
import GitHubIntelligence from "./sections/GitHubIntelligence";
import ContactCommandCenter from "./sections/ContactCommandCenter";
import SkillsGalaxy from "./sections/SkillsGalaxy";
import FooterIntelligence from "./sections/FooterIntelligence";
import DeveloperTimeline from "./sections/DeveloperTimeline";
import CommandPalette from "./components/CommandPalette";
import AIVoiceAssistant from "./components/AIVoiceAssistant";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white">
      {/* Global Background */}
      <AmbientBackground />

      {/* Physics Cursor */}
      <CustomCursor />
      <CommandPalette />
      <AIVoiceAssistant />

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio */}
      <main className="relative z-10">
        <Hero />
        <TechnologyEcosystem />
        <SkillsGalaxy />
        <DeveloperTimeline />
        <ProjectWorkspace />
        <DeveloperIntelligence />
        <GitHubIntelligence />
        <ContactCommandCenter />
      </main>

      <FooterIntelligence />
    </div>
  );
}