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

export type FoodInput = {
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
  foodstuffs?: Maybe<Array<Maybe<FoodStuff>>>;
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

export type MealInput = {
  type: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  foods?: Maybe<Array<Maybe<FoodInput>>>;
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
  foods?: Maybe<Array<Maybe<FoodInput>>>;
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
  video?: Maybe<Scalars['Upload']>;
  data?: Maybe<TrainingInput>;
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
  human?: Maybe<Scalars['String']>;
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

export type TrainingInput = {
  title: Scalars['String'];
  meal?: Maybe<TrainingMealInput>;
};

export type TrainingMeal = {
  __typename?: 'TrainingMeal';
  human: Scalars['ID'];
  meal?: Maybe<Array<Maybe<Meal>>>;
};

export type TrainingMealInput = {
  human: Scalars['ID'];
  meal?: Maybe<Array<Maybe<MealInput>>>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  token: Scalars['String'];
};

export type GetFoodStuffsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
}>;


export type GetFoodStuffsQuery = (
  { __typename?: 'Query' }
  & { getFoodStuffs?: Maybe<(
    { __typename?: 'FoodStuffsWithTotal' }
    & Pick<FoodStuffsWithTotal, 'totalCount'>
    & { foodstuffs?: Maybe<Array<Maybe<(
      { __typename?: 'FoodStuff' }
      & Pick<FoodStuff, 'id' | 'title' | 'unit' | 'calories' | 'fats' | 'carbs' | 'protein'>
    )>>> }
  )> }
);

export type AddFoodstuffMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  unit: Scalars['String'];
  calories: Scalars['Int'];
  fats: Scalars['Int'];
  carbs: Scalars['Int'];
  protein: Scalars['Int'];
}>;


export type AddFoodstuffMutation = (
  { __typename?: 'Mutation' }
  & { addFoodstuff?: Maybe<(
    { __typename?: 'FoodStuffWithTotal' }
    & Pick<FoodStuffWithTotal, 'totalCount'>
    & { foodstuff?: Maybe<(
      { __typename?: 'FoodStuff' }
      & Pick<FoodStuff, 'id' | 'title' | 'unit' | 'calories' | 'fats' | 'carbs' | 'protein'>
    )> }
  )> }
);

export type DeleteFoodStuffMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteFoodStuffMutation = (
  { __typename?: 'Mutation' }
  & { deleteFoodStuff?: Maybe<(
    { __typename?: 'DeleteFoodstufResponse' }
    & Pick<DeleteFoodstufResponse, 'totalCount'>
    & { foodstuff?: Maybe<(
      { __typename?: 'FoodStuff' }
      & Pick<FoodStuff, 'id'>
    )> }
  )> }
);

export type GetHumanTypesQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
}>;


export type GetHumanTypesQuery = (
  { __typename?: 'Query' }
  & { getHumanTypes?: Maybe<(
    { __typename?: 'GetHumanTypesResponse' }
    & Pick<GetHumanTypesResponse, 'totalCount'>
    & { humans?: Maybe<Array<Maybe<(
      { __typename?: 'HumanType' }
      & Pick<HumanType, 'id' | 'category'>
    )>>> }
  )> }
);

export type SaveHumanTypeMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  category: Scalars['String'];
}>;


export type SaveHumanTypeMutation = (
  { __typename?: 'Mutation' }
  & { saveHumanType?: Maybe<(
    { __typename?: 'SaveHumanTypeResponse' }
    & Pick<SaveHumanTypeResponse, 'totalCount'>
    & { human?: Maybe<(
      { __typename?: 'HumanType' }
      & Pick<HumanType, 'id' | 'category'>
    )> }
  )> }
);

export type DeleteHumanTypeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteHumanTypeMutation = (
  { __typename?: 'Mutation' }
  & { deleteHumanType?: Maybe<(
    { __typename?: 'DeleteHumanResponse' }
    & Pick<DeleteHumanResponse, 'totalCount'>
    & { human?: Maybe<(
      { __typename?: 'HumanType' }
      & Pick<HumanType, 'id'>
    )> }
  )> }
);

export type RecipeFieldsFragment = (
  { __typename?: 'Recipe' }
  & Pick<Recipe, 'id' | 'title' | 'image' | 'description'>
  & { foods?: Maybe<Array<Maybe<(
    { __typename?: 'Food' }
    & Pick<Food, 'qt'>
    & { foodstuff?: Maybe<(
      { __typename?: 'FoodStuff' }
      & Pick<FoodStuff, 'id' | 'title' | 'unit'>
    )> }
  )>>> }
);

export type GetRecipesQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
}>;


export type GetRecipesQuery = (
  { __typename?: 'Query' }
  & { getRecipes?: Maybe<(
    { __typename?: 'RecipesWithTotal' }
    & Pick<RecipesWithTotal, 'totalCount'>
    & { recipes?: Maybe<Array<Maybe<(
      { __typename?: 'Recipe' }
      & RecipeFieldsFragment
    )>>> }
  )> }
);

export type UploadRecipeMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['Upload']>;
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  foods?: Maybe<Array<Maybe<FoodInput>> | Maybe<FoodInput>>;
}>;


export type UploadRecipeMutation = (
  { __typename?: 'Mutation' }
  & { uploadRecipe?: Maybe<(
    { __typename?: 'RecipeWithTotal' }
    & Pick<RecipeWithTotal, 'totalCount'>
    & { recipe?: Maybe<(
      { __typename?: 'Recipe' }
      & RecipeFieldsFragment
    )> }
  )> }
);

export type DeleteRecipeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRecipeMutation = (
  { __typename?: 'Mutation' }
  & { deleteRecipe?: Maybe<(
    { __typename?: 'DeleteRecipeResponse' }
    & Pick<DeleteRecipeResponse, 'totalCount'>
    & { recipe?: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id'>
    )> }
  )> }
);

export type TrainingFieldsFragment = (
  { __typename?: 'Training' }
  & Pick<Training, 'id' | 'title' | 'video'>
  & { meal?: Maybe<(
    { __typename?: 'TrainingMeal' }
    & Pick<TrainingMeal, 'human'>
    & { meal?: Maybe<Array<Maybe<(
      { __typename?: 'Meal' }
      & Pick<Meal, 'type' | 'title' | 'description'>
      & { foods?: Maybe<Array<Maybe<(
        { __typename?: 'Food' }
        & Pick<Food, 'qt'>
        & { foodstuff?: Maybe<(
          { __typename?: 'FoodStuff' }
          & Pick<FoodStuff, 'id' | 'title' | 'unit'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type GetTrainingsQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
  human?: Maybe<Scalars['String']>;
}>;


export type GetTrainingsQuery = (
  { __typename?: 'Query' }
  & { getTrainings?: Maybe<(
    { __typename?: 'GetTrainingsResponse' }
    & Pick<GetTrainingsResponse, 'totalCount'>
    & { trainings?: Maybe<Array<Maybe<(
      { __typename?: 'Training' }
      & TrainingFieldsFragment
    )>>> }
  )> }
);

export type SaveTrainingMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  video?: Maybe<Scalars['Upload']>;
  data?: Maybe<TrainingInput>;
}>;


export type SaveTrainingMutation = (
  { __typename?: 'Mutation' }
  & { saveTraining?: Maybe<(
    { __typename?: 'SaveTrainingResponse' }
    & Pick<SaveTrainingResponse, 'totalCount'>
    & { training?: Maybe<(
      { __typename?: 'Training' }
      & TrainingFieldsFragment
    )> }
  )> }
);

export type DeleteTrainingMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTrainingMutation = (
  { __typename?: 'Mutation' }
  & { deleteTraining?: Maybe<(
    { __typename?: 'DeleteTrainingResponse' }
    & Pick<DeleteTrainingResponse, 'totalCount'>
    & { training?: Maybe<(
      { __typename?: 'Training' }
      & Pick<Training, 'id'>
    )> }
  )> }
);

export type GetUserQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'token'>
  )> }
);

export type AuthUserQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthUserQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'token'>
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
export const TrainingFieldsFragmentDoc = gql`
    fragment TrainingFields on Training {
  id
  title
  video
  meal {
    human
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
export const GetFoodStuffsDocument = gql`
    query getFoodStuffs($search: String, $by: String) {
  getFoodStuffs(search: $search, by: $by) {
    foodstuffs {
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
    mutation addFoodstuff($id: ID, $title: String!, $unit: String!, $calories: Int!, $fats: Int!, $carbs: Int!, $protein: Int!) {
  addFoodstuff(
    id: $id
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
 *      id: // value for 'id'
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
export const DeleteFoodStuffDocument = gql`
    mutation deleteFoodStuff($id: ID!) {
  deleteFoodStuff(id: $id) {
    foodstuff {
      id
    }
    totalCount
  }
}
    `;
export type DeleteFoodStuffMutationFn = Apollo.MutationFunction<DeleteFoodStuffMutation, DeleteFoodStuffMutationVariables>;

/**
 * __useDeleteFoodStuffMutation__
 *
 * To run a mutation, you first call `useDeleteFoodStuffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFoodStuffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFoodStuffMutation, { data, loading, error }] = useDeleteFoodStuffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFoodStuffMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFoodStuffMutation, DeleteFoodStuffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFoodStuffMutation, DeleteFoodStuffMutationVariables>(DeleteFoodStuffDocument, options);
      }
export type DeleteFoodStuffMutationHookResult = ReturnType<typeof useDeleteFoodStuffMutation>;
export type DeleteFoodStuffMutationResult = Apollo.MutationResult<DeleteFoodStuffMutation>;
export type DeleteFoodStuffMutationOptions = Apollo.BaseMutationOptions<DeleteFoodStuffMutation, DeleteFoodStuffMutationVariables>;
export const GetHumanTypesDocument = gql`
    query getHumanTypes($search: String, $by: String) {
  getHumanTypes(search: $search, by: $by) {
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
 *      search: // value for 'search'
 *      by: // value for 'by'
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
    mutation uploadRecipe($id: ID, $image: Upload, $title: String!, $description: [String], $foods: [FoodInput]) {
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
export const GetTrainingsDocument = gql`
    query getTrainings($id: ID, $offset: Int, $limit: Int, $search: String, $by: String, $human: String) {
  getTrainings(
    id: $id
    offset: $offset
    limit: $limit
    search: $search
    by: $by
    human: $human
  ) {
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
 *      human: // value for 'human'
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
    mutation saveTraining($id: ID, $video: Upload, $data: TrainingInput) {
  saveTraining(id: $id, video: $video, data: $data) {
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
 *      video: // value for 'video'
 *      data: // value for 'data'
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