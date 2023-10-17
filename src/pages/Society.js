import React from 'react'

export default function Society() {
    return (
        <div className='family-container'>
            <div className='heading-container'>
                <h1 className='landing-heading'>Society</h1>
            </div>

            <div className='learn-grid'>
                <div className="learn-blob" onClick={() => { window.location.href = "/society/socialnorms" }}>
                    <div className="learn-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png" alt="" />
                        <h2 className="learn-field">
                            Complying to societal norms
                        </h2>
                    </div>
                    <p>
                        Take time to reflect on your values, beliefs, and personal principles. Understand...
                    </p>
                    <a href="/society/socialnorms" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/society/expectations" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" alt="" />
                        <h2 className="learn-field">
                            Societal expectations and stereotypes
                        </h2>
                    </div>
                    <p>
                        Take time to reflect on your own values, beliefs, and identity... </p>
                    <a href="/society/expectations" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/society/discrimination" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/4200422-200.png" alt="" />
                        <h2 className="learn-field">
                            Discrimination
                        </h2>
                    </div>
                    <p>
                        Prioritize self-care to maintain your emotional and mental well-being. Engage... </p>
                    <a href="/society/discrimination" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/society/antisocial" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/2515478-200.png" alt="" />
                        <h2 className="learn-field">
                            Anti-Social Behaviour
                        </h2>
                    </div>
                    <p>
                        Prioritize the safety of individuals and property. If there... </p>
                    <a href="/society/antisocial" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
