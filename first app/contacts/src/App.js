import React, { Component } from 'react';



class ContactList extends React.Component{
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person)=>(
        <li key = {person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component{
  render() {
    return (
       <div className="App">
         <ContactList contacts = {[
           {name:'Gaurav'},
           {name:'Dubey'},
           {name:'gd'}
         ]} />
         <ContactList contacts={[
           {name:'Happy'},
           {name:'jeo B'},
           {name:'2020'}
         ]} />
         

       </div>
    );
  }
}


export default App;
