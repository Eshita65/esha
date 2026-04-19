import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  CashbackPaid,
  CoordinatorSet,
  EventCreated,
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
} from "../generated/ChainPass/ChainPass"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createCashbackPaidEvent(
  eventId: BigInt,
  winner: Address,
  amount: BigInt,
  vrfRequestId: BigInt
): CashbackPaid {
  let cashbackPaidEvent = changetype<CashbackPaid>(newMockEvent())

  cashbackPaidEvent.parameters = new Array()

  cashbackPaidEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  cashbackPaidEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  cashbackPaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  cashbackPaidEvent.parameters.push(
    new ethereum.EventParam(
      "vrfRequestId",
      ethereum.Value.fromUnsignedBigInt(vrfRequestId)
    )
  )

  return cashbackPaidEvent
}

export function createCoordinatorSetEvent(
  vrfCoordinator: Address
): CoordinatorSet {
  let coordinatorSetEvent = changetype<CoordinatorSet>(newMockEvent())

  coordinatorSetEvent.parameters = new Array()

  coordinatorSetEvent.parameters.push(
    new ethereum.EventParam(
      "vrfCoordinator",
      ethereum.Value.fromAddress(vrfCoordinator)
    )
  )

  return coordinatorSetEvent
}

export function createEventCreatedEvent(
  eventId: BigInt,
  organiser: Address,
  name: string,
  venue: string,
  ticketPrice: BigInt,
  maxSupply: BigInt,
  saleStartTime: BigInt,
  saleEndTime: BigInt
): EventCreated {
  let eventCreatedEvent = changetype<EventCreated>(newMockEvent())

  eventCreatedEvent.parameters = new Array()

  eventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam("organiser", ethereum.Value.fromAddress(organiser))
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam("venue", ethereum.Value.fromString(venue))
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ticketPrice",
      ethereum.Value.fromUnsignedBigInt(ticketPrice)
    )
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxSupply",
      ethereum.Value.fromUnsignedBigInt(maxSupply)
    )
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "saleStartTime",
      ethereum.Value.fromUnsignedBigInt(saleStartTime)
    )
  )
  eventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "saleEndTime",
      ethereum.Value.fromUnsignedBigInt(saleEndTime)
    )
  )

  return eventCreatedEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent =
    changetype<OwnershipTransferRequested>(newMockEvent())

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createResaleCancelledEvent(
  tokenId: BigInt,
  seller: Address
): ResaleCancelled {
  let resaleCancelledEvent = changetype<ResaleCancelled>(newMockEvent())

  resaleCancelledEvent.parameters = new Array()

  resaleCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  resaleCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return resaleCancelledEvent
}

export function createResaleCompletedEvent(
  tokenId: BigInt,
  buyer: Address,
  seller: Address,
  price: BigInt
): ResaleCompleted {
  let resaleCompletedEvent = changetype<ResaleCompleted>(newMockEvent())

  resaleCompletedEvent.parameters = new Array()

  resaleCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  resaleCompletedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  resaleCompletedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  resaleCompletedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return resaleCompletedEvent
}

export function createResaleListedEvent(
  tokenId: BigInt,
  seller: Address,
  resalePrice: BigInt
): ResaleListed {
  let resaleListedEvent = changetype<ResaleListed>(newMockEvent())

  resaleListedEvent.parameters = new Array()

  resaleListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  resaleListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  resaleListedEvent.parameters.push(
    new ethereum.EventParam(
      "resalePrice",
      ethereum.Value.fromUnsignedBigInt(resalePrice)
    )
  )

  return resaleListedEvent
}

export function createReviewSubmittedEvent(
  eventId: BigInt,
  reviewer: Address,
  contentHash: string
): ReviewSubmitted {
  let reviewSubmittedEvent = changetype<ReviewSubmitted>(newMockEvent())

  reviewSubmittedEvent.parameters = new Array()

  reviewSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  reviewSubmittedEvent.parameters.push(
    new ethereum.EventParam("reviewer", ethereum.Value.fromAddress(reviewer))
  )
  reviewSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "contentHash",
      ethereum.Value.fromString(contentHash)
    )
  )

  return reviewSubmittedEvent
}

export function createStakeSettledEvent(
  eventId: BigInt,
  organiser: Address,
  organiserAmount: BigInt,
  platformAmount: BigInt
): StakeSettled {
  let stakeSettledEvent = changetype<StakeSettled>(newMockEvent())

  stakeSettledEvent.parameters = new Array()

  stakeSettledEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  stakeSettledEvent.parameters.push(
    new ethereum.EventParam("organiser", ethereum.Value.fromAddress(organiser))
  )
  stakeSettledEvent.parameters.push(
    new ethereum.EventParam(
      "organiserAmount",
      ethereum.Value.fromUnsignedBigInt(organiserAmount)
    )
  )
  stakeSettledEvent.parameters.push(
    new ethereum.EventParam(
      "platformAmount",
      ethereum.Value.fromUnsignedBigInt(platformAmount)
    )
  )

  return stakeSettledEvent
}

export function createTicketPurchasedEvent(
  eventId: BigInt,
  tokenId: BigInt,
  buyer: Address,
  price: BigInt
): TicketPurchased {
  let ticketPurchasedEvent = changetype<TicketPurchased>(newMockEvent())

  ticketPurchasedEvent.parameters = new Array()

  ticketPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )
  ticketPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  ticketPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  ticketPurchasedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return ticketPurchasedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createVRFWinnerRequestedEvent(
  requestId: BigInt,
  eventId: BigInt
): VRFWinnerRequested {
  let vrfWinnerRequestedEvent = changetype<VRFWinnerRequested>(newMockEvent())

  vrfWinnerRequestedEvent.parameters = new Array()

  vrfWinnerRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  vrfWinnerRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "eventId",
      ethereum.Value.fromUnsignedBigInt(eventId)
    )
  )

  return vrfWinnerRequestedEvent
}
