import React, { Component } from 'react'
import { ReactDOM } from 'react'
import 'font-awesome/css/font-awesome.min.css'


const MenuItems = [
    {
        title:'Home',
        href: '#',
        ClassName:'nav-links',
        link: '#home' 
    },
    {
        title:'About',
        href: '#',
        ClassName:'nav-links',
        link: '#about'
    },
    {
        title:'Gallery',
        href: '#',
        ClassName:'nav-links',
        link: '#picture-gallery'
    },
    {
        title:'Contact',
        href: '#',
        ClassName:'nav-links',
        link: '#footer'
    }
]

class Header extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         show:true,
    //         scrollPos:0
    //     }
    // }
    state = { 
                clicked: false,
                show:true,
                scrollPos:0
            }

    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }
    handleScroll = () => {
        
    }
    Scrollview = (link) => {
        console.log(link)
        document.querySelector(link).scrollIntoView();
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }



    render() {
        return (
            <nav className="NavbarItems">
                    <h1 onClick={() => {
                        window.location.reload();
                    }} className="navbar-logo"><span>Crephto</span>Love</h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
                {MenuItems.map( (item,index) => {
                    return(
                        <li>
                            <a  onClick={() => {
                                this.Scrollview(item.link);
                            }}
                                className={item.ClassName} 
                                href={item.href}>
                                {item.title}
                            </a>
                        </li>
                    )   
                })}
                </ul>
            </nav>
        )
    }
}

export default Header
