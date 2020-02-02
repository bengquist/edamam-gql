import { intArg, objectType, stringArg } from "nexus";
import { NexusObjectTypeDef } from "nexus/dist/core";

export const listArgs = () => ({
  limit: intArg(),
  lastKey: stringArg()
});

export const createListType = (
  name: string,
  itemType: NexusObjectTypeDef<any>
) =>
  objectType({
    name,
    definition(t) {
      t.list.field("items", { type: itemType });
      t.string("lastKey", { nullable: true });
    }
  });
