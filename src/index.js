// ⚠️ IMPORTANT: COMPILE your updated contract and PASTE the new ABI here.
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "approver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "ApprovalReceived",
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
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "landId",
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
    "name": "LandTransferInitiated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "landId",
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registrationId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "RegistrationApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registrationId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "prospectiveOwner",
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
      }
    ],
    "name": "RegistrationInitiated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registrationId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "RegistrationRejected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "registrationId",
        "type": "uint256"
      }
    ],
    "name": "RegistrationResubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "UserVerified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "VerificationApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "VerificationRejected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "documentIpfsHash",
        "type": "string"
      }
    ],
    "name": "VerificationSubmitted",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "COMMISSIONER_OF_LAND",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "KITWE_CITY_COUNCIL",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "LANDS_DEEDS_REGISTRY",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TREASURY",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_registrationId",
        "type": "uint256"
      }
    ],
    "name": "approveRegistration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "approveTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "approveVerification",
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
    "name": "getPendingVerificationAddresses",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_registrationId",
        "type": "uint256"
      }
    ],
    "name": "getRegistrationApprovals",
    "outputs": [
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "getTransactionApprovals",
    "outputs": [
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getVerificationApprovals",
    "outputs": [
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "enum LandRegistry.ApprovalStatus",
        "name": "",
        "type": "uint8"
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
      },
      {
        "internalType": "bytes32",
        "name": "_uniqueDeedIdHash",
        "type": "bytes32"
      }
    ],
    "name": "initiateRegistration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_landId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "initiateTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "isAuthority",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
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
        "name": "",
        "type": "string"
      }
    ],
    "name": "locationExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
    "name": "pendingVerificationAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "registrationCounter",
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
    "name": "registrations",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "prospectiveOwner",
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
        "internalType": "bool",
        "name": "executed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isRejected",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "rejectionTimestamp",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "rejectionReason",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_registrationId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_reason",
        "type": "string"
      }
    ],
    "name": "rejectRegistration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "rejectTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "rejectVerification",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_registrationId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_newLocation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_newIpfsHash",
        "type": "string"
      }
    ],
    "name": "resubmitRegistration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_documentIpfsHash",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "_uniqueIdHash",
        "type": "bytes32"
      }
    ],
    "name": "submitVerification",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "transactionCounter",
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
    "name": "transactions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "landId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "initiator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "executed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "uniqueDeedIdHashExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "uniqueIdHashExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "verifications",
    "outputs": [
      {
        "internalType": "string",
        "name": "documentIpfsHash",
        "type": "string"
      },
      {
        "internalType": "enum LandRegistry.UserStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// Authorities
const AUTHORITIES = {
  KITWE_CITY_COUNCIL: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  COMMISSIONER_OF_LAND: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  LANDS_DEEDS_REGISTRY: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  TREASURY: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
};

// App State
let web3;
let contract;
let currentAccount;
let userVerificationStatus;
let listenersAttached = false;

// Initialize the application
async function init() {
  if (!window.ethereum) {
    showNotification('Please install MetaMask to use this DApp', 'error');
    document.getElementById("connectMessage").innerHTML = '<i class="fas fa-exclamation-triangle"></i> MetaMask not detected.';
    return;
  }

  web3 = new Web3(window.ethereum);

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    currentAccount = accounts[0];

    if (!contractABI || contractABI.length === 0 || contractAddress.startsWith("YOUR")) {
      throw new Error("Contract ABI or Address is not configured. Please deploy the contract and update index.js.");
    }

    contract = new web3.eth.Contract(contractABI, contractAddress);

    setConnected(currentAccount);
    setupEventListeners();
    await checkUserVerification();
    await loadData();

  } catch (error) {
    console.error("Initialization error:", error);
    showNotification(`Initialization failed: ${error.message}`, 'error');
  }
}

async function loadData() {
  if (!currentAccount) return;
  try {
    if (userVerificationStatus === 2 || isAuthority()) {
      await displayAllLands();
    }
    if (isAuthority()) {
      await Promise.all([
        displayPendingTransfers(),
        displayRegistrationRequests(),
        displayPendingVerifications()
      ]);
    }
  } catch (error) {
    console.error("Error loading data:", error);
    showNotification('Failed to load blockchain data.', 'error');
  }
}

// ----------------------------------------------------------------------------------
// --- UI & Event Listeners ---
// ----------------------------------------------------------------------------------

function setupEventListeners() {
  if (listenersAttached) return;

  window.ethereum.on('accountsChanged', (accounts) => {
    currentAccount = accounts[0] || null;
    if (currentAccount) {
      init();
    } else {
      setConnected(null);
    }
  });

  window.ethereum.on('chainChanged', () => window.location.reload());

  document.getElementById("showRegisterFormBtn").addEventListener('click', () => showSection('landFormContainer'));
  document.getElementById("showAllLandsBtn").addEventListener('click', () => showSection('landsContainer'));
  document.getElementById("showHistoryBtn").addEventListener('click', () => {
    showSection('historyContainer');
    displayHistory();
  });
  document.getElementById("showAdminPanelBtn").addEventListener('click', () => showSection('adminPanelContainer'));

  document.getElementById("landForm").addEventListener('submit', handleRegistrationSubmit);
  document.getElementById("transferForm").addEventListener('submit', handleTransferSubmit);
  document.getElementById("resubmitForm").addEventListener('submit', handleResubmission);
  document.getElementById("rejectionForm").addEventListener('submit', handleRejectionSubmit);

  listenersAttached = true;
}

function setConnected(address) {
  const userAddressEl = document.getElementById("userAddress");
  const dashboardEl = document.getElementById("dashboard");
  const connectMsgEl = document.getElementById("connectMessage");

  if (address) {
    userAddressEl.innerHTML = `<i class="fas fa-user-circle"></i> ${shortAddress(address)}`;
    connectMsgEl.style.display = 'none';
    dashboardEl.style.display = 'block';
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = isAuthority() ? 'flex' : 'none');
  } else {
    userAddressEl.innerHTML = '<i class="fas fa-user-circle"></i> Not connected';
    connectMsgEl.style.display = 'flex';
    dashboardEl.style.display = 'none';
  }
}

function showSection(sectionId) {
  const sections = ['landFormContainer', 'transferFormContainer', 'landsContainer', 'historyContainer', 'adminPanelContainer', 'verificationContainer'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = (id === sectionId) ? 'block' : 'none';
  });

  const buttonMap = {
    'landFormContainer': 'showRegisterFormBtn',
    'landsContainer': 'showAllLandsBtn',
    'historyContainer': 'showHistoryBtn',
    'adminPanelContainer': 'showAdminPanelBtn'
  };
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const activeButton = document.getElementById(buttonMap[sectionId]);
  if (activeButton) activeButton.classList.add('active');
}

// --- OCR Functions ---
async function processDeedDocument(file) {
  showNotification("Scanning deed document with OCR...", "info");
  const worker = await Tesseract.createWorker('eng');
  const ret = await worker.recognize(file);
  const text = ret.data.text;
  await worker.terminate();
  console.log("Extracted Deed Text:", text);

  const deedRegex = /(\d{6})\/(\d{2})\/(\d{1})/;
  const match = text.match(deedRegex);

  if (!match) {
    throw new Error("Could not find a valid Deed number in the document.");
  }

  const uniqueId = match[0];
  showNotification(`Found Deed ID: ${uniqueId}`, "success");
  const uniqueIdHash = web3.utils.soliditySha3(uniqueId);
  console.log("Hashed Deed ID:", uniqueIdHash);
  return { uniqueId, uniqueIdHash };
}

async function processDocument(file) {
  showNotification("Scanning document with OCR... This may take a moment.", "info");
  const worker = await Tesseract.createWorker('eng');
  const ret = await worker.recognize(file);
  const text = ret.data.text;
  await worker.terminate();
  console.log("Extracted Text:", text);

  const nrcRegex = /(\d{6})\/(\d{2})\/(\d{1})/;
  const match = text.match(nrcRegex);

  if (!match) {
    throw new Error("Could not find a valid NRC number in the document. Please use a clearer image.");
  }

  const uniqueId = match[0].replace(/\//g, "");
  showNotification(`Found NRC: ${match[0]}`, "success");
  const uniqueIdHash = web3.utils.soliditySha3(uniqueId);
  console.log("Hashed Unique ID:", uniqueIdHash);
  return { uniqueId, uniqueIdHash };
}

// ----------------------------------------------------------------------------------
// --- User Verification ---
// ----------------------------------------------------------------------------------

async function checkUserVerification() {
  const verification = await contract.methods.verifications(currentAccount).call();
  userVerificationStatus = parseInt(verification.status);
  updateUIAfterVerificationCheck();
}

function updateUIAfterVerificationCheck() {
  const verificationContainer = document.getElementById('verificationContainer');
  const mainNav = document.getElementById('mainNav');
  const statusEl = document.getElementById('verificationStatus');

  const registerBtn = document.getElementById('showRegisterFormBtn');
  const landsBtn = document.getElementById('showAllLandsBtn');

  mainNav.style.display = 'flex';
  let statusHTML = '';
  let containerHTML = '';

  const isVerified = userVerificationStatus === 2;
  registerBtn.disabled = !isVerified;
  landsBtn.disabled = !isVerified;

  if (isVerified) {
    statusHTML = `<i class="fas fa-check-circle"></i> Verified`;
    verificationContainer.style.display = 'none';
    showSection('landFormContainer');
  } else {
    verificationContainer.style.display = 'block';

    let formContent = `
        <div class="form-group">
            <label for="verificationDocument"><i class="fas fa-file-upload"></i> Verification Document</label>
            <input type="file" id="verificationDocument" accept="image/*,application/pdf" required>
            <small class="form-hint">Your document will be scanned for a unique ID and uploaded.</small>
        </div>
        <button type="submit" class="submit-btn"><i class="fas fa-upload"></i> Submit for Verification</button>`;

    switch (userVerificationStatus) {
      case 0:
        statusHTML = `<i class="fas fa-times-circle"></i> Not Verified`;
        containerHTML = `<h2><i class="fas fa-id-card"></i> Identity Verification Required</h2><p>To register or view land deeds, you must first submit a verification document for approval.</p><form id="verificationForm" class="app-form">${formContent}</form>`;
        break;
      case 1:
        statusHTML = `<i class="fas fa-hourglass-half"></i> Verification Pending`;
        containerHTML = `<div class="info-message"><i class="fas fa-info-circle"></i> Your identity verification is pending approval.</div>`;
        break;
      case 3:
        statusHTML = `<i class="fas fa-exclamation-triangle"></i> Verification Rejected`;
        containerHTML = `<div class="error-message"><i class="fas fa-times-circle"></i> Your verification was rejected. Please submit a new, valid document.</div><form id="verificationForm" class="app-form">${formContent.replace('Submit for', 'Resubmit for')}</form>`;
        break;
    }
    showSection('verificationContainer');
  }

  statusEl.innerHTML = statusHTML;
  verificationContainer.innerHTML = containerHTML;
  if (userVerificationStatus === 0 || userVerificationStatus === 3) {
    document.getElementById('verificationForm').addEventListener('submit', handleVerificationSubmit);
  }
}

// ----------------------------------------------------------------------------------
// --- IPFS Upload ---
// ----------------------------------------------------------------------------------

async function uploadToIpfs(file) {
  showNotification("Uploading document securely...", "info");
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    const result = await response.json();
    if (result.error) {
      throw new Error(result.error);
    }
    showNotification("Document successfully pinned to IPFS!", "success");
    return result.ipfsHash;
  } catch (error) {
    console.error("Error in uploadToIpfs:", error);
    throw new Error(`Failed to upload to IPFS. ${error.message}`);
  }
}

// ----------------------------------------------------------------------------------
// --- Form Handlers & Transactions ---
// ----------------------------------------------------------------------------------

async function handleVerificationSubmit(e) {
  e.preventDefault();
  const fileInput = document.getElementById("verificationDocument");
  if (!fileInput.files || fileInput.files.length === 0) {
    showNotification("Please select a document to upload.", "error");
    return;
  }
  const docFile = fileInput.files[0];
  try {
    const { uniqueIdHash } = await processDocument(docFile);
    const docIpfsHash = await uploadToIpfs(docFile);
    await performTransaction(
      () => contract.methods.submitVerification(docIpfsHash, uniqueIdHash),
      "Verification submitted successfully! Please wait for approval."
    );
    await checkUserVerification();
  } catch (error) {
    showNotification(error.message, "error");
  }
}

async function handleRegistrationSubmit(e) {
  e.preventDefault();
  const location = document.getElementById("landLocation").value;
  const fileInput = document.getElementById("landDeedsDocument");
  if (!fileInput.files || fileInput.files.length === 0) {
    showNotification("Please select a land deeds document to upload.", "error");
    return;
  }
  const deedFile = fileInput.files[0];
  try {
    const { uniqueIdHash: uniqueDeedIdHash } = await processDeedDocument(deedFile);
    const deedIpfsHash = await uploadToIpfs(deedFile);
    await performTransaction(
      () => contract.methods.initiateRegistration(location, deedIpfsHash, uniqueDeedIdHash),
      "Registration initiated successfully. Awaiting approvals."
    );
    e.target.reset();
  } catch (error) {
    showNotification(error.message, "error");
  }
}

async function handleTransferSubmit(e) {
  e.preventDefault();
  const landId = document.getElementById("transferLandId").value;
  const newOwner = document.getElementById("newOwnerAddress").value;
  await performTransaction(
    () => contract.methods.initiateTransfer(landId, newOwner),
    "Transfer initiated successfully. Awaiting approvals."
  );
  e.target.reset();
  showSection('landsContainer');
}

async function handleResubmission(e) {
  e.preventDefault();
  const regId = document.getElementById('resubmitRegId').value;
  const newLocation = document.getElementById('newLandLocation').value;
  const newIpfsHash = document.getElementById('newLandIpfsHash').value;
  await performTransaction(
    () => contract.methods.resubmitRegistration(regId, newLocation, newIpfsHash),
    "Application resubmitted successfully!"
  );
  closeResubmitModal();
}

async function handleRejectionSubmit(e) {
  e.preventDefault();
  const registrationId = document.getElementById('rejectionRegId').value;
  const reason = document.getElementById('rejectionReason').value;
  await performTransaction(
    () => contract.methods.rejectRegistration(registrationId, reason),
    "Rejection successful."
  );
  closeRejectionModal();
}

async function performTransaction(transaction, successMessage) {
  showNotification("Processing transaction...", "info");
  try {
    await transaction().send({ from: currentAccount });
    showNotification(successMessage, "success");
    await loadData();
  } catch (err) {
    console.error("Transaction Error:", err);
    const reason = err.message.includes("reason") ? err.message.match(/reason":"(.*?)"/)[1] : (err.data ? err.data.message : err.message);
    showNotification(`Transaction failed: ${reason.replace('execution reverted: ', '')}`, "error");
  }
}

// ----------------------------------------------------------------------------------
// --- Display & Rendering Functions ---
// ----------------------------------------------------------------------------------

async function displayPendingVerifications() {
  const container = document.getElementById("userVerificationsContainer");
  container.innerHTML = '<div class="loading">Loading...</div>';
  const addresses = await contract.methods.getPendingVerificationAddresses().call();
  if (addresses.length === 0) {
    container.innerHTML = '<div class="no-data">No pending user verifications.</div>';
    return;
  }
  let html = '';
  for (const address of addresses) {
    const verification = await contract.methods.verifications(address).call();
    if (parseInt(verification.status) === 1) {
      html += renderUserVerificationRequest(address, verification);
    }
  }
  container.innerHTML = html || '<div class="no-data">No pending user verifications.</div>';
}

async function displayAllLands() {
  const container = document.getElementById("landsList");
  container.innerHTML = '<div class="loading">Loading land records...</div>';
  const count = await contract.methods.landCounter().call();
  if (count == 0) {
    container.innerHTML = '<div class="no-data">No land records found.</div>';
    return;
  }
  let html = '';
  for (let i = 1; i <= count; i++) {
    const land = await contract.methods.lands(i).call();
    if (land.owner !== "0x0000000000000000000000000000000000000000") {
      html += renderLandCard(land);
    }
  }
  container.innerHTML = html || '<div class="no-data">No land records found.</div>';
}

async function displayPendingTransfers() {
  const container = document.getElementById("approvalsContainer");
  container.innerHTML = '<div class="loading">Loading...</div>';
  const count = await contract.methods.transactionCounter().call();
  let html = '';
  let transferCount = 0;
  for (let i = 1; i <= count; i++) {
    const tx = await contract.methods.transactions(i).call();
    if (!tx.executed) {
      const approvals = await contract.methods.getTransactionApprovals(i).call();
      html += renderTransferRequest(tx, approvals, i);
      transferCount++;
    }
  }
  container.innerHTML = transferCount > 0 ? html : '<div class="no-data">No pending transfer requests.</div>';
}

async function displayRegistrationRequests() {
  const pendingContainer = document.getElementById("registrationRequestsContainer");
  const rejectedContainer = document.getElementById("rejectedRequestsContainer");
  pendingContainer.innerHTML = '<div class="loading">Loading requests...</div>';
  rejectedContainer.innerHTML = '<div class="loading">Loading requests...</div>';

  const count = await contract.methods.registrationCounter().call();
  let pendingHtml = '', rejectedHtml = '', pendingCount = 0, rejectedCount = 0;
  const gracePeriod = 3 * 24 * 60 * 60;

  for (let i = 1; i <= count; i++) {
    const reg = await contract.methods.registrations(i).call();
    if (reg.executed) continue;

    const approvals = await contract.methods.getRegistrationApprovals(i).call();
    if (reg.isRejected) {
      const deadline = parseInt(reg.rejectionTimestamp) + gracePeriod;
      if (Math.floor(Date.now() / 1000) < deadline) {
        pendingHtml += renderRegistrationRequest(reg, approvals, 'rejected', i);
        pendingCount++;
      } else {
        rejectedHtml += renderRegistrationRequest(reg, approvals, 'final-rejection', i);
        rejectedCount++;
      }
    } else {
      pendingHtml += renderRegistrationRequest(reg, approvals, 'pending', i);
      pendingCount++;
    }
  }
  pendingContainer.innerHTML = pendingCount > 0 ? pendingHtml : '<div class="no-data">No pending or resubmittable requests.</div>';
  rejectedContainer.innerHTML = rejectedCount > 0 ? rejectedHtml : '<div class="no-data">No finally rejected applications.</div>';
}

async function displayHistory() {
  const regContainer = document.getElementById("registrationHistoryContainer");
  const transContainer = document.getElementById("transferHistoryContainer");
  regContainer.innerHTML = '<div class="loading">Loading...</div>';
  transContainer.innerHTML = '<div class="loading">Loading...</div>';

  try {
    const regEvents = await contract.getPastEvents('LandRegistered', { fromBlock: 0, toBlock: 'latest' });
    regContainer.innerHTML = regEvents.length > 0 ? regEvents.reverse().map(e => renderHistoryCard('Land Registered', `ID: ${e.returnValues.id}`, `Owner: ${shortAddress(e.returnValues.owner)}`, e.returnValues.timestamp)).join('') : '<div class="no-data">No registration history.</div>';
    const transEvents = await contract.getPastEvents('LandTransferred', { fromBlock: 0, toBlock: 'latest' });
    transContainer.innerHTML = transEvents.length > 0 ? transEvents.reverse().map(e => renderHistoryCard('Land Transferred', `Land ID: ${e.returnValues.landId}`, `From: ${shortAddress(e.returnValues.from)}<br>To: ${shortAddress(e.returnValues.to)}`, null, `Tx ID: ${e.returnValues.transactionId}`)).join('') : '<div class="no-data">No transfer history.</div>';
  } catch (error) {
    console.error("Error fetching history:", error);
    regContainer.innerHTML = '<div class="error">Could not load registration history.</div>';
    transContainer.innerHTML = '<div class="error">Could not load transfer history.</div>';
  }
}

// ----------------------------------------------------------------------------------
// --- HTML Card Rendering ---
// ----------------------------------------------------------------------------------

function renderUserVerificationRequest(address, verification) {
  return `
    <div class="request-card">
        <h3>Verification for: ${shortAddress(address)}</h3>
        <p><strong>Document:</strong> <a href="https://ipfs.io/ipfs/${verification.documentIpfsHash}" target="_blank" rel="noopener noreferrer">View on IPFS</a></p>
        <div class="transaction-actions">
            <button class="action-btn approve-btn" onclick="approveUser('${address}')"><i class="fas fa-check"></i> Approve</button>
            <button class="action-btn reject-btn" onclick="rejectUser('${address}')"><i class="fas fa-times"></i> Reject</button>
        </div>
    </div>`;
}

function renderLandCard(land) {
  const isOwner = land.owner.toLowerCase() === currentAccount.toLowerCase();
  return `
    <div class="land-card">
        <h3>Land ID: ${land.id}</h3>
        <p><strong>Owner:</strong> ${isOwner ? 'You' : shortAddress(land.owner)}</p>
        <p><strong>Location:</strong> ${land.location}</p>
        <p><strong>Deeds Doc:</strong> <a href="https://ipfs.io/ipfs/${land.ipfsHash}" target="_blank">View on IPFS</a></p>
        <p><strong>Registered:</strong> ${new Date(land.timestamp * 1000).toLocaleString()}</p>
        ${isOwner ? `<button class="action-btn" onclick="initiateTransferForm(${land.id})">Transfer</button>` : ''}
    </div>`;
}

function renderTransferRequest(tx, approvals, id) {
  const pending = getPendingApprovals(approvals);
  return `
    <div class="transaction-card">
        <h3>Transfer Request #${id}</h3>
        <p><strong>Land ID:</strong> ${tx.landId}</p>
        <p><strong>From:</strong> ${shortAddress(tx.initiator)}</p>
        <p><strong>To:</strong> ${shortAddress(tx.newOwner)}</p>
        <div class="pending-approvals">
            <h5>Awaiting Approval From:</h5>
            <ul>${pending.map(name => `<li><i class="fas fa-gavel"></i> ${name}</li>`).join('')}</ul>
        </div>
        ${isAuthority() ? `<div class="transaction-actions">
            <button class="action-btn approve-btn" onclick="approveTransfer(${id})"><i class="fas fa-check"></i> Approve</button>
            <button class="action-btn reject-btn" onclick="rejectTransfer(${id})"><i class="fas fa-times"></i> Reject</button>
        </div>` : ''}
    </div>`;
}

function renderRegistrationRequest(reg, approvals, state, id) {
  let html = `<div class="request-card ${state === 'rejected' ? 'rejected' : ''}">
        <h3>Registration Request #${id}</h3>
        <p><strong>Applicant:</strong> ${shortAddress(reg.prospectiveOwner)}</p>
        <p><strong>Location:</strong> ${reg.location}</p>
        <p><strong>Deeds Doc:</strong> <a href="https://ipfs.io/ipfs/${reg.ipfsHash}" target="_blank">View on IPFS</a></p>`;

  if (state === 'pending') {
    const pending = getPendingApprovals(approvals);
    html += `<div class="pending-approvals"><h5>Awaiting Approval From:</h5><ul>${pending.map(name => `<li><i class="fas fa-gavel"></i> ${name}</li>`).join('')}</ul></div>`;
  } else if (state === 'rejected') {
    const gracePeriod = 3 * 24 * 60 * 60;
    const deadline = new Date((parseInt(reg.rejectionTimestamp) + gracePeriod) * 1000);
    html += `<div class="rejection-info">
                    <h5><i class="fas fa-exclamation-triangle"></i> Application Rejected</h5>
                    <p><strong>Reason:</strong> ${reg.rejectionReason}</p>
                    <p>This can be resubmitted before:<br><strong>${deadline.toLocaleString()}</strong></p>
                 </div>`;
  } else if (state === 'final-rejection') {
    html += `<div class="rejection-info"><h5>Finally Rejected</h5><p>Grace period expired.</p></div>`;
  }

  if (state === 'pending' && isAuthority()) {
    html += `<div class="transaction-actions">
            <button class="action-btn approve-btn" onclick="approveRegistration(${id})"><i class="fas fa-check"></i> Approve</button>
            <button class="action-btn reject-btn" onclick="openRejectionModal(${id})"><i class="fas fa-times"></i> Reject</button>
        </div>`;
  }

  if (state === 'rejected' && reg.prospectiveOwner.toLowerCase() === currentAccount.toLowerCase()) {
    html += `<div class="transaction-actions">
            <button class="action-btn" onclick="openResubmitModal(${id}, '${reg.location}', '${reg.ipfsHash}')"><i class="fas fa-edit"></i> Resubmit</button>
        </div>`;
  }
  html += `</div>`;
  return html;
}

function renderHistoryCard(title, line1, line2, timestamp, footer) {
  return `
    <div class="history-card">
        <p><strong>${title}</strong></p>
        <p>${line1}</p><p>${line2}</p>
        ${timestamp ? `<p class="timestamp">${new Date(timestamp * 1000).toLocaleString()}</p>` : ''}
        ${footer ? `<p class="timestamp">${footer}</p>` : ''}
    </div>`;
}

// ----------------------------------------------------------------------------------
// --- Action Functions (called from HTML) ---
// ----------------------------------------------------------------------------------

function approveUser(address) { performTransaction(() => contract.methods.approveVerification(address), "User approved successfully."); }
function rejectUser(address) { performTransaction(() => contract.methods.rejectVerification(address), "User rejected successfully."); }
function approveRegistration(id) { performTransaction(() => contract.methods.approveRegistration(id), "Approval successful."); }
function rejectTransfer(id) { performTransaction(() => contract.methods.rejectTransfer(id), "Rejection successful."); }
function approveTransfer(id) { performTransaction(() => contract.methods.approveTransfer(id), "Approval successful."); }
function initiateTransferForm(landId) {
  document.getElementById('transferLandId').value = landId;
  showSection('transferFormContainer');
}

// ----------------------------------------------------------------------------------
// --- Utility & Modal Functions ---
// ----------------------------------------------------------------------------------

function openResubmitModal(regId, location, ipfsHash) {
  document.getElementById('resubmitRegId').value = regId;
  document.getElementById('newLandLocation').value = location;
  document.getElementById('newLandIpfsHash').value = ipfsHash;
  document.getElementById('resubmitModal').style.display = 'flex';
}
function closeResubmitModal() { document.getElementById('resubmitModal').style.display = 'none'; }

function openRejectionModal(registrationId) {
  document.getElementById('rejectionRegId').value = registrationId;
  document.getElementById('rejectionModal').style.display = 'flex';
}
function closeRejectionModal() {
  document.getElementById('rejectionForm').reset();
  document.getElementById('rejectionModal').style.display = 'none';
}

function shortAddress(addr) { return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : ''; }
function isAuthority() { return Object.values(AUTHORITIES).some(addr => addr.toLowerCase() === currentAccount.toLowerCase()); }

function getPendingApprovals(approvals) {
  const authorities = ["Kitwe City Council", "Commissioner of Land", "Lands and Deeds Registry", "Treasury"];
  const pending = [];
  for (let i = 0; i < authorities.length; i++) {
    if (parseInt(approvals[i]) === 0) {
      pending.push(authorities[i]);
    }
  }
  return pending;
}

function showNotification(message, type = 'info', duration = 5000) {
  const el = document.getElementById("notification");
  el.textContent = message;
  el.className = `notification show ${type}`;
  setTimeout(() => el.classList.remove('show'), duration);
}

// ----------------------------------------------------------------------------------
// --- Make functions globally available for onclick handlers ---
// ----------------------------------------------------------------------------------
window.approveUser = approveUser;
window.rejectUser = rejectUser;
window.approveRegistration = approveRegistration;
window.rejectTransfer = rejectTransfer;
window.approveTransfer = approveTransfer;
window.openResubmitModal = openResubmitModal;
window.closeResubmitModal = closeResubmitModal;
window.openRejectionModal = openRejectionModal;
window.closeRejectionModal = closeRejectionModal;
window.initiateTransferForm = initiateTransferForm;

// --- Start the App ---
window.addEventListener('DOMContentLoaded', init);
