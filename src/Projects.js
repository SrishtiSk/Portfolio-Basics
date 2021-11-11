import React from "react";
import "./Projects.css";
import ProjectImg1 from "./img/portfolio-1.jpg";
import ProjectImg2 from "./img/portfolio-2.jpg";
import ProjectImg3 from "./img/portfolio-3.jpg";
import ProjectImg4 from "./img/portfolio-4.jpg";

export default function Projects() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="container">
        <div className="row">

            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={ProjectImg1} alt="" className="project__img"/>
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">getting tickets to the bigshow.</h4>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={ProjectImg2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
            
             <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={ProjectImg3} alt="" className="project__img"/>
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">getting tickets to the bigshow.</h4>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>
            
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={ProjectImg4} alt="" className="project__img"/>
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">getting tickets to the bigshow.</h4>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>
            
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={ProjectImg3} alt="" className="project__img"/>
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">getting tickets to the bigshow.</h4>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>
            
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={ProjectImg4} alt="" className="project__img"/>
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">getting tickets to the bigshow.</h4>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>
            
            <div className="view__btn d__flex align__items__center justify__content__center pxy__30">
                <button className="view_more pointer btn">View More</button>
            </div>
        </div>
      </div>
    </div>
  );
}
