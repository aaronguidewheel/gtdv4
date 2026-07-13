---
del: Quote desk materials presented at kickoff
started: 2026-05-26
tags:
  - project/internal
  - value/team-collaboration
  - value/career-growth
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
- [x] Compile quote desk metrics from past year #task-category/computer ✅ 2026-05-26
- [x] Prep slides #task-category/computer ✅ 2026-06-02
- [x] Present at kickoff #task-category/calls ✅ 2026-06-08

---
*Customize: [[Values]] · [[Project Categories]]*
