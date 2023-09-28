import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../constants/actionTypes";
import useStyles from "./styles";

const Navbar = () => {
  const auth = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate(`/auth`);
  };

  useEffect(() => {
    const token = auth?.authData?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [navigate]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={"/memories.png"}
          alt="icon"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {auth?.authData?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={auth?.authData?.result.name}
              src={auth?.authData?.result.imageUrl}
            >
              {auth?.authData?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {auth?.authData?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
