// actions.js
export const get_project = () => ({
    type: "GETPROJECT",
  });
  export const get_project_by_id = (id) => ({
    type: "GETBYID",
    payload: id,
  });