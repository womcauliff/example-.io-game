import { updateLeaderboard, setLeaderboardHidden } from '../leaderboard';

// HTML string for an empty leaderboard.
const leaderboardHTMLString = `
<div id="leaderboard" class="">
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
`;

describe('setLeaderboardHidden()', () => {
  it('shows a hidden leaderboard', () => {
    // setup
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = leaderboardHTMLString;
    leaderboard.className = 'hidden';

    setLeaderboardHidden(false);
    expect(leaderboard.classList.contains('hidden')).toBe(false);
  });

  it('hides a visible leaderboard', () => {
    // setup
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = leaderboardHTMLString;

    setLeaderboardHidden(true);
    expect(leaderboard.classList.contains('hidden')).toBe(true);
  });
});

describe('updateLeaderboard', () => {
  it('updates leaderboard after game state update', () => {
    // setup
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = leaderboardHTMLString;
    const gameUpdate = {
      leaderboard: [
        { username: 'dschrute', score: 256 },
        { username: 'exceedinglylongusername', score: 40 },
        { username: 'abernard', score: 1 },
        { username: 'kkapoor', score: 1 },
        { username: 'pbeesly', score: 1 },
      ],
    };

    updateLeaderboard(gameUpdate.leaderboard);
    expect(document.getElementById('leaderboard')).toMatchSnapshot();
  });

  it('maintains a size of 6 rows given an empty leaderboard', () => {
    // setup
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = leaderboardHTMLString;
    const rows = document.querySelectorAll('#leaderboard table tr');
    const emptyLeaderboard = [];

    expect(rows.length).toBe(6);
    updateLeaderboard(emptyLeaderboard);
    expect(rows.length).toBe(6);
  });

  it('maintains a size of 6 rows given a semi-filled leaderboard', () => {
    // setup
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = leaderboardHTMLString;
    const rows = document.querySelectorAll('#leaderboard table tr');
    const semiFilledLeaderboard = [
      { username: 'dschrute', score: 255 },
      { username: 'mscott', score: 51 },
      { username: 'exceedinglylongusername', score: 39 },
    ];

    expect(rows.length).toBe(6);
    updateLeaderboard(semiFilledLeaderboard);
    expect(rows.length).toBe(6);
  });

  it('maintains a size of 6 rows given a full leaderboard', () => {
    // setup
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = leaderboardHTMLString;
    const rows = document.querySelectorAll('#leaderboard table tr');
    const fullLeaderboard = [
      { username: 'dschrute', score: 256 },
      { username: 'exceedinglylongusername', score: 40 },
      { username: 'abernard', score: 1 },
      { username: 'kkapoor', score: 1 },
      { username: 'pbeesly', score: 1 },
    ];

    expect(rows.length).toBe(6);
    updateLeaderboard(fullLeaderboard);
    expect(rows.length).toBe(6);
  });
});
