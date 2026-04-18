---
title: Hooks
description: Set up the prepare-commit-msg Git hook for automatic message generation
order: 6
---

# Hooks

Set a Git `prepare-commit-msg` hook:

```sh
aic hook set
```

Unset it:

```sh
aic hook unset
```

Use the built-in help for a quick reminder of the available hook commands:

```sh
aic hook --help
aic hook set --help
aic hook unset --help
```

When the hook runs, it generates a commit message for staged files and writes it into Git's commit message file.

The flow is:

1. `git commit` opens the message file
2. The `prepare-commit-msg` hook fires
3. `aic hookrun` reads the staged diff
4. A message is generated via the configured AI provider
5. If `AIC_HOOK_AUTO_UNCOMMENT` is `true`, the message is written directly
6. Otherwise, the message is written as a comment for you to review in your editor

By default the hook writes the generated message as a comment, so you can review and uncomment it in your editor. To write it uncommented:

```sh
aic config set AIC_HOOK_AUTO_UNCOMMENT=true
```
