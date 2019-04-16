import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  footer: {
    marginTop: '1em'
  }
})

const Footer = ({ muscles, category, onSelect, width, classes }) => {

  const onCategorySelect = (e, index) => {
    let category = index === 0 ? 'all' : muscles[index - 1].id;
    return onSelect(e, category);
  }

  const index = category === 'all' ? 0 : muscles.map(m => m.id).indexOf(category) + 1;
  const xs = width === 'xs'
  return (
    <Paper className={classes.footer}>
      <Tabs
        value={index}
        onChange={onCategorySelect}
        indicatorColor="primary"
        textColor="primary"
        variant={xs ? "scrollable" : "standard"}
        centered={!xs}
        scrollButtons={xs ? "on" : "auto"}
      >
        <Tab label='All' />
        {!!muscles && muscles.map(muscleGroup => <Tab key={muscleGroup.id} label={muscleGroup.name} />)}
      </Tabs>
    </Paper>
  )
}


export default withStyles(styles)(withWidth()(Footer))