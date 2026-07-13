async function createProjectNote(tp) {
  const projectTitle = tp.file.title;
  const timestamp = tp.date.now("YYYYMMDDHHmmss");
  const filePath = `project-notes/${projectTitle} — ${timestamp}.md`;

  const content = `---\nproject: "[[${projectTitle}]]"\ndate: ${tp.date.now("YYYY-MM-DD")}\n---\n## Note\n\n`;

  const newFile = await app.vault.create(filePath, content);
  const leaf = app.workspace.getLeaf("split");
  await leaf.openFile(newFile);

  return "";
}
module.exports = createProjectNote;
