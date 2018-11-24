import React, { Component } from 'react'
import'./LS_pictures.css'
import { Divider, Image } from 'semantic-ui-react'
import image7 from './image7.jpg';
import image6 from './image6.jpg';
import image9 from './image9.jpg';
import image8 from './image8.jpg';
import Image2 from './Image2.png';
import Image4 from './Image4.png';


export default class LS_photos extends Component {
  render() {
    return (
      <div className="lsphotoenglobe">
        <Image.Group size='medium'>
          <Image src={image7} />
          <Image src={image6} />
          <Divider hidden />
          <Image src={image8} />
          <Image src={image9} />
          <Divider hidden />
          <Image src={Image2} />
          <Image src={Image4} />
        </Image.Group>
      </div>
    )
  }
}

//        <ReactFancyBox
// img src = { image9 } />
//   <img  />
//   <img/>
//   <img  />
//   <img  />
//   <img  />
//         />