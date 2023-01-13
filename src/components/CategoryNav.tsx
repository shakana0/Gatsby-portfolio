import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { categoryData } from "../interface/pageInterface";
import { GlobalStateContext } from "../context/GlobalContextProviser";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SearchStyling } from "../assets/styles/SearchStyling";
import {CategoryNavStyling} from "../assets/styles/CategoryNavStyling";

export const CategoryNav = () => {
  const globalStateContext: any = useContext(GlobalStateContext);
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <CategoryNavStyling>
      <div className="dropdown">
        <button onClick={() => setIsShowMenu(!isShowMenu)}>
          <p>Categories</p>
          <KeyboardArrowDownIcon className="category-icon" />
        </button>
        <ul className={`${isShowMenu ? "" : "hide-menu"}`}>
          {globalStateContext.categories?.map(
            (category: categoryData, index: number) => (
              <li key={index}>
                <Link to={`/category/${category.slug}/`}>
                  {category.categoryName}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </CategoryNavStyling>
  );
};
