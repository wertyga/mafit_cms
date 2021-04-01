import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Loader } from 'components/Common/Loader/Loader';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { RecipeModal } from 'components/Recipe/RecipeModal/RecipeModal';

import { useGetRecipesLazyQuery, Recipe } from 'graphql/generated/recipe';

import { getRecipeTableData } from 'components/Recipe/helpers';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';
import { getDataWithKeys } from 'utils/arr';
import { gfRecipe } from '../goldfish/gfRecipe';

const Recipes = () => {
  const [getRecipes, {
    loading, data, error, called,
  }] = useGetRecipesLazyQuery({ fetchPolicy: 'no-cache' });

  const router = useRouter();
  const [state, setState] = useState({
    recipes: [],
    editableRecipe: {},
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

  const onSuccessAdd = (recipe: Recipe, totalCount: number, editableID) => {
    setState((prev) => ({
      ...prev,
      recipes: editableID
        ? prev.recipes.map((item) => (item.id === editableID ? recipe : item))
        : [recipe, ...prev.recipes],
      totalCount,
      editableRecipe: {},
    }));
  };

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by]);

  useEffect(() => {
    if (loading || error || !called) return;
    const { getRecipes: { recipes, totalCount } } = data;
    setState((prev) => ({
      ...prev,
      recipes: getDataWithKeys(recipes),
      totalCount,
    }));
  }, [loading]);

  const handleEditRecipe = (recipeId) => () => {
    setState((prev) => ({
      ...prev,
      editableRecipe: prev.recipes.find(({ id }) => id === recipeId),
    }));
  };

  const onCloseModal = () => setState((prev) => ({ ...prev, editableRecipe: {} }));

  const tableConfig = useMemo(() => getRecipeTableData({
    totalCount: state.totalCount,
    handleChangePage,
  }), [state.totalCount]);

  return (
    <div>
      <Loader isActive={loading} />
      <ContentTable
        title={gfRecipe.title}
        dataSource={state.recipes}
        columns={gfRecipe.columns({
          filter: { currentFilter: router.query },
          onEdit: handleEditRecipe,
        })}
        ModalComponent={(
          <RecipeModal
            onSuccess={onSuccessAdd}
            editableRecipe={state.editableRecipe}
            onClose={onCloseModal}
          />
        )}
        {...tableConfig}
      />
    </div>
  );
};
export default Recipes;
