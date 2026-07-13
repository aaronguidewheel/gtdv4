---
del: Quote requested, gathering info
started: 2026-07-06
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
- [x] Log RFQ in system #task-category/computer ✅ 2026-07-06
- [ ] Call to scope requirements #task-category/calls 📅 2026-07-14
- [ ] Draft quote #task-category/computer

---
*Customize: [[Values]] · [[Project Categories]]*
