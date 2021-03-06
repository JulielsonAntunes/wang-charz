const source = {
  core: { book: 'Core Rules', key: 'core', version: 'v1' },
  coreab: { book: 'Abhumans (Beta)', key: 'coreab', version: 'v0.5' },
  aaoa: { book: 'An Abundance of Apocrypha', key: 'aaoa', version: '', path: '/vault/an-abundance-of-apocrypha' },
  lotn: { book: 'Legacy of the Necrontyr', key: 'lotn', version: '', path: '/vault/legacy-of-the-necrontyr' },
  thaot: { book: 'The High Altar of Technology', key: 'thaot', version: '', path: '/vault/the-high-altar-of-technology' },
  ltgb: { book: 'Let The Galaxy Burn', key: 'ltgb', version: '', path: '/vault/let-the-galaxy-burn' },
  aptb: { book: 'ArdentPurple\'s Tyranid Bestiary', key: 'aptb', version: '', path: '/vault/ardentpurples-tyranid-bestiary' },
  jtb: { book: 'Javelin\'s Tyranid Bestiary', key: 'jtb', version: '', path: '/vault/javelins-tyranid-bestiary' },
  aotgt: { book: 'Agents of the Golden Throne', key: 'aotgt', version: '', path: '/vault/agents-of-the-golden-throne' },
  tea: { book: 'The Emperor\'s Angles', key: 'tea', version: '', path: '/vault/the-emperors-angels' },
  heva: { book: 'Hesperaxs\'s Vault', key: 'heva', version: '', path: '/vault/hesperaxs-vault' },
  goen: { book: 'God Engines', key: 'goen', version: '', path: '/vault/god-engines' },
  tog: { book: 'Tome of Glory', key: 'tog', version: '', path: '/vault/tome-of-glory' },
  pax: { book: 'Pax Imperialis', key: 'pax', version: '', path: '/vault/pax-imperialis' },
  sotah: { book: 'The Deathwatch - Slayer of the Alien Hordes', key: 'sotah', version: '', path: '/vault/the-deathwatch---slayers-of-the-alien-horde' },
  amb: { book: 'Astra Militarum Brew', key: 'amb', version: '', path: '/vault/astra-militarum-brew' },
};

const stringToKebab = function (text) {
  return text.toLowerCase().replace(/\W/gm, '-');
};

const simpleStub = function (id, sourceKey, sourcePage, cost, name, discipline, effect) {
  return {
    source: {
      ...source[sourceKey],
      page: sourcePage,
    },
    id,
    key: `${stringToKebab(`${sourceKey} ${name}`)}`,
    name,
    cost,
    discipline,
    effect,
    stub: true,
  };
};

const simpleCrunch = function (dn, activation, duration, range, multi, effect, potency = '') {
  return {
    crunch_difficulty_number: dn,
    crunch_activation: activation,
    crunch_duration: duration,
    crunch_range: range,
    crunch_multi_target: multi,
    crunch_effect: effect,
    crunch_potency: potency.split(';'),
  };
};

const paxNavigatorPowers = [
  {
    ...simpleStub(101, 'pax', 190, 8, 'A Cloud in the Warp', 'Navigator Powers', 'Mask yourself from observations through powers.'),
    ...simpleCrunch('6', 'Action', 'Sustained', 'Self', false, ''),
    keywords: ['Navigator','Psychic'],
    description:
      '<p>By understanding and perceiving the currents of the warp, the Navigator can hide his ' +
      'presence from those that would use the Immaterium to detect him. ' +
      'Whilst it does not in any way mask his presence in the real universe, ' +
      'it can ably hide him from detection by Psykers and confuse creatures whose essence and ' +
      'existence are linked to the warp, such as Daemons and other warp entities. ' +
      'As the Navigator grows in power, he will become harder to detect, ' +
      'as well as being able to mask others if they stand nearby.</p>' +
      '<p>If successful, the Navigator becomes shrouded in an immaterial cloak, ' +
      'forcing those that use any kind of psychic sight, detection or divination ' +
      'to increase a powers DN by +2 to see him with such powers. ' +
      'This power also has the same effect on the (passive) awareness of all Daemons and warp entities. ' +
      'This power will last as long as the Navigator maintains it, ' +
      'however whilst he does so, he cannot use any other powers (though he may take other actions normally).</p>',
  },
  {
    ...simpleStub(102, 'pax', 191, 10, 'Foreshadowing', 'Navigator Powers', 'Make a Narrative declaration for free within the next round.'),
    ...simpleCrunch('5', 'Action', '1 Round', 'Self', false, '', '[2] Increase the time of the declaration lasting by +1 Round.'),
    keywords: ['Navigator','Psychic'],
    description:
      '<p>By using his warp eye to filter small secrets from the near future, the Navigator can choose ' +
      'to make slight adjustments to his actions to avoid harm and manipulate the course of events. ' +
      'Only if the Navigator tries to dig too deep into the near future for secrets does this power ' +
      'become unpredictable and he may become victim of the warp’s lies.</p>' +
      '<p>If successful, the Navigator can make a Narrative Declaration as if he spent a point of Wrath. ' +
      'However, the Navigator (or his allies) only has the next Round to make use of the declaration, ' +
      'lest it vanishes as a lie of the warp.</p>',
  },
  {
    ...simpleStub(103, 'pax', 191, 10, 'Gaze into the Warp', 'Navigator Powers', 'Probe suspects for taint of the warp.'),
    ...simpleCrunch('Resolve', 'Action', 'Sustained', '30m', true, '', '[1] Increase range by +5m'),
    keywords: ['Navigator','Psychic'],
    description: '<p>This power allows a Navigator to see a creature’s or object’s reflection in the warp and learn things hidden from the real universe. This power is most useful in unmasking both psykers and daemons, but has other applications, such as reading residual psychic taint on objects and tracking powerful psychic entities. With a successful attempt, the Navigator can determine if a creature or object holds the taint of the warp. This will tell the Navigator if the person or object has the psychic presence or is tainted (roughly speaking if they have the Psyker, Chaos, Daemon or similar keywords). Psykers who have made dark pacts with the warp and daemons are more resistant to this power, however. Against these creatures, the DN of the power increases by +2.</p>',
  },
  {
    ...simpleStub(104, 'pax', 191, 8, 'Held in my Gaze', 'Navigator Powers', 'Prevent Movement and Ruin Powers of the subject.'),
    ...simpleCrunch('Resolve','Action','Sustained','5m', false, '', '[2] Increase range by +5m;[3] +1 Mortal Wounds'),
    keywords: ['Navigator','Psychic'],
    description:
      '<p>The unflinching eye of a Navigator locks a creature in place with a gaze that pierces ' +
      'flesh and bone to see the immaterial essence of all things. ' +
      'Most commonly employed against psykers, this ability can be used to render them effectively ' +
      'powerless and prevent them from calling upon their abilities. It is also undeniably ' +
      'effective against creatures with a strong connection to the warp, such as daemons, ' +
      'for which it can have spectacular and devastating consequences.</p>' +
      '<p>The Navigator chooses a target which he has line of sight to and within range. ' +
      'If he is successful, then the target is locked and cannot make a Move. ' +
      'A locked target must beat the Navigator in an opposed Willpower test each time it wishes ' +
      'to use a psychic power or invoke the Ruin abilities. ' +
      'Daemons affected by this power suffer 1 Mortal Wound.</p>',
  },
  {
    ...simpleStub(105, 'pax', 192, 10, 'Inertia', 'Navigator Powers', 'Increase the DN for an targeted Psyker to manifest powers.'),
    ...simpleCrunch('Resolve','Action','Sustained', '30m', false, '', '[1] Increase range by +5m;[3] Increase DN penalty by +1'),
    keywords: ['Navigator','Psychic'],
    description: '<p>The Navigator alters the tides of the Warp, making it difficult for enemy psykers to draw their power from the Immaterium. This power does not require line of sight, but can only be used against characters with the <Psyker> keyword. If they are affected, then the psyker suffers a +1 DN penalty when manifesting their powers.</p>',
  },
  {
    ...simpleStub(106, 'pax', 192, 0, 'The Lidless Stare', 'Navigator Powers', 'Deal a Mortal Wound and cause Terror.'),
    ...simpleCrunch('Resolve','Action','Sustained', '30m', true, '', '[3] Increase the DN penalty of Terror of a single target by +1;[3] One target suffers an additional Mortal Wound'),
    keywords: ['Navigator','Psychic'],
    description: '<p>If a Navigator opens his warp eye fully, anyone gazing into its depths will witness the power and mind breaking unreality of the warp. In an instant, they witness the chaos boiling beneath the skin of existence and for many, it is the last thing they ever see. The navigator chooses a number of targets within range. If the power is successful, the targets suffer a single Mortal Wound and counts as having failed a Terror test against the Navigator</p>',
  },
  {
    ...simpleStub(107, 'pax', 193, 6, 'Temporal Distortion', 'Navigator Powers', 'Allow yourself to make an additional Move.'),
    ...simpleCrunch('4','Action','Instant', 'Self', false, '', '[1] Increase the Speed of the additional Move by +1;[2] Reduce shock gained by -1;[3] Instead of a Move, the Navigator may make an additional Action'),
    keywords: ['Navigator','Psychic'],
    description: '<p>The Navigator can manipulate the tides of the Immaterium to affect time in the temporal universe. The Navigator may only use this power on himself, and if successful, he may make an additional Move. Regardless if this power is successfully manifested or not, the Navigator suffers 2 points of Shock.</p>',
  },
];

const aaoaWaaaghPowers = [
  {
    ...simpleStub(200, 'aaoa', 181, 20, '‘Eadbanger', 'WAAAGH!', 'Bring the closest enemy to zero wounds.'),
    ...simpleCrunch('8', 'Action', 'Instant', '35m', false, ''),
    keywords: ['Ork','Psychic'],
    description:
      '<p>A bolt of raw power erupts from the Weirdboy’s forehead and rockets across the battlefield, ' +
      'causing the head of the first unfortunate victim caught in its path to explode in a shower of brains and gore.</p>' +
      '<p>This power targets the closest enemy, who must pass a Toughness test (DN 3) or reduced to 0 Wounds immediately.</p>',
  },
  {
    ...simpleStub(201, 'aaoa', 181, 15, 'Da Jump', 'WAAAGH!', 'Short Teloport yourself and allied orks.'),
    ...simpleCrunch('7', 'Full Action', 'Instant', '25m', false, ''),
    keywords: ['Ork','Psychic'],
    description:
      '<p>The Weirdboy closes his eyes tight and, in a storm of flashing green light, teleports a mass of confused greenskins to another part of the battlefield. ' +
      'Select a number of allies with the Ork keyword equal to the psyker’s Willpower within range. ' +
      'Those allies vanish, and then reappear moments later anywhere within 500m. ' +
      'They must reappear more than 20m from an enemy, and they forfeit their move action in their following turns.</p>',
  },
  {
    ...simpleStub(202, 'aaoa', 181, 15, 'Da Krunch', 'WAAAGH!', 'Stomp enemies with mortal force and knock them prone.'),
    ...simpleCrunch('8', 'Action', 'Instant', '35m', false, ''),
    keywords: ['Ork','Psychic'],
    description:
      '<p>Green energies erupt form the Weirdboy’s eyes, ears, nose, and mouth, and coalesce into a roiling cloud above the enemy. ' +
      'That cloud then solidifies into the vast green foot of Gork (or Mork) himself, which commences to stamp down upon the foe. ' +
      'This power affects all enemies in a Medium blast within range. ' +
      'Affected enemies take 1d3 Mortal Wounds and are knocked prone.' +
      ' Foes who were already prone become staggered as well. ' +
      'Then, roll a d6: on a roll of a 6, repeat the power’s effects as the foot stamps down again.</p>',
  },
  {
    ...simpleStub(203, 'aaoa', 181, 8, 'Fists of Gork', 'WAAAGH!', 'Boost yourself or an allie with great Strength.'),
    ...simpleCrunch('6', 'Action', '1 Round', '25m', false, ''),
    keywords: ['Ork','Psychic'],
    description:
      '<p>The Weirdboy channels Waaagh energy into his own fists or those of another Ork, providing strength enough to punch through the armour of tanks. ' +
      'This power affects the psyker or one ally with the Ork keyword within range. ' +
      'Until the end of the psyker’s next turn, the affected character’s Strength is increased by +4 and they receive +2d on all melee attacks.</p>',
  },
  {
    ...simpleStub(204, 'aaoa', 182, 10, 'Roar of Mork', 'WAAAGH!', 'Enemies within range reduce their resolve by 2.'),
    ...simpleCrunch('8', 'Full Action', 'Sustained', '35m', false, ''),
    keywords: ['Ork','Telepathy','Psychic'],
    description:
      '<p>The Weirdboy opens his gob impossibly wide and gives vent to a bellowing roar that reverberates through his enemies’ minds. ' +
      'Coherent thought becomes nigh-impossible, and as the roar thunders on, panic begins to spread. ' +
      'While this power remains in effect, all enemies within range reduce their Resolve by 2.</p>',
  },
  {
    ...simpleStub(205, 'aaoa', 182, 10, 'Warpath', 'WAAAGH!', 'Allies within range increase strength and make more multi-actions or attacks.'),
    ...simpleCrunch('7', 'Action', 'Instant', '35m', false, ''),
    keywords: ['Ork','Psychic'],
    description:
      '<p>The Weirdboy disperses the Waaagh energy coursing through his frame into the Ork warriors around him, ' +
      'stoking their already bellicose nature into a roaring fever pitch. Select a number of allies with the Ork keyword within range. ' +
      'The affected allies add +2d to all melee attacks they attempt until the start of the psyker’s next turn, ' +
      'and they may ignore up to 2 points of DN increase for taking the Multi-Attack or Multi-Action options.</p>',
  },
];

const aaoaAncestrialRites = [
  {
    ...simpleStub(210, 'aaoa', 183, 20, 'Domination', 'Ancestral Rites', 'Command a single action of the target at the cost of some shock.'),
    ...simpleCrunch('Willpower (Opposed)', 'Full Action', 'Instant', '25m', false, ''),
    keywords: ['Squat','Telepathy','Psychic'],
    description:
      '<p>The Ancestor Lord turns his immense willpower on the mind of a single enemy and takes over its body for a moment. ' +
      'Select an enemy within range: if the psyker wins an opposed willpower test against the target, ' +
      'the target immediately takes a single action of the Ancestor Lord’s choice, following all the normal rules. ' +
      'This power cannot force a creature to take an action which would kill them. ' +
      'The Ancestor Lord suffers 1d3+1 Shock after this power is used.</p>',
  },
  {
    ...simpleStub(211, 'aaoa', 183, 20, 'Force Dome', 'Ancestral Rites', 'Create a Protective Dome.'),
    ...simpleCrunch('8', 'Action', 'Sustained', '50m', false, ''),
    keywords: ['Squat','Kinetic','Psychic'],
    description:
      '<p>At the Ancestor Lord’s command, a dome of energy erupts from the ground, and it is as unyielding as the Ancestor Lord’s own mind. ' +
      'The dome appears at anywhere within range, with a radius of 5m (so, it’s 10m across and 5m tall). ' +
      'The dome blocks all line of sight, and ranged attacks cannot damage it. ' +
      'The dome can be attacked in melee: attacks automatically hit, and the dome has a Resilience equal to three times the Ancestor Lord’s Willpower, ' +
      'and Wounds equal to twice the Ancestor Lord’s Psychic Mastery score. It collapses and dissipates when reduced to 0 Wounds. ' +
      'The Ancestor Lord suffers 1 Shock at the end of each turn they sustain this power.</p>',
  },
  {
    ...simpleStub(212, 'aaoa', 184, 20, 'Hammer of Fury', 'Ancestral Rites', 'Deal mortal wounds in a large (18m) range.'),
    ...simpleCrunch('8', 'Action', 'Instant', '18m', false, ''),
    keywords: ['Squat','Kinetic','Psychic'],
    description:
      '<p>The Ancestor Lord unleashes a mighty psychic hammer blow against their foes, smashing them back with an inexorable kinetic impact. ' +
      'All enemies within range suffer 1d3+1 Mortal Wounds. ' +
      'In addition, enemies must pass a Strength test (DN 5) or be knocked prone and moved away from ' +
      'the Ancestor Lord a number of metres equal to the number of Mortal Wounds they suffered.</p>',
  },
  {
    ...simpleStub(214, 'aaoa', 184, 20, 'Mental Fortress', 'Ancestral Rites', 'Hinder hostile psychic powers that affect you or you allies.'),
    ...simpleCrunch('8', 'Action', 'Sustained', '25m', false, ''),
    keywords: ['Squat','Psychic'],
    description:
      '<p>The Ancestor Lord weaves a powerful mental barrier around themselves and those nearby, warding them from mental assault. ' +
      'While this power remains in effect, any hostile psychic power targeted at the Ancestor Lord or an ally within range suffers +4 DN.</p>',
  },
];

const teaLibrariusPowers = [
  {
    ...simpleStub(300, 'tea', 72, 15, 'Veil of Time', 'Librarius', 'Grants the target the ability to interfere with the standard flow of time'),
    ...simpleCrunch('6', 'Action', 'Sustained', '40m', true, ''),
    keywords: ['Adeptus Astartes','Psychic'],
    description:
      '<p>The psyker projects his will beyond the regular passage of time, taking in the strands of fate before returning to the present to sway the tide of battle. If successful, those affected may choose which threat will take its turn next after each of their turns.</p>',
  },
  {
    ...simpleStub(301, 'tea', 73, 15, 'Might of Heroes', 'Librarius', 'Fills the target with psychic might, enhancing their strength and durability'),
    ...simpleCrunch('6', 'Action', 'Sustained', '25m', true, ''),
    keywords: ['Adeptus Astartes','Psychic'],
    description:
      '<p>The psyker cages the immense power of the immaterium within his physical form and becomes the Emperor’s vengeance made manifest. If successful, those affected gain +1 ED on all melee attacks, +1 to Resilience, and may ignore up to +2DN penalty for making melee multi-attacks.</p>',
  },
  {
    ...simpleStub(302, 'tea', 73, 15, 'Psychic Scourge', 'Librarius', 'Forces a battle of wills, harming and stunning the enemy if the psyker wins'),
    ...simpleCrunch('Willpower (Opposed)', 'Action', 'Instant', '40m', false, ''),
    keywords: ['Adeptus Astartes','Psychic'],
    description:
      '<p>The psyker pits his superhuman willpower against that of his enemies in a battle of mental fortitude, seeking to destroy their minds in a burst of psychic fury. If the opposed test is won by the psyker, the target takes d3 Mortal Wounds and d3 Shock. If the test was a tie, the target takes 1 Mortal Wound and 1 shock.</p>',
  },
  {
    ...simpleStub(303, 'tea', 73, 15, 'Fury of the Ancients', 'Librarius', 'Selects a target for the psyker’s wrath, harming all enemies in the way'),
    ...simpleCrunch('Defense', 'Action', 'Instant', '25m', false, ''),
    keywords: ['Adeptus Astartes','Psychic'],
    description:
      '<p>Calling upon the myths and legends of his Chapter’s home world, the psyker sends forth a terrifying monstrosity wrought from psychic energy. If successful, draw a line from the psyker to the target, noting any enemies the line passes over. If using theater of the mind, any enemies that could be reasonably assumed to be between the psyker and the target are affected instead. Each enemy the line crosses, including the target, suffers a Mortal Wound.</p>',
  },
  {
    ...simpleStub(304, 'tea', 73, 15, 'Psychic Fortress', 'Librarius', 'Places a shield of energy, protecting against the warp and reinforcing the will'),
    ...simpleCrunch('5', 'Full Action', 'Sustained', '40m', true, ''),
    keywords: ['Adeptus Astartes','Psychic'],
    description:
      '<p>Drawing on boundless reserves of inner strength, the psyker shields his mind – and those of his battle-brothers – from mortal fears and the threat of sorcerous assault. If successful, all affected automatically pass Resolve tests. Additionally, if dealt Mortal Wounds by a psychic power, roll a d6 per Mortal Wound. On a result 4, 5, or 6, the Mortal Wound is negated.</p>',
  },
  {
    ...simpleStub(305, 'tea', 74, 15, 'Null Zone', 'Librarius', 'Purges psychic energies and protective fields from an area'),
    ...simpleCrunch('8', 'Full Action', 'Sustained', '15m (Radius)', true, ''),
    keywords: ['Adeptus Astartes','Psychic'],
    description:
      '<p>The psyker unleashes the full might of his mind to cast down his opponent’s defences, both technological and mystical, rendering them vulnerable to the retribution of the Adeptus Astartes. If successful, for as long as the power is sustained, each enemy psyker within range must subtract 1 from the result of each die on Psychic Mastery tests. In addition, enemies may not attempt to soak Mortal Wounds while within range or benefit from armor with the Force Shield trait.</p>',
  },
];

const psychicPowersRepository = [
  ...paxNavigatorPowers,
  ...aaoaWaaaghPowers,
  ...aaoaAncestrialRites,
  ...teaLibrariusPowers,
];

module.exports = psychicPowersRepository;
