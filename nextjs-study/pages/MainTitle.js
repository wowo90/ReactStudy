import Title from '../styles/Title.module.css';
import Login from './api/Login';
import Link from 'next/link';

const MainTitle = () => {
    const Name = "Level Zero";

    return (
        <div>
            <div className={Title.MainBar}>
                {Name}
            </div>           

            <div className={Title.MainMenu}><li><Link href="/">Home</Link></li></div>
            <div className={Title.MainMenu}><li><Link href="/Script/Community">Community</Link></li></div>
            <div className={Title.MainMenuRight}><Login/></div>

            <br></br><br></br>
        </div>        
    )
}

export default MainTitle;
