import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './Components/Overview';
// Easy Task - display order using state
// Instead of displaying unordered list items, manage the amount of tasks in state and let each task display its number. Yes, you could also do that with a simple ordered list, but where’s the fun in that? Try using state.

// Hard Task - edit button
// Implement an edit button for each task. When you press the edit button, this specific task should become changeable, and the edit button should change to a resubmit button.
class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
        editIt: false,
      },
      tasks: [],
    }
  };

  handleChange = (e) => {
          this.setState({
            task: {
              text: e.target.value,
              id: this.state.task.id,
              editIt: false,
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
          editIt: false,
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
        id: uniqid(),
        editIt: false,
      },
    });
  };


  isEditing = (e) => {
    console.log(this.state.tasks);
    this.setState(
      {
        tasks: this.state.tasks.map((reg) => {
                  
                if((reg.editIt === false) && (e === reg.id)) {
                  reg.editIt = true;
                } 
                else
                  reg.editIt = false 

                return reg;
              })
              ,
        task: {
          text: '',
          id: uniqid(),
          editIt: false,
        }
      }
    )
  }

  reSubmit = (val,id) => {
    this.setState({
      tasks: this.state.tasks.map((reg) => {

        if (id === reg.id) {
            reg.text = val;
        }
        return reg;
      })
      , 
        task: {
          text: '',
          id: uniqid(),
          editIt: false,
        }
      })
  }

  render() {
    const { task, tasks } = this.state;
    
    return (
      <div className='tasks'>
        <form onSubmit={this.onSubmitTask} className="forms">
          <label htmlFor="taskInput">Enter the task&nbsp;: </label>
          <input 
          onChange={this.handleChange}
          value={task.text}
          type="text" 
          id='taskInput'
          required
          />
          &nbsp;
          <button type='submit'>Add</button>
        </form>
          <Overview tasks={tasks} deleteTask={this.deleteTask} isEditing={this.isEditing} reSubmit={this.reSubmit} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
