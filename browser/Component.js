import React from 'react';
import { Link } from 'react-router';


const Compo = (props) => {
  const card_text= 'this is a test'
    return (
      <div id="got-gridbox">
        <figure>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/daenerys-targaryen.png" alt="Black and white photograph of Emilia Clarke as Daenerys Targaryen"/>
            <figcaption>Daenerys Targaryen</figcaption>
        </figure>
        <figure id="tyrion">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tyrion-lannister.png" alt="Black and white photograph of Peter Dinklage as Tyrion Lannister"/>
            <figcaption>Tyrion Lannister</figcaption>
        </figure>
        <figure>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jamie-lannister.png" alt="Black and white photograph of Nikolaj Coster-Waldau as Jamie Lannister"/>
            <figcaption>Jamie Lannister</figcaption>
        </figure>
        <figure>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jon-snow.png" alt="Black and white photograph of Kit Harington as Jon Snow"/>
            <figcaption>Jon Snow</figcaption>
        </figure>
        <figure>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/robb-stark.png" alt="Black and white photograph of  Richard Madden as Robb Stark"/>
            <figcaption>Robb Stark</figcaption>
        </figure>
        <figure>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cersei-lannister.png" alt="Black and white photograph of Lena Headey as Cersei Lannister"/>
            <figcaption>Cersei Lannister</figcaption>
        </figure>
      </div>
    )

}

export default Compo;