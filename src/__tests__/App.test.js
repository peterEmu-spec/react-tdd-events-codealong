import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /hi, i'm/i, level: 1 });
  expect(heading).toBeInTheDocument();
});

test("displays an image of yourself with correct alt text", () => {
  render(<App />);
  const img = screen.getByAltText(/photo of peter emu/i);
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", expect.stringContaining("your-photo"));
});

test("displays a second-level heading 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a passionate developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("displays links to GitHub and LinkedIn with correct hrefs", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/peterEmu-spec"
  );
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://linkedin.com/in/your-linkedin-username"
  );
});
