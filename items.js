const items = [{
    
        "1001": {
            "name": "Boots",
            "description": "<mainText><stats><attention>25</attention> Move Speed</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slightly increases Move Speed",
            "into": [
                "3005",
                "3047",
                "3117",
                "3006",
                "3009",
                "3010",
                "3020",
                "3111",
                "3158"
            ],
            "image": {
                "full": "1001.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 210
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 25
            }
        },
        "1004": {
            "name": "Faerie Charm",
            "description": "<mainText><stats><attention>50%</attention> Base Mana Regen</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slightly increases Mana Regen",
            "into": [
                "3114",
                "4642",
                "3012"
            ],
            "image": {
                "full": "1004.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 250,
                "sell": 175
            },
            "tags": [
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "1006": {
            "name": "Rejuvenation Bead",
            "description": "<mainText><stats><attention>100%</attention> Base Health Regen</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slightly increases Health Regen",
            "into": [
                "3109",
                "3211",
                "3801"
            ],
            "image": {
                "full": "1006.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 120
            },
            "tags": [
                "HealthRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "1011": {
            "name": "Giant's Belt",
            "description": "<mainText><stats><attention>350</attention> Health</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Greatly increases Health",
            "from": [
                "1028"
            ],
            "into": [
                "4637",
                "3084",
                "3075",
                "3083",
                "3116",
                "3119",
                "3143",
                "6667",
                "8001"
            ],
            "image": {
                "full": "1011.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Health"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350
            },
            "depth": 2
        },
        "1018": {
            "name": "Cloak of Agility",
            "description": "<mainText><stats><attention>15%</attention> Critical Strike Chance</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases critical strike chance",
            "into": [
                "3031",
                "6670",
                "3086",
                "3033",
                "3508",
                "3095",
                "6676"
            ],
            "image": {
                "full": "1018.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 600,
                "sell": 420
            },
            "tags": [
                "CriticalStrike"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.15
            }
        },
        "1026": {
            "name": "Blasting Wand",
            "description": "<mainText><stats><attention>45</attention> Ability Power</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Moderately increases Ability Power",
            "into": [
                "4637",
                "3135",
                "3115",
                "3116",
                "6621",
                "6657"
            ],
            "image": {
                "full": "1026.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 850,
                "sell": 595
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 45
            }
        },
        "1027": {
            "name": "Sapphire Crystal",
            "description": "<mainText><stats><attention>250</attention> Mana</stats><br><br></mainText>",
            "colloq": ";blue",
            "plaintext": "Increases Mana",
            "into": [
                "3024",
                "3802",
                "3803"
            ],
            "image": {
                "full": "1027.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 245
            },
            "tags": [
                "Mana"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 250
            }
        },
        "1028": {
            "name": "Ruby Crystal",
            "description": "<mainText><stats><attention>150</attention> Health</stats><br><br></mainText>",
            "colloq": ";red",
            "plaintext": "Increases Health",
            "into": [
                "3742",
                "1011",
                "3071",
                "6662",
                "2021",
                "3012",
                "3147",
                "3084",
                "3053",
                "2502",
                "3023",
                "3044",
                "3066",
                "3067",
                "3211",
                "3748",
                "3801",
                "3803",
                "6665",
                "4401",
                "4635",
                "6035",
                "6609",
                "6660"
            ],
            "image": {
                "full": "1028.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 280
            },
            "tags": [
                "Health"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150
            }
        },
        "1029": {
            "name": "Cloth Armor",
            "description": "<mainText><stats><attention>15</attention> Armor</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slightly increases Armor",
            "into": [
                "2420",
                "1031",
                "2019",
                "3193",
                "3047",
                "3024",
                "3050",
                "3023",
                "3076",
                "3082",
                "3105",
                "3190"
            ],
            "image": {
                "full": "1029.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 210
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 15
            }
        },
        "1031": {
            "name": "Chain Vest",
            "description": "<mainText><stats><attention>40</attention> Armor</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Greatly increases Armor",
            "from": [
                "1029"
            ],
            "into": [
                "3742",
                "3068",
                "6662",
                "3109",
                "2502",
                "3002",
                "6665"
            ],
            "image": {
                "full": "1031.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "1033": {
            "name": "Null-Magic Mantle",
            "description": "<mainText><stats><attention>25</attention> Magic Resist</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slightly increases Magic Resist",
            "into": [
                "1057",
                "3140",
                "3193",
                "3050",
                "3001",
                "3155",
                "3211",
                "3105",
                "3111",
                "3190",
                "4632"
            ],
            "image": {
                "full": "1033.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 315
            },
            "tags": [
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 25
            }
        },
        "1035": {
            "name": "Emberknife",
            "description": "<mainText><stats></stats><br><br><li><passive>Sear:</passive> Damaging Monsters burns them over time.<li><passive>Challenging Path:</passive> Smiting 5 times consumes this item upgrade your Smite to <attention>Challenging Smite</attention> and increases its damage to monsters. Challenging Smite marks champions. During this time, you deal bonus true damage to them on hit and take reduced damage from them.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen mana when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules><br><br><rules>Only attacks and abilities apply Challenging Smite's burn</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1035.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "LifeSteal",
                "SpellVamp",
                "Jungle"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1036": {
            "name": "Long Sword",
            "description": "<mainText><stats><attention>10</attention> Attack Damage</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slightly increases Attack Damage",
            "into": [
                "2015",
                "1053",
                "2019",
                "2021",
                "6670",
                "3133",
                "3004",
                "3035",
                "3044",
                "3051",
                "3155",
                "4003",
                "6690",
                "3077",
                "3123",
                "3134",
                "6699",
                "6671",
                "6692"
            ],
            "image": {
                "full": "1036.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 245
            },
            "tags": [
                "Damage",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 10
            }
        },
        "1037": {
            "name": "Pickaxe",
            "description": "<mainText><stats><attention>25</attention> Attack Damage</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Moderately increases Attack Damage",
            "into": [
                "6333",
                "2020",
                "3031",
                "3153",
                "3087",
                "3053",
                "3032",
                "3039",
                "3072",
                "3124",
                "3181",
                "3139",
                "3161",
                "6029",
                "6035",
                "6673",
                "6692",
                "6695"
            ],
            "image": {
                "full": "1037.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 875,
                "purchasable": true,
                "total": 875,
                "sell": 613
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25
            }
        },
        "1038": {
            "name": "B. F. Sword",
            "description": "<mainText><stats><attention>40</attention> Attack Damage</stats><br><br></mainText>",
            "colloq": ";bf",
            "plaintext": "Greatly increases Attack Damage",
            "into": [
                "3031",
                "3146",
                "3026",
                "3508",
                "3072",
                "4403",
                "6671",
                "6676"
            ],
            "image": {
                "full": "1038.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1300,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40
            }
        },
        "1039": {
            "name": "Hailblade",
            "description": "<mainText><stats></stats><br><br><li><passive>Sear:</passive> Damaging Monsters burns them over time.<li><passive>Chilling Path:</passive> Smiting 5 times consumes this item upgrade your Smite to <attention>Chilling Smite</attention> and increases its damage to monsters. When smiting champions Chilling Smite deals true damage and steals their Move Speed.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen mana when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules><br><br></mainText>",
            "colloq": ";jungle;Jungle",
            "plaintext": "Provides damage against Monsters and Mana Regen in the Jungle",
            "inStore": false,
            "image": {
                "full": "1039.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "LifeSteal",
                "SpellVamp",
                "Jungle"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1040": {
            "name": "Obsidian Edge",
            "description": "<mainText><stats></stats><br><br><li><passive>Sear:</passive> Damaging Monsters burns them over time.<li><passive>Auto Path:</passive> Smiting 5 times consumes this item upgrade your Attack-Smite, increasing its damage to monsters.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen mana when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1040.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "LifeSteal",
                "SpellVamp",
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1042": {
            "name": "Dagger",
            "description": "<mainText><stats><attention>10%</attention> Attack Speed</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slightly increases Attack Speed",
            "into": [
                "1043",
                "3091",
                "3086",
                "3131",
                "3006",
                "3046",
                "3051",
                "3144",
                "6631",
                "6675",
                "6677"
            ],
            "image": {
                "full": "1042.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 210
            },
            "tags": [
                "AttackSpeed"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.1
            }
        },
        "1043": {
            "name": "Recurve Bow",
            "description": "<mainText><stats><attention>15%</attention> Attack Speed</stats><br><br>Attacks apply bonus physical damage On-Hit.</mainText>",
            "colloq": ";",
            "plaintext": "Greatly increases Attack Speed",
            "from": [
                "1042"
            ],
            "into": [
                "3115",
                "6672",
                "3091",
                "3153",
                "3124",
                "3302"
            ],
            "image": {
                "full": "1043.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 700,
                "sell": 490
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.15
            },
            "depth": 2
        },
        "1052": {
            "name": "Amplifying Tome",
            "description": "<mainText><stats><attention>20</attention> Ability Power</stats><br><br></mainText>",
            "colloq": ";amptome",
            "plaintext": "Slightly increases Ability Power",
            "into": [
                "2420",
                "3145",
                "4642",
                "4637",
                "3916",
                "6656",
                "3113",
                "3147",
                "3802",
                "2508",
                "3108",
                "3116",
                "3124",
                "4635",
                "4630",
                "4632",
                "4644"
            ],
            "image": {
                "full": "1052.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 280
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 20
            }
        },
        "1053": {
            "name": "Vampiric Scepter",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>7%</attention> Life Steal</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Basic attacks restore Health",
            "from": [
                "1036"
            ],
            "into": [
                "3153",
                "3072",
                "3074",
                "3139",
                "4403"
            ],
            "image": {
                "full": "1053.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "PercentLifeStealMod": 0.07
            },
            "depth": 2
        },
        "1054": {
            "name": "Doran's Shield",
            "description": "<mainText><stats><attention>110</attention> Health</stats><br><br><passive>Enduring Focus</passive><li>Attacks deal an additional <physicalDamage>5 physical damage</physicalDamage> to minions.<li>Regenerate <healing>4 Health</healing> every 5 seconds. After taking damage from a champion, large or epic jungle monster, restores up to <healing>45 Health</healing> over 8 seconds. Restoration increases when you are low Health.</mainText>",
            "colloq": ";dshield",
            "plaintext": "Good defensive starting item",
            "image": {
                "full": "1054.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 110,
                "FlatHPRegenMod": 0.8
            },
            "effect": {
                "Effect1Amount": "8",
                "Effect2Amount": "5",
                "Effect3Amount": "45",
                "Effect4Amount": "0.66"
            }
        },
        "1055": {
            "name": "Doran's Blade",
            "description": "<mainText><stats><attention>10</attention> Attack Damage<br><attention>100</attention> Health<br><attention>3.5%</attention> Life Steal</stats><br><br></mainText>",
            "colloq": ";dblade",
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "1055.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Health",
                "Damage",
                "SpellVamp",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 100,
                "FlatPhysicalDamageMod": 10,
                "PercentLifeStealMod": 0.035
            }
        },
        "1056": {
            "name": "Doran's Ring",
            "description": "<mainText><stats><attention>18</attention> Ability Power<br><attention>90</attention> Health</stats><br><br><passive>Restoration</passive><li>Restore Mana every second. If you can't gain Mana, regenerate Health instead.<li>Attacks deal additional damage to minions.</mainText>",
            "colloq": ";dring",
            "plaintext": "Good starting item for casters",
            "image": {
                "full": "1056.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 90,
                "FlatMagicDamageMod": 18
            }
        },
        "1057": {
            "name": "Negatron Cloak",
            "description": "<mainText><stats><attention>50</attention> Magic Resist</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Moderately increases Magic Resist",
            "from": [
                "1033"
            ],
            "into": [
                "3091",
                "2504",
                "6665",
                "4401",
                "8020"
            ],
            "image": {
                "full": "1057.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 50
            },
            "depth": 2
        },
        "1058": {
            "name": "Needlessly Large Rod",
            "description": "<mainText><stats><attention>70</attention> Ability Power</stats><br><br></mainText>",
            "colloq": ";nlr",
            "plaintext": "Greatly increases Ability Power",
            "into": [
                "3157",
                "4645",
                "3146",
                "3102",
                "3089",
                "3128",
                "4403"
            ],
            "image": {
                "full": "1058.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": true,
                "total": 1250,
                "sell": 875
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 70
            }
        },
        "1082": {
            "name": "Dark Seal",
            "description": "<mainText><stats><attention>15</attention> Ability Power<br><attention>50</attention> Health</stats><br><br><passive>Glory</passive><br>Kills and Assists grant stacks, gain Ability Power per stack. Lose some stacks on death.</mainText>",
            "colloq": ";Noxian",
            "plaintext": "Provides Ability Power and Mana.  Increases in power as you kill enemies.",
            "into": [
                "3041"
            ],
            "image": {
                "full": "1082.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 50,
                "FlatMagicDamageMod": 15
            }
        },
        "1083": {
            "name": "Cull",
            "description": "<mainText><stats><attention>7</attention> Attack Damage</stats><br><br><passive>Reap</passive><li>Restore <healing>3 Health</healing> per hit.<li>Killing a lane minion grants <goldGain>1</goldGain> additional gold, up to 100. Killing 100 lane minions grants an additional <goldGain>350</goldGain> bonus gold.<br></mainText>",
            "colloq": ";dblade",
            "plaintext": "Provides damage and Life Steal on hit - Killing minions grant bonus Gold",
            "image": {
                "full": "1083.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Damage",
                "OnHit",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 7
            }
        },
        "1101": {
            "name": "Scorchclaw Pup",
            "description": "<mainText><stats></stats><br><br><li><passive>Jungle Companions:</passive> Summon an <font color='#DD2E2E'>Scorchclaw</font> to assist you in the jungle.<li><passive>Scorchclaw's Slash:</passive> When fully grown your companion periodically imbues your next damaging effect to <status>Slow</status> and <passive>damage</passive> enemy champions.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1101.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "1102": {
            "name": "Gustwalker Hatchling",
            "description": "<mainText><stats></stats><br><br><li><passive>Jungle Companions:</passive> Summon a <font color='#38A8E8'>Gustwalker</font> to assist you while in the jungle.<li><passive>Gustwalker's Gait:</passive> When fully grown your companion grants <speed>Move Speed</speed> after entering brush or killing monsters.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1102.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1103": {
            "name": "Mosstomper Seedling",
            "description": "<mainText><stats></stats><br><br><li><passive>Jungle Companions:</passive> Summon a <font color='#1CA935'>Mosstomper</font> to assist you while in the jungle. <li><passive>Mosstomper's Courage:</passive> When fully grown your companion grants a <shield>permanent shield</shield> that regenerates either after killing monsters or out of combat. While the shield holds gain 0% Tenacity and Slow Resist.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1103.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1104": {
            "name": "Eye of the Herald",
            "description": "<mainText><stats></stats><br><br><br><br><active>Active - Consume:</active> Crush the Eye of the Herald, begining the ritual to summon Rift Herald. You may click the Rift Herald after it has summoned to control how it charges. This control effect can be done once when it is summoned, and once each time a nearby enemy structure dies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "1104.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Trinket",
                "Active"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "240",
                "Effect2Amount": "1",
                "Effect3Amount": "20",
                "Effect4Amount": "180"
            }
        },
        "1500": {
            "name": "Penetrating Bullets",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1500.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1501": {
            "name": "Fortification",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1501.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "0.75",
                "Effect2Amount": "5",
                "Effect3Amount": "0.35"
            }
        },
        "1502": {
            "name": "Reinforced Armor",
            "description": "<mainText><stats></stats><br><br><mainText><unique>Reinforced:</unique> Reduces incoming damage by 80%, including True Damage, when no enemy Lane Minions or Rift Herald are nearby.</mainText></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1502.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "80"
            }
        },
        "1503": {
            "name": "Warden's Eye",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1503.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "1000"
            }
        },
        "1504": {
            "name": "Vanguard",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1504.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "30",
                "Effect3Amount": "30",
                "Effect4Amount": "300"
            }
        },
        "1506": {
            "name": "Reinforced Armor",
            "description": "<mainText><stats></stats><br><br><mainText><unique>Reinforced:</unique> Reduces incoming damage by 66%, including True Damage, when no enemy Lane Minions or Rift Herald are nearby.<br><unique>Regeneration: </unique>Base turrets have health regeneration, but cannot regenerate past their current segment. Base turrets are segmented at 33%, 66% and 100% health.</mainText></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1506.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "66",
                "Effect2Amount": "66"
            }
        },
        "1507": {
            "name": "Overcharged",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1507.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "75",
                "Effect2Amount": "75"
            }
        },
        "1508": {
            "name": "Anti-tower Socks",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1508.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "1509": {
            "name": "Gusto",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1509.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "1510": {
            "name": "Phreakish Gusto",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1510.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "1511": {
            "name": "Super Mech Armor",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1511.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "1512": {
            "name": "Super Mech Power Field",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1512.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "1515": {
            "name": "Turret Plating",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1515.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "40",
                "Effect2Amount": "125",
                "Effect3Amount": "20",
                "Effect4Amount": "45",
                "Effect5Amount": "0.17"
            }
        },
        "1516": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1516.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1517": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1517.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1518": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1518.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1519": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1519.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1520": {
            "name": "OvererchargedHA",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1520.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "75",
                "Effect2Amount": "75"
            }
        },
        "1521": {
            "name": "Fortification",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1521.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "60",
                "Effect3Amount": "0.35"
            }
        },
        "1522": {
            "name": "Tower Power-Up",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1522.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "3",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "40",
                "Effect6Amount": "40",
                "Effect7Amount": "9",
                "Effect8Amount": "12"
            }
        },
        "2003": {
            "name": "Health Potion",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Restores <healing>120 Health</healing> over 15 seconds.</mainText>",
            "colloq": ";",
            "plaintext": "Consume to restore Health over time",
            "stacks": 5,
            "consumed": true,
            "image": {
                "full": "2003.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 50,
                "purchasable": true,
                "total": 50,
                "sell": 20
            },
            "tags": [
                "HealthRegen",
                "Consumable",
                "Lane",
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2010": {
            "name": "Total Biscuit of Everlasting Will",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Eat the biscuit to restore <healing>8% missing Health</healing> and <scaleMana>Mana</scaleMana> over 5 seconds. Consuming or selling a biscuit permanently grants <scaleMana>40 maximum Mana</scaleMana>. </mainText>",
            "colloq": ";",
            "plaintext": "",
            "stacks": 10,
            "consumed": true,
            "inStore": false,
            "hideFromAll": true,
            "image": {
                "full": "2010.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 50,
                "purchasable": false,
                "total": 50,
                "sell": 5
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "10"
            }
        },
        "2015": {
            "name": "Kircheis Shard",
            "description": "<mainText><stats><attention>15</attention> Attack Damage</stats><br><br><passive>Jolt</passive><br><keyword>Energized Attacks</keyword> deal an additional <magicDamage>50 magic damage</magicDamage>.</mainText>",
            "colloq": ";",
            "plaintext": "Attack speed and a chargable magic hit",
            "from": [
                "1036"
            ],
            "inStore": false,
            "into": [
                "3095"
            ],
            "image": {
                "full": "2015.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 700,
                "sell": 490
            },
            "tags": [
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15
            },
            "depth": 2
        },
        "2019": {
            "name": "Steel Sigil",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>30</attention> Armor</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1029",
                "1036",
                "1029"
            ],
            "into": [
                "6333",
                "6700",
                "3026"
            ],
            "image": {
                "full": "2019.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 30,
                "FlatPhysicalDamageMod": 15
            },
            "depth": 2
        },
        "2020": {
            "name": "The Brutalizer",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>10</attention> Ability Haste<br><attention>5</attention> Lethality</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2022",
                "1037"
            ],
            "into": [
                "6698",
                "6699",
                "6694",
                "6696"
            ],
            "image": {
                "full": "2020.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 212,
                "purchasable": true,
                "total": 1337,
                "sell": 936
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "depth": 2
        },
        "2021": {
            "name": "Tunneler",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>250</attention> Health</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1036",
                "1028"
            ],
            "into": [
                "2501",
                "3053",
                "3073",
                "3814",
                "3181",
                "3748",
                "6610"
            ],
            "image": {
                "full": "2021.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 1150,
                "sell": 805
            },
            "tags": [
                "Health",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatPhysicalDamageMod": 15
            },
            "depth": 2
        },
        "2022": {
            "name": "Glowing Mote",
            "description": "<mainText><stats><attention>5</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "2020",
                "4642",
                "3024",
                "3133",
                "223057",
                "3802",
                "3057",
                "3067",
                "3108",
                "3158",
                "6660"
            ],
            "image": {
                "full": "2022.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 250,
                "sell": 175
            },
            "tags": [
                "CooldownReduction"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2031": {
            "name": "Refillable Potion",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Restores <healing>100 Health</healing> over 12 seconds. <br><br>Holds 2 charges and refills upon visiting the shop.</mainText>",
            "colloq": ";",
            "plaintext": "Restores Health over time. Refills at shop.",
            "into": [
                "2033"
            ],
            "image": {
                "full": "2031.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 150,
                "sell": 60
            },
            "tags": [
                "HealthRegen",
                "Consumable",
                "Active",
                "Lane",
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2033": {
            "name": "Corrupting Potion",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Consumes a charge to restore <healing>100 Health</healing> and <scaleMana>75 Mana</scaleMana> over 12 seconds. During this time, damaging Abilities and Attacks burn enemy champions for <magicDamage>15 (20 if you cannot gain Mana) magic damage</magicDamage> over 3 seconds. Holds up to 3 charges and refills upon visiting the shop.<br><br><rules>Corrupting damage is reduced to 50% when triggered by area of effect or periodic damage.</rules></mainText>",
            "colloq": ";",
            "plaintext": "Restores Health and Mana over time and boosts combat power - Refills at Shop",
            "from": [
                "2031"
            ],
            "inStore": false,
            "image": {
                "full": "2033.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Active",
                "Consumable",
                "HealthRegen",
                "Lane",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "depth": 2
        },
        "2049": {
            "name": "Guardian's Amulet",
            "description": "<mainText><stats><attention>15%</attention> Heal and Shield Power<br><attention>20</attention> Ability Power<br><attention>20</attention> Ability Haste</stats><br><br><passive>Recovery</passive><br>Restores <scaleMana>10 Mana</scaleMana> every 5 seconds. If you can't gain mana, restores <healing>0.6 Health</healing> instead.</mainText>",
            "colloq": ";",
            "plaintext": "Increases Health and provides Stealth Wards over time",
            "image": {
                "full": "2049.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 20
            }
        },
        "2050": {
            "name": "Guardian's Shroud",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>35</attention> Ability Power<br><attention>15</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "",
            "image": {
                "full": "2050.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 35
            }
        },
        "2051": {
            "name": "Guardian's Horn",
            "description": "<mainText><stats><attention>150</attention> Health</stats><br><br><br><li><passive>Recovery:</passive> Restores Health over time.<li><passive>Undaunted:</passive> Blocks damage from attacks and spells from champions.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText>",
            "colloq": "Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf",
            "plaintext": "Good starting item for tanks",
            "image": {
                "full": "2051.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatHPRegenMod": 4
            },
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "0.25"
            }
        },
        "2052": {
            "name": "Poro-Snax",
            "description": "<mainText><stats></stats><br><br><br><br><flavorText>This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br>All proceeds will be donated towards fighting Noxian animal cruelty. </flavorText><active>Active - Consume:</active> Serves a scrumptious scoop to a nearby Poro, causing it to grow in size.</mainText>",
            "colloq": ";",
            "plaintext": "",
            "stacks": 2,
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "2052.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "2055": {
            "name": "Control Ward",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Control Ward</active><br>Places a Control Ward that grants vision and reveals enemy Stealth Wards, traps and <keywordStealth>Camouflaged</keywordStealth> enemies.</mainText>",
            "colloq": "orange;",
            "plaintext": "Used to disable wards and invisible traps in an area.",
            "stacks": 2,
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2055.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 75,
                "purchasable": true,
                "total": 75,
                "sell": 30
            },
            "tags": [
                "Consumable",
                "Lane",
                "Stealth",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "2"
            }
        },
        "2056": {
            "name": "Stealth Ward",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Places a Stealth Ward on the ground that lasts 60 seconds, is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. </mainText>",
            "colloq": "green;",
            "plaintext": "Use to temporarily provide vision in an area",
            "stacks": 2,
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "image": {
                "full": "2056.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 40,
                "purchasable": false,
                "total": 40,
                "sell": 16
            },
            "tags": [
                "Consumable",
                "Lane",
                "Stealth",
                "Vision"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2065": {
            "name": "Shurelya's Battlesong",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>15</attention> Ability Haste<br><attention>5%</attention> Move Speed<br><attention>125%</attention> Base Mana Regen</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Inspiring Speech</active><br>Grants nearby allies Move Speed.<br><br></mainText>",
            "colloq": ";shurelya;reverie;",
            "plaintext": "Activate to speed up nearby allies.",
            "from": [
                "3113",
                "4642"
            ],
            "into": [
                "7020"
            ],
            "image": {
                "full": "2065.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 50,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "2138": {
            "name": "Elixir of Iron",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Grants <scaleHealth>300 Health</scaleHealth>, 25% Tenacity, and increased champion size for 3 minutes. While active, moving leaves a path behind that boosts allied champions' <speed>Move Speed by 15%</speed>.</mainText>",
            "colloq": ";white",
            "plaintext": "Temporarily increases defenses. Leaves a trail for allies to follow.",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2138.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Health",
                "Consumable",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "300",
                "Effect2Amount": "0.25",
                "Effect3Amount": "3",
                "Effect4Amount": "0.15",
                "Effect5Amount": "0.15",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "9"
            }
        },
        "2139": {
            "name": "Elixir of Sorcery",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Grants <scaleAP>50 Ability Power</scaleAP> and <scaleMana>15% Mana Regen</scaleMana> for 3 minutes. While active, damaging a champion or turret deals <trueDamage>25 bonus true damage</trueDamage> (5s against champions).</mainText>",
            "colloq": ";blue",
            "plaintext": "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2139.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Consumable",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "50",
                "Effect2Amount": "50",
                "Effect3Amount": "25",
                "Effect4Amount": "3",
                "Effect5Amount": "5",
                "Effect6Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "9"
            }
        },
        "2140": {
            "name": "Elixir of Wrath",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Grants <scaleAD>30 Attack Damage</scaleAD> and <lifeSteal>12% Physical Vamp</lifeSteal> against champions for 3 minutes.</mainText>",
            "colloq": ";red",
            "plaintext": "Temporarily grants Attack Damage and heals you when dealing physical damage to champions.",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2140.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Consumable",
                "Damage",
                "LifeSteal",
                "SpellVamp"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "30",
                "Effect3Amount": "0.12",
                "Effect4Amount": "3",
                "Effect5Amount": "0",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "9"
            }
        },
        "2141": {
            "name": "Cappa Juice",
            "description": "<mainText><stats></stats><br><br><rules>Helps you get on a head.</rules><active>Active - Consume:</active> This juice does nothing.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2141.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 500
            },
            "tags": [
                "Damage",
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2142": {
            "name": "Juice of Power",
            "description": "<mainText><stats></stats><br><br><br><br><rules>Juices do not stack with themselves, but you can have multiple different ones active.</rules><active>Active - Consume:</active> Automatically activates on Combat Start. Drink to gain <scaleAP>30+ 10% bonus Ability Power</scaleAP> or <scaleAD>18+ 10% bonus Attack Damage</scaleAD> for the next round.<br><br><flavorText>Made with 100% real cherries. Warning: May cause imbiber to deal tons of damage.</flavorText></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2142.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 500
            },
            "tags": [
                "SpellDamage",
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "2143": {
            "name": "Juice of Vitality",
            "description": "<mainText><stats></stats><br><br><br><br><rules>Juices do not stack with themselves, but you can have multiple different ones active.</rules><active>Active - Consume:</active> Automatically activates on Combat Start. Drink to gain <healing>300+ 10% Health</healing> for the next round.<br><br><flavorText>Our specially formulated veggie blend is proven to harden your skin to resist even the strongest attacks!</flavorText></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2143.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 500
            },
            "tags": [
                "Health",
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "2144": {
            "name": "Juice of Haste",
            "description": "<mainText><stats></stats><br><br><br><br><rules>Juices do not stack with themselves, but you can have multiple different ones active.</rules><active>Active - Consume:</active> Automatically activates on Combat Start. Drink to gain <speed>20+ 15% Ability Haste</speed> for the next round.<br><br><flavorText>For people who gotta go FAST. Made with lightning. REAL lightning!</flavorText></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2144.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 500
            },
            "tags": [
                "Consumable",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "2145": {
            "name": "Lucky Dice",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Roll to gain an additional reroll.<br><br><rules>Selling this or using all your rerolls will automatically consume this.</rules><br><br><flavorText>For when skill isn't enough.</flavorText></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "2145.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "2150": {
            "name": "Elixir of Skill",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Grants 1 Skill Point.<br><br><rules>This item does not increase your level or allow allocating skill points past the normal maximum in a skill</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "2150.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2151": {
            "name": "Elixir of Avarice",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Grants <trueDamage>5 true damage</trueDamage> on hit against minions for 60 seconds. When this effect expires, gain 40 gold. </mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "2151.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 50,
                "purchasable": false,
                "total": 50,
                "sell": 20
            },
            "tags": [
                "Health",
                "Consumable",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2152": {
            "name": "Elixir of Force",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Consume</active><br>Grants 20 Adaptive Force for 60 seconds. </mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "2152.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 50,
                "purchasable": false,
                "total": 50,
                "sell": 20
            },
            "tags": [
                "Consumable",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2403": {
            "name": "Minion Dematerializer",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Kill target lane minion. (0s)</mainText>",
            "colloq": ";",
            "plaintext": "",
            "stacks": 10,
            "consumed": true,
            "inStore": false,
            "hideFromAll": true,
            "image": {
                "full": "2403.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "2420": {
            "name": "Seeker's Armguard",
            "description": "<mainText><stats><attention>45</attention> Ability Power<br><attention>25</attention> Armor</stats><br><br><active>ACTIVE</active><br><active>Time Stop</active> (Single use)<br>Enter <keyword>Stasis</keyword> for 2.5 seconds.</mainText>",
            "colloq": ";zhg;zonyas",
            "plaintext": "Activate to become invincible but unable to take actions",
            "from": [
                "1052",
                "1029",
                "1052"
            ],
            "into": [
                "3157",
                "4003"
            ],
            "image": {
                "full": "2420.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 1600,
                "sell": 640
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 45,
                "FlatArmorMod": 25
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5"
            },
            "depth": 2
        },
        "2421": {
            "name": "Shattered Armguard",
            "description": "<mainText><stats><attention>45</attention> Ability Power<br><attention>25</attention> Armor</stats><br><br><passive>Shattered Time</passive><br>Armguard is broken, but can still be upgraded.<br><br><rules>After breaking one Armguard, the shopkeeper will only sell you <rarityGeneric>Shattered Armguard.</rarityGeneric></rules><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Upgrades to stopwatch",
            "hideFromAll": true,
            "into": [
                "3157"
            ],
            "image": {
                "full": "2421.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1600,
                "purchasable": true,
                "total": 1600,
                "sell": 640
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 45,
                "FlatArmorMod": 25
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "300"
            }
        },
        "2422": {
            "name": "Slightly Magical Footwear",
            "description": "<mainText><stats><attention>25</attention> Move Speed</stats><br><br>Grants an additional <speed>10 Move Speed</speed>. Boots that build from Slightly Magical Footwear retain this bonus Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "into": [
                "3006",
                "3047",
                "3020",
                "3158",
                "3111",
                "3117",
                "3009"
            ],
            "image": {
                "full": "2422.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": false,
                "total": 300,
                "sell": 90
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 25
            }
        },
        "2501": {
            "name": "Overlord's Bloodmail",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>500</attention> Health</stats><br><br><passive>Tyranny</passive><br>Gain 2% of your <healing>bonus Health</healing> as <scaleAD>Attack Damage</scaleAD>. <br><br><passive>Retribution</passive><br>Gain up to 10% increased <scaleAD>Attack Damage</scaleAD> based on your percent missing Health. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2021",
                "2021"
            ],
            "image": {
                "full": "2501.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatPhysicalDamageMod": 40
            },
            "depth": 3
        },
        "2502": {
            "name": "Unending Despair",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>55</attention> Armor<br><attention>10</attention> Ability Haste</stats><br><br><passive>Anguish</passive><br>While in combat with champions, every few seconds, deal magic damage to nearby enemy champions, healing based on the damage dealt.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1031",
                "3067",
                "1028"
            ],
            "into": [
                "7034"
            ],
            "image": {
                "full": "2502.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 55
            },
            "depth": 3
        },
        "2503": {
            "name": "Blackfire Torch",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>600</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Baleful Blaze</passive><br>Dealing damage with Abilities causes enemies to burn. This damage increases to Monsters.<br><br><passive>Blackfire</passive><br>For each enemy Champion, Epic Monster, and Large Monster affected by your <passive>Baleful Blaze</passive>, gain <scaleAP>Ability Power</scaleAP>. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3802",
                "2508"
            ],
            "image": {
                "full": "2503.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "2504": {
            "name": "Kaenic Rookern",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>80</attention> Magic Resist<br><attention>150%</attention> Base Health Regen</stats><br><br><passive>Magebane</passive><br>After not taking <magicDamage>magic damage</magicDamage> for 15 seconds, gain a <magicDamage>magic shield for 0</magicDamage>. <br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3211",
                "1057"
            ],
            "image": {
                "full": "2504.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 80,
                "FlatHPPoolMod": 400
            },
            "depth": 3
        },
        "2508": {
            "name": "Fated Ashes",
            "description": "<mainText><stats><attention>30</attention> Ability Power</stats><br><br><passive>Inflame</passive><br>Dealing damage with Abilities causes enemies to burn. This damage increases to Monsters.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1052"
            ],
            "into": [
                "6653",
                "2503"
            ],
            "image": {
                "full": "2508.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "depth": 2
        },
        "3001": {
            "name": "Evenshroud",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>20</attention> Ability Haste</stats><br><br><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText>",
            "colloq": ";",
            "plaintext": "Nearby enemies take more magic damage",
            "from": [
                "3023",
                "1033"
            ],
            "inStore": false,
            "into": [
                "7023"
            ],
            "image": {
                "full": "3001.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": false,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatHPPoolMod": 200,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "3002": {
            "name": "Trailblazer",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>40</attention> Armor<br><attention>5%</attention> Move Speed</stats><br><br><passive>Lead the Way</passive><br>While moving, gain <speed>20 bonus Move Speed</speed>. At max speed, create a trail that speeds up allied champion's Move Speed by 15% of yours. Your next Attack discharges the bonus Move Speed and Melee champions <keyword>Slow</keyword> the target by 50% for 1 second.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3066",
                "1031"
            ],
            "image": {
                "full": "3002.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Health",
                "Armor",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatArmorMod": 40,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "3003": {
            "name": "Archangel's Staff",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>600</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain Ability Power equal to your bonus Mana.<br><br><passive>Manaflow</passive><br>Strike a target with an Ability to consume a charge and gain bonus Mana. Grants a maximum of 360 Mana at which point this item transforms into <rarityLegendary>Seraph's Embrace</rarityLegendary>.<br><br></mainText>",
            "colloq": "",
            "plaintext": "Increases Ability Power based on maximum Mana",
            "from": [
                "3070",
                "3802",
                "3108"
            ],
            "image": {
                "full": "3003.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 80
            },
            "depth": 3
        },
        "3004": {
            "name": "Manamune",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain bonus Attack Damage based on Mana.<br><br><passive>Manaflow</passive><br>Strike a target with an Ability or Attack to gain bonus Mana. Grants a maximum of Mana at which point this item transforms into <rarityLegendary>Muramana</rarityLegendary>.</mainText>",
            "colloq": "",
            "plaintext": "Increases Attack Damage based on maximum Mana",
            "from": [
                "3070",
                "3133",
                "1036"
            ],
            "image": {
                "full": "3004.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1050,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 500,
                "FlatPhysicalDamageMod": 35
            },
            "depth": 3
        },
        "3005": {
            "name": "Ghostcrawlers",
            "description": "<mainText><stats><attention>45</attention> Move Speed</stats><br><br><br><br><active>Active -</active> <active>Wall Walk:</active> Gain the ability to walk through walls for 6 seconds. While inside walls, gain 125 move speed. Casting a spell or attacking will end this effect (0s).</mainText>",
            "colloq": ";wreckoning;Wreckoning",
            "plaintext": "Increases Attack Damage based on maximum Health",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3005.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 1000,
                "sell": 500
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "depth": 2
        },
        "3006": {
            "name": "Berserker's Greaves",
            "description": "<mainText><stats><attention>35%</attention> Attack Speed<br><attention>45</attention> Move Speed</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and Attack Speed",
            "from": [
                "1001",
                "1042"
            ],
            "into": [
                "3172"
            ],
            "image": {
                "full": "3006.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "AttackSpeed",
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45,
                "PercentAttackSpeedMod": 0.35
            },
            "depth": 2
        },
        "3009": {
            "name": "Boots of Swiftness",
            "description": "<mainText><stats><attention>60</attention> Move Speed</stats><br><br><passive>Fleetfooted</passive><br>Reduce the effectiveness of <keyword>Slows</keyword> by 25%.</mainText>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and reduces the effect of slows",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3009.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 60
            },
            "depth": 2
        },
        "3010": {
            "name": "Symbiotic Soles",
            "description": "<mainText><stats><attention>35</attention> Move Speed</stats><br><br><passive>Voidborn</passive><br>Gain Empowered Recall.<br><br><passive>Symbiosis</passive><br>After traveling 150000 units of distance, transform into <rarityLegendary>Synchronized Souls</rarityLegendary>.</mainText>",
            "colloq": ";",
            "plaintext": "Spend Mana to recover Health",
            "from": [
                "1001"
            ],
            "into": [
                "3013"
            ],
            "image": {
                "full": "3010.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 35
            },
            "depth": 2
        },
        "3011": {
            "name": "Chemtech Putrifier",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><attention>10%</attention> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><attention>15</attention> Ability Haste</stats><br><br><br><li><passive>Puffcap Toxin:</passive> Dealing damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3916",
                "3114"
            ],
            "inStore": false,
            "image": {
                "full": "3011.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": false,
                "total": 2100,
                "sell": 1470
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 35
            },
            "depth": 3
        },
        "3012": {
            "name": "Chalice of Blessing",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>50%</attention> Base Mana Regen</stats><br><br><br><li><passive>Harmony:</passive> Gain 25% Base Health Regen per <scalemana>25% Base Mana Regen</scalemana>.<br><br><flavorText>'These blessed waters still carry their power to the worthy.'</flavorText></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "1004"
            ],
            "inStore": false,
            "image": {
                "full": "3012.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": false,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "ManaRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "3013": {
            "name": "Synchronized Souls",
            "description": "<mainText><stats><attention>45</attention> Move Speed</stats><br><br><passive>Voidborn</passive><br>Gain Empowered Recall.<br><br><passive>Synchrony</passive><br>Gain <speed>45 Move Speed</speed> when out of combat.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3010"
            ],
            "inStore": false,
            "image": {
                "full": "3013.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "depth": 3
        },
        "3020": {
            "name": "Sorcerer's Shoes",
            "description": "<mainText><stats><attention>18</attention> Magic Penetration<br><attention>45</attention> Move Speed</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and magic damage",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3020.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Boots",
                "MagicPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "effect": {
                "Effect1Amount": "18"
            },
            "depth": 2
        },
        "3023": {
            "name": "Lifewell Pendant",
            "description": "<mainText><stats><attention>150</attention> Health<br><attention>25</attention> Armor<br><attention>5</attention> Ability Haste</stats><br><br><br><br><flavorText>'Fashionable and functional.'</flavorText></mainText>",
            "colloq": ";spooky ghosts",
            "plaintext": "Summon wraiths to slow and reveal enemy champions",
            "from": [
                "1028",
                "1029"
            ],
            "inStore": false,
            "into": [
                "3001"
            ],
            "image": {
                "full": "3023.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 1050,
                "sell": 735
            },
            "tags": [
                "Health",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatArmorMod": 25
            },
            "depth": 2
        },
        "3024": {
            "name": "Glacial Buckler",
            "description": "<mainText><stats><attention>20</attention> Armor<br><attention>250</attention> Mana<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases Armor and Cooldown Reduction",
            "from": [
                "1029",
                "1027",
                "2022"
            ],
            "into": [
                "3110"
            ],
            "image": {
                "full": "3024.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 50,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Armor",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 20
            },
            "depth": 2
        },
        "3026": {
            "name": "Guardian Angel",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>45</attention> Armor</stats><br><br><passive>Rebirth</passive><br>Upon taking lethal damage, revive after a short delay.</mainText>",
            "colloq": ";ga",
            "plaintext": "Periodically revives champion upon death",
            "from": [
                "2019",
                "1038"
            ],
            "image": {
                "full": "3026.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 3200,
                "sell": 1280
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 45,
                "FlatPhysicalDamageMod": 55
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "4",
                "Effect3Amount": "300",
                "Effect4Amount": "1"
            },
            "depth": 3
        },
        "3031": {
            "name": "Infinity Edge",
            "description": "<mainText><stats><attention>80</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><attention>40%</attention> Critical Strike Damage</stats><br><br></mainText>",
            "colloq": ";ie",
            "plaintext": "Massively enhances critical strikes",
            "from": [
                "1038",
                "1037",
                "1018"
            ],
            "into": [
                "7031"
            ],
            "image": {
                "full": "3031.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 625,
                "purchasable": true,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 80
            },
            "depth": 2
        },
        "3032": {
            "name": "Yun Tal Wildarrows",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Serrated Edge</passive><br>Critical attacks deal additional damage over time.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1037",
                "6670"
            ],
            "image": {
                "full": "3032.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 925,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Damage",
                "CriticalStrike"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 65
            },
            "depth": 3
        },
        "3033": {
            "name": "Mortal Reminder",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>35%</attention> Armor Penetration<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Grievous Wounds</passive><br>Dealing physical damage applies <keyword>40% Grievous Wounds</keyword> to enemy champions for 3 seconds.</mainText>",
            "colloq": ";grievous",
            "plaintext": "Overcomes enemies with high Health recovery and Armor",
            "from": [
                "3123",
                "3035",
                "1018"
            ],
            "image": {
                "full": "3033.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 40
            },
            "depth": 3
        },
        "3035": {
            "name": "Last Whisper",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>18%</attention> Armor Penetration</stats><br><br></mainText>",
            "colloq": ";lw",
            "plaintext": "Overcomes enemies with high Armor",
            "from": [
                "1036",
                "1036"
            ],
            "into": [
                "3033",
                "3036",
                "6694"
            ],
            "image": {
                "full": "3035.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 1450,
                "sell": 1015
            },
            "tags": [
                "ArmorPenetration",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "depth": 2
        },
        "3036": {
            "name": "Lord Dominik's Regards",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>40%</attention> Armor Penetration<br><attention>25%</attention> Critical Strike Chance</stats><br><br></mainText>",
            "colloq": ";lw",
            "plaintext": "Overcomes enemies with high health and armor",
            "from": [
                "3035",
                "6670"
            ],
            "image": {
                "full": "3036.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 45
            },
            "effect": {
                "Effect1Amount": "0.2"
            },
            "depth": 3
        },
        "3039": {
            "name": "Atma's Reckoning",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><br><li><passive>Big Hands:</passive> While in combat with enemy champions, turrets, or epic monsters, gains <physicalDamage><healing>0.5% - 0 (based on seconds in-combat) max health</healing> as bonus physical damage</physicalDamage>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3105",
                "1037"
            ],
            "image": {
                "full": "3039.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 925,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Damage",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30,
                "FlatPhysicalDamageMod": 25
            },
            "depth": 3
        },
        "3040": {
            "name": "Seraph's Embrace",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>1000</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Awe</passive> Gain Ability Power equal to <scaleMana>2% bonus Mana</scaleMana>.<br><passive>Lifeline</passive> (90(0s))<br>Upon taking damage that would reduce your Health below 30%, gain a <shield>250 + 20% current Mana Shield</shield> for 3s.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3003,
            "inStore": false,
            "image": {
                "full": "3040.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2900,
                "purchasable": false,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatMagicDamageMod": 80
            }
        },
        "3041": {
            "name": "Mejai's Soulstealer",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>100</attention> Health</stats><br><br><passive>Glory</passive><li>Kills and Assists grant stacks, gain Ability Power per stack. Lose some stacks on death.<li>Gain Move Speed if you have at least 10 stacks.</mainText>",
            "colloq": ";",
            "plaintext": "Grants Ability Power for kills and assists",
            "from": [
                "1082"
            ],
            "image": {
                "full": "3041.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1150,
                "purchasable": true,
                "total": 1500,
                "sell": 1050
            },
            "tags": [
                "Health",
                "SpellDamage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 100,
                "FlatMagicDamageMod": 20
            },
            "depth": 2
        },
        "3042": {
            "name": "Muramana",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>860</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain bonus Attack Damage based on Mana.<br><br><passive>Shock</passive><br>Attacks and damaging abilities against champions deal additional physical damage.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3004,
            "inStore": false,
            "image": {
                "full": "3042.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 860,
                "FlatPhysicalDamageMod": 35
            }
        },
        "3044": {
            "name": "Phage",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>200</attention> Health</stats><br><br><passive>Rage</passive><br>Attacking units grants Move Speed.</mainText>",
            "colloq": ";",
            "plaintext": "Attacks and kills give a small burst of speed",
            "from": [
                "1028",
                "1036"
            ],
            "into": [
                "3071",
                "3078",
                "6631",
                "6630"
            ],
            "image": {
                "full": "3044.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Health",
                "Damage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatPhysicalDamageMod": 15
            },
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "2",
                "Effect3Amount": "60",
                "Effect4Amount": "0",
                "Effect5Amount": "0",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "8"
            },
            "depth": 2
        },
        "3046": {
            "name": "Phantom Dancer",
            "description": "<mainText><stats><attention>60%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>12%</attention> Move Speed</stats><br><br><passive>Spectral Waltz</passive><br>Become <status>Ghosted</status>.</mainText>",
            "colloq": ";pd",
            "plaintext": "Move faster while attacking enemies and gain a shield when on low health.",
            "from": [
                "1042",
                "3086",
                "1042"
            ],
            "image": {
                "full": "3046.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.6,
                "PercentMovementSpeedMod": 0.12
            },
            "depth": 3
        },
        "3047": {
            "name": "Plated Steelcaps",
            "description": "<mainText><stats><attention>25</attention> Armor<br><attention>45</attention> Move Speed</stats><br><br><passive>Plating</passive><br>Reduces incoming damage from Attacks by 8%.</mainText>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and reduces incoming basic attack damage",
            "from": [
                "1001",
                "1029"
            ],
            "image": {
                "full": "3047.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Armor",
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45,
                "FlatArmorMod": 25
            },
            "effect": {
                "Effect1Amount": "0.08"
            },
            "depth": 2
        },
        "3050": {
            "name": "Zeke's Convergence",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>25</attention> Armor<br><attention>25</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><passive>Frostfire Tempest</passive> <br>Casting your Ultimate summons a storm around you. The storm deals magic damage to enemy Champions and <keyword>Slows</keyword> them.</mainText>",
            "colloq": ";haroldandkumar",
            "plaintext": "Grants you and your ally bonuses when you cast your ultimate.",
            "from": [
                "3067",
                "1029",
                "1033"
            ],
            "image": {
                "full": "3050.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 25
            },
            "depth": 3
        },
        "3051": {
            "name": "Hearthbound Axe",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>20%</attention> Attack Speed</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1036",
                "1042",
                "1036"
            ],
            "into": [
                "3078",
                "6672",
                "3073",
                "3302"
            ],
            "image": {
                "full": "3051.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage",
                "AttackSpeed"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "PercentAttackSpeedMod": 0.2
            },
            "depth": 2
        },
        "3053": {
            "name": "Sterak's Gage",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>20%</attention> Tenacity</stats><br><br><passive>The Claws that Catch</passive><br>Gain bonus Attack Damage.<br><br><passive>Lifeline</passive> (0s)<br>Upon taking damage that would reduce your Health below 30%, gain a Shield.</mainText>",
            "colloq": ";juggernaut;primal",
            "plaintext": "Shields against large bursts of damage",
            "from": [
                "1037",
                "2021",
                "1028"
            ],
            "image": {
                "full": "3053.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 775,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "Damage",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400
            },
            "depth": 3
        },
        "3057": {
            "name": "Sheen",
            "description": "<mainText><stats><attention>10</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage.</mainText>",
            "colloq": ";",
            "plaintext": "Grants a bonus to next attack after spell cast",
            "from": [
                "2022"
            ],
            "into": [
                "6662",
                "3078",
                "3100",
                "6632"
            ],
            "image": {
                "full": "3057.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "depth": 2
        },
        "3065": {
            "name": "Spirit Visage",
            "description": "<mainText><stats><attention>450</attention> Health<br><attention>60</attention> Magic Resist<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><br><passive>Boundless Vitality</passive><br>Increases all Healing and Shielding effectiveness on you by 25%.</mainText>",
            "colloq": ";sv",
            "plaintext": "Increases Health and healing effects",
            "from": [
                "3211",
                "3067"
            ],
            "image": {
                "full": "3065.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatHPPoolMod": 450
            },
            "depth": 3
        },
        "3066": {
            "name": "Winged Moonplate",
            "description": "<mainText><stats><attention>150</attention> Health<br><attention>5%</attention> Move Speed</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028"
            ],
            "into": [
                "3742",
                "3002",
                "3083",
                "4401"
            ],
            "image": {
                "full": "3066.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Health",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 2
        },
        "3067": {
            "name": "Kindlegem",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases Health and Cooldown Reduction",
            "from": [
                "1028",
                "2022"
            ],
            "into": [
                "3050",
                "6620",
                "6656",
                "3109",
                "4629",
                "2502",
                "6617",
                "3065",
                "3107",
                "3152",
                "3119",
                "3161",
                "3190",
                "3222",
                "4403",
                "4644",
                "6630",
                "6632",
                "8001",
                "8020"
            ],
            "image": {
                "full": "3067.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Health",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "3068": {
            "name": "Sunfire Aegis",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>50</attention> Armor<br><attention>10</attention> Ability Haste</stats><br><br><br><li><passive>Immolate:</passive> Taking or dealing damage causes you to begin dealing <magicDamage> (15 + 1.75% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions) for 3 seconds. Damaging Champions or Epic Monsters with this effect adds a stack, increasing subsequent <passive>Immolate</passive> damage by 10% for 5 seconds (max stacks 6).<br></mainText>",
            "colloq": ";",
            "plaintext": "High armor. Constantly deals damage to nearby enemies. Immobilize enemies to release a wave of damaging flame",
            "from": [
                "6660",
                "1031"
            ],
            "image": {
                "full": "3068.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "Armor",
                "Aura",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 50
            },
            "depth": 3
        },
        "3070": {
            "name": "Tear of the Goddess",
            "description": "<mainText><stats><attention>240</attention> Mana</stats><br><br><br><li><passive>Focus:</passive> Attacks deal additional physical damage to Minions.<li><passive>Manaflow:</passive> Strike a target with an Ability to consume a charge and gain <scaleMana>3 bonus Mana</scaleMana>, doubled if the target is a champion. Grants a maximum of 360 Mana.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText>",
            "colloq": "",
            "plaintext": "Increases maximum Mana as Mana is spent",
            "into": [
                "3003",
                "3004",
                "3119"
            ],
            "image": {
                "full": "3070.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 280
            },
            "tags": [
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 240
            }
        },
        "3071": {
            "name": "Black Cleaver",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>400</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Carve</passive><br>Dealing physical damage to a champion applies a stack of Armor reduction.<br><br><passive>Fervor</passive><br>Dealing physical damage grants Move Speed.</mainText>",
            "colloq": ";bc",
            "plaintext": "Dealing physical damage to enemy champions reduces their Armor",
            "from": [
                "3044",
                "3133",
                "1028"
            ],
            "into": [
                "7037"
            ],
            "image": {
                "full": "3071.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 55
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0.06",
                "Effect3Amount": "6",
                "Effect4Amount": "5",
                "Effect5Amount": "0.3",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "0.01"
            },
            "depth": 3
        },
        "3072": {
            "name": "Bloodthirster",
            "description": "<mainText><stats><attention>80</attention> Attack Damage<br><attention>18%</attention> Life Steal</stats><br><br><passive>Ichorshield</passive><br>Convert healing received from your Lifesteal in excess of your maximum Health into a Shield.</mainText>",
            "colloq": ";bt",
            "plaintext": "Grants Attack Damage, Life Steal and Life Steal now overheals",
            "from": [
                "1038",
                "1037",
                "1053"
            ],
            "image": {
                "full": "3072.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 325,
                "purchasable": true,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 80,
                "PercentLifeStealMod": 0.18
            },
            "depth": 3
        },
        "3073": {
            "name": "Experimental Hexplate",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>300</attention> Health</stats><br><br><passive>Hexcharged</passive><br>Your Ultimate spells gain Ability Haste.<br><br><passive>Overdrive</passive><br>After casting your Ultimate, gain Attack Speed and bonus Move Speed for a short duration.<br></mainText>",
            "colloq": ";",
            "plaintext": "Increases maximum Mana as Mana is spent",
            "from": [
                "2021",
                "3051"
            ],
            "into": [
                "7036"
            ],
            "image": {
                "full": "3073.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 55,
                "PercentAttackSpeedMod": 0.25
            },
            "depth": 3
        },
        "3074": {
            "name": "Ravenous Hydra",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>20</attention> Ability Haste<br><attention>12%</attention> Life Steal</stats><br><br><passive>Cleave</passive><br>Attacks deal physical damage to nearby enemies.<br><br><active>ACTIVE</active> (0s)<br><active>Ravenous Crescent</active><br>Deal physical damage to enemies around you that Lifesteals.</mainText>",
            "colloq": ";",
            "plaintext": "Melee attacks hit nearby enemies, dealing damage and restoring Health",
            "from": [
                "3077",
                "1053",
                "3133"
            ],
            "image": {
                "full": "3074.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "PercentLifeStealMod": 0.12
            },
            "depth": 3
        },
        "3075": {
            "name": "Thornmail",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>70</attention> Armor</stats><br><br><passive>Thorns</passive><br>When struck by an Attack, deal damage to the attacker and apply 40% <keyword>Grievous Wounds</keyword> if they are a champion.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3076",
                "1011"
            ],
            "image": {
                "full": "3075.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 70
            },
            "depth": 3
        },
        "3076": {
            "name": "Bramble Vest",
            "description": "<mainText><stats><attention>30</attention> Armor</stats><br><br><passive>Thorns</passive><br>When struck by an Attack, deal damage to the attacker and apply 40% Grievous Wounds if they are a champion.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1029",
                "1029"
            ],
            "into": [
                "3075"
            ],
            "image": {
                "full": "3076.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 30
            },
            "depth": 2
        },
        "3077": {
            "name": "Tiamat",
            "description": "<mainText><stats><attention>20</attention> Attack Damage</stats><br><br><passive>Cleave</passive><br>Attacks deal physical damage to nearby enemies.<br><br>Item performance differs for melee and ranged users.<br><br><br><active>ACTIVE</active> (0s)<br><active>Crescent</active><br>Deal <physicalDamage>0 physical damage</physicalDamage> to enemies around you.</mainText>",
            "colloq": ";",
            "plaintext": "Melee attacks hit nearby enemies",
            "from": [
                "1036",
                "1036"
            ],
            "into": [
                "3074",
                "3748",
                "6698",
                "6631"
            ],
            "image": {
                "full": "3077.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 1200,
                "sell": 840
            },
            "tags": [
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "depth": 2
        },
        "3078": {
            "name": "Trinity Force",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>33%</attention> Attack Speed<br><attention>300</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with  additional physical damage.<br><br><passive>Quicken</passive><br>Basic attacks grant Move Speed.<br><br></mainText>",
            "colloq": ";triforce;tons of damage",
            "plaintext": "Tons of Damage",
            "from": [
                "3057",
                "3044",
                "3051"
            ],
            "into": [
                "7018"
            ],
            "image": {
                "full": "3078.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 33,
                "purchasable": true,
                "total": 3333,
                "sell": 2333
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 45,
                "PercentAttackSpeedMod": 0.33
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            },
            "depth": 3
        },
        "3082": {
            "name": "Warden's Mail",
            "description": "<mainText><stats><attention>40</attention> Armor</stats><br><br><passive>Rock Solid</passive><br>Reduce incoming damage from Attacks.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1029",
                "1029"
            ],
            "into": [
                "3110",
                "3143"
            ],
            "image": {
                "full": "3082.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "3083": {
            "name": "Warmog's Armor",
            "description": "<mainText><stats><attention>1000</attention> Health<br><attention>5%</attention> Move Speed<br><attention>100%</attention> Base Health Regen</stats><br><br><passive>Warmog's Heart</passive><br>If you have at least 1300 bonus Health, restore max Health per second if damage hasn't been taken within 6 seconds.</mainText>",
            "colloq": ";",
            "plaintext": "Grants massive Health and Health Regen",
            "from": [
                "1011",
                "3066",
                "3801"
            ],
            "image": {
                "full": "3083.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "HealthRegen",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 1000,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "3084": {
            "name": "Heartsteel",
            "description": "<mainText><stats><attention>900</attention> Health<br><attention>200%</attention> Base Health Regen</stats><br><br><passive>Colossal Consumption</passive> (0s) per target<br>Charge up a powerful attack against a champion over time while near them. The charged attack deals bonus physical damage and grants permanent max Health.<br><br><passive>Goliath</passive><br>Gain increased size based on Total Health. </mainText>",
            "colloq": ";",
            "plaintext": "Restores Health on kill or assist",
            "from": [
                "1011",
                "3801",
                "1028"
            ],
            "into": [
                "7025"
            ],
            "image": {
                "full": "3084.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 900
            },
            "depth": 3
        },
        "3085": {
            "name": "Runaan's Hurricane",
            "description": "<mainText><stats><attention>40%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><passive>Wind's Fury</passive><br>When Attacking, bolts are fired at up to 2 enemies near the target. Bolts apply On-Hit effects and can Critically Strike.<br><br><rules>Item is for Ranged champions only.</rules></mainText>",
            "colloq": ";",
            "plaintext": "Ranged attacks fire two bolts at nearby enemies",
            "from": [
                "3086",
                "3144"
            ],
            "image": {
                "full": "3085.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.4,
                "PercentMovementSpeedMod": 0.07
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect3Amount": "2",
                "Effect4Amount": "0",
                "Effect5Amount": "40",
                "Effect6Amount": "1"
            },
            "depth": 3
        },
        "3086": {
            "name": "Zeal",
            "description": "<mainText><stats><attention>15%</attention> Attack Speed<br><attention>15%</attention> Critical Strike Chance<br><attention>5%</attention> Move Speed</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Slight bonuses to Critical Strike Chance, Move Speed and Attack Speed",
            "from": [
                "1018",
                "1042"
            ],
            "into": [
                "3094",
                "3046",
                "3085",
                "4403",
                "6671",
                "6675"
            ],
            "image": {
                "full": "3086.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.15,
                "PercentAttackSpeedMod": 0.15,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 2
        },
        "3087": {
            "name": "Statikk Shiv",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>45%</attention> Attack Speed<br><attention>7%</attention> Move Speed</stats><br><br><passive>Electrospark</passive><br>Killing minions or monsters fires chain lightning, dealing magic damage.<br><br><passive>Electroshock</passive> <br>Takedowns on Champions fire chain lightning that deals even more magic damage.</mainText>",
            "colloq": ";",
            "plaintext": "Movement builds charges that release chain lightning on basic attack",
            "from": [
                "3144",
                "6690",
                "1037"
            ],
            "image": {
                "full": "3087.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 225,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "PercentAttackSpeedMod": 0.45,
                "PercentMovementSpeedMod": 0.07
            },
            "depth": 3
        },
        "3089": {
            "name": "Rabadon's Deathcap",
            "description": "<mainText><stats><attention>140</attention> Ability Power</stats><br><br><passive>Magical Opus</passive><br>Increases your total <scaleAP>Ability Power by 35%</scaleAP>.</mainText>",
            "colloq": ";dc;banksys;hat",
            "plaintext": "Massively increases Ability Power",
            "from": [
                "1058",
                "1058"
            ],
            "into": [
                "7003"
            ],
            "image": {
                "full": "3089.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1100,
                "purchasable": true,
                "total": 3600,
                "sell": 2520
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 140
            },
            "depth": 2
        },
        "3091": {
            "name": "Wit's End",
            "description": "<mainText><stats><attention>55%</attention> Attack Speed<br><attention>50</attention> Magic Resist<br><attention>20%</attention> Tenacity</stats><br><br><passive>Fray</passive><br>Attacks apply magic damage On-Hit.</mainText>",
            "colloq": ";",
            "plaintext": "Resist magic damage and claw your way back to life.",
            "from": [
                "1043",
                "1057",
                "1042"
            ],
            "image": {
                "full": "3091.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "SpellBlock",
                "AttackSpeed",
                "OnHit",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "PercentAttackSpeedMod": 0.55
            },
            "depth": 3
        },
        "3094": {
            "name": "Rapid Firecannon",
            "description": "<mainText><stats><attention>35%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><passive>Sharpshooter</passive><br>Your Energized Attack deals bonus magic damage and gains bonus range.</mainText>",
            "colloq": ";canon;rapidfire;rfc",
            "plaintext": "Movement builds charges that release a sieging fire attack on release",
            "from": [
                "3086",
                "3144"
            ],
            "image": {
                "full": "3094.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.35,
                "PercentMovementSpeedMod": 0.07
            },
            "depth": 3
        },
        "3095": {
            "name": "Stormrazor",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>0%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Bolt</passive><br>Your Energized Attack applies bonus magic damage and grants Move Speed.</mainText>",
            "colloq": ";Windblade",
            "plaintext": "Tremendously empower other Energized effects.",
            "from": [
                "6670",
                "1018",
                "2015"
            ],
            "into": [
                "7040"
            ],
            "image": {
                "full": "3095.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Damage",
                "CriticalStrike"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 65
            },
            "depth": 3
        },
        "3100": {
            "name": "Lich Bane",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>8%</attention> Move Speed<br><attention>15</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional magic damage <OnHit>On-Hit</OnHit>.</mainText>",
            "colloq": ";",
            "plaintext": "Grants a bonus to next attack after spell cast",
            "from": [
                "3057",
                "3113",
                "3145"
            ],
            "image": {
                "full": "3100.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "SpellDamage",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 100,
                "PercentMovementSpeedMod": 0.08
            },
            "depth": 3
        },
        "3102": {
            "name": "Banshee's Veil",
            "description": "<mainText><stats><attention>120</attention> Ability Power<br><attention>50</attention> Magic Resist</stats><br><br><passive>Annul</passive><br>Grants a Spell Shield.<br></mainText>",
            "colloq": ";bv",
            "plaintext": "Periodically blocks enemy abilities",
            "from": [
                "1058",
                "4632"
            ],
            "image": {
                "full": "3102.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "SpellBlock",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatMagicDamageMod": 120
            },
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "45",
                "Effect3Amount": "10",
                "Effect4Amount": "-0.1",
                "Effect5Amount": "8",
                "Effect6Amount": "2"
            },
            "depth": 3
        },
        "3105": {
            "name": "Aegis of the Legion",
            "description": "<mainText><stats><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Grants Armor and Magic Resistance",
            "from": [
                "1033",
                "1029"
            ],
            "into": [
                "3193",
                "3039",
                "6667",
                "4403"
            ],
            "image": {
                "full": "3105.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 1200,
                "sell": 840
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "depth": 2
        },
        "3107": {
            "name": "Redemption",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>15</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen<br><attention>15%</attention> Heal and Shield Power</stats><br><br><active>ACTIVE</active><br><active>Intervention</active><br>Target an area to restore Health to allied champions and deal true damage to enemy champions.</mainText>",
            "colloq": ";",
            "plaintext": "Activate to heal allies and damage enemies in an area",
            "from": [
                "3067",
                "3114"
            ],
            "image": {
                "full": "3107.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 3
        },
        "3108": {
            "name": "Fiendish Codex",
            "description": "<mainText><stats><attention>25</attention> Ability Power<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases Ability Power and Cooldown Reduction",
            "from": [
                "1052",
                "2022"
            ],
            "into": [
                "4633",
                "4636",
                "4628",
                "3115",
                "4629",
                "4005",
                "3003",
                "6616",
                "3118",
                "3128",
                "3137",
                "3165"
            ],
            "image": {
                "full": "3108.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 25
            },
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "depth": 2
        },
        "3109": {
            "name": "Knight's Vow",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>40</attention> Armor<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><br><passive>Sacrifice</passive><br>While your <attention>Worthy</attention> ally is nearby, redirect damage they take to you and heal based on the damage dealt by your <attention>Worthy</attention> ally to Champions.<br><br><br><active>ACTIVE</active> (0s)<br><active>Pledge</active><br>Designate an ally as <attention>Worthy</attention>.</mainText>",
            "colloq": ";",
            "plaintext": "Partner with an ally to protect each other",
            "from": [
                "3067",
                "1031",
                "1006"
            ],
            "image": {
                "full": "3109.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Armor",
                "Aura",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatArmorMod": 40
            },
            "depth": 3
        },
        "3110": {
            "name": "Frozen Heart",
            "description": "<mainText><stats><attention>65</attention> Armor<br><attention>400</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><passive>Winter's Caress</passive><br>Reduce the <attackSpeed>Attack Speed</attackSpeed> of nearby enemies by 20%.<br><br><passive>Rock Solid</passive><br>Reduce incoming damage from Attacks by up to 0, capped at 0% of the Attack's damage.</mainText>",
            "colloq": ";fh",
            "plaintext": "Massively increases Armor and slows enemy basic attacks",
            "from": [
                "3082",
                "3024"
            ],
            "image": {
                "full": "3110.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Armor",
                "Mana",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatArmorMod": 65
            },
            "depth": 3
        },
        "3111": {
            "name": "Mercury's Treads",
            "description": "<mainText><stats><attention>25</attention> Magic Resist<br><attention>45</attention> Move Speed<br><attention>30%</attention> Tenacity</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases Move Speed and reduces duration of disabling effects",
            "from": [
                "1001",
                "1033"
            ],
            "image": {
                "full": "3111.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Boots",
                "SpellBlock",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatMovementSpeedMod": 45
            },
            "depth": 2
        },
        "3112": {
            "name": "Guardian's Orb",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>150</attention> Health</stats><br><br><br><li><passive>Recovery:</passive> Restores Mana over time. If you can't gain mana, restores Health instead.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText>",
            "colloq": ";",
            "plaintext": "Good starting item for mages",
            "image": {
                "full": "3112.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatMagicDamageMod": 50
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3113": {
            "name": "Aether Wisp",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>5%</attention> Move Speed</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases Ability Power and Move Speed",
            "from": [
                "1052"
            ],
            "into": [
                "4646",
                "2065",
                "4629",
                "3100",
                "3504"
            ],
            "image": {
                "full": "3113.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 850,
                "sell": 595
            },
            "tags": [
                "NonbootsMovement",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 30,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 2
        },
        "3114": {
            "name": "Forbidden Idol",
            "description": "<mainText><stats><attention>50%</attention> Base Mana Regen<br><attention>8%</attention> Heal and Shield Power</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases Heal and Shield Power, Mana Regeneration, and Cooldown Reduction",
            "from": [
                "1004"
            ],
            "into": [
                "3011",
                "6616",
                "3107",
                "3222",
                "3504",
                "6621"
            ],
            "image": {
                "full": "3114.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "depth": 2
        },
        "3115": {
            "name": "Nashor's Tooth",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>50%</attention> Attack Speed<br><attention>15</attention> Ability Haste</stats><br><br><passive>Icathian Bite</passive><br>Attacks apply <magicDamage>magic damage</magicDamage> <OnHit>On-Hit</OnHit>.</mainText>",
            "colloq": ";",
            "plaintext": "Increases Attack Speed, Ability Power, and Cooldown Reduction",
            "from": [
                "1043",
                "1026",
                "3108"
            ],
            "into": [
                "7042"
            ],
            "image": {
                "full": "3115.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 90,
                "PercentAttackSpeedMod": 0.5
            },
            "depth": 3
        },
        "3116": {
            "name": "Rylai's Crystal Scepter",
            "description": "<mainText><stats><attention>75</attention> Ability Power<br><attention>400</attention> Health</stats><br><br><passive>Rimefrost</passive><br>Damaging Abilities <keyword>Slow</keyword> enemies by 30% for 1 second.</mainText>",
            "colloq": ";",
            "plaintext": "Abilities slow enemies",
            "from": [
                "1026",
                "1011",
                "1052"
            ],
            "image": {
                "full": "3116.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Slow"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 75
            },
            "effect": {
                "Effect1Amount": "-0.3",
                "Effect2Amount": "-0.3",
                "Effect3Amount": "-0.3",
                "Effect4Amount": "1",
                "Effect5Amount": "1",
                "Effect6Amount": "1"
            },
            "depth": 3
        },
        "3117": {
            "name": "Mobility Boots",
            "description": "<mainText><stats></stats><br><br><attention>25</attention> Move Speed <br>When out of combat for at least 5 seconds, increase this item's effect to <attention>45</attention>.</mainText>",
            "colloq": ";",
            "plaintext": "Greatly enhances Move Speed when out of combat",
            "from": [
                "1001"
            ],
            "inStore": false,
            "image": {
                "full": "3117.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": false,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "0",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "25"
            },
            "depth": 2
        },
        "3118": {
            "name": "Malignance",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>600</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Scorn</passive><br>Your Ultimate spells gain Ability Haste.<br><br><passive>Hatefog</passive><br>Damaging a champion with your Ultimate burns the ground beneath them, dealing damage and reducing their Magic Resist. <br></mainText>",
            "colloq": ";",
            "plaintext": "Partner with an ally to protect each other",
            "from": [
                "3802",
                "3108"
            ],
            "into": [
                "7004"
            ],
            "image": {
                "full": "3118.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 80
            },
            "depth": 3
        },
        "3119": {
            "name": "Winter's Approach",
            "description": "<mainText><stats><attention>550</attention> Health<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain bonus <scaleHealth>Health equal to 0</scaleHealth>.<br><br><passive>Manaflow</passive><br>Strike a target with an Ability or Attack to consume a charge and gain  bonus Mana. Grants a maximum of Mana at which point this item transforms into <rarityLegendary>Fimbulwinter</rarityLegendary>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3070",
                "1011",
                "3067"
            ],
            "image": {
                "full": "3119.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 2400,
                "sell": 1680
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 500,
                "FlatHPPoolMod": 550
            },
            "depth": 3
        },
        "3121": {
            "name": "Fimbulwinter",
            "description": "<mainText><stats><attention>550</attention> Health<br><attention>860</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain bonus <scaleHealth>Health equal to 0</scaleHealth>.<br><br><passive>Everlasting</passive> (0s)<br><status>Immobilizing</status> or <status>Slowing</status> (Melee only) an enemy champion grants a Shield for 3 seconds, absorbing <scaleMana>0 + 4.5% current Mana</scaleMana> damage. The Shield is increased by <attention>80%</attention> if more than one enemy is nearby.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3119,
            "inStore": false,
            "image": {
                "full": "3121.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2400,
                "purchasable": false,
                "total": 2400,
                "sell": 1680
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 860,
                "FlatHPPoolMod": 550
            }
        },
        "3123": {
            "name": "Executioner's Calling",
            "description": "<mainText><stats><attention>15</attention> Attack Damage</stats><br><br><passive>Grievous Wounds</passive><br>Dealing physical damage applies <keyword>40% Grievous Wounds</keyword> to champions for 3 seconds.</mainText>",
            "colloq": ";grievous",
            "plaintext": "Overcomes enemies with high health gain",
            "from": [
                "1036"
            ],
            "into": [
                "3033",
                "6609"
            ],
            "image": {
                "full": "3123.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15
            },
            "effect": {
                "Effect1Amount": "3"
            },
            "depth": 2
        },
        "3124": {
            "name": "Guinsoo's Rageblade",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>35</attention> Ability Power<br><attention>25%</attention> Attack Speed</stats><br><br><passive>Wrath</passive><br>Attacks apply <magicDamage>30 magic damage <OnHit>On-Hit</OnHit></magicDamage>.<br><br><passive>Seething Strike</passive><br>Basic attacks grant <attackSpeed>8% Attack Speed</attackSpeed>, stacking up to 4 times for a maximum of <attackSpeed>0 Attack Speed</attackSpeed>. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1052",
                "1043",
                "1037"
            ],
            "into": [
                "7030"
            ],
            "image": {
                "full": "3124.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1025,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 35,
                "FlatPhysicalDamageMod": 35,
                "PercentAttackSpeedMod": 0.25
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "4",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            },
            "depth": 3
        },
        "3128": {
            "name": "Deathfire Grasp",
            "description": "<mainText><stats><attention>120</attention> Ability Power<br><attention>10</attention> Ability Haste</stats><br><br><br><br><active>Active -</active> <active>The Silence:</active> Deal magic damage equal to <magicDamage>15% of the Target's Max Health</magicDamage>, and then amplify damage they take by 15% for 4 seconds (90(0s)).</mainText>",
            "colloq": ";dfg",
            "plaintext": "Activate to increase all magic damage dealt to an enemy champion",
            "from": [
                "1058",
                "3108"
            ],
            "image": {
                "full": "3128.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 120
            },
            "depth": 3
        },
        "3131": {
            "name": "Sword of the Divine",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>18</attention> Lethality</stats><br><br><br><br><active>Active -</active> <active>Divine Blessing:</active> Grants <attackSpeed>100% Attack Speed</attackSpeed> and 100% Critical Strike Chance for 3 seconds or 3 basic attacks (90(0s)).</mainText>",
            "colloq": ";sotd;lethality",
            "plaintext": "Activate to gain 100% Critical Strike Chance for a short duration",
            "from": [
                "3134",
                "1042",
                "1042"
            ],
            "image": {
                "full": "3131.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2400,
                "sell": 1680
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.25
            },
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "3",
                "Effect3Amount": "3",
                "Effect4Amount": "1",
                "Effect5Amount": "90"
            },
            "depth": 3
        },
        "3133": {
            "name": "Caulfield's Warhammer",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Attack Damage and Cooldown Reduction",
            "stacks": 0,
            "from": [
                "1036",
                "2022",
                "1036"
            ],
            "into": [
                "3071",
                "6333",
                "126697",
                "3156",
                "6693",
                "6697",
                "4402",
                "3004",
                "3508",
                "3074",
                "3161",
                "3179",
                "6691",
                "6609",
                "6610",
                "6632",
                "6692",
                "6696"
            ],
            "image": {
                "full": "3133.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "depth": 2
        },
        "3134": {
            "name": "Serrated Dirk",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>10</attention> Lethality</stats><br><br></mainText>",
            "colloq": ";lethality",
            "plaintext": "Increases Attack Damage and Lethality",
            "stacks": 0,
            "from": [
                "1036",
                "1036"
            ],
            "into": [
                "3142",
                "126697",
                "6701",
                "6693",
                "6697",
                "3131",
                "4004",
                "3814",
                "3179",
                "6691",
                "6676",
                "6695"
            ],
            "image": {
                "full": "3134.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "depth": 2
        },
        "3135": {
            "name": "Void Staff",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>40%</attention> Magic Penetration</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Increases magic damage",
            "from": [
                "4630",
                "1026"
            ],
            "image": {
                "full": "3135.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1050,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "3137": {
            "name": "Cryptbloom",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>30%</attention> Magic Penetration<br><attention>15</attention> Ability Haste</stats><br><br><passive>Life from Death</passive><br>Whenever you get a takedown on an enemy champion, create a nova on their location that heals allies.</mainText>",
            "colloq": ";",
            "plaintext": "Activate to remove all debuffs and grant massive Move Speed",
            "from": [
                "4630",
                "3108"
            ],
            "image": {
                "full": "3137.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 2850,
                "sell": 1995
            },
            "tags": [
                "SpellDamage",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 70
            },
            "depth": 3
        },
        "3139": {
            "name": "Mercurial Scimitar",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>50</attention> Magic Resist<br><attention>10%</attention> Life Steal</stats><br><br><br><br><active>ACTIVE</active><br><active>Quicksilver</active><br>Removes all crowd control debuffs (excluding <keyword>Airborne</keyword>) and grants Move Speed.</mainText>",
            "colloq": ";",
            "plaintext": "Activate to remove all crowd control debuffs and grant massive Move Speed",
            "from": [
                "3140",
                "1037",
                "1053"
            ],
            "image": {
                "full": "3139.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 225,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "Active",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatPhysicalDamageMod": 40,
                "PercentLifeStealMod": 0.1
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1.5",
                "Effect3Amount": "90"
            },
            "depth": 3
        },
        "3140": {
            "name": "Quicksilver Sash",
            "description": "<mainText><stats><attention>30</attention> Magic Resist</stats><br><br><active>ACTIVE</active> (0s)<br><active>Quicksilver</active><br>Removes all crowd control debuffs (excluding <keyword>Airborne</keyword>).</mainText>",
            "colloq": ";qss",
            "plaintext": "Activate to remove all crowd control debuffs",
            "from": [
                "1033"
            ],
            "into": [
                "3139",
                "6035"
            ],
            "image": {
                "full": "3140.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Active",
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30
            },
            "depth": 2
        },
        "3142": {
            "name": "Youmuu's Ghostblade",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality</stats><br><br><passive>Haunt</passive> <br>Gain <speed>Move Speed</speed> while out of combat.<br><br><br><active>ACTIVE</active> (0s)<br><active>Wraith Step</active><br>Gain <speed>Move Speed</speed> and <keyword>Ghosting</keyword>.</mainText>",
            "colloq": ";lethality",
            "plaintext": "Activate to greatly increase Move Speed",
            "from": [
                "3134",
                "6690"
            ],
            "into": [
                "7029"
            ],
            "image": {
                "full": "3142.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "effect": {
                "Effect1Amount": "45",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "6",
                "Effect6Amount": "40"
            },
            "depth": 3
        },
        "3143": {
            "name": "Randuin's Omen",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>75</attention> Armor</stats><br><br><passive>Critical Resilience</passive><br>Critical Strikes deal less damage to you.<br><br><active>ACTIVE</active><br><active>Humility</active><br><keyword>Slow</keyword> nearby enemies.</mainText>",
            "colloq": ";",
            "plaintext": "Greatly increases defenses, activate to slow nearby enemies",
            "from": [
                "3082",
                "1011"
            ],
            "image": {
                "full": "3143.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "Armor",
                "Active",
                "Slow"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 75
            },
            "depth": 3
        },
        "3144": {
            "name": "Scout's Slingshot",
            "description": "<mainText><stats><attention>20%</attention> Attack Speed</stats><br><br><passive>Bullseye</passive> <br>Damaging a champion deals additional magic damage. Attacks reduce this cooldown.</mainText>",
            "colloq": ";",
            "plaintext": "Activate to deal magic damage and slow target champion",
            "from": [
                "1042",
                "1042"
            ],
            "into": [
                "3094",
                "3087",
                "3085"
            ],
            "image": {
                "full": "3144.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "AttackSpeed"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.2
            },
            "depth": 2
        },
        "3145": {
            "name": "Hextech Alternator",
            "description": "<mainText><stats><attention>45</attention> Ability Power</stats><br><br><passive>Revved</passive><br>Damaging a champion deals additional damage.</mainText>",
            "colloq": ";",
            "plaintext": "Increases Ability Power. Deal bonus magic damage on attack periodically.",
            "from": [
                "1052",
                "1052"
            ],
            "into": [
                "4646",
                "4636",
                "4628",
                "4645",
                "6655",
                "3100",
                "3152"
            ],
            "image": {
                "full": "3145.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 45
            },
            "depth": 2
        },
        "3146": {
            "name": "Hextech Gunblade",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>40</attention> Attack Damage<br><attention>15%</attention> Omnivamp</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Lightning Bolt</active><br>Shocks the target enemy champion, dealing 0 magic damage and slowing them by 40% for 2 seconds.</mainText>",
            "colloq": ";",
            "plaintext": "Increases Attack Damage and Ability Power, activate to slow a target",
            "from": [
                "1038",
                "1058"
            ],
            "image": {
                "full": "3146.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "SpellDamage",
                "Active",
                "SpellVamp"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 80,
                "FlatPhysicalDamageMod": 40
            },
            "depth": 2
        },
        "3147": {
            "name": "Haunting Guise",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>200</attention> Health</stats><br><br><passive>Madness</passive><br>For each second in combat with enemy champions, deal increased damage.</mainText>",
            "colloq": ";lethality",
            "plaintext": "Deals additional physical damage when ambushing enemies",
            "from": [
                "1052",
                "1028"
            ],
            "into": [
                "4633",
                "6653"
            ],
            "image": {
                "full": "3147.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 30
            },
            "depth": 2
        },
        "3152": {
            "name": "Hextech Rocketbelt",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>300</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><active>ACTIVE</active>}<br><active>Supersonic</active><br>Dash in target direction, unleashing an arc of magic missiles that deal magic damage.</mainText>",
            "colloq": "rocket belt;",
            "plaintext": "Activate to dash forward and unleash a fiery explosion",
            "from": [
                "3145",
                "3067"
            ],
            "into": [
                "7011"
            ],
            "image": {
                "full": "3152.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 70
            },
            "depth": 3
        },
        "3153": {
            "name": "Blade of The Ruined King",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>10%</attention> Life Steal</stats><br><br><passive>Mist's Edge</passive><br>Attacks apply an additional enemy current Health physical damage <OnHit>On-Hit</OnHit>.<br><br><passive>Clawing Shadows</passive><br>Attacking a champion 3 times Slows them.</mainText>",
            "colloq": ";brk;bork;bork;bork;botrk",
            "plaintext": "Deals damage based on target's Health, can steal Move Speed",
            "from": [
                "1053",
                "1043",
                "1037"
            ],
            "image": {
                "full": "3153.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 725,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "LifeSteal",
                "Slow",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "PercentAttackSpeedMod": 0.3,
                "PercentLifeStealMod": 0.1
            },
            "depth": 3
        },
        "3155": {
            "name": "Hexdrinker",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>30</attention> Magic Resist</stats><br><br><passive>Lifeline</passive><br>Taking magic damage while on low Health grants a magic damage Shield.</mainText>",
            "colloq": ";",
            "plaintext": "Increases Attack Damage and Magic Resist",
            "stacks": 0,
            "from": [
                "1036",
                "1033",
                "1036"
            ],
            "into": [
                "3156"
            ],
            "image": {
                "full": "3155.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage",
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatPhysicalDamageMod": 25
            },
            "depth": 2
        },
        "3156": {
            "name": "Maw of Malmortius",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>15</attention> Ability Haste<br><attention>40</attention> Magic Resist</stats><br><br><passive>Lifeline</passive><br>Upon taking magic damage that would reduce Health below 30%, gain a magic damage Shield. When <passive>Lifeline</passive> triggers, gain Omnivamp until the end of combat.</mainText>",
            "colloq": ";",
            "plaintext": "Grants bonus Attack Damage when Health is low",
            "stacks": 0,
            "from": [
                "3155",
                "3133"
            ],
            "image": {
                "full": "3156.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatPhysicalDamageMod": 70
            },
            "depth": 3
        },
        "3157": {
            "name": "Zhonya's Hourglass",
            "description": "<mainText><stats><attention>120</attention> Ability Power<br><attention>50</attention> Armor</stats><br><br><active>Time Stop</active><br>Enter <keyword>Stasis</keyword> for 2.5 seconds.</mainText>",
            "colloq": ";zhg;zonyas",
            "plaintext": "Activate to become invincible but unable to take actions",
            "from": [
                "1058",
                "2420"
            ],
            "image": {
                "full": "3157.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3250,
                "sell": 2275
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 120,
                "FlatArmorMod": 50
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "120"
            },
            "depth": 3
        },
        "3158": {
            "name": "Ionian Boots of Lucidity",
            "description": "<mainText><stats><attention>15</attention> Ability Haste<br><attention>45</attention> Move Speed</stats><br><br><passive>Ionian Insight</passive><br>Gain 12 Summoner Spell Haste.<br><br></mainText>",
            "colloq": "",
            "plaintext": "Increases Move Speed and Cooldown Reduction",
            "from": [
                "1001",
                "2022"
            ],
            "image": {
                "full": "3158.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Boots",
                "CooldownReduction"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "depth": 2
        },
        "3161": {
            "name": "Spear of Shojin",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>300</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Dragonforce</passive> <br>Your Non-Ultimate spells gain Ability Haste.<br><br><passive>Focused Will</passive> <br>Spell hits grant stacks. Your spells deal increased damage for each stack.</mainText>",
            "colloq": ";",
            "plaintext": "Reduce damage taken from champions by a flat amount. Attack while near multiple enemy champions to increase this amount for a short time.",
            "from": [
                "3067",
                "3133",
                "1037"
            ],
            "into": [
                "7038"
            ],
            "image": {
                "full": "3161.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 325,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "Damage",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "3165": {
            "name": "Morellonomicon",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>15</attention> Ability Haste</stats><br><br><passive>Grievous Wounds</passive><br>Dealing magic damage applies <keyword>40% Grievous Wounds</keyword> to enemy champions for 3 seconds.</mainText>",
            "colloq": ";nmst;grievous",
            "plaintext": "Increases magic damage",
            "from": [
                "3916",
                "3108"
            ],
            "image": {
                "full": "3165.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "3172": {
            "name": "Zephyr",
            "description": "<mainText><stats><attention>45%</attention> Attack Speed<br><attention>45</attention> Move Speed</stats><br><br><passive>Like the Wind</passive><br>Gain <speed>5% Move Speed</speed> <OnHit>On-Hit</OnHit> for 6 seconds, stacking up to <speed>15% Move Speed</speed>.</mainText>",
            "colloq": ";",
            "plaintext": "Mobility and Tenacity",
            "from": [
                "3006"
            ],
            "image": {
                "full": "3172.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2000,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45,
                "PercentAttackSpeedMod": 0.45
            },
            "depth": 3
        },
        "3177": {
            "name": "Guardian's Blade",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>150</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText>",
            "colloq": ";dblade",
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "3177.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "Damage",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatPhysicalDamageMod": 30
            },
            "effect": {
                "Effect1Amount": "10"
            }
        },
        "3179": {
            "name": "Umbral Glaive",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>15</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Blackout</passive><br>Reveal traps and disable Wards around you. Your Attacks do increased damage to Wards.</mainText>",
            "colloq": ";lethality",
            "plaintext": "Provides trap and ward detection periodically",
            "from": [
                "3134",
                "3133"
            ],
            "image": {
                "full": "3179.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Damage",
                "Vision",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50
            },
            "effect": {
                "Effect1Amount": "10",
                "Effect2Amount": "8",
                "Effect3Amount": "50"
            },
            "depth": 3
        },
        "3181": {
            "name": "Hullbreaker",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>350</attention> Health<br><attention>5%</attention> Move Speed</stats><br><br><passive>Skipper</passive><br>Every fifth Attack against Champions and Epic Monsters deals bonus physical damage, increased against Structures.<br><br><passive>Boarding Party</passive><br>Nearby allied Siege and Super Minions gain Armor and Magic Resist. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2021",
                "6690",
                "1037"
            ],
            "image": {
                "full": "3181.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 75,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatPhysicalDamageMod": 65,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "3184": {
            "name": "Guardian's Hammer",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>150</attention> Health<br><attention>5%</attention> Life Steal</stats><br><br><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText>",
            "colloq": ";dblade",
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "3184.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatPhysicalDamageMod": 25,
                "PercentLifeStealMod": 0.05
            }
        },
        "3190": {
            "name": "Locket of the Iron Solari",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><active>Active -</active><br><active>Devotion</active><br>Grant nearby allies a <shield>Shield</shield>, decaying over time.</mainText>",
            "colloq": ";",
            "plaintext": "Activate to shield nearby allies from damage",
            "from": [
                "3067",
                "1029",
                "1033"
            ],
            "into": [
                "7019"
            ],
            "image": {
                "full": "3190.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "Active",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatHPPoolMod": 200,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "3193": {
            "name": "Gargoyle Stoneplate",
            "description": "<mainText><stats><attention>60</attention> Armor<br><attention>60</attention> Magic Resist<br><attention>15</attention> Ability Haste</stats><br><br><br><li><passive>Fortify:</passive> Taking damage from a champion grants a stack of <scaleArmor>bonus Armor</scaleArmor> and <scaleMR>bonus Magic Resist</scaleMR>.<br><br><rules>Max 5 stacks; 1 per champion.</rules><br><br><active>Active -</active> <active>Unbreakable:</active> Gain a Shield that decays and grow in size.</mainText>",
            "colloq": ";",
            "plaintext": "Greatly increases defense near multiple enemies.",
            "from": [
                "1029",
                "3105",
                "1033"
            ],
            "inStore": false,
            "image": {
                "full": "3193.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatArmorMod": 60
            },
            "depth": 3
        },
        "3211": {
            "name": "Spectre's Cowl",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>25</attention> Magic Resist<br><attention>100%</attention> Base Health Regen</stats><br><br></mainText>",
            "colloq": ";hat",
            "plaintext": "Improves defense and grants regeneration upon being damaged",
            "from": [
                "1028",
                "1033",
                "1006"
            ],
            "into": [
                "2504",
                "3065",
                "6664"
            ],
            "image": {
                "full": "3211.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 1250,
                "sell": 875
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "3222": {
            "name": "Mikael's Blessing",
            "description": "<mainText><stats><attention>250</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>12%</attention> Heal and Shield Power<br><attention>15</attention> Ability Haste</stats><br><br><active>ACTIVE</active><br><active>Purify</active> (0s)<br>Remove all crowd control debuffs from an ally champion and restore Health.</mainText>",
            "colloq": ";",
            "plaintext": "Activate to remove all disabling effects from an allied champion",
            "from": [
                "3067",
                "3114"
            ],
            "image": {
                "full": "3222.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "Tenacity",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250
            },
            "depth": 3
        },
        "3302": {
            "name": "Terminus",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>35%</attention> Attack Speed</stats><br><br><passive>Shadow</passive><br>Attacks apply magic damage <OnHit>On-Hit</OnHit>.<br><br><passive>Juxtaposition</passive><br>Alternate between <keywordMajor>Light</keywordMajor> and <keywordMajor>Dark</keywordMajor> on-hits when attacking champions: <li><keywordMajor>Light</keywordMajor> attacks grant <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>.<li><keywordMajor>Dark</keywordMajor> attacks grant <scaleArmor>Armor Penetration</scaleArmor> and <scaleMR>Magic Penetration</scaleMR>.</mainText>",
            "colloq": ";",
            "plaintext": "Kill minions periodically to heal and grant gold to a nearby ally",
            "from": [
                "3051",
                "1043"
            ],
            "image": {
                "full": "3302.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "PercentAttackSpeedMod": 0.35
            },
            "depth": 3
        },
        "3330": {
            "name": "Scarecrow Effigy",
            "description": "<mainText><stats></stats><br><br><br><active>Active - Trinket:</active> Places an effigy that appears exactly as Fiddlesticks does to enemies. Stores up to a maximum of 2 charges.<br><br>Enemy champions approaching an effigy will activate it, causing the effigy to fake a random action, after which the effigy will fall apart.</mainText>",
            "colloq": "yellow; totem; trinket",
            "plaintext": "Periodically place a Stealth Ward",
            "requiredChampion": "FiddleSticks",
            "image": {
                "full": "3330.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "90",
                "Effect2Amount": "240",
                "Effect3Amount": "120",
                "Effect4Amount": "120",
                "Effect5Amount": "2",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120"
            }
        },
        "3340": {
            "name": "Stealth Ward",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Ward</active><br>Places an <keyword>Invisible</keyword> Stealth Ward that grants vision.<br><br>Holds  2 charges, generating a charge periodically. </mainText>",
            "colloq": "yellow; totem; trinket",
            "plaintext": "Periodically place a Stealth Ward",
            "image": {
                "full": "3340.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "90",
                "Effect2Amount": "210",
                "Effect3Amount": "120",
                "Effect4Amount": "120",
                "Effect5Amount": "2",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120"
            }
        },
        "3348": {
            "name": "Arcane Sweeper",
            "description": "<mainText><stats></stats><br><br><mainText><active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting <font color='#ee91d7'>True Sight</font> of traps in the area for 3 seconds (30 second cooldown).</mainText></mainText>",
            "colloq": ";",
            "plaintext": "Activate to reveal a nearby area of the map",
            "inStore": false,
            "image": {
                "full": "3348.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "3349": {
            "name": "Lucent Singularity",
            "description": "<mainText><stats></stats><br><br>Lucent Singularity</mainText>",
            "colloq": "",
            "plaintext": "Lux creates a light zone that <status>Slows</status> by @Slow@ and reveals the area. After 5 seconds or on <recast>Recasting</recast> this Ability, it detonates, dealing <magicDamage>@TotalDamage@ magic damage</magicDamage> and <status>Slowing</status> for an additional @SlowLingerDuration@ second.",
            "inStore": false,
            "image": {
                "full": "3349.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {}
        },
        "3363": {
            "name": "Farsight Alteration",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Scry</active><br>Reveals a distant area and leaves a Ward that expires upon spotting an enemy champion.</mainText>",
            "colloq": "blue; totem; trinket",
            "plaintext": "Grants increased range and reveals the targetted area",
            "image": {
                "full": "3363.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "4000",
                "Effect2Amount": "2",
                "Effect3Amount": "5",
                "Effect4Amount": "198",
                "Effect5Amount": "60",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect9Amount": "6.5",
                "Effect10Amount": "198",
                "Effect11Amount": "99",
                "Effect12Amount": "60",
                "Effect13Amount": "180",
                "Effect14Amount": "10",
                "Effect15Amount": "45"
            }
        },
        "3364": {
            "name": "Oracle Lens",
            "description": "<mainText><stats></stats><br><br><active>ACTIVE</active><br><active>Sweep</active><br>Reveals enemy Stealth Wards and traps around you for 6 seconds.<br><br>Holds 2 charges, generating a new charge periodically.</mainText>",
            "colloq": "red; lens; trinket",
            "plaintext": "Disables nearby invisible wards and traps for a duration",
            "image": {
                "full": "3364.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "10",
                "Effect3Amount": "120",
                "Effect4Amount": "60",
                "Effect5Amount": "0",
                "Effect6Amount": "1",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect9Amount": "60"
            }
        },
        "3400": {
            "name": "Your Cut",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Gain 0 gold.<br><br><rules>Bonus gold given to an ally when Pyke executes an enemy champion using his Ultimate Ability. If no ally was involved in the kill, Pyke gets to keep the Cut!</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "hideFromAll": true,
            "image": {
                "full": "3400.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable",
                "GoldPer"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "3430": {
            "name": "Rite Of Ruin",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>15</attention> Ability Haste<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Wrath and Ruin</passive><br>On spell cast, gain 2.5% critical chance for 6 seconds, stacking up to 20%.<br><br><passive>Salvage the Wreckage</passive><br>Your spells have a chance equal to your crit chance to grant you or your targeted ally a shield for 0 for 3s.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "3430.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "CriticalStrike",
                "SpellDamage",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 50,
                "FlatCritChanceMod": 0.25
            }
        },
        "3504": {
            "name": "Ardent Censer",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>8%</attention> Heal and Shield Power<br><attention>125%</attention> Base Mana Regen<br><attention>8%</attention> Move Speed</stats><br><br><passive>Sanctify</passive><br>Healing or Shielding an ally enhances you both for 6 seconds, granting <attackSpeed>25%</attackSpeed> Attack Speed and <magicDamage>20 magic damage</magicDamage> <OnHit>On-Hit</OnHit>.</mainText>",
            "colloq": "",
            "plaintext": "Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.",
            "from": [
                "3113",
                "3114"
            ],
            "image": {
                "full": "3504.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "ManaRegen",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 50,
                "PercentMovementSpeedMod": 0.08
            },
            "depth": 3
        },
        "3508": {
            "name": "Essence Reaver",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>25</attention> Ability Haste<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Essence Drain</passive><br>Basic attacks grant <scaleMana> Mana</scaleMana> <OnHit>On-Hit</OnHit>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1038",
                "3133",
                "1018"
            ],
            "image": {
                "full": "3508.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ManaRegen",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 70
            },
            "depth": 3
        },
        "3513": {
            "name": "Eye of the Herald",
            "description": "<mainText><stats></stats><br><br><br><br><active>Active - Consume:</active> Crush the Eye of the Herald, begining the ritual to summon Rift Herald. You may click the Rift Herald after it has summoned to control how it charges. This control effect can be done once when it is summoned, and once each time a nearby enemy structure dies.</mainText>",
            "colloq": ";Herald's Eye",
            "plaintext": "Eye of the Herald - a Gift of the Void.",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "3513.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Trinket",
                "Active"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {},
            "effect": {
                "Effect1Amount": "240",
                "Effect2Amount": "1",
                "Effect3Amount": "20",
                "Effect4Amount": "180"
            }
        },
        "3599": {
            "name": "Kalista's Black Spear",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.</mainText>",
            "colloq": ";spear",
            "plaintext": "Kalista's spear that binds an Oathsworn Ally.",
            "requiredChampion": "Kalista",
            "image": {
                "full": "3599.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "3600": {
            "name": "Kalista's Black Spear",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.<br><br><rules>Required to use <attention>Kalista's</attention> Ultimate Ability.</rules></mainText>",
            "colloq": ";spear",
            "plaintext": "Kalista's spear that binds an Oathsworn Ally.",
            "requiredChampion": "Sylas",
            "image": {
                "full": "3600.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "3742": {
            "name": "Dead Man's Plate",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>45</attention> Armor<br><attention>5%</attention> Move Speed</stats><br><br><passive>Shipwrecker</passive><br>While moving, build up bonus Move Speed. Your next Attack discharges built up Move Speed to deal physical damage.<br><br><passive>Unsinkable</passive><br>The strength of movement slowing effects is reduced.</mainText>",
            "colloq": ";juggernaut;dreadnought",
            "plaintext": "Build momentum as you move around then smash into enemies.",
            "from": [
                "3066",
                "1028",
                "1031"
            ],
            "image": {
                "full": "3742.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Health",
                "Armor",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 45,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "3748": {
            "name": "Titanic Hydra",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>550</attention> Health</stats><br><br><passive>Cleave</passive><br>Attacks apply an additional <physicalDamage>0 physical damage</physicalDamage> <OnHit>On-Hit</OnHit> and deal <physicalDamage>0 physical damage</physicalDamage> to enemies behind the target.<br><br><active>ACTIVE</active><br><active>Titanic Crescent</active><br>On your next attack, <passive>Cleave</passive> will deal bonus physical damage to your target and in a nearby shockwave.</mainText>",
            "colloq": ";juggernaut",
            "plaintext": "Deals area of effect damage based on owner's health",
            "from": [
                "3077",
                "2021",
                "1028"
            ],
            "image": {
                "full": "3748.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatPhysicalDamageMod": 50
            },
            "depth": 3
        },
        "3801": {
            "name": "Crystalline Bracer",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>100%</attention> Base Health Regen</stats><br><br></mainText>",
            "colloq": ";",
            "plaintext": "Grants Health and Health Regen",
            "from": [
                "1028",
                "1006"
            ],
            "into": [
                "3084",
                "3083"
            ],
            "image": {
                "full": "3801.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "3802": {
            "name": "Lost Chapter",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>300</attention> Mana<br><attention>10</attention> Ability Haste</stats><br><br><passive>Enlighten</passive><br>Upon levelling up, restores <scaleMana>20% max Mana</scaleMana> over 3 seconds.</mainText>",
            "colloq": ";",
            "plaintext": "Restores Mana upon levelling up.",
            "from": [
                "1052",
                "1027",
                "2022"
            ],
            "into": [
                "6656",
                "3003",
                "6655",
                "2503",
                "3118",
                "4644"
            ],
            "image": {
                "full": "3802.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 1200,
                "sell": 840
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatMagicDamageMod": 40
            },
            "depth": 2
        },
        "3803": {
            "name": "Catalyst of Aeons",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>300</attention> Mana</stats><br><br><passive>Eternity</passive><br>Taking damage from champions restores Mana.Casting an ability heals over time.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "1027"
            ],
            "into": [
                "4402",
                "6657"
            ],
            "image": {
                "full": "3803.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 350
            },
            "depth": 2
        },
        "3814": {
            "name": "Edge of Night",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>15</attention> Lethality<br><attention>250</attention> Health</stats><br><br><passive>Annul</passive><br>Gain a Spell Shield.</mainText>",
            "colloq": ";lethality",
            "plaintext": "Periodically blocks enemy abilities",
            "stacks": 0,
            "from": [
                "3134",
                "2021"
            ],
            "image": {
                "full": "3814.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatPhysicalDamageMod": 50
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "40"
            },
            "depth": 3
        },
        "3850": {
            "name": "Spellthief's Edge",
            "description": "<mainText><stats><attention>10</attention> Ability Power<br><attention>25</attention> Health<br><attention>25%</attention> Base Mana Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><br><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 36 seconds.<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Frostfang</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if anyone on your team with this item kill excessive numbers of them.</rules></mainText>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by damaging enemy champions",
            "image": {
                "full": "3850.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 25,
                "FlatMagicDamageMod": 10
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "500",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3851": {
            "name": "Frostfang",
            "description": "<mainText><stats><attention>15</attention> Ability Power<br><attention>70</attention> Health<br><attention>50%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Shard of True Ice</rarityLegendary>.<br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3850,
            "inStore": false,
            "image": {
                "full": "3851.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 70,
                "FlatMagicDamageMod": 15
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "1000",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3853": {
            "name": "Shard of True Ice",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>75</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3851,
            "inStore": false,
            "image": {
                "full": "3853.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 75,
                "FlatMagicDamageMod": 40
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3854": {
            "name": "Steel Shoulderguards",
            "description": "<mainText><stats><attention>4</attention> Attack Damage<br><attention>50</attention> Health<br><attention>50%</attention> Base Health Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below (50% for Melee Users | 30% for Ranged Users) of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Runesteel Spaulders</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if anyone on your team with this item kill excessive numbers of them.</rules></mainText>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by executing minions alongside allies",
            "image": {
                "full": "3854.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 50,
                "FlatPhysicalDamageMod": 4
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.3",
                "Effect4Amount": "500",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3855": {
            "name": "Runesteel Spaulders",
            "description": "<mainText><stats><attention>6</attention> Attack Damage<br><attention>100</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below 50% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Bulwark of the Mountain</rarityLegendary>. <br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3854,
            "inStore": false,
            "image": {
                "full": "3855.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 100,
                "FlatPhysicalDamageMod": 6
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.5",
                "Effect4Amount": "1000",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3857": {
            "name": "Pauldrons of Whiterock",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>250</attention> Health<br><attention>100%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3855,
            "inStore": false,
            "image": {
                "full": "3857.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatPhysicalDamageMod": 15
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3858": {
            "name": "Relic Shield",
            "description": "<mainText><stats><attention>7</attention> Ability Power<br><attention>50</attention> Health<br><attention>50%</attention> Base Health Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below (50% for Melee Users | 30% for Ranged Users) of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Targon's Buckler</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if anyone on your team with this item kill excessive numbers of them.</rules></mainText>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by executing minions alongside allies",
            "image": {
                "full": "3858.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 50,
                "FlatMagicDamageMod": 7
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.3",
                "Effect4Amount": "500",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3859": {
            "name": "Targon's Buckler",
            "description": "<mainText><stats><attention>10</attention> Ability Power<br><attention>100</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below 50% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Bulwark of the Mountain</rarityLegendary>. <br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3858,
            "inStore": false,
            "image": {
                "full": "3859.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 100,
                "FlatMagicDamageMod": 10
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.5",
                "Effect4Amount": "1000",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3860": {
            "name": "Bulwark of the Mountain",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>250</attention> Health<br><attention>100%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3859,
            "inStore": false,
            "image": {
                "full": "3860.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 20
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3862": {
            "name": "Spectral Sickle",
            "description": "<mainText><stats><attention>6</attention> Attack Damage<br><attention>25</attention> Health<br><attention>25%</attention> Base Mana Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><br><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Harrowing Crescent</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if anyone on your team with this item kill excessive numbers of them.</rules></mainText>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by damaging enemy champions",
            "image": {
                "full": "3862.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "Damage",
                "ManaRegen",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 25,
                "FlatPhysicalDamageMod": 6
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "500",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3863": {
            "name": "Harrowing Crescent",
            "description": "<mainText><stats><attention>10</attention> Attack Damage<br><attention>60</attention> Health<br><attention>50%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 36 seconds.<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Black Mist Scythe</rarityLegendary>.<br><br><rules>This item grants reduced gold from minions if anyone on your team with this item kill excessive numbers of them.</rules><br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3862,
            "inStore": false,
            "image": {
                "full": "3863.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 60,
                "FlatPhysicalDamageMod": 10
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "1000",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3864": {
            "name": "Black Mist Scythe",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>75</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3863,
            "inStore": false,
            "image": {
                "full": "3864.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 75,
                "FlatPhysicalDamageMod": 20
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3865": {
            "name": "World Atlas",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "3865.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 30
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3866": {
            "name": "Runic Compass",
            "description": "<mainText><stats><attention>100</attention> Health<br><attention>50%</attention> Base Health Regen<br><attention>50%</attention> Base Mana Regen<br><attention>5</attention> Gold Per 10 Seconds</stats><br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><passive>Quest</passive> <br>Earn 800 gold from this item to transform it into <rarityGeneric>Runic Compass</rarityGeneric>. Gain a charge every <passive>20</passive> seconds, up to <passive>3</passive> charges. While nearby an ally champion, consume a charge to earn gold:<br><li>Damaging Abilities and Attacks against champions or buildings grant <keywordMajor>24</keywordMajor> (melee) / <keywordMajor>22</keywordMajor> (ranged) gold;<li>Killing a minion by any means grants you <keywordMajor>20</keywordMajor> gold and the nearest allied champion kill gold.<br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3865,
            "inStore": false,
            "image": {
                "full": "3866.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 100
            },
            "effect": {
                "Effect1Amount": "5"
            }
        },
        "3867": {
            "name": "Bounty of Worlds",
            "description": "<mainText><stats><attention>5</attention> Gold Per 10 Seconds<br><attention>75%</attention> Base Health Regen<br><attention>75%</attention> Base Mana Regen<br><attention>200</attention> Health</stats><br><br><br><li><passive>Upgrade</passive> <br>This item can be upgraded into <rarityLegendary>Bloodsong</rarityLegendary>, <rarityLegendary>Celestial Opposition</rarityLegendary>, <rarityLegendary>Dream Maker</rarityLegendary>, <rarityLegendary>Zaz'Zak's Realmspike</rarityLegendary>, or <rarityLegendary>Solstice Sleigh</rarityLegendary> for free.<br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. <br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3866,
            "inStore": false,
            "into": [
                "3869",
                "3870",
                "3871",
                "3876",
                "3877"
            ],
            "image": {
                "full": "3867.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "effect": {
                "Effect1Amount": "5"
            }
        },
        "3869": {
            "name": "Celestial Opposition",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>75%</attention> Base Mana Regen<br><attention>5</attention> Gold Per 10 Seconds</stats><br><br><passive>Blessing of the Mountain:</passive> <br>Become Blessed to reduce incoming champion damage, lingering for 2 seconds after taking damage from a champion.<br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3867"
            ],
            "image": {
                "full": "3869.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "effect": {
                "Effect1Amount": "5"
            },
            "depth": 2
        },
        "3870": {
            "name": "Dream Maker",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>75%</attention> Base Mana Regen<br><attention>5</attention> Gold Per 10 Seconds</stats><br><br><passive>Dream Maker</passive><br>Gain a <passive>Blue Dream Bubble</passive> and a <passive>Purple Dream Bubble</passive> overtime. Healing and Shielding another ally blows both <passive>Dream Bubbles</passive> to them and empowers them, reducing incoming damage and granting outgoing damage.<br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3867"
            ],
            "image": {
                "full": "3870.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "effect": {
                "Effect1Amount": "5"
            },
            "depth": 2
        },
        "3871": {
            "name": "Zaz'Zak's Realmspike",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>75%</attention> Base Mana Regen<br><attention>5</attention> Gold Per 10 Seconds</stats><br><br><passive>Void Explosion</passive><br>Dealing ability damage causes an explosion dealing magic damage and damage based on the targets max Health.<br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3867"
            ],
            "image": {
                "full": "3871.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "effect": {
                "Effect1Amount": "5"
            },
            "depth": 2
        },
        "3876": {
            "name": "Solstice Sleigh",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>75%</attention> Base Mana Regen<br><attention>5</attention> Gold Per 10 Seconds</stats><br><br><passive>Going Sledding</passive><br><status>Slowing</status> or <status>Immobilizing</status> an enemy champion grants you and a nearby ally with lowest Health bonus Health and Move Speed.<br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3867"
            ],
            "image": {
                "full": "3876.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "effect": {
                "Effect1Amount": "5"
            },
            "depth": 2
        },
        "3877": {
            "name": "Bloodsong",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>75%</attention> Base Mana Regen<br><attention>5</attention> Gold Per 10 Seconds</stats><br><br><passive>Spellblade</passive><br>After using an ability, your next basic attack within 10 seconds deals 100% base AD bonus physical damage on-hit and increases damage taken by the inflicted enemy champion for 6s. <br><br><br><br><active>ACTIVE</active><br><active>Ward</active> <br>Place an <keywordStealth>Invisible</keywordStealth> Stealth Ward that grants vision. Stores 0 Stealth Wards, which refill upon visiting the shop. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3867"
            ],
            "image": {
                "full": "3877.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "effect": {
                "Effect1Amount": "5"
            },
            "depth": 2
        },
        "3901": {
            "name": "<rarityLegendary>Fire at Will</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
            "description": "",
            "colloq": "",
            "plaintext": "Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "image": {
                "full": "3901.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "3902": {
            "name": "<rarityLegendary>Death's Daughter</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
            "description": "<mainText><stats></stats><br><br><mainText>Cannon Barrage additionally fires a mega-cannonball at the center of the Barrage, dealing <trueDamage>bonus true damage</trueDamage> and <status>Slowing</status>.</mainText></mainText>",
            "colloq": "",
            "plaintext": "<mainText>Cannon Barrage additionally fires a mega-cannonball at the center of the Barrage, dealing <trueDamage>bonus true damage</trueDamage> and <status>Slowing</status>.</mainText>",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "image": {
                "full": "3902.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "3903": {
            "name": "<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
            "description": "<mainText><stats></stats><br><br>Allies in the Cannon Barrage gain <speed>bonus Move Speed</speed>.</mainText>",
            "colloq": "",
            "plaintext": "Allies in the Cannon Barrage gain <speed>bonus Move Speed</speed>.",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "image": {
                "full": "3903.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "3916": {
            "name": "Oblivion Orb",
            "description": "<mainText><stats><attention>30</attention> Ability Power</stats><br><br><passive>Grievous Wounds</passive><br>Dealing magic damage applies <keyword>40% Grievous Wounds</keyword> to champions for 3 seconds.</mainText>",
            "colloq": "",
            "plaintext": "Increases magic damage",
            "stacks": 0,
            "from": [
                "1052"
            ],
            "into": [
                "3011",
                "3165"
            ],
            "image": {
                "full": "3916.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "depth": 2
        },
        "4003": {
            "name": "Lifeline",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>8</attention> Lethality</stats><br><br><br><br><active>Active -</active> <active>Soul Anchor:</active> Mark your current location. After 4 seconds, return to that location (60(0s)).</mainText>",
            "colloq": ";lethality",
            "plaintext": "Marks the ground, and returns you there after a few moments",
            "from": [
                "1036",
                "2420"
            ],
            "into": [
                "4004"
            ],
            "image": {
                "full": "4003.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "depth": 3
        },
        "4004": {
            "name": "Spectral Cutlass",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>21</attention> Lethality</stats><br><br><br><br><active>Active -</active> <active>Soul Anchor:</active> Mark your current location. After 4 seconds, return to that location (45(0s)).</mainText>",
            "colloq": ";lethality",
            "plaintext": "Marks the ground, and returns you there after a few moments",
            "from": [
                "4003",
                "3134"
            ],
            "image": {
                "full": "4004.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3900,
                "sell": 2730
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 70
            },
            "depth": 4
        },
        "4005": {
            "name": "Imperial Mandate",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>20</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><br><passive>Coordinated Fire</passive><br><status>Slowing</status> or <status>Immobilizing</status> an enemy champion marks them and causes Ally champion to deal bonus damage to them and grant you both Move Speed.</mainText>",
            "colloq": ";",
            "plaintext": "Defer damage until later.",
            "from": [
                "3108",
                "4642"
            ],
            "image": {
                "full": "4005.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "depth": 3
        },
        "4010": {
            "name": "Bloodletter's Curse",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><passive>Vile Decay</passive><br>Dealing magic damage reduces the target's magic resist by 5% for 6 seconds, stacking up to up to 30%. Repeat damage from the same spell cast can only stack this once per 2 second(s).</mainText>",
            "colloq": ";magic penetration",
            "plaintext": "Grant Spell Shield after damaging an enemy with an ability",
            "image": {
                "full": "4010.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "SpellDamage",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 60,
                "FlatArmorMod": 30
            }
        },
        "4011": {
            "name": "Sword of Blossoming Dawn",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>200</attention> Health<br><attention>12%</attention> Heal and Shield Power<br><attention>15</attention> Ability Haste</stats><br><br><passive>Effervescence</passive><br>Gain +1.2% Attack Speed for every 1% Heal and Shield Power you have. <br><br><passive>Peppermint</passive><br><OnHit>On-Hit</OnHit>, heal the lowest health ally champion near you for [15 - 45] (+10% Bonus AD) (+7% AP), prioritizing lower health allies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4011.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 30
            }
        },
        "4012": {
            "name": "Sin Eater",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>45</attention> Armor<br><attention>45</attention> Magic Resist<br><attention>30%</attention> Tenacity</stats><br><br><br><li><passive>The Feast:</passive> Whenever a nearby ally champion becomes affected by an immobilizing crowd control effect, instead you are stunned for that duration. (20(0s)).</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4012.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 45,
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 45
            }
        },
        "4013": {
            "name": "Lightning Braid",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>30%</attention> Tenacity</stats><br><br><br><li><passive>Chain Lightning:</passive> You deal 20% reduced ability damage. On a 1 second cadence, enemies you've damaged with abilities chain 66.6% of the ability damage you've dealt them to another nearby enemy, prioritizing champions.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4013.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "SpellDamage",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 70,
                "FlatArmorMod": 30
            }
        },
        "4014": {
            "name": "Frozen Mallet",
            "description": "<mainText><stats><attention>60%</attention> Attack Speed<br><attention>600</attention> Health</stats><br><br><br><li><passive>Encroaching Frost:</passive> <OnHit>On-Hit</OnHit>, apply a stacking move speed slow.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4014.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Slow"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "PercentAttackSpeedMod": 0.6
            }
        },
        "4015": {
            "name": "Perplexity",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>5%</attention> Move Speed<br><attention>22%</attention> Armor Penetration<br><attention>30%</attention> Magic Penetration</stats><br><br><passive>Giant Slayer</passive><br>Deal up to 22% bonus damage against champions with greater max Health than you.<br><br><rules>Max damage increase reached when Health difference is greater than 2500.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4015.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 60,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "4016": {
            "name": "Wordless Promise",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>12%</attention> Heal and Shield Power<br><attention>25</attention> Ability Haste</stats><br><br><passive>Promise</passive><br>Gain 20% of your <attention>Promised</attention> ally's Ability Power, and grant your <attention>Promised</attention> ally 20% of your Ability Haste.<br><br><br><br><active>ACTIVE</active> (0s)<br><active>Promise</active><br>Make a <attention>Promise</attention> to an ally.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4016.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 50
            }
        },
        "4017": {
            "name": "Hellfire Hatchet",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>12</attention> Lethality<br><attention>10%</attention> Omnivamp</stats><br><br><passive>Char</passive><br><OnHit>On-Hit</OnHit>, heal based on the Target's Current Health and apply a <keywordMajor>Burn</keywordMajor> that deals physical damage based on the Target's Missing Health per second for 4 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4017.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "SpellVamp",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 35
            }
        },
        "4401": {
            "name": "Force of Nature",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>55</attention> Magic Resist<br><attention>5%</attention> Move Speed</stats><br><br><passive>Steadfast</passive><br>Taking <magicDamage>magic damage</magicDamage> from enemy Champions grants a stack, up to 8. While at 8 stacks, gain <scaleMR>70 Magic Resist</scaleMR> and 10% increased Move Speed.</mainText>",
            "colloq": ";fon",
            "plaintext": "Move Speed, Magic Resist, and max Health Regeneration",
            "from": [
                "1057",
                "1028",
                "3066"
            ],
            "image": {
                "full": "4401.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellBlock",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatHPPoolMod": 400,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "4402": {
            "name": "Innervating Locket",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>400</attention> Health<br><attention>300</attention> Mana<br><attention>10</attention> Ability Haste</stats><br><br><br><li><passive>Eternity:</passive> Restore Mana equal to 15% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second.<li><passive>Innervate:</passive> After using an ability, restore <healing>3% missing Health</healing> and <scaleMana>3% missing Mana</scaleMana> over 3 seconds.<br><br><flavorText>\"Cast down the Noxians\" <br>– Bobdyr, Temple Guardsman</flavorText></mainText>",
            "colloq": ";",
            "plaintext": "Cast spells to heal",
            "from": [
                "3803",
                "3133"
            ],
            "image": {
                "full": "4402.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 30
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "0.03",
                "Effect3Amount": "0.03"
            },
            "depth": 3
        },
        "4403": {
            "name": "The Golden Spatula",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>120</attention> Ability Power<br><attention>50%</attention> Attack Speed<br><attention>30%</attention> Critical Strike Chance<br><attention>250</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>250</attention> Mana<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Move Speed<br><attention>10%</attention> Life Steal<br><attention>100%</attention> Base Health Regen<br><attention>100%</attention> Base Mana Regen</stats><br><br><br><li><passive>Doing Something:</passive> You are permanently On Fire!</mainText>",
            "colloq": ";",
            "plaintext": "It does EVERYTHING!",
            "from": [
                "3086",
                "1038",
                "1053",
                "3067",
                "1058",
                "3105"
            ],
            "image": {
                "full": "4403.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 687,
                "purchasable": true,
                "total": 7237,
                "sell": 5066
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMPPoolMod": 250,
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 120,
                "FlatArmorMod": 30,
                "FlatCritChanceMod": 0.3,
                "FlatPhysicalDamageMod": 70,
                "PercentAttackSpeedMod": 0.5,
                "PercentLifeStealMod": 0.1,
                "PercentMovementSpeedMod": 0.1
            },
            "depth": 3
        },
        "4628": {
            "name": "Horizon Focus",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>20</attention> Ability Haste</stats><br><br><passive>Hypershot</passive><br>Damaging a champion with a non-targeted Ability at over 600 range or <status>Slowing or Immobilizing</status> them <keywordStealth>Reveals</keywordStealth> them and increases their damage taken from you.<br><br><rules>The Ability that triggers <passive>Hypershot</passive> also benefits from the damage increase. Pets and non-immobilizing traps do not trigger this effect. Only the initial placement of zone Abilities will trigger this effect. Distance is measured from the Ability cast position. </rules></mainText>",
            "colloq": "",
            "plaintext": "Immobilizing a champion causes lightning to strike them",
            "from": [
                "3145",
                "3108"
            ],
            "image": {
                "full": "4628.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "SpellDamage",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "4629": {
            "name": "Cosmic Drive",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>250</attention> Health<br><attention>25</attention> Ability Haste<br><attention>5%</attention> Move Speed</stats><br><br><passive>Spelldance</passive><br>Damaging an enemy champion with an Ability grants <speed>0 Move Speed</speed> for 2s. </mainText>",
            "colloq": "",
            "plaintext": "Massive amounts of Cooldown Reduction",
            "from": [
                "3067",
                "3113",
                "3108"
            ],
            "image": {
                "full": "4629.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 80,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "4630": {
            "name": "Blighting Jewel",
            "description": "<mainText><stats><attention>25</attention> Ability Power<br><attention>13%</attention> Magic Penetration</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1052"
            ],
            "into": [
                "3135",
                "3137"
            ],
            "image": {
                "full": "4630.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 25
            },
            "depth": 2
        },
        "4632": {
            "name": "Verdant Barrier",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>30</attention> Magic Resist</stats><br><br><passive>Annul</passive> (0s)<br>Grants a Spell Shield that blocks the next enemy Ability.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1052",
                "1033",
                "1052"
            ],
            "into": [
                "3102"
            ],
            "image": {
                "full": "4632.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 1600,
                "sell": 1120
            },
            "tags": [
                "SpellBlock",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 40
            },
            "depth": 2
        },
        "4633": {
            "name": "Riftmaker",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>350</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><passive>Void Corruption</passive><br>For each second in combat with enemy champions, deal bonus damage. At maximum strength, gain Omnivamp.<br><br><passive>Void Infusion</passive><br>Gain a % of your bonus Health as Ability Power. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3147",
                "3108"
            ],
            "into": [
                "7009"
            ],
            "image": {
                "full": "4633.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 80
            },
            "depth": 3
        },
        "4635": {
            "name": "Leeching Leer",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>250</attention> Health<br><attention>5%</attention> Omnivamp</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "1052"
            ],
            "inStore": false,
            "image": {
                "full": "4635.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 465,
                "purchasable": false,
                "total": 1265,
                "sell": 886
            },
            "tags": [
                "Health",
                "SpellDamage",
                "SpellVamp"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 20
            },
            "depth": 2
        },
        "4636": {
            "name": "Night Harvester",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>300</attention> Health<br><attention>25</attention> Ability Haste</stats><br><br><br><li><passive>Soulrend:</passive> Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3145",
                "3108"
            ],
            "inStore": false,
            "into": [
                "7010"
            ],
            "image": {
                "full": "4636.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 815,
                "purchasable": false,
                "total": 2815,
                "sell": 1971
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "4637": {
            "name": "Demonic Embrace",
            "description": "<mainText><stats><attention>75</attention> Ability Power<br><attention>350</attention> Health</stats><br><br><br><li><passive>Azakana's Gaze:</passive> Dealing Ability damage burns enemies for max Health magic damage every second.<li><passive>Dark Pact:</passive> Gain <scaleHealth>bonus Health</scaleHealth> as <scaleAP>Ability Power</scaleAP>. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1026",
                "1011",
                "1052"
            ],
            "inStore": false,
            "image": {
                "full": "4637.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 75
            },
            "depth": 3
        },
        "4638": {
            "name": "Watchful Wardstone",
            "description": "<mainText><stats><attention>150</attention> Health<br><attention>10</attention> Ability Haste<br><attention>10</attention> Armor<br><attention>15</attention> Magic Resist</stats><br><br><passive>Arcane Cache</passive><br>This item can store up to 3 purchased Control Wards.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "into": [
                "4643"
            ],
            "image": {
                "full": "4638.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1100,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Vision",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 15,
                "FlatHPPoolMod": 150,
                "FlatArmorMod": 10
            }
        },
        "4641": {
            "name": "Stirring Wardstone",
            "description": "<mainText><stats><attention>80</attention> Health<br><attention>25%</attention> Base Mana Regen</stats><br><br><br><li><passive>Arcane Cache:</passive> This item can store up to 2 purchased Control Wards.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "image": {
                "full": "4641.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "Health",
                "Damage",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 80
            }
        },
        "4642": {
            "name": "Bandleglass Mirror",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>75%</attention> Base Mana Regen<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1004",
                "1052",
                "2022"
            ],
            "into": [
                "2065",
                "6620",
                "4005",
                "6617"
            ],
            "image": {
                "full": "4642.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 20
            },
            "depth": 2
        },
        "4643": {
            "name": "Vigilant Wardstone",
            "description": "<mainText><stats><attention>250</attention> Health<br><attention>20</attention> Ability Haste<br><attention>25</attention> Armor<br><attention>30</attention> Magic Resist</stats><br><br><passive>Arcane Cache</passive><br>This item can store up to 3 purchased Control Wards.<br><br><passive>Behold</passive><br>Increase your Stealth Ward and Control Ward placement caps by 1.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumeOnFull": true,
            "from": [
                "4638"
            ],
            "image": {
                "full": "4643.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1200,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Vision",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatHPPoolMod": 250,
                "FlatArmorMod": 25
            },
            "depth": 2
        },
        "4644": {
            "name": "Crown of the Shattered Queen",
            "description": "<mainText><stats><attention>85</attention> Ability Power<br><attention>250</attention> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><br><li><passive>Safeguard:</passive> You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed and Ability Power.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "3802",
                "1052"
            ],
            "inStore": false,
            "into": [
                "7024"
            ],
            "image": {
                "full": "4644.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 465,
                "purchasable": false,
                "total": 2865,
                "sell": 2006
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 85
            },
            "depth": 3
        },
        "4645": {
            "name": "Shadowflame",
            "description": "<mainText><stats><attention>120</attention> Ability Power<br><attention>12</attention> Magic Penetration</stats><br><br><passive>Cinderbloom</passive><br><magicDamage>Magic damage</magicDamage> and <trueDamage>true damage</trueDamage> critically strikes low Health enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3145",
                "1058"
            ],
            "image": {
                "full": "4645.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellDamage",
                "MagicPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 120
            },
            "depth": 3
        },
        "4646": {
            "name": "Stormsurge",
            "description": "<mainText><stats><attention>95</attention> Ability Power<br><attention>10</attention> Magic Penetration<br><attention>8%</attention> Move Speed</stats><br><br><passive>Stormraider</passive><br>Dealing 35% of a champion's maximum Health within a short duration applies <passive>Squall</passive> and grants Move Speed.<br><br><passive>Squall</passive><br>After a few seconds, strike the target, dealing magic damage. If the target dies before the strike, it detonates immediately, dealing damage in a large area and grants bonus gold.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3145",
                "3113"
            ],
            "image": {
                "full": "4646.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "SpellDamage",
                "GoldPer",
                "NonbootsMovement",
                "MagicPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 95,
                "PercentMovementSpeedMod": 0.08
            },
            "depth": 3
        },
        "6029": {
            "name": "Ironspike Whip",
            "description": "<mainText><stats><attention>30</attention> Attack Damage</stats><br><br><br><br><active>Active -</active> <active>Crescent:</active> Deal damage to nearby enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1037"
            ],
            "inStore": false,
            "into": [
                "6630"
            ],
            "image": {
                "full": "6029.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 225,
                "purchasable": false,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Damage",
                "Active"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30
            },
            "depth": 2
        },
        "6035": {
            "name": "Silvermere Dawn",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>300</attention> Health<br><attention>40</attention> Magic Resist</stats><br><br><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs and gain Tenacity and Slow Resistance.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3140",
                "1037",
                "1028"
            ],
            "inStore": false,
            "image": {
                "full": "6035.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 425,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Damage",
                "Active",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 40
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 3
        },
        "6333": {
            "name": "Death's Dance",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>15</attention> Ability Haste<br><attention>40</attention> Armor</stats><br><br><passive>Ignore Pain</passive><br>A % of damage taken is dealt to you over time.<br><br><passive>Defy</passive><br>When a champion that you have damaged dies, cleanse <passive>Ignore Pain's</passive> remaining damage pool and heal over a few seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "from": [
                "2019",
                "3133",
                "1037"
            ],
            "image": {
                "full": "6333.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 125,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Armor",
                "Damage",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 40,
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "6609": {
            "name": "Chempunk Chainsword",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>250</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><passive>Hackshorn</passive><br>Dealing physical damage applies 40% <keyword>Grievous Wounds</keyword> to enemy champions for 3 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3123",
                "1028",
                "3133"
            ],
            "image": {
                "full": "6609.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6610": {
            "name": "Sundered Sky",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>450</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><passive>Lightshield Strike</passive><br>The first Attack against a champion Crits and heals. <br><br><rules>Excess healing is granted as temporary bonus Health.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2021",
                "3133"
            ],
            "into": [
                "7039"
            ],
            "image": {
                "full": "6610.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatPhysicalDamageMod": 45
            },
            "depth": 3
        },
        "6616": {
            "name": "Staff of Flowing Water",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>8%</attention> Heal and Shield Power<br><attention>125%</attention> Base Mana Regen<br><attention>15</attention> Ability Haste</stats><br><br><passive>Rapids</passive><br>Healing or Shielding an ally grants you both <magicDamage>30 Ability Power</magicDamage> and <speed>10% Move Speed</speed> for 4 seconds.</mainText>",
            "colloq": "",
            "plaintext": "Your heals and shields reduce crowd control and grant Move Speed",
            "from": [
                "3108",
                "3114"
            ],
            "image": {
                "full": "6616.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 40
            },
            "depth": 3
        },
        "6617": {
            "name": "Moonstone Renewer",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>250</attention> Health<br><attention>20</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><br><passive>Starlit Grace</passive><br>Healing or shielding an ally chains to the nearest ally champion for a percentage of the original amount.</mainText>",
            "colloq": "",
            "plaintext": "Your heals and shields cool down faster and have greater effect on low health allies",
            "from": [
                "3067",
                "4642"
            ],
            "into": [
                "7021"
            ],
            "image": {
                "full": "6617.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 30
            },
            "depth": 3
        },
        "6620": {
            "name": "Echoes of Helia",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><br><passive>Soul Siphon</passive><br>Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to heal the ally and deal magic damage to the nearest enemy champion per Shard.<br><br></mainText>",
            "colloq": "",
            "plaintext": "Damage low-health enemies to trigger a cursed explosion, dealing damage and slowing nearby foes",
            "from": [
                "3067",
                "4642"
            ],
            "into": [
                "7033"
            ],
            "image": {
                "full": "6620.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 40
            },
            "depth": 3
        },
        "6621": {
            "name": "Dawncore",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>16%</attention> Heal and Shield Power<br><attention>100%</attention> Base Mana Regen</stats><br><br><passive>First Light</passive><br>Gain <healing>2% Heal and Shield Power</healing> and <scaleAP>10 Ability Power</scaleAP> per 100% Base Mana Regen.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1026",
                "3114",
                "3114"
            ],
            "into": [
                "7035"
            ],
            "image": {
                "full": "6621.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "SpellDamage",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "depth": 3
        },
        "6630": {
            "name": "Goredrinker",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>400</attention> Health<br><attention>20</attention> Ability Haste<br><attention>8%</attention> Omnivamp</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health and Ability Haste.<br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6029",
                "3044",
                "3067"
            ],
            "inStore": false,
            "into": [
                "7015"
            ],
            "image": {
                "full": "6630.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6631": {
            "name": "Stridebreaker",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>450</attention> Health</stats><br><br><passive>Cleave</passive><br>Attacks deal physical damage to nearby enemies.<br><br><passive>Temper</passive><br>Dealing <physicalDamage>physical damage</physicalDamage> grants Move Speed.<br><br><active>ACTIVE</active><br><active>Breaking Shockwave</active><br>Deal physical damage and <status>Slow</status> nearby enemies and gain Move Speed per champion. Can move while casting.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3077",
                "3044",
                "1042"
            ],
            "into": [
                "7016"
            ],
            "image": {
                "full": "6631.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatPhysicalDamageMod": 50,
                "PercentAttackSpeedMod": 0.3
            },
            "depth": 3
        },
        "6632": {
            "name": "Divine Sunderer",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>300</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Magic Penetration.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3133",
                "3057",
                "3067"
            ],
            "inStore": false,
            "into": [
                "7017"
            ],
            "image": {
                "full": "6632.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": false,
                "total": 3500,
                "sell": 2450
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 40
            },
            "depth": 3
        },
        "6653": {
            "name": "Liandry's Torment",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>300</attention> Health</stats><br><br><passive>Torment</passive><br>Dealing damage with Abilities causes enemies to burn.<br><br><passive>Suffering</passive><br>For each second in combat with enemy champions, gain increased damage. </mainText>",
            "colloq": "",
            "plaintext": "Charge up in combat to deal high damage over time, especially against durable enemies",
            "from": [
                "3147",
                "2508"
            ],
            "into": [
                "7012"
            ],
            "image": {
                "full": "6653.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "6655": {
            "name": "Luden's Companion",
            "description": "<mainText><stats><attention>95</attention> Ability Power<br><attention>600</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Fire</passive><br>Damaging Abilities fire Shots that deal additional damage to the target and nearby enemies. Remaining Shots fire on the primary target, dealing reduced damage.</mainText>",
            "colloq": "",
            "plaintext": "High burst damage, good against fragile foes",
            "from": [
                "3802",
                "3145"
            ],
            "into": [
                "7013"
            ],
            "image": {
                "full": "6655.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 95
            },
            "depth": 3
        },
        "6656": {
            "name": "Everfrost",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>250</attention> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Power. <br><br><br><active>Active -</active> <active>Glaciate:</active> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "3802",
                "1052"
            ],
            "inStore": false,
            "into": [
                "7014"
            ],
            "image": {
                "full": "6656.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 465,
                "purchasable": false,
                "total": 2865,
                "sell": 2006
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 70
            },
            "depth": 3
        },
        "6657": {
            "name": "Rod of Ages",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>400</attention> Health<br><attention>400</attention> Mana</stats><br><br><passive>Timeless</passive><br>This item gains Health, Mana and Ability Power every 60 seconds. Upon reaching max stacks, gain a level.<br><br><passive>Eternity</passive><br>Taking damage from champions restores Mana.Casting an ability heals for a % of Mana spent.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1026",
                "3803"
            ],
            "into": [
                "7028"
            ],
            "image": {
                "full": "6657.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 50
            },
            "depth": 3
        },
        "6660": {
            "name": "Bami's Cinder",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>5</attention> Ability Haste</stats><br><br><passive>Immolate</passive><br>Taking or dealing damage causes you to begin dealing magic damage per second to nearby enemies (increased against minions and monsters).</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "2022"
            ],
            "into": [
                "3068",
                "6664"
            ],
            "image": {
                "full": "6660.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Health",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "6662": {
            "name": "Iceborn Gauntlet",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>50</attention> Armor<br><attention>15</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2s. Enemies that move across the field are <status>Slowed</status>.</mainText>",
            "colloq": "",
            "plaintext": "High Magic Resist.Passively slow nearby enemies. When spells are cast near you, release a wave of energy that damages and slows.",
            "from": [
                "3057",
                "1028",
                "1031"
            ],
            "into": [
                "7005"
            ],
            "image": {
                "full": "6662.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 50
            },
            "depth": 3
        },
        "6664": {
            "name": "Hollow Radiance",
            "description": "<mainText><stats><attention>450</attention> Health<br><attention>40</attention> Magic Resist<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><br><passive>Immolate</passive><br>Taking or dealing damage causes you to begin dealing magic damage to nearby enemies.<br><br><passive>Desolate</passive><br>Killing an enemy deals magic damage in an area around them.<br><br></mainText>",
            "colloq": "",
            "plaintext": "Immobilize enemies to gain a shield. Activate to run faster at opponents.",
            "from": [
                "6660",
                "3211"
            ],
            "image": {
                "full": "6664.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Aura",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 450
            },
            "depth": 3
        },
        "6665": {
            "name": "Jak'Sho, The Protean",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>50</attention> Armor<br><attention>50</attention> Magic Resist</stats><br><br><passive>Voidborn Resilience</passive><br>During combat with champions become empowered, increasing your bonus <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> until end of combat.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1031",
                "1057",
                "1028"
            ],
            "into": [
                "7026"
            ],
            "image": {
                "full": "6665.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1100,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "MagicResist"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 50
            },
            "depth": 3
        },
        "6667": {
            "name": "Radiant Virtue",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3105",
                "1011"
            ],
            "inStore": false,
            "into": [
                "7027"
            ],
            "image": {
                "full": "6667.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "6670": {
            "name": "Noonquiver",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1036",
                "1018",
                "1036"
            ],
            "into": [
                "3032",
                "3036",
                "3095",
                "6673"
            ],
            "image": {
                "full": "6670.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 1400,
                "sell": 980
            },
            "tags": [
                "Damage",
                "CriticalStrike"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatPhysicalDamageMod": 20
            },
            "depth": 2
        },
        "6671": {
            "name": "Galeforce",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>15%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1038",
                "3086",
                "1036"
            ],
            "inStore": false,
            "into": [
                "7006"
            ],
            "image": {
                "full": "6671.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": false,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatPhysicalDamageMod": 50,
                "PercentAttackSpeedMod": 0.15,
                "PercentMovementSpeedMod": 0.07
            },
            "depth": 3
        },
        "6672": {
            "name": "Kraken Slayer",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>40%</attention> Attack Speed<br><attention>7%</attention> Move Speed</stats><br><br><passive>Bring It Down</passive><br>Every third basic attack deals additional physical damage on-hit, increasing when hitting the same target repeatedly.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6690",
                "3051",
                "1043"
            ],
            "into": [
                "7041"
            ],
            "image": {
                "full": "6672.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "PercentAttackSpeedMod": 0.4,
                "PercentMovementSpeedMod": 0.07
            },
            "depth": 3
        },
        "6673": {
            "name": "Immortal Shieldbow",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Lifeline</passive><br>When taking damage that would reduce you below a certain amount of Health, gain a Shield.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1037",
                "6670"
            ],
            "image": {
                "full": "6673.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 725,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6675": {
            "name": "Navori Flickerblade",
            "description": "<mainText><stats><attention>40%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><passive>Transcendence</passive><br>Your Attacks reduce your non-Ultimate Ability cooldowns.<br><br><passive>Impermanence</passive><br>Your abilities deal increased damage based on Critical Strike Chance. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1042",
                "3086",
                "1042"
            ],
            "into": [
                "7032"
            ],
            "image": {
                "full": "6675.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.4,
                "PercentMovementSpeedMod": 0.07
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 3
        },
        "6676": {
            "name": "The Collector",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>12</attention> Lethality<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Death</passive><br>Your damage executes champions that are below 5% Health.<br><br><passive>Taxes</passive><br>Champion kills grant an additional <gold>25 gold</gold>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1038",
                "3134",
                "1018"
            ],
            "image": {
                "full": "6676.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "6677": {
            "name": "Rageknife",
            "description": "<mainText><stats><attention>25%</attention> Attack Speed</stats><br><br><br><li><passive>Wrath:</passive> Attacks apply <magicDamage>20 magic damage</magicDamage> <OnHit>On-Hit</OnHit>.<li><passive>Seething Strike:</passive> Basic attacks grant <attackSpeed>5% Attack Speed</attackSpeed>, stacking up to 3 times.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1042",
                "1042"
            ],
            "inStore": false,
            "image": {
                "full": "6677.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": false,
                "total": 1200,
                "sell": 840
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.25
            },
            "depth": 2
        },
        "6690": {
            "name": "Rectrix",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>4%</attention> Move Speed</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1036"
            ],
            "into": [
                "6701",
                "6700",
                "6672",
                "3142",
                "3087",
                "3181"
            ],
            "image": {
                "full": "6690.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Damage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "PercentMovementSpeedMod": 0.04
            },
            "depth": 2
        },
        "6691": {
            "name": "Duskblade of Draktharr",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (30(0s)).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "inStore": false,
            "into": [
                "7002"
            ],
            "image": {
                "full": "6691.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "6692": {
            "name": "Eclipse",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>15</attention> Ability Haste</stats><br><br><passive>Ever Rising Moon</passive> <br>Hitting a champion with 3 separate Attacks or Abilities within 2 seconds deals additional damage, and grants you a Shield.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3133",
                "1037",
                "1036"
            ],
            "into": [
                "7001"
            ],
            "image": {
                "full": "6692.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 475,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 70
            },
            "depth": 3
        },
        "6693": {
            "name": "Prowler's Claw",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>22</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Eminence</passive><br>When a champion that you have damaged dies, gain Attack Damage.<br><br><passive>Ego</passive><br>Killing champions creates a statue of yourself, if you already have a statue it upgrades.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "inStore": false,
            "into": [
                "7000"
            ],
            "image": {
                "full": "6693.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": false,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6694": {
            "name": "Serylda's Grudge",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>15</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Rancor</passive><br>Gain 0 Armor Penetration.<br><br><passive>Bitter Cold</passive><br>Damaging Abilities <status>Slow</status> enemies under 50% Health by 30% for 1 second.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2020",
                "3035"
            ],
            "image": {
                "full": "6694.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 413,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 45
            },
            "depth": 3
        },
        "6695": {
            "name": "Serpent's Fang",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>15</attention> Lethality</stats><br><br><passive>Shield Reaver</passive><br>Dealing damage to an enemy champion reduces any shields they gain. When you damage an enemy who is unaffected by Shield Reaver, reduce all shields on them.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "1037"
            ],
            "image": {
                "full": "6695.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 625,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6696": {
            "name": "Axiom Arc",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>25</attention> Ability Haste</stats><br><br><passive>Flux</passive><br>Whenever a Champion dies within 3 seconds of you having damaged them, refund part of your Ultimate Ability's total cooldown.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2020",
                "3133"
            ],
            "image": {
                "full": "6696.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 563,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6697": {
            "name": "Hubris",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Eminence</passive><br>Gain temporary AD based on champion kills on kill.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "into": [
                "7008"
            ],
            "image": {
                "full": "6697.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "6698": {
            "name": "Profane Hydra",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>20</attention> Ability Haste</stats><br><br><passive>Cleave</passive><br>Attacks apply additional damage <OnHit>On-Hit</OnHit>, creating a shockwave that deals damage to enemies behind the target.<br><br><active>ACTIVE</active><br><active>Heretical Cleave</active><br>Deal physical damage to nearby enemies. This damage increases on low Health enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3077",
                "2020"
            ],
            "image": {
                "full": "6698.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 763,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "6699": {
            "name": "Voltaic Cyclosword",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Galvanize</passive><br>Dashes and Stealth stack Energized faster.<br><br><passive>Firmament</passive><br>Your Energized Attack deals bonus physical damage and slows enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2020",
                "1036",
                "1036"
            ],
            "into": [
                "7007"
            ],
            "image": {
                "full": "6699.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 863,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6700": {
            "name": "Shield of the Rakkor",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>30</attention> Armor<br><attention>5%</attention> Move Speed</stats><br><br><br><li><passive>Aegis:</passive> Every 8(0s),  block the first Attack that would hit you. While the shield is broken, your first attack against a champion refunds 50% of its current Cooldown and grants <MS> 20% Movement Speed</MS> for a short duration.<br><br><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6690",
                "2019"
            ],
            "inStore": false,
            "image": {
                "full": "6700.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": false,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Armor",
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 30,
                "FlatPhysicalDamageMod": 50,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "6701": {
            "name": "Opportunity",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>5%</attention> Move Speed</stats><br><br><passive>Eminence</passive><br>When a champion that you have damaged dies, gain Attack Damage.<br><br><passive>Ego</passive><br>Killing champions creates a statue of yourself, if you already have a statue it upgrades.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "6690"
            ],
            "into": [
                "7022"
            ],
            "image": {
                "full": "6701.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 3
        },
        "7000": {
            "name": "Sandshrike's Claw",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Eminence</passive><br>When a champion that you have damaged dies, gain Attack Damage.<br><br><passive>Ego</passive><br>Killing champions creates a statue of yourself, if you already have a statue it upgrades.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6693"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7000.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 4
        },
        "7001": {
            "name": "Syzygy",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6692"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7001.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 90
            },
            "depth": 4
        },
        "7002": {
            "name": "Draktharr's Shadowcarver",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (30(0s)).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6691"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7002.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 4
        },
        "7003": {
            "name": "Rabadon's Deathcrown",
            "description": "<mainText><stats><ornnBonus>190</ornnBonus> Ability Power</stats><br><br><passive>Magical Opus</passive><br>Increases your total <scaleAP>Ability Power by 35%</scaleAP>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3089"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7003.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3600,
                "sell": 2520
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 190
            },
            "depth": 3
        },
        "7004": {
            "name": "Enmity of the Masses",
            "description": "<mainText><stats><ornnBonus>110</ornnBonus> Ability Power<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>35</ornnBonus> Ability Haste</stats><br><br><passive>Scorn</passive><br>Your Ultimate spells gain Ability Haste.<br><br><passive>Hatefog</passive><br>Damaging a champion with your Ultimate burns the ground beneath them, dealing damage and reducing their Magic Resist. <br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3118"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7004.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 110
            },
            "depth": 4
        },
        "7005": {
            "name": "Frozen Fist",
            "description": "<mainText><stats><ornnBonus>400</ornnBonus> Health<br><ornnBonus>60</ornnBonus> Armor<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2s. Enemies that move across the field are <status>Slowed</status>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6662"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7005.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 60
            },
            "depth": 4
        },
        "7006": {
            "name": "Typhoon",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Attack Damage<br><ornnBonus>30%</ornnBonus> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><ornnBonus>10%</ornnBonus> Move Speed</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6671"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7006.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatPhysicalDamageMod": 65,
                "PercentAttackSpeedMod": 0.3,
                "PercentMovementSpeedMod": 0.1
            },
            "depth": 4
        },
        "7007": {
            "name": "Swordnado",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>27</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Galvanize</passive><br>Dashes and Stealth stack Energized faster.<br><br><passive>Firmament</passive><br>Your Energized Attack deals bonus physical damage and slows enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6699"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7007.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 70
            },
            "depth": 4
        },
        "7008": {
            "name": "Ataraxia",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>27</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Eminence</passive><br>When a champion that you have damaged dies, gain Attack Damage.<br><br><passive>Ego</passive><br>Killing champions creates a statue of yourself, if you already have a statue it upgrades.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6697"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7008.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 4
        },
        "7009": {
            "name": "Icathia's Curse",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>450</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Void Corruption</passive><br>For each second in combat with enemy champions, deal bonus damage. At maximum strength, gain Omnivamp.<br><br><passive>Void Infusion</passive><br>Gain a % of your bonus Health as Ability Power. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "4633"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7009.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatMagicDamageMod": 90
            },
            "depth": 4
        },
        "7010": {
            "name": "Vespertide",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>400</ornnBonus> Health<br><ornnBonus>30</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Soulrend:</passive> Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "4636"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7010.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2815,
                "sell": 1971
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 120
            },
            "depth": 4
        },
        "7011": {
            "name": "Upgraded Aeropack",
            "description": "<mainText><stats><ornnBonus>95</ornnBonus> Ability Power<br><ornnBonus>450</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><active>ACTIVE</active>}<br><active>Supersonic</active><br>Dash in target direction, unleashing an arc of magic missiles that deal magic damage.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3152"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7011.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatMagicDamageMod": 95
            },
            "depth": 4
        },
        "7012": {
            "name": "Liandry's Lament",
            "description": "<mainText><stats><ornnBonus>110</ornnBonus> Ability Power<br><ornnBonus>550</ornnBonus> Health</stats><br><br><passive>Torment</passive><br>Dealing damage with Abilities causes enemies to burn.<br><br><passive>Suffering</passive><br>For each second in combat with enemy champions, gain increased damage. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6653"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7012.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatMagicDamageMod": 110
            },
            "depth": 4
        },
        "7013": {
            "name": "Force of Arms",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>950</ornnBonus> Mana<br><ornnBonus>35</ornnBonus> Ability Haste</stats><br><br><passive>Fire</passive><br>Damaging Abilities fire Shots that deal additional damage to the target and nearby enemies. Remaining Shots fire on the primary target, dealing reduced damage.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6655"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7013.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 950,
                "FlatMagicDamageMod": 120
            },
            "depth": 4
        },
        "7014": {
            "name": "Eternal Winter",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>350</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Power. <br><br><br><active>Active -</active> <active>Glaciate:</active> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6656"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7014.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2865,
                "sell": 2006
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 90
            },
            "depth": 4
        },
        "7015": {
            "name": "Ceaseless Hunger",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>550</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>12%</ornnBonus> Omnivamp</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health and Ability Haste.<br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6630"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7015.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatPhysicalDamageMod": 70
            },
            "depth": 4
        },
        "7016": {
            "name": "Dreamshatter",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Attack Damage<br><ornnBonus>40%</ornnBonus> Attack Speed<br><ornnBonus>600</ornnBonus> Health</stats><br><br><passive>Cleave</passive><br>Attacks deal physical damage to nearby enemies.<br><br><passive>Temper</passive><br>Dealing <physicalDamage>physical damage</physicalDamage> grants Move Speed.<br><br><active>ACTIVE</active><br><active>Breaking Shockwave</active><br>Deal physical damage and <status>Slow</status> nearby enemies and gain Move Speed per champion. Can move while casting.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6631"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7016.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatPhysicalDamageMod": 60,
                "PercentAttackSpeedMod": 0.4
            },
            "depth": 4
        },
        "7017": {
            "name": "Deicide",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Attack Damage<br><ornnBonus>450</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Magic Penetration.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6632"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7017.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3500,
                "sell": 2450
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatPhysicalDamageMod": 60
            },
            "depth": 4
        },
        "7018": {
            "name": "Infinity Force",
            "description": "<mainText><stats><ornnBonus>55</ornnBonus> Attack Damage<br><ornnBonus>43%</ornnBonus> Attack Speed<br><ornnBonus>400</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with  additional physical damage.<br><br><passive>Quicken</passive><br>Basic attacks grant Move Speed.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3078"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7018.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3333,
                "sell": 2333
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 55,
                "PercentAttackSpeedMod": 0.43
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            },
            "depth": 4
        },
        "7019": {
            "name": "Reliquary of the Golden Dawn",
            "description": "<mainText><stats><ornnBonus>350</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><active>Active -</active><br><active>Devotion</active><br>Grant nearby allies a <shield>Shield</shield>, decaying over time.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3190"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7019.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Aura",
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 40
            },
            "depth": 4
        },
        "7020": {
            "name": "Shurelya's Requiem",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Ability Power<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>7%</ornnBonus> Move Speed<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Inspiring Speech</active><br>Grants nearby allies Move Speed.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2065"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7020.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 65,
                "PercentMovementSpeedMod": 0.07
            },
            "depth": 4
        },
        "7021": {
            "name": "Starcaster",
            "description": "<mainText><stats><ornnBonus>50</ornnBonus> Ability Power<br><ornnBonus>300</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><br><passive>Starlit Grace</passive><br>Healing or shielding an ally chains to the nearest ally champion for a percentage of the original amount.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6617"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7021.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 50
            },
            "depth": 4
        },
        "7022": {
            "name": "Certainty",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>27</ornnBonus> Lethality<br><ornnBonus>8%</ornnBonus> Move Speed</stats><br><br><passive>Eminence</passive><br>When a champion that you have damaged dies, gain Attack Damage.<br><br><passive>Ego</passive><br>Killing champions creates a statue of yourself, if you already have a statue it upgrades.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6701"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7022.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "PercentMovementSpeedMod": 0.08
            },
            "depth": 4
        },
        "7023": {
            "name": "Equinox",
            "description": "<mainText><stats><ornnBonus>400</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3001"
            ],
            "inStore": false,
            "image": {
                "full": "7023.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 40
            },
            "depth": 4
        },
        "7024": {
            "name": "Caesura",
            "description": "<mainText><stats><ornnBonus>105</ornnBonus> Ability Power<br><ornnBonus>350</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Safeguard:</passive> You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed and Ability Power.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "4644"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7024.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2865,
                "sell": 2006
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 105
            },
            "depth": 4
        },
        "7025": {
            "name": "Leviathan",
            "description": "<mainText><stats><ornnBonus>1150</ornnBonus> Health<br><ornnBonus>300%</ornnBonus> Base Health Regen</stats><br><br><passive>Colossal Consumption</passive> (0s) per target<br>Charge up a powerful attack against a champion over time while near them. The charged attack deals bonus physical damage and grants permanent max Health.<br><br><passive>Goliath</passive><br>Gain increased size based on Total Health. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3084"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7025.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 1150
            },
            "depth": 4
        },
        "7026": {
            "name": "The Unspoken Parasite",
            "description": "<mainText><stats><ornnBonus>550</ornnBonus> Health<br><ornnBonus>60</ornnBonus> Armor<br><ornnBonus>60</ornnBonus> Magic Resist</stats><br><br><passive>Voidborn Resilience</passive><br>During combat with champions become empowered, increasing your bonus <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> until end of combat.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6665"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7026.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "MagicResist"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatHPPoolMod": 550,
                "FlatArmorMod": 60
            },
            "depth": 4
        },
        "7027": {
            "name": "Primordial Dawn",
            "description": "<mainText><stats><ornnBonus>500</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>15</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6667"
            ],
            "inStore": false,
            "image": {
                "full": "7027.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 500,
                "FlatArmorMod": 40
            },
            "depth": 4
        },
        "7028": {
            "name": "Infinite Convergence",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Ability Power<br><ornnBonus>550</ornnBonus> Health<br><ornnBonus>650</ornnBonus> Mana</stats><br><br><passive>Timeless</passive><br>This item gains Health, Mana and Ability Power every 60 seconds. Upon reaching max stacks, gain a level.<br><br><passive>Eternity</passive><br>Taking damage from champions restores Mana.Casting an ability heals for a % of Mana spent.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6657"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7028.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 650,
                "FlatHPPoolMod": 550,
                "FlatMagicDamageMod": 70
            },
            "depth": 4
        },
        "7029": {
            "name": "Youmuu's Wake",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality</stats><br><br><passive>Haunt</passive> <br>Gain <speed>Move Speed</speed> while out of combat.<br><br><br><active>ACTIVE</active> (0s)<br><active>Wraith Step</active><br>Gain <speed>Move Speed</speed> and <keyword>Ghosting</keyword>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3142"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7029.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "effect": {
                "Effect1Amount": "45",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "6",
                "Effect6Amount": "40"
            },
            "depth": 4
        },
        "7030": {
            "name": "Seething Sorrow",
            "description": "<mainText><stats><ornnBonus>45</ornnBonus> Attack Damage<br><ornnBonus>55</ornnBonus> Ability Power<br><ornnBonus>35%</ornnBonus> Attack Speed</stats><br><br><passive>Wrath</passive><br>Attacks apply <magicDamage>30 magic damage <OnHit>On-Hit</OnHit></magicDamage>.<br><br><passive>Seething Strike</passive><br>Basic attacks grant <attackSpeed>8% Attack Speed</attackSpeed>, stacking up to 4 times for a maximum of <attackSpeed>0 Attack Speed</attackSpeed>. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3124"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7030.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 55,
                "FlatPhysicalDamageMod": 45,
                "PercentAttackSpeedMod": 0.35
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "4",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            },
            "depth": 4
        },
        "7031": {
            "name": "Edge of Finality",
            "description": "<mainText><stats><ornnBonus>95</ornnBonus> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><attention>40%</attention> Critical Strike Damage</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3031"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7031.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 95
            },
            "depth": 3
        },
        "7032": {
            "name": "Flicker",
            "description": "<mainText><stats><ornnBonus>85</ornnBonus> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Transcendence</passive><br>Your Attacks reduce your non-Ultimate Ability cooldowns.<br><br><passive>Impermanence</passive><br>Your abilities deal increased damage based on Critical Strike Chance. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6675"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7032.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 85,
                "PercentAttackSpeedMod": 0.4,
                "PercentMovementSpeedMod": 0.07
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 4
        },
        "7033": {
            "name": "Cry of the Shrieking City",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Ability Power<br><ornnBonus>300</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>175%</ornnBonus> Base Mana Regen</stats><br><br><passive>Soul Siphon</passive><br>Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to heal the ally and deal magic damage to the nearest enemy champion per Shard.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6620"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7033.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "depth": 4
        },
        "7034": {
            "name": "Hope Adrift",
            "description": "<mainText><stats><ornnBonus>600</ornnBonus> Health<br><ornnBonus>65</ornnBonus> Armor<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Anguish</passive><br>While in combat with champions, every few seconds, deal magic damage to nearby enemy champions, healing based on the damage dealt.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2502"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7034.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatArmorMod": 65
            },
            "depth": 4
        },
        "7035": {
            "name": "Daybreak",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Ability Power<br><attention>16%</attention> Heal and Shield Power<br><ornnBonus>250%</ornnBonus> Base Mana Regen</stats><br><br><passive>First Light</passive><br>Gain <healing>2% Heal and Shield Power</healing> and <scaleAP>10 Ability Power</scaleAP> per 100% Base Mana Regen.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6621"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7035.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "SpellDamage",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 70
            },
            "depth": 4
        },
        "7036": {
            "name": "T.U.R.B.O.",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3073"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7036.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatPhysicalDamageMod": 65,
                "PercentAttackSpeedMod": 0.3
            },
            "depth": 4
        },
        "7037": {
            "name": "Obsidian Cleaver",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Attack Damage<br><ornnBonus>600</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Carve</passive><br>Dealing physical damage to a champion applies a stack of Armor reduction.<br><br><passive>Fervor</passive><br>Dealing physical damage grants Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3071"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7037.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatPhysicalDamageMod": 65
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0.06",
                "Effect3Amount": "6",
                "Effect4Amount": "5",
                "Effect5Amount": "0.3",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "0.01"
            },
            "depth": 4
        },
        "7038": {
            "name": "Shojin's Resolve",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Attack Damage<br><ornnBonus>500</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Dragonforce</passive> <br>Your Non-Ultimate spells gain Ability Haste.<br><br><passive>Focused Will</passive> <br>Spell hits grant stacks. Your spells deal increased damage for each stack.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3161"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7038.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "Damage",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatPhysicalDamageMod": 65
            },
            "depth": 4
        },
        "7039": {
            "name": "Heavensfall",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Attack Damage<br><ornnBonus>600</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Lightshield Strike</passive> <br>The first basic attack against a champion Crits and heals. Excess healing is granted as temporary bonus Health.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6610"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7039.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatPhysicalDamageMod": 60
            },
            "depth": 4
        },
        "7040": {
            "name": "Eye of the Storm",
            "description": "<mainText><stats><ornnBonus>80</ornnBonus> Attack Damage<br><ornnBonus>25%</ornnBonus> Attack Speed<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Bolt</passive><br>Your Energized Attack applies bonus magic damage and grants Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3095"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7040.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 80,
                "PercentAttackSpeedMod": 0.25
            },
            "depth": 4
        },
        "7041": {
            "name": "Wyrmfallen Sacrifice",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Attack Damage<br><ornnBonus>55%</ornnBonus> Attack Speed<br><attention>7%</attention> Move Speed</stats><br><br><passive>Bring It Down</passive><br>Every third basic attack deals additional physical damage on-hit, increasing when hitting the same target repeatedly.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6672"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7041.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "PercentAttackSpeedMod": 0.55,
                "PercentMovementSpeedMod": 0.07
            },
            "depth": 4
        },
        "7042": {
            "name": "The Baron's Gift",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>60%</ornnBonus> Attack Speed<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Icathian Bite</passive><br>Attacks apply <magicDamage>magic damage</magicDamage> <OnHit>On-Hit</OnHit>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3115"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7042.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 120,
                "PercentAttackSpeedMod": 0.6
            },
            "depth": 4
        },
        "7050": {
            "name": "Gangplank Placeholder",
            "description": "",
            "colloq": "",
            "plaintext": "New Gangplank interface coming soon!",
            "stacks": 0,
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "hideFromAll": true,
            "image": {
                "full": "7050.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "8001": {
            "name": "Anathema's Chains",
            "description": "<mainText><stats><attention>650</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Vendetta</passive><br>You gain Vendetta stacks over time Each stack of Vendetta grants you 1% reduced damage from your Nemesis.<br><br><passive>Vengeance</passive><br>At maximum stacks, your Nemesis has reduced Tenacity while near you.<br><br><br><br><active>ACTIVE</active> (0s)<br><active>Vow</active><br>Choose a <attention>Nemesis</attention>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "1011"
            ],
            "inStore": false,
            "image": {
                "full": "8001.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": false,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Health",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 650
            },
            "depth": 3
        },
        "8020": {
            "name": "Abyssal Mask",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>50</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><passive>Unmake</passive><br>Reduce nearby enemy champions' Magic Resist. For each enemy affected, gain Magic Resist.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "1057"
            ],
            "image": {
                "full": "8020.png",
                "sprite": "item5.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "CooldownReduction",
                "MagicPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatHPPoolMod": 300
            },
            "depth": 3
        },
        "126697": {
            "name": "Hubris<br>",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Eminence</passive><br>Gain temporary AD based on champion kills on kill.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "into": [
                "127008"
            ],
            "image": {
                "full": "126697.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "127008": {
            "name": "Ataraxia",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>27</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Eminence</passive><br>When a champion that you have damaged dies, gain Attack Damage.<br><br><passive>Ego</passive><br>Killing champions creates a statue of yourself, if you already have a statue it upgrades.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "126697"
            ],
            "requiredAlly": "Ornn",
            "image": {
                "full": "127008.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 4
        },
        "220000": {
            "name": "Stat Bonus",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a permanent stat bonus.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220000.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 750,
                "sell": 375
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "SpellDamage",
                "Mana",
                "Consumable",
                "CooldownReduction",
                "SpellVamp",
                "NonbootsMovement",
                "Tenacity",
                "MagicPenetration",
                "ArmorPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "220001": {
            "name": "Legendary Fighter Item",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a Legendary Fighter item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220001.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2000,
                "purchasable": true,
                "total": 2000,
                "sell": 2000
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Damage",
                "AttackSpeed",
                "LifeSteal",
                "Mana",
                "Consumable",
                "CooldownReduction",
                "SpellVamp",
                "OnHit",
                "NonbootsMovement",
                "Tenacity",
                "ArmorPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "220002": {
            "name": "Legendary Marksman Item",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a Legendary Marksman item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220002.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2000,
                "purchasable": true,
                "total": 2000,
                "sell": 2000
            },
            "tags": [
                "Health",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "Mana",
                "Consumable",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "220003": {
            "name": "Legendary Assassin Item",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a Legendary Assassin item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220003.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2000,
                "purchasable": true,
                "total": 2000,
                "sell": 2000
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Damage",
                "AttackSpeed",
                "Consumable",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "220004": {
            "name": "Legendary Mage Item",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a Legendary Mage item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220004.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2000,
                "purchasable": true,
                "total": 2000,
                "sell": 2000
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CriticalStrike",
                "AttackSpeed",
                "SpellDamage",
                "Mana",
                "Consumable",
                "Active",
                "CooldownReduction",
                "Slow",
                "SpellVamp",
                "OnHit",
                "NonbootsMovement",
                "MagicPenetration",
                "ArmorPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "220005": {
            "name": "Legendary Tank Item",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a Legendary Tank item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220005.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2000,
                "purchasable": true,
                "total": 2000,
                "sell": 2000
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CriticalStrike",
                "SpellDamage",
                "Consumable",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "MagicPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "220006": {
            "name": "Legendary Support Item",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a Legendary Support item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220006.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2000,
                "purchasable": true,
                "total": 2000,
                "sell": 2000
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AttackSpeed",
                "SpellDamage",
                "ManaRegen",
                "Consumable",
                "Active",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "NonbootsMovement",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "220007": {
            "name": "Prismatic Item",
            "description": "<mainText><stats></stats><br><br><active>Active - Consume:</active> Automatically open a semi-random selection for a Prismatic item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "220007.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 4000,
                "purchasable": true,
                "total": 4000,
                "sell": 4000
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "Consumable",
                "Active",
                "CooldownReduction",
                "Slow",
                "SpellVamp",
                "OnHit",
                "NonbootsMovement",
                "Tenacity",
                "MagicPenetration",
                "ArmorPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "221011": {
            "name": "Giant's Belt",
            "description": "<mainText><stats><attention>300</attention> Health</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221011.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": false,
                "total": 500,
                "sell": 350
            },
            "tags": [
                "Health"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300
            }
        },
        "221026": {
            "name": "Blasting Wand",
            "description": "<mainText><stats><attention>50</attention> Ability Power</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221026.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": false,
                "total": 850,
                "sell": 595
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 50
            }
        },
        "221031": {
            "name": "Chain Vest",
            "description": "<mainText><stats><attention>30</attention> Armor</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221031.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": false,
                "total": 500,
                "sell": 350
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatArmorMod": 30
            }
        },
        "221038": {
            "name": "B. F. Sword",
            "description": "<mainText><stats><attention>40</attention> Attack Damage</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221038.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1300,
                "purchasable": false,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40
            }
        },
        "221043": {
            "name": "Recurve Bow",
            "description": "<mainText><stats><attention>30%</attention> Attack Speed</stats><br><br>Attacks apply bonus physical damage On-Hit.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221043.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 280
            },
            "tags": [
                "AttackSpeed"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentAttackSpeedMod": 0.3
            }
        },
        "221053": {
            "name": "Vampiric Scepter",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>10%</attention> Life Steal</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221053.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "PercentLifeStealMod": 0.1
            }
        },
        "221057": {
            "name": "Negatron Cloak",
            "description": "<mainText><stats><attention>30</attention> Magic Resist</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221057.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": false,
                "total": 450,
                "sell": 315
            },
            "tags": [
                "SpellBlock"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 30
            }
        },
        "221058": {
            "name": "Needlessly Large Rod",
            "description": "<mainText><stats><attention>120</attention> Ability Power</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221058.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": false,
                "total": 1250,
                "sell": 875
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 120
            }
        },
        "222022": {
            "name": "Glowing Mote",
            "description": "<mainText><stats><attention>30</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "222022.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": false,
                "total": 250,
                "sell": 175
            },
            "tags": [
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "222051": {
            "name": "Guardian's Horn",
            "description": "<mainText><stats><buffedStat>300</buffedStat> Health</stats><br><br><br><li><passive>Recovery:</passive> Restores Health over time.<li><passive>Undaunted:</passive> Blocks damage from attacks and spells from champions.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "222051.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatHPRegenMod": 4
            },
            "effect": {
                "Effect1Amount": "12",
                "Effect2Amount": "0.25"
            }
        },
        "222065": {
            "name": "Shurelya's Battlesong",
            "description": "<mainText><stats><attention>55</attention> Ability Power<br><attention>15</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen<br><attention>5%</attention> Move Speed</stats><br><br><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Inspiring Speech</active><br>Grants nearby allies Move Speed for a few seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227020"
            ],
            "image": {
                "full": "222065.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 55,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "222141": {
            "name": "Cappa Juice",
            "description": "<mainText><stats></stats><br><br><rules>Helps you get on a head.</rules><active>Active - Consume:</active> This juice does nothing.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "222141.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 500
            },
            "tags": [
                "Damage",
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "222502": {
            "name": "Unending Despair",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>45</attention> Armor<br><attention>10</attention> Ability Haste</stats><br><br><passive>Anguish</passive><br>While in combat with champions, every few seconds, deal magic damage to nearby enemy champions, healing based on the damage dealt.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "222502.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 45
            }
        },
        "222503": {
            "name": "Blackfire Torch",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><passive>Baleful Blaze</passive><br>Dealing damage with Abilities causes enemies to burn. This damage increases to Monsters.<br><br><passive>Blackfire</passive><br>For each enemy Champion, Epic Monster, and Large Monster affected by your <passive>Baleful Blaze</passive>, gain <scaleAP>Ability Power</scaleAP>. </mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "222503.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 60
            }
        },
        "222504": {
            "name": "Kaenic Rookern",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>80</attention> Magic Resist<br><attention>150%</attention> Base Health Regen</stats><br><br><passive>Magebane</passive><br>After not taking <magicDamage>magic damage</magicDamage> for 15 seconds, gain a <magicDamage>magic shield for 0</magicDamage>. <br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "222504.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 80,
                "FlatHPPoolMod": 350
            }
        },
        "223001": {
            "name": "Evenshroud",
            "description": "<mainText><stats><buffedStat>400</buffedStat> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227023"
            ],
            "image": {
                "full": "223001.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 30
            }
        },
        "223002": {
            "name": "Trailblazer",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>40</attention> Armor<br><attention>5%</attention> Move Speed</stats><br><br><passive>Lead the Way</passive><br>While moving, gain <speed>20 bonus Move Speed</speed>. At max speed, create a trail that speeds up allied champion's Move Speed by 15% of yours. Your next Attack discharges the bonus Move Speed and Melee champions <keyword>Slow</keyword> the target by 50% for 1 second.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223002.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatArmorMod": 40,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "223003": {
            "name": "Archangel's Staff",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>600</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain Ability Power equal to bonus Mana.<br><li><passive>Mana Charge</passive><br><buffedStat>After 2 combat rounds</buffedStat>, this item transforms into <rarityLegendary>Seraph's Embrace</rarityLegendary>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223003.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 60
            }
        },
        "223004": {
            "name": "Manamune",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain bonus <scaleAD>Attack Damage equal to your max Mana</scaleAD>. <br><passive>Mana Charge</passive><br><buffedStat>After 2 combat rounds</buffedStat>, this item transforms into <rarityLegendary>Muramana</rarityLegendary>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223004.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 500,
                "FlatPhysicalDamageMod": 45
            }
        },
        "223005": {
            "name": "Ghostcrawlers",
            "description": "<mainText><stats><attention>55</attention> Move Speed</stats><br><br><br><br><active>Active -</active> <active>Wall Walk:</active> Gain the ability to walk through walls for 6 seconds. While inside walls, gain 300 move speed. Casting a spell or attacking will end this effect (0s).</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223005.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 55
            }
        },
        "223006": {
            "name": "Berserker's Greaves",
            "description": "<mainText><stats><buffedStat>45%</buffedStat> Attack Speed<br><attention>30</attention> Move Speed</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223006.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "AttackSpeed",
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 30,
                "PercentAttackSpeedMod": 0.45
            }
        },
        "223009": {
            "name": "Boots of Swiftness",
            "description": "<mainText><stats><buffedStat>70</buffedStat> Move Speed</stats><br><br>The strength of movement slowing effects is reduced by <buffedStat>40%</buffedStat>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223009.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 70
            },
            "effect": {
                "Effect1Amount": "0.4"
            }
        },
        "223011": {
            "name": "Chemtech Putrifier",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>12%</attention> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><attention>30</attention> Ability Haste</stats><br><br><passive>Puffcap Toxin</passive><br>Dealing damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds.<br><br><buffedStat>If an enemy heals for more than 80% of their maximum health while continously affected by <status>Grievous Wounds</status>, it is increased to <status>60% Grievous Wounds</status>.</buffedStat><br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223011.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 40
            }
        },
        "223020": {
            "name": "Sorcerer's Shoes",
            "description": "<mainText><stats><buffedStat>16</buffedStat> Magic Penetration<br><buffedStat>55</buffedStat> Move Speed</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223020.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Boots",
                "MagicPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 55
            },
            "effect": {
                "Effect1Amount": "22"
            }
        },
        "223026": {
            "name": "Guardian Angel",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>40</attention> Armor</stats><br><br><br><li><passive>Saving Grace:</passive> Upon taking lethal damage, restores <healing>50% base Health</healing> and <scaleMana>100% max Mana</scaleMana> after 4 seconds of stasis. This effect has a one round cooldown.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223026.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatArmorMod": 40,
                "FlatPhysicalDamageMod": 45
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "4",
                "Effect3Amount": "45",
                "Effect4Amount": "1"
            }
        },
        "223031": {
            "name": "Infinity Edge",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><attention>40%</attention> Critical Strike Damage</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227031"
            ],
            "image": {
                "full": "223031.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 55
            }
        },
        "223032": {
            "name": "Yun Tal Wildarrows",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Serrated Edge</passive><br>Critical Attacks apply a stacking bleed that deals <scaleAD>0 physical damage</scaleAD> over 2 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "223032.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": false,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "CriticalStrike"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 50
            }
        },
        "223033": {
            "name": "Mortal Reminder",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>30%</attention> Armor Penetration<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Sepsis</passive><br>Dealing physical damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><buffedStat>If an enemy heals for more than 80% of their maximum health while continously affected by <status>Grievous Wounds</status>, it is increased to <status>60% Grievous Wounds</status>.</buffedStat><br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223033.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 30
            }
        },
        "223036": {
            "name": "Lord Dominik's Regards",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><attention>40%</attention> Armor Penetration</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223036.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 30
            },
            "effect": {
                "Effect1Amount": "0.2"
            }
        },
        "223039": {
            "name": "Atma's Reckoning",
            "description": "<mainText><stats><attention>700</attention> Health<br><attention>20%</attention> Critical Strike Chance</stats><br><br><passive>Big Hands</passive><br>Gain 1% critical chance per 100 bonus health, up to 30%.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223039.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "CriticalStrike",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 700,
                "FlatCritChanceMod": 0.2
            }
        },
        "223040": {
            "name": "Seraph's Embrace",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>1000</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain Ability Power based on Mana.<br><br><passive>Lifeline</passive><br>Upon taking damage that would reduce your Health below 30%, gain a Shield based on your current Mana.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 223003,
            "inStore": false,
            "image": {
                "full": "223040.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatMagicDamageMod": 80
            }
        },
        "223042": {
            "name": "Muramana",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>860</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><passive>Awe</passive><br>Gain bonus Attack Damage based on Mana. <br><li><passive>Shock</passive><br>Attacks against champions deal additional physical damage.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 223004,
            "inStore": false,
            "image": {
                "full": "223042.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 860,
                "FlatPhysicalDamageMod": 45
            }
        },
        "223046": {
            "name": "Phantom Dancer",
            "description": "<mainText><stats><attention>60%</attention> Attack Speed<br><attention>12%</attention> Move Speed<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Spectral Waltz</passive><br>Become <status>Ghosted</status>.<br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223046.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.6,
                "PercentMovementSpeedMod": 0.12
            }
        },
        "223047": {
            "name": "Plated Steelcaps",
            "description": "<mainText><stats><buffedStat>25</buffedStat> Armor<br><attention>30</attention> Move Speed</stats><br><br>Reduces incoming damage from Attacks by <buffedStat>14%</buffedStat>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223047.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Armor",
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 30,
                "FlatArmorMod": 25
            },
            "effect": {
                "Effect1Amount": "0.14"
            }
        },
        "223050": {
            "name": "Zeke's Convergence",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>25</attention> Armor<br><attention>15</attention> Ability Haste<br><attention>25</attention> Magic Resist</stats><br><br><passive>Frostfire Tempest</passive> <br>Casting your Ultimate summons a storm around you. The storm deals magic damage to enemy Champions and <keyword>Slows</keyword> them.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223050.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 25
            }
        },
        "223053": {
            "name": "Sterak's Gage",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>20%</attention> Tenacity</stats><br><br><br><li><passive>The Claws that Catch:</passive> Gain base AD as bonus Attack Damage.<li><passive>Lifeline:</passive> Upon taking damage that would reduce your Health below 30%, gain a Shield, decaying over time, and Tenacity.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223053.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300
            }
        },
        "223057": {
            "name": "Sheen",
            "description": "<mainText><stats><attention>10</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2022"
            ],
            "inStore": false,
            "image": {
                "full": "223057.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": false,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {},
            "depth": 2
        },
        "223065": {
            "name": "Spirit Visage",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>40</attention> Magic Resist<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><br><passive>Boundless Vitality</passive><br>Increases all Healing and Shielding effectiveness on you by 30%.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223065.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 300
            }
        },
        "223067": {
            "name": "Kindlegem",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "223067.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Health",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300
            }
        },
        "223068": {
            "name": "Sunfire Aegis",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>40</attention> Armor<br><attention>10</attention> Ability Haste</stats><br><br><passive>Immolate</passive><br>Taking or dealing damage causes you to begin dealing <magicDamage> (12 + 2.5% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions) for 3 seconds. Damaging Champions or Epic Monsters with this effect adds a stack, increasing subsequent <passive>Immolate</passive> damage by 10% for 5 seconds (max stacks 10).<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223068.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Armor",
                "Aura",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 40
            }
        },
        "223071": {
            "name": "Black Cleaver",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>350</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Carve</passive><br>Dealing physical damage to a champion applies a stack of Armor reduction.<br><br><passive>Fervor</passive><br>Dealing physical damage grants Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223071.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatPhysicalDamageMod": 40
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0.06",
                "Effect3Amount": "6",
                "Effect4Amount": "5",
                "Effect5Amount": "0.3",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "0.01"
            }
        },
        "223072": {
            "name": "Bloodthirster",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>18%</attention> Life Steal</stats><br><br><passive>Ichorshield</passive><br>Convert healing received from your Lifesteal in excess of your maximum Health into a Shield.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223072.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "PercentLifeStealMod": 0.18
            }
        },
        "223073": {
            "name": "Experimental Hexplate",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>300</attention> Health</stats><br><br><passive>Hexcharged</passive><br>Your Ultimate spells gain Ability Haste.<br><br><passive>Overdrive</passive><br>After casting your Ultimate, gain Attack Speed and bonus Move Speed for a short duration.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223073.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 55,
                "PercentAttackSpeedMod": 0.25
            }
        },
        "223074": {
            "name": "Ravenous Hydra",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20</attention> Ability Haste<br><attention>15%</attention> Life Steal</stats><br><br><passive>Cleave</passive><br>Attacks deal physical damage to nearby enemies.<br><br><active>ACTIVE</active> (0s)<br><active>Ravenous Crescent</active><br>Deal physical damage to enemies around you that Lifesteals.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223074.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "PercentLifeStealMod": 0.15
            }
        },
        "223075": {
            "name": "Thornmail",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>60</attention> Armor</stats><br><br><br><li><passive>Thorns:</passive> When struck by an Attack, deal damage to the attacker and apply 40% <status>Grievous Wounds</status> if they are a champion.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223075.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Armor"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 60
            }
        },
        "223078": {
            "name": "Trinity Force",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>300</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with  additional physical damage.<br><br><passive>Quicken</passive><br>Basic attacks grant Move Speed.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227018"
            ],
            "image": {
                "full": "223078.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.25
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            }
        },
        "223084": {
            "name": "Heartsteel",
            "description": "<mainText><stats><attention>700</attention> Health<br><attention>200%</attention> Base Health Regen<br><attention>10</attention> Ability Haste</stats><br><br><passive>Colossal Consumption</passive> (0s) per target<br>Charge up a powerful attack against a champion over 0s while within 700 range of them. The charged attack deals <physicalDamage>125 + <scaleHealth>12% Item Health</scaleHealth> bonus physical damage</physicalDamage>, and grants 12% of that damage as<scaleHealth> permanent max Health.</scaleHealth><br><br><passive>Goliath</passive><br>For each <scaleHealth>1000 max Health</scaleHealth>, gain 3% increased size, up to 30%. </mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227025"
            ],
            "image": {
                "full": "223084.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 700
            }
        },
        "223085": {
            "name": "Runaan's Hurricane",
            "description": "<mainText><stats><attention>45%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><passive>Wind's Fury</passive><br>When Attacking, bolts are fired at up to 2 enemies near the target. Bolts apply On-Hit effects and can Critically Strike.<br><br><rules>Item is for Ranged champions only.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223085.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.45,
                "PercentMovementSpeedMod": 0.07
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect3Amount": "2",
                "Effect4Amount": "0",
                "Effect5Amount": "40",
                "Effect6Amount": "1"
            }
        },
        "223087": {
            "name": "Statikk Shiv",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>40%</attention> Attack Speed</stats><br><br><li><passive>Electroshock:</passive> Fires chain lightning that bounces to nearby enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223087.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "PercentAttackSpeedMod": 0.4,
                "PercentMovementSpeedMod": 0.07
            }
        },
        "223089": {
            "name": "Rabadon's Deathcap",
            "description": "<mainText><stats><attention>70</attention> Ability Power</stats><br><br><passive>Magical Opus</passive><br>Increases your total <scaleAP>Ability Power by 35%</scaleAP>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223089.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 70
            }
        },
        "223091": {
            "name": "Wit's End",
            "description": "<mainText><stats><attention>50%</attention> Attack Speed<br><attention>40</attention> Magic Resist<br><attention>20%</attention> Tenacity</stats><br><br><br><li><passive>Fray:</passive> Attacks apply magic damage On-Hit and grant Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223091.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellBlock",
                "AttackSpeed",
                "OnHit",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "PercentAttackSpeedMod": 0.5
            }
        },
        "223094": {
            "name": "Rapid Firecannon",
            "description": "<mainText><stats><attention>30%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><br><li><passive>Energized</passive><br>Moving and Attacking generates an Energized Attack.<li><passive>Sharpshooter:</passive> Your Energized Attack applies bonus damage. In addition, Energized attacks gain Attack Range.<br><br><rules>Attack Range cannot increase more than 150 units.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223094.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.3,
                "PercentMovementSpeedMod": 0.07
            }
        },
        "223095": {
            "name": "Stormrazor",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance</stats><br><br><br><li><passive>Energized</passive><br>Moving and Attacking generates an Energized Attack.<li><passive>Bolt:</passive> Your Energized Attack applies bonus magic damage and grants Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223095.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "CriticalStrike"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 45,
                "PercentAttackSpeedMod": 0.25
            }
        },
        "223100": {
            "name": "Lich Bane",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>10%</attention> Move Speed<br><attention>20</attention> Ability Haste</stats><br><br><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional magic damage.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223100.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80,
                "PercentMovementSpeedMod": 0.1
            }
        },
        "223102": {
            "name": "Banshee's Veil",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>50</attention> Magic Resist</stats><br><br><passive>Annul</passive><br>Grants a Spell Shield that blocks the next enemy Ability.<br><br><rules>Item cooldown is restarted if you take damage from champions before it is completed.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223102.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellBlock",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatMagicDamageMod": 80
            },
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "45",
                "Effect3Amount": "10",
                "Effect4Amount": "-0.1",
                "Effect5Amount": "8",
                "Effect6Amount": "2"
            }
        },
        "223105": {
            "name": "Aegis of the Legion",
            "description": "<mainText><stats><attention>25</attention> Armor<br><attention>25</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "223105.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": false,
                "total": 450,
                "sell": 315
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatArmorMod": 25
            }
        },
        "223107": {
            "name": "Redemption",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>16%</attention> Heal and Shield Power<br><attention>15</attention> Ability Haste</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Intervention</active><br>Target an area within. After 2.5 seconds, call down a beam of light to restore Health to allies and damage enemy champions.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223107.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300
            }
        },
        "223109": {
            "name": "Knight's Vow",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>40</attention> Armor<br><attention>15</attention> Ability Haste<br><attention>125%</attention> Base Health Regen</stats><br><br><br><br><passive>Sacrifice:</passive> While your <attention>Worthy</attention> ally is nearby, redirect damage they take to you and heal based on the damage dealt by your <attention>Worthy</attention> ally to Champions.<br><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Pledge</active><br>Designate an ally who is <attention>Worthy</attention>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223109.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Armor",
                "Aura",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 40
            }
        },
        "223110": {
            "name": "Frozen Heart",
            "description": "<mainText><stats><attention>90</attention> Armor<br><attention>400</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><passive>Winter's Caress</passive><br>Reduces the <attackSpeed>Attack Speed</attackSpeed> of nearby enemies.<br><br><passive>Rock Solid</passive><br> Reduce incoming damage from Attacks.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223110.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Armor",
                "Mana",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatArmorMod": 90
            }
        },
        "223111": {
            "name": "Mercury's Treads",
            "description": "<mainText><stats><buffedStat>35</buffedStat> Magic Resist<br><attention>30</attention> Move Speed<br><buffedStat>35%</buffedStat> Tenacity</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223111.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Boots",
                "SpellBlock",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatMovementSpeedMod": 30
            }
        },
        "223112": {
            "name": "Guardian's Orb",
            "description": "<mainText><stats><attention>55</attention> Ability Power<br><attention>25</attention> Ability Haste</stats><br><br><passive>Recovery</passive><br>Restores Mana over time. If you can't gain mana, restores Health instead.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223112.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 55
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "223115": {
            "name": "Nashor's Tooth",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>45%</attention> Attack Speed<br><attention>10</attention> Ability Haste</stats><br><br><passive>Icathian Bite</passive><br>Attacks apply magic damage <OnHit>On-Hit</OnHit>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223115.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 70,
                "PercentAttackSpeedMod": 0.45
            }
        },
        "223116": {
            "name": "Rylai's Crystal Scepter",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>350</attention> Health</stats><br><br><passive>Rimefrost</passive><br>Damaging Abilities <status>Slow</status> enemies by 30% for 1 second.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223116.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Slow"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 60
            },
            "effect": {
                "Effect1Amount": "-0.3",
                "Effect2Amount": "-0.3",
                "Effect3Amount": "-0.3",
                "Effect4Amount": "1",
                "Effect5Amount": "1",
                "Effect6Amount": "1"
            }
        },
        "223118": {
            "name": "Malignance",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><passive>Scorn</passive><br>Your Ultimate spells gain Ability Haste.<br><br><passive>Hatefog</passive><br>Damaging a champion with your Ultimate <keywordMajor>Burns</keywordMajor> the ground beneath them, dealing damage and reducing their Magic Resist. </mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223118.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 70
            }
        },
        "223119": {
            "name": "Winter's Approach",
            "description": "<mainText><stats><attention>500</attention> Health<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><br><br><li><passive>Awe:</passive> Gain bonus <scaleHealth>Health equal to Total Mana</scaleHealth>.<li><passive>Mana Charge:</passive> <buffedStat>After 2 combat rounds</buffedStat>, this item transforms into <rarityLegendary>Fimbulwinter</rarityLegendary>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223119.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 500,
                "FlatHPPoolMod": 500
            }
        },
        "223121": {
            "name": "Fimbulwinter",
            "description": "<mainText><stats><attention>500</attention> Health<br><attention>860</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><li><passive>Awe:</passive> Gain bonus Health based on Mana.<li><passive>Everlasting:</passive> <status>Immobilizing</status> or <status>Slowing</status> an enemy champion grants a Shield. The Shield is increased if more than one enemy is nearby.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 223119,
            "inStore": false,
            "image": {
                "full": "223121.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 860,
                "FlatHPPoolMod": 500
            }
        },
        "223124": {
            "name": "Guinsoo's Rageblade",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>25</attention> Ability Power<br><attention>25%</attention> Attack Speed</stats><br><br><br><li><passive>Wrath:</passive> Attacks apply bonus damage <OnHit>On-Hit</OnHit>.<br><li><passive>Seething Strike:</passive> Basic attacks grant bonus <attackSpeed>Attack Speed</attackSpeed>, stacking up to a cap. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227030"
            ],
            "image": {
                "full": "223124.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 25,
                "FlatPhysicalDamageMod": 20,
                "PercentAttackSpeedMod": 0.25
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "4",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            }
        },
        "223135": {
            "name": "Void Staff",
            "description": "<mainText><stats><attention>65</attention> Ability Power<br><attention>40%</attention> Magic Penetration</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223135.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 65
            }
        },
        "223137": {
            "name": "Cryptbloom",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>30%</attention> Magic Penetration<br><attention>10</attention> Ability Haste</stats><br><br><passive>Life from Death</passive><br>Whenever you get a takedown on an enemy champion, create a nova on their location that heals allies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223137.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 60
            }
        },
        "223139": {
            "name": "Mercurial Scimitar",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>50</attention> Magic Resist<br><attention>10%</attention> Life Steal</stats><br><br><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs and gain Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223139.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "Active",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatPhysicalDamageMod": 45,
                "PercentLifeStealMod": 0.1
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1.5",
                "Effect3Amount": "45"
            }
        },
        "223142": {
            "name": "Youmuu's Ghostblade",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>22</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Haunt</passive> <br>Gain <speed>Move Speed</speed> while out of combat.<br><br><br><active>ACTIVE</active> (0s)<br><active>Wraith Step</active><br>Gain Move Speed and Ghosting.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227029"
            ],
            "image": {
                "full": "223142.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            }
        },
        "223143": {
            "name": "Randuin's Omen",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>75</attention> Armor</stats><br><br><passive>Resilience</passive><br>Critical Strikes deal 30% less damage to you.<br><br><br><br><active>ACTIVE</active> (0s)<br><active>Humility</active><br><status>Slow</status> nearby enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223143.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Armor",
                "Active",
                "Slow"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 75
            }
        },
        "223146": {
            "name": "Hextech Gunblade",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>45</attention> Attack Damage<br><attention>15%</attention> Omnivamp</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Lightning Bolt</active><br>Shocks the target enemy champion, dealing 0 magic damage and slowing them by 40% for 2 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223146.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "SpellDamage",
                "Active",
                "SpellVamp"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 90,
                "FlatPhysicalDamageMod": 45
            }
        },
        "223152": {
            "name": "Hextech Rocketbelt",
            "description": "<mainText><stats><attention>95</attention> Ability Power<br><attention>400</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><br><br><active>Active -</active> <active>Supersonic:</active> Dash in target direction, unleashing an arc of magic missiles that deal damage. Then, gain Move Speed towards enemy champions.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227011"
            ],
            "image": {
                "full": "223152.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 95
            }
        },
        "223153": {
            "name": "Blade of The Ruined King",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>20%</attention> Attack Speed<br><attention>10%</attention> Life Steal</stats><br><br><passive>Mist's Edge</passive><br>Attacks apply an additional enemy current Health physical damage <OnHit>On-Hit</OnHit>.<br><br><passive>Clawing Shadows</passive> (0s)<br>Your first basic attack against a champion Slows them.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223153.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "LifeSteal",
                "Slow",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.2,
                "PercentLifeStealMod": 0.1
            }
        },
        "223156": {
            "name": "Maw of Malmortius",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>15</attention> Ability Haste<br><attention>40</attention> Magic Resist</stats><br><br><passive>Lifeline</passive><br>Upon taking magic damage that would reduce Health below 30%, gain a magic damage Shield. When <passive>Lifeline</passive> triggers, gain Omnivamp until the end of combat.  </mainText>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "image": {
                "full": "223156.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatPhysicalDamageMod": 50
            }
        },
        "223157": {
            "name": "Zhonya's Hourglass",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>50</attention> Armor</stats><br><br><active>Time Stop</active><br>Enter <keyword>Stasis</keyword> for 2.5 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223157.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80,
                "FlatArmorMod": 50
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "120"
            }
        },
        "223158": {
            "name": "Ionian Boots of Lucidity",
            "description": "<mainText><stats><buffedStat>40</buffedStat> Ability Haste<br><attention>45</attention> Move Speed</stats><br><br>Gain 12 Summoner Spell Haste.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223158.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Boots",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            }
        },
        "223161": {
            "name": "Spear of Shojin",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>300</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Dragonforce</passive> <br>Your Non-Ultimate spells gain Ability Haste.<br><br><passive>Focused Will</passive> <br>Spell hits grant stacks. Your spells deal increased damage for each stack.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223161.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatPhysicalDamageMod": 40
            }
        },
        "223165": {
            "name": "Morellonomicon",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>250</attention> Health<br><attention>10</attention> Ability Haste</stats><br><br><passive>Affliction</passive><br>Dealing magic damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><buffedStat>If an enemy heals for more than 80% of their maximum health while continously affected by <status>Grievous Wounds</status>, it is increased to <status>60% Grievous Wounds</status>.</buffedStat><br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223165.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 80
            }
        },
        "223172": {
            "name": "Zephyr",
            "description": "<mainText><stats><attention>50%</attention> Attack Speed<br><attention>10%</attention> Move Speed<br><attention>30</attention> Ability Haste<br><attention>20%</attention> Tenacity</stats><br><br><passive>Like the Wind</passive><br>Gain 5% Move Speed <OnHit>On-Hit</OnHit> for 6 seconds, stacking up to 25% Move Speed.<br><br><rules>Tenacity reduces the duration of <status>Stun</status>, <status>Slow</status>, <status>Taunt</status>, <status>Fear</status>, <status>Silence</status>, <status>Blind</status>, <status>Polymorph</status> and <status>Immobilizing</status> effects. It has no effect on <status>Airborne</status> or <status>Suppression</status>.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "223172.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.5,
                "PercentMovementSpeedMod": 0.1
            }
        },
        "223177": {
            "name": "Guardian's Blade",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>250</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223177.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatPhysicalDamageMod": 25
            },
            "effect": {
                "Effect1Amount": "10"
            }
        },
        "223181": {
            "name": "Hullbreaker",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>450</attention> Health<br><attention>5%</attention> Move Speed</stats><br><br><passive>Skipper</passive><br>Every fifth Attack against Champions deals <physicalDamage>bonus physical damage</physicalDamage>.<br><br><passive>Solo Party</passive><br><buffedStat>While no allied champions are within 900 range of you, gain Armor and Magic Resist</buffedStat>. <br><br><rules>Solo Party's resistances decay over 3 seconds when an ally gets too close.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223181.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Damage",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatMovementSpeedMod": 0.05,
                "FlatPhysicalDamageMod": 55,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "223184": {
            "name": "Guardian's Hammer",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>35%</attention> Attack Speed<br><attention>5%</attention> Life Steal</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223184.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "PercentAttackSpeedMod": 0.35,
                "PercentLifeStealMod": 0.05
            }
        },
        "223185": {
            "name": "Guardian's Dirk",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>15</attention> Lethality<br><attention>10</attention> Ability Haste</stats><br><br><passive>Agricultural Reaper</passive> <br>Increases effects of Power Flower by 25%. Gain 100 Move speed for 3s after attacking a plant.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223185.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 250
            },
            "tags": [
                "Damage",
                "ArmorPenetration",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 25
            }
        },
        "223190": {
            "name": "Locket of the Iron Solari",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>35</attention> Armor<br><attention>35</attention> Magic Resist<br><attention>25</attention> Ability Haste</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Devotion</active><br>Grant nearby allies a <shield>Shield</shield>, decaying over time.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227019"
            ],
            "image": {
                "full": "223190.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "Active",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 35
            }
        },
        "223193": {
            "name": "Gargoyle Stoneplate",
            "description": "<mainText><stats><nerfedStat>35</nerfedStat> Armor<br><nerfedStat>35</nerfedStat> Magic Resist<br><attention>15</attention> Ability Haste</stats><br><br><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Unbreakable</active><br>Gain a Shield that decays and grow in size.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223193.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatArmorMod": 35
            }
        },
        "223222": {
            "name": "Mikael's Blessing",
            "description": "<mainText><stats><buffedStat>400</buffedStat> Health<br><attention>100%</attention> Base Mana Regen<br><buffedStat>16%</buffedStat> Heal and Shield Power</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Purify</active><br>Restore Health and Remove all crowd control debuffs (except <status>Knockups</status> and <status>Suppression</status>) from an ally champion.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223222.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "Tenacity",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400
            }
        },
        "223302": {
            "name": "Terminus",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>25%</attention> Attack Speed</stats><br><br><passive>Shadow</passive><br>Attacks apply magic damage <OnHit>On-Hit</OnHit>.<br><br><passive>Juxtaposition</passive><br>Alternate between <keywordMajor>Light</keywordMajor> and <keywordMajor>Dark</keywordMajor> on-hits when attacking champions: <li><keywordMajor>Light</keywordMajor> attacks grant <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>.<li><keywordMajor>Dark</keywordMajor> attacks grant <scaleArmor>Armor Penetration</scaleArmor> and <scaleMR>Magic Penetration</scaleMR>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223302.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.25
            }
        },
        "223504": {
            "name": "Ardent Censer",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>12%</attention> Heal and Shield Power<br><attention>125%</attention> Base Mana Regen<br><attention>8%</attention> Move Speed</stats><br><br><passive>Sanctify</passive><br>Healing or Shielding another ally enhances you both for 6 seconds, granting your Attacks <attackSpeed>40%</attackSpeed> Attack Speed and <magicDamage>25 magic damage</magicDamage> <OnHit>On-Hit</OnHit>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223504.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "ManaRegen",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 30,
                "PercentMovementSpeedMod": 0.08
            }
        },
        "223508": {
            "name": "Essence Reaver",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>20</attention> Ability Haste<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Essence Drain</passive><br>Basic attacks refund mana on-hit.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223508.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ManaRegen",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 50
            }
        },
        "223742": {
            "name": "Dead Man's Plate",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>40</attention> Armor<br><attention>7%</attention> Move Speed</stats><br><br><passive>Shipwrecker</passive><br>While moving, build up  Move Speed. Your next Attack discharges built up Move Speed to deal damage. If dealt by a Melee champion at top speed, the Attack also <status>Slows</status> the target.<br><br><passive>Unsinkable</passive><br>The strength of movement slowing effects is reduced.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223742.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Armor",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 40,
                "PercentMovementSpeedMod": 0.07
            }
        },
        "223748": {
            "name": "Titanic Hydra",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>400</attention> Health</stats><br><br><passive>Cleave</passive><br>Attacks apply an additional <physicalDamage>0 physical damage</physicalDamage> <OnHit>On-Hit</OnHit> and deal <physicalDamage>0 physical damage</physicalDamage> to enemies behind the target.<br><br><active>ACTIVE</active><br><active>Titanic Crescent</active><br>On your next attack, <passive>Cleave</passive> will deal bonus physical damage to your target and in a nearby shockwave.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223748.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 40
            }
        },
        "223814": {
            "name": "Edge of Night",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>14</attention> Lethality<br><attention>375</attention> Health</stats><br><br><passive>Annul</passive> (0s)<br>Gain a Spell Shield that blocks the next enemy Ability.<br><br><rules>Item's cooldown is restarted if you take damage before it is completed.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "image": {
                "full": "223814.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 375,
                "FlatPhysicalDamageMod": 45
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "40"
            }
        },
        "224004": {
            "name": "Spectral Cutlass",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>21</attention> Lethality</stats><br><br><br><br><active>Active -</active> <active>Soul Anchor</active> (0s)<br>Mark your current location. After 5 seconds, return to that location.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224004.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            }
        },
        "224005": {
            "name": "Imperial Mandate",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>35</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><br><passive>Coordinated Fire</passive><br><status>Slowing</status> or <status>Immobilizing</status> an enemy champion marks them and causes Ally champion to deal bonus damage to them and grant you both Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224005.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 60
            }
        },
        "224401": {
            "name": "Force of Nature",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>50</attention> Magic Resist<br><attention>5%</attention> Move Speed</stats><br><br><passive>Absorb</passive><br>Taking <magicDamage>magic damage</magicDamage> from enemy Champions grants a stack of <attention>Steadfast</attention>. Enemy <status>Immobilizing</status> effects grant additional stacks.<br><li><passive>Dissipate</passive><br>While at max stacks of <attention>Steadfast</attention>, gain increased Magic Resist and Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224401.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatHPPoolMod": 400,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "224403": {
            "name": "The Golden Spatula",
            "description": "<mainText><stats><attention>100</attention> Attack Damage<br><attention>150</attention> Ability Power<br><attention>70%</attention> Attack Speed<br><attention>35%</attention> Critical Strike Chance<br><attention>350</attention> Health<br><attention>40</attention> Armor<br><attention>40</attention> Magic Resist<br><attention>350</attention> Mana<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Move Speed<br><attention>15%</attention> Life Steal<br><attention>200%</attention> Base Health Regen<br><attention>200%</attention> Base Mana Regen</stats><br><br><passive>Doing Something</passive><br>You are permanently On Fire!</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224403.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 687,
                "purchasable": true,
                "total": 687,
                "sell": 481
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatMPPoolMod": 350,
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 150,
                "FlatArmorMod": 40,
                "FlatCritChanceMod": 0.35,
                "FlatPhysicalDamageMod": 100,
                "PercentAttackSpeedMod": 0.7,
                "PercentLifeStealMod": 0.15,
                "PercentMovementSpeedMod": 0.1
            }
        },
        "224628": {
            "name": "Horizon Focus",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>20</attention> Ability Haste</stats><br><br><passive>Hypershot</passive><br>Damaging a champion with a non-targeted Ability at over 600 range or <status>Slowing or Immobilizing</status> them <keywordStealth>Reveals</keywordStealth> them and increases their damage taken from you.<br><br><rules>The Ability that triggers <passive>Hypershot</passive> also benefits from the damage increase. Pets and non-immobilizing traps do not trigger this effect. Only the initial placement of zone Abilities will trigger this effect. Distance is measured from the Ability cast position. </rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224628.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80
            }
        },
        "224629": {
            "name": "Cosmic Drive",
            "description": "<mainText><stats><attention>250</attention> Health<br><attention>65</attention> Ability Power<br><attention>35</attention> Ability Haste<br><attention>5%</attention> Move Speed</stats><br><br><passive>Spelldance</passive><br>Damaging an enemy champion with an Ability grants <speed>0 Move Speed</speed> for 2s. </mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224629.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 65,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "224633": {
            "name": "Riftmaker",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>350</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><passive>Void Corruption</passive><br>For each second in combat with enemy champions, deal bonus damage. At maximum strength, gain Omnivamp.<br><br><passive>Void Infusion</passive><br>Gain a % of your bonus Health as Ability Power. </mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227009"
            ],
            "image": {
                "full": "224633.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 60
            }
        },
        "224636": {
            "name": "Night Harvester",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>400</attention> Health<br><buffedStat>40</buffedStat> Ability Haste</stats><br><br><passive>Soulrend</passive><br>Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227010"
            ],
            "image": {
                "full": "224636.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 90
            }
        },
        "224637": {
            "name": "Demonic Embrace",
            "description": "<mainText><stats><nerfedStat>45</nerfedStat> Ability Power<br><attention>350</attention> Health</stats><br><br><passive>Azakana's Gaze</passive><br>Dealing Ability damage burns enemies for max Health magic damage every second.<br><br><passive>Dark Pact</passive> <br>Gain <scaleHealth>bonus Health</scaleHealth> as <scaleAP>Ability Power</scaleAP>. </mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224637.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 45
            }
        },
        "224644": {
            "name": "Crown of the Shattered Queen",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>250</attention> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><passive>Safeguard</passive><br>You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227024"
            ],
            "image": {
                "full": "224644.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 80
            }
        },
        "224645": {
            "name": "Shadowflame",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>10</attention> Magic Penetration</stats><br><br><passive>Cinderbloom</passive><br><magicDamage>Magic damage</magicDamage> and <trueDamage>true damage</trueDamage> critically strikes low Health enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224645.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "MagicPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 100
            }
        },
        "224646": {
            "name": "Stormsurge",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>10</attention> Magic Penetration<br><attention>8%</attention> Move Speed</stats><br><br><passive>Stormraider</passive><br>Dealing 35% of a champion's maximum Health within a short duration applies <passive>Squall</passive> and grants Move Speed.<br><br><passive>Squall</passive><br>After a few seconds, strike the target, dealing magic damage. If the target dies before the strike, it detonates immediately, dealing damage in a large area and grants bonus gold.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224646.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "GoldPer",
                "NonbootsMovement",
                "MagicPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80,
                "PercentMovementSpeedMod": 0.08
            }
        },
        "226035": {
            "name": "Silvermere Dawn",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><buffedStat>400</buffedStat> Health<br><attention>40</attention> Magic Resist</stats><br><br><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs and gain Tenacity and Slow Resistance.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "226035.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Damage",
                "Active",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 40
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "45"
            }
        },
        "226333": {
            "name": "Death's Dance",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>10</attention> Ability Haste<br><attention>40</attention> Armor</stats><br><br><passive>Ignore Pain</passive><br>Damage taken is dealt to you over time instead.<br><br><passive>Defy</passive><br>Champion takedowns cleanse <passive>Ignore Pain's</passive> remaining damage pool and restore Health over time.</mainText>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "image": {
                "full": "226333.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Armor",
                "Damage",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatArmorMod": 40,
                "FlatPhysicalDamageMod": 45
            }
        },
        "226609": {
            "name": "Chempunk Chainsword",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>400</attention> Health<br><attention>10</attention> Ability Haste</stats><br><br><passive>Hackshorn</passive><br>Dealing physical damage applies 40% <status>Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><buffedStat>If an enemy heals for more than 80% of their maximum health while continously affected by <status>Grievous Wounds</status>, it is increased to <status>60% Grievous Wounds</status>.</buffedStat><br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226609.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 45
            }
        },
        "226610": {
            "name": "Sundered Sky",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>350</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><passive>Lightshield Strike</passive><br>The first Attack against a champion Crits and heals. <br><br><rules>Excess healing is granted as temporary bonus Health.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226610.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatPhysicalDamageMod": 40
            }
        },
        "226616": {
            "name": "Staff of Flowing Water",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>12%</attention> Heal and Shield Power<br><attention>125%</attention> Base Mana Regen<br><attention>10%</attention> Move Speed</stats><br><br><passive>Rapids</passive><br>Healing or Shielding another ally grants you both Ability Power and Ability Haste.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226616.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 30,
                "PercentMovementSpeedMod": 0.1
            }
        },
        "226617": {
            "name": "Moonstone Renewer",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>200</attention> Health<br><attention>30</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><br><passive>Starlit Grace</passive><br>Healing or shielding an ally chains to the nearest ally champion (excluding yourself), healing or shielding based on the original amount.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227021"
            ],
            "image": {
                "full": "226617.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 30
            }
        },
        "226620": {
            "name": "Echoes of Helia",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>300</attention> Health<br><attention>30</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><br><br><li><passive>Soul Siphon:</passive> Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to restore Health and deals magic damage per Shard to the nearest enemy champion.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227033"
            ],
            "image": {
                "full": "226620.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 30
            }
        },
        "226621": {
            "name": "Dawncore",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>16%</attention> Heal and Shield Power<br><attention>100%</attention> Base Mana Regen</stats><br><br><passive>First Light</passive><br>Gain <healing>2% Heal and Shield Power</healing> and <scaleAP>10 Ability Power</scaleAP> per 100% Base Mana Regen.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226621.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "ManaRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 60
            }
        },
        "226630": {
            "name": "Goredrinker",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>400</attention> Health<br><attention>10</attention> Ability Haste<br><attention>8%</attention> Omnivamp</stats><br><br>Goredrinker<br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "into": [
                "227015"
            ],
            "image": {
                "full": "226630.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 45
            }
        },
        "226631": {
            "name": "Stridebreaker",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>15%</attention> Attack Speed<br><attention>375</attention> Health</stats><br><br><passive>Cleave</passive><br>Attacks deal physical damage to nearby enemies.<br><br><passive>Temper</passive><br>Dealing <physicalDamage>physical damage</physicalDamage> grants Move Speed.<br><br><active>ACTIVE</active><br><active>Breaking Shockwave</active><br>Deal physical damage and <status>Slow</status> nearby enemies and gain Move Speed per champion. Can move while casting.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227016"
            ],
            "image": {
                "full": "226631.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 375,
                "FlatPhysicalDamageMod": 50,
                "PercentAttackSpeedMod": 0.15
            }
        },
        "226632": {
            "name": "Divine Sunderer",
            "description": "<mainText><stats><nerfedStat>30</nerfedStat> Attack Damage<br><nerfedStat>200</nerfedStat> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227017"
            ],
            "image": {
                "full": "226632.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatPhysicalDamageMod": 30
            }
        },
        "226653": {
            "name": "Liandry's Torment",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>250</attention> Health</stats><br><br><passive>Torment</passive><br>Dealing damage with Abilities causes enemies to burn.<br><br><passive>Suffering</passive><br>For each second in combat with enemy champions, gain increased damage. </mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227012"
            ],
            "image": {
                "full": "226653.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 50
            }
        },
        "226655": {
            "name": "Luden's Companion",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><passive>Fire</passive><br>Damaging Abilities consume all the charges to deal an additional magic damage to the target and one additional nearby target per charge. If there are insufficient targets in range, for each remaining shot, repeat the damage on the primary target.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227013"
            ],
            "image": {
                "full": "226655.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 80
            }
        },
        "226656": {
            "name": "Everfrost",
            "description": "<mainText><stats><buffedStat>80</buffedStat> Ability Power<br><buffedStat>500</buffedStat> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Glaciate</active><br> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227014"
            ],
            "image": {
                "full": "226656.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 80
            }
        },
        "226657": {
            "name": "Rod of Ages",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>350</attention> Health<br><attention>350</attention> Mana</stats><br><br><passive>Timeless</passive><br><buffedStat>After 2 combat rounds</buffedStat>, this item gains an additional <magicDamage>0 Ability Power</magicDamage>, <scaleHealth>0 Health</scaleHealth>, and <scaleMana>0 Mana</scaleMana>, and you gain a level.<br><br><passive>Eternity</passive><br>Taking damage from champions restores 7% of premitigation damage as <scaleMana>Mana</scaleMana>. Casting an ability heals for 25% of <scaleMana>Mana</scaleMana> spent, up to <scaleHealth>20 Health</scaleHealth> per cast, per second.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227028"
            ],
            "image": {
                "full": "226657.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 350,
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 60
            }
        },
        "226662": {
            "name": "Iceborn Gauntlet",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>45</attention> Armor<br><attention>10</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2s. Enemies that move across the field are <status>Slowed</status>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227005"
            ],
            "image": {
                "full": "226662.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 45
            }
        },
        "226664": {
            "name": "Hollow Radiance",
            "description": "<mainText><stats><attention>450</attention> Health<br><attention>40</attention> Magic Resist<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><br><passive>Immolate</passive><br>Taking or dealing damage causes you to begin dealing magic damage to nearby enemies.<br><br><passive>Desolate</passive><br>Killing an enemy deals magic damage in an area around them.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226664.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Aura",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 450
            }
        },
        "226665": {
            "name": "Jak'Sho, The Protean",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>35</attention> Armor<br><attention>35</attention> Magic Resist</stats><br><br><passive>Voidborn Resilience</passive><br>During combat with champions become empowered, increasing your bonus <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> until end of combat.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227026"
            ],
            "image": {
                "full": "226665.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "MagicResist"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 35
            }
        },
        "226667": {
            "name": "Radiant Virtue",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227027"
            ],
            "image": {
                "full": "226667.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 30
            }
        },
        "226671": {
            "name": "Galeforce",
            "description": "<mainText><stats><buffedStat>60</buffedStat> Attack Damage<br><buffedStat>40%</buffedStat> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227006"
            ],
            "image": {
                "full": "226671.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatPhysicalDamageMod": 60,
                "PercentAttackSpeedMod": 0.4,
                "PercentMovementSpeedMod": 0.07
            }
        },
        "226672": {
            "name": "Kraken Slayer",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>35%</attention> Attack Speed<br><attention>7%</attention> Move Speed</stats><br><br><br><li><passive>Bring It Down:</passive> Every third basic attack deals additional physical damage on-hit, increasing when hitting the same target repeatedly.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226672.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.35,
                "PercentMovementSpeedMod": 0.07
            }
        },
        "226673": {
            "name": "Immortal Shieldbow",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Lifeline</passive><br>When taking damage that would reduce you below 30% Health, gain a Shield.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226673.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "CriticalStrike"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 40
            }
        },
        "226675": {
            "name": "Navori Flickerblade",
            "description": "<mainText><stats><attention>35%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><passive>Transcendence</passive><br>Your Attacks reduce your non-Ultimate Ability cooldowns.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227032"
            ],
            "image": {
                "full": "226675.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "PercentAttackSpeedMod": 0.35,
                "PercentMovementSpeedMod": 0.07
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            }
        },
        "226676": {
            "name": "The Collector",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><attention>18</attention> Lethality</stats><br><br><passive>Death and Taxes</passive><br>Dealing damage that would leave an enemy champion below 5% Health executes them.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226676.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 45
            }
        },
        "226691": {
            "name": "Duskblade of Draktharr",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><buffedStat>22</buffedStat> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (10(0s)).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227002"
            ],
            "image": {
                "full": "226691.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            }
        },
        "226692": {
            "name": "Eclipse",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>10</attention> Ability Haste</stats><br><br><passive>Ever Rising Moon</passive><br>Hitting a champion with 2 separate Attacks or Abilities within 2 seconds deals additional damage, grants you Move Speed and a Shield.</mainText>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227001"
            ],
            "image": {
                "full": "226692.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50
            }
        },
        "226693": {
            "name": "Prowler's Claw",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><buffedStat>22</buffedStat> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><br><br><li><passive>Sandstrike:</passive> After dashing, blinking, or exiting Stealth, your next Attack on a champion deals an additional physical damage. If dealt by a Melee champion, this Attack also <status>Slows</status> the target.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226693.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            }
        },
        "226694": {
            "name": "Serylda's Grudge",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>10</attention> Ability Haste</stats><br><br><passive>Rancor</passive><br>Gain 0 Armor Penetration.<br><br><passive>Bitter Cold</passive><br>Damaging Abilities <status>Slow</status> enemies under 50% Health by 30% for 1 second.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226694.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40
            }
        },
        "226695": {
            "name": "Serpent's Fang",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>19</attention> Lethality</stats><br><br><passive>Shield Reaver</passive><br>Dealing damage to an enemy champion reduces any shields they gain. When you damage an enemy who is unaffected by Shield Reaver, reduce all shields on them.<br><br>Item performance differs for melee and ranged users.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226695.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            }
        },
        "226696": {
            "name": "Axiom Arc",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>22</attention> Lethality<br><attention>25</attention> Ability Haste</stats><br><br><passive>Apophthegm</passive><br><buffedStat>Your Ultimate Abilities deal 20% increased damage</buffedStat>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226696.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45
            }
        },
        "226697": {
            "name": "Hubris",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>10</attention> Ability Haste</stats><br><br><passive>Eminence</passive><br>Gain temporary AD based on champion kills on kill.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226697.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50
            }
        },
        "226698": {
            "name": "Profane Hydra",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><passive>Cleave</passive><br>Attacks apply additional damage <OnHit>On-Hit</OnHit>, creating a shockwave that deals damage to enemies behind the target.<br><br><active>ACTIVE</active><br><active>Heretical Cleave</active><br>Deal physical damage to nearby enemies. This damage increases on low Health enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226698.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50
            }
        },
        "226699": {
            "name": "Voltaic Cyclosword",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>20</attention> Ability Haste</stats><br><br><passive>Galvanize</passive><br>Dashes and Stealth stack Energized faster.<br><br><passive>Firmament</passive><br>Your Energized Attack deals bonus physical damage and slows enemies.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226699.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50
            }
        },
        "226701": {
            "name": "Opportunity",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>5%</attention> Move Speed</stats><br><br><passive>Eminence</passive><br>When a champion that you have damaged dies, gain Attack Damage.<br><br><passive>Ego</passive><br>Killing champions creates a statue of yourself, if you already have a statue it upgrades.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226701.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "227001": {
            "name": "Syzygy",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Attack Damage<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Ever Rising Moon</passive><br>Hitting a champion with 2 separate Attacks or Abilities within 20 seconds deals additional damage, grants you Move Speed and a Shield.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226692"
            ],
            "inStore": false,
            "image": {
                "full": "227001.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 90
            },
            "depth": 2
        },
        "227002": {
            "name": "Draktharr's Shadowcarver",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (10(0s)).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226691"
            ],
            "inStore": false,
            "image": {
                "full": "227002.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 2
        },
        "227005": {
            "name": "Frozen Fist",
            "description": "<mainText><stats><ornnBonus>550</ornnBonus> Health<br><ornnBonus>70</ornnBonus> Armor<br><ornnBonus>15</ornnBonus> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2s. Enemies that move across the field are <status>Slowed</status>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226662"
            ],
            "inStore": false,
            "image": {
                "full": "227005.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatArmorMod": 70
            },
            "depth": 2
        },
        "227006": {
            "name": "Typhoon",
            "description": "<mainText><stats><ornnBonus>80</ornnBonus> Attack Damage<br><ornnBonus>55%</ornnBonus> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><ornnBonus>10%</ornnBonus> Move Speed</stats><br><br><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226671"
            ],
            "inStore": false,
            "image": {
                "full": "227006.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatPhysicalDamageMod": 80,
                "PercentAttackSpeedMod": 0.55,
                "PercentMovementSpeedMod": 0.1
            },
            "depth": 2
        },
        "227009": {
            "name": "Icathia's Curse",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>600</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Void Corruption</passive><br>For each second in combat with enemy champions, deal bonus damage. At maximum strength, gain Omnivamp.<br><br><passive>Void Infusion</passive><br>Gain a % of your bonus Health as Ability Power. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "224633"
            ],
            "inStore": false,
            "image": {
                "full": "227009.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatMagicDamageMod": 90
            },
            "depth": 2
        },
        "227010": {
            "name": "Vespertide",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>500</ornnBonus> Health<br><ornnBonus>50</ornnBonus> Ability Haste</stats><br><br><passive>Soulrend</passive><br>Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "224636"
            ],
            "inStore": false,
            "image": {
                "full": "227010.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 120
            },
            "depth": 2
        },
        "227011": {
            "name": "Upgraded Aeropack",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>15</ornnBonus> Magic Penetration<br><ornnBonus>500</ornnBonus> Health</stats><br><br><br><br><active>Active -</active> <active>Supersonic:</active> Dash in target direction, unleashing an arc of magic missiles that deal damage. Then, gain Move Speed towards enemy champions.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223152"
            ],
            "inStore": false,
            "image": {
                "full": "227011.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 120
            },
            "depth": 2
        },
        "227012": {
            "name": "Liandry's Lament",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>800</ornnBonus> Mana</stats><br><br><passive>Torment</passive><br>Dealing damage with Abilities causes enemies to burn.<br><br><passive>Suffering</passive><br>For each second in combat with enemy champions, gain increased damage. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226653"
            ],
            "inStore": false,
            "image": {
                "full": "227012.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 100
            },
            "depth": 2
        },
        "227013": {
            "name": "Force of Arms",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>13</ornnBonus> Magic Penetration<br><ornnBonus>800</ornnBonus> Mana</stats><br><br><passive>Fire</passive><br>Damaging Abilities consume all the charges to deal an additional magic damage to the target and one additional nearby target per charge. If there are insufficient targets in range, for each remaining shot, repeat the damage on the primary target.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226655"
            ],
            "inStore": false,
            "image": {
                "full": "227013.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 100
            },
            "depth": 2
        },
        "227014": {
            "name": "Eternal Winter",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>650</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Glaciate</active><br> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226656"
            ],
            "inStore": false,
            "image": {
                "full": "227014.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatHPPoolMod": 650,
                "FlatMagicDamageMod": 100
            },
            "depth": 2
        },
        "227015": {
            "name": "Ceaseless Hunger",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>600</attention> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>12%</ornnBonus> Omnivamp</stats><br><br>Goredrinker<br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226630"
            ],
            "inStore": false,
            "image": {
                "full": "227015.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatPhysicalDamageMod": 65
            },
            "depth": 2
        },
        "227016": {
            "name": "Dreamshatter",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><ornnBonus>30%</ornnBonus> Attack Speed<br><ornnBonus>400</ornnBonus> Health</stats><br><br><passive>Cleave</passive><br>Attacks deal physical damage to nearby enemies.<br><br><passive>Temper</passive><br>Dealing <physicalDamage>physical damage</physicalDamage> grants Move Speed.<br><br><active>ACTIVE</active><br><active>Breaking Shockwave</active><br>Deal physical damage and <status>Slow</status> nearby enemies and gain Move Speed per champion. Can move while casting.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226631"
            ],
            "inStore": false,
            "image": {
                "full": "227016.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatPhysicalDamageMod": 60,
                "PercentAttackSpeedMod": 0.3
            },
            "depth": 2
        },
        "227017": {
            "name": "Deicide",
            "description": "<mainText><stats><nerfedStat>55</nerfedStat> Attack Damage<br><nerfedStat>350</nerfedStat> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226632"
            ],
            "inStore": false,
            "image": {
                "full": "227017.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatPhysicalDamageMod": 55
            },
            "depth": 2
        },
        "227018": {
            "name": "Infinity Force",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><ornnBonus>45%</ornnBonus> Attack Speed<br><attention>445</attention> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with  additional physical damage.<br><br><passive>Quicken</passive><br>Basic attacks grant Move Speed.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223078"
            ],
            "inStore": false,
            "image": {
                "full": "227018.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 445,
                "FlatPhysicalDamageMod": 45,
                "PercentAttackSpeedMod": 0.45
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            },
            "depth": 2
        },
        "227019": {
            "name": "Reliquary of the Golden Dawn",
            "description": "<mainText><stats><attention>600</attention> Health<br><ornnBonus>35</ornnBonus> Ability Haste<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Devotion</active><br>Grant nearby allies a <shield>Shield</shield>, decaying over time.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223190"
            ],
            "inStore": false,
            "image": {
                "full": "227019.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "Active",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 600,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227020": {
            "name": "Shurelya's Requiem",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Ability Power<br><ornnBonus>600</ornnBonus> Health<br><attention>200%</attention> Base Mana Regen<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><br><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Inspiring Speech</active><br>Grants nearby allies Move Speed for a few seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "222065"
            ],
            "inStore": false,
            "image": {
                "full": "227020.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatMagicDamageMod": 75,
                "PercentMovementSpeedMod": 0.05
            },
            "depth": 2
        },
        "227021": {
            "name": "Starcaster",
            "description": "<mainText><stats><ornnBonus>80</ornnBonus> Ability Power<br><ornnBonus>300</ornnBonus> Health<br><ornnBonus>35</ornnBonus> Ability Haste<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><br><passive>Starlit Grace</passive><br>Healing or shielding an ally chains to the nearest ally champion (excluding yourself), healing or shielding based on the original amount.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226617"
            ],
            "inStore": false,
            "image": {
                "full": "227021.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 80
            },
            "depth": 2
        },
        "227023": {
            "name": "Equinox",
            "description": "<mainText><stats><ornnBonus>600</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223001"
            ],
            "inStore": false,
            "image": {
                "full": "227023.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 600,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227024": {
            "name": "Caesura",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>350</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Safeguard</passive><br>You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "224644"
            ],
            "inStore": false,
            "image": {
                "full": "227024.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 100
            },
            "depth": 2
        },
        "227025": {
            "name": "Leviathan",
            "description": "<mainText><stats><ornnBonus>1050</ornnBonus> Health<br><ornnBonus>300%</ornnBonus> Base Health Regen<br><ornnBonus>15</ornnBonus> Ability Haste</stats><br><br><passive>Colossal Consumption</passive> (0s) per target<br>Charge up a powerful attack against a champion over 0s while within 700 range of them. The charged attack deals <physicalDamage>125 + <scaleHealth>12% Item Health</scaleHealth> bonus physical damage</physicalDamage>, and grants 12% of that damage as<scaleHealth> permanent max Health.</scaleHealth><br><br><passive>Goliath</passive><br>For each <scaleHealth>1000 max Health</scaleHealth>, gain 3% increased size, up to 30%. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223084"
            ],
            "inStore": false,
            "image": {
                "full": "227025.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 1050
            },
            "depth": 2
        },
        "227026": {
            "name": "The Unspoken Parasite",
            "description": "<mainText><stats><attention>450</attention> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist</stats><br><br><passive>Voidborn Resilience</passive><br>During combat with champions become empowered, increasing your bonus <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> until end of combat.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226665"
            ],
            "inStore": false,
            "image": {
                "full": "227026.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "MagicResist"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 450,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227027": {
            "name": "Primordial Dawn",
            "description": "<mainText><stats><ornnBonus>550</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226667"
            ],
            "inStore": false,
            "image": {
                "full": "227027.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatHPPoolMod": 550,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227028": {
            "name": "Infinite Convergence",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>550</ornnBonus> Health<br><ornnBonus>550</ornnBonus> Mana</stats><br><br><passive>Timeless</passive><br><buffedStat>After 2 combat rounds</buffedStat>, this item gains an additional <magicDamage>0 Ability Power</magicDamage>, <scaleHealth>0 Health</scaleHealth>, and <scaleMana>0 Mana</scaleMana>, and you gain a level.<br><br><passive>Eternity</passive><br>Taking damage from champions restores 7% of premitigation damage as <scaleMana>Mana</scaleMana>. Casting an ability heals for 25% of <scaleMana>Mana</scaleMana> spent, up to <scaleHealth>20 Health</scaleHealth> per cast, per second.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226657"
            ],
            "inStore": false,
            "image": {
                "full": "227028.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 550,
                "FlatHPPoolMod": 550,
                "FlatMagicDamageMod": 90
            },
            "depth": 2
        },
        "227029": {
            "name": "Youmuu's Wake",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Haunt</passive> <br>Gain <speed>Move Speed</speed> while out of combat.<br><br><br><active>ACTIVE</active> (0s)<br><active>Wraith Step</active><br>Gain <speed>Move Speed</speed> and <keyword>Ghosting</keyword>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223142"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227029.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "effect": {
                "Effect1Amount": "45",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "6",
                "Effect6Amount": "40"
            },
            "depth": 2
        },
        "227030": {
            "name": "Seething Sorrow",
            "description": "<mainText><stats><ornnBonus>35</ornnBonus> Attack Damage<br><ornnBonus>35</ornnBonus> Ability Power<br><ornnBonus>40%</ornnBonus> Attack Speed</stats><br><br><passive>Wrath</passive><br>Attacks apply <magicDamage>30 magic damage <OnHit>On-Hit</OnHit></magicDamage>.<br><br><passive>Seething Strike</passive><br>Basic attacks grant <attackSpeed>8% Attack Speed</attackSpeed>, stacking up to 4 times for a maximum of <attackSpeed>0 Attack Speed</attackSpeed>. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223124"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227030.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 35,
                "FlatPhysicalDamageMod": 35,
                "PercentAttackSpeedMod": 0.4
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "4",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            },
            "depth": 2
        },
        "227031": {
            "name": "Edge of Finality",
            "description": "<mainText><stats><ornnBonus>105</ornnBonus> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><attention>40%</attention> Critical Strike Damage</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223031"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227031.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 105
            },
            "depth": 2
        },
        "227032": {
            "name": "Flicker",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Attack Damage<br><attention>25%</attention> Critical Strike Chance<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><passive>Transcendence</passive><br>Your Attacks reduce your non-Ultimate Ability cooldowns.<br><br><passive>Impermanence</passive><br>Your abilities deal increased damage based on Critical Strike Chance. </mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226675"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227032.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 90,
                "PercentAttackSpeedMod": 0.4,
                "PercentMovementSpeedMod": 0.07
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 2
        },
        "227033": {
            "name": "Cry of the Shrieking City",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Ability Power<br><ornnBonus>500</ornnBonus> Health<br><ornnBonus>45</ornnBonus> Ability Haste<br><ornnBonus>225%</ornnBonus> Base Mana Regen</stats><br><br><br><li><passive>Soul Siphon:</passive> Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to restore Health and deals magic damage per Shard to the nearest enemy champion.<br><li><passive>Dissonance:</passive> Gain <scaleAP>Ability Power</scaleAP> per <scaleMana> Base Mana Regeneration</scaleMana>. Disables Harmony.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Ability Haste.</attention><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226620"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227033.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 60
            },
            "depth": 2
        },
        "228001": {
            "name": "Anathema's Chains",
            "description": "<mainText><stats><attention>600</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><passive>Vendetta:</passive><br>Take reduced damage against your Nemesis. They have reduced Tenacity while near you.<br><br><rules>Active can be cast at global range.</rules><br><br><flavorText>\"She swore to dedicate her life to his destruction...\"</flavorText><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Vow</active><br>Choose a <attention>Nemesis</attention>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "228001.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 600
            }
        },
        "228002": {
            "name": "Wooglet's Witchcap",
            "description": "<mainText><stats><ornnBonus>300</ornnBonus> Ability Power<br><ornnBonus>50</ornnBonus> Armor<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><passive>Magical Opus</passive><br>Increases your total <scaleAP>Ability Power by 50%</scaleAP>.<br><br><b>Requires Augment: <prismatic>Quest: Wooglet's Witchcap</prismatic></b><active>Time Stop</active><br>Enter <keyword>Stasis</keyword> for 2.5 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "228002.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 6000,
                "purchasable": true,
                "total": 6000,
                "sell": 4200
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 300,
                "FlatArmorMod": 50
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "20"
            }
        },
        "228003": {
            "name": "Deathblade",
            "description": "<mainText><stats><ornnBonus>150</ornnBonus> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>45%</attention> Critical Strike Damage<br><ornnBonus>20</ornnBonus> Lethality</stats><br><br><br><li><passive>Death and Taxes:</passive> Dealing damage that would leave an enemy champion below 7% Health executes them. Champion kills grant an additional 250 gold and heal you for 30% of the targets max health.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228003.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 9000,
                "purchasable": false,
                "total": 9000,
                "sell": 6300
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatPhysicalDamageMod": 150
            }
        },
        "228004": {
            "name": "Adaptive Helm",
            "description": "<mainText><stats><ornnBonus>800</ornnBonus> Health<br><ornnBonus>50</ornnBonus> Armor<br><ornnBonus>100</ornnBonus> Magic Resist</stats><br><br><br><li><passive>Voidborn Resilience:</passive> For each second in champion combat gain a stack granting 2 <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>, up to 8 stacks max. At max stacks become empowered, instantly draining enemies around you for <magicDamage>magic damage</magicDamage> (healing you for the same amount), and increasing your bonus resists by 20% until end of combat. The drain repeats every 4s as long as you stay in combat.<li><passive>Absorb:</passive> Taking <magicDamage>magic damage</magicDamage> from enemy Champions grants a stack of <attention>Steadfast</attention> (max 8) for 7 seconds. Enemy <status>Immobilizing</status> effects grant an additional 2 stacks.<li><passive>Dissipate:</passive> While at 8 stacks of <attention>Steadfast</attention>, gain <scaleMR>50 Magic Resist</scaleMR> and 14% increased Move Speed.<br><rules>One spell can add a new stack of <attention>Steadfast</attention> every 1 second.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228004.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 6000,
                "purchasable": false,
                "total": 6000,
                "sell": 4200
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "MagicResist"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 100,
                "FlatHPPoolMod": 800,
                "FlatArmorMod": 50,
                "PercentMovementSpeedMod": 0.05
            }
        },
        "228005": {
            "name": "Obsidian Cleaver",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>700</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Ability Haste</stats><br><br><passive>Carve</passive><br>Dealing physical damage to a champion applies a stack of Armor reduction.<br><br><passive>Fervor</passive><br>Dealing physical damage grants Move Speed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228005.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 700,
                "FlatPhysicalDamageMod": 70
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0.07",
                "Effect3Amount": "6",
                "Effect4Amount": "5",
                "Effect5Amount": "0.42",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "0.01"
            }
        },
        "228006": {
            "name": "Sanguine Blade",
            "description": "<mainText><stats><ornnBonus>130</ornnBonus> Attack Damage<br><ornnBonus>40%</ornnBonus> Attack Speed<br><ornnBonus>20</ornnBonus> Ability Haste<br><ornnBonus>30%</ornnBonus> Life Steal</stats><br><br><br><li><passive>Cleave:</passive> Attacks and Abilities deal <physicalDamage>{{ Item_Melee_Ranged_Split }} physical damage</physicalDamage> to other enemies within 600 units of the target hit and triggering on-hit effects.<br><li><passive>Mist's Edge:</passive> Attacks apply an additional <nerfedStat>{{ Item_Melee_Ranged_Split_B }} enemy current Health physical damage</nerfedStat> {{ Item_Keyword_OnHit }}.<li><passive>Siphon:</passive> Attacking a champion 3 times deals <magicDamage>0 magic damage</magicDamage> and steals <speed>25% Move Speed</speed> for 2 seconds (30{{ Item_Cooldown }}).<br><rules>Maximum <passive>Mist's Edge</passive> damage dealt to minions and jungle monsters is 60.<br>{{ Item_Melee_Ranged_Rules }}</rules>{{ Item_OnActivation }} {{ Item_Cooldown }}<br><active>Ravenous Crescent</active><br>Deal physical damage to enemies around you that Lifesteals.</mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228006.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 130,
                "PercentAttackSpeedMod": 0.4,
                "PercentLifeStealMod": 0.3
            }
        },
        "228008": {
            "name": "Runeglaive",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Attack Damage<br><ornnBonus>85</ornnBonus> Ability Power<br><ornnBonus>33%</ornnBonus> Attack Speed<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>600</ornnBonus> Health<br><ornnBonus>50</ornnBonus> Armor<br><ornnBonus>10%</ornnBonus> Move Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228008.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 9000,
                "purchasable": false,
                "total": 9000,
                "sell": 6300
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatMagicDamageMod": 85,
                "FlatArmorMod": 50,
                "FlatCritChanceMod": 0.2,
                "FlatPhysicalDamageMod": 65,
                "PercentAttackSpeedMod": 0.33,
                "PercentMovementSpeedMod": 0.1
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            }
        },
        "228020": {
            "name": "Abyssal Mask",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>50</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><passive>Unmake</passive><br>Reduce nearby enemy champions' Magic Resist. For each enemy affected, gain Magic Resist.</mainText>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "228020.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2500,
                "purchasable": true,
                "total": 2500,
                "sell": 1250
            },
            "tags": [
                "Health",
                "SpellBlock",
                "CooldownReduction",
                "MagicPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatHPPoolMod": 300
            }
        },
        "443054": {
            "name": "Darksteel Talons",
            "description": "<mainText><stats><attention>50%</attention> Attack Speed<br><attention>55</attention> Armor<br><attention>10%</attention> Move Speed</stats><br><br><passive>Gash</passive><br>Attacks apply  true damage on hit.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443054.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Armor",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatArmorMod": 55,
                "PercentAttackSpeedMod": 0.5,
                "PercentMovementSpeedMod": 0.1
            }
        },
        "443055": {
            "name": "Fulmination",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>45%</attention> Attack Speed<br><attention>15%</attention> Move Speed</stats><br><br><passive>Polarity</passive><br>On Attack, if the target is different from the target you most recently triggered an <keyword>Energized Attack</keyword> on, ready Energize. <br><br><passive>Dynamo</passive><br><keyword>Energized Attacks</keyword> deal an additional magic damage based on the <magicDamage>Target's Current Health</magicDamage>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443055.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "PercentAttackSpeedMod": 0.45,
                "PercentMovementSpeedMod": 0.15
            }
        },
        "443056": {
            "name": "Demon King's Crown",
            "description": "<mainText><stats></stats><br><br><passive>Supremacy</passive><br>Increases your Health, Armor, Magic Resist, Attack Damage, Ability Power, Attack Speed, and Ability Haste by 26%, increased by 0% per round win and -3% each round lost after acquiring this item.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443056.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "Armor",
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "443058": {
            "name": "Shield of Molten Stone",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>100</attention> Armor</stats><br><br><passive>Immovable as the Earth</passive><br>Increase your armor by 20%, and gain Block Chance based on your Armor.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443058.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "Armor"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 100
            }
        },
        "443059": {
            "name": "Cloak of Starry Night",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>100</attention> Magic Resist</stats><br><br><passive>Limitless as the Stars</passive><br>Increase your Magic Resist by 20%. Reduce all damage you take from non-Basic Attack sources by a percentage, scaling with your Magic Resist up to a cap of 50%.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443059.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "MagicResist"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 100,
                "FlatHPPoolMod": 300
            }
        },
        "443060": {
            "name": "Sword of the Divine",
            "description": "<mainText><stats><attention>110</attention> Adaptive Force<br><attention>40%</attention> Critical Strike Chance</stats><br><br><passive>Excoriate</passive><br>Each Critical strike deals random <keyword>bonus Critical Strike Damage</keyword>, scaling up to 50% of your Critical Strike Chance.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443060.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.4
            }
        },
        "443061": {
            "name": "Force Of Entropy",
            "description": "<mainText><stats><attention>900</attention> Health<br><attention>30</attention> Ability Haste<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Atrophy</passive><br>Immobilizing Crowd Control effects you apply roll your <keyword>Critical Chance</keyword> to increase their duration by 0.25 +33% seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443061.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CriticalStrike",
                "MagicResist"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 900,
                "FlatCritChanceMod": 0.25
            }
        },
        "443062": {
            "name": "Sanguine Gift",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>20</attention> Ability Haste<br><attention>15%</attention> Heal and Shield Power</stats><br><br><passive>Patronage</passive><br>Store 15% of the total damage you've dealt to enemies. Whenever this exceeds 333, consume it to heal yourself and your nearest ally for that amount.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443062.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "SpellDamage",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80
            }
        },
        "443063": {
            "name": "Eleisa's Miracle",
            "description": "<mainText><stats><attention>65</attention> Armor<br><attention>65</attention> Magic Resist<br><attention>25</attention> Ability Haste</stats><br><br><passive>Enduring Vitality</passive><br>Gain +1% Heal and Shield Power per 100 Missing Health, up to 35%.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443063.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 65,
                "FlatArmorMod": 65
            }
        },
        "443064": {
            "name": "Talisman Of Ascension",
            "description": "<mainText><stats></stats><br><br><attention>?</attention> Attack Damage<br><attention>?</attention> Attack Speed<br><attention>?</attention> Critical Strike Chance<br><attention>?</attention> Critical Strike Damage<br><br><attention>? </attention> Ability Power<br><attention>?</attention> Ability Haste<br><br><attention>?</attention> Health<br><attention>?%</attention> Base Health Regen<br><attention>?</attention> Mana<br><attention>?%</attention> Base Mana Regen<br><attention>?</attention> Armor<br><attention>?</attention> Magic Resist<br><br><attention>? || ?%</attention> Lethality and Armor Penetration<br><attention>? || ?%</attention> Magic Penetration<br><attention>?%</attention> Lifesteal<br><attention>?%</attention> Omnivamp<br><attention>? || ?%</attention> Move Speed<br><attention>?%</attention> Heal and Shield Power<br><br><br><active>ACTIVE</active><br><active>Imbricate</active> Re-roll the stats on Talisman of Ascension. Each time you do so, the stats get stronger. Twice Per Round (Thrice with Apex Inventor).</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443064.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "NonbootsMovement",
                "MagicPenetration",
                "ArmorPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "443069": {
            "name": "Hamstringer",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>40%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance</stats><br><br><passive>Scour</passive><br>On Critical Strike:<li> Apply a bleed, dealing 0 physical damage over 2 seconds. This effect stacks any number of times.<li> Apply a 7% Slow for 2 seconds. This effect stacks up to 35%.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443069.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 50,
                "PercentAttackSpeedMod": 0.4
            }
        },
        "443079": {
            "name": "Turbo Chemtank",
            "description": "<mainText><stats><attention>1100</attention> Health<br><attention>15%</attention> Move Speed</stats><br><br><passive>Charged</passive><br>The strength of movement slowing effects is reduced by 30%.<br><br><br><br><active>ACTIVE</active> (0s)<br><active>Supercharged</active><br>For 4 seconds, gain 80% Move Speed when facing visible enemy champions. When an enemy champion is nearby or after the duration ends, unleash a shockwave, slowing nearby enemies for 50% for 2 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443079.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 1100,
                "PercentMovementSpeedMod": 0.15
            }
        },
        "443193": {
            "name": "Gargoyle Stoneplate",
            "description": "<mainText><stats><attention>75</attention> Armor<br><attention>75</attention> Magic Resist<br><attention>15</attention> Ability Haste<br><attention>10%</attention> Move Speed</stats><br><br><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Unbreakable</active><br>Gain a Shield that decays and grow in size.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "443193.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 75,
                "FlatArmorMod": 75,
                "PercentMovementSpeedMod": 0.1
            }
        },
        "444636": {
            "name": "Night Harvester",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>400</attention> Health<br><attention>40</attention> Ability Haste</stats><br><br><passive>Soulrend</passive><br>Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br></mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "444636.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 90
            }
        },
        "444637": {
            "name": "Demonic Embrace",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>600</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Sinister Pact</passive><br>Gain +4% <scaleAP>Ability Power</scaleAP> per 300 Missing Health, up to 40%.<br><br><active>ACTIVE</active> (0s)<br><active>Price of Power</active><br>Sacrifice 300 health to gain 100% Move Speed decaying over 2 seconds. This is non-fatal.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "444637.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatMagicDamageMod": 80
            }
        },
        "444644": {
            "name": "Crown of the Shattered Queen",
            "description": "<mainText><stats><attention>85</attention> Ability Power<br><attention>300</attention> Health<br><attention>600</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><passive>Safeguard</passive><br>You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 3 seconds after taking champion damage.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "444644.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 85
            }
        },
        "446632": {
            "name": "Divine Sunderer",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>350</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><passive>Spellblade</passive><br>After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br><br></mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "446632.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatPhysicalDamageMod": 55
            }
        },
        "446656": {
            "name": "Everfrost",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>500</attention> Health<br><attention>600</attention> Mana<br><attention>25</attention> Ability Haste</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Glaciate</active><br> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "446656.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 100
            }
        },
        "446667": {
            "name": "Radiant Virtue",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>35</attention> Armor<br><attention>35</attention> Magic Resist<br><attention>12%</attention> Heal and Shield Power</stats><br><br><passive>Guiding Light</passive><br>Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "446667.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 35
            }
        },
        "446671": {
            "name": "Galeforce",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>25%</attention> Critical Strike Chance<br><attention>12%</attention> Move Speed</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Cloudburst II</active> <br>Dash in target direction <buffedStat>over terrain</buffedStat>, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "446671.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.25,
                "FlatPhysicalDamageMod": 65,
                "PercentAttackSpeedMod": 0.3,
                "PercentMovementSpeedMod": 0.12
            }
        },
        "446691": {
            "name": "Duskblade of Draktharr",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>22</attention> Lethality<br><attention>20</attention> Ability Haste</stats><br><br><passive>Nightstalker</passive><br>Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (0s).</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "446691.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            }
        },
        "446693": {
            "name": "Prowler's Claw",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>22</attention> Lethality<br><attention>20</attention> Ability Haste</stats><br><br><br><br><li><passive>Sandstrike:</passive> After dashing, blinking, or exiting Stealth, your next Attack on a champion deals an additional physical damage. If dealt by a Melee champion, this Attack also <status>Slows</status> the target.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "446693.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65
            }
        },
        "447100": {
            "name": "Mirage Blade",
            "description": "<mainText><stats><attention>65</attention> Adaptive Force<br><attention>60%</attention> Attack Speed<br><attention>12%</attention> Move Speed</stats><br><br><passive>Blur</passive><br>On-Hit reduce the remaining cooldowns of your <status>Dash</status> and <status>Blink</status> Abilities by 12% (reduced to 4% for Ultimates).</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447100.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentAttackSpeedMod": 0.6,
                "PercentMovementSpeedMod": 0.12
            }
        },
        "447101": {
            "name": "Gambler's Blade",
            "description": "<mainText><stats><attention>70%</attention> Attack Speed<br><attention>40</attention> Ability Haste<br><attention>8%</attention> Move Speed</stats><br><br><passive>Money In The Bank</passive><br>Your Attacks and Abilities have a 12% chance to bank between 30 and 245 Gold when they hit an enemy. On Round Win, cash out. On Round Lose, lose 25% of your bank.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447101.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "AttackSpeed",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentAttackSpeedMod": 0.7,
                "PercentMovementSpeedMod": 0.08
            }
        },
        "447102": {
            "name": "Reality Fracture",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>40%</attention> Attack Speed<br><attention>300</attention> Health</stats><br><br><passive>ZZ'Rot</passive> (0s)<br>On Attack or when damaging an enemy with an ability, summon 3 Voidgrubs to Attack the target. Voidgrubs deal <magicDamage>0 magic damage</magicDamage> and live for up to 5 seconds.<br><br>When you die, spawn 6.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447102.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "AttackSpeed",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 80,
                "PercentAttackSpeedMod": 0.4
            }
        },
        "447103": {
            "name": "Hemomancer's Helm",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>30</attention> Ability Haste<br><attention>10%</attention> Omnivamp</stats><br><br><passive>Scarlet Allegiance</passive><br>Threshold 30% Lifesteal/Omnivamp: Gain <healing>500 Max Health</healing>. Drain 10% of all damage nearby enemies take.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447103.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            }
        },
        "447104": {
            "name": "Innervating Locket",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>20</attention> Ability Haste<br><attention>200</attention> Health</stats><br><br><passive>Fill the Soul</passive><br>Any Ability cast within 800 range grants you a charge.<br><br>At 30 charges, gain <shield>0 Shield</shield>, <scaleAP>0 Ability Power</scaleAP>, and <speed>0 Move Speed</speed> for the rest of the round.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447104.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellDamage",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 70
            }
        },
        "447105": {
            "name": "Empyrean Promise",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>18%</attention> Heal and Shield Power<br><attention>30</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><br><br><br><active>ACTIVE</active> (0s)<br><active>Vigilance</active><br>Teleport to your ally and grant <shield>0 shield</shield> for 5s when landing. Can be used when Ally is downed.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447105.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 60
            }
        },
        "447106": {
            "name": "Dragonheart",
            "description": "<mainText><stats></stats><br><br><passive>Inner Flame</passive><br>Increases your <scaleHealth>Health</scaleHealth>, <scaleArmor>Armor</scaleArmor>, <scaleMR>Magic Resist</scaleMR>, <physicalDamage>Attack Damage</physicalDamage>, <magicDamage>Ability Power</magicDamage>, <attackSpeed>Attack Speed</attackSpeed>, and Ability Haste by 5%, increased by 5% per Dragon Soul you possess.<br><br>Every 2 rounds, gain a Dragon Soul.<br><br>If you already have every elemental soul, an ancient power awakens within...<br><br><rules>When purchased, if it is past round 5, immediately gain 1 soul, plus 1 for every 2 rounds beyond round 5.</rules></mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447106.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Armor",
                "Damage",
                "AttackSpeed",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "447107": {
            "name": "Decapitator",
            "description": "<mainText><stats><attention>80</attention> Adaptive Force<br><attention>50%</attention> Attack Speed<br><attention>12%</attention> Move Speed</stats><br><br>Attacks and Non-Ultimate Abilities grant stacks. Gain Ultimate Damage and Ultimate Ability Haste per stack.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447107.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentAttackSpeedMod": 0.5,
                "PercentMovementSpeedMod": 0.12
            }
        },
        "447108": {
            "name": "Runecarver",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>20</attention> Ability Haste<br><attention>8%</attention> Move Speed</stats><br><br><passive>Helix</passive><br>Dealing damage with an ability grants 40 Energized stacks and triggers Energized Attacks if it is ready.<br><br><passive>Spiral Out</passive><br>On Energized Attack, gain a <keyword>Rune</keyword> stack for the rest of the round. Then fire a missile at the target for each <keyword>Rune</keyword> stack, dealing 0 magic damage for each missile.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447108.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "SpellDamage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80,
                "PercentMovementSpeedMod": 0.08
            }
        },
        "447109": {
            "name": "Cruelty",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist</stats><br><br><passive>Watch Them Fall</passive><br>On <status>Immobilize</status> an enemy champion, summon a comet above them. The comet lands after 1 second, dealing additional <magicDamage>0 magic damage</magicDamage> in the area. This effect has a 5s cooldown per target per spell cast.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447109.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "MagicResist"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 80,
                "FlatArmorMod": 30
            }
        },
        "447110": {
            "name": "Moonflair Spellblade",
            "description": "<mainText><stats><attention>85</attention> Ability Power<br><attention>400</attention> Health<br><attention>30%</attention> Tenacity</stats><br><br><passive>Relentless</passive><br>When you use an Ability, reset your auto attack timer and gain <attackSpeed>90% Attack Speed</attackSpeed> for your next 2 Attacks.<br><br>When you Attack, reduce your Ability Cooldowns by 0.5 seconds.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447110.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 85
            }
        },
        "447111": {
            "name": "Overlord's Bloodmail",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>500</attention> Health</stats><br><br><passive>Tyranny</passive><br>Gain <physicalDamage>0 AD</physicalDamage> equal to 3% <scaleHealth>Bonus HP</scaleHealth>.<br><br><passive>Retribution</passive><br>Gain up to <physicalDamage>12% increased AD</physicalDamage> based on your percent missing Health.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447111.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Health",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatPhysicalDamageMod": 45
            }
        },
        "447112": {
            "name": "Flesheater",
            "description": "<mainText><stats><attention>70</attention> Adaptive Force<br><attention>18</attention> Lethality<br><attention>18</attention> Magic Penetration</stats><br><br><passive>Hack the Meat</passive><br>Dealing damage shreds 3 <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> for 5 seconds, stacking up to 10 times. Applying stacks has a 1 second cooldown per target.<br><br><passive>Cannibalize</passive><br>On Champion Takedown, Heal yourself and your ally for <healing>18% of the Target's Max Health</healing>.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447112.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "Damage",
                "SpellDamage",
                "MagicPenetration",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {}
        },
        "447113": {
            "name": "Detonation Orb",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>12</attention> Magic Penetration<br><attention>400</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><passive>The Bomb</passive><br>Ability damage marks the target, storing 20% of the damage dealt (increased to 30% against <keyword>Immobilized</keyword> enemies). <br><br>3 seconds after you last damage the target with an ability, detonate the stored damage on them. If at any point the damage is enough to kill the target, detonate immediately.</mainText>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 220007,
            "image": {
                "full": "447113.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 400
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "MagicPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatMagicDamageMod": 90
            }
        }
    }]




    function filterItemsOnSummonersRift(items) {
        return items.filter(item => item.maps["11"] === true);
    }
    
    // Example usage:
    const itemsAvailableOnSR = filterItemsOnSummonersRift(items);
    console.log(itemsAvailableOnSR);
    