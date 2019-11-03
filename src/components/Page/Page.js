import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavItem, Container, Icon } from "react-materialize";
import GridLoader from "react-spinners/GridLoader";

const Page = props => (
  <>
    <Navbar
      fixed
      alignLinks="right"
      brand={
        <img
          alt="Marvel"
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
        />
      }
    >
      <NavItem href="/heroes/search">
        <Icon>search</Icon>
      </NavItem>
      <NavItem href="/heroes">Heroes</NavItem>
    </Navbar>
    <div className="div">
      {props.loading && (
        <div className="view-loading">
          <div className="sweet-loading">
            <GridLoader
              loaderStyle={{
                textAlign: "center",
                margin: "auto",
                marginTop: "20%",
                overflow: "hidden"
              }}
              className="loading"
              sizeUnit={"px"}
              size={50}
              color={"rgb(230,0,25)"}
              loading={props.loading}
            />
          </div>
        </div>
      )}
      <div className="background">
        <Container>{!props.loading && props.children}</Container>
      </div>
    </div>
  </>
);

Page.propTypes = {
  loading: PropTypes.bool
};
Page.defaultProps = {
  loading: false
};

export default Page;
