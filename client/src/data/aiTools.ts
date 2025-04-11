import { AITool, Category } from "@/types/aiTools";

const aiTools: Record<string, AITool> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    description: {
      tr: "Herkesin bildiği ve genel kullanım için uygun olan yapay zeka modeli!",
      en: "The AI model everyone knows, suitable for general use!",
    },
    link: "https://chatgpt.com/",
    icon: "comment-alt",
    gradient: "gradient-chatgpt",
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    description: {
      tr: "Google'ın en gelişmiş yapay zeka modelleri!",
      en: "Google's most advanced AI models!",
    },
    link: "https://gemini.google.com/app",
    icon: "gem",
    gradient: "gradient-gemini",
  },
  grok: {
    id: "grok",
    name: "Grok",
    description: {
      tr: "Elon Musk'ın yapay zeka abidesi!",
      en: "Elon Musk's AI monument!",
    },
    link: "https://grok.com/",
    icon: "bolt",
    gradient: "gradient-grok",
  },
  claude: {
    id: "claude",
    name: "Claude",
    description: {
      tr: "Yazılım ve genel kullanım için ideal!",
      en: "Ideal for software and general use!",
    },
    link: "https://claude.ai/new",
    icon: "robot",
    gradient: "gradient-claude",
  },
  deepseek: {
    id: "deepseek",
    name: "DeepSeek",
    description: {
      tr: "Çin'in ChatGPT yok edicisi!",
      en: "China's ChatGPT killer!",
    },
    link: "https://chat.deepseek.com/",
    icon: "search-plus",
    gradient: "gradient-deepseek",
  },
  perplexity: {
    id: "perplexity",
    name: "Perplexity",
    description: {
      tr: "Sörf ve araştırmak için çok uygun yapay zeka modeli!",
      en: "An AI model very suitable for surfing and research!",
    },
    link: "https://www.perplexity.ai/",
    icon: "search",
    gradient: "gradient-perplexity",
  },
  googleai: {
    id: "googleai",
    name: "Google AI Studio",
    description: {
      tr: "Google'ın her modelini barındıran deneysel yapay zeka stüdyosu!",
      en: "Google's experimental AI studio hosting all their models!",
    },
    link: "https://aistudio.google.com/prompts/new_chat",
    icon: "fab fa-google",
    gradient: "gradient-googleai",
  },
  lmarena: {
    id: "lmarena",
    name: "LMArena",
    description: {
      tr: "Tüm modelleri kısıtlı olarak ücretsiz kullanabileceğiniz yapay zeka sitesi!",
      en: "An AI site where you can use all models with limitations for free!",
    },
    link: "https://lmarena.ai/",
    icon: "brain",
    gradient: "gradient-lmarena",
  },
  drhoot: {
    id: "drhoot",
    name: "Dr. Hoot",
    description: {
      tr: "En sevdiğim tıbbi GPT!",
      en: "My favorite medical GPT!",
    },
    link: "https://chatgpt.com/g/g-L5NVzgenb-dr-hoot-medical-study-buddy",
    icon: "user-md",
    gradient: "gradient-drhoot",
  },
  doctorx: {
    id: "doctorx",
    name: "DoctorX",
    description: {
      tr: "Diğer iyi tıbbi GPT!",
      en: "Another good medical GPT!",
    },
    link: "https://chatgpt.com/g/g-K9cvBzhba-doctorx-medical-updated",
    icon: "stethoscope",
    gradient: "gradient-doctorx",
  },
};

const categories: Category[] = [
  {
    id: "daily-use",
    title: {
      tr: "Günlük Kullanım",
      en: "Daily Use",
    },
    tools: [
      aiTools.chatgpt,
      aiTools.gemini,
      aiTools.claude,
      aiTools.grok,
      aiTools.deepseek,
    ],
  },
  {
    id: "software-coding",
    title: {
      tr: "Yazılım/Kodlama",
      en: "Software/Coding",
    },
    tools: [
      aiTools.gemini,
      aiTools.googleai,
      aiTools.grok,
      aiTools.claude,
      aiTools.chatgpt,
    ],
  },
  {
    id: "image-generation",
    title: {
      tr: "Görsel Oluşturma",
      en: "Image Generation",
    },
    tools: [aiTools.chatgpt, aiTools.grok],
  },
  {
    id: "medical",
    title: {
      tr: "Medikal",
      en: "Medical",
    },
    tools: [aiTools.drhoot, aiTools.doctorx, aiTools.chatgpt],
  },
  {
    id: "deep-research",
    title: {
      tr: "Derin Araştırma",
      en: "Deep Research",
    },
    tools: [aiTools.gemini, aiTools.grok, aiTools.perplexity],
  },
  {
    id: "experimental",
    title: {
      tr: "Deneysel",
      en: "Experimental",
    },
    tools: [aiTools.googleai, aiTools.lmarena],
  },
];

export { aiTools, categories };
