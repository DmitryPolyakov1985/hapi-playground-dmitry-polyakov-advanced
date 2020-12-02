import React from 'react';
import './PractitionerCard.css';
import PropTypes from 'prop-types';
import spinner from '../spinner.gif';

const PractitionerCard = ({practitioners, loading, deletePractitioner}) => {
    return (
        <div>
            <h1>Practitioner Data</h1>
            <div className="wrapper">
                
                <div className="practitioners-container">
                    {loading ? (
                        <img src={spinner} alt="Loading..."/>
                    ) : (
                        practitioners.map((practitioner) => {
                            const {id, name, photo, gender, dob} = practitioner;
    
                            return(
                                <div key={id} className="card">
                                    <div className="photo-container">
                                        <img src={photo} alt=""/>
                                    </div>
                                    <p className='name'><strong>Name:<br /></strong> {name}</p>
                                    <p><strong>Genger:</strong> {gender ? gender : 'N/A'}</p>
                                    <p><strong>DOB:</strong> {dob ? dob : 'N/A'}</p>
                                    <button onClick={() => {if(window.confirm('Are you sure to delete this record?')){ deletePractitioner(practitioner.id)};}} className='delete-btn'>delete</button>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

PractitionerCard.propTypes = {
    practitioners: PropTypes.array.isRequired,
}

export default PractitionerCard;
