import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';


it('renders without crashing', () =>{
    const div = document.createElement('div')
    ReactDOM.render(<List key='testKey' header='testHeader' cards={[{'a':{id: 'a', title: 'First card', content: 'lorem ipsum'}}]}/>, div) 
    ReactDOM.unmountComponentAtNode(div);
})

it('renders UI as expected', () =>{
    const tree = renderer
    .create(<List key='testKey' header='testHeader' cards={[{'a':{id: 'a', title: 'First card', content: 'lorem ipsum'}}]}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})