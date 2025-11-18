import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';
import image5 from '../image5.jpg';
import logo from '../logo.png';
import pic from '../pic.png';
import profile from '../profile.png';


function Photos() {
    return (
        <>

      <div className="others">
        <h2 className="photo-title">Photo Gallery</h2>

        <div className="photo-wrapper">
          <button className="scroll-btn left" onClick={() => {
            document.querySelector(".photos").scrollBy({ left: -100, behavior: "smooth" });
          }}>‹</button>

          <div className="photos">
            <img src={image3} style={{ marginLeft: "300px" }} alt="img1" />
            <img src={logo} alt="img2" />
            <img src={image4} alt="img3" />
            <img src={pic} alt="img4" />
            <img src={image2} alt="img5" />
            <img src={image1} alt="img6" />
            <img src={profile} alt="img7" />
            <img src={image5} style={{ marginRight: "300px" }} alt="img8" />
          </div>

          <button className="scroll-btn right" onClick={() => {
            document.querySelector(".photos").scrollBy({ left: 100, behavior: "smooth" });
          }}>›</button>
        </div>
        </div>
        </>
    );
}
    
export default Photos;