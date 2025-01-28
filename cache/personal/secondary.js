#! /home/jain-d/.bun/bin/bun

import {getEligibleIndividuals} from "./main.js"

setInterval( async function(){
   let currentBatch = await getEligibleIndividuals();

   for (let individual of currentBatch) {
      console.log(`${individual.objectId} ${individual.name}`);
   }
}, 2e3);
