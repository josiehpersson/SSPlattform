import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Komponenter/Navbar/Header';
import Tidrapplåda from '../Uppdragssida/Offert';
import Boll from '../../Komponenter/Bollar/Boll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import FilterPopup from '../../Komponenter/Filter/FilterPopup';
import './Tidrapportsida.css';

function Tidrapportsida (props) {
    return (
      <div className="sida-container">
        <Header />
        <div className="header-filler">
          <Boll
            className="grönboll"
            height="180px"
            width="180px"
            top="70px"
            left="100px"
            zIndex="1"
          />
          <h3 className="tidrapport-page-header">TIDRAPPORTER</h3>
          <Boll
            className="gulboll"
            height="50px"
            width="50px"
            top="210px"
            left="210px"
            zIndex="2"
          />
        </div>
  
        <div className="frostatGlas">
          <div className="tidrapport-button-holder">
            <FilterPopup />
            <SearchBar />
          </div>
        <div className="tidrapport-låda-container">
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
          <Tidrapplåda />
          </Link>

        </div>
        </div>
      </div>
    );
  }
  export default Tidrapportsida;