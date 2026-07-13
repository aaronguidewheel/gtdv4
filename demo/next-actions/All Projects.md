Grouped by category tag (`project/...` on each project note's `tags` property). Projects with no `project/...` tag yet won't show up here.

```dataview
TABLE rows.file.link as Project, rows.del as Deliverable
FROM "002 projects"
FLATTEN file.tags as tag
WHERE startswith(tag, "#project/")
GROUP BY tag
SORT tag ASC
```
