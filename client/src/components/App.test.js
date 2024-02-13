/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { getComments, getMoreReplies } from "../services/products";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("../services/products.js");

test("includes website title The Shop!", async () => {
  render(<App />);
  const productsHeader = await screen.getByRole("heading", {
    name: "The Shop!",
    level: 1
  });
  expect(productsHeader).toBeInTheDocument();
});

test("item in list name bananas", async () => {
  render(<App />);
  const productsHeader = await screen.getByRole("heading", {
    name: "The Shop!",
    level: 1
  });
  expect(productsHeader).toBeInTheDocument();
});