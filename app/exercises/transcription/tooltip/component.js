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
    }

    render() {
        return <div>

            <span className={classes('tooltip_text')}>
                Expected Answer:
                
                <p><em>{this.props.expectedAnswer}</em></p>
            </span>
        </div>
    }
}
