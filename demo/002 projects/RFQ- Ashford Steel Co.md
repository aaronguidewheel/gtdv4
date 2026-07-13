---
del: Quote sent, awaiting PO
started: 2025-08-25
tags:
  - project/customer-implementation
  - value/customer-success
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
- [x] Review RFQ requirements #task-category/computer ✅ 2025-08-25
- [x] Call Ashford to clarify site count #task-category/calls ✅ 2025-08-26
- [x] Send quote #task-category/computer ✅ 2025-08-27

---
*Customize: [[Values]] · [[Project Categories]]*
