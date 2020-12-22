import React, {Component} from 'react';
import './App.css';
import List from './List';
import STORE from './STORE';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
    key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component{
  state={
    store: STORE,
  };
//We want to delete by cardId. We need to delete the ids in both lists and allCards.
//We use the lists.map and .filter to loop through the array to then omit the clicked item
//After the card is omitted then we set the new state
  handleDeleteCard=(cardId) =>{
    const {lists, allCards} = this.state.store;
    const newLists = lists.map(list =>({
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
  
    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };
//When the + Random button is clicked run the newRandomCard() function
//then it will create a new list by using map to go through the array
//then returns a new card id
//finally we update the the state with setState
  handleAddCard = (listId) =>{
    const newCard = newRandomCard()
    const newLists = this.state.store.lists.map(list =>{
      if(list.id === listId){
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store:{
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };
    

render(){
  const {store}=this.state
  return(
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
      {store.lists.map(list =>(
        <List
        key={list.id}
        id={list.id}
        header={list.header}
        cards={list.cardIds.map(id => store.allCards[id])}
        onClickDelete={this.handleDeleteCard}
        onClickAdd={this.handleAddCard}
        />
      ))}
      </div>
    </main>
  )
}

}

export default App;