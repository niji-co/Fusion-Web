import { schema } from "normalizr";

const projectRowEntity = new schema.Entity("projectRows");
const projectEntity = new schema.Entity("projects", {
  rows: [projectRowEntity],
});

export { projectRowEntity, projectEntity };
