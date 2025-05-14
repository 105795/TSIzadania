const poll = new Map();
const addOption = (option) => {
  if (!option) return `Option cannot be empty.`;
  if (poll.has(option)) return `Option "${option}" already exists.`;
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
};
const vote = (option, voterId) => {
  if (!poll.has(option)) return `Option "${option}" does not exist.`;
  const voters = poll.get(option);
  if (voters.has(voterId)) return `Voter ${voterId} has already voted for "${option}".`;
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
};
const displayResults = () => {
  let result = 'Poll Results:\n';
  poll.forEach((voters, option) => {
    result += `${option}: ${voters.size} votes\n`;
  });
  return result.trim();
};

console.log(addOption('Turkey'));
console.log(addOption('Morocco'));
console.log(addOption('Japan'));
console.log(vote('Turkey', 'user1'));
console.log(vote('Morocco', 'user2'));
console.log(vote('Turkey', 'user3'));
console.log(vote('Turkey', 'user1'));
console.log(displayResults());