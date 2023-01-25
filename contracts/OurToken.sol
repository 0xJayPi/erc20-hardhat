// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @author JP Campaya
/// @title Another ERC20 token
contract OurToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("JP Token", "JPC") {
        _mint(msg.sender, initialSupply);
    }

    /// Mint tokens
    /// @param amount the number of tokens to mint
    /// @dev calls the ERC20's _mint function, which also transfer the minted tokens to the msg.sender
    function mint(uint256 amount) external onlyOwner {
        _mint(msg.sender, amount);
    }
}
