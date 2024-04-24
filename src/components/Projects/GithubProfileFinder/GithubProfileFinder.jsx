import React from 'react'
import Profile from './Profile'
import '../projects.css'

function GithubProfileFinder() {
    return (
        <div className='gitfinder'>

            <div className="gitfinderBody flex-v">
                <p className="title">Github Profile Finder</p>

                <div className="gitfinderContainer">
                    <Profile />
                </div>
            </div>

        </div>
    )
}

export default GithubProfileFinder
