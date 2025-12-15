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
                "type": "tuple[4]",
                "internalType": "struct BaseStorage.ReferralGroupSale[4]",
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
                "type": "tuple[6]",
                "internalType": "struct BaseStorage.NodeTier[6]",
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
        "name": "REFERRAL_COMMISSION_LEVEL_1",
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
        "name": "REFERRAL_COMMISSION_LEVEL_2",
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
                "type": "tuple[6]",
                "internalType": "struct BaseStorage.NodeTier[6]",
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
                        "name": "nodeTiersOwned",
                        "type": "uint256[6]",
                        "internalType": "uint256[6]"
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
                    },
                    {
                        "name": "isReferralGroupSaleRewardClaimed",
                        "type": "bool[4]",
                        "internalType": "bool[4]"
                    }
                ]
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
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressInsufficientBalance",
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
        "name": "FailedInnerCall",
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
        "name": "invalidTierIndex",
        "inputs": [
            {
                "name": "tierIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    }
];