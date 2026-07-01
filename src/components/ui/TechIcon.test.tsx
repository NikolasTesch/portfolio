import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { TechIcon } from "@/components/ui/TechIcon";

describe("TechIcon", () => {
  it("renderiza um SVG acessível para uma tech conhecida", () => {
    const { getByLabelText } = render(<TechIcon name="React" />);
    const svg = getByLabelText("React");
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg.querySelector("path")).toBeTruthy();
  });

  it("não renderiza nada para uma tech desconhecida", () => {
    const { container } = render(<TechIcon name="COBOL" />);
    expect(container.firstChild).toBeNull();
  });
});
