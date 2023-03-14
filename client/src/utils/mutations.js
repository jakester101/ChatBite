import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe($name: String!, $ingredients: [String]!, $instructions: String!, $calories: Int!, $prepTime: Int!, $image: String!) {
    addRecipe(name: $name, ingredients: $ingredients, instructions: $instructions, calories: $calories, prepTime: $prepTime, image: $image) {
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
`
export const REMOVE_RECIPE = gql`
  mutation Mutation($recipeId: ID!) {
    removeRecipe(recipeId: $recipeId) {
      _id
    }
  }
`