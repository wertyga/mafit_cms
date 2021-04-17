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

export type DayFood = {
  __typename?: 'DayFood';
  id: Scalars['ID'];
  title: Scalars['String'];
  meal?: Maybe<Array<Maybe<DayFoodMeal>>>;
};

export type DayFoodInput = {
  title: Scalars['String'];
  meal?: Maybe<Array<Maybe<DayFoodMealInput>>>;
};

export type DayFoodMeal = {
  __typename?: 'DayFoodMeal';
  human?: Maybe<HumanType>;
  meal?: Maybe<Array<Maybe<Meal>>>;
};

export type DayFoodMealInput = {
  human: Scalars['ID'];
  meal?: Maybe<Array<Maybe<MealInput>>>;
};

export type DeleteDayFoodResponse = {
  __typename?: 'DeleteDayFoodResponse';
  dayFood?: Maybe<DayFood>;
  totalCount?: Maybe<Scalars['Int']>;
};

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

export type DeleteMarathonResponse = {
  __typename?: 'DeleteMarathonResponse';
  marathon?: Maybe<Marathon>;
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

export type GetDayFoodsResponse = {
  __typename?: 'GetDayFoodsResponse';
  dayFoods?: Maybe<Array<Maybe<DayFood>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetHumanTypesResponse = {
  __typename?: 'GetHumanTypesResponse';
  humans?: Maybe<Array<Maybe<HumanType>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetMarathonResponse = {
  __typename?: 'GetMarathonResponse';
  marathons?: Maybe<Array<Maybe<Marathon>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetTrainingResponse = {
  __typename?: 'GetTrainingResponse';
  trainings?: Maybe<Array<Maybe<Training>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HumanType = {
  __typename?: 'HumanType';
  id: Scalars['ID'];
  category: Scalars['String'];
};

export type Marathon = {
  __typename?: 'Marathon';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dateStart: Scalars['String'];
  dateEnd: Scalars['String'];
  trainings: Array<Maybe<Training>>;
  progressIn: Scalars['Int'];
};

export type Meal = {
  __typename?: 'Meal';
  id?: Maybe<Scalars['ID']>;
  type: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};

export type MealInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['ID'];
  recipes: Array<Maybe<Scalars['ID']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadRecipe?: Maybe<RecipeWithTotal>;
  addFoodstuff?: Maybe<FoodStuffWithTotal>;
  deleteRecipe?: Maybe<DeleteRecipeResponse>;
  deleteFoodStuff?: Maybe<DeleteFoodstufResponse>;
  saveHumanType?: Maybe<SaveHumanTypeResponse>;
  deleteHumanType?: Maybe<DeleteHumanResponse>;
  saveDayFood?: Maybe<SaveDayFoodResponse>;
  deleteDayFood?: Maybe<DeleteDayFoodResponse>;
  saveTraining?: Maybe<SaveTrainingResponse>;
  deleteTraining?: Maybe<DeleteTrainingResponse>;
  saveMarathon?: Maybe<SaveMarathonResponse>;
  deleteMarathon?: Maybe<DeleteMarathonResponse>;
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


export type MutationSaveDayFoodArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<DayFoodInput>;
};


export type MutationDeleteDayFoodArgs = {
  id: Scalars['ID'];
};


export type MutationSaveTrainingArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  video: Scalars['Upload'];
  dayFood?: Maybe<Scalars['ID']>;
};


export type MutationDeleteTrainingArgs = {
  id: Scalars['ID'];
};


export type MutationSaveMarathonArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  trainings: Array<Maybe<Scalars['ID']>>;
  dateStart: Scalars['String'];
  dateEnd: Scalars['String'];
  progressIn: Scalars['Int'];
};


export type MutationDeleteMarathonArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getUser?: Maybe<User>;
  authUser?: Maybe<User>;
  getFoodStuffs?: Maybe<FoodStuffsWithTotal>;
  getRecipes?: Maybe<RecipesWithTotal>;
  getLightRecipesList?: Maybe<RecipesWithTotal>;
  getDayFoods?: Maybe<GetDayFoodsResponse>;
  getDayFoodsLightList?: Maybe<GetDayFoodsResponse>;
  getHumanTypes?: Maybe<GetHumanTypesResponse>;
  getTrainings?: Maybe<GetTrainingResponse>;
  getLightTrainingList?: Maybe<GetTrainingResponse>;
  getMarathons?: Maybe<GetMarathonResponse>;
  marathon?: Maybe<Marathon>;
  dayFood?: Maybe<Array<Maybe<Meal>>>;
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
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetDayFoodsArgs = {
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


export type QueryGetTrainingsArgs = {
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryGetMarathonsArgs = {
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
};


export type QueryMarathonArgs = {
  id: Scalars['String'];
};


export type QueryDayFoodArgs = {
  dayFoodId: Scalars['ID'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  foods?: Maybe<Array<Maybe<Food>>>;
  pfc?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type SaveDayFoodResponse = {
  __typename?: 'SaveDayFoodResponse';
  dayFood?: Maybe<DayFood>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaveHumanTypeResponse = {
  __typename?: 'SaveHumanTypeResponse';
  human?: Maybe<HumanType>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaveMarathonResponse = {
  __typename?: 'SaveMarathonResponse';
  marathon?: Maybe<Marathon>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Training = {
  __typename?: 'Training';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  video: Scalars['String'];
  dayFood?: Maybe<DayFood>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  token: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type SaveTrainingResponse = {
  __typename?: 'saveTrainingResponse';
  training?: Maybe<Training>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DayFoodFieldsFragment = (
  { __typename?: 'DayFood' }
  & Pick<DayFood, 'id' | 'title'>
  & { meal?: Maybe<Array<Maybe<(
    { __typename?: 'DayFoodMeal' }
    & { human?: Maybe<(
      { __typename?: 'HumanType' }
      & Pick<HumanType, 'id' | 'category'>
    )>, meal?: Maybe<Array<Maybe<(
      { __typename?: 'Meal' }
      & Pick<Meal, 'type' | 'title' | 'description'>
      & { recipes?: Maybe<Array<Maybe<(
        { __typename?: 'Recipe' }
        & Pick<Recipe, 'id' | 'title'>
      )>>> }
    )>>> }
  )>>> }
);

export type GetDayFoodsLightListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDayFoodsLightListQuery = (
  { __typename?: 'Query' }
  & { getDayFoodsLightList?: Maybe<(
    { __typename?: 'GetDayFoodsResponse' }
    & { dayFoods?: Maybe<Array<Maybe<(
      { __typename?: 'DayFood' }
      & Pick<DayFood, 'id' | 'title'>
    )>>> }
  )> }
);

export type GetDayFoodsQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
}>;


export type GetDayFoodsQuery = (
  { __typename?: 'Query' }
  & { getDayFoods?: Maybe<(
    { __typename?: 'GetDayFoodsResponse' }
    & Pick<GetDayFoodsResponse, 'totalCount'>
    & { dayFoods?: Maybe<Array<Maybe<(
      { __typename?: 'DayFood' }
      & DayFoodFieldsFragment
    )>>> }
  )> }
);

export type SaveDayFoodMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<DayFoodInput>;
}>;


export type SaveDayFoodMutation = (
  { __typename?: 'Mutation' }
  & { saveDayFood?: Maybe<(
    { __typename?: 'SaveDayFoodResponse' }
    & Pick<SaveDayFoodResponse, 'totalCount'>
    & { dayFood?: Maybe<(
      { __typename?: 'DayFood' }
      & DayFoodFieldsFragment
    )> }
  )> }
);

export type DeleteDayFoodMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteDayFoodMutation = (
  { __typename?: 'Mutation' }
  & { deleteDayFood?: Maybe<(
    { __typename?: 'DeleteDayFoodResponse' }
    & Pick<DeleteDayFoodResponse, 'totalCount'>
    & { dayFood?: Maybe<(
      { __typename?: 'DayFood' }
      & Pick<DayFood, 'id'>
    )> }
  )> }
);

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

export type GetMarathonsQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
}>;


export type GetMarathonsQuery = (
  { __typename?: 'Query' }
  & { getMarathons?: Maybe<(
    { __typename?: 'GetMarathonResponse' }
    & Pick<GetMarathonResponse, 'totalCount'>
    & { marathons?: Maybe<Array<Maybe<(
      { __typename?: 'Marathon' }
      & Pick<Marathon, 'id' | 'title' | 'description' | 'dateStart' | 'dateEnd' | 'progressIn'>
      & { trainings: Array<Maybe<(
        { __typename?: 'Training' }
        & Pick<Training, 'id' | 'title'>
      )>> }
    )>>> }
  )> }
);

export type SaveMarathonMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  trainings: Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>;
  dateStart: Scalars['String'];
  dateEnd: Scalars['String'];
  progressIn: Scalars['Int'];
}>;


export type SaveMarathonMutation = (
  { __typename?: 'Mutation' }
  & { saveMarathon?: Maybe<(
    { __typename?: 'SaveMarathonResponse' }
    & Pick<SaveMarathonResponse, 'totalCount'>
    & { marathon?: Maybe<(
      { __typename?: 'Marathon' }
      & Pick<Marathon, 'id' | 'title' | 'description' | 'dateStart' | 'dateEnd' | 'progressIn'>
      & { trainings: Array<Maybe<(
        { __typename?: 'Training' }
        & Pick<Training, 'id' | 'title'>
      )>> }
    )> }
  )> }
);

export type DeleteMarathonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteMarathonMutation = (
  { __typename?: 'Mutation' }
  & { deleteMarathon?: Maybe<(
    { __typename?: 'DeleteMarathonResponse' }
    & Pick<DeleteMarathonResponse, 'totalCount'>
    & { marathon?: Maybe<(
      { __typename?: 'Marathon' }
      & Pick<Marathon, 'id'>
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
  id?: Maybe<Scalars['ID']>;
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

export type GetLightRecipesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLightRecipesListQuery = (
  { __typename?: 'Query' }
  & { getLightRecipesList?: Maybe<(
    { __typename?: 'RecipesWithTotal' }
    & Pick<RecipesWithTotal, 'totalCount'>
    & { recipes?: Maybe<Array<Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'title'>
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

export type GetTrainingsQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
}>;


export type GetTrainingsQuery = (
  { __typename?: 'Query' }
  & { getTrainings?: Maybe<(
    { __typename?: 'GetTrainingResponse' }
    & Pick<GetTrainingResponse, 'totalCount'>
    & { trainings?: Maybe<Array<Maybe<(
      { __typename?: 'Training' }
      & Pick<Training, 'id' | 'title' | 'description' | 'video'>
      & { dayFood?: Maybe<(
        { __typename?: 'DayFood' }
        & Pick<DayFood, 'id' | 'title'>
      )> }
    )>>> }
  )> }
);

export type GetLightTrainingListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLightTrainingListQuery = (
  { __typename?: 'Query' }
  & { getLightTrainingList?: Maybe<(
    { __typename?: 'GetTrainingResponse' }
    & Pick<GetTrainingResponse, 'totalCount'>
    & { trainings?: Maybe<Array<Maybe<(
      { __typename?: 'Training' }
      & Pick<Training, 'id' | 'title'>
    )>>> }
  )> }
);

export type SaveTrainingMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  video: Scalars['Upload'];
  dayFood?: Maybe<Scalars['ID']>;
}>;


export type SaveTrainingMutation = (
  { __typename?: 'Mutation' }
  & { saveTraining?: Maybe<(
    { __typename?: 'saveTrainingResponse' }
    & Pick<SaveTrainingResponse, 'totalCount'>
    & { training?: Maybe<(
      { __typename?: 'Training' }
      & Pick<Training, 'id' | 'title' | 'description' | 'video'>
      & { dayFood?: Maybe<(
        { __typename?: 'DayFood' }
        & Pick<DayFood, 'id' | 'title'>
      )> }
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
    & Pick<User, 'id' | 'username' | 'token' | 'email' | 'role'>
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
    & Pick<User, 'id' | 'username' | 'token' | 'email' | 'role'>
  )> }
);

export const DayFoodFieldsFragmentDoc = gql`
    fragment DayFoodFields on DayFood {
  id
  title
  meal {
    human {
      id
      category
    }
    meal {
      type
      title
      description
      recipes {
        id
        title
      }
    }
  }
}
    `;
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
export const GetDayFoodsLightListDocument = gql`
    query getDayFoodsLightList {
  getDayFoodsLightList {
    dayFoods {
      id
      title
    }
  }
}
    `;

/**
 * __useGetDayFoodsLightListQuery__
 *
 * To run a query within a React component, call `useGetDayFoodsLightListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDayFoodsLightListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDayFoodsLightListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDayFoodsLightListQuery(baseOptions?: Apollo.QueryHookOptions<GetDayFoodsLightListQuery, GetDayFoodsLightListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDayFoodsLightListQuery, GetDayFoodsLightListQueryVariables>(GetDayFoodsLightListDocument, options);
      }
export function useGetDayFoodsLightListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDayFoodsLightListQuery, GetDayFoodsLightListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDayFoodsLightListQuery, GetDayFoodsLightListQueryVariables>(GetDayFoodsLightListDocument, options);
        }
export type GetDayFoodsLightListQueryHookResult = ReturnType<typeof useGetDayFoodsLightListQuery>;
export type GetDayFoodsLightListLazyQueryHookResult = ReturnType<typeof useGetDayFoodsLightListLazyQuery>;
export type GetDayFoodsLightListQueryResult = Apollo.QueryResult<GetDayFoodsLightListQuery, GetDayFoodsLightListQueryVariables>;
export const GetDayFoodsDocument = gql`
    query getDayFoods($id: ID, $offset: Int, $limit: Int, $search: String, $by: String) {
  getDayFoods(id: $id, offset: $offset, limit: $limit, search: $search, by: $by) {
    dayFoods {
      ...DayFoodFields
    }
    totalCount
  }
}
    ${DayFoodFieldsFragmentDoc}`;

/**
 * __useGetDayFoodsQuery__
 *
 * To run a query within a React component, call `useGetDayFoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDayFoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDayFoodsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      by: // value for 'by'
 *   },
 * });
 */
export function useGetDayFoodsQuery(baseOptions?: Apollo.QueryHookOptions<GetDayFoodsQuery, GetDayFoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDayFoodsQuery, GetDayFoodsQueryVariables>(GetDayFoodsDocument, options);
      }
export function useGetDayFoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDayFoodsQuery, GetDayFoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDayFoodsQuery, GetDayFoodsQueryVariables>(GetDayFoodsDocument, options);
        }
export type GetDayFoodsQueryHookResult = ReturnType<typeof useGetDayFoodsQuery>;
export type GetDayFoodsLazyQueryHookResult = ReturnType<typeof useGetDayFoodsLazyQuery>;
export type GetDayFoodsQueryResult = Apollo.QueryResult<GetDayFoodsQuery, GetDayFoodsQueryVariables>;
export const SaveDayFoodDocument = gql`
    mutation saveDayFood($id: ID, $data: DayFoodInput) {
  saveDayFood(id: $id, data: $data) {
    dayFood {
      ...DayFoodFields
    }
    totalCount
  }
}
    ${DayFoodFieldsFragmentDoc}`;
export type SaveDayFoodMutationFn = Apollo.MutationFunction<SaveDayFoodMutation, SaveDayFoodMutationVariables>;

/**
 * __useSaveDayFoodMutation__
 *
 * To run a mutation, you first call `useSaveDayFoodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveDayFoodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveDayFoodMutation, { data, loading, error }] = useSaveDayFoodMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveDayFoodMutation(baseOptions?: Apollo.MutationHookOptions<SaveDayFoodMutation, SaveDayFoodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveDayFoodMutation, SaveDayFoodMutationVariables>(SaveDayFoodDocument, options);
      }
export type SaveDayFoodMutationHookResult = ReturnType<typeof useSaveDayFoodMutation>;
export type SaveDayFoodMutationResult = Apollo.MutationResult<SaveDayFoodMutation>;
export type SaveDayFoodMutationOptions = Apollo.BaseMutationOptions<SaveDayFoodMutation, SaveDayFoodMutationVariables>;
export const DeleteDayFoodDocument = gql`
    mutation deleteDayFood($id: ID!) {
  deleteDayFood(id: $id) {
    dayFood {
      id
    }
    totalCount
  }
}
    `;
export type DeleteDayFoodMutationFn = Apollo.MutationFunction<DeleteDayFoodMutation, DeleteDayFoodMutationVariables>;

/**
 * __useDeleteDayFoodMutation__
 *
 * To run a mutation, you first call `useDeleteDayFoodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDayFoodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDayFoodMutation, { data, loading, error }] = useDeleteDayFoodMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDayFoodMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDayFoodMutation, DeleteDayFoodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDayFoodMutation, DeleteDayFoodMutationVariables>(DeleteDayFoodDocument, options);
      }
export type DeleteDayFoodMutationHookResult = ReturnType<typeof useDeleteDayFoodMutation>;
export type DeleteDayFoodMutationResult = Apollo.MutationResult<DeleteDayFoodMutation>;
export type DeleteDayFoodMutationOptions = Apollo.BaseMutationOptions<DeleteDayFoodMutation, DeleteDayFoodMutationVariables>;
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
export const GetMarathonsDocument = gql`
    query getMarathons($id: ID, $offset: Int, $limit: Int, $search: String, $by: String) {
  getMarathons(id: $id, offset: $offset, limit: $limit, search: $search, by: $by) {
    marathons {
      id
      title
      description
      dateStart
      dateEnd
      progressIn
      trainings {
        id
        title
      }
    }
    totalCount
  }
}
    `;

/**
 * __useGetMarathonsQuery__
 *
 * To run a query within a React component, call `useGetMarathonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMarathonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMarathonsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      by: // value for 'by'
 *   },
 * });
 */
export function useGetMarathonsQuery(baseOptions?: Apollo.QueryHookOptions<GetMarathonsQuery, GetMarathonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMarathonsQuery, GetMarathonsQueryVariables>(GetMarathonsDocument, options);
      }
export function useGetMarathonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMarathonsQuery, GetMarathonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMarathonsQuery, GetMarathonsQueryVariables>(GetMarathonsDocument, options);
        }
export type GetMarathonsQueryHookResult = ReturnType<typeof useGetMarathonsQuery>;
export type GetMarathonsLazyQueryHookResult = ReturnType<typeof useGetMarathonsLazyQuery>;
export type GetMarathonsQueryResult = Apollo.QueryResult<GetMarathonsQuery, GetMarathonsQueryVariables>;
export const SaveMarathonDocument = gql`
    mutation saveMarathon($id: ID, $title: String!, $description: String, $trainings: [ID]!, $dateStart: String!, $dateEnd: String!, $progressIn: Int!) {
  saveMarathon(
    id: $id
    title: $title
    description: $description
    trainings: $trainings
    dateStart: $dateStart
    dateEnd: $dateEnd
    progressIn: $progressIn
  ) {
    marathon {
      id
      title
      description
      dateStart
      dateEnd
      progressIn
      trainings {
        id
        title
      }
    }
    totalCount
  }
}
    `;
export type SaveMarathonMutationFn = Apollo.MutationFunction<SaveMarathonMutation, SaveMarathonMutationVariables>;

/**
 * __useSaveMarathonMutation__
 *
 * To run a mutation, you first call `useSaveMarathonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveMarathonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveMarathonMutation, { data, loading, error }] = useSaveMarathonMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      trainings: // value for 'trainings'
 *      dateStart: // value for 'dateStart'
 *      dateEnd: // value for 'dateEnd'
 *      progressIn: // value for 'progressIn'
 *   },
 * });
 */
export function useSaveMarathonMutation(baseOptions?: Apollo.MutationHookOptions<SaveMarathonMutation, SaveMarathonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveMarathonMutation, SaveMarathonMutationVariables>(SaveMarathonDocument, options);
      }
export type SaveMarathonMutationHookResult = ReturnType<typeof useSaveMarathonMutation>;
export type SaveMarathonMutationResult = Apollo.MutationResult<SaveMarathonMutation>;
export type SaveMarathonMutationOptions = Apollo.BaseMutationOptions<SaveMarathonMutation, SaveMarathonMutationVariables>;
export const DeleteMarathonDocument = gql`
    mutation deleteMarathon($id: ID!) {
  deleteMarathon(id: $id) {
    marathon {
      id
    }
    totalCount
  }
}
    `;
export type DeleteMarathonMutationFn = Apollo.MutationFunction<DeleteMarathonMutation, DeleteMarathonMutationVariables>;

/**
 * __useDeleteMarathonMutation__
 *
 * To run a mutation, you first call `useDeleteMarathonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMarathonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMarathonMutation, { data, loading, error }] = useDeleteMarathonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMarathonMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMarathonMutation, DeleteMarathonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMarathonMutation, DeleteMarathonMutationVariables>(DeleteMarathonDocument, options);
      }
export type DeleteMarathonMutationHookResult = ReturnType<typeof useDeleteMarathonMutation>;
export type DeleteMarathonMutationResult = Apollo.MutationResult<DeleteMarathonMutation>;
export type DeleteMarathonMutationOptions = Apollo.BaseMutationOptions<DeleteMarathonMutation, DeleteMarathonMutationVariables>;
export const GetRecipesDocument = gql`
    query getRecipes($id: ID, $offset: Int, $limit: Int, $search: String, $by: String) {
  getRecipes(id: $id, offset: $offset, limit: $limit, search: $search, by: $by) {
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
 *      id: // value for 'id'
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
export const GetLightRecipesListDocument = gql`
    query getLightRecipesList {
  getLightRecipesList {
    recipes {
      id
      title
    }
    totalCount
  }
}
    `;

/**
 * __useGetLightRecipesListQuery__
 *
 * To run a query within a React component, call `useGetLightRecipesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLightRecipesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLightRecipesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLightRecipesListQuery(baseOptions?: Apollo.QueryHookOptions<GetLightRecipesListQuery, GetLightRecipesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLightRecipesListQuery, GetLightRecipesListQueryVariables>(GetLightRecipesListDocument, options);
      }
export function useGetLightRecipesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLightRecipesListQuery, GetLightRecipesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLightRecipesListQuery, GetLightRecipesListQueryVariables>(GetLightRecipesListDocument, options);
        }
export type GetLightRecipesListQueryHookResult = ReturnType<typeof useGetLightRecipesListQuery>;
export type GetLightRecipesListLazyQueryHookResult = ReturnType<typeof useGetLightRecipesListLazyQuery>;
export type GetLightRecipesListQueryResult = Apollo.QueryResult<GetLightRecipesListQuery, GetLightRecipesListQueryVariables>;
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
    query getTrainings($id: ID, $offset: Int, $limit: Int, $search: String, $by: String) {
  getTrainings(id: $id, offset: $offset, limit: $limit, search: $search, by: $by) {
    trainings {
      id
      title
      description
      video
      dayFood {
        id
        title
      }
    }
    totalCount
  }
}
    `;

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
export const GetLightTrainingListDocument = gql`
    query getLightTrainingList {
  getLightTrainingList {
    trainings {
      id
      title
    }
    totalCount
  }
}
    `;

/**
 * __useGetLightTrainingListQuery__
 *
 * To run a query within a React component, call `useGetLightTrainingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLightTrainingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLightTrainingListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLightTrainingListQuery(baseOptions?: Apollo.QueryHookOptions<GetLightTrainingListQuery, GetLightTrainingListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLightTrainingListQuery, GetLightTrainingListQueryVariables>(GetLightTrainingListDocument, options);
      }
export function useGetLightTrainingListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLightTrainingListQuery, GetLightTrainingListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLightTrainingListQuery, GetLightTrainingListQueryVariables>(GetLightTrainingListDocument, options);
        }
export type GetLightTrainingListQueryHookResult = ReturnType<typeof useGetLightTrainingListQuery>;
export type GetLightTrainingListLazyQueryHookResult = ReturnType<typeof useGetLightTrainingListLazyQuery>;
export type GetLightTrainingListQueryResult = Apollo.QueryResult<GetLightTrainingListQuery, GetLightTrainingListQueryVariables>;
export const SaveTrainingDocument = gql`
    mutation saveTraining($id: ID, $title: String!, $description: String, $video: Upload!, $dayFood: ID) {
  saveTraining(
    id: $id
    title: $title
    description: $description
    video: $video
    dayFood: $dayFood
  ) {
    training {
      id
      title
      description
      video
      dayFood {
        id
        title
      }
    }
    totalCount
  }
}
    `;
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
 *      description: // value for 'description'
 *      video: // value for 'video'
 *      dayFood: // value for 'dayFood'
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
    email
    role
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
    email
    role
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