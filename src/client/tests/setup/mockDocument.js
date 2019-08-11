document.body.innerHTML = `
  <canvas id="game-canvas"></canvas>
  <div id="play-menu" class="hidden">
    <h1>An example .io game</h1>
    <p>
      Stay alive and shoot other players.
      <br />
      Use your mouse to move.
    </p>
    <hr />
    <p>
      <!-- <br /> -->
      Read the tutorial: <a href="https://victorzhou.com/blog/build-an-io-game-part-1/" target="_blank">How to Build an .io Game</a>.
      <br />
      See the source code on <a href="https://github.com/vzhou842/example-.io-game" target="_blank">Github</a>.
      <br />
      Created by <a href="https://victorzhou.com">Victor Zhou</a>.
    </p>
    <hr />
    <input type="text" id="username-input" placeholder="Username" />
    <button id="play-button">PLAY</button>
  </div>
  <div id="leaderboard" class="hidden">
    <table>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
      <tr><td></td><td></td></tr>
      <tr><td></td><td></td></tr>
      <tr><td></td><td></td></tr>
      <tr><td></td><td></td></tr>
      <tr><td></td><td></td></tr>
    </table>
  </div>
  <div id="disconnect-modal" class="hidden">
    <div>
      <h2>Disconnected from Server </h2>
      <hr />
      <button id="reconnect-button">RECONNECT</button>
    </div>
  </div>
`;
