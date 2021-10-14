import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const CardMain = ({
  avatar,
  name,
  userName,
  bio,
  date,
  repos,
  followers,
  following,
  location,
  personalPage,
  twitter,
  jobLocation,
}) => {
  const UserContainer = styled.section`
    background-color: var(--bg-target);
    padding: 20px;
    border-radius: 15px;
    margin: 0 auto;
    @media (min-width: 1000px) {
      width: 50%;
    }
  `;

  const UserMain = styled.div`
    display: flex;
    align-items: center;
    color: #ffff;

    @media (min-width: 1000px) {
      justify-content: center;
      flex-flow: column;
    }
  `;
  const AvatarUser = styled.img`
    border-radius: 100%;
    max-width: 9rem;
    margin: 0 15px 0 0;
    @media (min-width: 1000px) {
      margin: 0;
      max-width: 18rem;
    }
  `;
  const DataContainerName = styled.div`
    line-height: 25px;
    @media (min-width: 1000px) {
      display: flex;
      align-items: center;
      flex-flow: column;
      margin: 2rem 0 0 0;
    }
  `;
  const DataUser = styled.div`
    @media (min-width: 1000px) {
      text-align: center;
    }
  `;
  const Name = styled.h2`
    font-size: 18px;
    @media (min-width: 1000px) {
      font-size: 25px;
    }
  `;
  const UserName = styled.p`
    color: var(--color-primary);
    font-size: 15px;
    @media (min-width: 1000px) {
      font-size: 18px;
    }
  `;
  const JoinedData = styled.span`
    font-size: 15px;
  `;
  //bio
  const Description = styled.p`
    line-height: 27px;
    margin: 2.5rem 0;
  `;
  //down
  const ContainerInfoNumber = styled.div`
    background: var(--bg-data);
    border-radius: 10px;
    display: flex;
    padding: 1.5rem 2.5rem;
    justify-content: space-between;
  `;
  const Repos = styled.div`
    text-align: center;
    font-size: 13px;
  `;
  const Followers = styled(Repos)``;
  const Following = styled(Repos)`
    margin: 0;
  `;
  const Title = styled.p`
    color: var(--font-nrmal);
  `;
  const Data = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 10px 0 0 0;
  `;
  //otherData
  const ContainerOtherData = styled.div`
    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 15px;
      place-items: center;
    }
  `;
  const ContainerData = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0 0 0;
    overflow: hidden;
  `;
  const Date = styled.p`
    margin: 0 0 0 10px;
  `;
  const Link = styled.a`
    text-decoration: none;
    color: #ffff;
    margin: 0 0 0 10px;
  `;

  return (
    <>
      <UserContainer>
        {/* top */}
        <UserMain>
          <AvatarUser src={avatar} alt="userAvatar" />
          <DataContainerName>
            <DataUser>
              <Name>{name}</Name>
              <UserName>@{userName}</UserName>
            </DataUser>
            <JoinedData>Joined {date}</JoinedData>
          </DataContainerName>
        </UserMain>
        {/* top */}
        <Description>{bio}</Description>
        {/*information*/}
        <ContainerInfoNumber>
          <Repos>
            <Title>Repos</Title>
            <Data>{repos}</Data>
          </Repos>
          <Followers>
            <Title>Followers</Title>
            <Data>{followers}</Data>
          </Followers>
          <Following>
            <Title>Following</Title>
            <Data>{following}</Data>
          </Following>
        </ContainerInfoNumber>
        {/*information*/}
        {/*other infomation */}
        <ContainerOtherData>
          <ContainerData>
            {" "}
            <box-icon
              name="map-pin"
              type="solid"
              color="#ffffff"
            ></box-icon>{" "}
            <Date>{location}</Date>{" "}
          </ContainerData>
          <ContainerData>
            {" "}
            {/* <a href=""></a> */}
            <box-icon name="link" color="#ffffff"></box-icon>{" "}
            <Link href={personalPage} target="_blank">
              {personalPage}
            </Link>{" "}
          </ContainerData>
          <ContainerData>
            {" "}
            <box-icon
              type="logo"
              name="twitter"
              color="#ffffff"
            ></box-icon>{" "}
            <Date>{twitter}</Date>
          </ContainerData>
          <ContainerData>
            {" "}
            <box-icon name="buildings" color="#ffffff"></box-icon>{" "}
            <Date>{jobLocation}</Date>
          </ContainerData>
        </ContainerOtherData>
        {/*other infomation */}
      </UserContainer>
    </>
  );
};

CardMain.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  userName: PropTypes.string,
  bio: PropTypes.string,
  date: PropTypes.string,
  repos: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
  location: PropTypes.string,
  personalPage: PropTypes.string,
  twitter: PropTypes.string,
  jobLocation: PropTypes.string,
};

export default CardMain;
