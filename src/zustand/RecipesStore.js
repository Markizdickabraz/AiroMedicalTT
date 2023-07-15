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
        deleteRecipe: (recipeIds) => {
    set(produce((state) => {
        state.recipes = state.recipes.filter((recipe) => !recipeIds.includes(recipe.id));
        console.log(state.recipes.length);
    }));
    },
}), {
    name: 'recipe-store',
}));

export default useRecipeStore;