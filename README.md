# Prompt Enhancer

Optimize prompts inline on chat-based sites and via a popup. Features keyboard shortcuts, dark mode support, and seamless ChatGPT integration.

**Current Version**: v0.1 with ChatGPT inline button enhancement
**Supported Sites**: `chatgpt.com`, `chat.openai.com` (inline button), `manus.im`(popup only, inline button work in progress), `gemini.google.com` (popup only, inline button work in progress)

## Requirements

- Node.js 18+ and npm (or pnpm).
- Chrome (latest stable) for loading the unpacked extension.

## Features

### ChatGPT Inline Button (v0.1)

- **One-Click Optimization**: "优化指令" button positioned left of ChatGPT input area, near the "+" button

  

- **Keyboard Shortcut**: Press `Ctrl+Shift+O` (Windows/Linux) or `Cmd+Shift+O` (Mac) to optimize without clicking

- **Dark Mode Support**: Button automatically adapts to ChatGPT's light/dark theme changes

- **Smart Positioning**: Uses ChatGPT's grid layout for seamless integration

- **Visual Feedback**: Loading states ("优化中…"), error messages, and success indicators



- **Zero Layout Shift**: Button injection doesn't break ChatGPT's existing UI

  

### Universal Features

- **Popup Interface**: Works on all sites - click extension icon, paste prompt, optimize, and copy
- **Configurable API**: Supports OpenAI API and compatible proxies (custom base URL, model, system prompt)
- **Privacy First**: API keys stored locally only (never synced), all processing in browser extension sandbox

## Project Structure (repo root)

- `docs/` — versioned PRDs and plans (`docs/prd/v0.1.md`, `docs/plans/v0.1-plan.md`), decisions/roadmap.
- `extension/` — extension codebase (this folder).
- Future builds: `extension/dist/` (output), `extension/tests`, `extension/e2e` (as added).

## Install (from `extension/`)

```bash
npm install
```

## Development (from `extension/`)

Bundle source to `dist/` for Chrome to load.

```bash
# Watch mode
npm run dev

# One-off build
npm run build

# Run unit tests (pure functions only)
npm test

# Clean dist
npm run clean
```

### Testing

- **Automated Tests**: 15 unit tests for pure functions (color logic, message validation, selector priority)
- **Manual Testing**: Required for UI and Chrome API features (see Testing Guide below)
- **Test Framework**: Node.js built-in test runner (zero dependencies)

## Source Layout (inside `extension/`)

- `manifest.json` — MV3 manifest with keyboard shortcuts.
- `src/` — code.
  - `background/` — service worker, LLM calls, keyboard shortcut handler.
  - `content/` — DOM hooks, injects optimize button, handles keyboard shortcuts.
    - `button-styles.ts` — Dark mode detection and button styling utilities.
  - `popup/` — popup UI.
  - `options/` — options UI.
  - `shared/` — config, messages, LLM client.
- `test/` — unit tests for pure functions (Node.js test runner).
- `scripts/build.js` — esbuild bundler (TS → `dist/`).
- `AGENTS.md` — contributor guide for this folder.

## Configure (Options Page)

1) Load the unpacked extension (see next section).  
2) In Chrome, `Extensions` → `Details` → `Extension options` (or open `chrome-extension://<id>/options.html`).  
3) Fill fields:
   - API Base URL (e.g., `https://api.openai.com/v1` or your proxy, no trailing slash).
   - API Key (stored in `chrome.storage.local`, not synced).
   - Model (e.g., `gpt-4.1-mini`).
   - System Prompt (default is a concise prompt-upgrader).
4) Save. Errors will display inline if storage fails.

### Model options

- Common picks: `gpt-4.1-mini` (default), `gpt-4.1`, `gpt-4.1-preview`.
- If your provider exposes GPT-5 family, set the Model field accordingly, e.g., `gpt-5` or `gpt-5-mini` (exact IDs depend on your API gateway). Use the model name exactly as your endpoint expects.



## How to Use in Chrome

### Initial Setup

1) From `extension/`, run `npm run build` (or `npm run dev` while working).
2) Open `chrome://extensions`, enable **Developer mode**, click **Load unpacked**, and select `extension/dist/`.
3) Configure API key via Options page (see Configure section above).

### ChatGPT Inline Usage

1) Navigate to https://chatgpt.com or https://chat.openai.com
2) Look for the "优化指令" button on the **left side** of the input area, next to the "+" button

![image-20251128101626985](https://picbox-1313243162.cos.ap-nanjing.myqcloud.com/typora/image-20251128101626985.png)

3. Type your prompt in the ChatGPT input box

4. **Click the button** or press **`Ctrl+Shift+O`** (Windows/Linux) / **`Cmd+Shift+O`** (Mac)

5. The button shows "优化中…" while processing

![image-20251128101715600](https://picbox-1313243162.cos.ap-nanjing.myqcloud.com/typora/image-20251128101715600.png)

6.Your prompt is replaced with the optimized version (you can still edit before sending)

![image-20251128101843415](https://picbox-1313243162.cos.ap-nanjing.myqcloud.com/typora/image-20251128101843415.png)

**Keyboard Shortcut Customization**: Go to `chrome://extensions/shortcuts` to change the default shortcut.

### Popup Usage (All Sites)

1) Click the toolbar icon on any website
2) Paste a prompt into the text area
3) Click "✨ 优化"
4) Copy or edit the optimized result

### Visual Feedback

- **Loading**: "优化中…" (button disabled)
- **Empty Input**: "请输入内容" (1.2 seconds)
- **Missing API Key**: "请先在 Options 页面配置 API Key" (1.4 seconds)
- **Network Error**: "请求错误" (1.4 seconds)
- **Success**: Original prompt replaced with optimized version