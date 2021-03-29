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

export type GetFoodStuffsQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  search?: Types.Maybe<Types.Scalars['String']>;
  by?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetFoodStuffsQuery = (
  { __typename?: 'Query' }
  & { getFoodStuffs?: Types.Maybe<(
    { __typename?: 'FoodStuffWithTotal' }
    & Pick<Types.FoodStuffWithTotal, 'totalCount'>
    & { foodstuff?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'FoodStuff' }
      & Pick<Types.FoodStuff, 'id' | 'title' | 'unit' | 'calories' | 'fats' | 'carbs' | 'protein'>
    )>>> }
  )> }
);

export type AddFoodstuffMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  unit: Types.Scalars['String'];
  calories: Types.Scalars['Int'];
  fats: Types.Scalars['Int'];
  carbs: Types.Scalars['Int'];
  protein: Types.Scalars['Int'];
}>;


export type AddFoodstuffMutation = (
  { __typename?: 'Mutation' }
  & { addFoodstuff?: Types.Maybe<(
    { __typename?: 'FoodStuffWithTotal' }
    & Pick<Types.FoodStuffWithTotal, 'totalCount'>
    & { foodstuff?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'FoodStuff' }
      & Pick<Types.FoodStuff, 'id' | 'title' | 'unit' | 'calories' | 'fats' | 'carbs' | 'protein'>
    )>>> }
  )> }
);


export const GetFoodStuffsDocument = gql`
    query getFoodStuffs($offset: Int, $limit: Int, $search: String, $by: String) {
  getFoodStuffs(offset: $offset, limit: $limit, search: $search, by: $by) {
    foodstuff {
      id
      title
      unit
      calories
      fats
      carbs
      protein
    }
    totalCount
  }
}
    `;

/**
 * __useGetFoodStuffsQuery__
 *
 * To run a query within a React component, call `useGetFoodStuffsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFoodStuffsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFoodStuffsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      by: // value for 'by'
 *   },
 * });
 */
export function useGetFoodStuffsQuery(baseOptions?: Apollo.QueryHookOptions<GetFoodStuffsQuery, GetFoodStuffsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFoodStuffsQuery, GetFoodStuffsQueryVariables>(GetFoodStuffsDocument, options);
      }
export function useGetFoodStuffsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFoodStuffsQuery, GetFoodStuffsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFoodStuffsQuery, GetFoodStuffsQueryVariables>(GetFoodStuffsDocument, options);
        }
export type GetFoodStuffsQueryHookResult = ReturnType<typeof useGetFoodStuffsQuery>;
export type GetFoodStuffsLazyQueryHookResult = ReturnType<typeof useGetFoodStuffsLazyQuery>;
export type GetFoodStuffsQueryResult = Apollo.QueryResult<GetFoodStuffsQuery, GetFoodStuffsQueryVariables>;
export const AddFoodstuffDocument = gql`
    mutation addFoodstuff($title: String!, $unit: String!, $calories: Int!, $fats: Int!, $carbs: Int!, $protein: Int!) {
  addFoodstuff(
    title: $title
    unit: $unit
    calories: $calories
    fats: $fats
    carbs: $carbs
    protein: $protein
  ) {
    foodstuff {
      id
      title
      unit
      calories
      fats
      carbs
      protein
    }
    totalCount
  }
}
    `;
export type AddFoodstuffMutationFn = Apollo.MutationFunction<AddFoodstuffMutation, AddFoodstuffMutationVariables>;

/**
 * __useAddFoodstuffMutation__
 *
 * To run a mutation, you first call `useAddFoodstuffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFoodstuffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFoodstuffMutation, { data, loading, error }] = useAddFoodstuffMutation({
 *   variables: {
 *      title: // value for 'title'
 *      unit: // value for 'unit'
 *      calories: // value for 'calories'
 *      fats: // value for 'fats'
 *      carbs: // value for 'carbs'
 *      protein: // value for 'protein'
 *   },
 * });
 */
export function useAddFoodstuffMutation(baseOptions?: Apollo.MutationHookOptions<AddFoodstuffMutation, AddFoodstuffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFoodstuffMutation, AddFoodstuffMutationVariables>(AddFoodstuffDocument, options);
      }
export type AddFoodstuffMutationHookResult = ReturnType<typeof useAddFoodstuffMutation>;
export type AddFoodstuffMutationResult = Apollo.MutationResult<AddFoodstuffMutation>;
export type AddFoodstuffMutationOptions = Apollo.BaseMutationOptions<AddFoodstuffMutation, AddFoodstuffMutationVariables>;