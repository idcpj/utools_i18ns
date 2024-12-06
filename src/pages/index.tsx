import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast, Toaster } from "sonner";
import { getTranslations, getTranslationsFromHits } from "@/lib/translate";
import { LangKey, TranslationResult } from "@/type";
import { debounce } from "@/lib/utils";
import { Check, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dropMenuList=[
  {label:"英语",value:"en"},
  {label:"日语",value:"ja"},
  {label:"繁体中文",value:"zh_TW"},
  {label:"法语",value:"fr"},
  {label:"德语",value:"de"},
  {label:"乌克兰语",value:"uk"},
  {label:"韩语",value:"ko"},
  {label:"西班牙语",value:"es"},
  {label:"意大利语",value:"it"},
]

export default function Home() {
  const [translations, setTranslations] = useState<TranslationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedLangs, setSelectedLangs] = useState<LangKey[]>(['en']);
  const [searchWord, setSearchWord] = useState('');


  const handleQuery = useCallback((query: string) => {
    window.query_i18n(query,(data)=>{
      const translations = getTranslations(data);
      const result = getTranslationsFromHits(translations, selectedLangs);
      setTranslations(result);
      setLoading(false);
    });
  }, [selectedLangs]);

  // 使用 useMemo 缓存防抖函数
  const handleQueryDebounce = useMemo(
    () => debounce(handleQuery, 200),
    [handleQuery]
  );


  useEffect(() => {
    // 创建代理对象来监听 window.searchWord
    window.searchProxy = new Proxy(
      { searchWord: window.searchWord || '' },
      {
        set(target, key, value) {
          // 当 searchWord 改变时，自动触发搜索
          if (key === 'searchWord' && value) {
            setSearchWord(value)
          }
          return true;
        }
      }
    );
  }, [selectedLangs]);

  useEffect(() => {
    if(!searchWord){
      return;
    }
    if(!selectedLangs){
      return;
    }
    setLoading(true);
    handleQueryDebounce(searchWord);
  }, [searchWord,selectedLangs,handleQueryDebounce]);






  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("文本已复制到剪贴板");
    } catch (error: unknown) {
      console.error(error);
      toast.error("复制失败");
    }
  };

  return (
    <div className="container mx-auto py-5 h-full">
      <Toaster position="top-center" />
      {/* 设置 */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          <Settings className="w-4 h-4" />
          语言设置
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {dropMenuList.map((lang) => (
            <DropdownMenuItem
              key={lang.value}
              onClick={() => {
                setSelectedLangs(prev => {
                  // 如果已经存在，则移除
                  if (prev.includes(lang.value as LangKey)) {
                    return prev.filter(l => l !== lang.value as LangKey);
                  }
                  // 如果不存在，则添加
                  return [...prev, lang.value as LangKey];
                });
              }}
            >
              <div className="flex items-center gap-2">
                {selectedLangs.includes(lang.value as LangKey) && (
                  <Check className="w-4 h-4" />
                )}
                {lang.label}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>多语言翻译结果</span>
            <div className="flex items-center gap-2">

              <Badge variant="secondary">
                共 {translations.length} 条结果
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <ScrollArea className="h-[auto] rounded-md  p-4">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-lg text-muted-foreground">正在加载翻译结果...</p>
              </div>
            ) : translations.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-lg text-muted-foreground">暂无翻译结果,请输入要翻译的内容</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {translations.map((item, index) => (
                  <Card 
                    key={index} 
                    className="cursor-pointer hover:bg-accent/50 transition-colors"
                    onClick={() => handleCopy(item.text)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge className="mb-2">{item.lang}</Badge>
                          <p className="text-2xl font-semibold">{item.text}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            置信度: {item.confidence.toFixed(2)}%
                          </p>
                          <p className="text-sm text-muted-foreground">
                            来源: <a href={item.domain} target="_blank" rel="noopener noreferrer">{item.source||"未知"}</a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

