import React from 'react';

import { useCookies } from 'react-cookie';

import { connect } from 'react-redux';

import ptBR from './../../assets/images/lang/ptBR.png';
import enUS from './../../assets/images/lang/enUS.png';

import * as UserActions from '../../store/actions/user';
import * as GameActions from '../../store/actions/game';

import './styles.css';

function updateLanguage(user_lang, dispatch) {
  user_lang = user_lang === 'ptBR' ? 'enUS' : 'ptBR';

  dispatch(GameActions.handleUserPick(null, 'main'));

  dispatch(UserActions.switchLang(user_lang));

  // setCookie('language', user_lang, { path: '/' });
  
  return true;
}

const Header = ({ user, game, dispatch }) => {

  // const [cookie] = useCookies(['language', 'score']);
  const [cookie] = useCookies(['score']);

  const { user_lang, user_score } = user;

  // var language = cookie.language ? cookie.language : user_lang;
  var language = user_lang;

  var score = cookie.score ? cookie.score : user_score;

  const text = user.translation[language];

  var flags = {
    ptBR, enUS
  };
  var flag = flags[language];

  return (
    <>
      <div className="switch-language" onClick={() => updateLanguage(user_lang, dispatch)} >
        <img src={flag} alt="" />
      </div>
      <div className="container">
        <div className="game-title"><span>{text.Game.title}</span></div>
        <div className="game-scoreboard">
          <span className="scoreboard-text">{text.Game.score}</span><br></br>
          <span className="scoreboard-score">{score}</span>
        </div>
      </div>
    </>
  );
}

export default connect(state => ({ user: state.user, game: state.game }))(Header);