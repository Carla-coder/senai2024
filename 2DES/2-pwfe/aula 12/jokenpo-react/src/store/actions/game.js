import * as GameRules from './../../controller/gameRules';

export function handleUserPick(user_pick, active_component) {
    var house_pick = GameRules.pickHouseOption();

    var winner = GameRules.evaluateResult(user_pick, house_pick);
    
    return {
        type: 'HANDLE_USER_PICK',
        user_pick, house_pick, winner, active_component,
    };
}