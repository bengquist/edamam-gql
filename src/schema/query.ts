import { queryType } from "nexus";
import { useRecipeQuery } from "./recipe";

export const Query = queryType({
  definition(t) {
    useRecipeQuery(t);
  }
});
