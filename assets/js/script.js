// Example LeetCode API endpoint (replace with your username and actual API)
const leetcodeUrl = 'https://leetcode.com/u/NivedithaJ_05/';
const gfgUrl = 'https://www.geeksforgeeks.org/user/nivec6c3i/'; // Replace with your scraper/API URL

// Fetch LeetCode data
async function fetchLeetCodeData() {
    try {
        const response = await fetch(leetcodeUrl);
        const data = await response.json();
        document.getElementById('leetcode-count').textContent = data.totalSolved || 'N/A';
    } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        document.getElementById('leetcode-count').textContent = 'Error';
    }
}

// Fetch GeeksforGeeks data
async function fetchGFGData() {
    try {
        const response = await fetch(gfgUrl);
        const data = await response.json();
        document.getElementById('gfg-count1').textContent = data.totalSolved || 'N/A';
    } catch (error) {
        console.error('Error fetching GeeksforGeeks data:', error);
        document.getElementById('gfg-count').textContent = 'Error';
    }
}

// Initialize fetch on page load
fetchLeetCodeData();
fetchGFGData();
