import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader } from 'components/Common/Loader/Loader';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { RecipeModal } from 'components/Recipe/RecipeModal/RecipeModal';

import { useGetRecipesLazyQuery, Recipe } from 'graphql/generated/recipe';

import { getRecipeTableData } from 'components/Recipe/helpers';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';
import { gfRecipe } from '../goldfish/gfRecipe';

const Recipes = () => {
  const [getRecipes, {
    loading, data, error, called,
  }] = useGetRecipesLazyQuery({ fetchPolicy: 'no-cache' });

  const router = useRouter();
  const [state, setState] = useState({
    recipes: [],
    totalCount: 0,
  });

  const handleChangePage = async (page = 1, pageSize = DEFAULT_PAGE_SIZE) => {
    const { query: { search, by } } = router;
    const payload = {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      search,
      by,
    };
    getRecipes({ variables: payload });
  };

  const onSuccessAdd = (recipe: Recipe, totalCount: number) => {
    setState((prev) => ({
      ...prev,
      recipes: [...prev.recipes, recipe],
      totalCount,
    }));
  };

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by]);

  useEffect(() => {
    if (loading || error || !called) return;
    const { getRecipes: { recipes, totalCount } } = data;
    setState((prev) => ({ ...prev, recipes, totalCount }));
  }, [loading]);

  const tableConfig = getRecipeTableData({
    totalCount: state.totalCount,
    handleChangePage,
  });

  return (
    <div>
      <Loader isActive={loading} />
      <ContentTable
        title={gfRecipe.title}
        data={state.recipes}
        columns={gfRecipe.columns({ filter: { currentFilter: router.query } })}
        ModalComponent={<RecipeModal onSuccess={onSuccessAdd} />}
        {...tableConfig}
      />
    </div>
  );
};
export default Recipes;
