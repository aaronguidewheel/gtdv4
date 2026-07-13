---
del: Recommendation memo submitted to product team
started: 2025-11-03
tags:
  - project/internal
  - value/operational-excellence
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
- [x] Request eval units from 2 vendors #task-category/waiting-for [waitingOn:: vendor shipment] ✅ 2025-11-03
- [x] Bench test — Vendor A #task-category/computer ✅ 2025-11-24
- [x] Bench test — Vendor B #task-category/computer ✅ 2025-12-10
- [x] Field test at Northgate (low priority site) #task-category/errands ✅ 2026-01-08
- [x] Write recommendation memo #task-category/computer ✅ 2026-01-16

---
*Customize: [[Values]] · [[Project Categories]]*
