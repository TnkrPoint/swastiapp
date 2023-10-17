import React from 'react'
import './Family.css'

export default function Peer() {
    return (
        <div className='family-container'>
            <div className='heading-container'>
                <h1 className='landing-heading'>Peer and Friends</h1>
                <p className='landing-heading-content'>Peer pressure affects everyone regardless of age but it is a common occurrence in teenagers as they are more susceptible
                    <br />to the influence of others. However it can be addressed by developing self confidence and resilience. Here are some tips to deal and avoid peer pressure.</p>
            </div>

            <div className='learn-grid'>
                <div className="learn-blob" onClick={() => { window.location.href = "/peers/expressing" }}>
                    <div className="learn-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png" alt="" />
                        <h2 className="learn-field">
                            Rumours/derogatory comments and judgements
                        </h2>
                    </div>
                    <p>
                        Take a deep breath and try to remain calm. Assess the situation objectively to determine...
                    </p>
                    <a href="/peers/expressing" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/peers/rumors" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" alt="" />
                        <h2 className="learn-field">
                            Rumours/derogatory comments and judgements
                        </h2>
                    </div>
                    <p>
                        Begin by accepting and appreciating your body as it is... </p>
                    <a href="/peers/rumors" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>

                <div className="learn-blob" onClick={() => { window.location.href = "/peers/socialmedia" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/4200422-200.png" alt="" />
                        <h2 className="learn-field">
                            Social media handling and Cyber security
                        </h2>
                    </div>
                    <p>
                        Take time to reflect on your experiences, values, and... </p>
                    <a href="/peers/socialmedia" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/peers/frindshipissues" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/41339-200.png" alt="" />
                        <h2 className="learn-field">
                            Friendship issues
                        </h2>
                    </div>
                    <p>
                        Start by accepting yourself for who you are. Your worth is not defined by... </p>
                    <a href="/peers/friendshipissues" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
            </div>

        </div>
    )
}
