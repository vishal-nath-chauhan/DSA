function PythagoreanTriplet(n1, n2, n3) {
  let max, min1, min2;
  if (n1 > n2 && n1 > n3) {
    max = n1;
    min1 = n2;
    min2 = n3;
  } else if (n2 > n3) {
    max = n2;
    min1 = n3;
    min2 = n1;
  } else {
    max = n3;
    min1 = n2;
    min2 = n1;
  }
  if (max ** 2 == min1 ** 2 + min2 ** 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

PythagoreanTriplet(5,3,1)