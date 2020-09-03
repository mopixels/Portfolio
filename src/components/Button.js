import styled from "styled-components"

const Button = styled.button`
  width: 80%;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  border-radius: 10rem;
  border: 2px solid #520171;
  background-color: transparent;
  color: #520171;
  font-weight: 900;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #520171;
  }
  &:focus {
    outline: none;
  }
`

export default Button
