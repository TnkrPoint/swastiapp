import React from 'react'
import './Family.css'

export default function Family() {
    return (
        <div className='family-container'>
            <div className='heading-container'>
                <h1 className='landing-heading'>Family</h1>
                <p className='landing-heading-content'>Family-related issues, such as not spending enough time together,
                    can be challenging <br />but can often be addressed with open communication and proactive steps.
                    <br />Here are some suggestions on how to address this issue</p>
            </div>

            <div className='learn-grid'>
                <div className="learn-blob" onClick={() => { window.location.href = "/family/familytime" }}>
                    <div className="learn-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png" alt="" />
                        <h2 className="learn-field">
                            Not having healthy family time
                        </h2>
                    </div>
                    <p>
                        Set aside specific times in your week or month for family activities. This can...
                    </p>
                    <a href="/family/familytime" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/family/privacy" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" alt="" />
                        <h2 className="learn-field">
                            Issues related to space, respect and privacy for each other
                        </h2>
                    </div>
                    <p>
                        Issues related to space, respect, and privacy within a family can be challenging... </p>
                    <a href="/family/privacy" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/family/rightproperties" }}>
                    <div className="learn-header">
                        <img src="https://static.thenounproject.com/png/4200422-200.png" alt="" />
                        <h2 className="learn-field">
                            Having difficulties in setting right priorities
                        </h2>
                    </div>
                    <p>
                        Recognize that priorities can change over time. What is a top priority for someone... </p>
                    <a href="/family/rightproperties" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/family/passiveagressive" }}>
                    <div className="learn-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/812/747/original/passive-aggressive-personality-disorder-line-icon-vector.jpg" alt="" />
                        <h2 className="learn-field">
                            Passive Aggressive behaviour towards each other in everyday life
                        </h2>
                    </div>
                    <p>
                        Identify passive-aggressive behavior when it occurs, including subtle sarcasm... </p>
                    <a href="/family/passiveagressive" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/family/mutualunderstanding" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/1189/1189183.png" alt="" />
                        <h2 className="learn-field">
                            Mutual understanding and acceptance for each other
                        </h2>
                    </div>
                    <p>
                        Pay close attention when others are speaking, maintain eye contact, nod... </p>
                    <a href="/family/mutualunderstanding" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div className="learn-blob" onClick={() => { window.location.href = "/family/comparison" }}>
                    <div className="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/923/923051.png" alt="" />
                        <h2 className="learn-field">
                            Comparison done by parents
                        </h2>
                    </div>
                    <p>
                        Don’t communicate when you are angry. Don’t give an insult for... </p>
                    <a href="/family/comparison" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
            </div>

        </div>
    )
}
