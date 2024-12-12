#! /home/jain-d/.bun/bin/bun
import {c} from "../../colors.js";
console.log(`this is the internal processing, the backend.`);

let cacheStats = {
    hits: 0,          // Times data was found in cache
    misses: 0,        // Times data had to be fetched from source
    hitLatency: [],   // Response times for cache hits
    missLatency: [],  // Response times for cache misses
}

let cache = new Map();
let hardLimit;
let accessBased;
async function fetchData(id) {
   let file = Bun.file("./data.json");
   let rawData = await file.json();
   if (!id.length) {
      return rawData.find(entry => entry.objectId === id);
   }
   else {
      let individuals = [];
      for (let i of id) {
         individuals.push(rawData.find(entry => entry.objectId === i));
      }
   }
   return individuals;
}
function cacheInvalidation(id) {
   hardLimit = setTimeout(()=>{ 
      cache.delete(id);
   }, 15e3);
   accessBased = setTimeout(()=>{ 
      cache.delete(id);
      clearTimeout(hardLimit);
   }, 10e3);
}
/*
async function getIndividualsByIds(id) {
}
*/
async function getIndividualById(id) {
   if (cache.get(id)) {
      cacheStats.hits++;
      console.log(`cache hit by ${c.green}${cacheStats.hits}${c.reset}`);
      clearTimeout(accessBased);
      return cache.get(id);
   }
   cacheStats.misses++;
   console.log(`cache missed by ${c.red}${cacheStats.misses}${c.reset}`)
   cache.set(id, await fetchData(id));
   cacheInvalidation(id);
   return cache.get(id);
}
let index = 0;
let int = setInterval(async () => { 
      if (index % 2 == 0) {
         console.log(await getIndividualById(3)); 
      } else {
         console.log(await getIndividualById(4));
      }
      index++;
   if (index === 20) {
      console.log("sayonara");
      clearInterval(int);
   }
}, 3e3);
