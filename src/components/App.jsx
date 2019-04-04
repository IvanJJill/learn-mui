import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Content from './content';
import 'typeface-roboto';

import { muscles, excercises } from '../store';

class App extends Component {

  state = {
    excercises,
    category: 'all',
    selectedExcercise: {}
  }

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

  footerCategorySelect = (e, category) => {
    this.setState({ category })
  }

  onExcerciseSelect = (id) => {
    this.setState(({ excercises }) => ({ selectedExcercise: excercises.find(ex => ex.id === id) }));
  }

  handleExcerciseCreate = excercise => {
    excercise.id = excercise.title.split(' ').join('_');
    const excercises = [...this.state.excercises, excercise];
    this.setState({excercises})
  }

  render() {
    const excercises = this.getExcercisesByMuscule();
    const { category, selectedExcercise } = this.state;
    return (
      <Fragment>
        <Header 
        muscles={muscles}
        onExcerciseCreate={this.handleExcerciseCreate}
        />
        <Content
          excercises={excercises}
          category={category}
          selectedExcercise={selectedExcercise}
          onExcerciseSelect={this.onExcerciseSelect}
        />
        <Footer
          muscles={muscles}
          onSelect={this.footerCategorySelect}
          category={category}
        />
      </Fragment>
    );
  }
}

export default App;
