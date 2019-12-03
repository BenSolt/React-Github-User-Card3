import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './component/UserCard';


// const [query, setQuery] = useState("");

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      user1: {},
      followers1: []
    };
  }

  

  componentDidMount(){
    console.log('component did mount')
    axios
    .get('https://api.github.com/users/BenSolt')
    .then (res => {
      console.log(res.data)
      this.setState({
      user1: res.data
    })
  })
  .catch(err => console.log(err));
  axios
    .get('https://api.github.com/users/BenSolt/followers')
    .then (res => {this.setState({
      followers1: res.data
      })
    })

  }

// componentDidUpdate(){
//   axios
//   .get('https://api.github.com/users/BenSolt/followers')
//   .then (res => {this.setState({
//     followers1: res.data.filter(p =>
//     p.Id.toLowerCase().includes(query.toLowerCase())
//   )
//  setState(followers1);
//     })
//   })
// }

  render(){
  return (
    <div className="App">
     <h1>Github-User Card</h1>  
      <UserCard userC={this.state.user1}
                followersC={this.state.followers1}/>
      
    </div>
  );
  }
}
// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
