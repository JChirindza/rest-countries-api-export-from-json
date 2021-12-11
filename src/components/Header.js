import React from 'react'

const Header = () => {
  return (
    <>
        <header className="header">
            <div className="container">
                <ul>
                    <div className="item-left">
                        <li><a className="" href="/"><i className="fas fa-globe"></i> World Countries</a></li>
                    </div>
                    <div className="item-right">
                        <li><a href="#"><i className="fas fa-external-link-alt"></i> Live demo</a></li>
                        <li><a href="#"><i className="fab fa-github"></i> Github repo</a></li>
                    </div>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header
