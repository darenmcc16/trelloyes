import React from 'react';
import './List.css';
import Card from './Card';


//add the id portion to the <Card>
//add onClickDelete
//add onClick prop for adding a card
//define the props at the bottom 
export default function List(props){
    return(
        <section className='List'>
            <header className='List-header'>
            <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card) =>
                <Card
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                onClickDelete={props.onClickDelete}
                />
                )}
                <button onClick={() => props.onClickAdd(props.id)} type='button' className='List-add-button'>+ Add Random</button>
            </div>
        </section>

        
    )
}

List.defaultProps = {
    onClickAdd: () => {},
}

