---
del: Sensors recalibrated, customer confirmed resolved
started: 2026-01-12
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
- [x] Call customer to scope issue #task-category/calls ✅ 2026-01-12
- [x] Escalate to hardware support #task-category/waiting-for [waitingOn:: hardware support team] ✅ 2026-01-14
- [x] On-site recalibration #task-category/errands ✅ 2026-01-20
- [x] Follow-up confirmation call #task-category/calls ✅ 2026-01-22

---
*Customize: [[Values]] · [[Project Categories]]*
