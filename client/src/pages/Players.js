import PlayerCard from "../components/PlayerCard";

import rohit from "../images/rohit.png";
import bumrah from "../images/bumrah.png";
import ishan from "../images/ishan.png";
import surya from "../images/surya.png";
import hardik from "../images/hardik.png";
import tilak from "../images/tilak.png";
import tim from "../images/time david.png";
import piyush from "../images/piyush shawla.png";
import arjun from "../images/arjun tendulkar.png";
import nehal from "../images/nehal wadhera.png";
import akash from "../images/akash Madhwal.png";
import brevis from "../images/dewald brevis.png";
import nabi from "../images/mohammad nabi.png";
import coetzee from "../images/gerald coetzee.png";
import kartikeya from "../images/kumar kartikeya.png";

const players = [
  { name: "Rohit Sharma", role: "Batsman", runs: 350, wickets: 0, image: rohit },
  { name: "Jasprit Bumrah", role: "Bowler", runs: 20, wickets: 15, image: bumrah },
  { name: "Ishan Kishan", role: "Wicket Keeper", runs: 280, wickets: 0, image: ishan },
  { name: "Surya Kumar Yadav", role: "Batsman", runs: 310, wickets: 1, image: surya },

  { name: "Hardik Pandya", role: "All Rounder", runs: 250, wickets: 10, image: hardik },
  { name: "Tilak Varma", role: "Batsman", runs: 220, wickets: 0, image: tilak },
  { name: "Tim David", role: "Finisher", runs: 200, wickets: 0, image: tim },
  { name: "Piyush Chawla", role: "Spinner", runs: 50, wickets: 12, image: piyush },
  { name: "Arjun Tendulkar", role: "Bowler", runs: 10, wickets: 5, image: arjun },
  { name: "Nehal Wadhera", role: "Batsman", runs: 180, wickets: 0, image: nehal },
  { name: "Akash Madhwal", role: "Bowler", runs: 5, wickets: 9, image: akash },
  { name: "Dewald Brevis", role: "Batsman", runs: 210, wickets: 0, image: brevis },
  { name: "Mohammad Nabi", role: "All Rounder", runs: 130, wickets: 7, image: nabi },
  { name: "Gerald Coetzee", role: "Bowler", runs: 40, wickets: 11, image: coetzee },
  { name: "Kumar Kartikeya", role: "Bowler", runs: 25, wickets: 6, image: kartikeya },
];

function Players() {
  return (
    <div className="players-page">
      <h2 className="section-title">Mumbai Indians Squad</h2>

      <div className="players-grid">
        {players.map((p, i) => (
          <PlayerCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Players;