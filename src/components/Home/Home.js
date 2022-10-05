import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Header from "../Header";
import Post from "../Post/Post";
import Slider from "../Slider/Slider";
import Container from '@mui/material/Container';



const Home = () => {
  const [name, setName] = React.useState('Cat in the Hat');
  const { isAuthenticated } = useAuth0();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container maxWidth="xl">
      <>
        <header className="App-header">
          {isAuthenticated ? <>
            <Header />
            <Post />
            
          </>
            :
            <Header />
           
          }
        </header>

        <Slider />
      
     
      </>
      </Container>
  
  )
}

export default Home;