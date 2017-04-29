import React from 'react';
import { Link } from 'react-router';


const InstagramPhotos = (props) => {
  console.log(props, 'here are the props for isntagfranlknf');
  const card_text= 'this is a test'
  return (
    <ul className="cards">
      {
        props.allFoodPhotos && props.allFoodPhotos.data && props.allFoodPhotos.data.map(food => {
          return (
            <li className="cards__item">
            <div className="card">
              <div className="card__image">
                <img src={food.url}/>
              </div>
              <div className="card__content">
                <div className="card__title">Flex</div>
                <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                <button className="btn btn--block card__btn">Button</button>
              </div>
            </div>
          </li>
          )
         })
      }
    </ul>
  )

}

export default InstagramPhotos;
