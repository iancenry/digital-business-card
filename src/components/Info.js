import img from '../images/profile-img.jpg'

const Info = () => {
  return (
    <div>
        <img src={img} alt="profile" className="profile-img nodrag" />
        <div className="info">
          <h1 >Jane Doe</h1>
          <h3 >Fullstack Developer</h3>
          <small >www.janedoe.com</small>
        </div>
        
        <div className="icons">
            <p className='mail-btn btn'><i class="bi bi-envelope-fill"></i> Mail</p>
            <p className='linkedin-btn btn'><i class="bi bi-linkedin"></i> LinkedIn</p>
        </div>
    </div>
  )
}

export default Info