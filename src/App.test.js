import { render, screen } from "@testing-library/react";
import App from "./App";
import Fantasy from "./data/fantasy.json";

describe("search component", () => {
  it("Verifica se nel componente Welcome ci sia il titolo presente", () => {
    render(<App />);
    const welcome = screen.getByText(/se sei arrivato fin qui/i);
    expect(welcome).toBeInTheDocument();
  });
  it("Verifica se vengono reindirizzate tutte le card del Json", () => {
    render(<App />);
    const card = screen.getAllByRole("img");
    expect(card).toHaveLength(Fantasy.length);
  });
});
