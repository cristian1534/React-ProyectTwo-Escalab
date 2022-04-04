import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CharactersContextProvider from "./context/CharactersContext";

const Characters = lazy(() => import("./components/characters/Characters"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Details = lazy(() => import("./components/details/Details"));

const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <button class="btn btn-dark text-nowrap" type="button">
          <span class="spinner-border spinner-border-sm mr-2"></span>
          Loading data...
        </button>
      }
    >
      <Layout>
        <Switch>
          <Route exact path="/">
            <CharactersContextProvider>
              <Characters />
            </CharactersContextProvider>
          </Route>
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Layout>
    </Suspense>
  </BrowserRouter>
);

export default App;
