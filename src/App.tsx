import React from "react";
import { Provider } from "react-redux";
import RoutesApp from "./routes";
import store from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RoutesApp />
    </Provider>
  );
}

export default App;
