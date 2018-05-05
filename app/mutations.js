import { gql } from 'apollo-boost'

export const signUp = gql`
  mutation register($email: String!, $username: String!, $password: String!) {
    register(email: $email, username: $username, password: $password) {
      username
      id
      jwt
    }
  }
`

export const createCollection = gql`
  mutation createCollection(
    $name: String
    $description: String
    $owner: String
  ) {
    createCollection(name: $name, description: $description, owner: $owner) {
      id
      name
      description
    }
  }
`
