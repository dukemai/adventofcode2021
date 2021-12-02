const data = require("./day2.json");

const doPart1 = () => {
  const travel = data.reduce(
    (acc, curr) => {
      const [instruction, number] = curr.split(" ");
      switch (instruction) {
        case "forward":
          acc.horizontal += +number;
          break;

        case "down":
          acc.depth += +number;
          break;

        case "up":
          acc.depth -= +number;
          break;

        default:
          break;
      }
      return acc;
    },
    { horizontal: 0, depth: 0 }
  );
  return travel.horizontal * travel.depth;
};

const doPart2 = () => {
  const travel = data.reduce(
    (acc, curr) => {
      const [instruction, number] = curr.split(" ");
      switch (instruction) {
        case "forward":
          acc.horizontal += +number;
          acc.depth += acc.aim * (+number);
          break;

        case "down":
          acc.aim += +number;
          break;

        case "up":
          acc.aim -= +number;
          break;

        default:
          break;
      }
      return acc;
    },
    { horizontal: 0, depth: 0, aim: 0 }
  );
  console.log(travel);
  return travel.horizontal * travel.depth;
};


console.log(doPart2());