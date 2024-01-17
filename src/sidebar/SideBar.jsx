import '../sidebar/sidebar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sideBarItem">
            <span className="sibeBarTitle">About Me</span>
            <img 
            src="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg"
            alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit voluptatem blanditiis dolore quaerat possimus vero nobis, perferendis aspernatur molestias rem quo explicabo praesentium error inventore modi corrupti eum dignissimos.
            </p>
        </div>
        <div className="sideBarTitle">
            <span className="sideBarTitle">CATORGORIES</span>
            <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon Icon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon Icon fa-brands fa-square-twitter"></i> 
            <i className="sidebarIcon Icon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon Icon fa-brands fa-square-instagram"></i> 
            </div>
        </div>
    </div>
  )
}
