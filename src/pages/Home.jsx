import '../styles/home.css'
import car from '../assets/F1_HomeScreen_Car.png'

export default function Home() {
    return (
    <>
      <section className="hero">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-welcome">ATMOS RACING LEAGUE</h1>
            <h1 className="home-title">WHERE PRESSURE <span className="accent">CREATES CHAMPIONS</span></h1>
            <p className="home-sub">A competitive F1®25 league with realistic racing, clean competition and a passion for motorsport.</p>
            <div style={{marginTop: '2rem'}}>
              <a className="cta" href="/standings">VIEW STANDINGS</a>
            </div>
          </div>

          <div className="home-image">
            <img src={car} alt="F1 Car" />
          </div>
        </div>
      </section>

      {/* Info row with placeholders: Next Race / Round / Countdown */}
      <section className="info-row">
        <div className="info-grid">
          <div className="info-card info-next">
            <div className="icon">📅</div>
            <div className="meta">NEXT RACE</div>
            <div className="title">IMOLA</div>
            <div className="sub">18 MAY 2025<br/>19:30 BST</div>
          </div>

          <div className="info-card info-round">
            <div className="meta">ROUND 4 / 20</div>
            <div className="title">SEASON 1</div>
            <div style={{marginTop: '1rem'}}>
              <a className="cta small" href="/calendar">VIEW CALENDAR</a>
            </div>
          </div>

          <div className="info-card info-countdown">
            <div className="meta">COUNTDOWN</div>
            <div className="countdown-grid">
              <div className="count">
                <div className="num">05</div>
                <div className="label">DAYS</div>
              </div>
              <div className="count">
                <div className="num">12</div>
                <div className="label">HRS</div>
              </div>
              <div className="count">
                <div className="num">48</div>
                <div className="label">MINS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
}
