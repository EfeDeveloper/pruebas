import uuid from "uuid/v4";

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "addForm":
      return [
        ...state,
        {
          val: action.form.val,
          selects: action.form.selects,
          tr: action.form.tr,
          id: uuid(),
        },
      ];
    case "removeForm":
      return state.filter((form) => form.id !== action.id);
    default:
      return state;
  }
};
