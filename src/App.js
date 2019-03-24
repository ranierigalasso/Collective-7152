import React from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./components/Sidebar/Material_Title_Panel";
import SidebarContent from "./components/Sidebar/SidebarContent";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";

import Home from './components/Home';
import Collections from './components/Collections';
import Shop from './components/Shop';
import Contact from './components/Contact';
import LongDistance from './components/LongDistance';

import './stylesheets/App.css';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "black",
    padding: 8
  },
  content: {
    padding: "0rem"
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span id='header'>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <a href='/'>
          <img id='logo' src={require('./images/logo.png')} alt='logo'/>
        </a>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Router>

      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div className='app-container' style={styles.content}>
              <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/collections'} component={Collections} /> 
                <Route path={'/long-distance'} component={LongDistance} /> 
                <Route path={'/shop'} component={Shop} /> 
                <Route path={'/contact'} component={Contact} /> 
              </Switch>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
      </Router>

    );
  }
}
