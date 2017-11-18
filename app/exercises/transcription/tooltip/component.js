import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../../shared/shared_fns.js'
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Tooltip extends React.Component {

    constructor(props) {
        super(props);
        this.expectedAnswer = props.expectedAnswer
        this.displayAnswer = this.displayAnswer.bind(this)
    }

    componentDidMount() {
        
    }

    displayAnswer() {
        return <div>{JSON.stringify(this.expectedAnswer)}</div>
    }

    render() {
        return <div>

            {/* <h5 className={classes('blue_text', 'tooltip_header')}>here's a tip</h5> */}

            <span className={classes('tooltip_text')}>You can skip fillers sounds like 'umm...' and 'uhh...',
                        but remember to include filler <em>words</em> such as
                        'like' and 'well.'
                        </span>
            <span className={classes('tooltip_text')}>
                {this.expectedAnswer}
            </span>
        </div>
    }
}
