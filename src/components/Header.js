import React from 'react';
import './../Main.css';


class Header extends React.Component {

    render(){
        return (
            <header className="padding-10">
                <form>

                    <input type="text"
                    name="repo-name" id="repo-name"
                    placeholder="Digite o nome de um repositório"/>

                    <button type="submit">Add</button>
                </form>
            </header>
        );
    }
}

export default Header;
