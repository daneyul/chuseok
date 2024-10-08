import React from "react"

const Timer = () => {
  let countDownDate = new Date("Sep 17, 2024").getTime();
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  return(
    <h5 class="text-center landing-title4">{`${days} days until next Chuseok!`}</h5>
  )
}

export default Timer