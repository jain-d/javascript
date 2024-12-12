// Cache structure to store our processed data
let cache = {
    data: null,           // The processed data
    timestamp: null,      // When the data was last processed
    intervalId: null      // The 5-second interval we're currently in
};

// Function to get the current interval ID (changes every 5 seconds)
function getCurrentIntervalId() {
    const currentSecond = new Date().getSeconds();
    return Math.floor(currentSecond / 5);
}

// Original data processing function
async function getEligibleIndividuals() {
    console.log("Performing expensive operation: Reading and processing data");
    
    // Reading and Parsing
    let file = Bun.file("./data.json");
    let contents = await file.json();
    
    // Sorting
    contents.sort(function(a, b) {
        return a.objectId - b.objectId
    });
    
    // Time Based filtering
    let currentSecond = new Date().getSeconds();
    let eligibleIndividuals = contents.filter(content => 
        (content.objectId % 2) == (((currentSecond - (currentSecond % 5)) / 5) % 2)
    );
    
    return eligibleIndividuals;
}

// Wrapper function that implements caching
async function getCachedEligibleIndividuals() {
    const currentIntervalId = getCurrentIntervalId();
    
    // Check if we have valid cached data
    if (cache.data && cache.intervalId === currentIntervalId) {
        console.log("Cache hit! Returning cached data");
        return cache.data;
    }
    
    // If we reach here, either:
    // 1. Cache is empty (cache.data is null)
    // 2. Cache has expired (intervalId changed)
    console.log("Cache miss! Fetching fresh data");
    
    // Get fresh data
    const freshData = await getEligibleIndividuals();
    
    // Update cache
    cache.data = freshData;
    cache.timestamp = Date.now();
    cache.intervalId = currentIntervalId;
    
    return freshData;
}

export { getCachedEligibleIndividuals as getEligibleIndividuals };
