import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <ul>
        <li>
          <Link to="/profiles">
            <i className="fas fa-users" />{" "}
            <span className="hide-sm">People</span>
          </Link>
        </li>
        <li>
          <Link to="/posts">
            <i className="fas fa-atlas" />{" "}
            <span className="hide-sm">Posts</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />{" "}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <a onClick={logout} href="#!">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <div>
      {/* <h2>
        <Link to="/">
          <i className="fas fa-scroll" /> MAGAZINE
        </Link>
      </h2> */}
      <ul>
        <li>
          <Link to="/profiles">People</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar bg-dark">
      <Link to="/" className="hide-xs">
        <small>
          <i className="fas fa-scroll" />
        </small>{" "}
        ~ MAGAZINE
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
