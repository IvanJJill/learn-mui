import React, { Component, PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FormControl } from '@material-ui/core';

const emptyExcercise = {
    excercise: {
        title: '',
        description: '',
        muscule: '',
    }
}

export default class ExcerciseForm extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            excercise: props.excercise || emptyExcercise.excercise
        }
    }

    static getDerivedStateFromProps = ({ excercise }) => ( excercise ? { excercise } : null )
    
    handleChange = name => ({ target: { value } }) => {
        this.setState({
            excercise: {
                ...this.state.excercise,
                [name]: value
            }
        });
    };
    

    handleSubmit = e => {
        // TODO: form validation
        const { onSubmit, onFinish } = this.props,
            { excercise } = this.state
        e.preventDefault();
        onSubmit(excercise);
        this.setState(emptyExcercise)
        !!onFinish && onFinish();
    }

    render() {
        const { excercise: { title, description, muscule } } = this.state,
            { muscles, classes } = this.props;
        return (
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField
                    id="standard-name"
                    label="Excercise Name"
                    className={classes.formControl}
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                />
                <br />
                <TextField
                    id="standard-name"
                    label="Description"
                    className={classes.formControl}
                    multiline
                    rowsMax="4"
                    value={description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                />
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="muscule">Muscle group</InputLabel>
                    <Select
                        value={muscule}
                        onChange={this.handleChange('muscule')}
                    >
                        {muscles.map(muscle =>
                            <MenuItem value={muscle.id} key={muscle.id}>{muscle.name}</MenuItem>
                        )}
                    </Select>

                    {!!this.props.actions && this.props.actions(this.state)}

                </FormControl>
            </form>
        )
    }
}