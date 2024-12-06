import { LangKey, TranslationResult, Translations, TranslationsResponse } from "@/type";



  
export function getTranslations(data:string): Translations[] {
   const response = JSON.parse(data) as TranslationsResponse;
   return response.hits.hits;
 }
  
export  function getTranslationsFromHits(translations: Translations[],langs: LangKey[]) {
    const newTranslations:TranslationResult[]=[];
    for (const translation of translations) {
        for (const item of translation._source.translations) {
            if(langs.includes(item.lang)){
                newTranslations.push(<TranslationResult>{
                    lang: item.lang,
                    text: item[item.lang][0],
                    confidence: translation._source.confidence,
                    source: translation._source.name,
                    domain: translation._source.domain
                })
            }

        }
    }
    // 过滤重复的 text
    const unique:string[]=[];
    return newTranslations.sort((a,b)=>b.confidence-a.confidence).sort((a,b)=>a.lang.localeCompare(b.lang)).filter(item=>{
        if(unique.includes(item.text)){
            return false;
        }else{
            unique.push(item.text);
            return true;
        }
    });
}
