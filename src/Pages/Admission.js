import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import image10 from "../Components/Assets/image10.jpg";

function Admission(){
return (
    <>
    <NavBar />
    <div className="sec-bg">
           <h1>Admission on Progress</h1>
    </div>

    <div className="admission-col">
    <div className="admission-row">
    <h2>Join One of the Leading Schools</h2>
    <p>We take pride in being one of the top-performing schools, committed to providing excellent academic and moral education. 
      Prospective students and parents are warmly invited to visit our campus, learn about our programmes, and purchase 
      admission forms. Our admissions process is designed to ensure a smooth and transparent experience for all applicants, 
      reflecting our dedication to quality education and student development.</p>
    <button className="btn">Explore Now!!!</button>
    </div>
    <div className="admission-row">
        <img src={image10} />
    </div>
    </div>
    <Footer />
    </>
)
}

export default Admission;