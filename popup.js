// src/shared/messages.ts
var MessageType = {
  OptimizePrompt: "OPTIMIZE_PROMPT",
  TriggerOptimize: "TRIGGER_OPTIMIZE",
  GetTemplates: "GET_TEMPLATES",
  SetSelectedTemplate: "SET_SELECTED_TEMPLATE",
  SaveCustomTemplate: "SAVE_CUSTOM_TEMPLATE",
  DeleteCustomTemplate: "DELETE_CUSTOM_TEMPLATE",
  ImportTemplates: "IMPORT_TEMPLATES",
  ExportTemplates: "EXPORT_TEMPLATES"
};

// src/popup/index.ts
var inputEl = document.getElementById("inputPrompt");
var outputEl = document.getElementById("outputPrompt");
var statusEl = document.getElementById("statusText");
var optimizeBtn = document.getElementById("optimizeBtn");
var copyBtn = document.getElementById("copyBtn");
var clearBtn = document.getElementById("clearBtn");
var scenarioSelect = document.getElementById("scenarioSelect");
var presetGroup = document.getElementById("presetGroup");
var customGroup = document.getElementById("customGroup");
var scenarioStatus = document.getElementById("scenarioStatus");
var currentTemplateId = "general";
document.addEventListener("DOMContentLoaded", initPopup);
optimizeBtn?.addEventListener("click", optimizePrompt);
copyBtn?.addEventListener("click", copyOutput);
clearBtn?.addEventListener("click", clearFields);
scenarioSelect?.addEventListener("change", handleScenarioChange);
async function initPopup() {
  try {
    const response = await chrome.runtime.sendMessage({
      type: MessageType.GetTemplates
    });
    if (response?.success && response.templates) {
      populateTemplates(response.templates, response.selectedTemplateId);
    }
  } catch (error) {
    console.error("Failed to load templates:", error);
  }
}
function populateTemplates(templates, selectedId) {
  if (presetGroup) presetGroup.innerHTML = "";
  if (customGroup) customGroup.innerHTML = "";
  const presets = templates.filter((t) => t.type === "preset");
  const custom = templates.filter((t) => t.type === "custom");
  for (const template of presets) {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.icon ? `${template.icon} ${template.name}` : template.name;
    if (template.description) {
      option.title = template.description;
    }
    presetGroup?.appendChild(option);
  }
  for (const template of custom) {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.icon ? `${template.icon} ${template.name}` : template.name;
    if (template.description) {
      option.title = template.description;
    }
    customGroup?.appendChild(option);
  }
  if (customGroup) {
    customGroup.style.display = custom.length > 0 ? "" : "none";
  }
  currentTemplateId = selectedId;
  if (scenarioSelect) {
    scenarioSelect.value = selectedId;
  }
}
async function handleScenarioChange() {
  const newTemplateId = scenarioSelect?.value || "general";
  try {
    const response = await chrome.runtime.sendMessage({
      type: MessageType.SetSelectedTemplate,
      payload: { templateId: newTemplateId }
    });
    if (response?.success) {
      currentTemplateId = newTemplateId;
      showScenarioFeedback("\u5DF2\u5207\u6362");
    } else {
      setStatus(response?.error || "\u5207\u6362\u5931\u8D25");
      if (scenarioSelect) scenarioSelect.value = currentTemplateId;
    }
  } catch (error) {
    console.error("Failed to set template:", error);
    setStatus("\u5207\u6362\u5931\u8D25");
    if (scenarioSelect) scenarioSelect.value = currentTemplateId;
  }
}
function showScenarioFeedback(text) {
  if (!scenarioStatus) return;
  scenarioStatus.textContent = text;
  scenarioStatus.classList.add("show");
  setTimeout(() => {
    scenarioStatus.classList.remove("show");
  }, 1500);
}
function setStatus(text) {
  if (!statusEl) return;
  statusEl.textContent = text;
}
async function optimizePrompt() {
  const prompt = inputEl?.value.trim() || "";
  if (!prompt) {
    setStatus("\u8BF7\u8F93\u5165\u9700\u8981\u4F18\u5316\u7684 Prompt");
    return;
  }
  setLoading(true);
  setStatus("\u4F18\u5316\u4E2D...");
  try {
    const response = await chrome.runtime.sendMessage({
      type: MessageType.OptimizePrompt,
      payload: {
        originalPrompt: prompt,
        templateId: currentTemplateId,
        source: "popup"
      }
    });
    if (!response?.success || !response.optimizedPrompt) {
      setStatus(response?.error || "\u4F18\u5316\u5931\u8D25");
      return;
    }
    if (outputEl) outputEl.value = response.optimizedPrompt;
    setStatus("\u5B8C\u6210\uFF0C\u53EF\u590D\u5236\u6216\u7F16\u8F91");
  } catch (error) {
    console.error("Optimize failed", error);
    setStatus("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E");
  } finally {
    setLoading(false);
  }
}
function copyOutput() {
  const value = outputEl?.value || "";
  if (!value) {
    setStatus("\u6682\u65E0\u53EF\u590D\u5236\u5185\u5BB9");
    return;
  }
  navigator.clipboard.writeText(value).then(() => setStatus("\u5DF2\u590D\u5236")).catch(() => setStatus("\u590D\u5236\u5931\u8D25"));
}
function clearFields() {
  if (inputEl) inputEl.value = "";
  if (outputEl) outputEl.value = "";
  setStatus("");
}
function setLoading(loading) {
  optimizeBtn.disabled = loading;
  copyBtn.disabled = loading;
  clearBtn.disabled = loading;
  scenarioSelect.disabled = loading;
  optimizeBtn.textContent = loading ? "\u4F18\u5316\u4E2D\u2026" : "\u2728 \u4F18\u5316";
}
//# sourceMappingURL=popup.js.map
