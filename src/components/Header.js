import React from 'react';
import './../Main.css';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {repoName: ""};
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSumit = e => {
        const { repoName } = this.state;
        this.props.onSubmit(e, repoName);
        this.setState({repoName: ""});
    }

    render(){
        return (
            <header className="padding-10">
                <form method="post">
                    <input
                        type="text"
                        id="repo-name"
                        placeholder="Type the name of one of yours repository"
                        onChange={this.handleChange}
                        value={this.state.RepoName}
                        name="repoName"
                    />

                    <button
                        onClick={this.handleSumit}
                    >
                        Add
                    </button>
                </form>
            </header>
        );
    }
}

export default Header;
