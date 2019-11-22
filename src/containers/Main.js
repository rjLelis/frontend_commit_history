import React from 'react';
import App from './App';
import Login from './../components/Login';

class Main extends React.Component {

    handleSubmit = async (e, username) => {
        e.preventDefault();
        localStorage.setItem('username', username);
    }

    render() {
        const username = localStorage.getItem('username');
        const component = username ? <App username={username} />
            : <Login onSubmit={this.handleSubmit}/>;

        return (
            <div>
                {component}
            </div>
        )
    }
}

export default Main;
