import React from 'react'

export default function Home() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="title">
                    <h1>Full Stack User Authenticated JSON Viewer</h1>
                    <h2>Using ReactJS, Redis, MongoDB with Docker Container</h2>
                </div>
                <div className="content">
                    <div className="social">
                        <p>Here RedisDB used for session key valid certain time if logged in that time interval it will save user specific data to MongoDB which can be seen by switching to editor from slide menu.</p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/thisiskushal31/User-Authenticated-JSON-Viewer">github.com/thisiskushal31/User-Authenticated-JSON-Viewer</a>
                    </div>
                </div>
                {/* <div class="circle"></div> */}
            </div>
        </div>
    )
}

// Card Design Taken from: https://codepen.io/umurkose/pen/zgWXoR