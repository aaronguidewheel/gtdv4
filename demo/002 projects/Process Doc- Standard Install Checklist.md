---
del: Checklist published to reference library
started: 2026-02-02
tags:
  - project/internal
  - value/team-collaboration
  - value/operational-excellence
---
## Why

```dataviewjs
await dv.view("system/views/valueChips", { file: dv.current().file })
```

## Note

```button
name 🗒️ New linked note
type line(+1) template
action New Project Note
```



```dataview
LIST date
FROM "project-notes"
WHERE project = this.file.link
SORT date DESC
```

---
## Tasks

```tasks
not done
path includes {{query.file.path}}
tags include #task-category/waiting-for
```

```button
name ➕ Add task
type line(+1) template
action Add Task
```
- [x] Draft checklist from past installs #task-category/computer ✅ 2026-02-02
- [x] Review with ops team #task-category/waiting-for [waitingOn:: ops team review] ✅ 2026-02-09
- [x] Publish final version #task-category/computer ✅ 2026-02-13

---
*Customize: [[Values]] · [[Project Categories]]*
