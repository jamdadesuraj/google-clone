import { createContext, useState, useContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://jsonplaceholder.typicode.com";

// eslint-disable-next-line react/prop-types
export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "1b3657b9bfmshd0d6eaa08c67d79p1f3f9ajsn8b477cb48bb3",
        "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
      },
    });
    const data = await response.json();

    if (type.includes("/search")) {
      setResult(data.posts);
    } else if (type.includes("/images")) {
      setResult(data.photos);
    } else {
      setResult(data);
    }

    // setResult(data);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, result, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useResultContext = () => useContext(ResultContext);
