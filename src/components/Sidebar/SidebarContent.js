import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./Material_Title_Panel";

const styles = {
  sidebar: {
    width: 125,
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
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="/collections" style={styles.sidebarLink}>
          Collections
        </a>
        <a href="/shop" style={styles.sidebarLink}>
          Shop
        </a>
        <a href="/contact" style={styles.sidebarLink}>
          Contact
        </a>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;