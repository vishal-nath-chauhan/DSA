function BenjamiBulbs(n) {
  for (let i = 1; i * i < n; i++) {
    console.log(i * i);
  }
}

// As perfectly squared numbers like 4,16,25, has odd number of factors.
// In our case all the bulbs who toggled odd number of times wil be on so we will find all the perfectly squared numbers till n

BenjamiBulbs(20)