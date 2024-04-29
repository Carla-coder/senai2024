
import Main from './../../components/Game/Main';

import Result from './../../components/Game/Results';

const INITIAL_STATE =
{
    user_pick: null,
    house_pick: null,
    winner: null,

    components: {
        main: Main,
        result: Result
    },
    active_component: 'main',
}

export default function game(state = INITIAL_STATE, action) {
    if (action.type === 'HANDLE_USER_PICK') {
        return {
            ...state,
            user_pick: action.user_pick,
            active_component: action.active_component,
            house_pick: action.house_pick,
            winner: action.winner,
        };
    }
    return state;
}