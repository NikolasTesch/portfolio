import "@testing-library/jest-dom/vitest";
import * as axeMatchers from "vitest-axe/matchers";
import { afterEach, expect, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { createElement } from "react";

expect.extend(axeMatchers);

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

// matchMedia (usado por Framer Motion / prefers-reduced-motion)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

// IntersectionObserver (usado pelo scroll spy da Navbar e reveal por scroll)
class MockIntersectionObserver {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

// scrollTo / mídia
window.scrollTo = vi.fn();
window.HTMLMediaElement.prototype.play = vi.fn();
window.HTMLMediaElement.prototype.pause = vi.fn();

// next/image -> <img> simples para o ambiente de teste
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { src, alt, fill, sizes, priority, ...rest } = props as {
      src: string;
      alt: string;
      fill?: unknown;
      sizes?: unknown;
      priority?: unknown;
    };
    void fill;
    void sizes;
    void priority;
    return createElement("img", { src, alt, ...rest });
  },
}));
