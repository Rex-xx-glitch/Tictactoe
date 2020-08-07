const cells = [
  {
    id: 1,
    value: null,
    used: false,
  },
  {
    id: 2,
    value: null,
    used: false,
  },
  {
    id: 3,
    value: null,
    used: false,
  },
  {
    id: 4,
    value: null,
    used: false,
  },
  {
    id: 5,
    value: null,
    used: false,
  },
  {
    id: 6,
    value: null,
    used: false,
  },
  {
    id: 7,
    value: null,
    used: false,
  },
  {
    id: 8,
    value: null,
    used: false,
  },
  {
    id: 9,
    value: null,
    used: false,
  },
];

const players = [
  {
    name: "Player 1",
    numberOfWins: 0,
  },
  {
    name: "Player 2",
    numberOfWins: 0,
  },
];

const gameSymbols = ['O','X']
const currentGameSymbol = 0;

const round = 0;
const currentPlayerIndex = 1;





export { round, cells, players, currentPlayerIndex, gameSymbols, currentGameSymbol };
