import React, { Component } from 'react';



class App extends Component {
  constructor(){
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  

  handleClickOne() {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne +1,
    }))
  }

  handleClickTwo() {
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }))
  }

  handleClickThree() {
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }))
  }
    
  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree} = this.state;
    return (
      <div>
        <button type= 'button' onClick={ this.handleClickOne }>{ `Cliques botão 1: ${clicksBtnOne}`}</button>

        <button type='button' onClick={ this.handleClickTwo }>{`Cliques Botão 2: ${clicksBtnTwo}`}</button>
        
        <button  type='button' onClick={ this.handleClickThree }>{`Cliques botão 3: ${clicksBtnThree}`}</button>
      </div>
    );
  }
}

export default App;
