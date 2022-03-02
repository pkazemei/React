import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);

            this.state={
                age: this.props.age
            };
    }

    render(){

        let clickHandler =() =>{
            this.setState({age: this.state.age+1})
        }

        let{firstName, lastName, hairColor}=this.props;

        return <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={clickHandler} className='btn-primary'>Birthday button for {firstName} {lastName}</button>
            </div>
    }
}

export default PersonCard;