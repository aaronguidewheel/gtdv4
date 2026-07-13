---
del: Tires swapped, checkup done
started: 2026-06-01
tags:
  - project/personal
  - value/reliability
  - value/financial-stability
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
- [x] Schedule appointment #task-category/calls ✅ 2026-06-01
- [x] Drop off / pick up car #task-category/errands ✅ 2026-06-03

---
*Customize: [[Values]] · [[Project Categories]]*
