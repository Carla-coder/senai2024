export function switchLang(user_lang) {
    return {
        type: 'SWITCH_LANGUAGE',
        user_lang,
    };
}

export function setScore(user_score){
    return{
        type: 'SET_SCORE',
        user_score,
    }
}