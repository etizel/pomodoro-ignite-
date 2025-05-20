import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100rem;
  height: 100vh;
  margin: 5rem 10rem 5rem 10rem;
  padding: 2.5rem;
  

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;    

  display: flex;
  flex-direction: column;
`
