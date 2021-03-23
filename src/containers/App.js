import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import SocialFooter from '../components/SocialFooter';
import Scroll from '../components/Scroll';
import './app.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users}));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield:  event.target.value});;
    }

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase() );
         } );

         return (
                <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                   <ErrorBoundary>
                     <Cardlist robots={filteredRobots} />
                   </ErrorBoundary>
                </Scroll>
                <SocialFooter />
                </div>
            )   
    }
}

export default App;
