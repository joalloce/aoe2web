import { useEffect, useState } from "react";
import axios from "axios";
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const fetchData = async (URL, setData) => {
  const res = await axios.get(PROXY_URL + URL);
  setData(res.data);
};

export const useCivilizations = () => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";

  useEffect(() => {
    fetchData(URL, setData);
  }, []);
  return [data];
};

export const useCivilization = (id) => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" + id;

  useEffect(() => {
    fetchData(URL, setData);
  }, [id]);
  return [data];
};

export const useUnits = () => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/units";

  useEffect(() => {
    fetchData(URL, setData);
  }, []);
  return [data];
};

export const useUnit = (id) => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" + id;

  useEffect(() => {
    fetchData(URL, setData);
  }, [id]);
  return [data];
};

export const useStructures = () => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/structures";

  useEffect(() => {
    fetchData(URL, setData);
  }, []);
  return [data];
}
export const useStructure = (id) => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/" + id;

  useEffect(() => {
    fetchData(URL, setData);
  }, [id]);
  return [data];
}

export const useTechnologies = () => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/technologies";

  useEffect(() => {
    fetchData(URL, setData);
  }, []);
  return [data];
}

export const useTechnology = (id) => {
  const [data, setData] = useState([]);
  const URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/" + id;

  useEffect(() => {
    fetchData(URL, setData);
  }, [id]);
  return [data];
}
