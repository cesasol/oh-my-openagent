import type { ModelRequirement } from "../shared/model-requirements";

// NOTE: These requirements are used by the CLI config generator (`generateModelConfig`).
// They intentionally use "install-time" provider IDs (anthropic/openai/google/opencode/etc),
// not runtime-only providers like `nvidia`.

export const CLI_AGENT_MODEL_REQUIREMENTS: Record<string, ModelRequirement> = {
  sisyphus: {
    fallbackChain: [
      {
        providers: ["anthropic", "github-copilot", "opencode"],
        model: "claude-opus-4-6",
        variant: "max",
      },
      { providers: ["kimi-for-coding"], model: "k2p5" },
      { providers: ["openai", "github-copilot", "opencode"], model: "gpt-5.4", variant: "medium" },
      { providers: ["zai-coding-plan", "opencode"], model: "glm-5" },
      { providers: ["ollama"], model: "llama3.1:70b" },
    ],
    requiresAnyModel: true,
  },
  hephaestus: {
    fallbackChain: [
      {
        providers: ["openai", "opencode"],
        model: "gpt-5.3-codex",
        variant: "medium",
      },
      { providers: ["ollama"], model: "qwen2.5-coder:32b" },
    ],
    requiresProvider: ["openai", "opencode"],
  },
  oracle: {
    fallbackChain: [
      {
        providers: ["openai", "github-copilot", "opencode"],
        model: "gpt-5.4",
        variant: "high",
      },
      {
        providers: ["google", "github-copilot", "opencode"],
        model: "gemini-3.1-pro",
        variant: "high",
      },
      {
        providers: ["anthropic", "github-copilot", "opencode"],
        model: "claude-opus-4-6",
        variant: "max",
      },
      { providers: ["ollama"], model: "llama3.1:70b" },
    ],
  },
  librarian: {
    fallbackChain: [
      { providers: ["zai-coding-plan"], model: "glm-4.7" },
      { providers: ["opencode"], model: "glm-4.7-free" },
      {
        providers: ["anthropic", "github-copilot", "opencode"],
        model: "claude-sonnet-4-5",
      },
      { providers: ["ollama"], model: "qwen2.5-coder:32b" },
    ],
  },
  explore: {
    fallbackChain: [
      { providers: ["github-copilot"], model: "grok-code-fast-1" },
      { providers: ["anthropic", "opencode"], model: "claude-haiku-4-5" },
      { providers: ["opencode"], model: "gpt-5-nano" },
      { providers: ["ollama"], model: "llama3.2:8b" },
    ],
  },
  "multimodal-looker": {
    fallbackChain: [
      {
        providers: ["openai", "opencode"],
        model: "gpt-5.4",
        variant: "medium",
      },
      { providers: ["kimi-for-coding"], model: "k2p5" },
      {
        providers: ["google", "github-copilot", "opencode"],
        model: "gemini-3-flash",
      },
      { providers: ["zai-coding-plan"], model: "glm-4.6v" },
      { providers: ["opencode"], model: "gpt-5-nano" },
      { providers: ["ollama"], model: "llama3.2-vision:11b" },
    ],
  },
  prometheus: {
    fallbackChain: [
      {
        providers: ["anthropic", "github-copilot", "opencode"],
        model: "claude-opus-4-6",
        variant: "max",
      },
      { providers: ["kimi-for-coding"], model: "k2p5" },
      {
        providers: ["openai", "github-copilot", "opencode"],
        model: "gpt-5.4",
        variant: "high",
      },
      {
        providers: ["google", "github-copilot", "opencode"],
        model: "gemini-3.1-pro",
      },
      { providers: ["ollama"], model: "llama3.1:70b" },
    ],
  },
  metis: {
    fallbackChain: [
      {
        providers: ["anthropic", "github-copilot", "opencode"],
        model: "claude-opus-4-6",
        variant: "max",
      },
      { providers: ["kimi-for-coding"], model: "k2p5" },
      {
        providers: ["openai", "github-copilot", "opencode"],
        model: "gpt-5.4",
        variant: "high",
      },
      {
        providers: ["google", "github-copilot", "opencode"],
        model: "gemini-3.1-pro",
        variant: "high",
      },
      { providers: ["ollama"], model: "llama3.1:70b" },
    ],
  },
  momus: {
    fallbackChain: [
      {
        providers: ["openai", "github-copilot", "opencode"],
        model: "gpt-5.4",
        variant: "xhigh",
      },
      {
        providers: ["anthropic", "github-copilot", "opencode"],
        model: "claude-opus-4-6",
        variant: "max",
      },
      {
        providers: ["google", "github-copilot", "opencode"],
        model: "gemini-3.1-pro",
        variant: "high",
      },
      { providers: ["ollama"], model: "llama3.1:70b" },
    ],
  },
  atlas: {
    fallbackChain: [
      { providers: ["kimi-for-coding"], model: "k2p5" },
      {
        providers: ["anthropic", "github-copilot", "opencode"],
        model: "claude-sonnet-4-5",
      },
      { providers: ["openai", "github-copilot", "opencode"], model: "gpt-5.4", variant: "medium" },
      {
        providers: ["google", "github-copilot", "opencode"],
        model: "gemini-3.1-pro",
      },
      { providers: ["ollama"], model: "llama3.1:70b" },
    ],
  },
};

export const CLI_CATEGORY_MODEL_REQUIREMENTS: Record<string, ModelRequirement> =
  {
    "visual-engineering": {
      fallbackChain: [
        {
          providers: ["google", "github-copilot", "opencode"],
          model: "gemini-3.1-pro",
          variant: "high",
        },
        { providers: ["zai-coding-plan", "opencode"], model: "glm-5" },
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-opus-4-6",
          variant: "max",
        },
        { providers: ["kimi-for-coding"], model: "k2p5" },
        { providers: ["ollama"], model: "llama3.1:70b" },
      ],
    },
    ultrabrain: {
      fallbackChain: [
        {
          providers: ["openai", "opencode"],
          model: "gpt-5.3-codex",
          variant: "xhigh",
        },
        {
          providers: ["google", "github-copilot", "opencode"],
          model: "gemini-3.1-pro",
          variant: "high",
        },
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-opus-4-6",
          variant: "max",
        },
        { providers: ["ollama"], model: "llama3.1:70b" },
      ],
    },
    deep: {
      fallbackChain: [
        {
          providers: ["openai", "opencode"],
          model: "gpt-5.3-codex",
          variant: "medium",
        },
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-opus-4-6",
          variant: "max",
        },
        {
          providers: ["google", "github-copilot", "opencode"],
          model: "gemini-3.1-pro",
          variant: "high",
        },
        { providers: ["ollama"], model: "llama3.1:70b" },
      ],
      requiresModel: "gpt-5.3-codex",
    },
    artistry: {
      fallbackChain: [
        {
          providers: ["google", "github-copilot", "opencode"],
          model: "gemini-3.1-pro",
          variant: "high",
        },
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-opus-4-6",
          variant: "max",
        },
        {
          providers: ["openai", "github-copilot", "opencode"],
          model: "gpt-5.4",
        },
        { providers: ["ollama"], model: "llama3.1:70b" },
      ],
      requiresModel: "gemini-3.1-pro",
    },
    quick: {
      fallbackChain: [
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-haiku-4-5",
        },
        {
          providers: ["google", "github-copilot", "opencode"],
          model: "gemini-3-flash",
        },
        { providers: ["opencode"], model: "gpt-5-nano" },
        { providers: ["ollama"], model: "llama3.2:8b" },
      ],
    },
    "unspecified-low": {
      fallbackChain: [
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-sonnet-4-5",
        },
        {
          providers: ["openai", "opencode"],
          model: "gpt-5.3-codex",
          variant: "medium",
        },
        {
          providers: ["google", "github-copilot", "opencode"],
          model: "gemini-3-flash",
        },
        { providers: ["ollama"], model: "qwen2.5-coder:32b" },
      ],
    },
    "unspecified-high": {
      fallbackChain: [
        {
          providers: ["openai", "github-copilot", "opencode"],
          model: "gpt-5.4",
          variant: "high",
        },
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-opus-4-6",
          variant: "max",
        },
        { providers: ["zai-coding-plan", "opencode"], model: "glm-5" },
        { providers: ["kimi-for-coding"], model: "k2p5" },
        { providers: ["opencode"], model: "kimi-k2.5" },
        { providers: ["ollama"], model: "llama3.1:70b" },
      ],
    },
    writing: {
      fallbackChain: [
        { providers: ["kimi-for-coding"], model: "k2p5" },
        {
          providers: ["google", "github-copilot", "opencode"],
          model: "gemini-3-flash",
        },
        {
          providers: ["anthropic", "github-copilot", "opencode"],
          model: "claude-sonnet-4-5",
        },
        { providers: ["ollama"], model: "qwen2.5-coder:32b" },
      ],
    },
  };
