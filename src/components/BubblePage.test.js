import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";

let colorsData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
];
test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  const { rerender, queryAllByTestId } = render(<ColorList colors={[]} />);

  expect(queryAllByTestId(/colors/i)).toHaveLength(0);

  rerender(<ColorList colors={colorsData} />);
  const colors = queryAllByTestId(/colors/i);
  expect(colors).toHaveLength(2);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
