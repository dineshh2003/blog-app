
import '../home/home.css';
import Header from '../../header/Header';
import SideBar from '../../components/sidebar/SideBar';
import Posts from '../../components/posts/Posts';

export default function Home() {
  return (
    <>
        <Header/>
        <div className="home">
            <Posts/>
            <SideBar/>
        </div>
    </>
  )
}
