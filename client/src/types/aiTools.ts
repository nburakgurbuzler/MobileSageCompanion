export interface AITool {
  id: string;
  name: string;
  description: {
    tr: string;
    en: string;
  };
  link: string;
  icon: string;
  gradient: string;
}

export interface Category {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  tools: AITool[];
}

export type LanguageType = 'tr' | 'en';
