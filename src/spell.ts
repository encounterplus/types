/**
 * Spell Entity
 * 
 * @example
 * ```json
{
    "id": "c5c3908c-a0e4-4a87-8d95-56358c10f1b4",
    "name": "Example Spell",
    "slug": "example-spell",
    "level": 0,
    "school": "EV",
    "range": 12,
    "rangeType": "range",
    "areaEffectShape": "sphere",
    "areaEffectSize": 20,
    "activation": 1,
    "activationUnit": "reaction",
    "activationCondition": "some condition",
    "components": ["V", "M"],
    "componentsDetail": "material component detail",
    "duration": 1,
    "durationUnit": "minute",
    "durationType": "concentration",
    "ritual": true,
    "classes": ["Warlock", "Wizard"],
    "source": "PHB",
    "page": 36,
    "link": "/phb/some-page",
    "tags": [
        "cold",
        "fire"
    ],
    "descr": "### Heading 3\nThis is some description with markdown support",
    "notes": "custom notes for DM",
    "data": {
        "customAttribute1": 12,
        "customAttribute2": "asdf",
        "customAttribute3": true
    },
    "attributes": {
        "customAttribute4": 12,
        "customAttribute5": "asdf",
        "customAttribute6": true
    },
    "image": "test-spell-art.jpg",
}
 * ```
 */
export interface Spell {
    /**
     * Unique identifier for the entity, usually `UUID`, used as a primary key. If missing, it will be automatically generated. 
     */
    id?: string

    /** 
     * Entity name
     */
    name: string

    /** 
     * Used in link references, for example: `/spell/arcane-gate`. If missing, it will be automatically generated from {@link name} field. 
     * @example
     * arcane-gate
     */
    slug?: string

    /** 
     * Level. Default value is `0` => Cantrip.
     */
    level?: number

     /** 
     * School.
     */
    school?: SpellSchool

    /** 
     * Range Value (units).
     * @group Range
     */
    range?: number

    /** 
     * Range Type. Default is `range`
     * @group Range
     */
    rangeType?: SpellRangeType

    /** 
     * Area Effect Shape. Used when creating Area Effects on battle map.
     * @group Range
     */
    areaEffectShape?: AreaEffectShape

    /** 
     * Area Effect Size. Radius or Length, depending on shape.
     * @group Range
     */
    areaEffectSize?: number
 
    /** 
     * Activation Time Value.
     * @group Time
     */
    activation?: number

    /** 
     * Activation Unit. Defined by {@link SpellActivationUnit} object. 
     * @group Time
     */
    activationUnit?: SpellActivationUnit

    /**
     * Activation Condition. Used along with reaction.
     * @group Time
     */
    activationCondition?: string

    /**
     * Components. Defined in game system, usually `V`, `S`, `M`
     * V - Verbal
     * S - Somatic
     * M - Material
     * @group Components
     */
    components: [string]

    /**
     * Components Detail. Used along material component `M (material detail)`
     * @group Components
     */
    componentsDetail?: string

    /**
     * Duration Value.
     * @group Duration
     */
    duration?: number

    /**
     * Duration Unit.
     * @group Duration
     */
    durationUnit?: SpellDurationUnit

    /**
     * Duration Type. Default: `instantaneous`
     * @group Duration
     */
    durationType?: SpellDurationType

     /**
     * Ritual casting.
     */
    ritual?: boolean

    /**
     * Available Classes
     * @example
     * ```json
    [ 
      "Warlock",
      "Wizard",
    ]
     * ```
     */
    classes?: [string]

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
     * Description. Markdown (GFM) is supported.
     */
    descr?: string

    /**
     * DM Notes. Markdown (GFM) is supported.
     */
    notes?: string

    /**
     * Image Artwork.
     * @group Images
     */
    image?: string

    /**
     * Custom data
     * @experimental
     */
    data?: any

    /**
     * Custom attributes
     * @experimental
     */
    attributes?: any
}

/**
 * School of Magic, used in {@link Spell}
 */
export enum SpellSchool {
    /** Abjuration */
    abjuration = "A",
    /** Conjuration */
    conjuration = "C",
    /** Divination */
    divination = "D",
    /** Enchantment */
    enchantment = "EN",
    /** Evocation */
    evocation = "EV",
    /** Illusion */
    illusion = "I",
    /** Necromancy */
    necromancy = "N",
    /** Transmutation */
    transmutation = "T",
}

/**
 * Spell Range Type, used in {@link Spell}
 */
 export enum SpellRangeType {
    /** Self */
    self,
    /** Touch */
    touch,
    /** Specific range */
    range,
    /** Sight */
    sight,
    /** No limits */
    unlimited,
}

/**
 * Spell Time Activation Unit, used in {@link Spell}
 */
 export enum SpellActivationUnit {
    /** Action */
    action,
    /** Bonus Action */
    bonusActions,
    /** Reaction */
    reaction,
    /** Hour */
    hour,
    /** Minute */
    minute,
}

/**
 * Spell Duration Type, used in {@link Spell}
 */
export enum SpellDurationType {
    /** Concentration */
    concentration,
    /** Instantaneous */
    instantaneous,
    /** Specific time */
    time,
    /** Special time */
    special,
    /** Until dispelled */
    dispel,
    /** Until dispelled or triggered */
    dispelOrTrigger,
}

/**
 * Spell Duration Unit, used in {@link Spell}
 */
export enum SpellDurationUnit {
    /** Round */
    round,
    /** Minute */
    minute,
    /** Hour */
    hour,
    /** Day */
    day,
}

/**
 * Area Effect Shape, used in {@link Spell}
 */
export enum AreaEffectShape {
    /** Cone */
    cone,
    /** Cube */
    cube,
    /** Cylinder */
    cylinder,
    /** Line */
    line,
    /** Sphere */
    sphere,
}