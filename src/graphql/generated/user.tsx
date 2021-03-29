import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Food = {
  __typename?: 'Food';
  foodstuff?: Maybe<FoodStuff>;
  qt?: Maybe<Scalars['Int']>;
};

export type FoodMutationRequest = {
  id: Scalars['ID'];
  qt: Scalars['Int'];
};

export type FoodStuff = {
  __typename?: 'FoodStuff';
  id: Scalars['ID'];
  title: Scalars['String'];
  unit: Scalars['String'];
  calories: Scalars['Int'];
  fats: Scalars['Int'];
  carbs: Scalars['Int'];
  protein: Scalars['Int'];
};

export type FoodStuffWithTotal = {
  __typename?: 'FoodStuffWithTotal';
  foodstuff?: Maybe<Array<Maybe<FoodStuff>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadRecipe?: Maybe<RecipeWithTotal>;
  addFoodstuff?: Maybe<FoodStuffWithTotal>;
};


export type MutationUploadRecipeArgs = {
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['Upload']>;
  foods?: Maybe<Array<Maybe<FoodMutationRequest>>>;
};


export type MutationAddFoodstuffArgs = {
  title: Scalars['String'];
  unit: Scalars['String'];
  calories: Scalars['Int'];
  fats: Scalars['Int'];
  carbs: Scalars['Int'];
  protein: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getUser?: Maybe<User>;
  authUser?: Maybe<User>;
  getFoodStuffs?: Maybe<FoodStuffWithTotal>;
  getRecipes?: Maybe<RecipesWithTotal>;
};


export type QueryGetUserArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryAuthUserArgs = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type QueryGetFoodStuffsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetRecipesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  foods?: Maybe<Array<Maybe<Food>>>;
};

export type RecipeInput = {
  __typename?: 'RecipeInput';
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['Upload']>;
};

export type RecipeWithTotal = {
  __typename?: 'RecipeWithTotal';
  recipe?: Maybe<Recipe>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RecipesWithTotal = {
  __typename?: 'RecipesWithTotal';
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  totalCount?: Maybe<Scalars['Int']>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  token: Scalars['String'];
};

export type GetUserQueryVariables = Types.Exact<{
  token: Types.Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'username' | 'token'>
  )> }
);

export type AuthUserQueryVariables = Types.Exact<{
  username: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type AuthUserQuery = (
  { __typename?: 'Query' }
  & { authUser?: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'username' | 'token'>
  )> }
);


export const GetUserDocument = gql`
    query getUser($token: String!) {
  getUser(token: $token) {
    id
    username
    token
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const AuthUserDocument = gql`
    query authUser($username: String!, $password: String!) {
  authUser(username: $username, password: $password) {
    id
    username
    token
  }
}
    `;

/**
 * __useAuthUserQuery__
 *
 * To run a query within a React component, call `useAuthUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthUserQuery(baseOptions: Apollo.QueryHookOptions<AuthUserQuery, AuthUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, options);
      }
export function useAuthUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthUserQuery, AuthUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, options);
        }
export type AuthUserQueryHookResult = ReturnType<typeof useAuthUserQuery>;
export type AuthUserLazyQueryHookResult = ReturnType<typeof useAuthUserLazyQuery>;
export type AuthUserQueryResult = Apollo.QueryResult<AuthUserQuery, AuthUserQueryVariables>;