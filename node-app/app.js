
const axios = require('axios');
const fs = require('fs');

const WEBSITES_FILE = 'websites.json';
const STATUS_HISTORY_COUNT = 10;

const websitesData = JSON.parse(fs.readFileSync(WEBSITES_FILE, 'utf8'));
const websites = websitesData.map((data) => data.url); 

const statusHistory = {};
websites.forEach((website) => {
  statusHistory[website] = [];
});

async function checkWebsiteStatus(website) {
  try {
    const response = await axios.get(website);
    return response.status === 200 ? 'online' : 'offline';
  } catch (error) {
    return 'offline';
  }
}

function updateStatusHistory(website, status) {
  const history = statusHistory[website];
  history.unshift({ status, timestamp: new Date() });

  statusHistory[website] = history.slice(0, STATUS_HISTORY_COUNT);
}
async function monitorWebsites() {
  for (const website of websites) {
    const status = await checkWebsiteStatus(website);
    console.log(`${website} is ${status}`);
    updateStatusHistory(website, status);
  }
}
setInterval(monitorWebsites, 60000);
