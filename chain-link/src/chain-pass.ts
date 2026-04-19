import {
  CashbackPaid as CashbackPaidEvent,
  CoordinatorSet as CoordinatorSetEvent,
  EventCreated as EventCreatedEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ResaleCancelled as ResaleCancelledEvent,
  ResaleCompleted as ResaleCompletedEvent,
  ResaleListed as ResaleListedEvent,
  ReviewSubmitted as ReviewSubmittedEvent,
  StakeSettled as StakeSettledEvent,
  TicketPurchased as TicketPurchasedEvent,
  Transfer as TransferEvent,
  VRFWinnerRequested as VRFWinnerRequestedEvent
} from "../generated/ChainPass/ChainPass"
import {
  Event,
  CashbackPaid,
  CoordinatorSet,
  OwnershipTransferRequested,
  OwnershipTransferred,
  ResaleCancelled,
  ResaleCompleted,
  ResaleListed,
  ReviewSubmitted,
  StakeSettled,
  TicketPurchased,
  Transfer,
  VRFWinnerRequested
} from "../generated/schema"

export function handleEventCreated(event: EventCreatedEvent): void {
  // Use eventId as the unique string ID for the Event entity
  let entity = new Event(event.params.eventId.toString())

  // Map contract params → schema fields
  // Note: The contract emits venue (not description). We store venue in `location`.
  // `description` is not part of the on-chain event; default to empty string.
  entity.name        = event.params.name
  entity.description = ""                        // not emitted by contract
  entity.startTime   = event.params.saleStartTime // nearest equivalent on-chain
  entity.endTime     = event.params.saleEndTime
  entity.location    = event.params.venue
  entity.creator     = event.params.organiser

  entity.save()
}

export function handleCashbackPaid(event: CashbackPaidEvent): void {
  let entity = new CashbackPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.vrfRequestId = event.params.vrfRequestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCoordinatorSet(event: CoordinatorSetEvent): void {
  let entity = new CoordinatorSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vrfCoordinator = event.params.vrfCoordinator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResaleCancelled(event: ResaleCancelledEvent): void {
  let entity = new ResaleCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResaleCompleted(event: ResaleCompletedEvent): void {
  let entity = new ResaleCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.buyer = event.params.buyer
  entity.seller = event.params.seller
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResaleListed(event: ResaleListedEvent): void {
  let entity = new ResaleListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.resalePrice = event.params.resalePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReviewSubmitted(event: ReviewSubmittedEvent): void {
  let entity = new ReviewSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.reviewer = event.params.reviewer
  entity.contentHash = event.params.contentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeSettled(event: StakeSettledEvent): void {
  let entity = new StakeSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.organiser = event.params.organiser
  entity.organiserAmount = event.params.organiserAmount
  entity.platformAmount = event.params.platformAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTicketPurchased(event: TicketPurchasedEvent): void {
  let entity = new TicketPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.tokenId = event.params.tokenId
  entity.buyer = event.params.buyer
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVRFWinnerRequested(event: VRFWinnerRequestedEvent): void {
  let entity = new VRFWinnerRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.eventId = event.params.eventId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
