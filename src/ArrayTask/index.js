import React from "react";
import "./index.css"

export default class ArrayTaskComponent extends React.Component {

    state = {
        inputDate: "",
        inputDescription: "",
    }

    data = [
        {
            date: "1960",
            description: "Some events from 1960."
        },
        {
            date: "1990",
            description: "Some events from 1990."
        },
        {
            date: "1970",
            description: "Some events from 1970."
        },
        {
            date: "1980",
            description: "Some events from 1980."
        }
    ];

    inputedData = [];

    changeState = (ev) => {
        const variableName = ev.target.attributes["data-statename"].value;
        this.setState({
            [variableName]: ev.target.value 
        });
    }

    ownArraySort = (arr, func) => {
        const newArr = [...arr];
        for (let i = 0; i < newArr.length - 1; i++) {
            if (func(newArr[i + 1], newArr[i]) < 0) {
                newArr.push(newArr[i]);
                newArr.splice(i,1);
                i = -1;
            }
        }
        return newArr;
    }

    testOwnSort = () => {
        this.showArray(this.ownArraySort(this.data, (a, b) => b.date - a.date));
    }

    showArray = (arr) => {
        const outArr = [];
        arr.forEach(el => outArr.push([el.date, el.description]));
        console.table(outArr);
    }

    sortArray = () => {
        this.data.sort((a, b) => a.date - b.date);
    }

    addData = () => {
        const { inputDate, inputDescription } = this.state;

        if ( inputDate === "" || inputDescription === "") {
            console.log("Input all fields.");
            return;
        }

        if (isNaN(parseInt(inputDate))) {
            console.log("Input correct data field.");
            return;
        }

        const newElement = {
            date: inputDate,
            description: inputDescription
        };

        this.data.push(newElement);
        this.inputedData.push(newElement);
        this.sortArray();
        this.showArray(this.data);
    }

    deleteData = () => {
        const lastAdded = this.inputedData.pop();
        if (lastAdded === undefined) {
            console.log("Please add data before delete");
            return;
        }
        this.data.splice(this.data.indexOf(lastAdded), 1);
        this.showArray(this.data);
    }

    render() {
        const { inputDate, inputDescription} = this.state;

        return <div className="container array-task-container">
            <div className="inputs-container">
                <label htmlFor="inputDate">Year:</label>
                <input
                    id="inputDate"
                    type="number"
                    placeholder="Date"
                    className="green"
                    data-statename="inputDate"
                    value={inputDate}
                    onChange={this.changeState}></input>
                <label htmlFor="inputDate">Description:</label>
                <input
                    id="inputDescription"
                    type="text"
                    placeholder="Description"
                    className="green"
                    data-statename="inputDescription"
                    value={inputDescription}
                    onChange={this.changeState}></input>
                <button onClick={this.addData} className="green">Add</button>
                <button onClick={this.deleteData} className="red">Delete</button>
                <button onClick={this.testOwnSort} className="yellow">Own array sort</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Year</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { this.data.map(({date, description}, index) => <tr key={index}>
                        <td>{index}</td>
                        <td>{date}</td>
                        <td>{description}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        
    }
}