const server = require("./server");

const port = process.env.PORT || 5500;
server.listen(port, () => console.log(`\n** server running on port ${port} **\n`)); 