import { Component } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { defaultMarkdown } from "./defaultMarkdown";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      input: defaultMarkdown,
    }
    this.onInput = this.onInput.bind(this);
  }
  
  onInput (e) {
    this.setState({
      input: e.target.value,
    })
  }
  
  render() {
    return (
      <div className='app'>
        <textarea autoFocus id="editor" value={this.state.input} onChange={this.onInput}/>
        <div id="preview" className='markdown'>
        <Markdown  remarkPlugins={[remarkGfm]}>{this.state.input}</Markdown>
          </div>
        </div>
    );
  }
}


export default App;
