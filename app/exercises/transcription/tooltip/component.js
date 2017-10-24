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
    render() {
        return <div>

            <h5 className={classes('blue_text', 'tooltip_header')}>here's a tip</h5>
            
            <p>You can skip fillers sounds like 'umm...' and 'uhh...',
                        but remember to include filler <em>words</em> such as
                        'like' and 'well.'
                        </p>
        </div>
    }
}