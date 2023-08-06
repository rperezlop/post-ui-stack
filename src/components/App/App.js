
import React from "react";
import {Provider} from 'react-redux';
import mainReducer from '../../redux/store';
import Post from "../Post";
import {ThemeProvider} from "@mui/material";
import theme from "../../theme";
import ToastMessage from "../../commonComponents/ToastMessage";

const App = () => {
  return (
    <div>
      <Provider store={mainReducer}>
    <ThemeProvider theme={theme}>
       {/*   <Suspense fallback={<LinearProgress />}>
            <AppRoutes/>
          </Suspense>
          <ToastMessage/>*/}
      <Post></Post>
     <ToastMessage/>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
