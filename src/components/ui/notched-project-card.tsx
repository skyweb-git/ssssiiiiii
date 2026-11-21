"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * NotchedProjectCard
 *
 * Cover with a rounded notch in the bottom-right corner and an arrow disc
 * nested inside it. Pass `surface` as the page background colour so the
 * notch blends correctly.
 */

export interface NotchedProjectCardProps {
  href: string;
  title: string;
  description?: string;
  /** optional lucide-react icon component */
  icon?: React.ComponentType<{ className?: string }>;
  /** cover photograph */
  image: string;
  imageAlt?: string;
  /** a pill at the top of the cover, e.g. the year */
  badge?: string;
  tags?: string[];
  /** a product screen over the photo (transparent PNG/WebP works best) */
  screen?: { src: string; alt: string; className?: string };
  /** a dark wash between the photo and the screen, 0 to 1 */
  dim?: number;
  monochrome?: boolean;
  /** dark surface styling (white title, muted copy, dark tags) */
  dark?: boolean;
  /** the colour behind the card; the notch is painted in it */
  surface?: string;
  /** the arrow disc's fill on hover (any CSS colour); defaults to the theme's primary */
  accent?: string;
  /** the arrow's colour on that fill; pick one that contrasts with `accent` */
  accentForeground?: string;
  className?: string;
}

const DISC = 64; // the arrow disc, px
const BLOCK = 80; // the notch block, px (radius = BLOCK - DISC / 2)
const FILLET = 28; // the curve where the cut meets the cover's edges, px

export function NotchedProjectCard({
  href,
  title,
  description,
  icon: Icon,
  image,
  imageAlt = "",
  badge,
  tags = [],
  screen,
  dim = screen ? 0.45 : 0,
  monochrome = false,
  dark = false,
  surface = "var(--color-background, #ffffff)",
  accent,
  accentForeground = "#ffffff",
  className,
}: NotchedProjectCardProps) {
  const tone = monochrome
    ? "grayscale transition-[filter,scale] duration-500 group-hover:grayscale-0 group-focus-visible:grayscale-0"
    : "transition-[scale] duration-500";

  return (
    <Link
      to={href}
      className={cn(
        "group flex flex-col rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-4",
        dark ? "focus-visible:ring-offset-[#0a0a0a]" : "focus-visible:ring-offset-white",
        className,
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "relative aspect-[4/3] overflow-hidden rounded-[28px]",
            dark ? "bg-zinc-900" : "bg-muted",
          )}
        >
          <img
            src={image}
            alt={screen ? "" : imageAlt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              tone,
              !screen && "group-hover:scale-[1.04]",
            )}
            loading="lazy"
          />
          {dim > 0 && (
            <div aria-hidden className="absolute inset-0" style={{ backgroundColor: `rgb(0 0 0 / ${dim})` }} />
          )}
          {screen && (
            <img
              src={screen.src}
              alt={screen.alt}
              className={cn(
                "absolute bottom-0 right-0 w-[82%] origin-bottom-right drop-shadow-[0_18px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.07]",
                tone,
                screen.className,
              )}
            />
          )}
          {badge && (
            <div className="pointer-events-none absolute right-4 top-4">
              <span className="rounded-full border border-white/35 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                {badge}
              </span>
            </div>
          )}
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 right-0"
          style={{ width: BLOCK, height: BLOCK, borderTopLeftRadius: BLOCK - DISC / 2, background: surface }}
        />
        {[
          { bottom: BLOCK, right: 0 },
          { bottom: 0, right: BLOCK },
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute"
            style={{
              ...pos,
              width: FILLET,
              height: FILLET,
              background: `radial-gradient(circle at top left, transparent ${FILLET - 0.5}px, ${surface} ${FILLET}px)`,
            }}
          />
        ))}

        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 right-0 flex items-center justify-center rounded-full transition-[background-color,color,scale] duration-300 group-hover:scale-105",
            dark
              ? "bg-zinc-800 text-white"
              : "bg-secondary text-secondary-foreground",
            accent
              ? "group-hover:bg-[var(--card-accent)] group-hover:text-[var(--card-accent-fg)]"
              : "group-hover:bg-primary group-hover:text-primary-foreground",
          )}
          style={
            {
              width: DISC,
              height: DISC,
              "--card-accent": accent,
              "--card-accent-fg": accentForeground,
            } as React.CSSProperties
          }
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      <div className="mt-5 flex items-start gap-3">
        {Icon && (
          <div
            className={cn(
              "p-2 rounded-xl shrink-0 mt-0.5 border transition-colors",
              dark
                ? "bg-white/5 text-sky-300 border-white/10 group-hover:bg-[#004AAD] group-hover:text-white"
                : "bg-blue-50 text-[#004AAD] border-blue-100 group-hover:bg-[#004AAD] group-hover:text-white",
            )}
          >
            <Icon className="size-5" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              "text-xl sm:text-2xl font-semibold tracking-tight transition-colors",
              dark
                ? "text-white group-hover:text-sky-300"
                : "text-foreground group-hover:text-[#004AAD]",
            )}
          >
            {title}
          </h3>
        </div>
      </div>
      {description && (
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            dark ? "text-zinc-400" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className={cn(
                "rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wider",
                dark
                  ? "bg-zinc-900 text-zinc-200 border border-zinc-800"
                  : "bg-secondary text-secondary-foreground",
              )}
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export default NotchedProjectCard;
