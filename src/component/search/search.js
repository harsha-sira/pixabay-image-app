import React, {Component} from 'react';
import {MenuItem, TextField} from "material-ui";
import {SelectField} from "material-ui";

class Search extends Component {
    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <TextField hintText="search"/>
                <br/>
                <SelectField floatingLabelText="No of images"
                             value={this.state.value}
                             onChange={this.handleChange}>

                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={25} primaryText="25" />
                    <MenuItem value={50} primaryText="50" />

                </SelectField>
                <br/>
            </div>
        );
    }
}

export default Search;