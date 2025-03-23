let processMap = new Map();

function createEntry(entry, entryName) {
   processMap.set(entry, {
      name: entryName,
      value: entry,
      added: new Date(),
      expiry: function() {
         setTimeout(() => {
            processMap.delete(this.value)
         }, 5e3);
      }
   })
}


createEntry(4, "four");
processMap.get(4).expiry();

setInterval(() => {
   processMap.forEach((value, key) => {
      if ((value.added - (new Date())) >= 15e3) {
         processMap.delete(key);
      }
   })
}, 1e3);

let printing = setInterval(() => {
   console.log(processMap.get(4));
   if (!Boolean(processMap.get(4))) {
      clearInterval(printing);
   }
}, 1e3);
