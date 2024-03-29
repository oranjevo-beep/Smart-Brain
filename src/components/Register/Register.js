import React, { Component } from 'react';
import Logo from '../Logo/Logo';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerEmail: '',
      registerName: '',
      registerPassword: '',
    };
  }
  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
    console.log(this.state.registerEmail);
  };
  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
    console.log(this.state.registerName);
  };
  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };
  onSubmitRegister = () => {
    fetch('https://lit-springs-27957-286d11650820.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.registerEmail,
        name: this.state.registerName,
        password: this.state.registerPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };
  render() {
    return (
      <>
        <div className="fixed top-0 bottom-0 left-0 right-0 flex min-h-full flex-1 flex-col justify-center px-6 py-4 md:py-8 lg:px-8  bg-gradient-to-r from-teal-400 to-yellow-200 z-30">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="w-32 mx-auto">
              <Logo />
            </div>

            <h2 className="mt-2 text-center text-2xl font-bold leading-6 tracking-tight text-gray-900">
              Register your account
            </h2>
          </div>

          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
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
                    onChange={this.onEmailChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={this.onNameChange}
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
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
                </div>
                <div className="mt-2">
                  <input
                    onChange={this.onPasswordChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={this.onSubmitRegister}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Register
                </button>
              </div>
            </div>

            <p className="mt-2 text-center text-sm text-gray-500">
              Already a member?{' '}
              <a
                onClick={() => this.props.onRouteChange('signin')}
                href="#"
                className="font-semibold leading-6 text-orange-400 hover:text-orange-300"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
