module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545, // Ganache GUI default port
        network_id: "1337" 
      }
    },
    compilers: {
      solc: {
        version: "0.8.20"
      }
    }
  };
  