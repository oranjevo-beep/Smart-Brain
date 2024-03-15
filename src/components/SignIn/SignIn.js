import React, { Component } from 'react';
import Logo from '../Logo/Logo';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user === 'wrong credentials') {
          alert('wrong credentials');
        }
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
      .catch((err) => console.log(err));
  };
  onSubmitRegester = () => {
    this.props.onRouteChange('register');
  };
  render() {
    return (
      <>
        <div className="fixed top-0 bottom-0 left-0 right-0 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  bg-gradient-to-r from-teal-400 to-yellow-200 z-30">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="w-32 mx-auto">
              <Logo />
            </div>

            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={this.onEmailChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-orange-400 hover:text-orange-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.onPasswordChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={this.onSubmitSignIn}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Sign in
                </button>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a
                onClick={this.onSubmitRegester}
                href="#"
                className="font-semibold leading-6 text-orange-400 hover:text-orange-300"
              >
                Regester now
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default SignIn;
