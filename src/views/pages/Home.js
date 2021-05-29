import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/img/carousel1.jpg'
import img2 from '../../assets/img/carousel3.jpg'
import img3 from '../../assets/img/carousel2.jpg'
import hacking from '../../assets/img/hacking.jpg'
import hacking3 from '../../assets/img/hacking3.jpg'



class Home extends React.Component {
  render() {
    return (
      <>
        <div className="fluid-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Hey guy's are you develpor then get this Service.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Third slide" 
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Hey guy's are you develpor then get this Service.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Hey guy's are you develpor then get this Service.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-4">
                <img src={hacking} alt="Hacing img" className="img-fluid" />
              </div>
              <div className="col-sm-8">

                <h1>Training Summary</h1>
An Ethical Hacker exposes vulnerabilities in software to help business owners
fix those security holes before a malicious hacker discovers them.
In this free ethical hacking course, you learn all about Ethical
hacking with loads of live hacking examples to make the subject matter clear.
It is recommended you refer these Hacking Tutorials sequentially, one after the other.
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-8">
                <h1>Training Summary</h1>
An Ethical Hacker exposes vulnerabilities in software to help business owners
fix those security holes before a malicious hacker discovers them.
In this free ethical hacking course, you learn all about Ethical
hacking with loads of live hacking examples to make the subject matter clear.
It is recommended you refer these Hacking Tutorials sequentially, one after the other.
              </div>
              <div className="col-sm-4">
                <img src={hacking3} alt="hacking" className="img-fluid" />
              </div>
            </div>
          </div>

        </div>

      </>
    )
  }
}
export default Home;