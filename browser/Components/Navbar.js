import React from 'react';
import { Link } from 'react-router';


const Navbar = React.createClass({
  getInitialState: function() {
    return {
      iconName: 'fa fa-list-ul'
    }
  },
  toggleViews: function() {
    var newIcon = this.state.iconName === 'fa fa-th' ? 'fa fa-list-ul' : 'fa fa-th';
    this.setState({
      iconName: newIcon
    })
  },
  render: function() {
    let otherView = this.state.iconName === 'fa fa-list-ul' ? '/recipeList' : '/';
    return (
      <div>
        <div className="header">
          <div>
            <i className="fa fa-cutlery"></i>
            <span className="head-title">InstaFood box</span>
            <i className="fa fa-spoon"></i>
          </div>

          <div className='btn-container'>
            <div className='btn-link'  onClick={this.toggleViews}>
              <i id="switch-view-icon" className={this.state.iconName}/>
            </div>
            {/*<Button id="add-btn" type="button" text="add recipe" clickEvent={this.props.showForm} />*/}
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
});

export default Navbar;
