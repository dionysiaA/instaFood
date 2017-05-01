import React from 'react';

class RecipeCard extends React.Component {
  constructor(props){
    super(props)
    this.fillHeart = this.fillHeart.bind(this)
  }
  fillHeart(event){
    if(event.target.className.includes('fa-heart')){
      event.target.classList.add('fa-heart')
    } else {

    }
  }
  render(){
    return (
      <div className="recipe">
        <div className="image">
          <img src={this.props.recipeImage}/>
            <div className="likes">
              <i className="fa fa-heart-o lv" data-test="pulse"
                 onClick={(evt) => this.fillHeart(evt)}/>
            </div>
            <div className="name">
              <h4>
                <a style={{color: '#FFF'}} href={this.props.sourceTitle}>{this.props.title}</a>
              </h4>
            </div>
        </div>
        <ul style={{marginTop: 0}} className="media">
          <li><i className="fa fa-clock-o"/> {this.props.duration} Minutes</li>
          <li><i className="fa fa-leaf"/>{this.props.calories} Calories</li>
          <li><i className="fa fa-cutlery"/>{this.props.servings} People</li>
        </ul>
      </div>
    )
  }
}

export default RecipeCard;
