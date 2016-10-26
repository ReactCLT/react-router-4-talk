import fetchJsonp from 'fetch-jsonp';


const eventsUri = 'https://api.meetup.com/ReactJS-Charlotte/events?&sign=true&photo-host=public&page=20&status=cancelled,upcoming,past,proposed,suggested,draft';
const rsvpUri = eventId => `https://api.meetup.com/ReactJS-Charlotte/events/${eventId}/rsvps?&sign=true&photo-host=public&response=yes`;

export const getEvents = () => fetchJsonp(eventsUri).then(res => res.json());
export const getRsvps = eventId => fetchJsonp(rsvpUri(eventId)).then(res => res.json());
