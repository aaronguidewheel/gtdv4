---
del: Site survey report delivered
started: 2025-09-15
tags:
  - project/customer-implementation
  - value/customer-success
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
- [x] Schedule site visit #task-category/calls ✅ 2025-09-15
- [x] On-site survey #task-category/errands ✅ 2025-09-17
- [x] Write up survey report #task-category/computer ✅ 2025-09-18

---
*Customize: [[Values]] · [[Project Categories]]*
