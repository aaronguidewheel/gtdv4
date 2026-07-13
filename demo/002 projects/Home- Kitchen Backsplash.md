---
del: Backsplash installed
started: 2025-11-10
tags:
  - project/personal
  - value/home
  - value/family
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
- [x] Pick tile #task-category/errands ✅ 2025-11-10
- [x] Order materials #task-category/computer ✅ 2025-11-12
- [x] Install weekend 1 #task-category/errands ✅ 2025-11-22
- [x] Grout + seal #task-category/errands ✅ 2025-11-29

---
*Customize: [[Values]] · [[Project Categories]]*
