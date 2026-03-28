import { useState } from "react";
import Navbar from "../components/Navbar";
import MatchCard from "../components/MatchCard";
import PlayerCard from "../components/PlayerCard";

import rohit from "../images/rohit.png";
import bumrah from "../images/bumrah.png";
import ishan from "../images/ishan.png";
import surya from "../images/surya.png";
import stadium from "../images/stadium.png";

const playersData = [
  { name: "Rohit Sharma", runs: 350, wickets: 0, fours: 40, sixes: 15 },
  { name: "Jasprit Bumrah", runs: 20, wickets: 15, fours: 2, sixes: 0 },
  { name: "Ishan Kishan", runs: 280, wickets: 0, fours: 30, sixes: 10 },
  { name: "Surya Kumar", runs: 310, wickets: 1, fours: 35, sixes: 12 },
];

function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState(playersData[0]);

  /* ✅ FIX: moved inside */
  const [vote, setVote] = useState(null);

  const miPercent = vote === "MI" ? 65 : 60;
  const oppPercent = 100 - miPercent;

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <img src={stadium} alt="stadium" className="hero-bg" />

        <div className="hero-content">
          <h1>
            Welcome to <br />
            <span>Mumbai Indians</span>
          </h1>

          <p>
            Get the latest news, schedules, stats and engage with your favourite IPL team!
          </p>

          <button className="hero-btn">View Latest Match</button>
        </div>

        <div className="hero-player">
          <img src={rohit} alt="Rohit Sharma" />
        </div>
      </section>

      {/* MAIN */}
      <section className="main-layout">
        <div className="left-section">
          <h2 className="section-title">Top Players</h2>

          <div className="top-player-grid">
            <PlayerCard name="Rohit Sharma" role="Batsman" runs="350" wickets="0" image={rohit} />
            <PlayerCard name="Jasprit Bumrah" role="Bowler" runs="20" wickets="15" image={bumrah} />
            <PlayerCard name="Ishan Kishan" role="Wicket Keeper" runs="280" wickets="0" image={ishan} />
            <PlayerCard name="Surya Kumar Yadav" role="Batsman" runs="310" wickets="1" image={surya} />
          </div>
        </div>

        <div className="right-section">
          <div className="latest-box">
            <h3>Latest Matches</h3>

            <div className="match-scroll">
              <MatchCard team1="MI" team2="RCB" score1="162/8" score2="157/9" />
              <MatchCard team1="MI" team2="GT" score1="200/5" score2="198/7" />
              <MatchCard team1="MI" team2="KKR" score1="170/6" score2="168/9" />
              <MatchCard team1="MI" team2="SRH" score1="190/4" score2="185/8" />
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MATCH */}
      <div className="live-match">
        <h2>🔴 Live Match</h2>
        <p>MI vs CSK</p>
        <h3>145/3 (15.2 overs)</h3>
        <span className="live-badge">LIVE</span>
      </div>

      {/* PLAYER STATS */}
      <div className="compare-section">
        <h2>Player Stats</h2>

        <select
          className="player-select"
          onChange={(e) =>
            setSelectedPlayer(
              playersData.find((p) => p.name === e.target.value)
            )
          }
        >
          {playersData.map((player) => (
            <option key={player.name}>{player.name}</option>
          ))}
        </select>

        <div className="player-stats-card">
          <h3>{selectedPlayer.name}</h3>

          <div className="stats-grid">
            <div><span>Runs</span><p>{selectedPlayer.runs}</p></div>
            <div><span>Wickets</span><p>{selectedPlayer.wickets}</p></div>
            <div><span>Fours</span><p>{selectedPlayer.fours}</p></div>
            <div><span>Sixes</span><p>{selectedPlayer.sixes}</p></div>
          </div>
        </div>
      </div>

      {/* FAN POLL */}
      <div className="fan-poll-section">
        <h2>Fan Poll</h2>
        <p>Who will win the next match?</p>

        <div className="poll-options">
          <button
            className={vote === "MI" ? "active mi-btn" : "mi-btn"}
            onClick={() => setVote("MI")}
          >
            MI
          </button>

          <button
            className={vote === "OPP" ? "active opp-btn" : "opp-btn"}
            onClick={() => setVote("OPP")}
          >
            Opponent
          </button>
        </div>

        {vote && (
          <div className="poll-result">
            <div className="poll-row">
              <span>MI</span>
              <div className="bar">
                <div className="fill mi" style={{ width: `${miPercent}%` }}>
                  {miPercent}%
                </div>
              </div>
            </div>

            <div className="poll-row">
              <span>Opponent</span>
              <div className="bar">
                <div className="fill opp" style={{ width: `${oppPercent}%` }}>
                  {oppPercent}%
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* NEWS */}
      <div className="news-section">
        <h2>Latest News</h2>

        <div className="news-grid">
          <div className="news-card">
            <h3>🔥 MI signs new all-rounder</h3>
            <p>Team strengthens middle order ahead of playoffs.</p>
          </div>

          <div className="news-card">
            <h3>🏏 Rohit hits 100!</h3>
            <p>Captain leads from front in last match.</p>
          </div>

          <div className="news-card">
            <h3>⚡ Bumrah on fire</h3>
            <p>Best bowling figures this season.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;