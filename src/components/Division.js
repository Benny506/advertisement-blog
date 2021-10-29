import React, { useEffect } from 'react'
import './division.css'

export default function Division(){
    useEffect(() => {
        const container = document.querySelector('.container')
        container.classList.add('show')
    })
    return(
        <div className='container'>
            <div className='categories'>
                <h1 className='header'>FrontEnd</h1>
                <div className='subCategories'>
                    <p>Html</p>
                    <p>CSS</p>
                    <p>JavaScript + ReactJS</p>
                </div>
            </div>
            <div className='categories'>
                <h1 className='header'>BackEnd</h1>
                <div className='subCategories'>
                    <div className='item'>
                        <h2>Server</h2>
                        <p>Express.JS</p>
                    </div>
                    <div className='item'>
                        <h2>Database</h2>
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 