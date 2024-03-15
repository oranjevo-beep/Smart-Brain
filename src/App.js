import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Overlay from './components/Overlay/Overlay';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Regester from './components/Regester/Regester';
import SignIn from './components/SignIn/SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      overlayIsHidden: true,
      ImageIsHidden: true,
      route: 'signin',
      isSignedIn: false,
      imageArray: [],
      isLoading: true,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
    };
  }
  // load user
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  // populate data array
  populateDataArray = (data) => {
    const array = [];
    for (const c of data.outputs[0].data.concepts) {
      if (c.value > 0.96) {
        array.push(c.name);
      }
    }
    this.setState({ imageArray: array });
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  onBtnSubmit = (e) => {
    e.preventDefault();

    this.setState({ imageUrl: this.state.input, input: '' });
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(
                Object.assign(this.state.user, { entries: count.entries })
              );
            })
            .catch(console.log);
        }
        this.populateDataArray(response);
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err));

    this.setState({
      overlayIsHidden: !this.state.overlayIsHidden,
      ImageIsHidden: !this.state.ImageIsHidden,
    });
  };

  closeModal = () => {
    this.setState({
      overlayIsHidden: !this.state.overlayIsHidden,
      ImageIsHidden: !this.state.ImageIsHidden,
      imageUrl: '',
      imageArray: [],
    });
  };
  onRouteChange = (route) => {
    this.setState({ route });
  };

  render() {
    return (
      <div className="container mx-auto px-4 ">
        {this.state.route === 'home' ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onBtnSubmit={this.onBtnSubmit}
              userName={this.state.user.name}
              userEntries={this.state.user.entries}
              input={this.state.input}
            />
            <Overlay
              overlayIsHidden={this.state.overlayIsHidden}
              closeModal={this.closeModal}
            />
            <FaceRecognition
              closeModal={this.closeModal}
              imageIsHidden={this.state.ImageIsHidden}
              imageUrl={this.state.imageUrl}
              isLoading={this.state.isLoading}
              // box={this.state.box}
              imageArray={this.state.imageArray}
            />
          </div>
        ) : this.state.route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Regester
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
        <ParticlesBg type="lines" bg={true} />
      </div>
    );
  }
}

export default App;
