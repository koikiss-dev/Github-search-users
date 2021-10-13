import React, { useEffect, useState } from "react";
import githubApi from "../api/apiConfig";
import CardMain from "./CardMain";
import styled from "styled-components";
const CardUserInfo = () => {
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false)
  const handle = (e) => {
    /* e.preventDefault() */
    setValue(e.target.value);
  };
  const getUsers = () => {
    setLoading(true)
    githubApi.get(value === "" ? "fidalgodev" : 
    encodeURI(value)).then(({ data }) => {
      setUser([data]);
      setLoading(false)
    });
  };
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--bg-target);
    border-radius: 10px;
    margin: 2rem auto;
    padding: 6px;
    align-items: center;
    
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
  useEffect(() => {
    
    getUsers();
    return () => {};
  }, [value]);
  return (
    <>
      <h1>devfinder</h1>

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
      { 
      
      user.map(
        ({
          id,
          avatar_url,
          name,
          login,
          created_at,
          bio,
          public_repos,
          followers,
          following,
          location,
          blog,
          twitter_username,
          company,
        }) => {
          return (
            <CardMain
              key={id}
              avatar={loading ? 'https://lh6.googleusercontent.com/proxy/V024EV8z_Bsk5_uDzQ2D7jMrTqIWyQrSpm8drimHGyqY7YUTX_ODhN0NUf7r1GKqFmuEccouSMRMSqi47-fW6wrceYOcmjBP6-Y-7QiCtnxX4jeo2VqoamN1Ad4wlG9MJ60DAueJFVU=s0-d' : avatar_url}
              name={name}
              userName={login}
              date={created_at}
              bio={bio}
              repos={public_repos}
              followers={followers}
              following={following}
              location={location === null ? "Not Availible" : location}
              personalPage={blog === "" ? "Not Availble" : blog}
              twitter={
                twitter_username === null ? "Not Avalable" : twitter_username
              }
              jobLocation={company === null ? "Not Availible" : company}
            />
          );
        }
      )
      }
      
    </>
  );
};

export default CardUserInfo;
