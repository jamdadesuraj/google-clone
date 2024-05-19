import { useEffect, useState } from "react";
import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "../components";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Pagination from "@mui/material/Pagination";

const Result = () => {
  const { getResults, result, searchTerm, isLoading } = useResultContext();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 20;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = result?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (e, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/images") {
        getResults("/photos");
      }
    } else {
      getResults("/posts");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {currentData?.map(({ body, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href="" target="_blank" rel="noreferrer">
                <p className="text-sm">{body.slice(0, 50)}...</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
          {result.length > 6 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(result.length / dataPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {currentData?.map(({ url, title }, index) => (
            <a
              className="sm:p-3 p-5"
              href={url}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {url ? (
                <img src={url} alt={title} loading="lazy" />
              ) : (
                <img
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715990400&semt=sph"
                  alt={title}
                  loading="lazy"
                  width={400}
                />
              )}
              <p className=" text-sm mt-2">{title.slice(0, 80)}...</p>
            </a>
          ))}
          {result.length > 6 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(result.length / dataPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {currentData?.map(({ id, email, body, title }) => (
            <div key={id}>
              <a
                href={email}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700 hover:underline">
                  {body}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={body} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </div>
            </div>
          ))}
          {result.length > 6 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(result.length / dataPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap">
          {currentData?.map(({ title, id }) => (
            <div key={id} className="p-2">
              <ReactPlayer url={title} controls width="355px" height="200px" />
            </div>
          ))}
          {result.length > 6 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(result.length / dataPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </div>
      );
    default:
      return <div>Error: Page not found</div>;
  }
};

export default Result;
