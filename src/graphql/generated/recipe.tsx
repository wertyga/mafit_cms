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
  testUpload?: Maybe<Scalars['String']>;
  uploadRecipe?: Maybe<RecipeWithTotal>;
  addFoodstuff?: Maybe<FoodStuffWithTotal>;
};


export type MutationTestUploadArgs = {
  file?: Maybe<Scalars['Upload']>;
};


export type MutationUploadRecipeArgs = {
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['Upload']>;
  food?: Maybe<Array<Maybe<FoodMutationRequest>>>;
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
  getRecipes?: Maybe<RecipeWithTotal>;
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
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  totalCount?: Maybe<Scalars['Int']>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  token: Scalars['String'];
};

export type RecipeFieldsFragment = (
  { __typename?: 'Recipe' }
  & Pick<Types.Recipe, 'id' | 'title' | 'image' | 'description'>
  & { foods?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Food' }
    & Pick<Types.Food, 'qt'>
    & { foodstuff?: Types.Maybe<(
      { __typename?: 'FoodStuff' }
      & Pick<Types.FoodStuff, 'id' | 'title' | 'unit'>
    )> }
  )>>> }
);

export type GetRecipesQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  search?: Types.Maybe<Types.Scalars['String']>;
  by?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetRecipesQuery = (
  { __typename?: 'Query' }
  & { getRecipes?: Types.Maybe<(
    { __typename?: 'RecipeWithTotal' }
    & Pick<Types.RecipeWithTotal, 'totalCount'>
    & { recipes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Recipe' }
      & RecipeFieldsFragment
    )>>> }
  )> }
);

export type UploadRecipeMutationVariables = Types.Exact<{
  image?: Types.Maybe<Types.Scalars['Upload']>;
  title: Types.Scalars['String'];
  description?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
  food?: Types.Maybe<Array<Types.Maybe<Types.FoodMutationRequest>> | Types.Maybe<Types.FoodMutationRequest>>;
}>;


export type UploadRecipeMutation = (
  { __typename?: 'Mutation' }
  & { uploadRecipe?: Types.Maybe<(
    { __typename?: 'RecipeWithTotal' }
    & Pick<Types.RecipeWithTotal, 'totalCount'>
    & { recipes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Recipe' }
      & RecipeFieldsFragment
    )>>> }
  )> }
);

export type TestUploadMutationVariables = Types.Exact<{
  file?: Types.Maybe<Types.Scalars['Upload']>;
}>;


export type TestUploadMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'testUpload'>
);

export const RecipeFieldsFragmentDoc = gql`
    fragment recipeFields on Recipe {
  id
  title
  image
  description
  foods {
    foodstuff {
      id
      title
      unit
    }
    qt
  }
}
    `;
export const GetRecipesDocument = gql`
    query getRecipes($offset: Int, $limit: Int, $search: String, $by: String) {
  getRecipes(offset: $offset, limit: $limit, search: $search, by: $by) {
    recipes {
      ...recipeFields
    }
    totalCount
  }
}
    ${RecipeFieldsFragmentDoc}`;

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
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      by: // value for 'by'
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
export const UploadRecipeDocument = gql`
    mutation uploadRecipe($image: Upload, $title: String!, $description: [String], $food: [FoodMutationRequest]) {
  uploadRecipe(
    image: $image
    title: $title
    description: $description
    food: $food
  ) {
    recipes {
      ...recipeFields
    }
    totalCount
  }
}
    ${RecipeFieldsFragmentDoc}`;
export type UploadRecipeMutationFn = Apollo.MutationFunction<UploadRecipeMutation, UploadRecipeMutationVariables>;

/**
 * __useUploadRecipeMutation__
 *
 * To run a mutation, you first call `useUploadRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadRecipeMutation, { data, loading, error }] = useUploadRecipeMutation({
 *   variables: {
 *      image: // value for 'image'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      food: // value for 'food'
 *   },
 * });
 */
export function useUploadRecipeMutation(baseOptions?: Apollo.MutationHookOptions<UploadRecipeMutation, UploadRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadRecipeMutation, UploadRecipeMutationVariables>(UploadRecipeDocument, options);
      }
export type UploadRecipeMutationHookResult = ReturnType<typeof useUploadRecipeMutation>;
export type UploadRecipeMutationResult = Apollo.MutationResult<UploadRecipeMutation>;
export type UploadRecipeMutationOptions = Apollo.BaseMutationOptions<UploadRecipeMutation, UploadRecipeMutationVariables>;
export const TestUploadDocument = gql`
    mutation testUpload($file: Upload) {
  testUpload(file: $file)
}
    `;
export type TestUploadMutationFn = Apollo.MutationFunction<TestUploadMutation, TestUploadMutationVariables>;

/**
 * __useTestUploadMutation__
 *
 * To run a mutation, you first call `useTestUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testUploadMutation, { data, loading, error }] = useTestUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useTestUploadMutation(baseOptions?: Apollo.MutationHookOptions<TestUploadMutation, TestUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TestUploadMutation, TestUploadMutationVariables>(TestUploadDocument, options);
      }
export type TestUploadMutationHookResult = ReturnType<typeof useTestUploadMutation>;
export type TestUploadMutationResult = Apollo.MutationResult<TestUploadMutation>;
export type TestUploadMutationOptions = Apollo.BaseMutationOptions<TestUploadMutation, TestUploadMutationVariables>;