const elements = new Map();
const classList = () => ({ add() {}, remove() {}, contains() { return false; } });
const makeElement = () => ({
  addEventListener() {},
  appendChild() {},
  classList: classList(),
  close() {},
  showModal() {},
  style: {},
});

globalThis.document = {
  createElement: makeElement,
  querySelector(selector) {
    if (!elements.has(selector)) elements.set(selector, makeElement());
    return elements.get(selector);
  },
};
globalThis.window = {
  addEventListener() {},
  setTimeout,
};
globalThis.localStorage = {
  getItem() {
    return null;
  },
  setItem() {},
};
globalThis.Image = class Image {};

const { assets, initialStats, story } = await import("../web/game.js");

const requiredNodes = ["start", "choice_throne", "choice_morning", "choice_library", "ending"];
const missingNodes = requiredNodes.filter((id) => !story[id]);
if (missingNodes.length) {
  throw new Error(`Missing required story nodes: ${missingNodes.join(", ")}`);
}

let firstChoiceDepth = 0;
let cursor = "start";
while (story[cursor] && !story[cursor].choices) {
  firstChoiceDepth += 1;
  cursor = story[cursor].next;
}
if (firstChoiceDepth < 14) {
  throw new Error(`First branch arrives too early: ${firstChoiceDepth} story nodes`);
}

const textChars = Object.values(story).reduce((sum, node) => {
  const textTotal = node.text ? node.text.length : 0;
  const choiceTotal = (node.choices ?? []).reduce((inner, choice) => inner + choice.label.length + choice.hint.length, 0);
  return sum + textTotal + choiceTotal;
}, 0);
if (textChars < 3800) {
  throw new Error(`Story text is too thin for the requested playable act: ${textChars} chars`);
}

import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const assetPaths = [
  ...Object.values(assets.backgrounds),
  ...Object.values(assets.characters),
].map((src) => new URL(`../web/${src.replace("./", "")}`, import.meta.url));

for (const url of assetPaths) {
  await access(fileURLToPath(url));
}

const visited = new Set();
const stack = ["start"];
while (stack.length) {
  const id = stack.pop();
  if (!id || visited.has(id)) continue;
  const node = story[id];
  if (!node) throw new Error(`Broken story reference: ${id}`);
  visited.add(id);
  if (node.next) stack.push(node.next);
  for (const choice of node.choices ?? []) {
    if (!story[choice.next]) throw new Error(`Broken choice from ${id} to ${choice.next}`);
    stack.push(choice.next);
  }
}

if (!visited.has("ending")) {
  throw new Error("Ending is unreachable");
}

if (visited.size < 100) {
  throw new Error(`Playable story is too short: only ${visited.size} reachable nodes`);
}

const stats = { ...initialStats, closeness: 5, observation: 1 };
const lockedChoice = story.choice_library.choices[2];
if (!lockedChoice.requires(stats, {})) {
  throw new Error("Intimate route unlock condition regressed");
}

console.log(`Smoke OK: ${visited.size} story nodes, ${assetPaths.length} assets.`);
