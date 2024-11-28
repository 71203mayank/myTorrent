const express = require('express');
const app = express();

// to store the list od peers, intially no peers.
let peers = {};

app.use(express.json());

// adding a peer to the tracker.
app.post('./announce', (req, res) => {
    const {peerId, bitfield, port} = req.body;
    peers[peerId] = {bitfield, port};
    console.log(`Peer ${peerId} joined with bitfiled ${bitfield}`);

    // return all the peer information
    res.json(peers);
});

// get the list of peers
app.get('/peers', (req, res) => {
    res.json(peers);
})

app.listen(3030, () => console.log('Tracker running on http://localhost:3030'));