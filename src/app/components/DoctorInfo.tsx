import React from 'react';
import "./DoctorInfo.css";
import Pressable from './pressable';

type DoctorInfoProps = {
    source: string;
    name: string;
    age: number | string;
    hospital: string;
    speciality: string;
    oncontact: () => void;
};

function DoctorInfo({ source, name, age, hospital, speciality, oncontact }: DoctorInfoProps) {
   
    return (
        <div id='infobox'>
            <div id='image'>
                <img src={source} alt='Doctor' />
            </div>
            <div id="details">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Field:</strong> {speciality}</p>
                <p><strong>Clinic:</strong> {hospital}</p>
                <Pressable children={"Contact"} height={"40px"} onPress={oncontact}/>
            </div>
        </div>
    );
}

export default DoctorInfo;
