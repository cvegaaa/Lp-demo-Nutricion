import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemaSolucion from '@/components/ProblemaSolucion';
import Proceso from '@/components/Proceso';
import Servicios from '@/components/Servicios';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 text-ink">
      <Navbar
        mobileOpen={mobileOpen}
        onToggle={() => setMobileOpen((v) => !v)}
        onClose={() => setMobileOpen(false)}
      />
      <main>
        <Hero />
        <ProblemaSolucion />
        <Proceso />
        <Servicios />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
