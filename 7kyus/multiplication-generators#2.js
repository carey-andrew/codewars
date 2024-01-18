function* generator(a) {
    let b = 1;
  
    while (b <= 12) {
      const c = a * b;
      yield `${a} x ${b} = ${c}`;
      b++;
    }
  }