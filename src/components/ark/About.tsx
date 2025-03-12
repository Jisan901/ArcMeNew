import { useState } from "react";

export const About = () => {
  const [openSection, setOpenSection] = useState<string|null>(null);

  const toggleSection = (section:string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="relative overflow-hidden grid place-items-center w-full h-screen bg-[var(--dark-color)] text-white p-12">
      <div className="w-full max-w-6xl flex items-center gap-12">
        <div className="w-1/2">
          <img src="/src/assets/card2.png" alt="banner" className="w-full h-auto grayscale" />
        </div>
        <div className="w-1/2 space-y-6">
          <span className="text-gray-400 text-lg tracking-wide">Mehr als nur eine Marketing Agentur.</span>
          <h2 className="text-5xl font-bold leading-tight">Über Uns</h2>
          <h3 className="text-2xl font-semibold text-gray-300">{ "{Mehrwert}" }</h3>
          <p className="text-gray-400 text-md leading-relaxed">
            Hi,  wir setzen alles daran,
            deinem Projekt den individ verdient. Wir hören
            dir zu, verstehen deine Vision und entwickeln eine maßgeschneiderte Strategie,
            die so einzigartig ist wie dein Unternehmen.
          </p>
          <p className="text-gray-400 text-md leading-relaxed space-y-4">
            Hi, ich bin Mischa der Gründer von smart2start und wir setzen alles daran,
            deinem Projekt den individuellen Touch zu verleihen, den es verdient. Wir hören
            dir zu, verstehen deinn.
          </p>
          <h3 className="text-2xl font-semibold text-gray-300">{ "{Mehrwert}" }</h3>
          <div className="space-y-4">
            <div>
              <button className="text-xl font-semibold text-white flex items-center gap-2" onClick={() => toggleSection("value1")}>Mehrwert {openSection === "value1" ? "−" : "＋"}</button>
              {openSection === "value1" && (
                <p className="mt-2 text-gray-400 text-lg leading-relaxed">
                  Mit den neuesten Tools, aktuellen Trends und innovativen KI-Technologien
                  sorgen wir dafür, dass deine Marke sichtbar wird – bei den richtigen
                  Menschen, zur richtigen Zeit.
                </p>
              )}
            </div>
            
            <div>
              <button className="text-xl font-semibold text-white flex items-center gap-2" onClick={() => toggleSection("value2")}>Vorteile {openSection === "value2" ? "−" : "＋"}</button>
              {openSection === "value2" && (
                <ul className="mt-2 text-gray-400 text-lg leading-relaxed list-disc pl-6 space-y-2">
                  <li>Individuelle Lösungen</li>
                  <li>Nachhaltige Ergebnisse</li>
                  <li>Konstante Betreuung</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
