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

export type GetFoodStaffQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFoodStaffQuery = (
  { __typename?: 'Query' }
  & { getFoodStaff?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'FoodStaff' }
    & Pick<Types.FoodStaff, 'id' | 'title' | 'unit' | 'calories' | 'fats' | 'carbs' | 'protein'>
  )>>> }
);


export const GetFoodStaffDocument = gql`
    query getFoodStaff {
  getFoodStaff {
    id
    title
    unit
    calories
    fats
    carbs
    protein
  }
}
    `;

/**
 * __useGetFoodStaffQuery__
 *
 * To run a query within a React component, call `useGetFoodStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFoodStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFoodStaffQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFoodStaffQuery(baseOptions?: Apollo.QueryHookOptions<GetFoodStaffQuery, GetFoodStaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFoodStaffQuery, GetFoodStaffQueryVariables>(GetFoodStaffDocument, options);
      }
export function useGetFoodStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFoodStaffQuery, GetFoodStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFoodStaffQuery, GetFoodStaffQueryVariables>(GetFoodStaffDocument, options);
        }
export type GetFoodStaffQueryHookResult = ReturnType<typeof useGetFoodStaffQuery>;
export type GetFoodStaffLazyQueryHookResult = ReturnType<typeof useGetFoodStaffLazyQuery>;
export type GetFoodStaffQueryResult = Apollo.QueryResult<GetFoodStaffQuery, GetFoodStaffQueryVariables>;