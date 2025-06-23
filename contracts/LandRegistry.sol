// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint id;
        address owner;
        string location;
        string ipfsHash;
        uint area; // New field for area size
        uint timestamp;
    }

    mapping(uint => Land) public lands;
    uint public landCounter;

    event LandRegistered(uint id, address owner, string location, string ipfsHash, uint area, uint timestamp);
    event LandTransferred(uint id, address from, address to);

    function registerLand(string memory _location, string memory _ipfsHash, uint _area) public {
        landCounter++;
        lands[landCounter] = Land(
            landCounter,
            msg.sender,
            _location,
            _ipfsHash,
            _area,
            block.timestamp
        );
        emit LandRegistered(landCounter, msg.sender, _location, _ipfsHash, _area, block.timestamp);
    }

    function transferLand(uint _id, address _newOwner) public {
        require(lands[_id].owner == msg.sender, "You are not the owner");
        lands[_id].owner = _newOwner;
        emit LandTransferred(_id, msg.sender, _newOwner);
    }

    function getLand(uint _id) public view returns (Land memory) {
        return lands[_id];
    }
}