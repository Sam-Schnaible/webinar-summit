import React from 'react';
import './Header.css';

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const bookTicketsEl = document.getElementById('book-tickets');
    if (bookTicketsEl) {
      const { top } = bookTicketsEl.getBoundingClientRect();
      bookTicketsEl.classList.toggle('sticky', top <= 0);
    }
  };

  render() {
    return (
      <div className="header">
        <div className="logo">Webinar Summit</div>
        <div id="book-tickets" className="nav-item">
          Book Tickets
        </div>
      </div>
    );
  }
}

export default Header;