---
del: Line 3 sensors installed, dashboard live, customer trained
started: 2025-07-21
tags:
  - project/customer-implementation
  - value/customer-success
  - value/operational-excellence
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
- [x] Kickoff call with Northgate ops manager #task-category/calls ✅ 2025-07-21
- [x] Confirm sensor mounting locations with facilities #task-category/waiting-for [waitingOn:: Northgate facilities team] ✅ 2025-07-24
- [x] Order gateway + sensor kit from warehouse #task-category/computer ✅ 2025-07-25
- [x] Coordinate install date with internal ops team #task-category/waiting-for [waitingOn:: internal ops scheduling] ✅ 2025-08-01
- [x] On-site install — Line 3 #task-category/errands ✅ 2025-08-06
- [x] Dashboard config + threshold setup #task-category/computer ✅ 2025-08-08
- [x] Customer training call #task-category/calls ✅ 2025-08-19

---
*Customize: [[Values]] · [[Project Categories]]*
