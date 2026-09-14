---
type: meta
version: 0.1.0
---
# Agent Memory Backup

A portable snapshot of your assistant's persistent memory about you (preferences, project context, references), exported from its live memory store (for Claude Code, `~/.claude/projects/<vault-path-slug>/memory/` — invisible to Obsidian and tied to the machine it runs on).

**This folder is a backup, not the live store.** Your assistant keeps reading and writing the real one during normal sessions. This copy exists so the memory travels with the vault (visible in Obsidian, synced wherever the vault syncs, readable by any other tool or LLM later) and survives even if the machine-local store is lost.

Plain Markdown with YAML frontmatter, same format the live store uses, so it's usable by any LLM, not tied to one product.

Empty by default in this template — nothing to back up yet. Once your assistant starts writing memories, decide whether you want them mirrored here.

## Versioning policy

Re-export on **major** or **patch** changes only. **Minor** changes (wording tweaks, typo fixes, non-substantive edits) are skipped — this backup isn't meant to churn on every small edit.

- **Major** — a memory file is added or removed, or an existing rule/fact is reversed or fundamentally changed
- **Patch** — an existing memory is meaningfully corrected, expanded, or given a new example, same core claim
- **Minor** (skipped) — rewording, typo fixes, reformatting with no change in meaning

See `CHANGELOG.md` for the version history and what triggered each snapshot.

## See also
- `system/GTD Agent Directive.md` — how the agent behaves *while doing GTD housekeeping in this vault specifically*. Different scope: that's vault process, this is cross-session memory about you.
