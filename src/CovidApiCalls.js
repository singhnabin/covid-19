export const getAllCountries = () => {
  return fetch(`https://disease.sh/v3/covid-19/countries`, {
    method: "GET",
  });
};
