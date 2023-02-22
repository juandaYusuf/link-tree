import React from 'react'
import ProfilePhoto from '../src/Assets/Profile-photo/profile.jpg'
const App = () => {
  return (
    <div className='container'>
      <div className='link-tree-container'>
        <div className='profile-photo'>
          <img src={ProfilePhoto} className="profile-photo-img" alt=' ' />
        </div>
        
        <h1 className='style-icon'>__devmode__</h1>
        
        <div className='link-container'><h1 className='bi bi-instagram style-icon'> Instagram</h1></div>
        <div className='link-container'><a href='https://github.com/juandaYusuf?tab=repositories' className='bi bi-github style-icon'> Github</a></div>
        <div className='link-container'><a href='https://web.facebook.com/JL30.JUANDAYUSUF' className='bi bi-facebook style-icon'> Facebook</a></div>
        <div className='link-container'><a href='https://wa.me/+6282318472536?text=Halo' className='bi bi-whatsapp style-icon'> WhatsApp</a></div>
      
      </div>
    </div>
  )
}

export default App

