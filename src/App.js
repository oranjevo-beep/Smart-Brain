import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Overlay from './components/Overlay/Overlay';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Regester from './components/Regester/Regester';
import SignIn from './components/SignIn/SignIn';

const returnClarifaiRequestOption = (imageURL) => {
  const PAT = '981e9e4c64504e9ea20b68908fb60552';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = '7bw8yfvn31nd';
  const APP_ID = 'test';
  // Change these to whatever model and image URL you want to use

  const IMAGE_URL = imageURL;
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
            // "base64": IMAGE_BYTES_STRING
          },
        },
      },
    ],
  });
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

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
    };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box });
  };
  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  onBtnSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch(
      'https://api.clarifai.com/v2/models/' + 'face-detection' + '/outputs',
      returnClarifaiRequestOption(this.state.input)
    )
      .then((response) => response.json())
      .then((result) => {
        this.displayFaceBox(this.calculateFaceLocation(result));

        // regions.forEach((region) => {
        //   // Accessing and rounding the bounding box values
        //   const boundingBox = region.region_info.bounding_box;
        //   const topRow = boundingBox.top_row.toFixed(3);
        //   const leftCol = boundingBox.left_col.toFixed(3);
        //   const bottomRow = boundingBox.bottom_row.toFixed(3);
        //   const rightCol = boundingBox.right_col.toFixed(3);

        //   region.data.concepts.forEach((concept) => {
        //     // Accessing and rounding the concept value
        //     const name = concept.name;
        //     const value = concept.value.toFixed(4);

        //     console.log(
        //       `${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`
        //     );
        //   });
        // });
      })

      .catch((error) => console.log('error', error));
    this.setState({
      overlayIsHidden: !this.state.overlayIsHidden,
      ImageIsHidden: !this.state.ImageIsHidden,
    });
  };
  closeModal = () => {
    this.setState({ overlayIsHidden: !this.state.overlayIsHidden });
    this.setState({ ImageIsHidden: !this.state.ImageIsHidden });
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
            />
            <Overlay
              overlayIsHidden={this.state.overlayIsHidden}
              closeModal={this.closeModal}
            />
            <FaceRecognition
              closeModal={this.closeModal}
              imageIsHidden={this.state.ImageIsHidden}
              imageUrl={this.state.imageUrl}
              box={this.state.box}
            />
          </div>
        ) : this.state.route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Regester onRouteChange={this.onRouteChange} />
        )}
        <ParticlesBg type="lines" bg={true} />
      </div>
    );
  }
}

export default App;
