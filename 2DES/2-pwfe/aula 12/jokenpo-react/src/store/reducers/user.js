import translations from './../../translations/game.json';

const INITIAL_STATE =
{
    user_lang: 'enUS',
    user_pick: null,
    user_score: 0,
    translation: translations,
}

export default function user(state = INITIAL_STATE, action) {
    if(action.type === 'SWITCH_LANGUAGE'){
        return {
            ...state,
            user_lang: action.user_lang,
        };
    }
    if (action.type === 'SET_SCORE') {
        return {
            ...state,
            user_score: action.user_score,
        }
    }
    return state;
}