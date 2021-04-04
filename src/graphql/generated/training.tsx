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

export type TrainingFieldsFragment = (
  { __typename?: 'Training' }
  & Pick<Types.Training, 'id' | 'title' | 'video'>
  & { meal?: Types.Maybe<(
    { __typename?: 'TrainingMeal' }
    & { human?: Types.Maybe<(
      { __typename?: 'HumanType' }
      & Pick<Types.HumanType, 'id' | 'category'>
    )>, meal?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Meal' }
      & Pick<Types.Meal, 'type' | 'title' | 'description'>
      & { foods?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Food' }
        & Pick<Types.Food, 'qt'>
        & { foodstuff?: Types.Maybe<(
          { __typename?: 'FoodStuff' }
          & Pick<Types.FoodStuff, 'id' | 'title' | 'unit'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type GetTrainingsQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['ID']>;
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  search?: Types.Maybe<Types.Scalars['String']>;
  by?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetTrainingsQuery = (
  { __typename?: 'Query' }
  & { getTrainings?: Types.Maybe<(
    { __typename?: 'GetTrainingsResponse' }
    & Pick<Types.GetTrainingsResponse, 'totalCount'>
    & { trainings?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Training' }
      & TrainingFieldsFragment
    )>>> }
  )> }
);

export type SaveTrainingMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['ID']>;
  title: Types.Scalars['String'];
  video?: Types.Maybe<Types.Scalars['Upload']>;
  humanCategory: Types.Scalars['String'];
  meal?: Types.Maybe<Array<Types.Maybe<Types.Scalars['ID']>> | Types.Maybe<Types.Scalars['ID']>>;
}>;


export type SaveTrainingMutation = (
  { __typename?: 'Mutation' }
  & { saveTraining?: Types.Maybe<(
    { __typename?: 'SaveTrainingResponse' }
    & Pick<Types.SaveTrainingResponse, 'totalCount'>
    & { training?: Types.Maybe<(
      { __typename?: 'Training' }
      & TrainingFieldsFragment
    )> }
  )> }
);

export type DeleteTrainingMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteTrainingMutation = (
  { __typename?: 'Mutation' }
  & { deleteTraining?: Types.Maybe<(
    { __typename?: 'DeleteTrainingResponse' }
    & Pick<Types.DeleteTrainingResponse, 'totalCount'>
    & { training?: Types.Maybe<(
      { __typename?: 'Training' }
      & Pick<Types.Training, 'id'>
    )> }
  )> }
);

export const TrainingFieldsFragmentDoc = gql`
    fragment TrainingFields on Training {
  id
  title
  video
  meal {
    human {
      id
      category
    }
    meal {
      type
      title
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
  }
}
    `;
export const GetTrainingsDocument = gql`
    query getTrainings($id: ID, $offset: Int, $limit: Int, $search: String, $by: String) {
  getTrainings(id: $id, offset: $offset, limit: $limit, search: $search, by: $by) {
    trainings {
      ...TrainingFields
    }
    totalCount
  }
}
    ${TrainingFieldsFragmentDoc}`;

/**
 * __useGetTrainingsQuery__
 *
 * To run a query within a React component, call `useGetTrainingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainingsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      by: // value for 'by'
 *   },
 * });
 */
export function useGetTrainingsQuery(baseOptions?: Apollo.QueryHookOptions<GetTrainingsQuery, GetTrainingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainingsQuery, GetTrainingsQueryVariables>(GetTrainingsDocument, options);
      }
export function useGetTrainingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainingsQuery, GetTrainingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainingsQuery, GetTrainingsQueryVariables>(GetTrainingsDocument, options);
        }
export type GetTrainingsQueryHookResult = ReturnType<typeof useGetTrainingsQuery>;
export type GetTrainingsLazyQueryHookResult = ReturnType<typeof useGetTrainingsLazyQuery>;
export type GetTrainingsQueryResult = Apollo.QueryResult<GetTrainingsQuery, GetTrainingsQueryVariables>;
export const SaveTrainingDocument = gql`
    mutation saveTraining($id: ID, $title: String!, $video: Upload, $humanCategory: String!, $meal: [ID]) {
  saveTraining(
    id: $id
    title: $title
    video: $video
    humanCategory: $humanCategory
    meal: $meal
  ) {
    training {
      ...TrainingFields
    }
    totalCount
  }
}
    ${TrainingFieldsFragmentDoc}`;
export type SaveTrainingMutationFn = Apollo.MutationFunction<SaveTrainingMutation, SaveTrainingMutationVariables>;

/**
 * __useSaveTrainingMutation__
 *
 * To run a mutation, you first call `useSaveTrainingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTrainingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTrainingMutation, { data, loading, error }] = useSaveTrainingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      video: // value for 'video'
 *      humanCategory: // value for 'humanCategory'
 *      meal: // value for 'meal'
 *   },
 * });
 */
export function useSaveTrainingMutation(baseOptions?: Apollo.MutationHookOptions<SaveTrainingMutation, SaveTrainingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTrainingMutation, SaveTrainingMutationVariables>(SaveTrainingDocument, options);
      }
export type SaveTrainingMutationHookResult = ReturnType<typeof useSaveTrainingMutation>;
export type SaveTrainingMutationResult = Apollo.MutationResult<SaveTrainingMutation>;
export type SaveTrainingMutationOptions = Apollo.BaseMutationOptions<SaveTrainingMutation, SaveTrainingMutationVariables>;
export const DeleteTrainingDocument = gql`
    mutation deleteTraining($id: ID!) {
  deleteTraining(id: $id) {
    training {
      id
    }
    totalCount
  }
}
    `;
export type DeleteTrainingMutationFn = Apollo.MutationFunction<DeleteTrainingMutation, DeleteTrainingMutationVariables>;

/**
 * __useDeleteTrainingMutation__
 *
 * To run a mutation, you first call `useDeleteTrainingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTrainingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTrainingMutation, { data, loading, error }] = useDeleteTrainingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTrainingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTrainingMutation, DeleteTrainingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTrainingMutation, DeleteTrainingMutationVariables>(DeleteTrainingDocument, options);
      }
export type DeleteTrainingMutationHookResult = ReturnType<typeof useDeleteTrainingMutation>;
export type DeleteTrainingMutationResult = Apollo.MutationResult<DeleteTrainingMutation>;
export type DeleteTrainingMutationOptions = Apollo.BaseMutationOptions<DeleteTrainingMutation, DeleteTrainingMutationVariables>;