import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeProvider, useTheme } from "@/contexts/theme-context";

function ThemeReader() {
  const { theme } = useTheme();
  return <span data-testid="theme">{theme}</span>;
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("defaults to light and toggles to dark", async () => {
    const user = userEvent.setup();
    function ToggleHost() {
      const { toggleTheme } = useTheme();
      return (
        <button type="button" onClick={toggleTheme}>
          toggle
        </button>
      );
    }

    render(
      <ThemeProvider>
        <ThemeReader />
        <ToggleHost />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme")).toHaveTextContent("light");
    await user.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
