import React from 'react';
import Title from './Title';
import '../App.css';

class missoes extends React.Component {
  render() {
    return (
      <div data-testid="missions"><Title headline="Missões" /></div>
    );
  }
}
export default missoes;
