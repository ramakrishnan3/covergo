const pricing = {
  hongkong: {label: "Hongkong", currency: "HKD", rate: 1 },
  usa: {label: "USA", currency: "USD", rate: 2 },
  australia: {label: "Australia", currency: "AUD", rate: 3 }
};
const packages = [
  {label: "Standard", key: "standard"}, 
  {label: "Safe", key: "safe", expensive: 1.5, expensivePercent: "50%"}, 
  {label: "Super Safe", key: "supersafe", expensive: 1.75, expensivePercent: "75%"}
];
const packageRate = {standard: 1, safe: 1.5, supersafe: 1.75};

export { pricing, packages, packageRate };