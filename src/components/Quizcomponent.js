import './quiz.css';
import React, { Component } from 'react'

export default class Quizcomponent extends Component {
  render() {
    return (
      <div className='container'>
        <div id='quistion-container'>
            <h2 id='ques-head'>Question</h2>
            <p id='question-number'>1 of 15</p>
            <p id='question'>What is the only mammel that can jump?</p>
            <div className='option-div'>
                <div className='options'>Dog</div>
                <div className='options'>Elephant</div>
                <div className='options'>Goat</div>
                <div className='options'>Lion</div>
            </div>
            <div className='button-div'>
                <button className='butt' id='button1'>Previous</button>
                <button className='butt' id='button2'>Next</button>
                <button className='butt' id='button3'>Quit</button>
            </div>
        </div>

      </div>
    )
  }
}

