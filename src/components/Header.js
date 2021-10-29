import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { startLogout } from '../actions/auth';

// export const Header = ({startLogout}) => (
//   <header>
//     <div className="logo">
//       <h1>KitchenVille</h1>
//     </div>

//     <div className="nav">
//       <NavLink to="/" className="nav-links" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//       <NavLink to="/create" className="nav-links" activeClassName="is-active">Create Recipie</NavLink>
//     </div>

//     <div className="dropdown">
//       <NavLink to="/help" className="nav-links" activeClassName="is-active">Help</NavLink>
//     </div>
//     <button onClick={startLogout}>Logout</button>
//   </header>
// );


// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout())
// });

// export default connect(undefined, mapDispatchToProps)(Header);