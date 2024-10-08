/* Clock-komponent ansvarar för att visa den aktuella tiden.
 
 -formattedTime lagrar time-objektet som omformaterats till en sträng med svenskt tidsformat. 
 -Returnerar element i JSX-format med den aktuella tiden.

 */
 
 function Clock({ time }) {
  const formattedTime = time.toLocaleTimeString('sv-SE', { hour12: false });

  return (
    <div className="clock">
      <h1>Current time:</h1>
      <span>{formattedTime}</span>
    </div>
  );
}

export default Clock; 



