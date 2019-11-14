import React from 'react';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import CommitList from './components/CommitList';
import './Main.css';
import instance from './api';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        repositories: [],
      };
    }

    async componentDidMount() {
      const response = await instance.get('/repositories/api');
      const { results } = response.data;
      this.setState({ repositories: results })
    }



    render(){
      const { repositories } = this.state;
      return (
        <div className="padding-10">
          <Header />
          <main>
            <RepositoryList repositories={repositories}/>
            <CommitList />
          </main>
        </div>
      );
    }
}
export default App;
