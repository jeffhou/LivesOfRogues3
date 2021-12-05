import { atom } from "recoil";

export const PlayerTeamAtom = atom({
  key: "player-team",
  default: [
    {
      name: "Justin the Great",
      health: {
        current: 20,
        max: 24
      },
      currentInitiative: 0,
      initiativeGain: 5,
      moves: [
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        }
      ]
    },
    {
      name: "Brutus the Philosophical",
      health: {
        current: 15,
        max: 24
      },
      currentInitiative: 5,
      initiativeGain: 3,
      moves: [
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        }
      ]
    },
    {
      name: "Luffy the Solemn",
      health: {
        current: 23,
        max: 24
      },
      currentInitiative: 0,
      initiativeGain: 6,
      moves: [
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        },
        {
          name: "Basic Arrow",
          description: "Shoot an opponent for 5 damage.",
          steps: [
            {
              targetType: "SINGLE_TARGET",
              abilityType: "DAMAGE",
              amount: 5
            }
          ]
        }
      ]
    }
  ]
});
