function filterOutOdds(...numbers) {
    const nums = [...numbers];
    return nums.filter((num) => {
      return num % 2 === 0
    });
  }

  function findMin(...numbers){
    return Math.min(...numbers);
}

function mergeObjects(obj1,obj2){
    const newObj = {...obj1,...obj2};
    return newObj;
}

function doubleAndReturnArgs(arr,...args) {
    const arrArgs = [...args];
    return  [...arr,...arrArgs.map(x => x * 2)];
}

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

const extend = (arr1,arr2) => {
    return [...arr1,...arr2];
}

const addKeyVal = (obj,key,val) => {
    return {...obj, key : val};
}

const removeKey = (obj,key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1,...obj2};
}
