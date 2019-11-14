import React from 'react';


class RepositoryList extends React.Component {

    render() {
        const {repositories}  = this.props;
        console.log(repositories)
        return (
             repositories.map(repository => {
                return (
                    <section key={repository.id} id="repository-list" className="margin-30">
                        <div className="repository padding-10-15">
                            <p>repository.name</p>
                            <small>repository.description</small>
                        </div>
                    </section>
                )
            })
        );
    }

}

export default RepositoryList;
