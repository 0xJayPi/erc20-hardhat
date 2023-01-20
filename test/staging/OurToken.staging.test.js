const { assert } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("OurToken Staging test", () => {
          let ourToken, deployer, user1

          beforeEach(async () => {
              const accounts = await getNamedAccounts()
              deployer = accounts.deployer
              user1 = "0x9606e11178a83C364108e99fFFD2f7F75C99d801"
              ourToken = await ethers.getContract("OurToken", deployer)
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
                  const user1InitialBalance = await ourToken.balanceOf(user1)
                  const tx = await ourToken.transfer(user1, tokensToSend)
                  await tx.wait(1)
                  const user1FinalBalance = await ourToken.balanceOf(user1)
                  assert.equal(
                      tokensToSend.toString(),
                      (user1FinalBalance - user1InitialBalance).toString()
                  )
              })
          })
      })
