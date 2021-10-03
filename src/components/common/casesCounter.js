const Counter = (cases) => {
  const allCases = cases.reduce((a, c) => a + c.confirmed, 0);
  return allCases.toLocaleString('en-US');
};

export default Counter;
