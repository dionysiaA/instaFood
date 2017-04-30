import React from 'react';
import { Link } from 'react-router';

class InstagramPhotos extends React.Component {
  constructor(props){
    super(props)
    this.whereIsRecipe = this.whereIsRecipe.bind(this);
  }
  whereIsRecipe(tags) {
    this.props.getRecipe(tags)
  }

  render(){
    return (
      <ul className="cards">
        {
          this.props.allFoodPhotos && this.props.allFoodPhotos.data && this.props.allFoodPhotos.data.map((food,idx) => {
            return (
              <li key={idx} className="cards__item">
              <div className="card">
                <div className="card__image">
                  <img src={food.url}/>
                </div>
                <div className="card__content">
                  <div className="card__title">Tags:</div>
                  <ul className="card__text">
                  {
                    food.tags.map((tag,fix) => (<li key={fix}>#{tag}</li>))
                  }
                  </ul>
                  <button className="btn btn--block card__btn" onClick={ () => this.whereIsRecipe(food.tags)}>Recipe</button>
                </div>
              </div>
            </li>
            )
           })
        }
      </ul>
    )
  }
}

export default InstagramPhotos;
