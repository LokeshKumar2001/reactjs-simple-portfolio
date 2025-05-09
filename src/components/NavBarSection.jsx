import React from 'react'

const NavBarSection = () => {
  return (
        <>
            <nav className="navbar text-center navbar-expand-lg bg-body-tertiary sticky top">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse justify-content-center fw-bold  navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                       
                    </ul>
                    
                </div>
            </div>
            </nav>
        </>
  )
}

export default NavBarSection
