import '../settings/setting.css';
import SideBar from '../sidebar/SideBar';

export default function Setting() {
  return (
    <div className="settings">
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Acc</span>
                <span className="settingsUpdateDelete"> Delete Acc</span>
            </div>
            <form className="settingsForm">
                <label >Profile picture</label>
                <div className="settingsPP">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&usqp=CAU" alt="" />
                </div>
                <label htmlFor="fileInput"><i className="settingPPIcon fa-solid fa-user"></i></label>
                <input type="file" id="fileInput" style={{display: 'none'}}/>
                <label >Username</label>
                <input type="text" placeholder="name"/>
                <label >Email</label>
                <input type="email" placeholder="hehehe@gmail.com"/>
                <label >password</label>
                <input type="password" placeholder="password"/>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
