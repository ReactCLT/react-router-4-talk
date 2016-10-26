import React from 'react';
import { Match, Link } from 'react-router';
import Member from '../components/Member';
import { getRsvps } from '../api/api';
import '../styles/Event.css';

export default class Event extends React.Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired,
    pathname: React.PropTypes.string.isRequired,
  }

  state = {
    rsvps: [],
  }

  componentWillMount() {
    const { params } = this.props;
    getRsvps(params.eventId)
      .then(res => res.data)
      .then(rsvps => this.setState({ rsvps }))
      .catch(error => console.log(error));
  }

  render() {
    const { rsvps } = this.state;
    const { pathname } = this.props;
    return (
      <div className="event">
        <div className="rsvp-list">
          <h2>RSVPs</h2>
          {rsvps.map(rsvp => (
            <Link to={`${pathname}/member/${rsvp.member.id}`} key={rsvp.member.id}>
              <p>{rsvp.member.name}</p>
            </Link>
          ))}
        </div>
        {rsvps.length > 0 &&
          <Match
            pattern={`${pathname}/member/:memberId`}
            render={matchProps => (
              <div className="member-info">
                <Member
                  { ...matchProps }
                  member={rsvps.find(rsvp => rsvp.member.id === +(matchProps.params.memberId)).member}
                />
              </div>
            )}
          />
        }
      </div>
    );
  }
}
