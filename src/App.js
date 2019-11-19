import React from 'react';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import CommitList from './components/CommitList';
import { backendAPI, githubAPI } from './api';
import './Main.css';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        repositories: [],
        commits: [],
      };
    }

    async componentDidMount() {
      const repoResponse = await backendAPI.get('/repositories');
      const { results } = repoResponse.data;
      this.setState({ repositories: results });
    }

    async handleClick(repoName) {
      const commitsResponse = await githubAPI
        .get(`/repos/rjLelis/${repoName}/commits`);

      const commits = commitsResponse.data;
      this.setState({commits});
    }

    handleSubmit = async (e, repoName) => {
      e.preventDefault();
      const repoGithubResponse = await githubAPI.get(`/repos/rjLelis/${repoName}`);
      if(repoGithubResponse.status !== 200) {
        return null;
      }

      const { name, description } = repoGithubResponse.data;

      const postRepository = await backendAPI.post('/repositories', {
        name,
        description
      });

      if (postRepository.status !== 201) {
        return null;
      }

      const repoResponse = await backendAPI.get('/repositories');
      const { results } = repoResponse.data;
      this.setState({ repositories: results });

    }

    render(){
      const { repositories, commits } = this.state;
      return (
        <div className="padding-10">
          <Header
            onSubmit={this.handleSubmit}
          />
          <main>
            <RepositoryList
              repositories={repositories}
              onClick={(repoName) => this.handleClick(repoName)}
            />
            <CommitList
              commits={commits}
            />
          </main>
        </div>
      );
    }
}
export default App;
