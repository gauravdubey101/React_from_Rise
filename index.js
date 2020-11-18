import React from 'react';
import ReactDom form 'react-dom';

const people = [
    {name:'gaurav'},
    {name:'ram'},
    {name:'foun'}
]
const element = React.createElement('ol',null,people.map((person) =>(
    React.createElement('li',null,person.name)
))
)

