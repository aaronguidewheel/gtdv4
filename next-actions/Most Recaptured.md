Projects you've re-captured into the inbox more than once — you keep writing the same idea down, which usually means you want it pushed. Sorted by how often. Treat a high count as a priority signal the rest of the system won't show you.

```dataview
TABLE length(recaptured) AS "Times recaptured", recaptured AS "Dates", del AS "Deliverable"
FROM "002 projects"
WHERE recaptured AND length(recaptured) > 0
SORT length(recaptured) DESC
```

## Brainstorm ideas being recaptured
Ideas parked in `references/Brainstorm Ideas/` that keep coming back. A recurring idea that can't state a deliverable is usually one conversation away from becoming a real project — or it's a genuine someday, and the count tells you which.

```dataview
TABLE length(recaptured) AS "Times recaptured", recaptured AS "Dates"
FROM "references/Brainstorm Ideas"
WHERE recaptured AND length(recaptured) > 0
SORT length(recaptured) DESC
```
