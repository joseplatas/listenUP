import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import { generateClassHelper } from '../shared/shared_fns.js'

import './img/logo_EL.png'
import './img/logo_shutupandgo.png'
import './img/logo_nodeJS.png'
import './img/logo_mongoDB.png'
import './img/logo_reactJS.png'
import './img/logo_webpack.png'
import './img/avatar_krystina.png'
import './img/avatar_jose.png'
import './img/avatar_terrence.png'
import './img/avatar_jennifer.png'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Credits extends React.Component {
    render() {
        return <div className={classes('credits_page', 'flex_container')}>

            <div className={classes('center_container')}>

                <h1 className={classes('credits_header')}>
                    credits
            </h1>

                <h3 className={classes('credits_subtitle')}>
                    our project was possible thanks to the following:
            </h3>

                <section className={classes('credits_section', 'flex_container', 'audioVideo_content')}>
                    <h2 className={classes('section_header')}>
                        audio & video content
                </h2>

                    <div className={classes('flex_container', 'logo_row')}>
                        <div className={styles.credits_logo_container}>
                            <img src='app/credits/img/logo_EL.png' className={styles.credits_logo} />
                        </div>

                        <div className={styles.credits_logo_container}>
                            <img src='app/credits/img/logo_shutupandgo.png' className={styles.credits_logo} />
                        </div>

                        <div className={styles.credits_link}>
                            <a href="https://www.youtube.com/user/MonsieurDream" className={styles.credits_link_text}>Cyprien</a>
                        </div>

                        <div className={styles.credits_link}>
                            <a href="https://www.youtube.com/user/tomcrewther" className={styles.credits_link_text}>Tom Crewther</a>
                        </div>
                    </div>
                </section>

                <section className={classes('credits_section', 'flex_container', 'tech_content')}>
                    <h2 className={classes('section_header')}>
                        technology
                </h2>

                    <div className={classes('flex_container', 'logo_row')}>
                        <div className={styles.credits_logo_container}>
                            <img src='app/credits/img/logo_mongoDB.png' className={styles.credits_logo} />
                        </div>

                        <div className={styles.credits_logo_container}>
                            <img src='app/credits/img/logo_nodeJS.png' className={styles.credits_logo} />
                        </div>

                        <div className={styles.credits_logo_container}>
                            <img src='app/credits/img/logo_reactJS.png' className={styles.credits_logo} />
                        </div>

                        <div className={styles.credits_logo_container}>
                            <img src='app/credits/img/logo_webpack.png' className={styles.credits_logo} />
                        </div>
                    </div>
                </section>

                <section className={classes('credits_section', 'flex_container', 'team_content')}>
                    <h2 className={classes('section_header')}>
                        team
                </h2>

                    <div className={classes('flex_container', 'logo_row')}>

                        <div className={styles.team_member_container}>
                            <div className={styles.member_photo_container}>
                                <img src='app/credits/img/avatar_krystina.png' className={classes('member_photo')}/>
                            </div>

                            <h4 className={styles.team_member_name}>
                                Krystina Kuba
                        </h4>
                            <h5 className={styles.team_member_title}>
                                Front-End Developer
                        </h5>
                        </div>

                        <div className={styles.team_member_container}>
                            <div className={styles.member_photo_container}>
                            <img src='app/credits/img/avatar_jose.png' className={classes('member_photo')}/>
                            </div>

                            <h4 className={styles.team_member_name}>
                                Jose Platas
                        </h4>
                            <h5 className={styles.team_member_title}>
                                Senior Developer, Back-End
                        </h5>
                        </div>

                        <div className={styles.team_member_container}>
                            <div className={styles.member_photo_container}>
                            <img src='app/credits/img/avatar_terrence.png' className={classes('member_photo')}/>
                            </div>

                            <h4 className={styles.team_member_name}>
                                Terrence Tran
                        </h4>
                            <h5 className={styles.team_member_title}>
                                Back-End Developer
                        </h5>
                        </div>

                        <div className={styles.team_member_container}>
                            <div className={styles.member_photo_container}>
                            <img src='app/credits/img/avatar_jennifer.png' className={classes('member_photo')}/>
                            </div>

                            <h4 className={styles.team_member_name}>
                                Jennifer Tsan
                        </h4>
                            <h5 className={styles.team_member_title}>
                                Front-End Developer, UI/UX Designer
                        </h5>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    }
}
