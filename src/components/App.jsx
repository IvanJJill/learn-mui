import React, { Component } from 'react';
import { Header, Footer } from './layouts';
import Content from './content';

import { muscles, excercises } from '../store';

class App extends Component {

  state = {
    excercises,
    category: 'all',
    selectedExcercise: {},
    editMode: false,
  }

  getExcercisesByMuscule = () => {
    const initialExcercises = muscles.reduce((excercises, category) => ({
      ...excercises,
      [category.id]: []
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
    this.setState(({ excercises }) => ({ selectedExcercise: excercises.find(ex => ex.id === id), editMode: false }));
  }

  handleExcerciseCreate = excercise => {
    excercise.id = excercise.title.toLowerCase().replace(/ /g, '-');
    this.setState({ excercises: [...this.state.excercises, excercise] });
  }

  handleDeleteExcercise = id => {
    const { selectedExcercise, excercises } = this.state;
    if (selectedExcercise.id === id) {
      this.setState({ selectedExcercise: {}, editMode: false });
    }
    this.setState({ excercises: excercises.filter(excercise => excercise.id !== id) });
  }

  handleEditExcercise = id => {
    this.setState(({ excercises }) => ({ selectedExcercise: excercises.find(ex => ex.id === id), editMode: true }));
  }

  handleSaveExcercise = excercise => {
    const { excercises } = this.state;
    this.setState({ excercises: [
      ...excercises.filter(ex => ex.id !== excercise.id),
      excercise
    ], 
    selectedExcercise: {},
    editMode: false
   });
  }

  render() {
    const excercises = this.getExcercisesByMuscule();
    const { category, selectedExcercise, editMode } = this.state;
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
          editMode={editMode}
          muscles={muscles}
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
