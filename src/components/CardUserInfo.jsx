import CardMain from "./CardMain";
import Search from './Search'
import { useFetchUsers } from "../hooks/useFetchUsers";
const CardUserInfo = () => {
  const [user, value, loading, handle] = useFetchUsers()
  return (
    <>
      <h1>devfinder</h1>

      <Search handle={handle} />
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
