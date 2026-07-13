---
del: New quote template live in shared drive, sales team trained
started: 2025-08-04
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
- [x] Audit current template pain points #task-category/computer ✅ 2025-08-04
- [x] Draft revised layout #task-category/computer ✅ 2025-08-06
- [x] Get feedback from other SEs #task-category/waiting-for [waitingOn:: Sales Engineering team feedback] ✅ 2025-08-08
- [x] Finalize + upload to shared drive #task-category/computer ✅ 2025-08-08

---
*Customize: [[Values]] · [[Project Categories]]*
