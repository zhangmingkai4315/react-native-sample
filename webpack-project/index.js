import React from 'react'
import ReactDOM from 'react-dom'
import Department from './department';
import './css/main.css'

const names = ['mike','alice','bob']
ReactDOM.render(<Department title="sre" names={names}/>,document.getElementById('root'))