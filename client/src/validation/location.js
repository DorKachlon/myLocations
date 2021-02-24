import * as yup from "yup";

export default async function locationValidation(data) {
  const schema = yup.object().shape({
    category: yup.array().required(),
    coordinatesLng: yup.number().required(),
    coordinatesLat: yup.number().required(),
    address: yup.string().required(),
    name: yup.string().required(),
  });

  return await schema.validate(data);
}
