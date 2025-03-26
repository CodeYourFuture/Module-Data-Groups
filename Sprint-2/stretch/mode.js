// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

/*function calculateMode(list) {
  // track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  // Find the value with the highest frequency
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}
  */




// stage 1 : Tracking the frequency of each value 

function calculateMode(list)
{
  // create an object to store the frequency of each value 
  let freqs = {};

  // loop each value from the input
  for (let num of list)
  {
      // if num is number 
      if (typeof num === "number")
      {
        // if the num is already in object add +1 
        if (freqs[num])
        {
          freqs[num]++;
        }
        else 
        {
          freqs[num]=1;
        }
      }
      
  }


//stage 2 find the largest value (mode)


  let maxFreq = 0;  // to store max frequency 
  let mode ; // to store mode 

  // loop each number , frequency from the object 
  for (const [num,freq] of Object.entries(freqs))
  {
  // if the frequency is greater than maxFreq 
    if (freq > maxFreq)
    {
      mode = num;    // assign mode to the num
      maxFreq = freq; // update the maxFreq to freq 
    } 

}
  return Number(mode);
}



let strSent = [1,2,3,4,4,5,4,5,'5',6]
console.log(calculateMode(strSent));

module.exports = calculateMode;
