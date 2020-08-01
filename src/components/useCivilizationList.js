import react,{ useState } from "react";
import useAxios from "../util/useAxios"
const useCivilizationList = () => {
  console.log("lol");
  const [data, setData] = useState([]);
  const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
  const res = useAxios(URL);
  setData(res);
  return [ data ];
};

export default useCivilizationList
