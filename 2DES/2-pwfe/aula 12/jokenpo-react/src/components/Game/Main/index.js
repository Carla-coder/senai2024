import React from 'react';

import { connect } from 'react-redux';

import rock from './../../../assets/images/icon-rock.svg';
import paper from './../../../assets/images/icon-paper.svg';
import scissors from './../../../assets/images/icon-scissors.svg';

import * as UserActions from '../../../store/actions/game';

import './style.css';

function handleUserPick(picked, dispatch){
  dispatch(UserActions.handleUserPick(picked, 'result'));
}

const Main = ({ game, dispatch }) => {

  return (
    <>
      <div className="game-container">
        <div className="game-option-wrap rock" onClick={() => handleUserPick('rock', dispatch)}>
          <div className="game-option">
            <img src={rock} alt="" className="option-img" />
          </div>
        </div>
        <div className="game-option-wrap paper" onClick={() => handleUserPick('paper', dispatch)}>
          <div className="game-option">
            <img src={paper} alt="" className="option-img" />
          </div>
        </div>
        <div className="game-option-wrap scissor" onClick={() => handleUserPick('scissor', dispatch)}>
          <div className="game-option">
            <img src={scissors} alt="" className="option-img" />
          </div>
        </div>
        <div className="game-background">
          <div className="bar-container">
            <div className="game-bar"><div className="bar-1"></div></div>
            <div className="game-bar"><div className="bar-2"></div></div>
            <div className="game-bar"><div className="bar-3"></div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(state => ({ game: state.game }))(Main);