async function archiveProject(tp) {
  const file = tp.config.target_file;

  const archiveFolder = "005 archive";
  if (!app.vault.getAbstractFileByPath(archiveFolder)) {
    await app.vault.createFolder(archiveFolder);
  }

  // Move first, then tag. Doing it the other way round loses the frontmatter
  // edit: the rename lands before processFrontMatter flushes, so the write
  // targets a path that no longer exists. That is why some notes ended up in
  // 005 archive without status/done.
  const newPath = `${archiveFolder}/${file.name}`;
  await app.fileManager.renameFile(file, newPath);

  const moved = app.vault.getAbstractFileByPath(newPath);
  if (!moved) {
    new Notice(`Archive: moved ${file.name} but could not re-resolve it to add status/done`);
    return "";
  }

  await app.fileManager.processFrontMatter(moved, (fm) => {
    const tags = new Set(fm.tags || []);
    tags.add("status/done");
    fm.tags = Array.from(tags);
  });

  return "";
}
module.exports = archiveProject;
