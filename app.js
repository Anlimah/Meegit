const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/webhook', express.json({type: 'application/json'}), (req, res) => {
  const event = req.headers['x-github-event'];
  const payload = req.body;

  console.log(`Received GitHub event: ${event}`);

  // Handle different GitHub events here 
  switch (event) {
    case 'ping':
        handlePingEvent(payload);
        break;

    case 'push':
        handlePushEvent(payload);
        break;

    case 'issues':
        handleIssuesEvent(payload);
        break;

    // Add more cases for other events as needed
    default:
        console.log('Issues event received:', payload);
        break;
  }

  res.status(200).send('Webhook received successfully');
});

function handlePingEvent(payload) {
  // Handle issues event (e.g., notify users about new issues)
  console.log('Issues event received:', payload);
}

function handlePushEvent(payload) {
  // Handle push event (e.g., notify users about new commits)
  console.log('Push event received:', payload);
}

function handleIssuesEvent(payload) {
  // Handle issues event (e.g., notify users about new issues)
  console.log('Issues event received:', payload);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

