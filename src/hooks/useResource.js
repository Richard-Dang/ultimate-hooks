import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get(baseUrl);
      setResources(response.data);
    };
    getAll();
  }, [baseUrl]);

  const create = async (resource) => {
    try {
      const response = await axios.post(baseUrl, resource);
      setResources(resources.concat(response.data));
    } catch (err) {
      console.log("err.response.data", err.response.data);
    }
  };

  const service = {
    create,
  };

  return [resources, service];
};

export default useResource;
