let walletAddress = null;

function connectWallet() {
  // Temporary demo wallet address
  walletAddress = "TESTNET_WALLET_ADDRESS_123";

  document.getElementById("status").innerText =
    "Wallet connected: " + walletAddress;
}

function buyTicket() {
  if (!walletAddress) {
    alert("Please connect wallet first");
    return;
  }
  alert("Ticket purchase process will start here");
}

function verifyTicket() {
  if (!walletAddress) {
    alert("Please connect wallet first");
    return;
  }
  alert("Ticket verification will happen here");
}
