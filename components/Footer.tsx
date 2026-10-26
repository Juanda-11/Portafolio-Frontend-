import { ArrowUp, Mail, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Year from "@/components/Year";
import { navLinks, profile } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Correo", href: `mailto:${profile.emailPersonal}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pb-32 pt-14 lg:pb-12 lg:pl-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-electric/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl uppercase leading-none tracking-wide">{profile.name}</p>
          <p className="mt-3 max-w-xs text-muted">{profile.role}</p>
          <p className="mt-1 font-serif text-sm font-semibold uppercase tracking-[0.25em] text-bolt">
            {profile.university}
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.35em] text-bolt">Enlaces</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="font-bold text-muted transition hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.35em] text-bolt">Sígueme</h2>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-fg transition hover:-translate-y-1 hover:border-electric hover:bg-electric/20 hover:shadow-[0_10px_30px_rgba(59,109,255,0.4)]"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 pt-6 text-sm text-muted">
        <p>
          © <Year /> {profile.name}. Hecho con Next.js + Tailwind CSS{" "}
          <Zap size={14} fill="currentColor" strokeWidth={0} className="inline text-bolt" aria-hidden />
        </p>
        <a
          href="#inicio"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-display text-base uppercase tracking-wide text-fg transition hover:-translate-y-0.5 hover:border-bolt hover:bg-bolt/10"
        >
          Volver arriba
          <ArrowUp size={16} aria-hidden className="transition group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
