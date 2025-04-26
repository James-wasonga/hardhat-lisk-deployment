const hre = require("hardhat");

async function main() {
  const ContractName = await hre.ethers.getContractFactory("Lock");

  const contract = await ContractName.deploy(); // No parameters needed

  await contract.waitForDeployment(); // Correct way in latest Hardhat versions

  console.log(`✅ Contract deployed successfully at: ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
