#! /home/jain-d/.bun/bin/bun
import {c} from "../../colors.js";

let cacheStats = {
   hits: 0,          // Times data was found in cache
   misses: 0,        // Times data had to be fetched from source
   hitLatency: [],   // Response times for cache hits
   missLatency: []  // Response times for cache misses
}

let cache = new Map();
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
      return individuals;
   }
}

function timeBasedExpiration(id) {
   setTimeout(() => { 
      cache.delete(id);
   }, 15e3);
}

async function getIndividualById(id) {
   if (cache.has(id)) {
      clearTimeout(cache.get(id).trigger);
      cacheStats.hits++;
      return cache.get(id).data;
   }
   cacheStats.misses++;
   cache.set(id, {data: await fetchData(id), value: id, trigger: "", accessBasedExpiry: function(){this.trigger = setTimeout(() => {cache.delete(this.value);}, 10e3)}});
   cache.get(id).accessBasedExpiry();
   timeBasedExpiration(id);                                                     //   <==  we have start the time based cache invalidation here
   return cache.get(id).data;
}

async function getIndividualsByIds(ids) {
   let assortedData = [];
   let uncachedEntries = [];
   ids.forEach(id => {
      if (cache.has(id)) {
         clearTimeout(cache.get(id).trigger);
         cacheStats.hits++;
         assortedData.push(cache.get(id).data);
      } else {
         uncachedEntries.push(id);
         cacheStats.misses++;
      }
   });
   if (uncachedEntries.length) {
      let fetched = await fetchData(uncachedEntries);
      fetched.forEach(datum => {
         cache.set(datum.objectId, {data: datum, value: datum.objectId, trigger: "", accessBasedExpiry: function(){this.trigger = setTimeout(() => {cache.delete(this.value);}, 10e3)}});
         cache.get(datum.objectId).accessBasedExpiry();
         timeBasedExpiration(datum.objectId);                                                     //   <==  we have start the time based cache invalidation here
         assortedData.push(datum);
      })
   }
   return assortedData;
}

function clearCacheForId(id) {
   cache.delete(id);
}

function clearCache() {
   cache.clear();
}
