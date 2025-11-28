// src/shared/messages.ts
var MessageType = {
  OptimizePrompt: "OPTIMIZE_PROMPT",
  TriggerOptimize: "TRIGGER_OPTIMIZE"
};
function isTriggerOptimizeMessage(message) {
  if (!message || typeof message !== "object") return false;
  const typed = message;
  return typed.type === MessageType.TriggerOptimize;
}

// src/content/button-styles.ts
function isDarkMode() {
  return document.documentElement.classList.contains("dark");
}
function applyButtonStyles(button) {
  const isDark = isDarkMode();
  button.style.height = "36px";
  button.style.padding = "0 16px";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.borderRadius = "9999px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.fontSize = "14px";
  button.style.fontWeight = "500";
  button.style.transition = "opacity 0.2s";
  button.style.whiteSpace = "nowrap";
  button.style.background = isDark ? "#ffffff" : "#000000";
  button.style.color = isDark ? "#000000" : "#ffffff";
  button.addEventListener("mouseenter", () => {
    if (!button.disabled) {
      button.style.opacity = "0.7";
    }
  });
  button.addEventListener("mouseleave", () => {
    button.style.opacity = "1";
  });
  if (button.disabled) {
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
  }
}
function observeThemeChanges(button) {
  const observer = new MutationObserver(() => {
    const isDark = isDarkMode();
    button.style.background = isDark ? "#ffffff" : "#000000";
    button.style.color = isDark ? "#000000" : "#ffffff";
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
  return observer;
}

// src/content/index.ts
var BUTTON_CLASS = "prompt-enhancer-btn";
var BUTTON_TEXT = "\u4F18\u5316\u6307\u4EE4";
function selectorMap(host) {
  if (host.includes("chatgpt.com") || host.includes("chat.openai.com")) {
    return ['div[role="textbox"]', 'textarea[placeholder*="Message"]'];
  }
  if (host.includes("manus.im")) {
    return ['div[contenteditable="true"][role="textbox"]', "textarea", 'div[role="textbox"]'];
  }
  if (host.includes("gemini.google.com")) {
    return ["textarea", 'div[contenteditable="true"]'];
  }
  return ['div[role="textbox"]', "textarea", 'input[type="text"]'];
}
function findPromptInput() {
  const selectors = selectorMap(window.location.host);
  for (const selector of selectors) {
    const el = document.querySelector(selector);
    if (el) return el;
  }
  return null;
}
function getPromptValue(el) {
  if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
    return el.value || "";
  }
  return el.textContent || "";
}
function setPromptValue(el, value) {
  if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
    el.value = value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    return;
  }
  el.textContent = value;
  el.dispatchEvent(new Event("input", { bubbles: true }));
}
function insertButton(target) {
  if (document.querySelector(`.${BUTTON_CLASS}`)) return;
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = BUTTON_TEXT;
  button.className = BUTTON_CLASS;
  applyButtonStyles(button);
  observeThemeChanges(button);
  button.addEventListener("click", () => handleOptimize(button, target));
  const leadingArea = document.querySelector('[class*="grid-area:leading"]');
  const plusButtonSpan = leadingArea?.querySelector("span.flex");
  if (plusButtonSpan) {
    button.style.marginLeft = "8px";
    plusButtonSpan.appendChild(button);
    return;
  }
  const parent = target.parentElement;
  if (parent) {
    parent.insertBefore(button, target);
  } else {
    target.insertAdjacentElement("beforebegin", button);
  }
}
async function handleOptimize(button, target) {
  const originalPrompt = getPromptValue(target).trim();
  if (!originalPrompt) {
    button.textContent = "\u8BF7\u8F93\u5165\u5185\u5BB9";
    setTimeout(() => button.textContent = BUTTON_TEXT, 1200);
    return;
  }
  setLoading(button, true);
  try {
    const response = await chrome.runtime.sendMessage({
      type: MessageType.OptimizePrompt,
      payload: { originalPrompt, source: "content-script", pageHost: window.location.host }
    });
    if (!response?.success || !response.optimizedPrompt) {
      const msg = response?.error || "\u4F18\u5316\u5931\u8D25";
      button.textContent = msg;
      setTimeout(() => button.textContent = BUTTON_TEXT, 1400);
      return;
    }
    setPromptValue(target, response.optimizedPrompt);
  } catch (error) {
    console.error("Optimize failed", error);
    button.textContent = "\u8BF7\u6C42\u9519\u8BEF";
    setTimeout(() => button.textContent = BUTTON_TEXT, 1400);
  } finally {
    setLoading(button, false);
  }
}
function setLoading(button, loading) {
  button.disabled = loading;
  button.textContent = loading ? "\u4F18\u5316\u4E2D\u2026" : BUTTON_TEXT;
}
function mount() {
  const host = window.location.host;
  const supportedHosts = ["chatgpt.com", "chat.openai.com"];
  const isSupported = supportedHosts.some((h) => host.includes(h));
  if (!isSupported) {
    console.log("[Prompt Optimizer] Skipping button injection - unsupported host:", host);
    return;
  }
  const input = findPromptInput();
  if (input) {
    insertButton(input);
    return;
  }
  const observer = new MutationObserver(() => {
    const found = findPromptInput();
    if (found) {
      insertButton(found);
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
if (document.readyState === "complete" || document.readyState === "interactive") {
  mount();
} else {
  window.addEventListener("DOMContentLoaded", mount);
}
chrome.runtime.onMessage.addListener((message) => {
  if (isTriggerOptimizeMessage(message)) {
    const button = document.querySelector(`.${BUTTON_CLASS}`);
    const target = findPromptInput();
    if (button && target) {
      handleOptimize(button, target);
    }
  }
});
//# sourceMappingURL=content-script.js.map
