# Prompt Enhancer

> One-click inline prompt optimizer for ChatGPT, with a popup fallback for every site.

![Version](https://img.shields.io/badge/version-0.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-Draft%20feature%20branch%3A%20002--multi--site--support-orange.svg)

**Inject an “优化指令” button directly into the ChatGPT input area.** Click or press `Ctrl+Shift+O` / `Cmd+Shift+O` to replace your draft with a structured, optimized prompt—without leaving the chat. A popup workflow remains available for any site.

![Inline button](https://picbox-1313243162.cos.ap-nanjing.myqcloud.com/typora/image-20251128101626985.png)

---

## Quick Navigation

- [Background & Goals](#background--goals)
- [Features](#features)
- [Supported Sites](#supported-sites)
- [Installation](#installation)
  - [Chrome (Manual)](#chrome-manual)
  - [Microsoft Edge](#microsoft-edge)
- [How to Use](#how-to-use)
- [Configuration](#configuration)
- [Testing & QA](#testing--qa)
- [Troubleshooting](#troubleshooting)
- [Privacy & Security](#privacy--security)
- [Roadmap & Status](#roadmap--status)
- [Support](#support)

---

## Background & Goals

- Users rush prompts in ChatGPT, rarely pausing to add structure, context, or constraints.
- Refining prompts elsewhere (Notion, IDE) then pasting back is a fragmented workflow.
- Existing optimizers are web apps or CLIs; none sit natively inside ChatGPT.

**Goal:** Reduce friction by injecting an inline “优化指令” button next to the ChatGPT input (by the “+” control). Reuse the existing extension stack (service worker, API config, LLM client) to optimize prompts in place while keeping popup mode for other sites.

---

## Features

### 🚀 Inline ChatGPT Optimizer (P1)
- Visible “优化指令” button on chatgpt.com and chat.openai.com, positioned to the left of the input bar near the “+”.
- Reads the current draft, sends it to the background worker, and replaces it with the optimized prompt (no auto-send; you can still edit).
- Keyboard shortcut: `Ctrl+Shift+O` (Win/Linux) or `Cmd+Shift+O` (Mac) triggers the same flow.
- Loads within ~500ms on page load; MutationObserver fallback covers DOM changes.

### 👀 Visual Feedback (P2)
- Loading state: shows “优化中…” and disables the button during the API call.
- Validation and errors: empty input (“请输入内容”), missing API key (“请先在 Options 页面配置 API Key”), network errors (“请求错误”), with automatic reset to the normal label.
- Clear success path: optimized text appears immediately in the input box.

### 🎯 Placement & Styling (P3)
- Button sits inside ChatGPT’s grid/action area without layout shift.
- Pill-style design aligned to ChatGPT UI, adapts to light/dark themes automatically.
- Hover/active states to signal interactivity.

### 🪄 Popup Companion
- Toolbar popup works on any site: paste a prompt, click “✨ Optimize,” copy or refine the result.
- Shares the same API configuration and model selection as the inline flow.

---

## Supported Sites

| Site | Inline Button | Popup |
|------|---------------|-------|
| chatgpt.com | ✅ | ✅ |
| chat.openai.com | ✅ | ✅ |
| manus.im | ✅ | ✅ |
| gemini.google.com | ✅ | ✅ |

---

## Installation

### Chrome (Manual)

Manual install is recommended while the feature branch is in draft:

1. **Download** the repo (Code → Download ZIP) or grab the latest packaged folder.
2. **Extract** to a permanent folder (do not delete after install).
3. Open `chrome://extensions/`.
4. Toggle **Developer mode** (top right).
5. Click **Load unpacked**.
6. Select the extracted folder that contains `manifest.json`.
7. The extension icon appears in your toolbar.

### Microsoft Edge

1. Download and extract (same as above).
2. Open `edge://extensions/`.
3. Enable **Developer mode** in the left sidebar.
4. Click **Load unpacked** and choose the extracted folder.
5. Done.

**Common questions**
- Developer mode banner is normal for manually installed extensions.
- To update, remove the old version from `chrome://extensions/` (or Edge equivalent) and load the new folder; local settings stay intact.
- Change the shortcut at `chrome://extensions/shortcuts` if it conflicts with other tools.

---

## How to Use

### First-Time Setup
- Install the extension via manual steps above.
- Open the **Options** page to set API Base URL, API Key, model, and system prompt (see Configuration).

### Inline Flow (ChatGPT/ Manus/ Gemini)

1. Go to `https://chatgpt.com` or `https://manus.im` or `https://gemini.google.com`.
2. Type your prompt in the input field.
3. Click the **“优化指令”** button (left side near “+”) or press `Ctrl+Shift+O` / `Cmd+Shift+O`.
4. Button shows **“优化中…”** while processing.
5. Your draft is replaced with the optimized prompt; edit further if needed, then press Enter to send.

### Popup Flow (Any Site)

1. Click the extension icon in the toolbar.
2. Paste your prompt into the popup.
3. Click **“优化”** to generate the improved prompt.
4. Copy or edit the output before using it elsewhere.

---

## Configuration

Open the **Options** page via `Extensions → Details → Extension options` (or `chrome-extension://<id>/options.html`).

- **API Base URL**: default `https://api.openai.com/v1` (no trailing slash). Works with compatible proxies.
- **API Key**: stored locally in `chrome.storage.local`, never synced.
- **Model**: default `gpt-4.1-mini`; set to the exact model ID exposed by your provider.
- **System Prompt**: default is a concise “prompt upgrader”; customize if you need a different style.

|              | Chatgpt                      | Gemini                                                   |
| ------------ | ---------------------------- | -------------------------------------------------------- |
| API Base URL | https://api.openai.com/v1    | https://generativelanguage.googleapis.com/v1beta/openai/ |
| API Key      | get from openai api platfrom | get it from Google AI Studio                             |
| Model        | `gpt-4.1` or `gpt-4.1-mini`  | `gemini-3-pro-preview`                                   |



System Prompt Example:

> You are an expert Prompt Engineer. Your task is to rewrite the user's input prompt to be concise, structured, and highly effective (clarifying roles, objectives, and constraints).
>
> **Critical Language Rule:**
>
> - If the user's input is in **Chinese**, the optimized prompt must be in **Chinese**.
> - If the user's input is in **English**, the optimized prompt must be in **English**.
>
> **Constraint:** Return **only** the improved prompt text. Do not include any explanations, preambles, or conversational filler.

---

## Testing & QA

Field-verifiable acceptance checks (from the spec):

- Button appears on ChatGPT input within ~500ms; fallback observer attaches if the first query fails.
- Clicking “优化指令” with text shows loading, disables the button, then replaces input with the optimized prompt.
- Empty input shows the temporary “请输入内容” message and resets automatically.
- Missing API key shows “请先在 Options 页面配置 API Key.”
- Network failure shows “请求错误,” then resets to the normal label.
- Keyboard shortcut `Ctrl+Shift+O` / `Cmd+Shift+O` mirrors the click behavior.
- No layout shift: button sits near the “+” control without overlapping ChatGPT UI; works in light/dark modes.

---

## Troubleshooting

- **Button not visible**: confirm you’re on chatgpt.com or chat.openai.com and that the extension is enabled; refresh the page.
- **Shortcut conflict**: adjust at `chrome://extensions/shortcuts`.
- **No response**: ensure API key is set in Options and that your proxy/base URL is reachable.
- **Repeated rapid clicks**: the button disables during processing to prevent concurrent requests; wait for the state to reset.

---

## Privacy & Security

- API keys stay local in `chrome.storage.local`; nothing is synced or sent elsewhere.
- All optimization requests go directly from the browser to your configured API endpoint.
- No analytics, no tracking, no external servers.

---

## Support

- Found an issue or idea? Open a ticket in this repo.
- If this helps your ChatGPT workflow, consider starring the project.

