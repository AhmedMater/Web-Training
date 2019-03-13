/**
 * Created by ahmed.motair on 3/22/2018.
 */

export enum Languages{
    AR = "ar",
    EN = "en"
}

export function getLang(lang: string): LanguageEnum {
    if(lang == 'ar')
        return LanguageEnum.AR;
    else if(lang == 'en')
        return LanguageEnum.EN;
    else
        return LanguageEnum.AR;
}

