import * as yup from "yup";

export default async function locationValidation(data) {
  const schema = yup.object().shape({
    category: yup.array().required(),
    coordinates: yup.object().shape({ lng: yup.number().required(), lat: yup.number().required() }),
    address: yup.string().required(),
    name: yup.string().required(),
  });

  return await schema.validate(data);
}
