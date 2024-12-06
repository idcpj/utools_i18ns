export type LangKey = 'en' | 'ja' | 'de' | 'th' | 'hi' |
 'vi' | 'uk' | 'el' | 'pl' | 'in' | 'ko' | 'ro' | 'ar' |
 'fr' | 'tr' | 'cs' | 'es' | 'it' | 'pt' | 'hu' | 'ru' |
  'nl_NL' | 'zh' | 'zh_TW';

export type Translation<T extends LangKey> = {
  [P in T]: string[];
} & {
  lang: T;
}

export type Translations = {
  _id: string;
  _index: string;
  _score: number;
  _source: {
    confidence: number;
    counts: number;
    domain: string;
    format: number;
    name: string;
    platform: number;
    translations: Translation<LangKey>[];
  };
  highlight: {
    [key: string]: string[];
  };
  max_score: number;
  total: number;
};

export type TranslationsResponse = {
  hits: {
    hits: Translations[];
  },
  took: number;
  total: number;
};


export type TranslationResult = {
  lang: LangKey;
  text: string;
  confidence: number; // 置信度
  source: string; // 翻译来源
  domain: string; // 翻译来源域名
}