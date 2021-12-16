import { atom } from "recoil";

export const EnemyTeamAtom = atom({
  key: "enemy-team",
  default: [
    {
      name: "Eleanor the Willful",
      health: {
        current: 21,
        max: 24
      },
      currentInitiative: 0,
      initiativeGain: 11,
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
      name: "Alexander the Amicable",
      health: {
        current: 11,
        max: 24
      },
      currentInitiative: 0,
      initiativeGain: 4,
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
      name: "Sumi the Sorrowful",
      health: {
        current: 2,
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
    }
  ]
});
