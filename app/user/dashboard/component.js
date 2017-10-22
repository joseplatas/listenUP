import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { Language_Selector } from './language_selector/component.js'
import { Lifetime_Points } from './lifetime_points/component.js'
import { Achievements } from './achievements/component.js'
import { Statistics } from './statistics/component.js'

import { generateClassHelper } from '../../shared/shared_fns.js'
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Dashboard extends React.Component {

    render() {
        return <div className={classes('page_container', 'flex_container')}>

            <div className={classes('center_container')}>

                <h1 className={styles.dashboard_header}>
                    welcome back, <em className={styles.name_text}>{fns.getFirstName()}!</em>
                </h1>

                <section className={classes('dashboard_section', 'flex_container', 'first_panel')}>

                    <div className={styles.language_selector}>
                        <h2 className={styles.section_header}>
                            languages in progress:
                    </h2>
                        <Language_Selector />
                    </div>

                    <div className={styles.lifetime_points}>
                        <Lifetime_Points />
                    </div>

                </section>

                <section className={classes('dashboard_section', 'achievements')}>

                    <div className={styles.achievements}>
                        <h2 className={styles.section_header}>
                            achievements:
                    </h2>
                        <Achievements />
                    </div>

                </section>

                <section className={classes('dashboard_section', 'statistics')}>

                    <div className={styles.statistics}>
                        <h2 className={styles.section_header}>
                            statistics:
                    </h2>
                        <Statistics />
                    </div>

                </section>

            </div>
        </div>
    }
}