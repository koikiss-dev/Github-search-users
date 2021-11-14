import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'

//styled//
const Container = styled.div`
display: flex;
background: var(--bg-target);
border-radius: 10px;
margin: 2rem auto;
padding: 6px;
@media(min-width: 1000px){
  width: 55%;
  
}
`;
const Input = styled.input`
border: none;
width: 100%;
background: none;
outline: none;
color: #ffff;
font-size: 15px;
padding: 10px 0;
&::placeholder {
  color: var(--font-nrmal);
}
`;
const Button = styled.button`
border: none;
display: flex;
align-items: center;
color: #ffff;
background-color: var(--color-primary);
padding: 7px 2rem;
border-radius: 7px;
`;
const Search = ({handle}) => {
  
  return (
    <>
      <Container>
        <Input
          onKeyUp={(e) => (e.key === "Enter" ? handle(e) : null)}
          type="text"
          placeholder="Search GitHub username..."
        />
        <Button type="submit">
          <box-icon name="search" color="#ffff"></box-icon>
        </Button>
      </Container>
    </>
  );
}

Search.propTypes = {
  handle: PropTypes.func, //recuerda que puedes exportar lo que sea desde aqui y darle un valor despues en otro archivo uwu
}

export default Search


