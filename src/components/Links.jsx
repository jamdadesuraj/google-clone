import { NavLink } from "react-router-dom";

const Links = () => {
  const links = [
    {
      url: "/search",
      text: "All",
    },
    {
      url: "/images",
      text: "Images",
    },
    {
      url: "/news",
      text: "News",
    },
    {
      url: "/videos",
      text: "Videos",
    },
  ];
  return (
    <div className="flex sm:justify-around justify-between mt-4 flex-wrap ">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          key={text}
          className={({ isActive }) =>
            `p-2 rounded-lg mx-3 dark:text-gray-200  mb-2 ${
              isActive
                ? "bg-gray-200 dark:bg-blue-900 text-blue-900 font-semibold dark:text-gray-200"
                : " hover:bg-gray-200  hover:text-white "
            }`
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
