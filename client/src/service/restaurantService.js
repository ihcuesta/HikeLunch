import axios from "axios";

const restaurantService = axios.create({
  baseURL: "http://localhost:4000/restaurant",
  withCredentials: true
});

export const newRestaurant = async ({
  name,
  kind,
  descr,
  phone,
  website,
  email,
  region,
  city,
  image1,
  image2,
  image3,
  image4,
  image5,
  address,
  pics,
  allergenCard,
  dogs,
  terrace,
  kids
}) => {
  try {
    console.log("llega");
    const { data } = await restaurantService.post("/new", {
      name,
      kind,
      descr,
      phone,
      website,
      email,
      region,
      city,
      image1,
      image2,
      image3,
      image4,
      image5,
      address,
      pics,
      allergenCard,
      dogs,
      terrace,
      kids
    });
    console.log("también llega");
    return data;
  } catch (error) {
    console.log("llega a error");
    return error;
  }
};

export const fetchSingleRestaurant = async endpoint => {
  const { data } = await restaurantService.get(`/${endpoint}`);
  return data;
};

export const fetchEditRestaurant = async endpoint => {
  const { data } = await restaurantService.get(`/${endpoint}/edit`);
  return data;
};

export const editRestaurant = async (
  endpoint,
  {
    name,
    kind,
    descr,
    phone,
    website,
    email,
    region,
    city,
    image1,
    image2,
    image3,
    image4,
    image5,
    address,
    pics,
    allergenCard,
    dogs,
    terrace,
    kids
  }
) => {
  try {
    const { data } = await restaurantService.put(`/${endpoint}/edit`, {
      name,
      kind,
      descr,
      phone,
      website,
      email,
      city,
      image1,
      image2,
      image3,
      image4,
      image5,
      region,
      address,
      pics,
      allergenCard,
      dogs,
      terrace,
      kids
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteRestaurant = async endpoint => {
  const { data } = await restaurantService.post(`/${endpoint}/delete`);
  return data;
};
