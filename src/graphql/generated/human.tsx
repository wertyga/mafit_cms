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

export type DeleteFoodstufResponse = {
  __typename?: 'DeleteFoodstufResponse';
  foodstuff?: Maybe<FoodStuff>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteHumanResponse = {
  __typename?: 'DeleteHumanResponse';
  human?: Maybe<HumanType>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteRecipeResponse = {
  __typename?: 'DeleteRecipeResponse';
  recipe?: Maybe<Recipe>;
  totalCount?: Maybe<Scalars['Int']>;
};

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
  foodstuff?: Maybe<FoodStuff>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FoodStuffsWithTotal = {
  __typename?: 'FoodStuffsWithTotal';
  foodstuff?: Maybe<Array<Maybe<FoodStuff>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetHumanTypesResponse = {
  __typename?: 'GetHumanTypesResponse';
  humans?: Maybe<Array<Maybe<HumanType>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetTrainingsResponse = {
  __typename?: 'GetTrainingsResponse';
  trainings?: Maybe<Array<Maybe<Training>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HumanType = {
  __typename?: 'HumanType';
  id: Scalars['ID'];
  category: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadRecipe?: Maybe<RecipeWithTotal>;
  addFoodstuff?: Maybe<FoodStuffWithTotal>;
  deleteRecipe?: Maybe<DeleteRecipeResponse>;
  deleteFoodStuff?: Maybe<DeleteFoodstufResponse>;
  saveHumanType?: Maybe<SaveHumanTypeResponse>;
  deleteHumanType?: Maybe<DeleteHumanResponse>;
  saveTraining?: Maybe<SaveTrainingResponse>;
};


export type MutationUploadRecipeArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['Upload']>;
  foods?: Maybe<Array<Maybe<FoodMutationRequest>>>;
};


export type MutationAddFoodstuffArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  unit: Scalars['String'];
  calories: Scalars['Int'];
  fats: Scalars['Int'];
  carbs: Scalars['Int'];
  protein: Scalars['Int'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFoodStuffArgs = {
  id: Scalars['ID'];
};


export type MutationSaveHumanTypeArgs = {
  id?: Maybe<Scalars['ID']>;
  category: Scalars['String'];
};


export type MutationDeleteHumanTypeArgs = {
  id: Scalars['ID'];
};


export type MutationSaveTrainingArgs = {
  title: Scalars['String'];
  video?: Maybe<Scalars['Upload']>;
  humanCategory: Scalars['String'];
  meal?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getUser?: Maybe<User>;
  authUser?: Maybe<User>;
  getFoodStuffs?: Maybe<FoodStuffsWithTotal>;
  getRecipes?: Maybe<RecipesWithTotal>;
  getTrainings?: Maybe<GetTrainingsResponse>;
  getHumanTypes?: Maybe<GetHumanTypesResponse>;
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


export type QueryGetTrainingsArgs = {
  id?: Maybe<Scalars['ID']>;
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

export type SaveHumanTypeResponse = {
  __typename?: 'SaveHumanTypeResponse';
  human?: Maybe<HumanType>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaveTrainingResponse = {
  __typename?: 'SaveTrainingResponse';
  training?: Maybe<Training>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Training = {
  __typename?: 'Training';
  id: Scalars['ID'];
  humanCategory: Scalars['String'];
  title: Scalars['String'];
  video?: Maybe<Scalars['String']>;
  meal?: Maybe<Array<Maybe<FoodStuff>>>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  token: Scalars['String'];
};

export type GetHumanTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHumanTypesQuery = (
  { __typename?: 'Query' }
  & { getHumanTypes?: Types.Maybe<(
    { __typename?: 'GetHumanTypesResponse' }
    & Pick<Types.GetHumanTypesResponse, 'totalCount'>
    & { humans?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'HumanType' }
      & Pick<Types.HumanType, 'id' | 'category'>
    )>>> }
  )> }
);

export type SaveHumanTypeMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['ID']>;
  category: Types.Scalars['String'];
}>;


export type SaveHumanTypeMutation = (
  { __typename?: 'Mutation' }
  & { saveHumanType?: Types.Maybe<(
    { __typename?: 'SaveHumanTypeResponse' }
    & Pick<Types.SaveHumanTypeResponse, 'totalCount'>
    & { human?: Types.Maybe<(
      { __typename?: 'HumanType' }
      & Pick<Types.HumanType, 'id' | 'category'>
    )> }
  )> }
);

export type DeleteHumanTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteHumanTypeMutation = (
  { __typename?: 'Mutation' }
  & { deleteHumanType?: Types.Maybe<(
    { __typename?: 'DeleteHumanResponse' }
    & Pick<Types.DeleteHumanResponse, 'totalCount'>
    & { human?: Types.Maybe<(
      { __typename?: 'HumanType' }
      & Pick<Types.HumanType, 'id'>
    )> }
  )> }
);


export const GetHumanTypesDocument = gql`
    query getHumanTypes {
  getHumanTypes {
    humans {
      id
      category
    }
    totalCount
  }
}
    `;

/**
 * __useGetHumanTypesQuery__
 *
 * To run a query within a React component, call `useGetHumanTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHumanTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHumanTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHumanTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetHumanTypesQuery, GetHumanTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHumanTypesQuery, GetHumanTypesQueryVariables>(GetHumanTypesDocument, options);
      }
export function useGetHumanTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHumanTypesQuery, GetHumanTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHumanTypesQuery, GetHumanTypesQueryVariables>(GetHumanTypesDocument, options);
        }
export type GetHumanTypesQueryHookResult = ReturnType<typeof useGetHumanTypesQuery>;
export type GetHumanTypesLazyQueryHookResult = ReturnType<typeof useGetHumanTypesLazyQuery>;
export type GetHumanTypesQueryResult = Apollo.QueryResult<GetHumanTypesQuery, GetHumanTypesQueryVariables>;
export const SaveHumanTypeDocument = gql`
    mutation saveHumanType($id: ID, $category: String!) {
  saveHumanType(id: $id, category: $category) {
    human {
      id
      category
    }
    totalCount
  }
}
    `;
export type SaveHumanTypeMutationFn = Apollo.MutationFunction<SaveHumanTypeMutation, SaveHumanTypeMutationVariables>;

/**
 * __useSaveHumanTypeMutation__
 *
 * To run a mutation, you first call `useSaveHumanTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveHumanTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveHumanTypeMutation, { data, loading, error }] = useSaveHumanTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useSaveHumanTypeMutation(baseOptions?: Apollo.MutationHookOptions<SaveHumanTypeMutation, SaveHumanTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveHumanTypeMutation, SaveHumanTypeMutationVariables>(SaveHumanTypeDocument, options);
      }
export type SaveHumanTypeMutationHookResult = ReturnType<typeof useSaveHumanTypeMutation>;
export type SaveHumanTypeMutationResult = Apollo.MutationResult<SaveHumanTypeMutation>;
export type SaveHumanTypeMutationOptions = Apollo.BaseMutationOptions<SaveHumanTypeMutation, SaveHumanTypeMutationVariables>;
export const DeleteHumanTypeDocument = gql`
    mutation deleteHumanType($id: ID!) {
  deleteHumanType(id: $id) {
    human {
      id
    }
    totalCount
  }
}
    `;
export type DeleteHumanTypeMutationFn = Apollo.MutationFunction<DeleteHumanTypeMutation, DeleteHumanTypeMutationVariables>;

/**
 * __useDeleteHumanTypeMutation__
 *
 * To run a mutation, you first call `useDeleteHumanTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHumanTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHumanTypeMutation, { data, loading, error }] = useDeleteHumanTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteHumanTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHumanTypeMutation, DeleteHumanTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHumanTypeMutation, DeleteHumanTypeMutationVariables>(DeleteHumanTypeDocument, options);
      }
export type DeleteHumanTypeMutationHookResult = ReturnType<typeof useDeleteHumanTypeMutation>;
export type DeleteHumanTypeMutationResult = Apollo.MutationResult<DeleteHumanTypeMutation>;
export type DeleteHumanTypeMutationOptions = Apollo.BaseMutationOptions<DeleteHumanTypeMutation, DeleteHumanTypeMutationVariables>;