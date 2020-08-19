const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const AOE2service = async (key,id) => {
  let param = "";
  if(id) param += `/${id}`;
  const res  = await fetch(`${PROXY_URL}https://age-of-empires-2-api.herokuapp.com/api/v1/${key}${param}`)
  return res.json();
}

export default AOE2service;
