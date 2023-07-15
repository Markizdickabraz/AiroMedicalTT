import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";



const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 15px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: lightblue;
  }
`;

const BackLink = () => {
  return (
    <StyledLink to={`/`}> 
      <HiArrowLeft size="26" />
    </StyledLink>
  );
};

export default BackLink;

