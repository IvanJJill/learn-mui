import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles }) => {
  return (
    <Paper>
      <Tabs
        value={0}
        onChange={()=>{}}
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


