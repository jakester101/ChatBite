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
  mutation addRecipe($name: String!, $ingredients: String!, $instructions: String!, $calories: Int!, $prepTime: Int!, $image: String, $createdBy: String, $isPublic: Boolean) {
    addRecipe(name: $name, ingredients: $ingredients, instructions: $instructions, calories: $calories, prepTime: $prepTime, image: $image, createdBy: $createdBy, isPublic: $isPublic) {
      name
      ingredients
      instructions
      calories
      prepTime
      rating
      image
      createdAt
      createdBy
      isPublic
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation Mutation($recipeId: ID!) {
    removeRecipe(recipeId: $recipeId) {
      _id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      user {
        _id
        username
      }
    }
  }
`