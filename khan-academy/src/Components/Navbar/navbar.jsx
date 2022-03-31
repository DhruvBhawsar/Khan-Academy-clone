
import styles from "./navbar.css";
import React, { useState } from "react";

const Navbar = () => {

  const [showDiv , setShowDiv] = useState(false);

  const handelDivVisibility = () =>{
      if(showDiv === false){
          document.querySelector(".dropdown").style.visibility = "visible";
          console.log("I am clicked")
          setShowDiv(true);
      }
      else if(showDiv === true){
          document.querySelector(".dropdown").style.visibility = "hidden";
          setShowDiv(false);
      }
  }  


  return (
    <>
      <div className="div-navbar">
        <nav className="nav">
          <div className="nav-div">

            <div className="nav-left">

              <div className="nav-courses">
                <button  className="courses-btn" onClick={handelDivVisibility}>
                  <span>
                    Courses
                    <span>
                      <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                      >
                        <path fill="currentColor" d="M5,6L0,0L10,0"></path>
                      </svg>
                    </span>
                  </span>
                </button>
               
                <div className="dropdown">
                  <ul className="drop-ul">

                    <li>

                      <div>

                        <ul>
                          <li>
                            <a href="" className="drop-a">
                              <span className="dropspan">MATH - INDIA</span>
                            </a>
                          </li>
                        </ul>

                        <ul>
                        <li>
                             <a href="">
                              <span>Class 1</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 2</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 3</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 4</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 5</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 6</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 7</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 8</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 9</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 10</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 11</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 12</span>
                            </a>
                          </li>
                        </ul>

                      </div>

                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>MATH FOUNDATION</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Class 6(Foundation)</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 7(Foundation)</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 8(Foundation)</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 9(Foundation)</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 10(Foundation)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>MATH</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Algebra 1</span>
                            </a>
                          </li>
                        <li>
                            <a href="">
                              <span>Geometry</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Algebra 2</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Trignometry</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Statistics & Probability</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Pre-calculus</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Calculus</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Multivariable calculus</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Differential equation</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Linear algebra</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>See all Math</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>KHAN KIDS, AN APP(AGES 2-7)</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Math, Reading & Social Emotional Learning</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    
                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>LEARN IN HINDI (NEW)</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Math in Hindi</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 10 Physics(India)-Hindi</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 11 Physics(India)-Hindi</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>SCIENCE - INDIA</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Class 9 physics</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 10 physics</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 10 chemistry</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 10 biology</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 11 physics</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 11 chemistry</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 11 biology</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 12 physics</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 12 chemistry</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Class 12 biology</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>SCIENCE</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Physics</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Chemistry</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Biology</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>See all Science</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>COMPUTING</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Computer programming</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Computer science</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>See all Computing</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>ART & HUMANITIES</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Art history</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>US history</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>World history</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>See all Arts & Humanities</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>ECONOMICS</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>Microeconomics</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>Macroeconomics</span>
                            </a>
                          </li>

                          <li>
                            <a href="">
                              <span>See all Economics</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>TEST PREP</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                        <li>
                            <a href="">
                              <span>SAT</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span>LSAT</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    
                    <li>
                      <div>
                        <ul>
                          <li>
                            <a href="">
                              <span>KHAN FOR EDUCATORS</span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="">
                              <span>Get Started with Khan Academy</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                  </ul>
                </div>
                
              </div>

              <div className="nav-search">
                <a href="/search" className="search-a">
                  <div className="search-div">
                    <span className="search-span">Search</span>
                    <div className="svg-search">
                      <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        width="20"
                        height="20"
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="currentColor"
                          d="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,
    6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,
    8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,
    9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,
    7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,
    7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,
    8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,
    0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283
    7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,
    7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1
    C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,
    7.5 L4.25,7.5 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="log-div">
              <a className="logo" href="/">
                <svg
                  className="logo"
                  aria-hidden="true"
                  width="176px"
                  height="28px"
                  viewBox="0 0 176 28"
                >
                  <path d="M33.66,6.5A.54.54,0,0,1,34.21,6h2a.55.55,0,0,1,.55.55v6.2l5.79-6.52A.53.53,0,0,1,43,6h2.3a.48.48,0,0,1,.36.82l-6,6.75,6.43,7.69a.51.51,0,0,1-.41.81h-2.5a.55.55,0,0,1-.42-.16l-6-7.4v7a.56.56,0,0,1-.55.56h-2a.55.55,0,0,1-.55-.56Z"></path>
                  <path d="M47.78,6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5v5.63a4.07,4.07,0,0,1,2.7-.9c3.38,0,4.3,2.34,4.3,5v5.32a.53.53,0,0,1-.51.51H55.28a.51.51,0,0,1-.5-.51V16.16c0-1.47-.67-2.36-1.93-2.36a2.18,2.18,0,0,0-2.2,1.86v5.85c0,.3-.14.51-.56.51H48.28a.52.52,0,0,1-.5-.51Z"></path>
                  <path d="M63.48,15.31a7.7,7.7,0,0,1,2,.3c0-1.35-.34-2-1.47-2a13.49,13.49,0,0,0-3,.39c-.35.12-.55-.13-.6-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.31,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.51.51h-.78c-.18,0-.32-.07-.46-.37l-.3-.71a4.66,4.66,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C59.25,16.76,60.79,15.31,63.48,15.31Zm.07,4.82A2.27,2.27,0,0,0,65.45,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.4,1.4,0,0,0,63.55,20.13Z"></path>
                  <path d="M70.59,11.92a.51.51,0,0,1,.51-.51H72a.42.42,0,0,1,.44.32l.39,1a4.26,4.26,0,0,1,3.42-1.54c3.37,0,4.24,2.27,4.24,4.84v5.49A.52.52,0,0,1,80,22H78.1a.51.51,0,0,1-.51-.51V16c0-1.37-.55-2.22-1.83-2.22a2.34,2.34,0,0,0-2.3,1.65v6.06c0,.39-.16.51-.66.51H71.1a.53.53,0,0,1-.51-.51Z"></path>
                  <path d="M85.89,21.42,93,6a.4.4,0,0,1,.39-.25h.23A.39.39,0,0,1,94,6l7.07,15.45a.41.41,0,0,1-.39.6h-2a.66.66,0,0,1-.67-.46l-1.12-2.48H90.07l-1.13,2.48a.69.69,0,0,1-.66.46h-2A.4.4,0,0,1,85.89,21.42Zm9.91-4.89-2.29-5.05h-.07l-2.25,5.05Z"></path>
                  <path d="M107,11.18A5.24,5.24,0,0,1,111,13c.23.23.12.53-.11.76l-1,1.06c-.23.25-.48.13-.69-.07a2.84,2.84,0,0,0-2.11-.92,2.78,2.78,0,0,0-2.8,2.91,2.77,2.77,0,0,0,2.78,2.94,2.81,2.81,0,0,0,2.25-1.17.5.5,0,0,1,.66-.07l1,.87c.25.23.37.49.18.76a4.75,4.75,0,0,1-4.2,2.23,5.55,5.55,0,1,1,0-11.09Z"></path>
                  <path d="M116.83,15.31a7.82,7.82,0,0,1,2,.3c0-1.35-.35-2-1.47-2a13.5,13.5,0,0,0-3,.39c-.34.12-.55-.13-.59-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.3,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.5.51h-.78c-.19,0-.32-.07-.46-.37l-.3-.71a4.68,4.68,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C112.61,16.76,114.15,15.31,116.83,15.31Zm.07,4.82A2.29,2.29,0,0,0,118.81,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.39,1.39,0,0,0,116.9,20.13Z"></path>
                  <path d="M128.62,11.18a7.67,7.67,0,0,1,2.55.44V6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5V21.51a.51.51,0,0,1-.51.51h-.85c-.25,0-.41-.21-.5-.51l-.28-.83a4.55,4.55,0,0,1-3.46,1.59c-2.9,0-5.08-2.34-5.08-5.56A5.21,5.21,0,0,1,128.62,11.18Zm2.55,3.22a4.18,4.18,0,0,0-2.21-.6,2.68,2.68,0,0,0-2.64,2.91c0,1.5.85,2.94,2.51,2.94a2.43,2.43,0,0,0,2.34-1.47Z"></path>
                  <path d="M141.22,11.18a4.75,4.75,0,0,1,4.87,4.91c0,.16,0,.53-.05.69a.53.53,0,0,1-.5.48h-6.8a2.55,2.55,0,0,0,2.64,2.46,3.49,3.49,0,0,0,2.27-.78c.26-.21.53-.23.69,0l.9,1.19a.45.45,0,0,1-.05.69,6,6,0,0,1-3.95,1.45,5.37,5.37,0,0,1-5.37-5.56A5.37,5.37,0,0,1,141.22,11.18Zm2,4.2a1.94,1.94,0,0,0-2-1.83,2.11,2.11,0,0,0-2.25,1.83Z"></path>
                  <path d="M147.79,11.92a.51.51,0,0,1,.5-.51h.83a.4.4,0,0,1,.43.3l.39,1a4,4,0,0,1,3.24-1.54,3.61,3.61,0,0,1,3.17,1.61,4.53,4.53,0,0,1,3.42-1.61c3.39,0,4.2,2.16,4.2,4.91v5.42a.52.52,0,0,1-.53.51H161.6a.51.51,0,0,1-.5-.51V16c0-1.37-.51-2.22-1.84-2.22a2,2,0,0,0-2,1.1s0,.53,0,1v5.6a.52.52,0,0,1-.5.51H155a.5.5,0,0,1-.51-.51V16c0-1.37-.39-2.22-1.74-2.22a2.1,2.1,0,0,0-2,1.65v6.06a.52.52,0,0,1-.5.51h-1.86a.52.52,0,0,1-.5-.51Z"></path>
                  <path d="M165.07,12.1a.47.47,0,0,1,.46-.69h2.2a.42.42,0,0,1,.44.3l1.9,6.33h.05l2.41-6.33c.16-.28.34-.3.67-.3h2a.47.47,0,0,1,.46.69l-6.25,15.06a.53.53,0,0,1-.46.32h-2.2a.48.48,0,0,1-.46-.71l2.13-5.37Z"></path>
                  <path
                    fill="#14bf96"
                    d="M2.31,5.8A3.56,3.56,0,0,0,.66,8.6V19.4a3.56,3.56,0,0,0,1.65,2.8L12,27.62a3.75,3.75,0,0,0,3.3,0L25,22.2a3.56,3.56,0,0,0,1.65-2.8V8.6A3.56,3.56,0,0,0,25,5.8L15.31.38a3.75,3.75,0,0,0-3.3,0Z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M23.61,11.32c-5.38,0-9.4,4.46-9.4,9.93v.23H13.13v-.23c0-5.47-4-9.91-9.42-9.93,0,.34,0,.69,0,1a9.91,9.91,0,0,0,6.4,9.32,10.47,10.47,0,0,0,3.59.64,10.64,10.64,0,0,0,3.62-.64,9.92,9.92,0,0,0,6.39-9.32C23.66,12,23.64,11.66,23.61,11.32Z"
                  ></path>
                  <circle fill="#ffffff" cx="13.66" cy="8.74" r="3"></circle>
                </svg>
              </a>
            </div>

            <div className="nav-right">
              <a className="donate" href="/donate">
                Donate
              </a>
              <a className="login" href="/login">
                Login
              </a>
              <a className="signup" href="/Signup">
                Sign up
              </a>
            </div>
            
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
