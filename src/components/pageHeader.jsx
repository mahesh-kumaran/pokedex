import React from "react";

const headerStyles = {
  container: {
    width: "100%",
    marginBottom: "10px",
    backgroundColor: 'blue'
  },

  logoIcon: {
    height: "85px",
    margin: "20px",
  },

  fav: {
    color: "red",
    float: "right",
    width: "50px",
    height: "50px",
    zIndex: 1,
    margin: "45px",
  },
};

const Header = () => {
  return (
    <React.Fragment>
      <div style={headerStyles.container}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          }
          alt={""}
          style={headerStyles.logoIcon}
        ></img>
        <span>
          <i
            className="fa fa-heart fa-4x"
            aria-hidden="true"
            style={headerStyles.fav}
          ></i>
        </span>
      </div>
    </React.Fragment>
  );
};

export default Header;
