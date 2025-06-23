const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "LandRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LandTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getLand",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ipfsHash",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct LandRegistry.Land",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "landCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lands",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ipfsHash",
          "type": "string"
        }
      ],
      "name": "registerLand",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ipfsHash",
          "type": "string"
        }
      ],
      "name": "registerLandFor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferLand",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  
  let web3;
  let contract;
  let currentAccount;
  
  async function init() {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      contract = new web3.eth.Contract(contractABI, contractAddress);
      
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        currentAccount = accounts[0];
        setConnected(currentAccount);
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
          currentAccount = accounts[0];
          setConnected(currentAccount);
          displayAllLands();
        });
        
        // Listen for chain changes
        window.ethereum.on('chainChanged', () => {
          window.location.reload();
        });
        
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      document.getElementById("connectMessage").innerText = "Please install MetaMask or another Ethereum wallet.";
    }
  }
  
  async function connectWallet() {
    await init();
  }
  
  async function registerLand(owner, location, ipfsHash) {
    try {
      const btn = document.getElementById("registerLandBtn");
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> Registering...';
      
      // If owner is not specified, use current account
      const effectiveOwner = owner || currentAccount;
      
      // Use the appropriate contract method based on whether owner was specified
      const method = owner 
        ? contract.methods.registerLandFor(owner, location, ipfsHash)
        : contract.methods.registerLand(location, ipfsHash);
      
      await method
        .send({ from: currentAccount })
        .on('receipt', () => {
          displayAllLands();
          document.getElementById("landForm").reset();
          document.getElementById("landFormContainer").style.display = "none";
        });
      
    } catch (error) {
      console.error("Error registering land:", error);
      alert("Error registering land: " + error.message);
    } finally {
      const btn = document.getElementById("registerLandBtn");
      btn.disabled = false;
      btn.innerText = "Register Land";
    }
  }
  
  async function transferLand(landId, newOwnerAddress) {
    try {
      const btn = document.getElementById("transferLandBtn");
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> Transferring...';
      
      await contract.methods.transferLand(landId, newOwnerAddress)
        .send({ from: currentAccount })
        .on('receipt', () => {
          displayAllLands();
          document.getElementById("transferForm").reset();
          document.getElementById("transferFormContainer").style.display = "none";
        });
      
    } catch (error) {
      console.error("Error transferring land:", error);
      alert("Error transferring land: " + error.message);
    } finally {
      const btn = document.getElementById("transferLandBtn");
      btn.disabled = false;
      btn.innerText = "Transfer Ownership";
    }
  }
  
  async function displayAllLands() {
    try {
      const landsContainer = document.getElementById("landsContainer");
      landsContainer.innerHTML = "<h2>Land Records</h2>";
      
      const landCount = await contract.methods.landCounter().call();
      
      if (landCount == 0) {
        landsContainer.innerHTML += "<p>No land records found.</p>";
        return;
      }
      
      for (let i = 1; i <= landCount; i++) {
        try {
          const land = await contract.methods.getLand(i).call();
          
          const landElement = document.createElement("div");
          landElement.className = "land-record";
          
          const isOwner = land.owner.toLowerCase() === currentAccount.toLowerCase();
          
          landElement.innerHTML = `
            <div class="record-header">
              <h3>Land ID: ${land.id}</h3>
              <span class="record-status">${isOwner ? 'Owned by you' : 'Owned by ' + shortAddress(land.owner)}</span>
            </div>
            <div class="record-details">
              <p><strong>Location:</strong> ${land.location}</p>
              <p><strong>Document:</strong> <a href="https://ipfs.io/ipfs/${land.ipfsHash}" target="_blank">View on IPFS</a></p>
              <p><strong>Registered on:</strong> ${new Date(land.timestamp * 1000).toLocaleString()}</p>
            </div>
            ${isOwner ? `<button class="transfer-btn" data-land-id="${land.id}">Transfer Ownership</button>` : ''}
          `;
          
          landsContainer.appendChild(landElement);
        } catch (e) {
          console.log(`Land ${i} not found or error:`, e);
        }
      }
      
      // Add event listeners to transfer buttons
      document.querySelectorAll('.transfer-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const landId = e.target.getAttribute('data-land-id');
          document.getElementById("transferFormContainer").style.display = "block";
          document.getElementById("transferLandId").value = landId;
        });
      });
      
    } catch (error) {
      console.error("Error fetching lands:", error);
      landsContainer.innerHTML += "<p>Error loading land records.</p>";
    }
  }
  
  function shortAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  
  function setConnected(address) {
    document.getElementById("userAddress").innerText = "Connected: " + shortAddress(address);
    document.getElementById("connectMessage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    displayAllLands();
  }
  
  // Event Listeners
  document.getElementById("connectWalletBtn").addEventListener("click", connectWallet);
  
  document.getElementById("showRegisterFormBtn").addEventListener("click", () => {
    document.getElementById("landFormContainer").style.display = "block";
    document.getElementById("transferFormContainer").style.display = "none";
  });
  
  document.getElementById("showAllLandsBtn").addEventListener("click", () => {
    document.getElementById("landFormContainer").style.display = "none";
    document.getElementById("transferFormContainer").style.display = "none";
    displayAllLands();
  });
  
  document.getElementById("landForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const owner = document.getElementById("landOwner").value;
    const location = document.getElementById("landLocation").value;
    const ipfsHash = document.getElementById("landIpfsHash").value;
    await registerLand(owner, location, ipfsHash);
  });
  
  document.getElementById("transferForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const landId = document.getElementById("transferLandId").value;
    const newOwnerAddress = document.getElementById("newOwnerAddress").value;
    await transferLand(landId, newOwnerAddress);
  });
  
  // Initialize the app
  init();