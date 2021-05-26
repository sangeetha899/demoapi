import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Postapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            created_at: " ",
            title: " ",
            updated_at: " ",
        }
    }
    Setvalue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    submithandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://gorest.co.in/public-api/users', {
            headers: {
                Authorization: `Bearer a91cb4e4548575aeda4dd72f406dc1cee672583dd92e2520285c717a6e2fe1ef`
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        let { body, created_at, title, updated_at } = this.state;
        return (
            <>
                <form onSubmit={this.submithandler}>
                    <div>
                        <label>body:</label>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.Setvalue}
                        />
                    </div>
                    <div>
                        <label>created_at:</label>
                        <input
                            type="text"
                            name="created_at"
                            value={created_at}
                            onChange={this.Setvalue}
                        />
                    </div>
                    <div>
                        <label>title:</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.Setvalue}
                        />
                    </div>
                    <div>
                        <label>updated_at:</label>
                        <input
                            type="text"
                            name="updated_at"
                            value={updated_at}
                            onChange={this.Setvalue}
                        />
                    </div>
                    <div>
                        <button>Submit</button>
                        <Link to='/'>
                            <button>Back</button>
                        </Link>

                    </div>
                </form>
            </>
        )
    }
}

export default Postapi;