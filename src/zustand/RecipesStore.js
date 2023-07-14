import {create} from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(persist((set) => ({
    recipes: [],
    isLoading: false,
    deletedRecipes: [],
    loadRecipes: async () => {
        set({ isLoading: true });
        try {
            const response = await fetch('https://api.punkapi.com/v2/beers?page=1');
            const data = await response.json();
            // console.log(data)
            set(produce((state) => {
                state.recipes = data;
                state.isLoading = false;
            }));
        } catch (error) {
            console.error('Failed to load recipes:', error);
            set({ isLoading: false });
        }
    },
    deleteRecipe: (recipeId) => {
        set(produce((state) => {
            state.recipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
            state.deletedRecipe.push(recipeId);
    }));
  },
}), {
    name: 'recipe-store',
    blacklist: ['deletedRecipes'],
}));

export default useRecipeStore;