import {Link} from 'react-router-dom'
import './index.css'

const InitialPage = () => (
  <div className="initial-page-bg-container">
    <div className="initial-page-layout">
      {/* ------ top page ------- */}
      <div className="initial-page-top-box">
        <Link to="/home">
          <img
            src="https://reactdemo.hasthemes.com/businex/p2/img/businex/logo.png"
            alt="logo"
          />
        </Link>
        <Link to="buy">
          <button className="initial-page-btn" type="button">
            Buy Businex
          </button>
        </Link>
      </div>

      {/* ----- middle page ----  */}

      <div className="initial-page-middle-container">
        <h1 className="initial-page-main-heading">Businex</h1>
        <h1 className="initial-page-heading">
          React Corporate Business Template
        </h1>
        <p className="initial-page-description">
          A stunning website template designed for Business Agency, Corporate
          agency, Business Finance, Financing Investment service website.
        </p>
        <Link to="/services">
          <button className="template-btn" type="button">
            OUR SERVICES
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default InitialPage
