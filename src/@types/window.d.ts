declare global {
    interface Window {
        query_i18n: (query:string,callback: (res: string) => void) => void;
    }
}

export {};