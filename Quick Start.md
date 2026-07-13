Setup guide for your own personal copy of this GTD vault. Single-user only in this version — see `system/Data Model.md` for what's planned for team use.

## 0. Delete `demo/` first
`demo/` is a populated example vault included for reference — not something to keep around. Delete the whole folder before doing anything else. Until you do, its fictional tasks will show up mixed into your real dashboards (`Today`, `Waiting For`, `All Open Tasks`, etc.) — the Tasks-plugin queries filter with a substring match on the projects folder, and `demo/002 projects/...` matches it just as much as your real `002 projects/` does.

## 1. Install plugins
Settings → Community plugins → Browse → install and enable all four:
- **Dataview**
- **Tasks**
- **Buttons**
- **Templater**

Then: Settings → Dataview → enable **"Enable JavaScript Queries"** (off by default, needed for the value chips).

## 2. Configure Templater
Settings → Templater:
- **Template folder location** → `system/templates`
- **Script files folder location** → `system/scripts`
- **Folder Templates** → add `002 projects` → `system/templates/Project Template.md`
- **Trigger Templater on new file creation** → on

Leave the core **Templates** plugin's folder location blank (don't point it at `system/templates` too — causes duplicate-template resolution errors).

## 3. Create a project
Right-click `002 projects` → New note. The template applies automatically: `started` fills in today's date, and you get a `## Why` (value chips), `## Note` (linked notes), and `## Tasks` section.

## 4. Customize the vocab
- `999 config/Values.md` — the "why" chips shown on every project. Add/remove a line to change what's available everywhere.
- `999 config/Project Categories.md` — valid `project/<name>` category tags. Add a line, then tag a project's `tags` property with `project/<name>`.

## 5. Daily use
- Click chips under `## Why` to tag a project's purpose.
- **"New linked note"** creates a dated note in `project-notes/`, linked back to the project.
- **"Add task"** prompts for text + a type (Calls, Errands, Computer, Waiting For, Someday) and inserts it as a checkbox with the right tag. Picking Waiting For asks who/what you're waiting on.
- `next-actions/` — the dashboards: `Today`, `This Week`, `Due or Overdue`, `Waiting For`, `Stuck Projects`, `All Projects`, `No Context`, `Recently Completed`, and one per context (`Calls`, `Errands`, `Computer`, `Someday`).

## 6. If something breaks
Read `system/Data Model.md` — it documents every mechanism and every bug hit building this, including the fixes. Don't edit anything under `system/` directly unless you're changing how the vault itself works.

See `LICENSE.md` and `EULA.md` for terms of use.
