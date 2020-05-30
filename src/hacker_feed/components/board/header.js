import React from 'react';
import styled from 'styled-components';

const HeaderBg = styled.div`
  height: auto;
  padding: 8px 4px 4px 8px;
  position: relative;
  transition: padding 0.1s ease-in;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  background: rgb(255, 102, 0);
  width: 100%;
  color: #fff;
`;

const Header = (props) => {
  return (
    <HeaderBg className="is-small">
      Hacker News
    </HeaderBg>
  )
}

export default Header;
