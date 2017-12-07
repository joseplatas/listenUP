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

    renderTooltipText() {
        if (this.props.score === 10) {
            return <div className={classes('tooltip_text')}>
                    {fns.generateGoodJob(this.props.language)}
                </div>
        }
        else {
            return <div className={classes('tooltip_text','incorrect_answer')}>
                    {fns.generateTooltipText(this.props.language)}
                    
                    <p><em>{this.props.expectedAnswer}</em></p>
                </div>
        }
    }

    render() {
        return this.props.expectedAnswer 
        ? <div>

            <span className={classes('tooltip_text')}>
                {this.renderTooltipText()}
            </span>
        </div>
        : <div>

            </div>
    }
}
