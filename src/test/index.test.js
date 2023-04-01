import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom;
let container;

describe("測試", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("#List 存在", () => {
    expect(container.querySelector("#list")).toBeInTheDocument();
  });

  it("#List 有 children element", () => {
    expect(container.querySelector("#list").children.length).toBeGreaterThan(0);
  });
});
