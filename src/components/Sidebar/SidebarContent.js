import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./Material_Title_Panel";
import { Link } from "react-router-dom";

import '../../stylesheets/SideNavbar.css';

const styles = {
  sidebar: {
    width: 150,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "black",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "white"
  },
  content: {
    display:"flex",
    flexDirection: "column",
    padding: "16px",
    height: "100%",
    backgroundColor: "white",
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div className='sidebar-content' style={styles.content}>
        <Link to='/'>
          Home
        </Link>
        <Link to='/collections'>
          Collections
        </Link>
        <Link to='/shop'>
          Shop
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
        <div className='social'>
          <a href='https://www.instagram.com'>
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href='https://www.facebook.com'>
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
        </div>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;