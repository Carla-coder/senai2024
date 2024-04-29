import React from 'react';

import { connect } from 'react-redux';

import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import rulesenUS from '../../assets/images/lang/rulesenUS.svg';
import rulesptBR from '../../assets/images/lang/rulesptBR.svg';

import './styles.css';

Modal.setAppElement('#root');

const Footer = ({ user }) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { user_lang } = user;

  var language = user_lang;

  const text = user.translation[language];

  var rules = {
    ptBR: rulesptBR,
    enUS: rulesenUS
  };

  var rule = rules[language];

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="rules-container" onClick={openModal}>
        <span>{text.Game.rules}</span>
      </div>

      <a href="https://github.com/Jorgen-Jr/jokenpo-react" target="_blank" rel="noopener noreferrer">
        <div className="github-link">
          <span> <FontAwesomeIcon icon={faGithub} /> </span> <span>Made with <span role="img" aria-label="heart emoji" style={{ color: "red" }}>❤️</span> by Jorge</span>
        </div>
      </a>

      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel={text.Rules.title}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modalHeader">
          <h1>{text.Rules.title} <div className="rules-close" onClick={closeModal}><span><FontAwesomeIcon icon={faTimes} /></span></div> </h1>

        </div>
        <div className="modalBody">
          <img src={rule} alt={text.Rules.imgAlt} />
        </div>
      </Modal>
    </>
  );
}
export default connect(state => ({ user: state.user }))(Footer);