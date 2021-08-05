async function main() {
    
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    
    const box = await upgrades.upgradeProxy("0x6673e9Ea748E472DBA60D4e75B4CbC7982B6d3C1", BoxV2)
    console.log("Your Upgrade Proxy is Done!", box.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })