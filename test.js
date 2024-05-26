// game.js
const obstacles = [
    { type: 'enemy', position: 100 },
    { type: 'platform', position: 200 },
    { type: 'coin', position: 300 },
    // Add more obstacles as needed
];

const Game = () => {
    return (
        <div>
            {obstacles.map((obstacle, index) => (
                <div key={index} className={obstacle.type} style={{ left: `${obstacle.position}px` }}></div>
            ))}
        </div>
    );
};

ReactDOM.render(<Game />, document.getElementById('game-container'));
