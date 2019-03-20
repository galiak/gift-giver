import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Gift from './Gift';
import {max_number} from '../helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    };
  }

  addGift = () => {
    const {gifts} = this.state; // destructure gifts list to a local copy

    const ids = this.state.gifts.map(gift => gift.id); // array of ids
    
    // even though gifts a const, we can still modify it, just not assign it something else
    gifts.push({id: max_number(ids) + 1});
    this.setState({gifts}); // set the state to the new gifts list
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({gifts});
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => {
              return (
                <Gift 
                  key={gift.id} 
                  gift={gift}
                  removeGift={this.removeGift}
                />
              )
            })
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App;