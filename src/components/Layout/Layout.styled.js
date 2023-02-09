import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  padding: 8px 4px;
  margin-left: 30px;
  color: black;
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  
  &.active {
    color: #F6F5F1;
  }
  :hover:not(:active),
  :focus-visible:not(:active) {
    color: #966844;
  }
  :not(:last-child){
    margin-right: 20px;
  }
`;

export const Header = styled.header`
  padding: 15px 30px;
  border-bottom: 2px solid;
  background-color: #3F4E4F;
`;

export const Navigation = styled.nav`
  padding: 4px 4px;
`;