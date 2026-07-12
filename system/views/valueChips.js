const valuesFile = app.vault.getAbstractFileByPath("999 config/Values.md");
const content = valuesFile ? await app.vault.read(valuesFile) : "";
const values = content
  .split("\n")
  .map((l) => l.match(/^-\s+(.+)/))
  .filter(Boolean)
  .map((m) => m[1].trim())
  .filter(Boolean);

const file = input.file;
const currentTags = (file.tags || []).map((t) => t.toString());

const container = dv.el("div", "");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "6px";

for (const value of values) {
  const slug = value.toLowerCase().replace(/\s+/g, "-");
  const tag = `value/${slug}`;
  const isActive = currentTags.includes("#" + tag);

  const chip = container.createEl("span", { text: value });
  chip.style.cursor = "pointer";
  chip.style.userSelect = "none";
  chip.style.padding = "2px 10px";
  chip.style.borderRadius = "999px";
  chip.style.fontSize = "0.85em";
  chip.style.border = "1px solid var(--background-modifier-border)";
  chip.style.background = isActive
    ? "var(--interactive-accent)"
    : "var(--background-secondary)";
  chip.style.color = isActive
    ? "var(--text-on-accent)"
    : "var(--text-normal)";

  chip.onclick = async () => {
    const target = app.vault.getAbstractFileByPath(file.path);
    await app.fileManager.processFrontMatter(target, (fm) => {
      const tags = new Set(fm.tags || []);
      if (tags.has(tag)) {
        tags.delete(tag);
      } else {
        tags.add(tag);
      }
      fm.tags = Array.from(tags);
    });
  };
}
