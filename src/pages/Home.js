import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div className='landing-container'>
            <div className='heading-container'>
                <h1 className='landing-heading'>What Brings You Here Today?</h1>
                <p className='landing-heading-content'>If you wish to strengthen  relationship with your self,peers, family, teachers and Community and address any concern, explore the app and find solutions.</p>
            </div>
            <div className='learn-grid'>
                <div className="learn-blob" onClick={()=>{window.location.href= "/family"}}>
                    <div className="learn-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png" alt="" />
                        <h2 className="learn-field">
                            Family
                        </h2>
                    </div>
                    <p>
                        Family-related issues, such as not spending enough time together, can be challenging... </p>
                    <a href="/family" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/peers" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" alt="" />
                        <h2 className="learn-field">
                            Peers/Friends
                        </h2>
                    </div>
                    <p>
                        Peer pressure affects everyone regardless of age but it is a common occurrence... </p>
                    <a href="/peers" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/school" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/805826-200.png" alt="" />
                        <h2 className="learn-field">
                            Teacher/School/Academic
                        </h2>
                    </div>
                    <p>
                        Dealing with teacher, school, and academic pressure can be challenging, but... </p>
                    <a href="/school" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/society" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/4200422-200.png" alt="" />
                        <h2 className="learn-field">
                            Society
                        </h2>
                    </div>
                    <p>
                        Empower yourself through self-reflection, critical thinking, and a supportive... </p>
                    <a href="/society" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/self" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/2804/2804201.png" alt="" />
                        <h2 className="learn-field">
                            Self
                        </h2>
                    </div>
                    <p>
                        The lack of self-confidence and self-compassion among students... </p>
                    <a href="/self" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
