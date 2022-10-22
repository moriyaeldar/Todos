const { connect } = ReactRedux;
const { Link } = ReactRouterDOM;

import {  onLogout,onLogin,onSignup } from '../store/user.actions.js'
import { LoginSignup } from "../cmps/login-signup.jsx";

class _Home extends React.Component {
  onLogin = (credentials) => {
    this.props.onLogin(credentials)
}
onSignup = (credentials) => {
    this.props.onSignup(credentials)
}
onLogout = () => {
    this.props.onLogout()
}

  render() {
    const { user } = this.props;
    return (
      <section className="home bg-info p-2 text-dark bg-opacity-25 margin">
        {user && (
          <section>
            <Link className="link-dark margin" to={`/user/${user._id}`}>
              User profile
            </Link>
            <section className="user-info margin ">
              <pre>wellcom back! {JSON.stringify(user.username)}</pre>
              <button
                type="button"
                className=" logout btn btn-outline-danger margin"
                onClick={this.onLogout}
              >
                Logout
              </button>
            </section>
          </section>
        )}
        <h2>Todo App</h2>
        {!user && <LoginSignup onLogin={this.onLogin} onSignup={this.onSignup}/>}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userModule.user
  };
}

const mapDispatchToProps = {
onSignup,
onLogin,
  onLogout
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);


