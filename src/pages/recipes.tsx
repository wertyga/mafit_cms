import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { RecipeModal } from 'components/Recipe/RecipeModal/RecipeModal';

import { useGetRecipesLazyQuery, useDeleteRecipeMutation, Recipe } from 'graphql/types';

import { getRecipeTableData } from 'components/Recipe/helpers';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';
import { getDataWithKeys } from 'utils/arr';
import { message } from 'antd';
import { gfRecipe } from 'goldfish/gfRecipe';
import { ParsedUrlQuery } from 'querystring';

type StateType = {
  recipes: Recipe[];
  editableRecipe: Partial<Recipe>;
  totalCount: number;
};

const Recipes = () => {
  const router = useRouter();
  const [state, setState] = useState<StateType>({
    recipes: [],
    editableRecipe: {},
    totalCount: 0,
  });
  const [getRecipes, { loading: getLoading }] = useGetRecipesLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getRecipes: getRecipesResponse }) => {
      const { recipes = [], totalCount = 0 } = getRecipesResponse || {};
      setState((prev) => ({
        ...prev,
        recipes: getDataWithKeys(recipes, 'recipe'),
        totalCount,
      }));
    },
    onError: (e: Error) => message.error(e.message),
  });
  const [deleteRecipeHandler, { loading: deleteLoading }] = useDeleteRecipeMutation({
    onCompleted: ({ deleteRecipe }) => {
      const { recipe = {} as Partial<Recipe>, totalCount = 0 } = deleteRecipe || {};
      setState((prev) => ({
        ...prev,
        humans: prev.recipes.filter((item) => item.id !== recipe.id),
        totalCount,
      }));
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleChangePage = async (page = 1, pageSize = DEFAULT_PAGE_SIZE) => {
    const { query: { search, by } } = router;
    const payload = {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      search,
      by,
    };
    getRecipes({ variables: payload } as unknown as ParsedUrlQuery);
  };

  const onSuccessAdd = (recipe: Recipe, totalCount: number) => {
    setState((prev) => ({
      ...prev,
      recipes: prev.editableRecipe.id
        ? prev.recipes.map((item) => (item.id === prev.editableRecipe.id ? recipe : item))
        : [recipe, ...prev.recipes],
      totalCount,
      editableRecipe: {},
    }));
  };

  const handleDelete = (id: string) => async () => deleteRecipeHandler({ variables: { id } });

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by]);

  const handleEditRecipe = (recipeId: string) => () => {
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

  const loading = getLoading || deleteLoading;
  return (
    <div>
      <ContentTable
        title={gfRecipe.title}
        dataSource={state.recipes}
        columns={gfRecipe.columns({
          filter: { currentFilter: router.query },
          onEdit: handleEditRecipe,
          onDelete: handleDelete,
        })}
        loading={loading}
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
