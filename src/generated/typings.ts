/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Ingredient: { // root type
    text: string; // String!
    weight: number; // Float!
  }
  Query: {};
  Recipe: { // root type
    calories: number; // Float!
    cautions: string[]; // [String!]!
    dietLabels: string[]; // [String!]!
    healthLabels: string[]; // [String!]!
    image: string; // String!
    ingredientLines: string[]; // [String!]!
    ingredients: NexusGenRootTypes['Ingredient'][]; // [Ingredient!]!
    label: string; // String!
    source: string; // String!
    totalTime: number; // Float!
    totalWeight: number; // Float!
    uri: string; // String!
    url: string; // String!
  }
  RecipeList: { // root type
    items: NexusGenRootTypes['RecipeWrapper'][]; // [RecipeWrapper!]!
    lastKey?: string | null; // String
  }
  RecipeWrapper: { // root type
    recipe: NexusGenRootTypes['Recipe']; // Recipe!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Ingredient: { // field return type
    text: string; // String!
    weight: number; // Float!
  }
  Query: { // field return type
    recipe: NexusGenRootTypes['Recipe']; // Recipe!
    recipes: NexusGenRootTypes['RecipeList']; // RecipeList!
  }
  Recipe: { // field return type
    calories: number; // Float!
    cautions: string[]; // [String!]!
    dietLabels: string[]; // [String!]!
    healthLabels: string[]; // [String!]!
    image: string; // String!
    ingredientLines: string[]; // [String!]!
    ingredients: NexusGenRootTypes['Ingredient'][]; // [Ingredient!]!
    label: string; // String!
    source: string; // String!
    totalTime: number; // Float!
    totalWeight: number; // Float!
    uri: string; // String!
    url: string; // String!
  }
  RecipeList: { // field return type
    items: NexusGenRootTypes['RecipeWrapper'][]; // [RecipeWrapper!]!
    lastKey: string | null; // String
  }
  RecipeWrapper: { // field return type
    recipe: NexusGenRootTypes['Recipe']; // Recipe!
  }
}

export interface NexusGenArgTypes {
  Query: {
    recipe: { // args
      id: string; // String!
    }
    recipes: { // args
      query: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Ingredient" | "Query" | "Recipe" | "RecipeList" | "RecipeWrapper";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}