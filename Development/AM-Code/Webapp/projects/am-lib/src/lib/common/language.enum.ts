/**
 * Created by ahmed.motair on 3/22/2018.
 */

export enum Languages{
    AR = "ar",
    EN = "en"
}

export function getLang(lang: string): Languages {
    if(lang == 'ar')
        return Languages.AR;
    else if(lang == 'en')
        return Languages.EN;
    else
        return Languages.AR;
}

