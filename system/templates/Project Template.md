---
del:
started: <% tp.file.creation_date("YYYY-MM-DD") %>
recaptured:
tags:
---
```button
name 📦 Archive project (done)
type line(+1) template
action Archive Project
```

## Why

```dataviewjs
await dv.view("system/views/valueChips", { file: dv.current().file })
```

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

## Context

%% Why this project exists, what it's split from or feeds into, related projects. Set once, rarely touched. %%

## Scope

%% What the deliverable actually covers/excludes, beyond the one-line `del` above. Update this in place as the real boundaries become clearer — this is the live, detailed version of `del`, not a growing log of changes. %%

## Reference

%% Static facts looked up once and kept for reuse: addresses, contact info, catalogue links, base IDs, policy documents. %%

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
*Customize: [[Values]] · [[Project Categories]]*
