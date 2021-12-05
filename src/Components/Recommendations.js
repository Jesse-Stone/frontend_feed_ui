import './Recommendations.css'

function Recommendations() {
return (
        <div className="right-col">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="img/cover 9.png" alt=""/>
                </div>
                <div>
                    <p className="username">jesseliketheuncle</p>
                    <p className="sub-text">Jesse S</p>
                </div>
                <button className="action-btn">switch</button>
            </div>
            <p className="suggestion-text">Suggestions for you</p>
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="img/cover 7.png" alt=""/>
                </div>
                <div>
                    <p className="username">frasiercranium</p>
                    <p className="sub-text">Dr. Frasier Crane</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="img/cover 10.png" alt=""/>
                </div>
                <div>
                    <p className="username">hieverybody</p>
                    <p className="sub-text">Dr. Nick</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="img/cover 11.png" alt=""/>
                </div>
                <div>
                    <p className="username">medicinewoman</p>
                    <p className="sub-text">Dr. Michaela Quinn</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="img/cover 12.png" alt=""/>
                </div>
                <div>
                    <p className="username">thedoogster1234</p>
                    <p className="sub-text">Dr. Doogie Howser</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="img/cover 13.png" alt=""/>
                </div>
                <div>
                    <p className="username">theonlyhousedoc</p>
                    <p className="sub-text">Dr. Gregory House</p>
                </div>
            </div>
        </div>
)}

export default Recommendations