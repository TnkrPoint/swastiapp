import React from 'react'

export default function Self() {
  return (
    <div className='family-container'>
      <div className='heading-container'>
        <h1 className='landing-heading'>Self</h1>
      </div>

      <div className='learn-grid'>
        <div className="learn-blob" onClick={() => { window.location.href = "/self/selfconfidence" }}>
          <div className="learn-header">
            <img src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png" alt="" />
            <h2 className="learn-field">
              Self confidence and self compassion
            </h2>
          </div>
          <p>
            Set aside specific times in your week or month for family activities. This can...
          </p>
          <a href="/self/selfconfidence" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
          </a>
        </div>
        <div className="learn-blob" onClick={() => { window.location.href = "/self/body" }}>
          <div className="learn-header">
            <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" alt="" />
            <h2 className="learn-field">
              Body image issues
            </h2>
          </div>
          <p>
            Begin by accepting and appreciating your body as it is... </p>
          <a href="/self/body" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
          </a>
        </div>
        <div className="learn-blob" onClick={() => { window.location.href = "/self/identity" }}>
          <div className="learn-header">
            <img src="https://static.thenounproject.com/png/4200422-200.png" alt="" />
            <h2 className="learn-field">
              Identity formation
            </h2>
          </div>
          <p>
            Take time to reflect on your experiences, values, and... </p>
          <a href="/self/identity" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
          </a>
        </div>
        <div className="learn-blob" onClick={() => { window.location.href = "/self/substanceabuse" }}>
          <div className="learn-header">
            <img src="https://static.thenounproject.com/png/41339-200.png" alt="" />
            <h2 className="learn-field">
              Substance Abuse
            </h2>
          </div>
          <p>
            The first step in dealing with substance abuse is recognizing that there is a problem... </p>
          <a href="/self/substanceabuse" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
          </a>
        </div>
        <div className="learn-blob" onClick={() => { window.location.href = "/self/personalhygiene" }}>
          <div className="learn-header">
            <img src="https://static.vecteezy.com/system/resources/previews/014/812/747/original/passive-aggressive-personality-disorder-line-icon-vector.jpg" alt="" />
            <h2 className="learn-field">
              Personal Hygiene
            </h2>
          </div>
          <p>
            Maintain good personal hygiene by showering or bathing... </p>
          <a href="/self/personalhygiene" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
          </a>
        </div>
        <div className="learn-blob" onClick={() => { window.location.href = "/self/attitude" }}>
          <div className="learn-header">
            <img src="https://cdn-icons-png.flaticon.com/512/1189/1189183.png" alt="" />
            <h2 className="learn-field">
              Attitude
            </h2>
          </div>
          <p>
            Cultivate a positive attitude toward life and challenges... </p>
          <a href="/self/attitude" target="_blank">Know More &nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ paddingTop: '10px' }}></i>
          </a>
        </div>
      </div>

    </div>
  )
}
