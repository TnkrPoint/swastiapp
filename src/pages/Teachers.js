import React from 'react'
import './Family.css'

export default function Teachers() {
    return (
        <div className='family-container'>
            <div className='heading-container'>
                <h1 className='landing-heading'>Teacher/School/Academic Related</h1>
            </div>
            <div className='learn-grid'>
                <div className="learn-blob" onClick={() => { window.location.href = "/teachers/impression" }}>
                    <div className="learn-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png" alt="" />
                        <h2 className="learn-field">
                            Impression making/ changing
                        </h2>
                    </div>
                    <p>
                        Take time to reflect on your values, beliefs, and personal principles. Understand...
                    </p>
                    <a href="/teachers/impression" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/teachers/respect" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" alt="" />
                        <h2 className="learn-field">
                            Mutual respect between students and teachers
                        </h2>
                    </div>
                    <p>
                         Use appropriate language and tone when speaking to them.. </p>
                    <a href="/teachers/respect" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/teachers/knowingboundaries" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/4200422-200.png" alt="" />
                        <h2 className="learn-field">
                            Knowing boundaries
                        </h2>
                    </div>
                    <p>
                       Respect Personal Space: Give others their physical space... </p>
                    <a href="/teachers/knowingboundaries" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/teachers/acceptingresponsibility" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/2515478-200.png" alt="" />
                        <h2 className="learn-field">
                            Understanding and accepting responsibility as a student
                        </h2>
                    </div>
                    <p>
                        Acknowledge Your Role: Recognize that your education is your responsibility.... </p>
                    <a href="/teachers/acceptingresponsibility" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
            </div>

        </div>
    )
}
