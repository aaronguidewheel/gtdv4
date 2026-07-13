async function addTask(tp) {
  const text = (await tp.system.prompt("Task", "New task")) || "New task";

  const labels = ["Calls", "Errands", "Computer", "Waiting For", "Someday"];
  const values = ["calls", "errands", "computer", "waiting-for", "someday"];
  const type = await tp.system.suggester(labels, values, false, "Task type");
  if (!type) return `- [ ] ${text}`;

  let line = `- [ ] ${text} #task-category/${type}`;

  if (type === "waiting-for") {
    const waitingOn = (await tp.system.prompt("Waiting on (who/what)", "someone")) || "someone";
    line += ` [waitingOn:: ${waitingOn}]`;
  }

  return line;
}
module.exports = addTask;
