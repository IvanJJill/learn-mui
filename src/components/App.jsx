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
    const initialExcercises = muscles.reduce((excercises, category) => ({
        ...excercises,
        [category.id]:[]
      }), {})

    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
        let { muscule } = excercise;
        excercises[muscule] = [...excercises[muscule], excercise];
        return excercises;
      }, initialExcercises)
    )
  }

  footerCategorySelect = (e, category) => {
    this.setState({ category })
  }

  onExcerciseSelect = (id) => {
    this.setState(({ excercises }) => ({ selectedExcercise: excercises.find(ex => ex.id === id) }));
  }

  handleExcerciseCreate = excercise => {
    excercise.id = excercise.title.toLowerCase().replace(/ /g, '-');
    this.setState({excercises: [...this.state.excercises, excercise]});
  }

  handleDeleteExcercise = id => {
    const {selectedExcercise, excercises } = this.state;
    if(selectedExcercise.id === id) {
      this.setState({selectedExcercise: {}});
    }
    this.setState({excercises: excercises.filter(excercise => excercise.id !== id )});
  }

  handleEditExcercise = id => {

  }

  handleSaveExcercise = excecrcise => {}

  render() {
    const excercises = this.getExcercisesByMuscule();
    const { category, selectedExcercise } = this.state;
    return (
      <>
        <Header 
        muscles={muscles}
        onExcerciseCreate={this.handleExcerciseCreate}
        />
        <Content
          excercises={excercises}
          category={category}
          selectedExcercise={selectedExcercise}
          onExcerciseSelect={this.onExcerciseSelect}
          onDeleteExcercise={this.handleDeleteExcercise}
          onEditExcercise={this.handleEditExcercise}
          onSaveExcercise={this.handleSaveExcercise}
        />
        <Footer
          muscles={muscles}
          onSelect={this.footerCategorySelect}
          category={category}
        />
      </>
    );
  }
}

export default App;
