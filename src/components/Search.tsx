import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { categoryData } from "../interface/pageInterface";
import { GlobalStateContext } from "../context/GlobalContextProviser";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { SearchStyling } from "../assets/styles/SearchStyling";
// import { useFlexSearch } from 'react-use-flexsearch';

// const index = /* a FlexSearch index */
// const store = {
//   1: { id: 1, title: 'Document 1' },
//   2: { id: 2, title: 'Document 2' },
//   3: { id: 3, title: 'Document 3' },
// }

export const Search = () => {
  const globalStateContext: any = useContext(GlobalStateContext);
  const [isShowMenu, setIsShowMenu] = useState(false);

  // const [query, setQuery] = useState(null)
  // const results = useFlexSearch(query, index, store)


  return (
    <SearchStyling>
      <div className="dropdown">
        <button onClick={() => setIsShowMenu(!isShowMenu)}>
          <p>Categories</p>
          <KeyboardArrowDownIcon className="category-icon" />
        </button>
        <ul className={`${isShowMenu ? "" : "hide-menu"}`}>
          {globalStateContext.categories?.map(
            (category: categoryData, index: number) => (
              <li key={index}>
                <Link to={`category/${category.slug}/`}>
                  {category.categoryName}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="searchbar">
        <input type="text"  placeholder="Search..."/>
        <SearchIcon  className="search-icon"/>
      </div>
    </SearchStyling>
  );
};
