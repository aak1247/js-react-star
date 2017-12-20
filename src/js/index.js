import {StarList, Star} from './StarList'
import ReactDOM from 'react-dom'
import React from 'react'

console.log("hello");

ReactDOM.render(
    <StarList total={5}/>,
    document.getElementById("root")
)

// ReactDOM.render(
//     <Star state={"empty"} />,
//     document.getElementById("root")
// )