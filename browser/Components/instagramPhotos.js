import React from 'react';
import { Link } from 'react-router';
import Modal from './Modal'
import RecipeCard from './RecipeCard'
import Collapse from 'react-bootstrap/lib/Collapse';
import { Grid, Row, Col, Thumbnail, Button, Fade } from 'react-bootstrap';

class InstagramPhotos extends React.Component {
  constructor(props){
    super(props)
    this.whereIsRecipe = this.whereIsRecipe.bind(this);
    this.state = { isModalOpen: false }
  }
  whereIsRecipe(tags) {
    this.props.getRecipe(tags)
    this.openModal()
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
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
                  <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <div id="content">
                      <h2 style={{fontSize:'1.7em', fontWeight:'900'}}>Recipe based on tags:</h2>
                      {
                        this.props.recipes && this.props.recipes.map(recipe => {
                           return (
                            <RecipeCard key={recipe.id}
                              recipeImage={recipe.image}
                              title={recipe.title}
                              duration={recipe.readyInMinutes}
                              calories={recipe.healthScore}
                              servings={recipe.servings}
                              sourceTitle={recipe.spoonacularSourceUrl}
                            />

                           )
                        })
                      }
                    </div>
                    <p><button onClick={() => this.closeModal()}>Close</button></p>
                  </Modal>

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
