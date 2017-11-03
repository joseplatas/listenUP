import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { Language_Selector } from './language_selector/component.js'
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

    constructor(props){
      super(props);
      //check if the user is login before showing page
    }

    render() {
      //console.log("dashboard greeting");
      if(localStorage.user_id == undefined){
        return(
          <div className={classes('page_container', 'flex_container')}>
            <div className={classes('center_container')}>
                <h1 className={styles.dashboard_header}>
                    Please login to see your dashboard <Link to='/Login' className={styles.login_link}>here</Link>
                </h1>

            </div>
          </div>
        );
      }

      return (
        <div className={classes('page_container', 'flex_container')}>

            <div className={classes('center_container')}>

                <div className={classes('flex_container','db_heading_container')}>
                    <h1 className={styles.dashboard_header}>
                        welcome back, <em className={styles.name_text}>{localStorage.username}!</em>
                    </h1>

                    <Link to='/settings' className={classes('settings_link')}>settings</Link>
                </div>

                <section className={classes('dashboard_section', 'flex_container', 'first_panel')}>

                    <div className={styles.language_selector}>
                        <div className={styles.section_header_container}>
                        <h2 className={styles.section_header}>
                            courses:
                        </h2>
                        </div>

                        <Language_Selector />
                    </div>

                </section>

                <section className={classes('dashboard_section', 'achievements')}>

                <div className={styles.section_header_container}>
                <h2 className={styles.section_header}>
                    achievements:
                </h2>
                </div>
                
                        <Achievements />

                </section>

                <section className={classes('dashboard_section', 'statistics')}>

                <div className={styles.section_header_container}>
                <h2 className={styles.section_header}>
                    statistics:
                </h2>
                </div>
                        <Statistics />

                </section>

            </div>
        </div>
      );
    }
}
