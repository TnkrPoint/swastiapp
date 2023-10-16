import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div className='landing-container'>
            <div className='heading-container'>
                <h1 className='landing-heading'>What Brings You Here Today?</h1>
                <p className='landing-heading-content'>If you or someone you know is struggling, you are not alone. Below is information on how to find support.</p>
            </div>
            <div className='learn-grid'>
                <div class="learn-blob" onClick={()=>{window.location.href= "/family"}}>
                    <div class="learn-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png" alt="" />
                        <h2 class="learn-field">
                            Family
                        </h2>
                    </div>
                    <p>
                        Family-related issues, such as not spending enough time together, can be challenging... </p>
                    <a href="/family" target="_blank">Know More &nbsp;&nbsp;<i class="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div class="learn-blob" onClick={() => { window.location.href = "/peers" }}>
                    <div class="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" alt="" />
                        <h2 class="learn-field">
                            Peers/Friends
                        </h2>
                    </div>
                    <p>
                        Peer pressure affects everyone regardless of age but it is a common occurrence... </p>
                    <a href="/peers" target="_blank">Know More &nbsp;&nbsp;<i class="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div class="learn-blob" onClick={() => { window.location.href = "/school" }}>
                    <div class="learn-header">
                        <img src="https://static.thenounproject.com/png/805826-200.png" alt="" />
                        <h2 class="learn-field">
                            Teacher/School/Academic
                        </h2>
                    </div>
                    <p>
                        Dealing with teacher, school, and academic pressure can be challenging, but... </p>
                    <a href="/school" target="_blank">Know More &nbsp;&nbsp;<i class="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div class="learn-blob" onClick={() => { window.location.href = "/society" }}>
                    <div class="learn-header">
                        <img src="https://static.thenounproject.com/png/4200422-200.png" alt="" />
                        <h2 class="learn-field">
                            Society
                        </h2>
                    </div>
                    <p>
                        Empower yourself through self-reflection, critical thinking, and a supportive... </p>
                    <a href="/society" target="_blank">Know More &nbsp;&nbsp;<i class="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
                <div class="learn-blob" onClick={() => { window.location.href = "/self" }}>
                    <div class="learn-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/2804/2804201.png" alt="" />
                        <h2 class="learn-field">
                            Self
                        </h2>
                    </div>
                    <p>
                        The lack of self-confidence and self-compassion among students... </p>
                    <a href="/self" target="_blank">Know More &nbsp;&nbsp;<i class="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
                    </a>
                </div>
            </div>
            <div className='finding-support'>
                <h1 className='finding-support-heading'>Finding support</h1>
                <p className='finding-support-desc'>If you or someone you know needs support, there is help.<br />You are not alone. Below you can find information and<br /> resources on how to get help.</p>
                <div className='finding-support-options'>
                    <div className='option '>
                        <h1 className='option-heading'>Aasra</h1>
                        <button className='option-website' onClick={() => { window.location.href = 'http://www.aasra.info/' }}>Visit Website</button>
                        <p className='option-desc'>24 x 7 Hotline - +919820466726</p>
                    </div>
                    <div className='option'>
                        <h1 className='option-heading'>Sneha Suicide Prevention Centre</h1>
                        <button className='option-website' onClick={() => { window.location.href = "https://snehaindia.org/new/" }}>Visit Website</button>
                        <p className='option-desc'>24 x 7 Hotline - +91-44-24640050</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
