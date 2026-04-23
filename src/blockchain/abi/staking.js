export const STAKING_ABI =  [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_usdtTokenAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_aurexTokenAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "PERCENTAGE_DENOMINATOR",
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
            "name": "STAKING_DURATION_COUNT",
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
            "name": "SWAP_FEE_BPS",
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
            "name": "_isSupportedStakingDuration",
            "inputs": [
                {
                    "name": "_duration",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.StakingDuration"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "claimCommunityReward",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "claimMatchingBonus",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "claimStakingRewards",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getAllExpiredStakes",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "expiredStakes",
                    "type": "tuple[]",
                    "internalType": "struct StakingStorage.StakeInfo[]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingStartedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingEndedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "durationEnum",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.StakingDuration"
                        },
                        {
                            "name": "totalClaimableDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "claimedDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "isActive",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isUnstaked",
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
            "name": "getAllRankConfigs",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct AurexStaking.AllRankConfigs",
                    "components": [
                        {
                            "name": "subCommunityThresholds",
                            "type": "uint256[10]",
                            "internalType": "uint256[10]"
                        },
                        {
                            "name": "personalThresholds",
                            "type": "uint256[10]",
                            "internalType": "uint256[10]"
                        },
                        {
                            "name": "rewardPcts",
                            "type": "uint256[10]",
                            "internalType": "uint256[10]"
                        },
                        {
                            "name": "incomeCaps",
                            "type": "uint256[10]",
                            "internalType": "uint256[10]"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getAllStakedOfUser",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "ownedStakes",
                    "type": "tuple[]",
                    "internalType": "struct StakingStorage.StakeInfo[]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingStartedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingEndedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "durationEnum",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.StakingDuration"
                        },
                        {
                            "name": "totalClaimableDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "claimedDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "isActive",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isUnstaked",
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
            "name": "getClaimableCommunityReward",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getClaimableMatchingBonus",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getClaimableRewards",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "totalClaimableRewardsInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getContractAddresses",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct AurexStaking.ContractAddresses",
                    "components": [
                        {
                            "name": "usdtToken",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "arxToken",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "feeWallet",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getMatchingBonusConfig",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[6]",
                    "internalType": "uint256[6]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getQuoteForSwapUSDTToARX",
            "inputs": [
                {
                    "name": "_amountInUSDT",
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
            "name": "getRankConfigByRank",
            "inputs": [
                {
                    "name": "_rank",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.Rank"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct StakingStorage.RankConfig",
                    "components": [
                        {
                            "name": "subCommunityThreshold",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "personalThreshold",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "rewardPct",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "incomeCap",
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
            "name": "getRewardClaimHistory",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_pageNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_itemCount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "history",
                    "type": "tuple[]",
                    "internalType": "struct StakingStorage.RewardClaimHistory[]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "rewardType",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.RewardClaimType"
                        },
                        {
                            "name": "claimedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "total",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRewardOverview",
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
                    "type": "tuple",
                    "internalType": "struct AurexStaking.RewardOverview",
                    "components": [
                        {
                            "name": "staking",
                            "type": "tuple",
                            "internalType": "struct AurexStaking.RewardSummary",
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
                                },
                                {
                                    "name": "total",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "matching",
                            "type": "tuple",
                            "internalType": "struct AurexStaking.RewardSummary",
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
                                },
                                {
                                    "name": "total",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "community",
                            "type": "tuple",
                            "internalType": "struct AurexStaking.RewardSummary",
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
                                },
                                {
                                    "name": "total",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "rank",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.Rank"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getStakeHistory",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_pageNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_itemCount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "history",
                    "type": "tuple[]",
                    "internalType": "struct StakingStorage.StakeInfoHistory[]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingStartedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "durationEnum",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.StakingDuration"
                        }
                    ]
                },
                {
                    "name": "total",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getStakingConfig",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct AurexStaking.StakingConfig",
                    "components": [
                        {
                            "name": "durationDays",
                            "type": "uint256[4]",
                            "internalType": "uint256[4]"
                        },
                        {
                            "name": "dailyRoiBps",
                            "type": "uint256[4]",
                            "internalType": "uint256[4]"
                        },
                        {
                            "name": "maximumReferralDepth",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "arxPriceInUSDT",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "swapStartTime",
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
            "name": "getSwapHistory",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_pageNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_itemCount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "history",
                    "type": "tuple[]",
                    "internalType": "struct StakingStorage.SwapInfoHistory[]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "swappedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "total",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUsdtAmountFromArx",
            "inputs": [
                {
                    "name": "_arxAmount",
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
            "name": "getUser",
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
                    "type": "tuple",
                    "internalType": "struct StakingStorage.UserInfo",
                    "components": [
                        {
                            "name": "userAddress",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "referredBy",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "referrerList",
                            "type": "address[]",
                            "internalType": "address[]"
                        },
                        {
                            "name": "directActiveReferralsCount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalStakedInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalStakedByDirectReferralsInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalStakedByDirectReferralsInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "communityPerformanceInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalStakedInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "matchingReward",
                            "type": "tuple",
                            "internalType": "struct StakingStorage.RewardInfo",
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
                                },
                                {
                                    "name": "totalEarned",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "rewardPercentage",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "dailyRewardAmount",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "stakingReward",
                            "type": "tuple",
                            "internalType": "struct StakingStorage.RewardInfo",
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
                                },
                                {
                                    "name": "totalEarned",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "rewardPercentage",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "dailyRewardAmount",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "communityReward",
                            "type": "tuple",
                            "internalType": "struct StakingStorage.RewardInfo",
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
                                },
                                {
                                    "name": "totalEarned",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "rewardPercentage",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "dailyRewardAmount",
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
            "name": "getUserActiveStakes",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "activeStakes",
                    "type": "tuple[]",
                    "internalType": "struct StakingStorage.StakeInfo[]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingStartedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingEndedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "durationEnum",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.StakingDuration"
                        },
                        {
                            "name": "totalClaimableDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "claimedDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "isActive",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isUnstaked",
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
            "name": "getUserActiveStakesCount",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "count",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUserCommunityRewardState",
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
                    "type": "tuple",
                    "internalType": "struct AurexStaking.CommunityRewardState",
                    "components": [
                        {
                            "name": "lastClaimedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "earned",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "capInARX",
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
            "name": "getUserRank",
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
                    "type": "uint8",
                    "internalType": "enum StakingStorage.Rank"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUserReferrerList",
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
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUserStakeAtDuration",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_duration",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.StakingDuration"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct StakingStorage.StakeInfo",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingStartedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingEndedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "durationEnum",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.StakingDuration"
                        },
                        {
                            "name": "totalClaimableDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "claimedDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "isActive",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isUnstaked",
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
            "name": "getUserStakes",
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
                    "type": "tuple[4]",
                    "internalType": "struct StakingStorage.StakeInfo[4]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingStartedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stakingEndedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "durationEnum",
                            "type": "uint8",
                            "internalType": "enum StakingStorage.StakingDuration"
                        },
                        {
                            "name": "totalClaimableDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "claimedDays",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "isActive",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isUnstaked",
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
            "name": "getUserSwapHistory",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_pageNumber",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_itemCount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "history",
                    "type": "tuple[]",
                    "internalType": "struct StakingStorage.SwapInfoHistory[]",
                    "components": [
                        {
                            "name": "amountInARX",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInUSD",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "swappedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "total",
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
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "s_USDTokenAddress",
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
            "name": "s_aurexTokenAddress",
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
            "name": "s_aurexTokenPriceInUSDT",
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
            "name": "s_feeWalletAddress",
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
            "name": "s_matchingBonusBps",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_maximumReferralDepth",
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
            "name": "s_rankIncomeCap",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_rankPersonalThreshold",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_rankRewardPct",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_rankSubCommunityThreshold",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_stakingDurationDailyRoi",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_stakingDurationDays",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_swapStartTime",
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
            "name": "s_userRewardClaimHistory",
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
                    "name": "amountInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "rewardType",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.RewardClaimType"
                },
                {
                    "name": "claimedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_userStakeHistory",
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
                    "name": "amountInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "amountInUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "stakingStartedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "durationEnum",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.StakingDuration"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_userStakes",
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
                    "name": "amountInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "amountInUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "stakingStartedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "stakingEndedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "durationEnum",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.StakingDuration"
                },
                {
                    "name": "totalClaimableDays",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "claimedDays",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "isActive",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "isUnstaked",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_userSwapHistory",
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
                    "name": "amountInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "amountInUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "swappedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_users",
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
                    "name": "referredBy",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "directActiveReferralsCount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "totalStakedInUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "totalStakedByDirectReferralsInUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "totalStakedByDirectReferralsInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "communityPerformanceInUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "totalStakedInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "matchingReward",
                    "type": "tuple",
                    "internalType": "struct StakingStorage.RewardInfo",
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
                        },
                        {
                            "name": "totalEarned",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "rewardPercentage",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "dailyRewardAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "stakingReward",
                    "type": "tuple",
                    "internalType": "struct StakingStorage.RewardInfo",
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
                        },
                        {
                            "name": "totalEarned",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "rewardPercentage",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "dailyRewardAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "communityReward",
                    "type": "tuple",
                    "internalType": "struct StakingStorage.RewardInfo",
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
                        },
                        {
                            "name": "totalEarned",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "rewardPercentage",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "dailyRewardAmount",
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
            "name": "setStakingDailyROI",
            "inputs": [
                {
                    "name": "_duration",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.StakingDuration"
                },
                {
                    "name": "_dailyROI",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setSwapStartTime",
            "inputs": [
                {
                    "name": "_swapStartTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stakeWithUSDT",
            "inputs": [
                {
                    "name": "_amountInUSDT",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_duration",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.StakingDuration"
                },
                {
                    "name": "_referredBy",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "swapARXToUSDT",
            "inputs": [
                {
                    "name": "_amountInARX",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "unstakeAll",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateARXPriceInUSDT",
            "inputs": [
                {
                    "name": "_newPrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateFeeWalletAddress",
            "inputs": [
                {
                    "name": "_feeWalletAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMatchingBonusPercentage",
            "inputs": [
                {
                    "name": "_sponsorCount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
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
            "name": "updateMaximumReferralDepth",
            "inputs": [
                {
                    "name": "_newDepth",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateRankConfig",
            "inputs": [
                {
                    "name": "_rank",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.Rank"
                },
                {
                    "name": "_subCommunityThreshold",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_personalThreshold",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_rewardPct",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_incomeCap",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateUSDTTokenAddress",
            "inputs": [
                {
                    "name": "_usdtTokenAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "ARXPriceInUSDTUpdated",
            "inputs": [
                {
                    "name": "oldPrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "newPrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ARXSwappedToUSDT",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "arxAmountIn",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "feeInARX",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "usdtAmountOut",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CommunityRewardClaimed",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amountInARX",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "FeeWalletAddressUpdated",
            "inputs": [
                {
                    "name": "newAddress",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MatchingBonusClaimed",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amountInARX",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MatchingBonusPercentageUpdated",
            "inputs": [
                {
                    "name": "sponsorCount",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
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
            "name": "MaximumReferralDepthUpdated",
            "inputs": [
                {
                    "name": "newDepth",
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
            "name": "StakedWithUSDT",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amountInUSDT",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "duration",
                    "type": "uint8",
                    "indexed": false,
                    "internalType": "enum StakingStorage.StakingDuration"
                },
                {
                    "name": "referredBy",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "StakingDurationROIUpdated",
            "inputs": [
                {
                    "name": "duration",
                    "type": "uint8",
                    "indexed": true,
                    "internalType": "enum StakingStorage.StakingDuration"
                },
                {
                    "name": "oldROI",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "newROI",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "StakingRewardsClaimed",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amountInARX",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SwapStartTimeUpdated",
            "inputs": [
                {
                    "name": "newStartTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "USDTTokenAddressUpdated",
            "inputs": [
                {
                    "name": "newAddress",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "ARXPriceNotSet",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ARXTokenAddressNotSet",
            "inputs": []
        },
        {
            "type": "error",
            "name": "AlreadyStakedAtDuration",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "duration",
                    "type": "uint8",
                    "internalType": "enum StakingStorage.StakingDuration"
                }
            ]
        },
        {
            "type": "error",
            "name": "FeeWalletNotSet",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientUSDTBalance",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidAmount",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidDailyROI",
            "inputs": [
                {
                    "name": "dailyROI",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidFeeWalletAddress",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMatchingBonusPercentage",
            "inputs": [
                {
                    "name": "percentage",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidRankConfig",
            "inputs": [
                {
                    "name": "field",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidSponsorCount",
            "inputs": [
                {
                    "name": "sponsorCount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidSwapAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidUSDTTokenAddress",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NothingToClaim",
            "inputs": []
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
            "name": "ReentrancyGuardReentrantCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RenouncingOwnershipNotAllowed",
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
            "name": "SelfReferralNotAllowed",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "SwapNotActive",
            "inputs": []
        },
        {
            "type": "error",
            "name": "USDTTokenAddressNotSet",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedStakingDuration",
            "inputs": [
                {
                    "name": "duration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        }
    ]