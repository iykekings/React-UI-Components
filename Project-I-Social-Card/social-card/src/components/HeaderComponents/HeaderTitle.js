import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div>
      <h3 className="title">Lambda School</h3>
      <span>
        @lambdaSchool *
        {Date(Date.now)
          .match(/\s(?:\w+\s\d+)\s/)[0]
          .trim()}
      </span>
    </div>
  );
};

export default HeaderTitle;
