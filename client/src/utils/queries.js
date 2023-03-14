import { gql } from '@apollo/client';

export const QUERY_SINGLE_RECIPE = gql`
  query getSingleRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      _id
      name
      ingredients {
        _id
        name
        quantity
      }
      instructions
      calories
      prepTime
      rating
      image
      createdAt
      createdBy
    }
  }
`;

export const QUERY_RECIPES = gql`
  query getRecipes {
    recipes {
      _id
      name
      ingredients {
        _id
        name
        quantity
      }
      instructions
      calories
      prepTime
      rating
      image
      createdAt
      createdBy
    }
  }
`;

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    recipes {
      _id
      name
      instructions
      ingredients {
        _id
        name
        quantity
      }
      calories
      prepTime
      rating
      createdAt
      createdBy
    }
  }
}
`