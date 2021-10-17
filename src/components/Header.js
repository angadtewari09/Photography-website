import React, { Component } from 'react'
import { ReactDOM } from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
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
                scrollPos:0,
                isOpen: false
            }

    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }
    
    Scrollview = (link) => {
        console.log(link)
        document.querySelector(link).scrollIntoView();
    }
    toggle =() => {
        this.setState( {isOpen: !this.state.isOpen });
        /*this.setState( {isOpen: !this.state.isOpen });*/
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
                <ul className={this.state.clicked ? 'nav-menu' : 'nav-menu close'}> 
                {MenuItems.map( (item,index) => {
                    return(
                        <li>
                            <Link  onClick={() => {
                                this.Scrollview(item.link);
                                this.toggle();
                            }}
                                className={item.ClassName} /*ClassName="nav-links" */
                                href={item.href}>
                                {item.title}
                            </Link>
                        </li>
                    )   
                })}
                </ul>
            </nav>
        )
    }
}

export default Header
