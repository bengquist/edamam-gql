import { objectType } from "nexus";
import { createListType } from "./list";
import { ObjectDefinitionBlock, stringArg } from "nexus/dist/core";
import Axios from "axios";
import { Ingredient } from "./ingredient";

export const Recipe = objectType({
  name: "Recipe",
  definition(t) {
    t.string("uri");
    t.string("label");
    t.string("image");
    t.string("source");
    t.string("url");
    t.list.field("dietLabels", { type: "String" });
    t.list.field("healthLabels", { type: "String" });
    t.list.field("cautions", { type: "String" });
    t.list.field("ingredientLines", { type: "String" });
    t.list.field("ingredients", { type: Ingredient });
    t.float("calories");
    t.float("totalWeight");
    t.float("totalTime");
  }
});

export const RecipeWrapper = objectType({
  name: "RecipeWrapper",
  definition(t) {
    t.field("recipe", { type: Recipe });
  }
});

const RecipeList = createListType("RecipeList", RecipeWrapper);

export const useRecipeQuery = (t: ObjectDefinitionBlock<"Query">) => {
  t.field("recipe", {
    type: Recipe,
    args: {
      id: stringArg({ nullable: false })
    },
    async resolve(_, { id }) {
      const result = await Axios.get(
        `https://api.edamam.com/search?app_id=337938b4&app_key=1297ec857f114ae4bec67470e87d93cb&r=${id}`
      );

      console.log(result.data);

      return result;
    }
  });

  t.field("recipes", {
    type: RecipeList,
    args: {
      query: stringArg({ nullable: false })
    },
    async resolve(_, { query }) {
      const result = await Axios.get(
        `https://api.edamam.com/search?app_id=337938b4&app_key=1297ec857f114ae4bec67470e87d93cb&q=${query}`
      );

      return { items: result.data.hits };
    }
  });
};
