#! /home/jain-d/.bun/bin/bun
// Let's implement cache here
// Our Cache was supposed to do one thing, we should read data from the json file and process from only once only untill the cache expires
// Untill the cache expires, we should always use the cache function wrapper, it is then Cache wrapper function's reponsiblity to hydrate
import {c} from "../colors.js";
let cache = {
   data: null,
   duration: null
}

async function getEligibleIndividuals() {
   // Reading and Prasing
   let file = Bun.file("./data.json");
   let contents = await file.json();

   // Sorting
   contents.sort(function(a, b){return a.objectId - b.objectId});

   // Time Based filtering
   let currentSecond = new Date().getSeconds();
   console.log(currentSecond);
   let eligibleIndividuals = contents.filter(content => (content.objectId % 2) == (((currentSecond - (currentSecond % 5)) / 5) % 2) ) 

   return eligibleIndividuals;
}

function cacheDurationTracker() {
   let currentSecond = new Date().getSeconds();
   return (currentSecond - (currentSecond % 5)) / 5;
}

async function getAsyncEligibleIndividuals() {
   let currentDuration = cacheDurationTracker();
   if (currentDuration == cache.duration) {
      console.log(`${c.green}cache hit${c.reset}`);
      return cache.data;
   }
   cache.duration = currentDuration;
   cache.data = await getEligibleIndividuals();
   cache.duration == null ? console.log(`${c.orange}hydrating cache${c.reset}`) : console.log(`${c.blue}rehydrating cache${c.reset}`);
   return cache.data;

}

export { getAsyncEligibleIndividuals as getEligibleIndividuals };
