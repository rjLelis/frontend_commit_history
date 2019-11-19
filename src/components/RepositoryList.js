import React from 'react';

class RepositoryList extends React.Component {

    renderRepos() {
        const { repositories } = this.props;
        return (
            <section id="repository-list" className="margin-30">
                {repositories.map(repository => {
                    return (
                        <div key={repository.id}
                            className="repository padding-10-15"
                            onClick={() => this.props.onClick(repository.name)}
                        >
                            <p>{repository.name}</p>
                            <small>{repository.description}</small>
                        </div>
                    )
                })}
            </section>
        );
    }

    render() {
        return (
            this.props.repositories.length > 0 ? (
                this.renderRepos()
            ) : (
            <section id="repository-list" className="margin-30">
                <div className="repository padding-10-15">
                    <p>No repositories to show</p>
                </div>
            </section>
            )
        );
    }
}

export default RepositoryList;
