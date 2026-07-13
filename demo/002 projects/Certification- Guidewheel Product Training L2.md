---
del: L2 certification complete
started: 2025-10-06
tags:
  - project/professional-development
  - value/career-growth
  - value/continuous-learning
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
- [x] Modules 1–3, self-paced #task-category/computer ✅ 2025-10-10
- [x] Modules 4–6, self-paced #task-category/computer ✅ 2025-10-24
- [x] Live workshop session #task-category/calls ✅ 2025-11-04
- [x] Final assessment #task-category/computer ✅ 2025-11-07

---
*Customize: [[Values]] · [[Project Categories]]*
