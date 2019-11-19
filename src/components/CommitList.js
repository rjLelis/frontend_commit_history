import React from 'react';
import Moment from 'react-moment';

class CommitList extends React.Component {

    renderCommits() {
        const { commits } = this.props;
        return (
            <section id="commit-list">
                {commits.map(commit => {
                    return (
                        <div
                            key={commit.node_id}
                            className="commit padding-10-15"
                        >
                            <p>commit {commit.sha}</p>
                            <p>
                                Author: {commit.commit.author.name}
                                &lt;{commit.commit.author.email}&gt;
                            </p>
                            Date: <Moment>{commit.commit.author.date}</Moment>
                            <p>{commit.commit.message}</p>
                        </div>
                    )
                })}
            </section>
        );
    }

    render(){
        return (
            this.props.commits.length > 0 ? (
                this.renderCommits()
            ) : (
            <section id="commit-list">
                <div className="commit padding-10-15">
                   <p>Select a repository to visualize it's commits</p>
                </div>
            </section>
            )

        );
    }
}

export default CommitList;
