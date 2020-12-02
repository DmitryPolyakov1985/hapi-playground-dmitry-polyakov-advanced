import React, { useState, useEffect } from "react";
import { getPractitioners } from "../services";
import flattenPractitionerObj from '../assets/utils';
import PractitionerCard from './PractitionerCard';

const Practitioner = () => {
  const [loading, setLoading] = useState(true);
  const [practitioners, setPractitioners] = useState([]);

  const getPractitionersData = async() => {
    const res = await getPractitioners();
    const practitionersData = flattenPractitionerObj(res);
    
    setPractitioners(practitionersData);
    setLoading(false);
  };

  useEffect(() => {
    getPractitionersData();
  }, []);

  const deletePractitioner = id => {
    const newPractitioners = practitioners.filter(practitioner => practitioner.id !== id);
    setPractitioners(newPractitioners);
    setLoading(false);
  };

  return (
    <>
      <PractitionerCard loading={loading} practitioners={practitioners} deletePractitioner={deletePractitioner} />
    </>
  );
}

export default Practitioner;