import image1 from '../medias/image1.jpg';
import image2 from '../medias/image2.jpg';
import image3 from '../medias/image3.jpg';
import image4 from '../medias/image4.jpg';
import image5 from '../medias/image5.jpg';
import image6 from '../medias/image6.jpg';
import image7 from '../medias/image7.jpg';
import image8 from '../medias/image8.jpg';
import image9 from '../medias/image9.jpg';
import image10 from '../medias/image10.jpg';
import image11 from '../medias/image11.jpg';
import image12 from '../medias/image12.jpg';  
import image13 from '../medias/image13.jpg';
import image14 from '../medias/image14.jpg';
import image15 from '../medias/image15.jpg';
import image16 from '../medias/image16.jpg';
import image17 from '../medias/image17.jpg';


import logo from '../medias/logo.png';
import pic from '../medias/pic.png';
import profile from '../medias/profile.png';


function Photos() {
  return (
    <div className="photo-section">
      <h2>Photo Gallery</h2>

      <div className="photo-list">
        <img src={image3} alt="Portrait 1" />
        <img src={logo} alt="Brand mark" />
        <img src={image4} alt="Portrait 2" />
        <img src={pic} alt="Profile illustration" />
        <img src={image2} alt="Portrait 3" />
        <img src={image1} alt="Portrait 4" />
        <img src={profile} alt="Professional profile" />
        <img src={image5} alt="Portrait 5" />
        <img src={image6} alt="Portrait 6" />
        <img src={image7} alt="Portrait 7" />
        <img src={image8} alt="Portrait 8" />
        <img src={image9} alt="Portrait 9" />
        <img src={image10} alt="Portrait 10" />
        <img src={image11} alt="Portrait 11" />
        <img src={image12} alt="Portrait 12" />
        <img src={image13} alt="Portrait 13" />
        <img src={image14} alt="Portrait 14" />
        <img src={image15} alt="Portrait 15" />
        <img src={image16} alt="Portrait 16" />
        <img src={image17} alt="Portrait 17" />
      </div>
    </div>
  );
}

export default Photos;
