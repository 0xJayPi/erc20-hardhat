const { assert, expect } = require("chai")
const { getNamedAccounts, deployments, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("OurToken Unit test", () => {
          let ourToken, deployer, user1

          beforeEach(async () => {
              await deployments.fixture(["all"])
              const accounts = await getNamedAccounts()
              deployer = accounts.deployer
              user1 = accounts.user1
              ourToken = await ethers.getContract("OurToken", deployer)
              ourTokenUser1 = await ethers.getContract("OurToken", user1)
          })

          describe("constructor", () => {
              it("Initialized OurToken correctly", async () => {
                  const name = await ourToken.name()
                  const symbol = await ourToken.symbol()
                  const totalSupply = await ourToken.totalSupply()
                  assert.equal(name, "JP Token")
                  assert.equal(symbol, "JPC")
                  assert.equal(totalSupply.toString(), ethers.utils.parseEther("10000"))
              })
          })

          describe("transfers", () => {
              it("Should be able to transfer balances", async () => {
                  const tokensToSend = ethers.utils.parseEther("10")
                  await ourToken.transfer(user1, tokensToSend)
                  const user1Balance = await ourToken.balanceOf(user1)
                  assert.equal(user1Balance.toString(), tokensToSend)
              })
          })

          describe("mint", () => {
              it("Should be able to mint more tokens", async () => {
                  const supply = await ourToken.totalSupply()
                  const tokensToMint = ethers.utils.parseEther("10")
                  await ourToken.mint(tokensToMint)
                  const newSupply = await ourToken.totalSupply()
                  assert.equal(tokensToMint.toString(), newSupply.sub(supply).toString())
              })

              it("Only Owner can mint", async () => {
                  const tokensToMint = ethers.utils.parseEther("10")
                  await expect(ourTokenUser1.mint(tokensToMint)).to.be.reverted
              })
          })
      })
