import React from "react";
import Header from "../Header";
import { useAuth0 } from "@auth0/auth0-react";
import Post from "../Post/Post";

const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? <>
          <Header />
          <Post />
        </>
          :
          <Header />

        }
      </header>
    </div>
  );
}

export default App;
