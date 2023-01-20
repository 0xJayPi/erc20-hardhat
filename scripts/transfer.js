const { ethers } = require("hardhat")
const AMOUNT_TO_TRANSFER = "10"
const addressTo = "0x9606e11178a83C364108e99fFFD2f7F75C99d801"

async function main() {
    const accounts = await getNamedAccounts()
    deployer = accounts.deployer
    const ourToken = await ethers.getContract("OurToken", deployer)
    const tokens = await ethers.utils.parseEther(AMOUNT_TO_TRANSFER)

    const tx = await ourToken.transfer(addressTo, tokens)
    await tx.wait(1)

    const balanceTo = ethers.utils.formatUnits(await ourToken.balanceOf(addressTo), "ether")
    console.log(`Balance of ${addressTo} is now ${balanceTo} JPC's`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        console.exit(1)
    })
