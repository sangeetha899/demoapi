import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            search: " ",
        }
    }
    componentDidMount() {
        axios.get('https://gorest.co.in/public-api/users')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    setvalue = (e) => {
        this.setState({
            search: e.target.value,
        })
    }


    isDelete = (number) => {
        alert("hello");
        axios.delete(`https://gorest.co.in/public-api/users/${number}`)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        let { posts, search } = this.state;
        let filteredlist = posts.filter(val => {
            return val.name.toLowerCase().includes(search.toLowerCase())
        })
        return (
            <>
                <p style={{ fontWeight: "bold" }}>Welcome to React!!</p>
                <input
                    className="input"
                    style={{ width: "50%" }}
                    placeholder="search......."
                    type="text"
                    value={this.state.search}
                    onChange={this.setvalue}
                />

                <ul style={{ textDecoration: "none", listStyleType: "none" }}>
                    {

                        filteredlist.map((val) => {
                            return (
                                <div style={{
                                    border: "1px solid grey",
                                    width: "25%",
                                    marginTop: "20px",
                                    marginLeft: "40%",
                                    borderRadius: "4px",
                                    backgroundColor: "gray"
                                }}>

                                    <li style={{ display: "inline", color: "#ffffff" }} key={val.id}>{val.name}</li>&nbsp;&nbsp;
                                    <button className="button is-white is-small">Delete</button>

                                </div>
                            )



                        })

                    }

                </ul>

            </>
        )
    }
}

export default HomeComponent;