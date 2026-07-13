---
del: All 4 Delacroix sites monitoring live, exec dashboard delivered
started: 2025-09-02
tags:
  - project/customer-implementation
  - value/customer-success
  - value/operational-excellence
  - value/reliability
  - value/team-collaboration
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
- [x] Kickoff with Delacroix ops director #task-category/calls ✅ 2025-09-02
- [x] Site survey — Site A #task-category/errands ✅ 2025-09-10
- [x] Site survey — Site B #task-category/errands ✅ 2025-09-24
- [x] Coordinate hardware shipment for all 4 sites #task-category/waiting-for [waitingOn:: warehouse fulfillment] ✅ 2025-10-06
- [x] Install — Site A + B #task-category/errands ✅ 2025-10-20
- [x] Install — Site C + D #task-category/errands ✅ 2025-11-10
- [x] Exec dashboard build #task-category/computer ✅ 2025-11-20
- [x] Final rollout review call #task-category/calls ✅ 2025-12-01

---
*Customize: [[Values]] · [[Project Categories]]*
