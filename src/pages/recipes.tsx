import React from 'react';
import { Loader } from 'components/Common/Loader/Loader';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { useGetRecipesQuery } from 'graphql/generated/recipe';

import { getRecipeData } from 'components/Recipe/helpers';
import { gfRecipe } from 'goldfish/gfRecipe';

const Recipes = () => {
  const { loading, data = {} } = useGetRecipesQuery({ fetchPolicy: 'no-cache' });

  const recipeData = getRecipeData(data.getRecipes || []);
  return (
    <div>
      <Loader isActive={loading} />
      <ContentTable
        columns={gfRecipe.columns}
        data={recipeData}
        title={gfRecipe.title}
      />
    </div>
  );
};
export default Recipes;
