import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div>
      <h3 className="header-title">Lambda School</h3>
      <span className="gray">
        @lambdaSchool *{Date(Date.now).match(/\s(?:\w+\s\d+)\s/)[0]}
      </span>
    </div>
  );
};

export default HeaderTitle;
