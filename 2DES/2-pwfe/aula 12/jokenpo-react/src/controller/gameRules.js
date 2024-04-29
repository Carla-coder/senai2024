export const options = [
    'scissor',
    'rock',
    'paper'
]

export function pickHouseOption(){
    var random_number = (Math.random() * 10).toFixed(0);

    while(!options[random_number]){
        random_number = (Math.random() * 10).toFixed(0);
    }
    return options[random_number];
}

export function evaluateResult(user_pick, house_pick){
    var result = 'lose';

    if(user_pick === options[0]){
        if(house_pick !== options[1]){
            result = 'win';
        }
    }else if(user_pick === options[1]){
        if(house_pick !== options[2]){
            result = 'win';
        }
    }else if(user_pick === options[2]){
        if(house_pick !== options[0]){
            result = 'win';
        }
    }
    if(user_pick === house_pick){
        result = 'draw';
    }

    return result;
}