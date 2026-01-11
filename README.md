# Prompt Optimizer (Chrome MV3)

Optimize prompts inline on chat-based sites and via a popup. Features specialized prompt templates, keyboard shortcuts, dark mode support, and seamless multi-site integration.

**Current Version**: v0.2 with specialized prompt templates
**Supported Sites**: `chatgpt.com`, `chat.openai.com`, `manus.im`, `gemini.google.com` (inline button + popup)

## Requirements
- Node.js 18+ and npm (or pnpm).
- Chrome (latest stable) for loading the unpacked extension.

## Features

### Specialized Prompt Templates (v0.2) - NEW
- **7 Built-in Presets**: General optimization, Translation, Company Research, Tech Explainer, Code Generation, Writing Assistant, Summarization
- **Quick Template Switching**:
  - **Popup**: Dropdown menu at the top to select scenario
  - **Inline Button**: Right-click the "优化指令" button to show template menu
- **Custom Templates**: Create your own optimization templates (coming soon in Options page)
- **Template Sync**: Selected template syncs across popup and content script
- **Visual Indicators**: Selected template highlighted in menu

### Multi-Site Inline Button
- **One-Click Optimization**: "优化指令" button appears on ChatGPT, Manus, and Gemini
- **Keyboard Shortcut**: Press `Ctrl+Shift+O` (Windows/Linux) or `Cmd+Shift+O` (Mac) to optimize without clicking
- **Dark Mode Support**: Button automatically adapts to each site's light/dark theme
- **Smart Positioning**: Uses each site's layout for seamless integration
- **Visual Feedback**: Loading states ("优化中…"), error messages, and success indicators
- **Zero Layout Shift**: Button injection doesn't break existing UI

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
- **Automated Tests**: 30 unit tests for pure functions (color logic, message validation, selector priority, template validation)
- **Manual Testing**: Required for UI and Chrome API features (see Testing Guide below)
- **Test Framework**: Node.js built-in test runner (zero dependencies)

## Source Layout (inside `extension/`)
- `manifest.json` — MV3 manifest with keyboard shortcuts and multi-site permissions.
- `src/` — code.
  - `background/` — service worker, LLM calls, keyboard shortcut handler, template management.
  - `content/` — DOM hooks, injects optimize button, handles keyboard shortcuts.
    - `sites/` — site-specific handlers (ChatGPT, Manus, Gemini).
    - `shared/` — button controller, types, utilities.
    - `button-styles.ts` — Dark mode detection and button styling utilities.
  - `popup/` — popup UI with template dropdown.
  - `options/` — options UI (API configuration).
  - `shared/` — config, messages, LLM client, templates.
    - `templates.ts` — 7 preset templates and template utilities.
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

## Use in Chrome

### Initial Setup
1) From `extension/`, run `npm run build` (or `npm run dev` while working).
2) Open `chrome://extensions`, enable **Developer mode**, click **Load unpacked**, and select `extension/dist/`.
3) Configure API key via Options page (see Configure section above).

### Inline Button Usage (ChatGPT, Manus, Gemini)
1) Navigate to any supported site (chatgpt.com, manus.im, gemini.google.com)
2) Look for the "优化指令" button near the input area
3) Type your prompt in the input box
4) **Click the button** or press **`Ctrl+Shift+O`** (Windows/Linux) / **`Cmd+Shift+O`** (Mac)
5) The button shows "优化中…" while processing
6) Your prompt is replaced with the optimized version (you can still edit before sending)

**Template Selection (Right-Click Menu)**:
1) Right-click on the "优化指令" button
2) A menu appears with 7 preset templates:
   - ✨ 通用优化 (General) - Default
   - 🌐 翻译助手 (Translation)
   - 🏢 公司调研 (Company Research)
   - 💡 技术讲解 (Tech Explainer)
   - 💻 代码生成 (Code Generation)
   - ✍️ 写作助手 (Writing)
   - 📝 内容总结 (Summarization)
3) Click to select - template is applied immediately
4) Selected template is highlighted with a checkmark
5) Your choice persists across page refreshes

**Keyboard Shortcut Customization**: Go to `chrome://extensions/shortcuts` to change the default shortcut.

### Popup Usage (All Sites)
1) Click the toolbar icon on any website
2) **Select a scenario** from the dropdown at the top (场景):
   - 预设模板 (Presets): 7 built-in templates
   - 自定义模板 (Custom): Your custom templates (if any)
3) Paste a prompt into the text area
4) Click "✨ 优化"
5) Copy or edit the optimized result

**Tip**: The selected template syncs with the inline button - switching in popup updates inline too.

### Visual Feedback
- **Loading**: "优化中…" (button disabled)
- **Empty Input**: "请输入内容" (1.2 seconds)
- **Missing API Key**: "请先在 Options 页面配置 API Key" (1.4 seconds)
- **Network Error**: "请求错误" (1.4 seconds)
- **Success**: Original prompt replaced with optimized version

## Testing Guide

### Automated Tests

Run the test suite to verify pure function logic:

```bash
npm test
```

**Expected Output**: ✅ 30/30 tests passing
- 5 button styling tests (color logic, hover states, dimensions)
- 7 message validation tests (type guards)
- 3 selector priority tests
- 15 template tests (validation, merging, finding)

**Test Files**:
- `test/button-styles.test.js` - Dark/light mode color logic, pill design dimensions
- `test/messages.test.js` - Message type validation (OPTIMIZE_PROMPT, TRIGGER_OPTIMIZE)
- `test/selectors.test.js` - ChatGPT selector priority (div[role="textbox"] → textarea fallback)
- `test/templates.test.js` - Template validation, merging, and lookup functions

### Manual Testing Checklist

**Prerequisites**:
1. Build extension: `npm run build`
2. Load unpacked extension from `extension/dist/`
3. Configure valid OpenAI API key in Options page
4. Open https://chatgpt.com in a new tab

#### Test 1: Button Injection (FR-001, FR-002)
- [ ] Navigate to chatgpt.com
- [ ] Verify "优化指令" button appears within 500ms
- [ ] Button is positioned on **LEFT side**, near the "+" button (not after input)
- [ ] Button has pill shape (fully rounded edges)
- [ ] Button does NOT overlap or break ChatGPT's UI

#### Test 2: Button Click Optimization (FR-004 - FR-008)
- [ ] Type prompt: "写个 Python 脚本抓取网站"
- [ ] Click "优化指令" button
- [ ] Button text changes to "优化中…" immediately
- [ ] Button becomes disabled (grayed out)
- [ ] Within 1-3 seconds, optimized prompt appears in input
- [ ] Original prompt is fully replaced
- [ ] You can edit the optimized prompt before sending
- [ ] Button returns to "优化指令" state

#### Test 3: Keyboard Shortcut (FR-017)
**Windows/Linux**:
- [ ] Type prompt: "帮我写个网页"
- [ ] Press `Ctrl+Shift+O`
- [ ] Optimization triggers (same as clicking button)

**macOS**:
- [ ] Type prompt: "帮我写个网页"
- [ ] Press `Cmd+Shift+O`
- [ ] Optimization triggers

#### Test 4: Empty Input Validation (FR-011)
- [ ] Clear input box (leave it empty)
- [ ] Click "优化指令" button
- [ ] Button shows "请输入内容"
- [ ] After ~1.2 seconds, button reverts to "优化指令"
- [ ] No API call made (check Network tab)

#### Test 5: Missing API Key Error (FR-009)
- [ ] Open Options page → Clear API Key field → Save
- [ ] Go to chatgpt.com
- [ ] Type prompt and click "优化指令"
- [ ] Button shows "请先在 Options 页面配置 API Key"
- [ ] After ~1.4 seconds, button reverts to "优化指令"

#### Test 6: Network Error Handling (FR-010)
- [ ] Configure invalid API base URL: `https://invalid-url-12345.com/v1`
- [ ] Type prompt and click "优化指令"
- [ ] Button shows "请求错误" or error message
- [ ] After ~1.4 seconds, button reverts to "优化指令"
- [ ] Original prompt remains unchanged

#### Test 7: Dark Mode Adaptation (FR-015, SC-007)
- [ ] Go to chatgpt.com (light mode)
- [ ] Observe button: should have **black background, white text**
- [ ] Click ChatGPT settings → Enable dark mode
- [ ] Button automatically changes to **white background, black text**
- [ ] Button remains readable and matches ChatGPT design
- [ ] No page refresh needed for theme change

#### Test 8: Rapid Click Prevention
- [ ] Type prompt
- [ ] Click "优化指令" button rapidly 5 times
- [ ] Only ONE API call is made (check Network tab)
- [ ] Button stays disabled until first request completes

#### Test 9: Multi-Site Support (FR-012, SC-006)
- [ ] Test on https://chatgpt.com - button appears
- [ ] Test on https://chat.openai.com - button appears
- [ ] Functionality identical on both sites

#### Test 10: Edge Cases
- [ ] **DOM Changes**: Refresh page rapidly during load → button still appears via MutationObserver
- [ ] **Navigation During Optimization**: Click button, then navigate to different conversation → no errors
- [ ] **Hover State**: Hover over button → opacity changes (becomes slightly transparent)

### Performance Validation

Verify success criteria using Chrome DevTools:

1. **SC-001 - Optimization Speed**:
   - Open Network tab → Click "优化指令" → Measure time to completion
   - **Expected**: Under 3 seconds (1-3 seconds typical)

2. **SC-002 - Button Injection Speed**:
   - Open Performance tab → Record page load → Stop after button appears
   - **Expected**: Button visible within 500ms

3. **SC-003 - Injection Success Rate**:
   - Load chatgpt.com 20+ times
   - **Expected**: Button appears 95%+ of the time on first try

4. **SC-005 - Zero Layout Shift**:
   - Watch for page "jump" when button appears
   - **Expected**: No visible layout shift or UI disruption

### Debugging Tips

**Button doesn't appear**:
1. Open Console (F12) → Check for errors
2. Verify selector: `document.querySelector('div[role="textbox"]')` should find input
3. Check if extension is loaded: `chrome://extensions/`
4. Verify host: Only works on chatgpt.com and chat.openai.com

**Optimization fails silently**:
1. Console → Check for "API key is missing" errors
2. Verify Options page has valid API key
3. Network tab → Look for failed requests to OpenAI API
4. Check API base URL ends with `/v1` (no trailing slash after v1)

**Keyboard shortcut doesn't work**:
1. Verify focus is on ChatGPT page (not in DevTools)
2. Check Console for event listener errors
3. Go to `chrome://extensions/shortcuts` → Verify command is enabled
4. Test in incognito mode (ensure extension is enabled for incognito)

**Button styling looks wrong**:
1. Inspect button element → Check computed styles
2. Verify dark mode class: `document.documentElement.classList.contains('dark')`
3. Try toggling ChatGPT theme to trigger style update

## Tips & Troubleshooting
- If selectors fail on a site, adjust them in `src/content/index.ts`.
- To change default prompts or endpoints, update `src/shared/config.ts` defaults, rebuild, and reload.
- For CORS or proxy issues, prefer a compatible OpenAI-style endpoint that accepts browser requests.
- After code changes, rebuild and click "Reload" in `chrome://extensions` for the unpacked entry.
- For milestone-specific scope or decisions, see `../docs/prd/` and `../docs/plans/`.
- **Detailed Testing Guide**: See `../specs/001-chatgpt-inline-button/quickstart.md` for additional test scenarios and validation steps.

## Additional Documentation

### Feature Specs
- **001 - ChatGPT Inline Button**: `../specs/001-chatgpt-inline-button/` - Original inline button feature
- **002 - Multi-Site Support**: `../specs/002-multi-site-support/` - Manus and Gemini integration (if exists)
- **003 - Specialized Prompts**: `../specs/003-add-specialized-prompts/` - Template system (current)
  - `spec.md` - Complete requirements and user stories
  - `plan.md` - Technical architecture and design decisions
  - `tasks.md` - 28 implementation tasks

### Developer Resources
- **Developer Guide**: `AGENTS.md` - Contributor guidelines and site handler patterns
- **Debugging Guide**: `DEBUGGING.md` - Troubleshooting button injection issues
- **Quick Start Testing**: `TESTING-QUICK-START.md` - Manual testing steps
- **Project Constitution**: `../.specify/memory/constitution.md` - Development principles and constraints
