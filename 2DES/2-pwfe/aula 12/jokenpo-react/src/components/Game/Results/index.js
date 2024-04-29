import React from 'react';

import { connect } from 'react-redux';

import rock from '../../../assets/images/icon-rock.svg';
import paper from '../../../assets/images/icon-paper.svg';
import scissor from '../../../assets/images/icon-scissors.svg';

import * as UserActions from '../../../store/actions/game';

import { useCookies } from 'react-cookie';

import './style.css';

function addScore(cookie, setCookie) {
    if (cookie.score) {
        setCookie('score', parseInt(cookie.score) + 1, { 
            path: '/',
            maxAge: 5 * 360 * 24 * 60 * 60
        });
    } else {
        setCookie('score', 1, {
            path: '/',
            maxAge: 5 * 360 * 24 * 60 * 60
        })
    }
}

function handleReplay(dispatch) {
    dispatch(UserActions.handleUserPick(null, 'main'));
}
  

const Results = ({ user, game, dispatch }) => {

    const [cookie, setCookie] = useCookies(['score']);

    const { user_lang } = user;

    const {user_pick, house_pick } = game;
    
    var language = user_lang;

    const text = user.translation[language];

    const options = {
        rock,paper,scissor
    }

    const results = {
        house: {
            img: options[house_pick],
            pick: house_pick
        },
        player: {
            img: options[user_pick],
            pick: user_pick
        },
        winner: game.winner,
    }
    
    if(results.winner === 'win'){
        addScore(cookie, setCookie);
    }
    const result = results.winner;

    return (
        <>
            <div className="game-container-results">
                <div className="pick">
                    <div className="title">
                        <span className="pick-desc">
                            {text.Game.your_pick}
                        </span>
                    </div>
                    <div className={"game-option-container-results " + result}>
                        <div className={"game-option-wrap-results " + results.player.pick + ""}>
                            <div className="game-option-results">
                                <img src={results.player.img} alt="" className="option-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="game-result">
                    <div className="text-result">{ text.Game[results.winner] }</div>
                    <div className="replay-button" onClick={() => handleReplay(dispatch)}>{text.Game.replay}</div>
                </div>

                <div className="pick">
                    <div className="title">
                        <span className="pick-desc">
                            {text.Game.house_pick}
                        </span>
                    </div>
                    <div className={"game-option-container-results " + result}>
                        <div className={"game-option-wrap-results " + results.house.pick + " house"}>
                            <div className="game-option-results">
                                <img src={results.house.img} alt="" className="option-img" />
                            </div>
                        </div>
                        <div className="bg-housepick"></div>
                    </div>
                </div>

                <div className="game-background">
                    <div className="bar-container">
                        <div className="game-bar"><div className="bar-1"></div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default connect(state => ({ user: state.user, game: state.game }))(Results);