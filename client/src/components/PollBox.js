function PollBox(){

return(

<div className="poll-box">

<h3>Fan Poll</h3>

<p>Who will win the next match?</p>

<label>
<input type="radio" name="vote"/> Mumbai Indians
</label>

<label>
<input type="radio" name="vote"/> Kolkata Knight Riders
</label>

<button className="poll-btn-main">Vote</button>

</div>

)

}

export default PollBox