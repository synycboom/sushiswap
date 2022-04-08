module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("WETH9Mock", {
    from: deployer,
    log: true,
  })
}

module.exports.skip = ({ getChainId }) =>
  new Promise(async (resolve, reject) => {
    try {
      const chainId = await getChainId()
      resolve(chainId !== "31337" && chainId !== "868455272153094")
    } catch (error) {
      reject(error)
    }
  })

module.exports.tags = ["WETH9Mock"]
