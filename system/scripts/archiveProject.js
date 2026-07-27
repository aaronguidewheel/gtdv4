async function archiveProject(tp) {
  const file = tp.config.target_file;

  await app.fileManager.processFrontMatter(file, (fm) => {
    const tags = new Set(fm.tags || []);
    tags.add("status/done");
    fm.tags = Array.from(tags);
  });

  const archiveFolder = "005 archive";
  if (!app.vault.getAbstractFileByPath(archiveFolder)) {
    await app.vault.createFolder(archiveFolder);
  }

  await app.fileManager.renameFile(file, `${archiveFolder}/${file.name}`);

  return "";
}
module.exports = archiveProject;
