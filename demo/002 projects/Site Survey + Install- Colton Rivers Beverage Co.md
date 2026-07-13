---
del: Monitoring live across 2 production lines
started: 2026-04-20
tags:
  - project/customer-implementation
  - value/customer-success
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
- [x] Site survey #task-category/errands ✅ 2026-04-20
- [x] Order hardware #task-category/computer ✅ 2026-04-22
- [x] Coordinate install with ops #task-category/waiting-for [waitingOn:: internal ops scheduling] ✅ 2026-05-04
- [x] On-site install #task-category/errands ✅ 2026-05-18
- [x] Customer training #task-category/calls ✅ 2026-05-22

---
*Customize: [[Values]] · [[Project Categories]]*
