import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './Components/Overview';
// Easy Task - display order using state
// Instead of displaying unordered list items, manage the amount of tasks in state and let each task display its number. Yes, you could also do that with a simple ordered list, but where’s the fun in that? Try using state.
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
              text: e.target.value,
              id: this.state.task.id,
            },
          }
        );
  };

  deleteTask = (e) => {
    console.log(e);
    this.setState(
      {
        tasks: this.state.tasks.filter((reg) => reg.id !== e ),
        task: {
          text: '',
          id: uniqid(),
        }
      }
    )
  }

  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      // tasks: this.state.tasks.concat(this.state.task),
      // using ES6 spread operator
      tasks: [...this.state.tasks,this.state.task],
      task: {
        text: '',
        id: uniqid()
      },
    });
  };

  render() {
    const { task, tasks } = this.state;
    
    return (
      <div className='tasks'>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter the task&nbsp;: </label>
          <input 
          onChange={this.handleChange}
          value={task.text}
          type="text" 
          id='taskInput'
          required
          />
          <button type='submit'>Add</button>
        </form>
          <Overview tasks={tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
