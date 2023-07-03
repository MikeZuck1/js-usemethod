// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const theIphone = {
  name: 'Iphone', // key-value
  model: 'XIV', // key-value
  year: 2022, // key-value
  color: 'grey Sideral', // key-value
  _halfCapacityLevel: 50, // key-value => confidential 
  halfCapacityLevel() { // method (function)
      this._halfCapacityLevel *= 2; // multiplied by 2
      console.log(`Recharged! you\'re phone is completely charged => ${this._halfCapacityLevel} %`);
      // prints 'Recharched! you're phone is completely charged => 100%'
  }
};
theIphone.halfCapacityLevel(); // call the function

const armyLocationInTheBase = () => { // short function 
  let namePilot = 'Mark'; // variable with the value 'Mark'
 
  const fighterJet = { // object 
      expOfPilot: 20, // key value
      typeOfJet: 'Fighter Jet', // key value
      model: 'F-35_Belgium', // key value
      capacity: [769],  // key value
      aVide: 'F-35A : 170 kg, F-35B : 14580 kg, F-35C : 14550 kg', // key value 
      rangeOfFlight: ['up to 10 nautical miles'], // key value
      weight: 25600, // key value
      withArmed: 19000, // key value
      speed: 1900, // key value
      madeIn: 'USA', // key value
      massProduction: 'MacFlurry Inc.', // key value 
      year: 2018, // key value
      location: 'Fort Worth - Dallas - Texas', // key value
      price() { // method
          return `Hi, I'm ${namePilot} and I've ${this.expOfPilot} years of experience. I pilot the a ${this.typeOfJet} the ${this.model}. The capacity of the ${this.typeOfJet} is around ${this.capacity}Manch. There's another capacity like ${this.aVide} and about the range of flight is a ${this.rangeOfFlight}.However, the weight of the jet is ${this.weight} kg and with the arme we can add ${this.withArmed} more. The ${this.typeOfJet} is also speed and the maximum that he can do is ${this.speed} km. He was created at ${this.massProduction} in ${this.year}. The location is ${this.location}.`;
      }
  }
  console.log(fighterJet.price()); // prints Hi, I'm Mark and I've 20 years of experience. I pilot the a Fighter Jet the F-35_Belgium. The capacity of the Fighter Jet is around 769Manch. There's another capacity like F-35A : 170 kg, F-35B : 14580 kg, F-35C : 14550 kg and about the range of flight is a up to 10 nautical miles.However, the weight of the jet is 25600 kg and with the arme we can add 19000 more. The Fighter Jet is also speed and the maximum that he can do is 1900 km. He was created at MacFlurry Inc. in 2018. The location is Fort Worth - Dallas - Texas.
};
armyLocationInTheBase(); // call the function 