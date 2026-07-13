---
del: Site B expansion monitoring live
started: 2026-06-08
tags:
  - project/customer-implementation
  - value/customer-success
  - value/operational-excellence
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
- [x] Kickoff call with Delacroix ops director #task-category/calls ✅ 2026-06-08
- [x] Site survey — Site B expansion #task-category/errands ✅ 2026-06-15
- [x] Order hardware for expansion #task-category/computer ✅ 2026-06-18
- [ ] Confirm install date with ops team #task-category/waiting-for [waitingOn:: internal ops scheduling] 📅 2026-07-15
- [ ] On-site install #task-category/errands 📅 2026-07-22
- [ ] Dashboard config #task-category/computer

---
*Customize: [[Values]] · [[Project Categories]]*
