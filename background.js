// src/shared/templates.ts
var PRESET_TEMPLATES = [
  {
    id: "general",
    name: "\u901A\u7528\u4F18\u5316",
    description: "\u7ED3\u6784\u5316\u4F18\u5316\uFF0C\u660E\u786E\u8F93\u5165\u8F93\u51FA\u548C\u7EA6\u675F\u6761\u4EF6",
    icon: "\u2728",
    type: "preset",
    systemPrompt: `\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u63D0\u793A\u8BCD\u4F18\u5316\u4E13\u5BB6\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u5C06\u7528\u6237\u7684\u539F\u59CB\u63D0\u793A\u8BCD\u5347\u7EA7\u4E3A\u7ED3\u6784\u5316\u3001\u6E05\u6670\u3001\u9AD8\u6548\u7684\u7248\u672C\u3002

\u4F18\u5316\u539F\u5219\uFF1A
1. \u660E\u786E\u4EFB\u52A1\u76EE\u6807\uFF1A\u6E05\u695A\u8BF4\u660E\u8981\u5B8C\u6210\u4EC0\u4E48
2. \u5B9A\u4E49\u8F93\u5165\u8F93\u51FA\uFF1A\u660E\u786E\u8F93\u5165\u683C\u5F0F\u548C\u671F\u671B\u7684\u8F93\u51FA\u683C\u5F0F
3. \u6DFB\u52A0\u7EA6\u675F\u6761\u4EF6\uFF1A\u5FC5\u8981\u7684\u9650\u5236\u3001\u98CE\u683C\u8981\u6C42\u3001\u957F\u5EA6\u9650\u5236\u7B49
4. \u63D0\u4F9B\u4E0A\u4E0B\u6587\uFF1A\u8865\u5145\u6709\u52A9\u4E8E\u7406\u89E3\u4EFB\u52A1\u7684\u80CC\u666F\u4FE1\u606F
5. \u4FDD\u6301\u7B80\u6D01\uFF1A\u53BB\u9664\u5197\u4F59\uFF0C\u4FDD\u7559\u6838\u5FC3\u8981\u7D20

\u8F93\u51FA\u683C\u5F0F\uFF1A
- \u53EA\u8FD4\u56DE\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD
- \u4E0D\u8981\u6DFB\u52A0\u89E3\u91CA\u6216\u8BF4\u660E
- \u4FDD\u6301\u7528\u6237\u539F\u6709\u7684\u8BED\u8A00\uFF08\u4E2D\u6587\u6216\u82F1\u6587\uFF09`
  },
  {
    id: "translate",
    name: "\u7FFB\u8BD1\u52A9\u624B",
    description: "\u4F18\u5316\u7FFB\u8BD1\u8BF7\u6C42\uFF0C\u660E\u786E\u8BED\u8A00\u3001\u8BED\u6C14\u3001\u672F\u8BED\u5904\u7406",
    icon: "\u{1F310}",
    type: "preset",
    systemPrompt: `\u4F60\u662F\u4E00\u4E2A\u7FFB\u8BD1\u63D0\u793A\u8BCD\u4F18\u5316\u4E13\u5BB6\u3002\u5C06\u7528\u6237\u7684\u7FFB\u8BD1\u8BF7\u6C42\u4F18\u5316\u4E3A\u4E13\u4E1A\u3001\u7CBE\u786E\u7684\u7FFB\u8BD1\u6307\u4EE4\u3002

\u4F18\u5316\u8981\u70B9\uFF1A
1. \u660E\u786E\u6E90\u8BED\u8A00\u548C\u76EE\u6807\u8BED\u8A00
2. \u6307\u5B9A\u7FFB\u8BD1\u98CE\u683C\uFF08\u6B63\u5F0F/\u53E3\u8BED/\u6587\u5B66/\u6280\u672F\uFF09
3. \u5904\u7406\u4E13\u4E1A\u672F\u8BED\u7684\u8981\u6C42
4. \u6587\u5316\u9002\u5E94\u6027\u8981\u6C42
5. \u683C\u5F0F\u4FDD\u7559\u8981\u6C42\uFF08\u5982\u4FDD\u7559\u539F\u6709\u6BB5\u843D\u7ED3\u6784\uFF09

\u8F93\u51FA\u683C\u5F0F\u8981\u6C42\uFF1A
- \u660E\u786E\u6307\u51FA"\u5C06[\u6E90\u8BED\u8A00]\u7FFB\u8BD1\u4E3A[\u76EE\u6807\u8BED\u8A00]"
- \u8BF4\u660E\u8BED\u6C14\u548C\u98CE\u683C\u8981\u6C42
- \u5982\u6D89\u53CA\u4E13\u4E1A\u9886\u57DF\uFF0C\u6307\u660E\u9886\u57DF
- \u53EA\u8FD4\u56DE\u4F18\u5316\u540E\u7684\u7FFB\u8BD1\u63D0\u793A\u8BCD`
  },
  {
    id: "company-research",
    name: "\u516C\u53F8\u7814\u7A76",
    description: "\u7ED3\u6784\u5316\u516C\u53F8\u8C03\u7814\uFF0C\u5305\u542B\u5546\u4E1A\u6A21\u5F0F\u3001\u878D\u8D44\u3001\u7ADE\u4E89\u7B49",
    icon: "\u{1F3E2}",
    type: "preset",
    systemPrompt: `\u4F60\u662F\u4E00\u4E2A\u516C\u53F8\u7814\u7A76\u63D0\u793A\u8BCD\u4F18\u5316\u4E13\u5BB6\u3002\u5C06\u7528\u6237\u7684\u516C\u53F8\u8C03\u7814\u8BF7\u6C42\u4F18\u5316\u4E3A\u5168\u9762\u3001\u7ED3\u6784\u5316\u7684\u7814\u7A76\u6307\u4EE4\u3002

\u4F18\u5316\u8981\u70B9\uFF1A
1. \u516C\u53F8\u57FA\u672C\u4FE1\u606F\uFF08\u6210\u7ACB\u65F6\u95F4\u3001\u603B\u90E8\u3001\u521B\u59CB\u4EBA\uFF09
2. \u5546\u4E1A\u6A21\u5F0F\u548C\u4E3B\u8981\u4EA7\u54C1/\u670D\u52A1
3. \u878D\u8D44\u5386\u53F2\u548C\u4F30\u503C\uFF08\u5982\u9002\u7528\uFF09
4. \u5E02\u573A\u5B9A\u4F4D\u548C\u76EE\u6807\u5BA2\u6237
5. \u7ADE\u4E89\u5BF9\u624B\u5206\u6790
6. \u6280\u672F\u6808\u548C\u6838\u5FC3\u4F18\u52BF
7. \u6700\u65B0\u52A8\u6001\u548C\u53D1\u5C55\u8D8B\u52BF

\u8F93\u51FA\u683C\u5F0F\u8981\u6C42\uFF1A
- \u7ED3\u6784\u5316\u5448\u73B0\u5404\u4E2A\u7EF4\u5EA6
- \u8981\u6C42\u63D0\u4F9B\u6570\u636E\u6765\u6E90
- \u533A\u5206\u4E8B\u5B9E\u548C\u63A8\u6D4B
- \u53EA\u8FD4\u56DE\u4F18\u5316\u540E\u7684\u516C\u53F8\u7814\u7A76\u63D0\u793A\u8BCD`
  },
  {
    id: "tech-explainer",
    name: "\u6280\u672F\u6982\u5FF5",
    description: "\u901A\u4FD7\u89E3\u91CA\u6280\u672F\u672F\u8BED\uFF0C\u5305\u542B\u7C7B\u6BD4\u3001\u7528\u4F8B\u3001\u5BF9\u6BD4",
    icon: "\u{1F4A1}",
    type: "preset",
    systemPrompt: `\u4F60\u662F\u4E00\u4E2A\u6280\u672F\u6982\u5FF5\u89E3\u91CA\u63D0\u793A\u8BCD\u4F18\u5316\u4E13\u5BB6\u3002\u5C06\u7528\u6237\u7684\u6280\u672F\u5B66\u4E60\u8BF7\u6C42\u4F18\u5316\u4E3A\u6613\u4E8E\u7406\u89E3\u7684\u89E3\u91CA\u6307\u4EE4\u3002

\u4F18\u5316\u8981\u70B9\uFF1A
1. \u7528\u901A\u4FD7\u8BED\u8A00\u89E3\u91CA\u6838\u5FC3\u6982\u5FF5
2. \u63D0\u4F9B\u751F\u6D3B\u5316\u7684\u7C7B\u6BD4
3. \u7ED9\u51FA\u5B9E\u9645\u5E94\u7528\u573A\u666F
4. \u4E0E\u76F8\u5173\u6280\u672F\u7684\u5BF9\u6BD4
5. \u5B66\u4E60\u8DEF\u5F84\u5EFA\u8BAE
6. \u5E38\u89C1\u8BEF\u533A\u63D0\u9192

\u8F93\u51FA\u683C\u5F0F\u8981\u6C42\uFF1A
- \u8981\u6C42\u5206\u5C42\u6B21\u89E3\u91CA\uFF08\u5165\u95E8/\u8FDB\u9636\uFF09
- \u5305\u542B\u5177\u4F53\u793A\u4F8B
- \u907F\u514D\u8FC7\u591A\u4E13\u4E1A\u672F\u8BED
- \u53EA\u8FD4\u56DE\u4F18\u5316\u540E\u7684\u6280\u672F\u5B66\u4E60\u63D0\u793A\u8BCD`
  },
  {
    id: "code-gen",
    name: "\u4EE3\u7801\u751F\u6210",
    description: "\u660E\u786E\u7F16\u7A0B\u9700\u6C42\uFF0C\u5305\u542B\u8BED\u8A00\u3001\u7C7B\u578B\u3001\u9519\u8BEF\u5904\u7406",
    icon: "\u{1F4BB}",
    type: "preset",
    systemPrompt: `\u4F60\u662F\u4E00\u4E2A\u4EE3\u7801\u751F\u6210\u63D0\u793A\u8BCD\u4F18\u5316\u4E13\u5BB6\u3002\u5C06\u7528\u6237\u7684\u7F16\u7A0B\u9700\u6C42\u4F18\u5316\u4E3A\u7CBE\u786E\u3001\u5B8C\u6574\u7684\u4EE3\u7801\u751F\u6210\u6307\u4EE4\u3002

\u4F18\u5316\u8981\u70B9\uFF1A
1. \u660E\u786E\u7F16\u7A0B\u8BED\u8A00\u548C\u7248\u672C
2. \u6307\u5B9A\u4EE3\u7801\u529F\u80FD\u548C\u8F93\u5165\u8F93\u51FA
3. \u7C7B\u578B\u5B9A\u4E49\u8981\u6C42\uFF08TypeScript/\u7C7B\u578B\u6CE8\u89E3\uFF09
4. \u9519\u8BEF\u5904\u7406\u8981\u6C42
5. \u4EE3\u7801\u98CE\u683C\u548C\u547D\u540D\u89C4\u8303
6. \u6027\u80FD\u548C\u5B89\u5168\u8003\u8651
7. \u6D4B\u8BD5\u7528\u4F8B\u8981\u6C42\uFF08\u5982\u9700\u8981\uFF09

\u8F93\u51FA\u683C\u5F0F\u8981\u6C42\uFF1A
- \u660E\u786E\u6307\u5B9A\u7F16\u7A0B\u8BED\u8A00
- \u8BF4\u660E\u51FD\u6570\u7B7E\u540D/\u63A5\u53E3
- \u8981\u6C42\u6DFB\u52A0\u5FC5\u8981\u6CE8\u91CA
- \u53EA\u8FD4\u56DE\u4F18\u5316\u540E\u7684\u4EE3\u7801\u751F\u6210\u63D0\u793A\u8BCD`
  },
  {
    id: "writing",
    name: "\u5199\u4F5C\u6DA6\u8272",
    description: "\u6539\u5584\u6587\u7AE0\u6D41\u7545\u5EA6\uFF0C\u4FDD\u6301\u539F\u6709\u98CE\u683C",
    icon: "\u270D\uFE0F",
    type: "preset",
    systemPrompt: `\u4F60\u662F\u4E00\u4E2A\u5199\u4F5C\u6DA6\u8272\u63D0\u793A\u8BCD\u4F18\u5316\u4E13\u5BB6\u3002\u5C06\u7528\u6237\u7684\u5199\u4F5C\u6DA6\u8272\u8BF7\u6C42\u4F18\u5316\u4E3A\u4E13\u4E1A\u7684\u7F16\u8F91\u6307\u4EE4\u3002

\u4F18\u5316\u8981\u70B9\uFF1A
1. \u4FDD\u6301\u539F\u6587\u98CE\u683C\u548C\u8BED\u6C14
2. \u6539\u5584\u8BED\u53E5\u6D41\u7545\u5EA6
3. \u4FEE\u6B63\u8BED\u6CD5\u548C\u7528\u8BCD\u9519\u8BEF
4. \u589E\u5F3A\u6587\u7AE0\u903B\u8F91\u6027
5. \u9002\u5F53\u8C03\u6574\u6BB5\u843D\u7ED3\u6784
6. \u4FDD\u7559\u4F5C\u8005\u7684\u4E2A\u4EBA\u7279\u8272

\u8F93\u51FA\u683C\u5F0F\u8981\u6C42\uFF1A
- \u660E\u786E\u6DA6\u8272\u76EE\u6807\uFF08\u6D41\u7545\u5EA6/\u4E13\u4E1A\u5EA6/\u53EF\u8BFB\u6027\uFF09
- \u6307\u5B9A\u4FDD\u7559\u7684\u98CE\u683C\u5143\u7D20
- \u8BF4\u660E\u4FEE\u6539\u7A0B\u5EA6\uFF08\u8F7B\u5FAE/\u9002\u5EA6/\u5927\u5E45\uFF09
- \u53EA\u8FD4\u56DE\u4F18\u5316\u540E\u7684\u5199\u4F5C\u6DA6\u8272\u63D0\u793A\u8BCD`
  },
  {
    id: "summarize",
    name: "\u5185\u5BB9\u603B\u7ED3",
    description: "\u63D0\u53D6\u8981\u70B9\uFF0C\u4FDD\u7559\u5173\u952E\u6570\u636E\uFF0C\u63A7\u5236\u957F\u5EA6",
    icon: "\u{1F4DD}",
    type: "preset",
    systemPrompt: `\u4F60\u662F\u4E00\u4E2A\u5185\u5BB9\u603B\u7ED3\u63D0\u793A\u8BCD\u4F18\u5316\u4E13\u5BB6\u3002\u5C06\u7528\u6237\u7684\u603B\u7ED3\u8BF7\u6C42\u4F18\u5316\u4E3A\u7CBE\u51C6\u7684\u5185\u5BB9\u63D0\u70BC\u6307\u4EE4\u3002

\u4F18\u5316\u8981\u70B9\uFF1A
1. \u660E\u786E\u603B\u7ED3\u7684\u957F\u5EA6\u8981\u6C42
2. \u63D0\u53D6\u6838\u5FC3\u89C2\u70B9\u548C\u5173\u952E\u6570\u636E
3. \u4FDD\u7559\u91CD\u8981\u7684\u6570\u5B57\u548C\u4E8B\u5B9E
4. \u6309\u903B\u8F91\u7ED3\u6784\u7EC4\u7EC7
5. \u533A\u5206\u4E3B\u8981\u548C\u6B21\u8981\u4FE1\u606F
6. \u9002\u5F53\u4FDD\u7559\u539F\u6587\u8868\u8FF0

\u8F93\u51FA\u683C\u5F0F\u8981\u6C42\uFF1A
- \u6307\u5B9A\u8F93\u51FA\u957F\u5EA6\uFF08\u5B57\u6570/\u6BB5\u843D\u6570/\u8981\u70B9\u6570\uFF09
- \u8981\u6C42\u4FDD\u7559\u5173\u952E\u6570\u636E
- \u8BF4\u660E\u603B\u7ED3\u98CE\u683C\uFF08\u6982\u8FF0/\u8981\u70B9/\u6458\u8981\uFF09
- \u53EA\u8FD4\u56DE\u4F18\u5316\u540E\u7684\u5185\u5BB9\u603B\u7ED3\u63D0\u793A\u8BCD`
  }
];
function validateTemplate(template) {
  const errors = [];
  if (!template.id || typeof template.id !== "string") {
    errors.push("ID is required and must be a string");
  }
  if (!template.name || typeof template.name !== "string") {
    errors.push("Name is required and must be a string");
  } else if (template.name.length > 50) {
    errors.push("Name must be 50 characters or less");
  }
  if (!template.systemPrompt || typeof template.systemPrompt !== "string") {
    errors.push("System prompt is required and must be a string");
  } else if (template.systemPrompt.length > 4e3) {
    errors.push("System prompt must be 4000 characters or less");
  }
  if (template.description && template.description.length > 200) {
    errors.push("Description must be 200 characters or less");
  }
  return {
    valid: errors.length === 0,
    errors
  };
}
function mergeTemplates(presets, custom) {
  const sortedCustom = [...custom].sort((a, b) => {
    const aTime = a.createdAt ?? 0;
    const bTime = b.createdAt ?? 0;
    return bTime - aTime;
  });
  return [...presets, ...sortedCustom];
}
function findTemplateById(templates, id) {
  const found = templates.find((t) => t.id === id);
  if (found) return found;
  const general = PRESET_TEMPLATES.find((t) => t.id === "general");
  if (general) return general;
  return PRESET_TEMPLATES[0];
}
function isPresetTemplate(id) {
  return PRESET_TEMPLATES.some((t) => t.id === id);
}

// src/shared/config.ts
var SYNC_KEY = "promptEnhancerConfig";
var LOCAL_KEY = "promptEnhancerSecrets";
var SYNC_TEMPLATES_KEY = "promptEnhancerTemplates";
var DEFAULT_SELECTED_TEMPLATE_ID = "general";
var MAX_RECENT_TEMPLATES = 10;
var DEFAULT_CONFIG = {
  apiBaseUrl: "https://api.openai.com/v1",
  apiKey: "",
  model: "gpt-4.1-mini",
  systemPrompt: "You upgrade user prompts into concise, structured prompts with clear inputs, outputs, and constraints. Return only the improved prompt."
};
function readFromStorage(area, key) {
  return new Promise((resolve) => {
    const storageArea = chrome?.storage?.[area];
    if (!storageArea) {
      resolve(void 0);
      return;
    }
    storageArea.get(key, (result) => resolve(result?.[key]));
  });
}
function writeToStorage(area, key, value) {
  return new Promise((resolve, reject) => {
    const storageArea = chrome?.storage?.[area];
    if (!storageArea) {
      resolve();
      return;
    }
    storageArea.set({ [key]: value }, () => {
      const lastError = chrome.runtime?.lastError;
      if (lastError) {
        reject(lastError);
      } else {
        resolve();
      }
    });
  });
}
async function loadConfig() {
  const [syncConfig, localSecrets] = await Promise.all([
    readFromStorage("sync", SYNC_KEY),
    readFromStorage("local", LOCAL_KEY)
  ]);
  return {
    ...DEFAULT_CONFIG,
    ...syncConfig,
    apiKey: localSecrets?.apiKey ?? syncConfig?.apiKey ?? ""
  };
}
function normalizeApiBase(url) {
  const trimmed = url.trim();
  if (!trimmed) return DEFAULT_CONFIG.apiBaseUrl;
  return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}
async function loadAllTemplates() {
  const custom = await loadCustomTemplates();
  return mergeTemplates(PRESET_TEMPLATES, custom);
}
async function loadCustomTemplates() {
  const data = await readFromStorage("sync", SYNC_TEMPLATES_KEY);
  return data?.customTemplates ?? [];
}
async function saveCustomTemplates(templates) {
  await writeToStorage("sync", SYNC_TEMPLATES_KEY, {
    customTemplates: templates
  });
}
async function getSelectedTemplateId() {
  const data = await readFromStorage("local", LOCAL_KEY);
  return data?.selectedTemplateId ?? DEFAULT_SELECTED_TEMPLATE_ID;
}
async function setSelectedTemplateId(templateId) {
  const data = await readFromStorage("local", LOCAL_KEY) ?? {};
  await writeToStorage("local", LOCAL_KEY, {
    ...data,
    selectedTemplateId: templateId
  });
}
async function addToRecentTemplates(templateId) {
  const data = await readFromStorage("local", LOCAL_KEY) ?? {};
  const recent = data.recentTemplates ?? [];
  const filtered = recent.filter((id) => id !== templateId);
  const updated = [templateId, ...filtered].slice(0, MAX_RECENT_TEMPLATES);
  await writeToStorage("local", LOCAL_KEY, {
    ...data,
    recentTemplates: updated
  });
}

// src/shared/llm.ts
async function requestOptimizedPrompt(config, originalPrompt, pageHost) {
  if (!originalPrompt.trim()) {
    throw new Error("Prompt is empty");
  }
  if (!config.apiKey) {
    throw new Error("API key is missing");
  }
  const endpoint = `${normalizeApiBase(config.apiBaseUrl)}/chat/completions`;
  const systemPrompt = config.systemPrompt || "";
  const userContent = buildUserContent(originalPrompt, pageHost);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userContent }
      ]
    })
  });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Model request failed (${response.status}): ${text || "unknown error"}`);
  }
  const data = await response.json();
  const optimized = data?.choices?.[0]?.message?.content?.trim();
  if (!optimized) {
    throw new Error("Model returned no content");
  }
  return optimized;
}
function buildUserContent(originalPrompt, pageHost) {
  const hostLine = pageHost ? `Target host: ${pageHost}
` : "";
  return `${hostLine}Optimize the following prompt. Return only the improved prompt:

${originalPrompt}`;
}

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
function isOptimizePromptRequest(message) {
  if (!message || typeof message !== "object") return false;
  const typed = message;
  return typed.type === MessageType.OptimizePrompt && Boolean(typed.payload?.originalPrompt);
}
function isGetTemplatesRequest(message) {
  if (!message || typeof message !== "object") return false;
  return message.type === MessageType.GetTemplates;
}
function isSetSelectedTemplateRequest(message) {
  if (!message || typeof message !== "object") return false;
  const typed = message;
  return typed.type === MessageType.SetSelectedTemplate && typeof typed.payload?.templateId === "string";
}
function isSaveCustomTemplateRequest(message) {
  if (!message || typeof message !== "object") return false;
  const typed = message;
  return typed.type === MessageType.SaveCustomTemplate && typeof typed.payload?.template === "object";
}
function isDeleteCustomTemplateRequest(message) {
  if (!message || typeof message !== "object") return false;
  const typed = message;
  return typed.type === MessageType.DeleteCustomTemplate && typeof typed.payload?.templateId === "string";
}
function isImportTemplatesRequest(message) {
  if (!message || typeof message !== "object") return false;
  const typed = message;
  return typed.type === MessageType.ImportTemplates && typeof typed.payload?.exportedData === "object";
}
function isExportTemplatesRequest(message) {
  if (!message || typeof message !== "object") return false;
  return message.type === MessageType.ExportTemplates;
}

// src/background/index.ts
chrome.commands.onCommand.addListener((command) => {
  if (command === "optimize-prompt") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        const message = { type: MessageType.TriggerOptimize };
        chrome.tabs.sendMessage(tabs[0].id, message);
      }
    });
  }
});
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (isOptimizePromptRequest(message)) {
    handleOptimize(message.payload).then(sendResponse).catch(
      (error) => sendResponse({
        success: false,
        error: error?.message || "Unknown error"
      })
    );
    return true;
  }
  if (isGetTemplatesRequest(message)) {
    handleGetTemplates().then(sendResponse).catch(
      (error) => sendResponse({
        success: false,
        templates: [],
        selectedTemplateId: "general",
        error: error?.message || "Unknown error"
      })
    );
    return true;
  }
  if (isSetSelectedTemplateRequest(message)) {
    handleSetSelectedTemplate(message.payload.templateId).then(sendResponse).catch(
      (error) => sendResponse({
        success: false,
        error: error?.message || "Unknown error"
      })
    );
    return true;
  }
  if (isSaveCustomTemplateRequest(message)) {
    handleSaveCustomTemplate(message.payload.template, message.payload.isNew).then(sendResponse).catch(
      (error) => sendResponse({
        success: false,
        error: error?.message || "Unknown error"
      })
    );
    return true;
  }
  if (isDeleteCustomTemplateRequest(message)) {
    handleDeleteCustomTemplate(message.payload.templateId).then(sendResponse).catch(
      (error) => sendResponse({
        success: false,
        error: error?.message || "Unknown error"
      })
    );
    return true;
  }
  if (isImportTemplatesRequest(message)) {
    handleImportTemplates(message.payload.exportedData, message.payload.conflictResolution).then(sendResponse).catch(
      (error) => sendResponse({
        success: false,
        importedCount: 0,
        skippedCount: 0,
        errors: [error?.message || "Unknown error"]
      })
    );
    return true;
  }
  if (isExportTemplatesRequest(message)) {
    handleExportTemplates().then(sendResponse).catch(
      (error) => sendResponse({
        success: false,
        error: error?.message || "Unknown error"
      })
    );
    return true;
  }
});
async function handleOptimize(payload) {
  const config = await loadConfig();
  if (!config.apiKey) {
    return { success: false, error: "\u8BF7\u5148\u5728 Options \u9875\u9762\u914D\u7F6E API Key" };
  }
  const templates = await loadAllTemplates();
  const template = findTemplateById(templates, payload.templateId);
  const configWithTemplate = {
    ...config,
    systemPrompt: template.systemPrompt
  };
  await addToRecentTemplates(payload.templateId);
  const optimizedPrompt = await requestOptimizedPrompt(
    configWithTemplate,
    payload.originalPrompt,
    payload.pageHost
  );
  return { success: true, optimizedPrompt };
}
async function handleGetTemplates() {
  const [templates, selectedTemplateId] = await Promise.all([
    loadAllTemplates(),
    getSelectedTemplateId()
  ]);
  return {
    success: true,
    templates,
    selectedTemplateId
  };
}
async function handleSetSelectedTemplate(templateId) {
  await setSelectedTemplateId(templateId);
  return { success: true };
}
async function handleSaveCustomTemplate(templateData, isNew) {
  const validation = validateTemplate(templateData);
  if (!validation.valid) {
    return { success: false, error: validation.errors.join("; ") };
  }
  if (isPresetTemplate(templateData.id)) {
    return { success: false, error: "\u4E0D\u80FD\u4F7F\u7528\u9884\u8BBE\u6A21\u677F\u7684 ID" };
  }
  const customTemplates = await loadCustomTemplates();
  const existingIndex = customTemplates.findIndex((t) => t.id === templateData.id);
  const template = {
    ...templateData,
    type: "custom",
    createdAt: templateData.createdAt ?? Date.now()
  };
  if (isNew) {
    if (existingIndex !== -1) {
      return { success: false, error: "\u6A21\u677F ID \u5DF2\u5B58\u5728" };
    }
    customTemplates.push(template);
  } else {
    if (existingIndex === -1) {
      return { success: false, error: "\u6A21\u677F\u4E0D\u5B58\u5728" };
    }
    customTemplates[existingIndex] = template;
  }
  await saveCustomTemplates(customTemplates);
  return { success: true, template };
}
async function handleDeleteCustomTemplate(templateId) {
  if (isPresetTemplate(templateId)) {
    return { success: false, error: "\u65E0\u6CD5\u5220\u9664\u9884\u8BBE\u6A21\u677F" };
  }
  const customTemplates = await loadCustomTemplates();
  const filteredTemplates = customTemplates.filter((t) => t.id !== templateId);
  if (filteredTemplates.length === customTemplates.length) {
    return { success: false, error: "\u6A21\u677F\u4E0D\u5B58\u5728" };
  }
  await saveCustomTemplates(filteredTemplates);
  const selectedId = await getSelectedTemplateId();
  if (selectedId === templateId) {
    await setSelectedTemplateId("general");
  }
  return { success: true };
}
async function handleImportTemplates(exportedData, conflictResolution) {
  if (exportedData.version !== "1.0") {
    return {
      success: false,
      importedCount: 0,
      skippedCount: 0,
      errors: ["\u4E0D\u652F\u6301\u7684\u5BFC\u51FA\u6587\u4EF6\u7248\u672C"]
    };
  }
  if (!Array.isArray(exportedData.templates)) {
    return {
      success: false,
      importedCount: 0,
      skippedCount: 0,
      errors: ["\u65E0\u6548\u7684\u6A21\u677F\u6570\u636E\u683C\u5F0F"]
    };
  }
  const customTemplates = await loadCustomTemplates();
  const existingIds = /* @__PURE__ */ new Set([
    ...customTemplates.map((t) => t.id),
    ...PRESET_TEMPLATES.map((t) => t.id)
  ]);
  let importedCount = 0;
  let skippedCount = 0;
  const errors = [];
  for (const template of exportedData.templates) {
    const validation = validateTemplate(template);
    if (!validation.valid) {
      errors.push(`\u6A21\u677F "${template.name}": ${validation.errors.join("; ")}`);
      skippedCount++;
      continue;
    }
    if (existingIds.has(template.id)) {
      if (conflictResolution === "skip") {
        skippedCount++;
        continue;
      } else if (conflictResolution === "rename") {
        template.id = crypto.randomUUID();
      } else if (conflictResolution === "replace") {
        const existingIndex = customTemplates.findIndex((t) => t.id === template.id);
        if (existingIndex !== -1) {
          customTemplates.splice(existingIndex, 1);
        }
      }
    }
    customTemplates.push({
      ...template,
      type: "custom",
      createdAt: template.createdAt ?? Date.now()
    });
    existingIds.add(template.id);
    importedCount++;
  }
  await saveCustomTemplates(customTemplates);
  return {
    success: true,
    importedCount,
    skippedCount,
    errors: errors.length > 0 ? errors : void 0
  };
}
async function handleExportTemplates() {
  const customTemplates = await loadCustomTemplates();
  const exportedData = {
    version: "1.0",
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    templates: customTemplates
  };
  return {
    success: true,
    exportedData
  };
}
//# sourceMappingURL=background.js.map
