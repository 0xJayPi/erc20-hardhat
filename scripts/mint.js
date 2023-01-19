const { ethers } = require("hardhat")
const AMOUNT_TO_MINT = "10"

async function main() {
    const accounts = await getNamedAccounts()
    deployer = accounts.deployer
    const ourToken = await ethers.getContract("OurToken", deployer)

    console.log("Minting tokens")
    const tokens = await ethers.utils.parseEther(AMOUNT_TO_MINT)
    const tx = await ourToken.mint(tokens)
    await tx.wait(1)

    const finalSupply = await ourToken.totalSupply()
    const finalBalance = await ourToken.balanceOf(deployer)
    console.log(
        `*UPDATED* Total Supply: ${finalSupply} wei | Deployer Balance: ${finalBalance} wei`
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        console.exit(1)
    })
