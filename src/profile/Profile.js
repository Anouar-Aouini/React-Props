import React from 'react'
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import './Profile.css'

export default function Profile(props) {
    return ( < div className="DIV" style = {
            {display: "flex",flexDirection: "column",}}> {
            props.children
        } <Button onClick = {
            () => props.alertMyInput(`My name is    :   ${props.fullName}

Bio    :     ${props.bio}

Profession     :     ${props.profession}`)
        } > ClickMe </Button> </div>
    );
};
Profile.defaultProps = {
    fullName: "React",
    bio: "React A JavaScript library for building user interfaces .",
    profession: "JavaScript library ."
};
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
}