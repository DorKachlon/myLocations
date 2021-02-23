import * as yup from "yup";

async function categoryValidation(data) {
  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
  });

  return await schema.validate(data);
}

export default categoryValidation;
