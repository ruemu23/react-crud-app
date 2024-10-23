import React from 'react';
import '../css/style.css';
import ikoyi from '../images/ikoyi.jpeg';
import { NavLink, Link } from 'react-router-dom';
import { BsPersonBadge, BsEyeFill, BsEnvelopeAtFill, BsEyeSlashFill } from "react-icons/bs";


export default function MenuPage() {
  return (
    <div className="myGrid">
    <div className="column1">
        <img src={ikoyi} alt="Description of the image" />
        <h1 className="centeredText">Crud Tutorial</h1>
    </div>
    <div className="column2">
        <div className="centeredDiv">
           

         
            <p>CRUD MENU</p>
           
     <div className="button-group">
            <NavLink to='/insert'>   <button className="buttoner">Insert / Update / Delete Record</button> </NavLink>
            <NavLink to='/select'>   <button className="buttoner">Select Record</button> </NavLink>
      </div>
        </div>
    </div>
</div>
  )
}
