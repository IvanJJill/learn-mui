import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, category, onSelect }) => {

  const onCategorySelect = (e, index) => {
    let category = index === 0 ? 'all' : muscles[index - 1].id;
    return onSelect(e, category);
  }

  const index = category === 'all' ? 0 : muscles.map( m => m.id).indexOf(category) + 1;

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onCategorySelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label='All' />
        {!!muscles && muscles.map(muscleGroup => <Tab key={muscleGroup.id} label={muscleGroup.name} />)}
      </Tabs>
    </Paper>
  )
}


