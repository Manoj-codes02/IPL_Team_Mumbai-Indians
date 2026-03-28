import MatchCard from "../components/MatchCard";

function Matches() {
  return (
    <div className="matches-page">

      <h2 className="section-title">Latest Matches</h2>

      <div className="match-grid">
        <MatchCard team1="MI" team2="CSK" score1="180/3" score2="177/9" />
        <MatchCard team1="MI" team2="RCB" score1="162/8" score2="157/9" />
        <MatchCard team1="MI" team2="GT" score1="200/5" score2="198/7" />
        <MatchCard team1="MI" team2="KKR" score1="170/6" score2="168/9" />
      </div>

    </div>
  );
}

export default Matches;