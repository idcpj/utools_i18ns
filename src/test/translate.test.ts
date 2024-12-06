import { getTranslations, getTranslationsFromHits } from "@/lib/translate";



describe('Translation Tests', () => {
    it('test 1', () => {
        // 测试数据

        const data = {
            "hits": {
                "hits": [
                    {
                        "_id": "14cd78a8c69d539783e5e9777d3ea0e0",
                        "_index": "i18ns_v1",
                        "_score": 15.882612,
                        "_source": {
                            "confidence": 42.16353513146748,
                            "counts": 24,
                            "domain": "com.duolingo",
                            "format": 0,
                            "name": "Duolingo",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hello"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ja": [
                                        "こんにちは"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "de": [
                                        "Hallo"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "hi": [
                                        "नमस्ते"
                                    ],
                                    "lang": "hi"
                                },
                                {
                                    "lang": "vi",
                                    "vi": [
                                        "Xin chào"
                                    ]
                                },
                                {
                                    "lang": "uk",
                                    "uk": [
                                        "Вітаємо"
                                    ]
                                },
                                {
                                    "el": [
                                        "Γεια σου"
                                    ],
                                    "lang": "el"
                                },
                                {
                                    "lang": "pl",
                                    "pl": [
                                        "Cześć"
                                    ]
                                },
                                {
                                    "in": [
                                        "Halo"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "ko": [
                                        "안녕하세요"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "ro",
                                    "ro": [
                                        "Salut"
                                    ]
                                },
                                {
                                    "ar": [
                                        "أهلاً"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Salut"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba"
                                    ]
                                },
                                {
                                    "cs": [
                                        "Ahoj"
                                    ],
                                    "lang": "cs"
                                },
                                {
                                    "es": [
                                        "Hola"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "it": [
                                        "Ciao"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "Oi"
                                    ]
                                },
                                {
                                    "hu": [
                                        "Szia!"
                                    ],
                                    "lang": "hu"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Привет!"
                                    ]
                                },
                                {
                                    "lang": "nl_NL",
                                    "nl_NL": [
                                        "Hallo"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好"
                                    ]
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "你好"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>"
                            ]
                        }
                    },
                    {
                        "_id": "c8b9dcb36f81a70f8e926c9353803a1c",
                        "_index": "i18ns_v1",
                        "_score": 15.632612,
                        "_source": {
                            "confidence": 37.05046746300884,
                            "counts": 14,
                            "domain": "com.cyworld.camera",
                            "format": 0,
                            "name": "Beauty Cam",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hello"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ja": [
                                        "あいうえお"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "de": [
                                        "Hallo"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "lang": "vi",
                                    "vi": [
                                        "Xin chào"
                                    ]
                                },
                                {
                                    "lang": "uk",
                                    "uk": [
                                        "Привет"
                                    ]
                                },
                                {
                                    "in": [
                                        "Halo"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "ko": [
                                        "안녕하세요"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba"
                                    ]
                                },
                                {
                                    "es": [
                                        "¡Hola!"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Привет"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好"
                                    ]
                                },
                                {
                                    "lang": "pt_BR",
                                    "pt_BR": [
                                        "Olá"
                                    ]
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "你好"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>"
                            ]
                        }
                    },
                    {
                        "_id": "ab0f6cd3568ad49fe1144e0c55f8aa0d",
                        "_index": "i18ns_v1",
                        "_score": 15.582612,
                        "_source": {
                            "confidence": 36.97020505068989,
                            "counts": 16,
                            "domain": "com.ismaker.android.simsimi",
                            "format": 2,
                            "name": "SimSimi",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hi. There"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ja": [
                                        "こんにちは"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "de": [
                                        "Guten Tag"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好"
                                    ]
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "hallo"
                                    ]
                                },
                                {
                                    "in": [
                                        "Apa kabar?"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "ko": [
                                        "안녕하세요"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "ar": [
                                        "مرحبًا"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Bonjour"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "es": [
                                        "Hola!"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "lang": "ms",
                                    "ms": [
                                        "Apa khabar"
                                    ]
                                },
                                {
                                    "it": [
                                        "Ciao!"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "ola"
                                    ]
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Привет"
                                    ]
                                },
                                {
                                    "iw": [
                                        "שלום"
                                    ],
                                    "lang": "iw"
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>"
                            ]
                        }
                    },
                    {
                        "_id": "6983d235ca693abe93d6f73a17bc2d8e",
                        "_index": "i18ns_v1",
                        "_score": 15.532612,
                        "_source": {
                            "confidence": 35.16262962443545,
                            "counts": 30,
                            "domain": "com.asus.ia.asusapp",
                            "format": 0,
                            "name": "Service Center",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hi!"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "da": [
                                        "Hej!"
                                    ],
                                    "lang": "da"
                                },
                                {
                                    "ja": [
                                        "こんにちは！"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "lang": "nb",
                                    "nb": [
                                        "Hei!"
                                    ]
                                },
                                {
                                    "de": [
                                        "Hallo!"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "fi": [
                                        "Hei!"
                                    ],
                                    "lang": "fi"
                                },
                                {
                                    "lang": "vi",
                                    "vi": [
                                        "Xin chào!"
                                    ]
                                },
                                {
                                    "lang": "sk",
                                    "sk": [
                                        "Ahoj!"
                                    ]
                                },
                                {
                                    "lang": "uk",
                                    "uk": [
                                        "Вітаємо!"
                                    ]
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "Hallo!"
                                    ]
                                },
                                {
                                    "lang": "pl",
                                    "pl": [
                                        "Cześć!"
                                    ]
                                },
                                {
                                    "in": [
                                        "Hai!"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "ko": [
                                        "안녕하세요!"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "ro",
                                    "ro": [
                                        "Bună!"
                                    ]
                                },
                                {
                                    "ar": [
                                        "مرحبًا!"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Bonjour !"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba!"
                                    ]
                                },
                                {
                                    "cs": [
                                        "Ahoj!"
                                    ],
                                    "lang": "cs"
                                },
                                {
                                    "es": [
                                        "¡Hola!"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "it": [
                                        "Ciao!"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "hu": [
                                        "Üdv!"
                                    ],
                                    "lang": "hu"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Здравствуйте!"
                                    ]
                                },
                                {
                                    "lang": "sv",
                                    "sv": [
                                        "Hej!"
                                    ]
                                },
                                {
                                    "iw": [
                                        "שלום!"
                                    ],
                                    "lang": "iw"
                                },
                                {
                                    "lang": "zh_HK",
                                    "zh_HK": [
                                        "嗨！"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好！"
                                    ]
                                },
                                {
                                    "lang": "pt_BR",
                                    "pt_BR": [
                                        "Oi!"
                                    ]
                                },
                                {
                                    "lang": "pt_PT",
                                    "pt_PT": [
                                        "Oi!"
                                    ]
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "嗨！"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>！"
                            ]
                        }
                    },
                    {
                        "_id": "18cd6a5b3227e271965b7029edf40bd7",
                        "_index": "i18ns_v1",
                        "_score": 15.532612,
                        "_source": {
                            "confidence": 35.065522407970775,
                            "counts": 30,
                            "domain": "com.airbnb.android",
                            "format": 0,
                            "name": "Airbnb",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hello."
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ca": [
                                        "Hola."
                                    ],
                                    "lang": "ca"
                                },
                                {
                                    "da": [
                                        "Hej."
                                    ],
                                    "lang": "da"
                                },
                                {
                                    "ja": [
                                        "こんにちは。"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "id": [
                                        "Halo."
                                    ],
                                    "lang": "id"
                                },
                                {
                                    "de": [
                                        "Hello."
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好！"
                                    ]
                                },
                                {
                                    "fi": [
                                        "Hei."
                                    ],
                                    "lang": "fi"
                                },
                                {
                                    "el": [
                                        "Χαίρετε."
                                    ],
                                    "lang": "el"
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "Hallo."
                                    ]
                                },
                                {
                                    "lang": "pl",
                                    "pl": [
                                        "Witaj."
                                    ]
                                },
                                {
                                    "ko": [
                                        "환영합니다!"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "no",
                                    "no": [
                                        "Heissan."
                                    ]
                                },
                                {
                                    "fr": [
                                        "Bonjour."
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "hr": [
                                        "Pozdrav."
                                    ],
                                    "lang": "hr"
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba."
                                    ]
                                },
                                {
                                    "cs": [
                                        "Ahoj."
                                    ],
                                    "lang": "cs"
                                },
                                {
                                    "es": [
                                        "Hola."
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "is": [
                                        "Halló."
                                    ],
                                    "lang": "is"
                                },
                                {
                                    "lang": "ms",
                                    "ms": [
                                        "Helo."
                                    ]
                                },
                                {
                                    "it": [
                                        "Hello."
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "Hello!"
                                    ]
                                },
                                {
                                    "hu": [
                                        "Szia!"
                                    ],
                                    "lang": "hu"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Hello!"
                                    ]
                                },
                                {
                                    "lang": "zu",
                                    "zu": [
                                        "(f01gna)Hello."
                                    ]
                                },
                                {
                                    "lang": "sv",
                                    "sv": [
                                        "Hej."
                                    ]
                                },
                                {
                                    "lang": "zh_HK",
                                    "zh_HK": [
                                        "您好！"
                                    ]
                                },
                                {
                                    "en_AU": [
                                        "Hello."
                                    ],
                                    "lang": "en_AU"
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "您好！"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>！"
                            ]
                        }
                    },
                    {
                        "_id": "af303d7d735f86b7c97098e787c332fb",
                        "_index": "i18ns_v1",
                        "_score": 15.432611,
                        "_source": {
                            "confidence": 33.2723255131835,
                            "counts": 61,
                            "domain": "lt.noframe.fieldsareameasure",
                            "format": 0,
                            "name": "Fields Area Measure Free",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hello world!"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ca": [
                                        "Hola món!"
                                    ],
                                    "lang": "ca"
                                },
                                {
                                    "da": [
                                        "Goddag verden"
                                    ],
                                    "lang": "da"
                                },
                                {
                                    "fa": [
                                        "سلام به حهان !"
                                    ],
                                    "lang": "fa"
                                },
                                {
                                    "ja": [
                                        "ようこそ！"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "lang": "pa",
                                    "pa": [
                                        "Jag nu Ssa!"
                                    ]
                                },
                                {
                                    "lang": "ta",
                                    "ta": [
                                        "அகிலத்துக்கு வணக்கம்!"
                                    ]
                                },
                                {
                                    "lang": "nb",
                                    "nb": [
                                        "Hallo verden!"
                                    ]
                                },
                                {
                                    "id": [
                                        "Hallo dunia!"
                                    ],
                                    "lang": "id"
                                },
                                {
                                    "de": [
                                        "Hallo Welt!"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "he": [
                                        "שלום עולם!"
                                    ],
                                    "lang": "he"
                                },
                                {
                                    "lang": "te",
                                    "te": [
                                        "ప్రపంచానికి వందనం"
                                    ]
                                },
                                {
                                    "af": [
                                        "Dagsê"
                                    ],
                                    "lang": "af"
                                },
                                {
                                    "bg": [
                                        "Здравей Свят!"
                                    ],
                                    "lang": "bg"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดีชาวโลก"
                                    ]
                                },
                                {
                                    "fi": [
                                        "Terve maailma"
                                    ],
                                    "lang": "fi"
                                },
                                {
                                    "hi": [
                                        "हैलो वर्ल्ड!"
                                    ],
                                    "lang": "hi"
                                },
                                {
                                    "lang": "sk",
                                    "sk": [
                                        "Ahoj všetci!"
                                    ]
                                },
                                {
                                    "lang": "uk",
                                    "uk": [
                                        "Привіт, світе!"
                                    ]
                                },
                                {
                                    "el": [
                                        "Καλημέρα σε όλους!"
                                    ],
                                    "lang": "el"
                                },
                                {
                                    "gl": [
                                        "¡Ola xente!"
                                    ],
                                    "lang": "gl"
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "Hallo wereld!"
                                    ]
                                },
                                {
                                    "lang": "pl",
                                    "pl": [
                                        "Witaj świecie!"
                                    ]
                                },
                                {
                                    "lang": "sl",
                                    "sl": [
                                        "Pozdravljen Svet!"
                                    ]
                                },
                                {
                                    "in": [
                                        "Hallo dunia!"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "kn": [
                                        "ಹಲೋ ವರ್ಲ್ಡ್"
                                    ],
                                    "lang": "kn"
                                },
                                {
                                    "lang": "mn",
                                    "mn": [
                                        "Сайн байна уу эх дэлхий!"
                                    ]
                                },
                                {
                                    "lang": "nn",
                                    "nn": [
                                        "Hallo verden!"
                                    ]
                                },
                                {
                                    "ko": [
                                        "안녕하세요!"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "no",
                                    "no": [
                                        "Hallo verden!"
                                    ]
                                },
                                {
                                    "lang": "ro",
                                    "ro": [
                                        "Bună lume!"
                                    ]
                                },
                                {
                                    "ar": [
                                        "اهلا بالعالم"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Bienvenue!"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "hr": [
                                        "Pozdrav svijete!"
                                    ],
                                    "lang": "hr"
                                },
                                {
                                    "lang": "mr",
                                    "mr": [
                                        "नमस्कार!"
                                    ]
                                },
                                {
                                    "lang": "sr",
                                    "sr": [
                                        "Pozdrav svete!"
                                    ]
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba dünya!"
                                    ]
                                },
                                {
                                    "lang": "ur",
                                    "ur": [
                                        "Salaam ehly arz"
                                    ]
                                },
                                {
                                    "cs": [
                                        "Ahoj všichni!"
                                    ],
                                    "lang": "cs"
                                },
                                {
                                    "es": [
                                        "¡Hola Mundo!"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "it": [
                                        "Salve mondo!"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "lt",
                                    "lt": [
                                        "Labas mėnuli"
                                    ]
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "Olá Mundo!"
                                    ]
                                },
                                {
                                    "eu": [
                                        "Kaixo denoi!"
                                    ],
                                    "lang": "eu"
                                },
                                {
                                    "hu": [
                                        "Hello világ!"
                                    ],
                                    "lang": "hu"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Привет, мир!"
                                    ]
                                },
                                {
                                    "lang": "lv",
                                    "lv": [
                                        "Sveika pasaule!"
                                    ]
                                },
                                {
                                    "lang": "sv",
                                    "sv": [
                                        "Hej världen!"
                                    ]
                                },
                                {
                                    "iw": [
                                        "שלום עולם!"
                                    ],
                                    "lang": "iw"
                                },
                                {
                                    "hy": [
                                        "Բարեւ աշխարհ!"
                                    ],
                                    "lang": "hy"
                                },
                                {
                                    "lang": "my",
                                    "my": [
                                        "ဟဲလို ကမ္ဘာကြီး"
                                    ]
                                },
                                {
                                    "az": [
                                        "Salam dünya!"
                                    ],
                                    "lang": "az"
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好！"
                                    ]
                                },
                                {
                                    "es_CO": [
                                        "Hola mundo!"
                                    ],
                                    "lang": "es_CO"
                                },
                                {
                                    "lang": "nb_NO",
                                    "nb_NO": [
                                        "Hallo verden!"
                                    ]
                                },
                                {
                                    "lang": "nn_NO",
                                    "nn_NO": [
                                        "Hallo verden!"
                                    ]
                                },
                                {
                                    "es_AR": [
                                        "Hola mundo!"
                                    ],
                                    "lang": "es_AR"
                                },
                                {
                                    "lang": "pt_BR",
                                    "pt_BR": [
                                        "Olá mundo!"
                                    ]
                                },
                                {
                                    "es_US": [
                                        "¡Hola mundo!"
                                    ],
                                    "lang": "es_US"
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "你好！"
                                    ]
                                },
                                {
                                    "es_MX": [
                                        "Hola mundo!"
                                    ],
                                    "lang": "es_MX"
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>！"
                            ]
                        }
                    },
                    {
                        "_id": "53ae9872ac6238bac33d6f33d77c9ffe",
                        "_index": "i18ns_v1",
                        "_score": 15.432611,
                        "_source": {
                            "confidence": 33.68675370231881,
                            "counts": 87,
                            "domain": "com.szyk.myheart",
                            "format": 0,
                            "name": "",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hello"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "haw": [
                                        "aloha"
                                    ],
                                    "lang": "haw"
                                },
                                {
                                    "ca": [
                                        "Hola"
                                    ],
                                    "lang": "ca"
                                },
                                {
                                    "da": [
                                        "Hej"
                                    ],
                                    "lang": "da"
                                },
                                {
                                    "fa": [
                                        "سلام"
                                    ],
                                    "lang": "fa"
                                },
                                {
                                    "ga": [
                                        "Dia dhuit"
                                    ],
                                    "lang": "ga"
                                },
                                {
                                    "ha": [
                                        "Sannu"
                                    ],
                                    "lang": "ha"
                                },
                                {
                                    "ja": [
                                        "こんにちは"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "ka": [
                                        "გამარჯობა"
                                    ],
                                    "lang": "ka"
                                },
                                {
                                    "lang": "ta",
                                    "ta": [
                                        "வணக்கம்"
                                    ]
                                },
                                {
                                    "be": [
                                        "добры дзень"
                                    ],
                                    "lang": "be"
                                },
                                {
                                    "de": [
                                        "Hallo"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "ne",
                                    "ne": [
                                        "नमस्ते"
                                    ]
                                },
                                {
                                    "lang": "te",
                                    "te": [
                                        "హలో"
                                    ]
                                },
                                {
                                    "af": [
                                        "hallo"
                                    ],
                                    "lang": "af"
                                },
                                {
                                    "bg": [
                                        "Здравейте"
                                    ],
                                    "lang": "bg"
                                },
                                {
                                    "ig": [
                                        "Nnọọ"
                                    ],
                                    "lang": "ig"
                                },
                                {
                                    "lang": "mg",
                                    "mg": [
                                        "Salama"
                                    ]
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "lang": "xh",
                                    "xh": [
                                        "Mholo"
                                    ]
                                },
                                {
                                    "fi": [
                                        "Hei"
                                    ],
                                    "lang": "fi"
                                },
                                {
                                    "hi": [
                                        "नमस्ते"
                                    ],
                                    "lang": "hi"
                                },
                                {
                                    "lang": "mi",
                                    "mi": [
                                        "Hiha"
                                    ]
                                },
                                {
                                    "lang": "si",
                                    "si": [
                                        "හෙලෝ"
                                    ]
                                },
                                {
                                    "lang": "vi",
                                    "vi": [
                                        "xin chào"
                                    ]
                                },
                                {
                                    "kk": [
                                        "Сәлеметсіз бе"
                                    ],
                                    "lang": "kk"
                                },
                                {
                                    "lang": "mk",
                                    "mk": [
                                        "Здраво"
                                    ]
                                },
                                {
                                    "lang": "sk",
                                    "sk": [
                                        "ahoj"
                                    ]
                                },
                                {
                                    "el": [
                                        "Γεια σας"
                                    ],
                                    "lang": "el"
                                },
                                {
                                    "gl": [
                                        "Ola"
                                    ],
                                    "lang": "gl"
                                },
                                {
                                    "lang": "ml",
                                    "ml": [
                                        "ഹലോ"
                                    ]
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "Hallo"
                                    ]
                                },
                                {
                                    "lang": "pl",
                                    "pl": [
                                        "Witam"
                                    ]
                                },
                                {
                                    "lang": "sl",
                                    "sl": [
                                        "zdravo"
                                    ]
                                },
                                {
                                    "lang": "tl",
                                    "tl": [
                                        "Kamusta"
                                    ]
                                },
                                {
                                    "am": [
                                        "ሰላም"
                                    ],
                                    "lang": "am"
                                },
                                {
                                    "km": [
                                        "ជំរាបសួរ"
                                    ],
                                    "lang": "km"
                                },
                                {
                                    "bn": [
                                        "হ্যালো"
                                    ],
                                    "lang": "bn"
                                },
                                {
                                    "in": [
                                        "Halo"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "kn": [
                                        "ಹಲೋ"
                                    ],
                                    "lang": "kn"
                                },
                                {
                                    "lang": "mn",
                                    "mn": [
                                        "Сайн уу"
                                    ]
                                },
                                {
                                    "lang": "sn",
                                    "sn": [
                                        "Mhoro"
                                    ]
                                },
                                {
                                    "eo": [
                                        "Saluton"
                                    ],
                                    "lang": "eo"
                                },
                                {
                                    "ko": [
                                        "여보세요"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "lo",
                                    "lo": [
                                        "ສະບາຍດີ"
                                    ]
                                },
                                {
                                    "lang": "no",
                                    "no": [
                                        "Hallo"
                                    ]
                                },
                                {
                                    "lang": "ro",
                                    "ro": [
                                        "buna"
                                    ]
                                },
                                {
                                    "lang": "so",
                                    "so": [
                                        "Hello"
                                    ]
                                },
                                {
                                    "lang": "yo",
                                    "yo": [
                                        "Pẹlẹ o"
                                    ]
                                },
                                {
                                    "lang": "sq",
                                    "sq": [
                                        "Përshëndetje"
                                    ]
                                },
                                {
                                    "ar": [
                                        "مرحبا"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Bonjour"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "hr": [
                                        "zdravo"
                                    ],
                                    "lang": "hr"
                                },
                                {
                                    "lang": "mr",
                                    "mr": [
                                        "हॅलो"
                                    ]
                                },
                                {
                                    "lang": "sr",
                                    "sr": [
                                        "Здраво"
                                    ]
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba"
                                    ]
                                },
                                {
                                    "lang": "ur",
                                    "ur": [
                                        "ہیلو"
                                    ]
                                },
                                {
                                    "bs": [
                                        "zdravo"
                                    ],
                                    "lang": "bs"
                                },
                                {
                                    "cs": [
                                        "Ahoj"
                                    ],
                                    "lang": "cs"
                                },
                                {
                                    "es": [
                                        "¡Hola"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "is": [
                                        "Halló"
                                    ],
                                    "lang": "is"
                                },
                                {
                                    "lang": "ms",
                                    "ms": [
                                        "Hello"
                                    ]
                                },
                                {
                                    "lang": "ps",
                                    "ps": [
                                        "سلام"
                                    ]
                                },
                                {
                                    "et": [
                                        "Tere"
                                    ],
                                    "lang": "et"
                                },
                                {
                                    "it": [
                                        "Ciao"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "lt",
                                    "lt": [
                                        "Sveiki"
                                    ]
                                },
                                {
                                    "lang": "mt",
                                    "mt": [
                                        "Bongu"
                                    ]
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "Olá"
                                    ]
                                },
                                {
                                    "eu": [
                                        "Kaixo"
                                    ],
                                    "lang": "eu"
                                },
                                {
                                    "gu": [
                                        "હેલો"
                                    ],
                                    "lang": "gu"
                                },
                                {
                                    "hu": [
                                        "Helló"
                                    ],
                                    "lang": "hu"
                                },
                                {
                                    "ku": [
                                        "Slav"
                                    ],
                                    "lang": "ku"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "привет"
                                    ]
                                },
                                {
                                    "lang": "zu",
                                    "zu": [
                                        "Sawubona"
                                    ]
                                },
                                {
                                    "lang": "lv",
                                    "lv": [
                                        "Sveiki"
                                    ]
                                },
                                {
                                    "lang": "sv",
                                    "sv": [
                                        "Hallå"
                                    ]
                                },
                                {
                                    "iw": [
                                        "שלום"
                                    ],
                                    "lang": "iw"
                                },
                                {
                                    "lang": "sw",
                                    "sw": [
                                        "Sawa"
                                    ]
                                },
                                {
                                    "cy": [
                                        "Helo"
                                    ],
                                    "lang": "cy"
                                },
                                {
                                    "hy": [
                                        "Բարեւ"
                                    ],
                                    "lang": "hy"
                                },
                                {
                                    "ky": [
                                        "Салам"
                                    ],
                                    "lang": "ky"
                                },
                                {
                                    "lang": "my",
                                    "my": [
                                        "ဟယ်လို"
                                    ]
                                },
                                {
                                    "az": [
                                        "Salam"
                                    ],
                                    "lang": "az"
                                },
                                {
                                    "lang": "uz",
                                    "uz": [
                                        "Salom"
                                    ]
                                },
                                {
                                    "lang": "ru_UA",
                                    "ru_UA": [
                                        "привіт"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好"
                                    ]
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "你好"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>"
                            ]
                        }
                    },
                    {
                        "_id": "2fd15bf197ad79cf516fdc4dd25a01cd",
                        "_index": "i18ns_v1",
                        "_score": 15.382612,
                        "_source": {
                            "confidence": 32.511867713550835,
                            "counts": 6,
                            "domain": "jp.naver.SJLGPP",
                            "format": 0,
                            "name": "PokoPang",
                            "platform": 0,
                            "translations": [
                                {
                                    "it": [
                                        "Welcome."
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "ja": [
                                        "ようこそ。"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "en": [
                                        "Welcome."
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ko": [
                                        "안녕하세요."
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好."
                                    ]
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "您好。"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>."
                            ]
                        }
                    },
                    {
                        "_id": "88c96dbf78ea5a66113dc5b734fd89f4",
                        "_index": "i18ns_v1",
                        "_score": 15.382612,
                        "_source": {
                            "confidence": 32.726043082496204,
                            "counts": 14,
                            "domain": "com.microsoft.translator",
                            "format": 0,
                            "name": "Translator",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hey"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ja": [
                                        "こんにちは"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "de": [
                                        "Hallo"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "Hallo"
                                    ]
                                },
                                {
                                    "in": [
                                        "Hei"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "ar": [
                                        "مرحباً"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Bonjour"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba"
                                    ]
                                },
                                {
                                    "es": [
                                        "Hola"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "it": [
                                        "Ehi"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "Ei"
                                    ]
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Здравствуйте"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好"
                                    ]
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "您好"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>"
                            ]
                        }
                    },
                    {
                        "_id": "f4601bdf90a1cd0af2431adbdcd8c910",
                        "_index": "i18ns_v1",
                        "_score": 15.382612,
                        "_source": {
                            "confidence": 32.638115717809754,
                            "counts": 40,
                            "domain": "com.woman.diary",
                            "format": 0,
                            "name": "Women’s diary",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hi"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ca": [
                                        "Hola"
                                    ],
                                    "lang": "ca"
                                },
                                {
                                    "da": [
                                        "Hej"
                                    ],
                                    "lang": "da"
                                },
                                {
                                    "ja": [
                                        "こんにちは"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "id": [
                                        "Hai"
                                    ],
                                    "lang": "id"
                                },
                                {
                                    "de": [
                                        "Hallo"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "bg": [
                                        "Здравей"
                                    ],
                                    "lang": "bg"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "fi": [
                                        "Hei"
                                    ],
                                    "lang": "fi"
                                },
                                {
                                    "hi": [
                                        "हैलो"
                                    ],
                                    "lang": "hi"
                                },
                                {
                                    "lang": "vi",
                                    "vi": [
                                        "Chào bạn"
                                    ]
                                },
                                {
                                    "lang": "sk",
                                    "sk": [
                                        "Ahoj"
                                    ]
                                },
                                {
                                    "lang": "uk",
                                    "uk": [
                                        "Привіт"
                                    ]
                                },
                                {
                                    "el": [
                                        "Γεια σου"
                                    ],
                                    "lang": "el"
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "Hoi"
                                    ]
                                },
                                {
                                    "lang": "pl",
                                    "pl": [
                                        "Witamy"
                                    ]
                                },
                                {
                                    "lang": "sl",
                                    "sl": [
                                        "Hi"
                                    ]
                                },
                                {
                                    "lang": "tl",
                                    "tl": [
                                        "Hi"
                                    ]
                                },
                                {
                                    "ko": [
                                        "안녕"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "no",
                                    "no": [
                                        "Hei"
                                    ]
                                },
                                {
                                    "lang": "ro",
                                    "ro": [
                                        "Salut"
                                    ]
                                },
                                {
                                    "ar": [
                                        "مرحبا"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Bonjour"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "hr": [
                                        "Bok"
                                    ],
                                    "lang": "hr"
                                },
                                {
                                    "lang": "sr",
                                    "sr": [
                                        "Поздрав"
                                    ]
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba"
                                    ]
                                },
                                {
                                    "cs": [
                                        "Ahoj"
                                    ],
                                    "lang": "cs"
                                },
                                {
                                    "es": [
                                        "Hola"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "et": [
                                        "Tere"
                                    ],
                                    "lang": "et"
                                },
                                {
                                    "it": [
                                        "Salve"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "lt",
                                    "lt": [
                                        "Sveika"
                                    ]
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "Oi"
                                    ]
                                },
                                {
                                    "hu": [
                                        "Szia"
                                    ],
                                    "lang": "hu"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Привет"
                                    ]
                                },
                                {
                                    "lang": "lv",
                                    "lv": [
                                        "Sveiki"
                                    ]
                                },
                                {
                                    "lang": "sv",
                                    "sv": [
                                        "Hej"
                                    ]
                                },
                                {
                                    "iw": [
                                        "שלום"
                                    ],
                                    "lang": "iw"
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好"
                                    ]
                                },
                                {
                                    "es_US": [
                                        "Hola"
                                    ],
                                    "lang": "es_US"
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "你好"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>"
                            ]
                        }
                    },
                    {
                        "_id": "5aa2829ec639952e7917e4c44243fc6e",
                        "_index": "i18ns_v1",
                        "_score": 15.382612,
                        "_source": {
                            "confidence": 32.094014422942124,
                            "counts": 56,
                            "domain": "com.facebook.work",
                            "format": 0,
                            "name": "Workplace",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hello"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "da": [
                                        "Hej"
                                    ],
                                    "lang": "da"
                                },
                                {
                                    "fa": [
                                        "سلام"
                                    ],
                                    "lang": "fa"
                                },
                                {
                                    "ja": [
                                        "こんにちは"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "lang": "pa",
                                    "pa": [
                                        "ਹੈਲੋ"
                                    ]
                                },
                                {
                                    "lang": "ta",
                                    "ta": [
                                        "ஹலோ"
                                    ]
                                },
                                {
                                    "lang": "nb",
                                    "nb": [
                                        "Hei"
                                    ]
                                },
                                {
                                    "de": [
                                        "Hallo"
                                    ],
                                    "lang": "de"
                                },
                                {
                                    "lang": "ne",
                                    "ne": [
                                        "नमस्कार"
                                    ]
                                },
                                {
                                    "lang": "te",
                                    "te": [
                                        "హలో"
                                    ]
                                },
                                {
                                    "af": [
                                        "Hallo"
                                    ],
                                    "lang": "af"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดี"
                                    ]
                                },
                                {
                                    "fi": [
                                        "Hei"
                                    ],
                                    "lang": "fi"
                                },
                                {
                                    "hi": [
                                        "नमस्कार"
                                    ],
                                    "lang": "hi"
                                },
                                {
                                    "lang": "si",
                                    "si": [
                                        "ආයුබෝවන්"
                                    ]
                                },
                                {
                                    "lang": "vi",
                                    "vi": [
                                        "Xin chào"
                                    ]
                                },
                                {
                                    "lang": "mk",
                                    "mk": [
                                        "Здраво"
                                    ]
                                },
                                {
                                    "lang": "sk",
                                    "sk": [
                                        "Zdravíme"
                                    ]
                                },
                                {
                                    "el": [
                                        "Γεια σας"
                                    ],
                                    "lang": "el"
                                },
                                {
                                    "lang": "ml",
                                    "ml": [
                                        "ഹലോ"
                                    ]
                                },
                                {
                                    "lang": "nl",
                                    "nl": [
                                        "Hallo"
                                    ]
                                },
                                {
                                    "lang": "pl",
                                    "pl": [
                                        "Witaj!"
                                    ]
                                },
                                {
                                    "lang": "sl",
                                    "sl": [
                                        "Pozdrav"
                                    ]
                                },
                                {
                                    "lang": "tl",
                                    "tl": [
                                        "Kumusta"
                                    ]
                                },
                                {
                                    "km": [
                                        "សួស្ដី"
                                    ],
                                    "lang": "km"
                                },
                                {
                                    "bn": [
                                        "হ্যালো"
                                    ],
                                    "lang": "bn"
                                },
                                {
                                    "in": [
                                        "Halo"
                                    ],
                                    "lang": "in"
                                },
                                {
                                    "kn": [
                                        "ಹಲೋ"
                                    ],
                                    "lang": "kn"
                                },
                                {
                                    "lang": "mn",
                                    "mn": [
                                        "Сайн уу"
                                    ]
                                },
                                {
                                    "ko": [
                                        "안녕하세요"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "ro",
                                    "ro": [
                                        "Salut!"
                                    ]
                                },
                                {
                                    "ar": [
                                        "مرحبًا"
                                    ],
                                    "lang": "ar"
                                },
                                {
                                    "fr": [
                                        "Bonjour"
                                    ],
                                    "lang": "fr"
                                },
                                {
                                    "hr": [
                                        "Pozdrav"
                                    ],
                                    "lang": "hr"
                                },
                                {
                                    "lang": "mr",
                                    "mr": [
                                        "हॅलो"
                                    ]
                                },
                                {
                                    "lang": "sr",
                                    "sr": [
                                        "Здраво"
                                    ]
                                },
                                {
                                    "lang": "tr",
                                    "tr": [
                                        "Merhaba"
                                    ]
                                },
                                {
                                    "lang": "ur",
                                    "ur": [
                                        "ہیلو"
                                    ]
                                },
                                {
                                    "as": [
                                        "সম্ভাষণ"
                                    ],
                                    "lang": "as"
                                },
                                {
                                    "cs": [
                                        "Zdravíme"
                                    ],
                                    "lang": "cs"
                                },
                                {
                                    "es": [
                                        "Hola"
                                    ],
                                    "lang": "es"
                                },
                                {
                                    "lang": "ms",
                                    "ms": [
                                        "Helo"
                                    ]
                                },
                                {
                                    "it": [
                                        "Ciao"
                                    ],
                                    "lang": "it"
                                },
                                {
                                    "lang": "lt",
                                    "lt": [
                                        "Pasisveikinti"
                                    ]
                                },
                                {
                                    "lang": "pt",
                                    "pt": [
                                        "Olá"
                                    ]
                                },
                                {
                                    "gu": [
                                        "હેલો"
                                    ],
                                    "lang": "gu"
                                },
                                {
                                    "hu": [
                                        "Helló"
                                    ],
                                    "lang": "hu"
                                },
                                {
                                    "lang": "ru",
                                    "ru": [
                                        "Здравствуйте"
                                    ]
                                },
                                {
                                    "lang": "sv",
                                    "sv": [
                                        "Hej"
                                    ]
                                },
                                {
                                    "iw": [
                                        "שלום"
                                    ],
                                    "lang": "iw"
                                },
                                {
                                    "lang": "sw",
                                    "sw": [
                                        "Jambo"
                                    ]
                                },
                                {
                                    "lang": "my",
                                    "my": [
                                        "ဟဲလို"
                                    ]
                                },
                                {
                                    "az": [
                                        "Salam"
                                    ],
                                    "lang": "az"
                                },
                                {
                                    "lang": "zh_HK",
                                    "zh_HK": [
                                        "你好"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好"
                                    ]
                                },
                                {
                                    "lang": "zh_TW",
                                    "zh_TW": [
                                        "你好"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>"
                            ]
                        }
                    },
                    {
                        "_id": "fe59a422cb58b4b0018c3229fec32cea",
                        "_index": "i18ns_v1",
                        "_score": 15.364738,
                        "_source": {
                            "confidence": 17.40296638705714,
                            "counts": 7,
                            "domain": "com.jiojiome",
                            "format": 0,
                            "name": "",
                            "platform": 0,
                            "translations": [
                                {
                                    "en": [
                                        "Hello, How are you?"
                                    ],
                                    "lang": "en"
                                },
                                {
                                    "ja": [
                                        "こんにちは、元気？"
                                    ],
                                    "lang": "ja"
                                },
                                {
                                    "lang": "th",
                                    "th": [
                                        "สวัสดีคุณเป็นอย่างไร?"
                                    ]
                                },
                                {
                                    "lang": "zh",
                                    "zh": [
                                        "你好！你好吗？"
                                    ]
                                },
                                {
                                    "lang": "vi",
                                    "vi": [
                                        "Xin chào, bạn khỏe không?"
                                    ]
                                },
                                {
                                    "ko": [
                                        "안녕, 잘 있었 니?"
                                    ],
                                    "lang": "ko"
                                },
                                {
                                    "lang": "ms",
                                    "ms": [
                                        "Hello, Bagaimana keadaan awak?"
                                    ]
                                }
                            ]
                        },
                        "highlight": {
                            "translations.zh": [
                                "<em>你</em><em>好</em>！<em>你</em><em>好</em>吗？"
                            ]
                        }
                    }
                ],
                "max_score": 15.882612,
                "total": 10000
            },
            "took": 33,
            "total": 10000
        }

        const i18nstr = JSON.stringify(data);

        const translations = getTranslations(i18nstr);
        const result = getTranslationsFromHits(translations, ['en', 'zh']);
        // console.log(result);

        expect(result.length).toEqual(13);

    });
});