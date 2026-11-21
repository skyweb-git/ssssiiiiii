import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Menu, X, ArrowRight } from "lucide-react";
import "./sterling-gate-kinetic-navigation.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export type SterlingNavLink = {
  label: string;
  href: string;
  shape: "1" | "2" | "3" | "4" | "5";
};

export type SterlingGateKineticNavigationProps = {
  /** Controlled open state (for embedding into existing mobile hamburger). */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Hide the built-in header; use when SkyWeb mobile bar triggers the menu. */
  embedded?: boolean;
  /** Only render below the md breakpoint (SkyWeb mobile hamburger). */
  mobileOnly?: boolean;
  links?: SterlingNavLink[];
  contactHref?: string;
};

const defaultLinks: SterlingNavLink[] = [
  { label: "About us", href: "/about", shape: "1" },
  { label: "Capabilities", href: "/capabilities", shape: "2" },
  { label: "Industries", href: "/industries", shape: "3" },
  { label: "Insights", href: "/insights", shape: "4" },
  { label: "Contact us", href: "/contact", shape: "5" },
];

export function SterlingGateKineticNavigation({
  open,
  onOpenChange,
  embedded = false,
  mobileOnly = false,
  links = defaultLinks,
  contactHref = "/contact",
}: SterlingGateKineticNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === "boolean";
  const isMenuOpen = isControlled ? open : internalOpen;

  const setMenuOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      const menuItems = container.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = container.querySelector(".ambient-background-shapes");

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer
          ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`)
          : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");

          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotate: -10 },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "back.out(1.7)",
              overwrite: "auto",
            }
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as HTMLElement & { _cleanup?: () => void })._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
    }, containerRef);

    return () => {
      ctx.revert();
      const items = container.querySelectorAll(".menu-list-item[data-shape]");
      items.forEach((item) => {
        const el = item as HTMLElement & { _cleanup?: () => void };
        el._cleanup?.();
      });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const navWrap = container.querySelector(".nav-overlay-wrapper");
      const menu = container.querySelector(".menu-content");
      const overlay = container.querySelector(".overlay");
      const bgPanels = container.querySelectorAll(".backdrop-layer");
      const menuLinks = container.querySelectorAll(".nav-link");
      const fadeTargets = container.querySelectorAll("[data-menu-fade]");
      const menuButton = container.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p");
      const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

      const tl = gsap.timeline();

      if (isMenuOpen) {
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
          .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(
            bgPanels,
            { xPercent: 101 },
            { xPercent: 0, stagger: 0.12, duration: 0.575 },
            "<"
          )
          .fromTo(
            menuLinks,
            { yPercent: 140, rotate: 10 },
            { yPercent: 0, rotate: 0, stagger: 0.05 },
            "<+=0.35"
          );

        if (fadeTargets.length) {
          tl.fromTo(
            fadeTargets,
            { autoAlpha: 0, yPercent: 50 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" },
            "<+=0.2"
          );
        }
      } else {
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120 }, "<")
          .to(menuButtonTexts, { yPercent: 0 }, "<")
          .to(menuButtonIcon, { rotate: 0 }, "<")
          .set(navWrap, { display: "none" });
      }
    }, container);

    return () => ctx.revert();
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen, setMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      ref={containerRef}
      className={[
        "sterling-gate",
        embedded ? "sterling-gate--embedded" : "",
        mobileOnly ? "sterling-gate--mobile-only" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {!embedded && (
        <div className="site-header-wrapper">
          <header className="header">
            <div className="container is--full">
              <nav className="nav-row">
                <Link to="/" aria-label="home" className="nav-logo-row w-inline-block">
                  <img src="/assets/logo.png" alt="SkyWeb" className="h-10 w-auto object-contain" />
                </Link>
                <div className="nav-row__right">
                  <button
                    type="button"
                    className="nav-close-btn"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  >
                    <div className="menu-button-text">
                      <p className="p-large">Menu</p>
                      <p className="p-large">Close</p>
                    </div>
                    <div className="icon-wrap">
                      {isMenuOpen ? (
                        <X className="menu-button-icon" strokeWidth={2.25} />
                      ) : (
                        <Menu className="menu-button-icon" strokeWidth={2.25} />
                      )}
                    </div>
                  </button>
                </div>
              </nav>
            </div>
          </header>
        </div>
      )}

      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="nav-overlay-wrapper">
          <div className="overlay" onClick={closeMenu} aria-hidden="true" />
          <nav className="menu-content" aria-label="Mobile navigation">
            <div className="menu-bg">
              <div className="backdrop-layer first" />
              <div className="backdrop-layer second" />
              <div className="backdrop-layer" />

              <div className="ambient-background-shapes" aria-hidden="true">
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(0,74,173,0.2)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(56,189,248,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(0,74,173,0.12)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(56,189,248,0.16)" />
                </svg>

                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M0 200 Q100 100, 200 200 T 400 200"
                    stroke="rgba(0,74,173,0.25)"
                    strokeWidth="60"
                    fill="none"
                  />
                  <path
                    className="shape-element"
                    d="M0 280 Q100 180, 200 280 T 400 280"
                    stroke="rgba(56,189,248,0.18)"
                    strokeWidth="40"
                    fill="none"
                  />
                </svg>

                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(0,74,173,0.35)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(56,189,248,0.3)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(0,74,173,0.3)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(56,189,248,0.3)" />
                  <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(0,74,173,0.28)" />
                  <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(56,189,248,0.25)" />
                  <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(0,74,173,0.25)" />
                  <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(0,74,173,0.3)" />
                  <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(56,189,248,0.28)" />
                  <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(0,74,173,0.3)" />
                </svg>

                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                    fill="rgba(0,74,173,0.16)"
                  />
                  <path
                    className="shape-element"
                    d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                    fill="rgba(56,189,248,0.12)"
                  />
                </svg>

                <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(0,74,173,0.2)" strokeWidth="30" />
                  <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(56,189,248,0.14)" strokeWidth="25" />
                  <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(0,74,173,0.12)" strokeWidth="20" />
                </svg>
              </div>
            </div>

            {embedded && isMenuOpen && (
              <button
                type="button"
                className="floating-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={2.25} />
              </button>
            )}

            <div className="menu-content-wrapper">
              <ul className="menu-list">
                {links.map((item) => (
                  <li key={item.href} className="menu-list-item" data-shape={item.shape}>
                    <Link
                      to={item.href}
                      className="nav-link w-inline-block"
                      onClick={closeMenu}
                    >
                      <p
                        className="nav-link-text"
                        {...(item.label.toLowerCase().includes("insight")
                          ? { "data-menu-fade": true }
                          : {})}
                      >
                        {item.label}
                      </p>
                      <div className="nav-link-hover-bg" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="menu-footer" data-menu-fade>
                <Link to={contactHref} className="menu-footer-link" onClick={closeMenu}>
                  <span>Talk to us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="menu-footer-meta">SkyWeb IT Solutions · Hyderabad</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

/** Alias matching the source demo export name. */
export function Component(props: SterlingGateKineticNavigationProps) {
  return <SterlingGateKineticNavigation {...props} />;
}

export default SterlingGateKineticNavigation;
