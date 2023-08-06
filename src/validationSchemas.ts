import * as yup from "yup";

export const createNoteSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  category: yup.string().required(),
  content: yup.string().required(),
  archived: yup.boolean().required(),
});
