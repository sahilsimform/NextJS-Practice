import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web dev</span> News
      </h1>
      <p className={headerStyles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        unde consequuntur aperiam repellat maiores, odio eius natus dicta quas
        quia impedit praesentium obcaecati omnis, aut, quidem nobis libero
        eligendi quis.
      </p>
    </div>
  );
};

export default Header;
