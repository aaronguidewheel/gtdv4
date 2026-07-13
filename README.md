# GTD Vault System (v0.1.0-beta)

A personal GTD system built as an Obsidian vault — templates, scripts, and dashboards, no manual upkeep once set up. Single-user only in this version (see `system/Data Model.md` for what's planned for team use).

This repo is **private**. If you can't see/clone it, ask to be added as a collaborator first.

## Install Obsidian
Download from [obsidian.md](https://obsidian.md) (free, Mac/Windows/Linux/mobile) and install it if you don't already have it. No account or sign-in needed to use it locally.

## Get it

**Option A — ZIP download (simplest):** on the repo page, **Code → Download ZIP**, then unzip. If a future version needs to reach you, that'll be handled manually — you don't need git for this.

**Option B — GitHub Desktop:**
1. Install [GitHub Desktop](https://desktop.github.com), sign in with your GitHub account.
2. **File → Clone Repository** → find `aaronguidewheel/gtdv4` → pick a local folder → Clone.

**Option C — command line:**
```
git clone https://github.com/aaronguidewheel/gtdv4.git
```

## Open it in Obsidian
1. Open Obsidian → **"Open folder as vault"** → select the cloned/unzipped folder.
2. Obsidian will ask to trust the vault's community plugins — allow it (Dataview, Tasks, Buttons, Templater are all listed but not yet enabled).

## Delete `demo/` before real use
`demo/` is a populated example vault included for reference — not something to keep around. Delete the whole folder before you start adding your own projects. Until you do, its fictional tasks will show up mixed into your real dashboards (`Today`, `Waiting For`, `All Open Tasks`, etc.) — the Tasks-plugin queries filter with a substring match on the projects folder, and `demo/002 projects/...` matches it just as much as your real `002 projects/` does.

## Then set up the plugins
Follow **`Quick Start.md`** in the vault root — it walks through installing/enabling the four plugins, the two Templater settings, and how to create your first project. Takes a few minutes.

## Getting updates later
If you used the ZIP (Option A), updates will be handled manually — you'll get the updated `system/` files directly rather than needing to re-download anything yourself. If you used GitHub Desktop or the CLI (Option B/C), pull the latest changes yourself (GitHub Desktop: **Fetch origin** → **Pull origin**). Either way, per the maintenance policy in `system/Data Model.md`, updates only touch `system/` — your own projects, inbox, and config lists are never overwritten.

## License
See `LICENSE.md` and `EULA.md` — personal/internal use only, no public redistribution, no commercial use.
