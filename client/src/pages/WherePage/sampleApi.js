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