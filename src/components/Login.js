import React from 'react';
import { githubAPI, backendAPI } from './../api';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    handleChange = e => this.state({username: [e.target.value]})

    handleSubmit = async e => {
        e.preventDefault();
        const { username } = this.state;

        const ownerResponse = await backendAPI.get(`/owner/${username}`)

        if(ownerResponse.status === 400) {
            const cliendId = "08a90d208a79734687ab";
            const githubAuthorize = await githubAPI
                .get(`/login/oauth/authorize?
                client_id=${cliendId}
                &redirect_uri=/&
                login=${username}`);

            if (githubAuthorize.status !== 200) {
                return false;
            }

            const {code} = githubAuthorize.data;

            const githubAccesToken = await githubAPI
                .post("/login/oauth/access_token", {
                    cliend_id: cliendId,
                    client_secret: '7c27b6b6d462f07d2c223a3980848205e639d151',
                    code: code
                });

            if(githubAccesToken.status != 200) {
                return false;
            }

            const accessToken = githubAccesToken.data.access_token;

            const config = {
                headers: {
                    'Authorization': accessToken
                }
            }

            const githubUser = await githubAPI.get("/user", config);

            if(githubUser.status !== 200) {
                return false;
            }

            const { login, email} = githubUser.data;


            const postOwner = await backendAPI.post("/owner",{
                username: login,
                email: email
            });

            if(postOwner.status !== 201) {
                return false;
            }

            this.props.onSubmit(e, login);

        } else {
            const { username } = ownerResponse.data;
            this.props.onSubmit(e, username);
        }

    }

    render() {
        return(
            <form method="post">
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button type="submit">Login</button>

            </form>
        );
    }

}

export default Login;
