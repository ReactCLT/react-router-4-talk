import React from 'react';
import unknownPerson from '../static/unknown-person.gif';

const Member = ({ member }) => (
  <div>
    <h2>Attendee</h2>
    {member.photo
      ? <img src={member.photo.photo_link} alt={`${member.name}`} />
      : <img src={unknownPerson} alt={`Unknown avatar for ${member.name}`} />
    }
    <p>{member.name}</p>
  </div>
);

export default Member;
