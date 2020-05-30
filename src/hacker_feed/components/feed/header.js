import React from 'react';
import styled from 'styled-components';

const HeaderBg = styled.div`
  height: 45px;
  position: fixed;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  background: rgb(255, 102, 0);
  width: 100%;
  color: #fff;
  top: 0;
  z-index: 1000;
`;

const Header = (props) => {
  return (
    <HeaderBg className="is-small">
      <div className="columns is-bottom-aligned is-text-centered header is-hidden-mobile">
        <div className="column is-1-desktop is-2-mobile">
          Comments
        </div>
        <div className="column is-1-desktop is-2-mobile">
          Vote Count
        </div>
        <div className="column is-1-desktop is-2-mobile">
          Up Vote
        </div>
        <div className="column is-9-desktop is-6-mobile is-left-aligned">
          News Details
        </div>
      </div>
      <div className="columns is-bottom-aligned is-text-centered header is-hidden-tablet">
        <div className="column is-full">
          Hacker News
        </div>
      </div>
    </HeaderBg>
  )
}

export default Header;
