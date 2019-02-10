import React, { Component } from "react";
import { MenuItem, TextField } from "material-ui";
import { SelectField } from "material-ui";
import axios from "axios";
import ImageResults from "../imageResults/imageResults";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11521190-f8fb0ba7b6a90b0500ae964e4",
    images: []
  };

  onTextChanged = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, this.queryResult(val, this.state.amount));
  };

  onAmountChange = (e, index, value) => {
    this.setState({ 'amount': value });
    this.setState({ 'searchText' : this.state.searchText }, this.queryResult(this.state.searchText, value));
  };

  queryResult = (val, count) => {
    if (val === "") {
      this.setState({ images: [] });
    } else {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${count}`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChanged}
          floatingLabelText="Search for images"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="No of images"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={25} primaryText="25" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
