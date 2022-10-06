import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';



class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    }
  };

  handleChange = (e) => {
          this.setState({
            task: {
              task: e.target.value,
              id: this.state.task.id,
            },
          }
        );
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      },
    })
  }

  render() {
    const { task, tasks } = this.state;
    
    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter the task&nbsp;: </label>
          <input 
          type="text" 
          id='taskInput'
          onChange={this.handleChange}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
