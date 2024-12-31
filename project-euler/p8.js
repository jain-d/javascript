async function largestProductinaSeries(n) {
   let largestProduct = 0;
   let file = Bun.file("./p8.input");
   let fileData = await file.text();
   let series = fileData.trimEnd("\n").split("");
   for (let i = n - 1; i < series.length; i++) {
      let product = 1;
      for (let j = i; j >= (i - (n - 1)); j--) {
         product *= +(series.at(j));
      }
      if (product > largestProduct) largestProduct = product;
   }
   return largestProduct;
}

console.log(await largestProductinaSeries(13));
