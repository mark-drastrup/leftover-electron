import React, { Component } from "react";
import { connect } from "react-redux";
import { FormControl } from "react-bootstrap";
import axios from "axios";

class SearchBar extends Component {
  keyPress = e => {
    if (e.keyCode === 13) {
      this.props.fetchRecipes(this.props.query);
    }
  };

  render() {
    return (
      <>
        <FormControl
          className="search__input"
          type="text"
          onKeyDown={this.keyPress}
          onChange={this.props.onChange}
          value={this.props.query}
        />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    query: state.query
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: async query => {
      const result = await axios.post("/api/recipes", { query: query });
      dispatch({
        type: "FETCH_RECIPES",
        data: result.data.hits
      });
    },
    onChange: e => {
      dispatch({
        type: "UPDATE_QUERY",
        data: e.target.value
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
