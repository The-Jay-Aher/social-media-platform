import React from 'react';

export default function Landing() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                {/* <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons">menu</i></a> */}
                <a href="#" className="brand-logo" >TECSocial.</a>
                <ul className="right hide-on-med-and-down">
                  <li><button className='b1'>Get Started</button></li>
                  {/* <li><Link to="/"><button className='b1'>Get Started</button></Link></li> */}
                </ul>
              </div>
            </div>
            {/* <ul className="side-nav" id="mobile-demo">
              <li><a href="https://github.com/dogfalo/materialize/" >Github</a></li>
              <li><a href="https://twitter.com/MaterializeCSS" >Twitter</a></li>
              <li><a href="http://next.materializecss.com/getting-started.html">Docs</a></li>
            </ul> */}
          </div>
        </nav>
      </div>

      <div className='side' id='left-side'>
        <h2 className='title'>
          A social media application
          <br /><span className='fancy'>
            For the students.
          </span>
        </h2>
      </div><div className='side' id='right-side'>
          <h2 className='title'>
            A social media application
            <br /><span className='fancy'>
              By the students.
            </span>
          </h2>
        </div>
    </div>
  )
}

const left = document.getElementById("left-side");
const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}
document.onmousemove = e => handleMove(e);
document.ontouchmove = e => handleMove(e.touches[0]);
