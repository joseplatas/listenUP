import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styles from './home.css'
import whiteLogo from '../shared/img/ListenUp_logo_white.png'
import ss_Listen from './img/howitworks_listen.png'
import ss_Answer from './img/howitworks_type.png'
import ss_Learn from './img/howitworks_learn.png'

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

<div className='homePage flex_container'>

    <section className='welcome flex_container full_height'>
    
    <h3 className='welcome_header centered_text'>
        Train your listening comprehension skills
        by listening to how native speakers 
        <em className='welcome_em'> actually</em> talk.
    </h3>
    
    <div className='welcome_getStartedButton centered_text'>
        <a className='actionButton' href='#'>
        Get Started
        </a>
    </div>
    
    </section>

    <section className='about flex_container full_height'>
    
    <h3 className='about_header centered_text'>
        So, you still can’t understand anything that
        native speakers are saying. Welcome to the
        «Intermediate Hell» of language learning.
    </h3>
    <h1 className='big_blue_header centered_text'>
        It's time to listenUP.
    </h1>
    
    <section className='details_container flex_container'>
        
        <div className='detail flex_container'>
        <h4 className='detail_header'>
            real people.
        </h4>
        <p className='detail_body'>
            Listen to audio clips of native speakers in 
            your target language as they answer questions 
            or discuss everyday topics.
        </p>
        </div>
        
        <div className='detail flex_container'>
        <h4 className='detail_header'>
            real talk.
        </h4>
        <p className='detail_body'>
            Ditch the scripted conversations 
            for beginners & get a feel for how 
            natives truly express themselves, 
            ...um...like... filler words and all!
        </p>
        </div>
        
        <div className='detail flex_container'>
        <h4 className='detail_header'>
            real effective.
        </h4>
        <p className='detail_body'>
            All 2 of our test subjects have agreed that 
            listenUp is helpful. That’s, like, half of 
            our entire development team!
        </p>
        </div>
        
    </section>
    </section>

    <section className='howitworks flex_container full_height'>
    
    <h3 className='howitworks_header centered_text'>
        how it works
    </h3>
    
    <section className='details_container flex_container'>
        <div className='detail flex_container'>
        <div className='detail_thumbnail'>
        </div>
        <h4 className='detail_header'>
            listen.
        </h4>
        <p className='detail_body'>
            We'll play a short audio or video clip 
            of a native speaker. All of our clips have 
            been specially chosen to expose you to how 
            people speak in a natural environment, 
            without slowing themselves down for learners.
        </p>
        </div>
        
        <div className='detail flex_container'>
        <div className='detail_thumbnail'>
        </div>
        <h4 className='detail_header'>
            answer
        </h4>
        <p className='detail_body'>
            We offer two types of exercises: Transcription 
            and Quiz. In Transcription, all you have to do 
            is write down what you hear, excluding non-word 
            fillers like "umm." In Quiz Mode, you'll answer 
            a question that tests your comprehension.
        </p>
        </div>
        
        <div className='detail flex_container'>
        <div className='detail_thumbnail'>
        </div>
        <h4 className='detail_header'>
            learn.
        </h4>
        <p className='detail_body'>
            In either learning mode, you'll earn points based 
            on your answer. We'll also cycle back through the 
            difficult exercises for you, so you have plenty 
            of opportunities to improve. Over time, you'll 
            become more comfortable with listening to how 
            native speakers really talk!
        </p>
        </div>
    </section>
    
    </section>

</div>
