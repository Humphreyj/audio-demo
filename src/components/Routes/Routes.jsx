import React from "react";
import { Route } from "react-router-dom";
import Splash from "../Splash";
import ItemPage from "./ItemPage";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Splash} />

      <Route
        path="/item/:name"
        render={(props) => {
          return (
            <ItemPage
              {...props}
              
            />
          );
        }}
      />
    </div>
  );
};

export default Routes;
