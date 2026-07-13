---
del: Fence repaired
started: 2026-03-16
tags:
  - project/personal
  - value/home
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
- [x] Get repair quotes #task-category/errands ✅ 2026-03-16
- [x] Buy materials #task-category/errands ✅ 2026-03-21
- [x] Repair weekend #task-category/errands ✅ 2026-03-28

---
*Customize: [[Values]] · [[Project Categories]]*
