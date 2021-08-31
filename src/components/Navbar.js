import React from 'react';
import Navbar from './Navbar';
//import Image from 'component/image';

const Nav = () => {
    return (
      <div>
        <div class="w3-top">
          <div class="w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="#home" class="w3-bar-item w3-button"><b>BR</b> Architects</a>
          
            <div class="w3-right w3-hide-small">
              <a href="#projects" class="w3-bar-item w3-button">Projects</a>
              <a href="#about" class="w3-bar-item w3-button">About</a>
              <a href="#contact" class="w3-bar-item w3-button">Contact</a>
            </div>
          </div>
        </div>

        <center><img class="w3-image" src="/img/architect.jpg" alt="Architecture" width="1500" height="800"></img></center>
            
        <div class="w3-display-middle w3-margin-top w3-center">
          <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span class="w3-hide-small w3-text-light-grey">Architects</span></h1>
        </div>
        
        <div class="w3-container w3-padding-32" id="projects">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
        </div>

        <div class="row">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Summer House</div>
              <br></br><br></br>
              {/*<img src="/public/img/house5.jpg" alt="House" style="width:100%"></img>*/}
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Brick House</div>
              <br></br><br></br>
              {/* <img src="/public/img/house2.jpg" alt="House" style="width:100%"></img> */}
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Renovated</div>
              <br></br><br></br>
              {/* <img src="/public/img/house3.jpg" alt="House" style="width:100%"></img> */}
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Barn House</div>
              <br></br><br></br>
              {/* <img src="/public/img/house4.jpg" alt="House" style="width:100%"></img> */}
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Summer House</div>
              <br></br><br></br>
              {/*<img src="/public/img/house5.jpg" alt="House" style="width:100%"></img>*/}
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Brick House</div>
              <br></br><br></br>
              {/* <img src="/public/img/house2.jpg" alt="House" style="width:100%"></img> */}
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Renovated</div>
              <br></br><br></br>
              {/* <img src="/public/img/house3.jpg" alt="House" style="width:100%"></img> */}
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">Barn House</div>
              <br></br><br></br>
              {/* <img src="/public/img/house4.jpg" alt="House" style="width:100%"></img> */}
            </div>
          </div>
        </div>

        <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
        </div>




      </div>
        
    );
}

export default Nav;