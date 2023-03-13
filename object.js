function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  let favoriteNumber = 42;

const instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  }

  function createAnimal(animal, verb, noise){
    return {
      animal,
      [verb](){
        return noise;
      }
    }
  }