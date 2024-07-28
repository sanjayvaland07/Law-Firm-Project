import './Navbar.css'
import logo from '../assets/logo1.png'
import { useRef } from 'react';
function Navbar(){
    const menu = useRef();
    const menubtn = useRef();
    let show = true;
    function showMenu(){
        // console.log(menu)
        if(show){
            menu.current.style = "display:block;"
            show=false
            menubtn.current.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        }else{
            menu.current.style = "display:none;"
            show=true
            menubtn.current.innerHTML = `<i class="fa-solid fa-bars"></i>`
        }
    }
    return (
        <header>
            <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul id='hide' className="navlink" ref={menu}>
                <li><a href="">Demos</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Attorneys</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">All pages</a></li>
            </ul>
            <button className='btn'>
                Let's Talk
            </button>
            <button id='menubtn' className='hide' onClick={showMenu} ref={menubtn}>
            <i className="fa-solid fa-bars"></i>
            </button>
        </nav>
        </header>
    )
}

export default Navbar;