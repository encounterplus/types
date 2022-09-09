/**
 * Monster Entity
 * 
 * @example
 * ```json
 {
    "id": "8914a43d-5202-4000-a66e-ef66a220baf5",
    "name": "Example Monster",
    "slug": "example-monster",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Lawful Evil",
    "ac": "12 (leather armor)",
    "hp": "11 (2d8 + 2)",
    "speed": {
        "burrow": 10,
        "climb": 20,
        "fly": 30,
        "swim": 40,
        "walk": 50,
        "hover": 60,
        "other": "some other movement"
    },
    "str": 7,
    "dex": 15,
    "con": 9,
    "int": 8,
    "wis": 10,
    "cha": 12,
    "skills": {
        "acrobatics": 4,
        "animalHandling": 2,
        "history": -1
    },
    "savingThrows": {
        "str": 3,
        "wis": 4,
        "cha": -2
    },
    "damageImmunities": [
        "cold",
        "fire",
        "Some custom damage"
    ],
    "damageVulnerabilities": [
        "poison",
        "acid",
        "Some custom damage"
    ],
    "damageResistances": [
        "fire",
        "Bludgeoning, Piercing, and slashing from nonmagical attacks"
    ],
    "conditionImmunities": [
        "blinded",
        "charmed"
    ],
    "cr": "1/4",
    "senses": {
        "darkvision": 10,
        "blindsight": 20,
        "tremorsense": 30,
        "truesight": 40,
        "other": "some other sense"
    },
    "passivePerception": 12,
    "passiveInsight": 11,
    "initiative": 4,
    "proficiency": 2,
    "languages": [
        "common",
        "telepathy 120 ft"
    ],
    "environments": [
        "artic",
        "coastal"
    ],
    "traits": [
        {
            "name": "Some Trait",
            "text": "*Trait content.* Markdown (GFM) is supported. [Fireball](spell)"
        },
        {
            "name": "",
            "text": ""
        }
    ],
    "actions": [
        {
            "name": "",
            "text": ""
        }
    ],
    "reactions": [
        {
            "name": "",
            "text": ""
        }
    ],
    "legendaryActions": [
        {
            "name": "",
            "text": ""
        }
    ],
    "bonusActions": [
        {
            "name": "",
            "text": ""
        }
    ],
    "mythicActions": [
        {
            "name": "",
            "text": ""
        }
    ],
    "source": "MM",
    "page": 42,
    "link": "/modules/monster-manual/page/some-page",
    "tags": [
        "some",
        "random",
        "beast"
    ],
    "data": {
        "customAttribute1": 12,
        "customAttribute2": "asdf",
        "customAttribute3": true
    },
    "image": "test-monster-art.jpg",
    "token": "test-monster-token.png",
    "descr": "### Heading 3\nThis is some description with markdown support"
}
 * ```
 */
export interface Monster {
    /**
     * Unique identifier for the entity, usually `UUID`, used as a primary key. If missing, it will be automatically generated. 
     */
    id?: string

    /**
     * Entity kind. List of possible entity kinds should be defined in the game system. 
     * @experimental
     * @example
     * npc
     */
    kind?: string

    /** 
     * Entity name
     */
    name: string
    
    /** 
     * Used in link references, for example: `/monster/adult-dragon`. If missing, it will be automatically generated from {@link name} field. 
     * @example
     * adult-dragon
     */
    slug?: string

    /** 
     * Default value is `medium` 
     */
    size?: Size

    /** 
     * Type and optional subtype. List of options should be defined by the game system.
     * @example 
     * fiend (demon)
     */
    type?: string

    /** 
     * Aything
     */
    alignment?: string

    /** 
     * Armor Class. Number or number with a type.
     * @example
     * 12 (leather armor)
     */
    ac?: string

    /** 
     * Hit Points. Number or number with a dice formula.
     * @example
     * 11 (2d8 + 2)
     */
    hp?: string

    /** 
     * Speed. Defined by {@link Movement} object. 
     * @experimental
     */
    speed?: Movement

    /**
     * Strength.
     * @group Ability Scores
     */
    str: number
    /**
     * Dexterity.
     * @group Ability Scores
     */

    dex: number
    /**
     * Constitution.
     * @group Ability Scores
     */
    con: number

    /**
     * Intellect.
     * @group Ability Scores
     */
    int: number

    /**
     * Wisdom.
     * @group Ability Scores
     */
    wis: number

    /**
     * Charisma.
     * @group Ability Scores
     */
    cha: number

    /**
     * Skills. Defined as a dictonary where *key* is a skill name and *value* is a skill modifier. List of skills should be provided by game system.
     * @example
     * ```json
    { 
      "acrobatics": 4,
      "animalHandling": 2,
      "history": -1
    }
     * ```
     */
    skills?: [string: number]

    /**
     * Saving Throws. Defined as a dictonary where *key* is an ability name and *value* is a saving throw modifier.
     * @example
     * ```json
    { 
      "str": 3,
      "wis": 4,
      "cha": -2
    }
     * ```
     */
    savingThrows?: [string: number]

    /**
     * Damage Immunities. Array of damage types. List of damage types should be provided by game system. Custom values are allowed.
     *  * @example
     * ```json
    ["cold", "fire", "Some custom damage"]
    ```
     */
    damageImmunities?: [string]
    
    /**
     * Damage Vulnerabilities. Array of damage types. List of damage types should be provided by game system. Custom values are allowed.
     *  * @example
     * ```json
    ["poison", "acid", "Some custom damage"]
    ```
     */
    damageVulnerabilities?: [string]

    /**
     * Damage Resistances. Array of damage types. List of damage types should be provided by game system. Custom values are allowed.
     *  * @example
     * ```json
    ["fire", "Bludgeoning, Piercing, and slashing from nonmagical attacks"]
    ```
     */
    damageResistances?: [string]

    /**
     * Condition Immunities. Array of condition types. List of condition types should be provided by game system. Custom values are allowed.
     *  * @example
     * ```json
    ["blinded", "charmed"]
    ```
     */
    conditionImmunities?: [string]

    /**
     * Description. Markdown (GFM) is supported.
     */
    descr?: string

    /**
     * Challenge Rating. Experience will be automatically calucalted based on the value
     * @example
     * 1/4
     */
    cr: string

    /**
     * Senses. Defined by {@link Senses} object.
     * @experimental
     */
    senses?: Senses
    
    /**
     * Passive Perception. It wil show in sesnes row.
     */
    passivePerception?: number

     /**
     * Passive Insight. It wil show in sesnes row.
     */
    passiveInsight?: number

    /**
     * Initiative Modifier. Used in combat If empty, DEX modifier will be used instead.
     */
    initiative?: number

    /**
     * Proficiency Bonus. If empty, it will be automatically calculated
     */
    proficiency?: number
    
    /**
     * Languages. Array of language types. List of language types should be provided by game system. Custom values are allowed.
     *  * @example
     * ```json
    ["common", "telepathy 120 ft"]
    ```
     */
    languages?: [string]

    /**
     * Environments. Array of environment types. List of environment types should be provided by game system. Custom values are allowed.
     *  * @example
     * ```json
    ["artic", "coastal"]
    ```
     */
    environments?: [string]

    /**
     * Traits.
     * @group Features
     */
    traits?: [MonsterFeature]

    /**
     * Actions.
     * @group Features
     */
    actions?: [MonsterFeature]

    /**
     * Reactions.
     * @group Features
     */
    reactions?: [MonsterFeature]

    /**
     * Legendary Actions.
     * @group Features
     */
    legendaryActions?: [MonsterFeature]

    /**
     * Bonus Actions.
     * @group Features
     */
    bonusActions?: [MonsterFeature]

    /**
     * Mythic Actions.
     * @group Features
     */
    mythicActions?: [MonsterFeature]

    /**
     * Source.
     * @group Source
     */
    source?: string

    /**
     * Page.
     * @group Source
     */
    page?: number

    /**
     * Link (URL).
     * @group Source
     */
    link?: string

    /**
     * Tags.
     */
    tags?: [string]

    /**
     * Image Artwork.
     * @group Images
     */
    image?: string

    /**
     * Token Image.
     * @group Images
     */
    token?: string

    /**
     * Custom data
     * @experimental
     */
    data?: any
}

/**
 * Monster Feature. 
 * 
 * @example
 * ```json
 * {
  "name": "Dagger",
  "text": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
}
 * ```
 */
export interface MonsterFeature {
  name?: string
  /**
   * Text content for the feature. Markdown (GFM) is supported.
   */
  text?: string
}

/**
 * Movement Speed. Typically in feets.
 * 
 * @example
 * ```json
 * {
  "burrow": 10,
  "climb": 20,
  "fly": 30,
  "swim": 40,
  "walk": 50,
  "hover": 60,
  "other": "some other movement"
}
 * ```
 */
export interface Movement {
  burrow?: number
  climb?: number
  fly?: number
  swim?: number
  walk?: number
  hover?: number
  other?: string
}

/**
 * Senses. Range in feets.
 * 
 * @example
 * ```json
 * {
  "darkvision": 10,
  "blindsight": 20,
  "tremorsense": 30,
  "truesight": 40,
  "other": "some other sense"
}
 * ```
 */
export interface Senses {
  darkvision?: number
  blindsight?: number
  tremorsense?: number
  truesight?: number
  other?: string
}

/**
 * Creature Size, used in {@link Monster}] and Token
 */
export enum Size {
  /** 0.5x0.5 */
  tiny = "T",
  /** 0.7x0.7 */
  small = "S",
  /** 1x1 */
  medium = "M",
  /** 2x2 */
  large = "L",
  /** 3x3 */
  huge = "H",
  /** 4x4 */
  gargantuan = "G",
  /** 8x8 */
  colossal = "C",
}