import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styles from './home.css'
// import ss_Listen from './img/howitworks_listen.png'
// import ss_Answer from './img/howitworks_type.png'
// import ss_Learn from './img/howitworks_learn.png'

import './img/howitworks_1.png'
import './img/howitworks_2.png'
import './img/howitworks_3.png'

import { Link } from 'react-router-dom'

export const NavButtons = () =>
    <div>
        Home buttons go here.
    </div>

function classes(...classNames) {
    return classNames
        .map(cn => styles[cn])
        .join(' ')
}

export const Home=() =>

<div className={classes('homePage', 'flex_container')}>

    {/* first section with welcome text & action button */}
    <section className={classes('welcome', 'flex_container', 'full_height')}>

    <h3 className={classes('welcome_header','centered_text')}>
        Train your listening comprehension skills
        by listening to how native speakers
        <em className={styles.welcome_em}> actually</em> talk.
    </h3>

    <div className={classes('centered_text','marginOnTop')}>
        <Link to="/signup" className={styles.actionButton}>
        Get Started
        </Link>
    </div>

    </section>

    {/* second section with additional information */}
    <section className={classes('about', 'flex_container', 'full_height')}>

    <h4 className={classes('about_subheader','centered_text')}>
        You've been learning your target language for a while now.<br/>
        Learning materials are getting way too easy, but you still<br/>
        can't follow a native conversation to save your life!
    </h4>
    <h3 className={classes('about_header', 'centered_text')}>
         Welcome to <em className={classes('red_text')}>«Intermediate Hell»</em>.
    </h3>
    <h1 className={classes('big_blue_header', 'centered_text','marginOnTop')}>
        It's time to listenUP.
    </h1>

    <section className={classes('details_container', 'flex_container','marginOnTop')}>

        <div className={classes('detail', 'flex_container')}>
        <h4 className={styles.detail_header}>
            real people.
        </h4>
        <p className={styles.detail_body}>
            Listen to audio clips of native speakers in
            your target language as they answer questions
            or discuss everyday topics.
        </p>
        </div>

        <div className={classes('detail', 'flex_container')}>
        <h4 className={styles.detail_header}>
            real talk.
        </h4>
        <p className={styles.detail_body}>
            Ditch the scripted conversations
            for beginners & get a feel for how
            natives truly express themselves,
            ...um...like... filler words and all!
        </p>
        </div>

        <div className={classes('detail', 'flex_container')}>
        <h4 className={styles.detail_header}>
            real effective.
        </h4>
        <p className={styles.detail_body}>
            All 2 of our test subjects have agreed that
            listenUp is helpful. That’s, like, half of
            our entire development team!
        </p>
        </div>

    </section>
    </section>

    {/* third section with screenshots of usage */}
    <section className={classes('howitworks', 'flex_container', 'full_height')}>

    <h3 className={classes('howitworks_header', 'centered_text')}>
        how it works
    </h3>

    <section className={classes('details_container', 'flex_container','marginOnTop')}>
        <div className={classes('detail', 'flex_container')}>
        <div className={styles.detail_thumbnail}>
            <img className={classes('thumbnail_img')} src='app/home/img/howitworks_1.png'/>
        </div>
        <h4 className={styles.detail_header}>
            press play.
        </h4>
        <p className={styles.detail_body}>
            We offer two exercises: Transcription and Quiz. 
            In either mode, just press play: listen to the audio 
            clip in Transcription or watch the video in Quiz.
        </p>
        </div>

        <div className={classes('detail', 'flex_container')}>
        <div className={styles.detail_thumbnail}>
            <img className={classes('thumbnail_img')} src='app/home/img/howitworks_2.png'/>
        </div>
        <h4 className={styles.detail_header}>
            give an answer.
        </h4>
        <p className={styles.detail_body}>
            After listening or watching the clip in the exercise, you'll 
            be prompted to write down what you hear OR to answer a 
            quick quiz question to test your listening comprehension.
        </p>
        </div>

        <div className={classes('detail', 'flex_container')}>
        <div className={styles.detail_thumbnail}>
            <img className={classes('thumbnail_img')} src='app/home/img/howitworks_3.png'/>
        </div>
        <h4 className={styles.detail_header}>
            get feedback.
        </h4>
        <p className={styles.detail_body}>
            In either learning mode, you'll earn points based
            on your answer. Over time, you'll
            become more comfortable with listening to how
            native speakers really talk!
        </p>
        </div>


    </section>
        <div className={classes('centered_text','marginOnTop')}>
                <Link to="/signup" className={classes('actionButton','blueButton')}>
                Give it a try!
                </Link>
            </div>
    </section>

</div>
