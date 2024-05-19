import { useEffect, useState } from "react";
import { Links } from "../components";
import { useResultContext } from "../context/ResultContextProvider";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [value] = useDebounce(text, 1000);

  useEffect(() => {
    if (value) setSearchTerm(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className=" sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="search"
        placeholder="Search Here..."
        value={text}
        className="w-80 rounded-full p-2 sm:w-96 border dark:bg-gray-200 shadow-sm focus:outline-none"
        onChange={(e) => setText(e.target.value)}
      />
      <Links />
    </div>
  );
};

export default Search;
