import {create} from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(persist((set) => ({
    recipes: [persist.state],
    isLoading: false,
    loadRecipes: async (page) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
            const data = await response.json();
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
    }));
  },
}), {
    name: 'recipe-store',
}));

export default useRecipeStore;