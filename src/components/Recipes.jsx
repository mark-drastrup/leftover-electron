import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Col } from "react-bootstrap";
import "../index.css";

class Recipes extends Component {
  render() {
    if (this.props.recipes.length !== 0) {
      const recipes = this.props.recipes.map((recipe, index) => {
        return (
          <Col sm={12} md={4} className="card__container">
            <Card key={index}>
              <Card.Img variant="top" src={recipe.recipe.image} alt="Food" />
              <Card.Body className="card__body">
                <div>
                  <Card.Title className="card__title">
                    {recipe.recipe.label}
                  </Card.Title>
                  {recipe.recipe.ingredientLines.map((ingredient, index) => (
                    <Card.Text key={index}>{ingredient}</Card.Text>
                  ))}
                </div>
                <a
                  href={recipe.recipe.url}
                  className="card__link"
                  target="_blank"
                >
                  Go to Recipe
                </a>
              </Card.Body>
            </Card>
          </Col>
        );
      });
      return <>{recipes}</>;
    }
    return <div></div>;
  }
}
const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => {
      dispatch({
        type: "FETCH_RECIPES",
        data: "Ramen"
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
