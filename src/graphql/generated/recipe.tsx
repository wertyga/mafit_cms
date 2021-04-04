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

export type DeleteTrainingResponse = {
  __typename?: 'DeleteTrainingResponse';
  training?: Maybe<Training>;
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

export type Meal = {
  __typename?: 'Meal';
  id?: Maybe<Scalars['ID']>;
  type: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  foods?: Maybe<Array<Maybe<Food>>>;
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
  deleteTraining?: Maybe<DeleteTrainingResponse>;
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
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  video?: Maybe<Scalars['Upload']>;
  humanCategory: Scalars['String'];
  meal?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type MutationDeleteTrainingArgs = {
  id: Scalars['ID'];
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
  humanType?: Maybe<Scalars['String']>;
};


export type QueryGetHumanTypesArgs = {
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
  title: Scalars['String'];
  video?: Maybe<Scalars['String']>;
  meal?: Maybe<TrainingMeal>;
};

export type TrainingMeal = {
  __typename?: 'TrainingMeal';
  human?: Maybe<HumanType>;
  meal?: Maybe<Array<Maybe<Meal>>>;
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
    { __typename?: 'RecipesWithTotal' }
    & Pick<Types.RecipesWithTotal, 'totalCount'>
    & { recipes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Recipe' }
      & RecipeFieldsFragment
    )>>> }
  )> }
);

export type UploadRecipeMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['ID']>;
  image?: Types.Maybe<Types.Scalars['Upload']>;
  title: Types.Scalars['String'];
  description?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
  foods?: Types.Maybe<Array<Types.Maybe<Types.FoodMutationRequest>> | Types.Maybe<Types.FoodMutationRequest>>;
}>;


export type UploadRecipeMutation = (
  { __typename?: 'Mutation' }
  & { uploadRecipe?: Types.Maybe<(
    { __typename?: 'RecipeWithTotal' }
    & Pick<Types.RecipeWithTotal, 'totalCount'>
    & { recipe?: Types.Maybe<(
      { __typename?: 'Recipe' }
      & RecipeFieldsFragment
    )> }
  )> }
);

export type DeleteRecipeMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteRecipeMutation = (
  { __typename?: 'Mutation' }
  & { deleteRecipe?: Types.Maybe<(
    { __typename?: 'DeleteRecipeResponse' }
    & Pick<Types.DeleteRecipeResponse, 'totalCount'>
    & { recipe?: Types.Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Types.Recipe, 'id'>
    )> }
  )> }
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
    mutation uploadRecipe($id: ID, $image: Upload, $title: String!, $description: [String], $foods: [FoodMutationRequest]) {
  uploadRecipe(
    id: $id
    image: $image
    title: $title
    description: $description
    foods: $foods
  ) {
    recipe {
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
 *      id: // value for 'id'
 *      image: // value for 'image'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      foods: // value for 'foods'
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
export const DeleteRecipeDocument = gql`
    mutation deleteRecipe($id: ID!) {
  deleteRecipe(id: $id) {
    recipe {
      id
    }
    totalCount
  }
}
    `;
export type DeleteRecipeMutationFn = Apollo.MutationFunction<DeleteRecipeMutation, DeleteRecipeMutationVariables>;

/**
 * __useDeleteRecipeMutation__
 *
 * To run a mutation, you first call `useDeleteRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRecipeMutation, { data, loading, error }] = useDeleteRecipeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRecipeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRecipeMutation, DeleteRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRecipeMutation, DeleteRecipeMutationVariables>(DeleteRecipeDocument, options);
      }
export type DeleteRecipeMutationHookResult = ReturnType<typeof useDeleteRecipeMutation>;
export type DeleteRecipeMutationResult = Apollo.MutationResult<DeleteRecipeMutation>;
export type DeleteRecipeMutationOptions = Apollo.BaseMutationOptions<DeleteRecipeMutation, DeleteRecipeMutationVariables>;