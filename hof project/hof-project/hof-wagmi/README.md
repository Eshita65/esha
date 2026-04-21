# ChainPass Frontend (React + Wagmi)

Basic Sepolia frontend for your deployed ChainPass contract.

## Included

- Wallet connect and disconnect (MetaMask and injected wallets)
- Contract reads
  - getTotalEvents
  - getTotalTicketsMinted
  - getEvent
  - getWalletTickets
- Contract writes
  - createEvent
  - buyTicket
  - listForResale
  - buyResaleTicket
  - cancelResaleListing
  - submitReview
  - requestReviewDropWinner
- Transaction status tracking with wallet + chain confirmation feedback

## Run

```bash
npm install
npm run dev
```

## Build Check

```bash
npm run build
```

## Notes

- Use Sepolia ETH in MetaMask.
- If MetaMask is on a different chain, the UI warns you to switch.
- For buyTicket and buyResaleTicket, send enough ETH to satisfy contract requirements.
