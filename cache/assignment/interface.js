#! /home/jain-d/.bun/bin/bun
import * as process from "./internals.js";
console.log(`this is the fowarding facing interface, all it does is calling, processing happens elsewere`);

// Fetch single record
getIndividualById(4)
// Should:
// - Check cache first
// - If not in cache, read from file and process
// - Update cache and stats
// - Return the record

// Fetch multiple records
getIndividualsByIds([1, 3, 5])
// Should:
// - Check cache for each ID
// - Fetch missing records from file
// - Update cache and stats for each
// - Return all requested records

// Get statistics
getCacheStats()
// Should return:
// - Hit/miss counts
// - Average response times
// - Current cache size
// - Any other useful metrics

// Clear specific record
clearCacheForId(4)
// Remove single record from cache

// Clear all cache
clearCache()
// Remove all records from cache
