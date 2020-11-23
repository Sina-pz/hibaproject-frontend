import React from 'react';
import logo from './logo.svg';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage/index";
import NavBar from "./components/Header/NavBar";
import Login from "./components/Login";
import LogoutButton from "./components/Login";
import Actors from "./components/Actors";
import GenrePage from "./components/Genre/GenrePage";
import MovieDetails from "./components/Show/MovieDetails";
import ActorDetails from "./components/Actors/ActorDetails";
import SearchMovie from "./components/Header/SearchMovie";
import { useAuth0 } from "@auth0/auth0-react";
import Auth0provider from "./components/Auth0Provider";
import { useHistory } from "react-router-dom";
import './App.css';



const App = () => {
  
  return (
    <Auth0provider>
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <LoginButton/>
        <LogoutButton/> */}
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/movie/:movie_id">
          <MovieDetails />
        </Route>
        <Route exact path="/Actors">
          <Actors />
        </Route>
        <Route exact path="/Actors/:page">
          <Actors />
          </Route>
        <Route exact path="/Actor/:person_id">
          <ActorDetails />
        </Route>
        <Route exact path="/genrePage/:genre_id">
          <GenrePage />
        </Route>
        <Route exact path="/genrePage/:genre_id/:page">
          <GenrePage />
        </Route>
        <Route exact path="/Search/:query">
          <SearchMovie />
        </Route>
        <Route exact path="/Search/:query/:page">
          <SearchMovie />
        </Route>
      </Switch>
      {/* <GlobalStyles /> */}
  </Auth0provider>
  );
};

export default App;
