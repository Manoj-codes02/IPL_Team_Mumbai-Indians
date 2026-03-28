function MatchCard({ team1, team2, score1, score2 }) {
  return (
    <div className="match-card">

      <h3>{team1} vs {team2}</h3>

      <p>{score1} - {score2}</p>

      <button className="match-btn">
        View Scorecard
      </button>

    </div>
  );
}

export default MatchCard;