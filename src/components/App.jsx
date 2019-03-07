import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Content from './content';
import 'typeface-roboto';

import { muscles, excercises } from '../store';

class App extends Component {

  state = { excercises }

  getExcercisesByMuscule = () => {
    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
        let { muscule } = excercise;
        excercises[muscule] = excercises[muscule]
          ? [...excercises[muscule], excercise]
          : [excercise];
        return excercises;
      }, {})
    )
  }

  render() {
    const excercises = this.getExcercisesByMuscule();
    return (
      <Fragment>
        <Header />
        <Content excercises={excercises}/>
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
