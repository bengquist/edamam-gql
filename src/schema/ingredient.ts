import { objectType } from "nexus";

export const Ingredient = objectType({
  name: "Ingredient",
  definition(t) {
    t.string("text");
    t.float("weight");
  }
});
