import React , {useEffect} from 'react'
import { useState } from 'react'
import CenterImage from './images/center_image.jpg'
import 'font-awesome/css/font-awesome.min.css'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import AOS from 'aos';
import 'aos/dist/aos.css';


const images = [
    {id: '1' , imageName: 'img1.jpg', tag: 'free'},
    {id: '2' , imageName: 'img2.jpg', tag: 'new'},
    {id: '3' , imageName: 'img3.jpg', tag: 'pro'},
    {id: '4' , imageName: 'img2.jpg', tag: 'pro'},
    {id: '5' , imageName: 'img3.jpg', tag: 'free'},
    {id: '6' , imageName: 'img1.jpg', tag: 'new'},
    {id: '7' , imageName: 'img2.jpg', tag: 'pro'},
    {id: '8' , imageName: 'img1.jpg', tag: 'free'},
    {id: '9' , imageName: 'img3.jpg', tag: 'new'},
    {id: '10' , imageName: 'img1.jpg', tag: 'new'},
    {id: '11' , imageName: 'img1.jpg', tag: 'new'},
    {id: '12' , imageName: 'img2.jpg', tag: 'free'},
    {id: '13' , imageName: 'img3.jpg', tag: 'pro'},
    {id: '14' , imageName: 'img2.jpg', tag: 'free'},
    {id: '15' , imageName: 'img3.jpg', tag: 'new'}
];

/*Filter-Buttons*/
const TagButton = ({name , handleSetTag, tagActive }) => {
    return(
        <button className={`tag ${ tagActive ? 'active' : null}`} onClick={ () => handleSetTag(name)}>{name.toUpperCase()}</button>
    );
}

function Main() {    

    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    
    const [duration, setDuration ] = useState(1200);

    useEffect(() => {
        AOS.init({duration:1200});
    }, [])

    useEffect( () => {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image=> image.tag === tag)) 
    }, [tag])

    
    return (
        <div className="outer">
            <div className="main-container">
            <div className="main-area" id="home">
               <div className="content">
                    <img className="image" src= {CenterImage} alt="My Profile Image" />
                    <h1 id="name">John Doe</h1>
                    <h2 id="title">Photographer | Videographer</h2>
                    <div className="description">
                        <div className="qoute">
                           <p id="p1"> “Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever…<br/>It remembers little things, long after you have forgotten everything.”</p>
                            <br/>
                            <span>- AARON SISKIND</span>
                        </div>
                        <div className="icons">
                            <a href = "" target="_blank" className="fa fa-instagram"></a>
                            <a href = "" target="_blank" className="fa fa-twitter"></a>
                            <a href = "" target="_blank" className="fa fa-pinterest"></a>
                            <a href = "" target="_blank" className="fa fa-behance"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="about-section" id="about">
                <div data-aos-duration="1100" data-aos="fade-down" className="left">
                    <img className="DP" src={CenterImage} alt="My profile picture"></img>
                </div>
                <div data-aos-duration="1200" data-aos="fade-up" className="right">
                    <div className="profile">
                        <p id="name2">I am John Doe</p>
                        <p id="about-me">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                        <button className="butt">View Work</button>
                    </div>
                </div>
            </div>
            <div className="picture-gallery" id="picture-gallery" handleSetTag={setTag}>
                <h2 id="gallery-title">My picture Gallery</h2>
                <div className="button-area" id="tags">
                    <TagButton name="all"  handleSetTag={setTag} tagActive={tag === 'all' ? true : false} />
                    <TagButton name="pro"  handleSetTag={setTag}  tagActive={tag === 'pro' ? true : false} />
                    <TagButton name="free" handleSetTag={setTag} tagActive={tag === 'free' ? true : false} />
                    <TagButton name="new"  handleSetTag={setTag} tagActive={tag === 'new' ? true : false} />
                </div>
                {/* <div className="my-gallery"> */}
                     <SimpleReactLightbox>
                        <SRLWrapper>
                        <div className="gallery-container"> 
                            {filteredImages.map(image => {
                                return (                               
                                    <div key ={image.id} data-aos-duration={duration} data-aos="fade-up" className="image-card">

                                    <a href={`../images/${image.imageName}`}>

                                        <img className = "gallery-image" src={`../images/${image.imageName}`} alt= {`${image.imageName}`}/>
                                    </a>
                                </div>
                               )}
                               
                            )}      
                        </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                {/* </div> */}
                <p id="qouteblock">"Taking an image, freezing a moment, reveals how rich reality truly is!"</p>
            </div>
        </div>
    )
}

{/* <div className="gallery-container"> 
{images.map(image =>
    <div className="image-card">
        <a href={`.\images\${image.imageName}`}>
        <img className = "image" src = {`.\images\${image.imageName}`}  alt= {`${image.imageName}`}/>
        {/* </a>
    </div>)}
</div>*/}


export default Main
