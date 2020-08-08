{
    "kind": "civicinfo#voterInfoResponse",
    "election": elections Resource,
    "otherElections": [
      elections Resource
    ],
    "normalizedInput": {
      "locationName": string,
      "line1": string,
      "line2": string,
      "line3": string,
      "city": string,
      "state": string,
      "zip": string
    },
    "pollingLocations": [
      {
        "id": string,
        "address": {
          "locationName": string,
          "line1": string,
          "line2": string,
          "line3": string,
          "city": string,
          "state": string,
          "zip": string
        },
        "notes": string,
        "pollingHours": string,
        "name": string,
        "voterServices": string,
        "startDate": string,
        "endDate": string,
        "sources": [
          {
            "name": string,
            "official": boolean
          }
        ]
      }
    ],
    "earlyVoteSites": [
      {
        "id": string,
        "address": {
          "locationName": string,
          "line1": string,
          "line2": string,
          "line3": string,
          "city": string,
          "state": string,
          "zip": string
        },
        "notes": string,
        "pollingHours": string,
        "name": string,
        "voterServices": string,
        "startDate": string,
        "endDate": string,
        "sources": [
          {
            "name": string,
            "official": boolean
          }
        ]
      }
    ],
    "dropOffLocations": [
      {
        "id": string,
        "address": {
          "locationName": string,
          "line1": string,
          "line2": string,
          "line3": string,
          "city": string,
          "state": string,
          "zip": string
        },
        "notes": string,
        "pollingHours": string,
        "name": string,
        "voterServices": string,
        "startDate": string,
        "endDate": string,
        "sources": [
          {
            "name": string,
            "official": boolean
          }
        ]
      }
    ],
    "contests": [
      {
        "id": string,
        "type": string,
        "primaryParty": string,
        "electorateSpecifications": string,
        "special": string,
        "ballotTitle": string,
        "office": string,
        "level": [
          string
        ],
        "roles": [
          string
        ],
        "district": {
          "name": string,
          "scope": string,
          "id": string
        },
        "numberElected": long,
        "numberVotingFor": long,
        "ballotPlacement": long,
        "candidates": [
          {
            "name": string,
            "party": string,
            "candidateUrl": string,
            "phone": string,
            "photoUrl": string,
            "email": string,
            "orderOnBallot": long,
            "channels": [
              {
                "type": string,
                "id": string
              }
            ]
          }
        ],
        "referendumTitle": string,
        "referendumSubtitle": string,
        "referendumUrl": string,
        "referendumBrief": string,
        "referendumText": string,
        "referendumProStatement": string,
        "referendumConStatement": string,
        "referendumPassageThreshold": string,
        "referendumEffectOfAbstain": string,
        "referendumBallotResponses": [
          string
        ],
        "sources": [
          {
            "name": string,
            "official": boolean
          }
        ]
      }
    ],
    "state": [
      {
        "id": string,
        "name": string,
        "electionAdministrationBody": {
          "name": string,
          "electionInfoUrl": string,
          "electionRegistrationUrl": string,
          "electionRegistrationConfirmationUrl": string,
          "absenteeVotingInfoUrl": string,
          "votingLocationFinderUrl": string,
          "ballotInfoUrl": string,
          "electionRulesUrl": string,
          "voter_services": [
            string
          ],
          "hoursOfOperation": string,
          "correspondenceAddress": {
            "locationName": string,
            "line1": string,
            "line2": string,
            "line3": string,
            "city": string,
            "state": string,
            "zip": string
          },
          "physicalAddress": {
            "locationName": string,
            "line1": string,
            "line2": string,
            "line3": string,
            "city": string,
            "state": string,
            "zip": string
          },
          "electionOfficials": [
            {
              "name": string,
              "title": string,
              "officePhoneNumber": string,
              "faxNumber": string,
              "emailAddress": string
            }
          ]
        },
        "local_jurisdiction": (AdministrationRegion),
        "sources": [
          {
            "name": string,
            "official": boolean
          }
        ]
      }
    ],
    "mailOnly": boolean
  }

  //********************************************** */
INFO STARTS HERE

  {
    "election": {
      "id": "5008",
      "name": "Vermont State Primary Election",
      "electionDay": "2020-08-11",
      "ocdDivisionId": "ocd-division/country:us/state:vt"
    },
    "normalizedInput": {
      "line1": "233 Summer Street",
      "city": "Springfield",
      "state": "VT",
      "zip": "05156"
    },
    "pollingLocations": [
      {
        "address": {
          "locationName": "RIVERSIDE MIDDLE SCHOOL GYMNASIUM",
          "line1": "13 Fairground Road",
          "city": "Springfield",
          "state": "VT",
          "zip": "05156"
        },
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ]
      }
    ],
    "contests": [
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "REPRESENTATIVE TO CONGRESS",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "1",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "RALPH \"CARCAJOU\" CORBO",
            "party": "DEMOCRATIC"
          },
          {
            "name": "PETER WELCH",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "GOVERNOR",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "2",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "RALPH \"CARCAJOU\" CORBO",
            "party": "DEMOCRATIC"
          },
          {
            "name": "REBECCA HOLCOMBE",
            "party": "DEMOCRATIC"
          },
          {
            "name": "PATRICK WINBURN",
            "party": "DEMOCRATIC"
          },
          {
            "name": "DAVID ZUCKERMAN",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "LIEUTENANT GOVERNOR",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "3",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "TIM ASHE",
            "party": "DEMOCRATIC"
          },
          {
            "name": "MOLLY GRAY",
            "party": "DEMOCRATIC"
          },
          {
            "name": "DEBBIE INGRAM",
            "party": "DEMOCRATIC"
          },
          {
            "name": "BRENDA SIEGEL",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "STATE TREASURER",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "4",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "BETH PEARCE",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "SECRETARY OF STATE",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "5",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "JIM CONDOS",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "AUDITOR OF ACCOUNTS",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "6",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "DOUG HOFFER",
            "party": "DEMOCRATIC"
          },
          {
            "name": "LINDA JOY SULLIVAN",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "ATTORNEY GENERAL",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "7",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "T.J. DONOVAN",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "STATE SENATOR",
        "level": [
          "administrativeArea1"
        ],
        "district": {
          "name": "WINDSOR - 013",
          "scope": "stateUpper",
          "id": "13"
        },
        "ballotPlacement": "18",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "ALISON H. CLARKSON",
            "party": "DEMOCRATIC"
          },
          {
            "name": "RICHARD J. \"DICK\" MCCORMACK",
            "party": "DEMOCRATIC"
          },
          {
            "name": "ALICE W. NITKA",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "STATE REPRESENTATIVE",
        "level": [
          "administrativeArea1"
        ],
        "district": {
          "name": "WINDSOR 3-2 - 0111",
          "scope": "stateLower",
          "id": "111"
        },
        "ballotPlacement": "102",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "ALICE M. EMMONS",
            "party": "DEMOCRATIC"
          },
          {
            "name": "KRISTI C. MORRIS",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "DEMOCRATIC"
        ],
        "primaryParty": "DEMOCRATIC",
        "office": "HIGH BAILIFF",
        "level": [
          "administrativeArea2"
        ],
        "district": {
          "name": "WINDSOR - 0131",
          "scope": "countywide",
          "id": "131"
        },
        "ballotPlacement": "114",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "MICHAEL MANLEY",
            "party": "DEMOCRATIC"
          },
          {
            "name": "ROBERT SAND",
            "party": "DEMOCRATIC"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "PROGRESSIVE"
        ],
        "primaryParty": "PROGRESSIVE",
        "office": "REPRESENTATIVE TO CONGRESS",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "115",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CHRIS BRIMMER",
            "party": "PROGRESSIVE"
          },
          {
            "name": "CRIS ERICSON",
            "party": "PROGRESSIVE"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "PROGRESSIVE"
        ],
        "primaryParty": "PROGRESSIVE",
        "office": "GOVERNOR",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "116",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CRIS ERICSON",
            "party": "PROGRESSIVE"
          },
          {
            "name": "BOOTS WARDINSKI",
            "party": "PROGRESSIVE"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "PROGRESSIVE"
        ],
        "primaryParty": "PROGRESSIVE",
        "office": "LIEUTENANT GOVERNOR",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "117",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CRIS ERICSON",
            "party": "PROGRESSIVE"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "PROGRESSIVE"
        ],
        "primaryParty": "PROGRESSIVE",
        "office": "STATE TREASURER",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "118",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CRIS ERICSON",
            "party": "PROGRESSIVE"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "PROGRESSIVE"
        ],
        "primaryParty": "PROGRESSIVE",
        "office": "SECRETARY OF STATE",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "119",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CRIS ERICSON",
            "party": "PROGRESSIVE"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "PROGRESSIVE"
        ],
        "primaryParty": "PROGRESSIVE",
        "office": "AUDITOR OF ACCOUNTS",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "120",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CRIS ERICSON",
            "party": "PROGRESSIVE"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "PROGRESSIVE"
        ],
        "primaryParty": "PROGRESSIVE",
        "office": "ATTORNEY GENERAL",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "121",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CRIS ERICSON",
            "party": "PROGRESSIVE"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "REPRESENTATIVE TO CONGRESS",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "127",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "MIRIAM BERRY",
            "party": "REPUBLICAN"
          },
          {
            "name": "JIMMY RODRIGUEZ",
            "party": "REPUBLICAN"
          },
          {
            "name": "JUSTIN TUTHILL",
            "party": "REPUBLICAN"
          },
          {
            "name": "ANYA TYNIO",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "GOVERNOR",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "128",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "DOUGLAS CAVETT",
            "party": "REPUBLICAN"
          },
          {
            "name": "JOHN KLAR",
            "party": "REPUBLICAN"
          },
          {
            "name": "BERNARD PETERS",
            "party": "REPUBLICAN"
          },
          {
            "name": "EMILY PEYTON",
            "party": "REPUBLICAN"
          },
          {
            "name": "PHIL SCOTT",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "LIEUTENANT GOVERNOR",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "129",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "DANA COLSON JR",
            "party": "REPUBLICAN"
          },
          {
            "name": "MEG HANSEN",
            "party": "REPUBLICAN"
          },
          {
            "name": "JIM HOGUE",
            "party": "REPUBLICAN"
          },
          {
            "name": "SCOTT MILNE",
            "party": "REPUBLICAN"
          },
          {
            "name": "DWAYNE TUCKER",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "STATE TREASURER",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "130",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "CAROLYN WHITNEY BRANAGAN",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "SECRETARY OF STATE",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "131",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "H. BROOKE PAIGE",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "AUDITOR OF ACCOUNTS",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "132",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "H. BROOKE PAIGE",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "ATTORNEY GENERAL",
        "district": {
          "name": "STATE DISTRICT - 00",
          "scope": "statewide",
          "id": "0"
        },
        "ballotPlacement": "133",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "H. BROOKE PAIGE",
            "party": "REPUBLICAN"
          },
          {
            "name": "EMILY PEYTON",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "STATE SENATOR",
        "level": [
          "administrativeArea1"
        ],
        "district": {
          "name": "WINDSOR - 013",
          "scope": "stateUpper",
          "id": "13"
        },
        "ballotPlacement": "143",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "MICHAEL JASINSKI SR",
            "party": "REPUBLICAN"
          },
          {
            "name": "JACK WILLIAMS",
            "party": "REPUBLICAN"
          }
        ]
      },
      {
        "type": "Primary",
        "primaryParties": [
          "REPUBLICAN"
        ],
        "primaryParty": "REPUBLICAN",
        "office": "STATE REPRESENTATIVE",
        "level": [
          "administrativeArea1"
        ],
        "district": {
          "name": "WINDSOR 3-2 - 0111",
          "scope": "stateLower",
          "id": "111"
        },
        "ballotPlacement": "202",
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ],
        "candidates": [
          {
            "name": "STUART BEAM",
            "party": "REPUBLICAN"
          },
          {
            "name": "RANDY A. GRAY",
            "party": "REPUBLICAN"
          }
        ]
      }
    ],
    "state": [
      {
        "name": "Vermont",
        "electionAdministrationBody": {
          "name": "Elections Division",
          "electionInfoUrl": "https://sos.vermont.gov/elections/",
          "electionRegistrationUrl": "https://olvr.vermont.gov/",
          "electionRegistrationConfirmationUrl": "https://olvr.vermont.gov/",
          "absenteeVotingInfoUrl": "https://sos.vermont.gov/elections/voters/early-absentee-voting/",
          "ballotInfoUrl": "https://mvp.sec.state.vt.us/",
          "electionRulesUrl": "https://www.sec.state.vt.us/elections.aspx",
          "physicalAddress": {
            "locationName": "Elections Division",
            "line1": "128 State Street",
            "city": "Montpelier",
            "state": "VT",
            "zip": "05633"
          },
          "electionOfficials": [
            {
              "emailAddress": "sos.elections@vermont.gov"
            }
          ]
        },
        "local_jurisdiction": {
          "name": "SPRINGFIELD",
          "electionAdministrationBody": {
            "electionInfoUrl": "https://sos.vermont.gov/elections/",
            "electionRegistrationUrl": "https://olvr.vermont.gov/",
            "electionRegistrationConfirmationUrl": "https://olvr.vermont.gov/",
            "absenteeVotingInfoUrl": "https://sos.vermont.gov/elections/voters/early-absentee-voting/",
            "ballotInfoUrl": "https://mvp.sec.state.vt.us/",
            "electionRulesUrl": "https://www.sec.state.vt.us/elections.aspx",
            "physicalAddress": {
              "line1": "96 Main Street",
              "city": "Springfield",
              "state": "VT",
              "zip": "05156"
            }
          },
          "sources": [
            {
              "name": "Voting Information Project",
              "official": true
            }
          ]
        },
        "sources": [
          {
            "name": "Voting Information Project",
            "official": true
          }
        ]
      }
    ],
    "kind": "civicinfo#voterInfoResponse"
  }
  