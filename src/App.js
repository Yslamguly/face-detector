import React,{Component} from "react";
import './App.css';
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Clarifai from 'clarifai';
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey : '5f1aa879e6c647029a7ccca461a5454e'
});
const particlesOptions = {
  background: {
    color: {
      value: "linear-gradient(to left, #a0b73b 0% , #2468fc)",
    },
  },
  fpsLimit: 40,
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 270,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1.5,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 700,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,

}

class App extends Component{
  constructor() {
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{}
    }
  }
  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) =>{
    console.log(box)
    this.setState({box:box})
  }
  onInputChange = (event) =>{
    this.setState({input:event.target.value})
  }
  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input})
    app.models
        .predict(
            {
              id: "a403429f2ddf4b49b307e318f00e528b", // id of FACE_DETECT_MODEL model
              version: "34ce21a40cc24b6b96ffee54aabff139",
            },
            this.state.input)
        .then(response => {
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err =>console.log(err))
  }
  render(){
    const particlesInit = async (main) => {
      await loadFull(main);
    };
    const {imageUrl,box} = this.state
    return (

      <div className="App">
        <Particles
            className={'particles'}
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}/>
        <Logo/>
        <ImageLinkForm onInputChange={this.onInputChange}
                       onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={box} imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
