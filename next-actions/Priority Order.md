Every open project, ranked by its `priority` field (lower = more important). This is an alternative to the filename priority-prefix convention in `Data Model.md` — useful if you'd rather re-order by editing one number in frontmatter than by renaming files, or if an AI agent working this vault needs a way to read priority without relying on filenames. Re-order by editing the `priority:` number in a project's frontmatter, nothing else needs to change (no renaming, no relinking).

```dataview
TABLE priority AS "Priority", del AS "Deliverable"
FROM "002 projects"
WHERE priority
SORT priority ASC
```

## Unranked

Projects with no `priority` set yet — new projects should get one added during the next daily check or weekly review.

```dataview
LIST del
FROM "002 projects"
WHERE !priority
```
