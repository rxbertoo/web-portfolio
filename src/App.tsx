import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] antialiased">
      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
