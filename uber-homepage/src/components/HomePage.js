import React from 'react';

function HomePage() {
  return (
    <div>
      <header>
        <img src="uber-logo.png" alt="Uber logo" />
        <nav>
          <ul>
            <li><a href="#">Ride</a></li>
            <li><a href="#">Drive</a></li>
            <li><a href="#">Eat</a></li>
            <li><a href="#">Business</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Get there, your way</h1>
        <p>Whether you're headed to work, the airport, or out on the town, Uber connects you with a reliable ride in minutes.</p>
        <button>Sign up to ride</button>
        <button>Sign up to drive</button>
      </main>
      <footer>
        <p>© 2023 Uber Technologies Inc.</p>
      </footer>
    </div>
  );
}

export default HomePage;
