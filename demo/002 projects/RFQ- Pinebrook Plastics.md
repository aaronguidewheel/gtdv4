---
del: Signed quote returned, PO issued
started: 2025-07-16
tags:
  - project/customer-implementation
  - value/customer-success
  - value/reliability
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
- [x] Pull machine specs from customer intake form #task-category/computer ✅ 2025-07-16
- [x] Draft quote in pricing tool #task-category/computer ✅ 2025-07-17
- [x] Call Pinebrook to confirm sensor count #task-category/calls ✅ 2025-07-17
- [x] Send final quote PDF #task-category/computer ✅ 2025-07-18

---
*Customize: [[Values]] · [[Project Categories]]*
