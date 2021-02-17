import React, { FC, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components";
import routes from "./routes";
import MainLayout from "./components/Layout/MainLayout";

const App: FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log(routes);
  return (
    <Router>
      <Navigation sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainLayout sidebarOpen={isSidebarOpen}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={true}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
