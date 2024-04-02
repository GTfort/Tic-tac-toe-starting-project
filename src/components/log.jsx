// In Log.jsx
export default function Log({ logEntries }) {
  console.log("Rendering log entries:", logEntries);
  return (
    <ol id="log">
      {logEntries.map((entry, index) => (
        <li key={index}>{entry}</li>
      ))}
    </ol>
  );
}
