import { gql } from '@apollo/client';

export const QUERY_SINGLE_RECIPES = gql`
  query getRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      _id
      name
      ingredients {
        _id
        name
        quantity
      }
      instructions
      time
      calories
      rating
      createdBy {
        _id
        username
      }
    }
  }
`;

export const QUERY_RECIPE = gql`
  query getSingleRecipe {
    recipes {
      _id
      name
      
      createdBy {
        _id
        username
      }
      ingredients {
        _id
        name
      }
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
      rating
      createdBy {
        _id
        username
      }
    }
  }
}
`