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
};

export type Food = {
  __typename?: 'Food';
  foodstuff?: Maybe<FoodStaff>;
  qt?: Maybe<Scalars['Int']>;
};

export type FoodStaff = {
  __typename?: 'FoodStaff';
  id: Scalars['ID'];
  title: Scalars['String'];
  unit: Scalars['String'];
  calories?: Maybe<Scalars['Int']>;
  fats?: Maybe<Scalars['Int']>;
  carbs?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<UserInput>;
};

export type PostInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getUser?: Maybe<User>;
  authUser?: Maybe<User>;
  getFoodStaff?: Maybe<Array<Maybe<FoodStaff>>>;
  getRecipes?: Maybe<Array<Maybe<Recipe>>>;
};


export type QueryGetUserArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryAuthUserArgs = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  foods?: Maybe<Array<Maybe<Food>>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  token: Scalars['String'];
};

export type UserInput = {
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  age: Scalars['Int'];
  posts?: Maybe<Array<Maybe<PostInput>>>;
};

export type GetRecipesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRecipesQuery = (
  { __typename?: 'Query' }
  & { getRecipes?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Types.Recipe, 'id' | 'title' | 'image' | 'description'>
    & { foods?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Food' }
      & Pick<Types.Food, 'qt'>
      & { foodstuff?: Types.Maybe<(
        { __typename?: 'FoodStaff' }
        & Pick<Types.FoodStaff, 'id' | 'title' | 'unit' | 'calories' | 'fats' | 'carbs' | 'protein'>
      )> }
    )>>> }
  )>>> }
);


export const GetRecipesDocument = gql`
    query getRecipes {
  getRecipes {
    id
    title
    image
    description
    foods {
      foodstuff {
        id
        title
        unit
        calories
        fats
        carbs
        protein
      }
      qt
    }
  }
}
    `;

/**
 * __useGetRecipesQuery__
 *
 * To run a query within a React component, call `useGetRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecipesQuery(baseOptions?: Apollo.QueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
      }
export function useGetRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
        }
export type GetRecipesQueryHookResult = ReturnType<typeof useGetRecipesQuery>;
export type GetRecipesLazyQueryHookResult = ReturnType<typeof useGetRecipesLazyQuery>;
export type GetRecipesQueryResult = Apollo.QueryResult<GetRecipesQuery, GetRecipesQueryVariables>;