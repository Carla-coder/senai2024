import React from 'react';

import { connect } from 'react-redux';

const Game= ({ game }) => {
  const RenderComponent = game.components[game.active_component];
  return (
    <>
      <RenderComponent />
    </>
  );
}
export default connect(state => ({ game: state.game }))(Game);