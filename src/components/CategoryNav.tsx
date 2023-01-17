import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { categoryData } from "../interface/pageInterface";
import { GlobalStateContext } from "../context/GlobalContextProviser";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CategoryNavStyling } from "../assets/styles/CategoryNavStyling";

export const CategoryNav = () => {
  //getting the value from GlobalStateContext
  const globalStateContext: any = useContext(GlobalStateContext);
  //using useState to toggle nav
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
