import React from 'react';
import './../Main.css';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {repositoryName: ""};
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSumit = async e => {
        const { repositoryName } = this.state;

        let repoName = repositoryName.replace(new RegExp("/", "g"), "-")
        const result = await this.props.onSubmit(e, repoName);

        if(result) {
            this.setState({repositoryName: ""});
        }

    }

    render(){
        return (
            <header className="padding-10">
                <form method="post">
                    <input
                        type="text"
                        id="repo-name"
                        placeholder="Add a repo"
                        onChange={this.handleChange}
                        value={this.state.repositoryName}
                        name="repositoryName"
                    />

                    <button
                        type='submit'
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
