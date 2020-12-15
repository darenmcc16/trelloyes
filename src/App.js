import React, {Component} from 'react';
import './App.css';
import List from './List';

//using class extends because we are dealing with arrays and objects
class App extends Component{
  static defaultProps = {
    store:{
      lists:[],
      allCards: {},
    }
  };

  render(){
    const {store} = this.props
    console.log(store.lists);
    return(
      <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {store.lists.map(list =>(
          <List
          //list components being passed as props
          key={list.id}
          header={list.header}
          //combining the cardIds array for the list with the allCards object
          cards={list.cardIds.map(id => store.allCards[id])}
          />
        ))}
      </div>
      </main>
    );
  }
}




export default App;
