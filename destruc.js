const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers


  let arr = [1,2];

  [arr[1],arr[0]] = [arr[0],arr[1]];

  const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})