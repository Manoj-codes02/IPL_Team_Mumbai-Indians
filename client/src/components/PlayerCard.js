function PlayerCard({name,role,runs,wickets,image}){

return(

<div className="player-card">

<div className="player-img">
<img src={image} alt={name}/>
</div>

<h3>{name}</h3>

<p>{role}</p>
<p>Runs: {runs}</p>
<p>Wickets: {wickets}</p>

<button className="player-btn">
View Profile
</button>

</div>

)

}

export default PlayerCard