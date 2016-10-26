import React from 'react';
import { Link } from 'react-router'
import { getEvents } from '../api/api';
import '../styles/Events.css';

export default class Events extends React.Component {

  state = {
    events: [],
  }

  componentWillMount() {
    getEvents()
      .then(res => res.data)
      .then(events => this.setState({ events }))
      .catch(error => console.log(error));
  }

  formatDate = (time) => {
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    const daysOfWeek = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
    const date = new Date(time);
    const day = date.getDate();
    const dayOfWeekIndex = date.getDay();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${daysOfWeek[dayOfWeekIndex]}, ${months[monthIndex]} ${day}, ${year}`;
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <h2>Events</h2>
        {events.reverse().map(event => (
          <div key={event.id} className="event-list">
            <div className="event-name-col">
              <Link to={`event/${event.id}`}>{event.name}</Link>
            </div>
            <div className="event-time-col">{this.formatDate(event.time)}</div>
          </div>
        ))}
      </div>
    );
  }
}
