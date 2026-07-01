"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { site } from "@/content/site";

const links = [
  { href: site.github, label: "GitHub", Icon: Github },
  { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${site.email}`, label: "E-mail", Icon: Mail },
  {
    href: `https://wa.me/${site.whatsapp}`,
    label: "WhatsApp",
    Icon: MessageCircle,
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-fg transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
