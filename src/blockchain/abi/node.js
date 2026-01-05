export const NODE_ABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_referralGroupSales",
                "type": "tuple[]",
                "internalType": "struct BaseStorage.ReferralGroupSale[]",
                "components": [
                    {
                        "name": "totalNodesPurchasedAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "rewardAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "_nodeTiers",
                "type": "tuple[]",
                "internalType": "struct BaseStorage.NodeTier[]",
                "components": [
                    {
                        "name": "title",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropTokens",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "packageARX",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "slot",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalAirdropARXfree",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalReleasedTokenARX",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "ARXTokenAddress",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ReferralCommisionLevel1",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ReferralCommisionLevel2",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "USDTokenAddress",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "USDTokenDecimals",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "addNodeTier",
        "inputs": [
            {
                "name": "_title",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_airdropTokens",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_packageARX",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_slotReserve",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addReferralGroupSale",
        "inputs": [
            {
                "name": "_totalNodesPurchasedAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_rewardAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimGroupSaleBonus",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimReferralRewards",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimRewardsToken",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getARXTokenAddress",
        "inputs": [],
        "outputs": [
            {
                "name": "tokenAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "decimals",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getAllNodeTiers",
        "inputs": [],
        "outputs": [
            {
                "name": "tiers",
                "type": "tuple[]",
                "internalType": "struct BaseStorage.NodeTier[]",
                "components": [
                    {
                        "name": "title",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropTokens",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "packageARX",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "slot",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalAirdropARXfree",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalReleasedTokenARX",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getAllUsers",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getNodeTier",
        "inputs": [
            {
                "name": "_tierIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "tier",
                "type": "tuple",
                "internalType": "struct BaseStorage.NodeTier",
                "components": [
                    {
                        "name": "title",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropTokens",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "packageARX",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "slot",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalAirdropARXfree",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalReleasedTokenARX",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getNodeTiersCount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getReferralGroupSalesCount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTotalUsers",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUSDTAddress",
        "inputs": [],
        "outputs": [
            {
                "name": "tokenAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "decimals",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserAllNodeTiersOwned",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserHistory",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "nodePurchase",
                "type": "tuple[]",
                "internalType": "struct BaseStorage.History[]",
                "components": [
                    {
                        "name": "timestamps",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "description",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "tokenAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "status",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            },
            {
                "name": "referralPurchase",
                "type": "tuple[]",
                "internalType": "struct BaseStorage.History[]",
                "components": [
                    {
                        "name": "timestamps",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "description",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "tokenAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "status",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserInfo",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "user",
                "type": "tuple",
                "internalType": "struct BaseStorage.User",
                "components": [
                    {
                        "name": "userAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "referrerLevel1",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "referrerLevel2",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "totalNodesOwned",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "totalAmountSpent",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropReward",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.RewardTokens",
                        "components": [
                            {
                                "name": "claimable",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "referralReward",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.RewardTokens",
                        "components": [
                            {
                                "name": "claimable",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "packageARXTokens",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.RewardTokens",
                        "components": [
                            {
                                "name": "claimable",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "referralGroupSalesReward",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.RewardTokens",
                        "components": [
                            {
                                "name": "claimable",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "reservedAirdropTokensForStaking",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "reservedReferralTokensForStaking",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "totalGroupSell",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "totalNumberOfReferrals",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserNodeTierOwned",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_tierIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserReferrals",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "referralsListLevel1",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "referralsListLevel2",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "hasClaimedGroupSaleReward",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_groupIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isReferralGroupSaleRewardClaimed",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "nodePurchaseHistory",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "timestamps",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "description",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "tokenAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "status",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "nodeSellEndedTimestamp",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "nodeTiers",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "title",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "airdropTokens",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "packageARX",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "slot",
                "type": "tuple",
                "internalType": "struct BaseStorage.AllocationForTier",
                "components": [
                    {
                        "name": "reserve",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "claimed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "totalAirdropARXfree",
                "type": "tuple",
                "internalType": "struct BaseStorage.AllocationForTier",
                "components": [
                    {
                        "name": "reserve",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "claimed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "totalReleasedTokenARX",
                "type": "tuple",
                "internalType": "struct BaseStorage.AllocationForTier",
                "components": [
                    {
                        "name": "reserve",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "claimed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "nodeTiersOwned",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "pause",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "paused",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "purchaseNode",
        "inputs": [
            {
                "name": "_tierIndex",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_quantity",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_referrer",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "referralGroupSales",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "totalNodesPurchasedAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "rewardAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "referralPurchaseHistory",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "timestamps",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "description",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "tokenAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "status",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "removeNodeTier",
        "inputs": [
            {
                "name": "_tierIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "removeReferralGroupSale",
        "inputs": [
            {
                "name": "_index",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setARXTokenAddress",
        "inputs": [
            {
                "name": "_arxTokenAddress",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setNodeSellEndedTimestamp",
        "inputs": [
            {
                "name": "_timestamp",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setReferralCommissionLevel1",
        "inputs": [
            {
                "name": "_newLevel",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setReferralCommissionLevel2",
        "inputs": [
            {
                "name": "_newLevel",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setStakingPercentage",
        "inputs": [
            {
                "name": "_newPercentage",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setTreasuryAddress",
        "inputs": [
            {
                "name": "_treasuryAddress",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setUSDToken",
        "inputs": [
            {
                "name": "_usdTokenAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_usdTokenDecimals",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "stakingPercentage",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalUSDTRaisedFromNodeSales",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalUsersClaimableUSDT",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "treasuryAddress",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "unpause",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateNodeTier",
        "inputs": [
            {
                "name": "_tierIndex",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_title",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_airdropTokens",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_packageARX",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_slotReserve",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateReferralGroupSale",
        "inputs": [
            {
                "name": "_index",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_totalNodesPurchasedAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_rewardAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "userList",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "userReferralsLevel1",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "userReferralsLevel2",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "users",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "userAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "referrerLevel1",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "referrerLevel2",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "totalNodesOwned",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalAmountSpent",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "airdropReward",
                "type": "tuple",
                "internalType": "struct BaseStorage.RewardTokens",
                "components": [
                    {
                        "name": "claimable",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "claimed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "referralReward",
                "type": "tuple",
                "internalType": "struct BaseStorage.RewardTokens",
                "components": [
                    {
                        "name": "claimable",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "claimed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "packageARXTokens",
                "type": "tuple",
                "internalType": "struct BaseStorage.RewardTokens",
                "components": [
                    {
                        "name": "claimable",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "claimed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "referralGroupSalesReward",
                "type": "tuple",
                "internalType": "struct BaseStorage.RewardTokens",
                "components": [
                    {
                        "name": "claimable",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "claimed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "reservedAirdropTokensForStaking",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "reservedReferralTokensForStaking",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalGroupSell",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalNumberOfReferrals",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "version",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "withDrawTokenByOwner",
        "inputs": [
            {
                "name": "_tokenContractAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "ARXTokenAddressAdded",
        "inputs": [
            {
                "name": "previousAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NodePurchased",
        "inputs": [
            {
                "name": "buyer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tierIndex",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "quantity",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "totalPrice",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NodeSellEndedTimestampSet",
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NodeTierAdded",
        "inputs": [
            {
                "name": "tierIndex",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "newTier",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.NodeTier",
                "components": [
                    {
                        "name": "title",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropTokens",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "packageARX",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "slot",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalAirdropARXfree",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalReleasedTokenARX",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NodeTierRemoved",
        "inputs": [
            {
                "name": "tierIndex",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "removedTier",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.NodeTier",
                "components": [
                    {
                        "name": "title",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropTokens",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "packageARX",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "slot",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalAirdropARXfree",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalReleasedTokenARX",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NodeTierUpdated",
        "inputs": [
            {
                "name": "tierIndex",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "oldTier",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.NodeTier",
                "components": [
                    {
                        "name": "title",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropTokens",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "packageARX",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "slot",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalAirdropARXfree",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalReleasedTokenARX",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "newTier",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.NodeTier",
                "components": [
                    {
                        "name": "title",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "airdropTokens",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "packageARX",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "slot",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalAirdropARXfree",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "totalReleasedTokenARX",
                        "type": "tuple",
                        "internalType": "struct BaseStorage.AllocationForTier",
                        "components": [
                            {
                                "name": "reserve",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "claimed",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Paused",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReferralCommissionLevel1Updated",
        "inputs": [
            {
                "name": "oldLevel",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "newLevel",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReferralCommissionLevel2Updated",
        "inputs": [
            {
                "name": "oldLevel",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "newLevel",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReferralGroupSaleAdded",
        "inputs": [
            {
                "name": "index",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "newGroup",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.ReferralGroupSale",
                "components": [
                    {
                        "name": "totalNodesPurchasedAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "rewardAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReferralGroupSaleRemoved",
        "inputs": [
            {
                "name": "index",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "removedGroup",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.ReferralGroupSale",
                "components": [
                    {
                        "name": "totalNodesPurchasedAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "rewardAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReferralGroupSaleUpdated",
        "inputs": [
            {
                "name": "index",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "oldGroup",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.ReferralGroupSale",
                "components": [
                    {
                        "name": "totalNodesPurchasedAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "rewardAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "newGroup",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct BaseStorage.ReferralGroupSale",
                "components": [
                    {
                        "name": "totalNodesPurchasedAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "rewardAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReferralRewardDistributed",
        "inputs": [
            {
                "name": "referrer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "buyer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "level",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "rewardAmount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "reservedForStaking",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RewardsClaimed",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "rewardType",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            },
            {
                "name": "claimedAmount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "reservedForStaking",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "StakingPercentageUpdated",
        "inputs": [
            {
                "name": "oldPercentage",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "newPercentage",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TokenWithdrawnByOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenContractAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TreasuryAddressSet",
        "inputs": [
            {
                "name": "previousAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "USDTokenAddressAdded",
        "inputs": [
            {
                "name": "previousAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newAddress",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Unpaused",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "UserRegistered",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "referrerLevel1",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "referrerLevel2",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ARXTokenAddressAlreadySet",
        "inputs": [
            {
                "name": "currentAddress",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "EnforcedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExpectedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidContractAddress",
        "inputs": [
            {
                "name": "contractAddress",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "NoClaimableAmountAvailable",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "rewardType",
                "type": "string",
                "internalType": "string"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotEnoughSlotsAvailable",
        "inputs": [
            {
                "name": "slotsRemaining",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "quantityRequested",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "QuantityMustBeGreaterThanZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ReentrancyGuardReentrantCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "SellingPeriodEnded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UpdateNodeAirdropTRXFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "invalidReferralGroupIndex",
        "inputs": [
            {
                "name": "groupIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "error",
        "name": "invalidTierIndex",
        "inputs": [
            {
                "name": "tierIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    }
]