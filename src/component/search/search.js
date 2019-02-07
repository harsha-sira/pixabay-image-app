import React, {Component} from 'react';
import {MenuItem, TextField} from "material-ui";
import {SelectField} from "material-ui";
import axios from 'axios';

class Search extends Component {
    state = {
        searchText : '',
        amount : 15,
        apiUrl : 'https://pixabay.com/api',
        apiKey: '11521190-f8fb0ba7b6a90b0500ae964e4',
        images: []
    };

    onTextChanged = (e) => {
          this.setState({ [e.target.name] : e.target.value } , () => {
              console.log('${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}');
              axios.get('${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}')
                  .then(res => this.setState({images : res.data.hits}))
                  .catch(err => console.log(err));
          });
    };

    onAmountChange = (e, index, value) => {
        this.setState({ amount: value});
    };

    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField
                    name="searchText"
                    value={ this.state.searchText }
                    onChange={this.onTextChanged }
                    floatingLabelText="Search for images"
                    fullWidth={true}
                />
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="No of images"
                    value={this.state.amount}
                    onChange={this.onAmountChange }>

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