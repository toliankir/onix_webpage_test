import React from "react";
import "./index.css";

export default class NeededComponent extends React.Component {
    list = ["template1","template2", "template3", "template4", "template5","template6"]
    
    lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quam temporibus eum voluptatibus, dicta, blanditiis et doloremque ut, rerum consectetur nesciunt est illo quaerat doloribus. Fugiat mollitia quae alias iusto?".split(' ');

    getRandomWordFromLorem() {
        return this.lorem[Math.round(Math.random() * (this.lorem.length - 1))];
    }
    render() {
        return <div className="container needed-content">
        <ul> 
            { this.list.map((element, index) => <li key={index}>{element}</li>) }
        </ul>
        <table>
            <thead>
                <tr>
                    { [...Array(6)].map((_, index) => <th key={`th_${index}`}>{this.getRandomWordFromLorem()}</th>) }
                </tr>
            </thead>
            <tbody>
                { [...Array(6)].map((_, index) => {
                return <tr key={`tr_${index}`}>{
                    [...Array(6)].map((_, index) => <td key={`td_${index}`}>{this.getRandomWordFromLorem()}</td>)
                }</tr>
                }) }
            </tbody>
        </table>
    </div>
    }
} 