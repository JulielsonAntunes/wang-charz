export default {
  data() {
    const keywordRepository = [
      // General Keywords
      {
        name: 'Psyker', type: 'General', parentKeyword: undefined, description: 'Those who can wield psychic powers, channeling the warp through their mind.',
      },
      {
        name: '<Any>', type: 'General', parentKeyword: undefined, description: 'This keyword represents a free choice by the player at character creation; the GM deter-mines which selections are appropriate for the character.',
      },

      // Species Keywords
      {
        name: 'Aeldari', type: 'Species', parentKeyword: undefined, description: 'The Eldar race.',
      },
      {
        name: 'Anhrathe', type: 'Species', parentKeyword: undefined, description: 'Eldar Corsairs, spacefaring pirates and raiders.',
      },
      {
        name: '<Coterie>', type: 'Species', parentKeyword: 'Anhrathe', description: 'A specific Eldar Corsair band (replaces this keyword when chosen).',
      },
      {
        name: 'Asuryani', type: 'Species', parentKeyword: undefined, description: 'Eldar of the Craftworlds.',
      },
      {
        name: '<Craftworld>', type: 'Species', parentKeyword: 'Asuryani', description: 'A specific Eldar Craftworld (replaces this keyword when chosen).',
      },
      {
        name: 'Ork', type: 'Species', parentKeyword: undefined, description: 'The Ork race.',
      },
      {
        name: '<Clan>', type: 'Species', parentKeyword: 'Ork', description: 'A specific Ork clan (replaces this keyword when chosen).',
      },

      // Imperium Keywords
      {
        name: 'Adepta Sororitas', type: 'Imperium', parentKeyword: undefined, description: 'The Sisters of Battle, warriors of the Ecclesiarchy.',
      },
      {
        name: '<Order>', type: 'Imperium', parentKeyword: 'Adepta Sororitas', description: 'A specific Adepta Sororitas Order (replaces this keyword when chosen).',
      },
      {
        name: 'Adeptus Astartes', type: 'Imperium', parentKeyword: undefined, description: 'The Space Marines, superhuman elite warriors of the Imperium.',
      },
      {
        name: '<Chapter>', type: 'Imperium', parentKeyword: 'Adeptus Astartes', description: 'A specific Adeptus Astartes Chapter (replaces this keyword when chosen).',
      },
      {
        name: 'Adeptus Astra Telepathica', type: 'Imperium', parentKeyword: undefined, description: 'They administrate the role of psykers in the Imperium.',
      },
      {
        name: 'Adeptus Mechanicus',
        type: 'Imperium',
        parentKeyword: undefined,
        description: 'The Tech-Priesthood of Mars, they are entrusted with the secrets of tech-nology; allied to the Imperium.',
        // Data is Currency
        effectLabel: 'Data is Currency',
        effect: 'Characters with the Adeptus Mechanicus keyword may use Intellect in place of Fellowship when calculating Influence.',
      },
      {
        name: '<Forge World>', type: 'Imperium', parentKeyword: 'Adeptus Mechanicus', description: 'A specific Adeptus Mechanicus Forge World (replaces this keyword when chosen).',
      },
      {
        name: 'Adeptus Ministorum', type: 'Imperium', parentKeyword: undefined, description: 'Those who preach the Imperial Creed.',
      },
      {
        name: 'Astra Militarum', type: 'Imperium', parentKeyword: undefined, description: 'The Imperial Guard, soldiers of the Imperium’s main ground forces.',
      },
      {
        name: '<Regiment>', type: 'Imperium', parentKeyword: 'Astra Militarum', description: 'A specific Astra Militarum Regiment (replaces this keyword when chosen).',
      },
      {
        name: 'Cult Mechanicus', type: 'Imperium', parentKeyword: undefined, description: 'The Priesthood of the Omnissiah, a subset of the Adeptus Mechanicus.',
      },
      {
        name: 'Imperium', type: 'Imperium', parentKeyword: undefined, description: 'The Imperium of Man, a galaxy-spanning civilisation 10,000 years old.',
      },
      {
        name: 'Inquisition', type: 'Imperium', parentKeyword: undefined, description: 'Investigators and questioners, they wield great authority to root out threats to the Imperium.',
      },
      {
        name: '<Ordo>', type: 'Imperium', parentKeyword: 'Inquisition', description: 'A specific Ordo of the Inquisition (replaces this keyword when chosen).',
      },
      {
        name: 'Militarum Tempestus', type: 'Imperium', parentKeyword: undefined, description: 'Elite, specially-trained and equipped soldiers of the Astra Militarum.',
      },
      {
        name: 'Officio Prefectus', type: 'Imperium', parentKeyword: undefined, description: 'Elite leaders and disciplinarians of the Imperium’s military.',
      },
      {
        name: 'Primaris', type: 'Imperium', parentKeyword: undefined, description: 'A new, improved breed of Space Marine.',
      },
      {
        name: 'Rogue Trader', type: 'Imperium', parentKeyword: undefined, description: 'Space-faring merchant princes and explorers, granted great authority to expand the Imperium’s borders.',
      },
      {
        name: '<Dynasty>', type: 'Imperium', parentKeyword: 'Rogue Trader', description: 'A specific Rogue Trader Dynasty (replaces this keyword when chosen).',
      },
      {
        name: 'Adeptus Astra Telepathica', type: 'Imperium', parentKeyword: undefined, description: 'This Organisation is responsible for the recruitment and training of psykers.',
      },
      {
        name: 'Scholastica Psykana', type: 'Imperium', parentKeyword: undefined, description: 'A subset of the Adeptus Astra Telepathica, they train psykers in the use of their powers.',
      },
      {
        name: 'Scum', type: 'Imperium', parentKeyword: undefined, description: 'Those who live upon the fringes of Imperial society, often in the underhive or criminal syndicates.',
      },
      {
        name: 'Skitarii', type: 'Imperium', parentKeyword: undefined, description: 'The warriors of the Omnissiah, devout troops who wield ancient technology.',
      },
      {
        name: 'Navis Nobilite',
        type: 'Imperium',
        parentKeyword: undefined,
        description: 'The mutants whose abilities allow starships to pass through the warp and so travel between distant stars.',
        source: 'pax',
        // Data is Currency
        effectLabel: 'Nobilite Encoding',
        effect: 'A number of archaic, dead tongues or dialects, now only know to the ancient Nobilite families that keep the old languages alive. A Navis Nobilite House character may choose this language as one of his initial languages, or purchase it for 1 BP at a later time.',
      },
      {
        name: '<Navis House>',
        type: 'Imperium',
        parentKeyword: 'Navis Nobilite',
        description: 'A specific type of Navis Nobilite house (replaces this keyword when chosen).',
        source: 'pax',
      },
      { name: 'Untouchable', type: 'Imperium', parentKeyword: undefined, description: 'Those unfortunate few whose very presence is unnaturally ‘wrong’, and intrinsically opposed to the Immaterium.', source: 'pax' },

      // Renegade and Heretic Keywords
      {
        name: 'Chaos', type: 'Renegade', parentKeyword: undefined, description: 'Those who serve the Dark Gods, knowingly or otherwise.',
      },
      {
        name: '<Mark of Chaos>', type: 'Renegade', parentKeyword: undefined, description: 'A specific Chaos God (replaces this keyword when chosen).',
      },
      {
        name: 'Dark Mechanicus', type: 'Renegade', parentKeyword: undefined, description: 'Small groups of Tech-Priests who have rejected the doctrines of Mars and work with the forces of Chaos.',
      },
      { name: 'Heretic', type: 'Renegade', parentKeyword: undefined, description: 'Those who have rejected the Imperial Creed.' },

      // Social PAX
      { source: 'pax', name: 'Nobility', type: 'Social', parentKeyword: undefined, description: 'The high born elite of the Imperium.' },
      { source: 'pax', name: 'Lower Class', type: 'Social', parentKeyword: undefined, description: 'Those who in their uncountable numbers toil at industry, agriculture or another manual trade.' },
      { source: 'pax', name: 'Outcast', type: 'Social', parentKeyword: undefined, description: 'Those unfortunates who have slipped through the cracks of society.' },
    ];
    const keywordSubwordRepository = [

        // Orders of the Adepta Sororitas
        { placeholder: '<Order>', name: 'Order of the Bloody Rose', type: 'Order of the Adepta Astartes', description: 'Formed from the bodyguards of an Abbess, this order honours the martyrdom of a sister who died in exceptionally bloody battle.' },
        { placeholder: '<Order>', name: 'Order of Our Martyred Lady', type: 'Order of the Adepta Astartes', description: 'Founded in honour of Saint Katherine, this order wears black as a symbol of the deep mourning for their namesake’s death.' },
        { placeholder: '<Order>', name: 'Order of the Valorous Heart', type: 'Order of the Adepta Astartes', description: 'A highly penitent order, they seek to atone for their part in the Reign of Blood.' },
        { placeholder: '<Order>', name: 'Order of Sacred Rose', type: 'Order of the Adepta Astartes', description: 'This order is highly disciplined, embodying the virtues of calm determination in the face of the enemy.' },
        { placeholder: '<Order>', name: 'Order of the Ebon Chalice', type: 'Order of the Adepta Astartes', description: 'The oldest of the Orders Militant, this one was founded by Saint Alicia Dominica in the 38th Millennium. This order reveres the history and traditions of the Adepta Sororitas.' },
        { placeholder: '<Order>', name: 'Order of the Agent Shroud', type: 'Order of the Adepta Astartes', description: 'This order is famed for their righteous fury and selfl ess acts of heroism. Their founder seldom spoke, believing that deeds proved more devotion than words.' },

        // Regiments of the Astra Militarum
        // (i) Characters with the <Regiment> keyword must have the Astra Militarum keyword as well.
        {
          placeholder: '<Regiment>',
          name: 'Death Korps of Krieg',
          type: 'Regiment of the Astra Militarum',
          description: 'Founded on the toxic, radioactive world of Krieg, these soldiers are grim and disciplined, accepting even the most dangerous missions.',
          effectLabel: 'Regimental Affiliation',
          effect: '+½ Rank dice to Intimidation tests.',
          modification: { },
        },
        {
          effectLabel: 'Regimental Affiliation',
          effect: '+½ Rank dice to Resolve tests.',
          placeholder: '<Regiment>',
          name: 'Cadian Shock Troopers',
          type: 'Regiment of the Astra Militarum',
          description: 'Founded on the Fortress World of Cadia, these disciplined soldiers suffered greatly when their home world was overwhelmed and razed by the forces of Chaos.', modification: { },
        },
        {
          effectLabel: 'Regimental Affiliation',
          effect: '+½ Rank dice to Survival tests.',
          placeholder: '<Regiment>', name: 'Catachan Jungle Fighters', type: 'Regiment of the Astra Militarum', description: 'Founded on the incredibly lethal Death World of Catachan, these warriors are famed for their resourcefulness and ability to survive in nearly any battlefi eld.', modification: { },
        },
        {
          effectLabel: 'Regimental Affiliation',
          effect: '+½ Rank dice to Pilot tests.',
          placeholder: '<Regiment>', name: 'Armageddon Steel Legion', type: 'Regiment of the Astra Militarum', description: 'Founded upon the war-torn world of Armageddon, the Steel Legion commonly ride to war through the polluted wastes of their planet inside armoured vehicles.', modification: { },
        },
        {
          effectLabel: 'Regimental Affiliation',
          effect: '+½ Rank dice to Leadership tests.',
          placeholder: '<Regiment>', name: 'Vostroyan Firstborn', type: 'Regiment of the Astra Militarum', description: 'Founded on the Hive World of Vostroya, this regiment is made up of the fi rstborn sons of every family. This tradition was born from an ancient refusal to tithe soldiers to the Imperium, a mistake they have atoned for ever since. Offi cers are of noble birth, while common soldiery are made up of worker families.', modification: { },
        },
        {
          effectLabel: 'Regimental Affiliation',
          effect: '+½ Rank dice to Resolve tests.',
          placeholder: '<Regiment>', name: 'Valhallan Ice Warriors', type: 'Regiment of the Astra Militarum', description: 'Founded on the desolate Ice World of Valhalla, this regiment is made up of stern, stubborn soldiers who are all but impervious to harsh conditions.', modification: { },
        },
        {
          effectLabel: 'Regimental Affiliation',
          effect: '+½ Rank dice to Awareness tests.',
          placeholder: '<Regiment>', name: 'Tallarn Desert Raiders', type: 'Regiment of the Astra Militarum', description: 'Founded on the Desert World of Tallarn, this regiment is highly skilled at mobile warfare. Patient and determined, Tallarn soldiers are ferocious in pursuit of their enemies.', modification: { },
        },

        // Ordos of the Inquisitor
        // (i) Characters with the <Ordo> keyword must have the Inquisition keyword as well.
        {
          placeholder: '<Ordo>',
          type: 'Ordo of the Inquisiton',
          name: 'Ordo Hereticus',
          description:
            'The Ordo Hereticus hunts down heretics, mutants, and rogue psykers. It is their ' +
            'responsibility to police the Adeptus Ministorum. Their most common ally is the Order ' +
            'Militant of the Ecclesiarchy, the Sisters of Battle.',
          effect: 'Choose one: You gain +2 bonus dice to resist psychic powers, or you gain +2 '
          + 'bonus dice to resist Corruption tests.',
          modification: {},
          options: [
            {
              name: 'Ordo Hereticus Specialisaton',
              snippet: 'You gain +2 bonus dice to resist psychic powers.',
              description: ''
            },
            {
              name: 'Ordo Hereticus Specialisaton',
              snippet: 'You gain +2 bonus dice to resist Corruption tests.',
              description: ''
            },
          ],
        },
        {
          placeholder: '<Ordo>',
          type: 'Ordo of the Inquisiton',
          name: 'Ordo Xenos',
          description: 'The Ordo Xenos is tasked with defeating the alien in all its loathsome '
          + 'forms. They study their foe, always probing for more information about the '
          + 'weaknesses of alien species and civilisations. It is their duty to investigate '
          + 'xenos influence over Imperial domains. Their operations often see them working '
          + 'alongside the Space Marines of the Deathwatch.',
          effect: 'The character is fluent in one alien language; choose an alien species and '
          + 'write it down on the character sheet. In addition, the character gains +2 bonus '
          + 'dice for any Scholar or Investigation tests related to xenos.',
          modification: {},
          modifications: [
            { name: 'Understand your enemies', snippet: 'The character is fluent in one alien language,' },
            { name: 'Know your enemies', snippet: '+2 bonus dice to Scholar tests related to xenos.' },
            { name: 'Exploit your enemies', snippet: '+2 bonus dice to Investigation tests related to xenos.' },
          ],
        },
        {
          placeholder: '<Ordo>',
          type: 'Ordo of the Inquisiton',
          name: 'Ordo Malleus',
          description: 'The Ordo Malleus were established to fight against mankind’s greatest '
          + 'menace the corrupting influence of Chaos. The Chamber Militant of the Ordo Malleus '
          + 'are the Grey Knights, and they sometimes campaign together under a dual command '
          + 'structure.',
          effect: 'Either the character gains 2 Corruption points, or gain +2 bonus dice for any '
          + 'Scholar or Investigation tests related to daemons and the warp.',
          modification: {},
          options: [
            {
              name: 'Ordo Malleus Specialisaton',
              snippet: 'You gain +2 Corruption points.',
              description: ''
            },
            {
              name: 'Ordo Malleus Specialisaton',
              snippet: 'You gain +2 bonus dice to Scholar or Investigation tests related to daemons and the warp.',
              description: ''
            },
          ],
        },
        {
          placeholder: '<Ordo>',
          type: 'Ordo of the Inquisiton',
          name: 'Other Ordo',
          description: 'Inquisitors are as varied in appearance, manner and method as the worlds '
          + 'of the Imperium they strive to protect.',
          effect: 'Choose one Skill from the following list: Cunning, Deception, Insight, '
          + 'Intimidation, Persuasion, Psychic Mastery, Scholar, Stealth, Survival, Tech. '
          + 'Gain +½ Rank bonus dice with that skill.',
          modification: {},
          options: [
            { name: 'Cunning', snippet: 'Gain +½ Rank bonus dice to Cunning Tests.' },
            { name: 'Deception', snippet: 'Gain +½ Rank bonus dice to Deception Tests.' },
            { name: 'Insight', snippet: 'Gain +½ Rank bonus dice to Insight Tests.' },
            { name: 'Intimidation', snippet: 'Gain +½ Rank bonus dice to Intimidation Tests.' },
            { name: 'Persuasion', snippet: 'Gain +½ Rank bonus dice to Persuasion Tests.' },
            { name: 'Psychic Mastery', snippet: 'Gain +½ Rank bonus dice to Psychic Mastery Tests.' },
            { name: 'Scholar', snippet: 'Gain +½ Rank bonus dice to Scholar Tests.' },
            { name: 'Stealth', snippet: 'Gain +½ Rank bonus dice to Stealth Tests.' },
            { name: 'Survival', snippet: 'Gain +½ Rank bonus dice to Survival Tests.' },
            { name: 'Tech', snippet: 'Gain +½ Rank bonus dice to Tech Tests.' },
          ],
        },
        {
          placeholder: '<Ordo>',
          type: 'Ordo of the Inquisiton',
          name: 'No Ordo',
          description: 'Inquisitors are as varied in appearance, manner and method as the worlds '
          + 'of the Imperium they strive to protect.',
          effect: 'Choose one Skill from the following list: Cunning, Deception, Insight, '
          + 'Intimidation, Persuasion, Psychic Mastery, Scholar, Stealth, Survival, Tech. '
          + 'Gain +½ Rank bonus dice with that skill.',
          modification: {},
          options: [
            { name: 'Cunning', snippet: 'Gain +½ Rank bonus dice to Cunning Tests.' },
            { name: 'Deception', snippet: 'Gain +½ Rank bonus dice to Deception Tests.' },
            { name: 'Insight', snippet: 'Gain +½ Rank bonus dice to Insight Tests.' },
            { name: 'Intimidation', snippet: 'Gain +½ Rank bonus dice to Intimidation Tests.' },
            { name: 'Persuasion', snippet: 'Gain +½ Rank bonus dice to Persuasion Tests.' },
            { name: 'Psychic Mastery', snippet: 'Gain +½ Rank bonus dice to Psychic Mastery Tests.' },
            { name: 'Scholar', snippet: 'Gain +½ Rank bonus dice to Scholar Tests.' },
            { name: 'Stealth', snippet: 'Gain +½ Rank bonus dice to Stealth Tests.' },
            { name: 'Survival', snippet: 'Gain +½ Rank bonus dice to Survival Tests.' },
            { name: 'Tech', snippet: 'Gain +½ Rank bonus dice to Tech Tests.' },
          ],
        },

        // Rogue Trader Dystanies
        // (i) Characters with the <Dynasty> keyword must have the Rogue Trader keyword as well.
        { placeholder: '<Dynasty>', name: 'Your Rogue Trader House', type: 'Rogue Trader Dynasty', description: '' },

        // Forge Worlds of the Adeptus Mechanicus
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Mars', description: 'The Red Planet: Birthplace of the Cult Mechanicus, considered the holiest of all celestial orbs. Tech-Priests of Mars consider themselves the most blessed of the Cult Mechanicus, and their ability to placate machine spirits is second to none.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Lucius', description: 'The Hollow Forge: A hollow world, Lucius is powered by an artificial sun in the planet’s core. This Forge World is known for creating a unique, sought-after alloy known as Luciun.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Agripinaa', description: 'Orb of a Million Scars: This Forge World exists on the threshold of the Eye of Terror. Agripinaa has fought off countless, relentless invasions by the forces of Chaos.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Stygies VIII', description: 'The Ever-Staring Cyclops: Considered untrustworthy by other Forge Worlds, Stygies VIII nearly fell to heresy but was saved by an Aeldari intervention. It is home to a secretive sect dedicated to the study of alien technology known as Xenarites.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Graia', description: 'The Crown of Miracles: Graia’s forges exist as a geometrically-perfect network of space stations known as the Crown. The tenacity of this Forge World is legendary, and they are known for their steadfast pursuit of their goals, no matter the cost.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Metalica', description: 'The Gleaming Giant of Ultima Segmentum: This Forge World is formed nearly entirely from metal, having exterminated all biological life. It is a world of hissing pistons, glowing forges, and strata upon strata of industrial waste. The Tech-Priests of Metalica take pride in the sterile perfection of their lifeless world.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Ryza', description: 'Furnace of Shackled Stars: Famed for producing containment fields and plasma weaponry, Ryza is locked in a battle of survival against the invasion of two major Ork Waaagh!s. The residents of this Forge World have a reputation for fi erceness.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Triplex / Phall', description: 'Forge of the Eastern Frontier: Isolated on the Eastern Fringe, this Forge World is considered somewhat insubordinate to Mars. Autonomous and independently-minded, Triplex Phall sends numerous explorator fl eets to discover new worlds and resources.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Daimos', description: 'The Gift of the Sigillite: Relocated from the orbit of Mars to Titan, this heavily-industrialised moon produces highly-specialised wargear for the Grey Knights—a secret Chapter of Space Marines tasked with directly combating the threat of daemons and Chaos.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Voss Prime', description: 'The Right Hand of Mars: Modelled after Mars, Voss Prime is second only to that world in production of armaments for the Imperium. The Forge World’s vaunted capacity has gai-ned them praise for Vosspattern vehicles, but they have struggled to master replicating plasma technology.' },
        { type: 'Forge World of the Adeptus Mechanicus', placeholder: '<Forge World>', name: 'Gryphonne IV', description: 'The Lost Forge: The formidable defences of this Forge World were overrun by the assault of Hive Fleet Leviathan. Certain that their fortifi cations would ensure victory, the defenders fought with valour and skill. However, the Tyranids shattered Gryphonne IV’s armies and laid waste to the world. Only a relative handful of survivors escaped.' },

        // Astartes Chapters
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Blood Angles', description: 'Masters of melee combat, the Blood Angels readily charge into hordes of even the most capable foes, often overcoming terrible odds. Horus slew Sanguinius during the attack on blessed Terra, and visions of that death haunt the minds of every battle brother. Fury from that tragedy keeps all Blood Angels on the verge of complete loss of control.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Dark Angles', description: 'The Dark Angels demonstrate no emotion when they engage their opponents. They have no mercy for the Imperium’s foes, nor do they take pride in even their greatest triumphs. Their darkest secret is that members of the founding Legion turned against the Imperium—though this is known only to the highest-ranking members of the chapter. The Dark Angels and their successors strive endlessly to fi nd and eliminate their Fallen brethren.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Imperial Fists', description: 'The Imperial Fists proudly assume the responsibility for defending blessed Terra from invaders, including traitors and xenos. They are masters of siegecraft, exhibiting the patience and determination to outlast a foe in combination with a well-earned recognition for exceptional marksmanship. After the Horus Heresy, the Imperial Fists embraced the Codex Astartes, following its tenets to the letter.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Iron Hands', description: 'The Iron Hands see fl esh and emotion as weaknesses to be excised. In battle, they always strive to fight without emotion, following a strategy directed entirely by logic. To purge themselves of weakness, Iron Hands replace their body’s fl esh with cybernetics—including the replacement of healthy tissues. These beliefs have led the chapter to build close ties to the Adeptus Mechanicus.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Raven Guard', description: 'The Raven Guard prefer to fight covertly, executing swift strikes from the shadows and rapid withdrawals instead of protracted engagements on open battlefi elds. While they are fully capable and equipped to execute more straightforward attacks, their numbers are limited due to fl aws in their gene-seed. Consequently, they prefer to execute focused attacks, exploiting what they can identify as the enemy’s weakest points.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Salamanders', description: 'The Salamanders’ Seed World is the planet Nocturne, a planet of exotic radiation and constant lava fl ows. They are known for their fi erce determination and endurance, which complement their skill at arms. The Salamanders are the only legion that did not divide into other chapters during the Second Founding, due to the severe losses they suffered during the Horus Heresy.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Space Wolves', description: 'The Space Wolves are fiercely loyal to the Imperium, but they are a savage and boastful lot. They have no patience for the rules of the Codex Astartes or any other Imperial authority. Instead, they revel in their feral actions and appearance as they overcome any who would dare to oppose the Imperium.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Ultramarines', description: 'Ultramarines are renowned for their discipline, honour, and tactical acumen. In the wake of the Horus Heresy, the Ultramarines Legion composed nearly half of the Space Marines in the galaxy. By willingly dividing the Legion into chapters, they set the example that enabled the second founding to succeed and provide a basis for the other legions to embrace the Codex Astartes.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'White Scars', description: 'The White Scars embrace strategies built around rapid and savage attacks, striking at an opponent and withdrawing before the foe has any opportunity to make a counterstrike. They prefer to attack from vehicles, deploying from transports or riding bikes or Land Speeders into battle. Their traditions prize ferocity, tempered by an inherent sense of honour and justice.' },
        { type: 'Chapter of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Other Chapter', description: 'An unkown chapter in the vast space.' },
        { type: 'Chapter House of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Doctors of Doom (House Isenwell)', description: 'Thrive for excellence.' },
        { type: 'Chapter House of the Adeptus Astartes', placeholder: '<Chapter>', name: 'Doctors of Doom (House Hironiat)', description: 'Break the Tide.' },

        // Marks of the Chaos Goods
        { type: 'Mark of Chaos', placeholder: '<Mark of Chaos>', name: 'Mark of Khorne', description: '' },
        { type: 'Mark of Chaos', placeholder: '<Mark of Chaos>', name: 'Mark of Tzzeench', description: '' },
        { type: 'Mark of Chaos', placeholder: '<Mark of Chaos>', name: 'Mark of Nurgle', description: '' },
        { type: 'Mark of Chaos', placeholder: '<Mark of Chaos>', name: 'Mark of Slaneesh', description: '' },
        { type: 'Mark of Chaos', placeholder: '<Mark of Chaos>', name: 'Chaos Undivided', description: '' },

        // Eldar Craftworlds
        { type: 'Aeldari Craftsworld', placeholder: '<Craftworld>', name: 'Alaitoc', description: 'The Starstriders: The Eldar of Alaitoc have spread further afi eld than other Craftworlds, acting as their people’s eyes and ears as they wander the galaxy. The warriors of Alaitoc favour stealth and misdirection over brute force.' },
        { type: 'Aeldari Craftsworld', placeholder: '<Craftworld>', name: 'Biel-Tan', description: 'The Swordwind: This is the most militant of all Craftworlds. Those who strive hardest to return to the glory of their people before the Fall, the Eldar of Biel-Tan mourn the shattering of their Craftworld during an invasion by the forces of Slaanesh.' },
        { type: 'Aeldari Craftsworld', placeholder: '<Craftworld>', name: 'Iyanden', description: 'The Ghost Warriors: Once a thriving Craftworld, Iyanden was invaded by Tyranids of Hive Fleet Kraken. The Eldar fought off this brutal assault at great cost. Now, most of the Craftworld is empty, forcing the Iyanden Farseers to call upon their fallen to fight for survival.' },
        { type: 'Aeldari Craftsworld', placeholder: '<Craftworld>', name: 'Saim-Hann', description: 'The Wild Host: The Eldar of Saim-Hann are renowned for their fast, mobile warfare. They are a Craftworld of ancient tradition and a proud warrior culture. They observe many rituals that are unique to their Craftworld, including special races and duels.' },
        { type: 'Aeldari Craftsworld', placeholder: '<Craftworld>', name: 'Ulthwé', description: 'The Damned: This Craftworld has fought an unending war around the Eye of Terror. Ulthwé tends to involve itself in the events of the galaxy far more than other Craftworlds. It is also home to many of the most powerful psykers in the galaxy. Some Eldar believe this Craftworld is cursed due to its proximity to the Eye of Terror.' },

        // Ork Clans
        {
          placeholder: '<Clan>',
          type: 'Ork Clan',
          name: 'Goffs',
          description: 'Goffs have a prominent place in the battle line and can usually be found '
          + 'where the fighting is thickest. Goffs consider massed infantry charges the only '
          + 'true way for Orks to fight, declaring anything else to be “muckin’ about.”',
          effect: '+1 bonus dice to melee attacks when charging (see page 221).',
          modification: {},
        },
        {
          placeholder: '<Clan>',
          type: 'Ork Clan',
          name: 'Evil Sunz',
          description: 'The Evil Sunz Clan embodies the Orks’ obsessive love for speed. Evil '
          + 'Sunz typically pile aboard the fastest vehicles they can fi nd to hurtle into battle '
          + 'at the vanguard of the Waaagh!',
          effect: '+1d3 bonus dice to Piloting tests when the vehicle is moving as fast as '
          + 'possible. Roll to see how many bonus dice you receive at the beginning of each round.',
          modification: {},
        },
        {
          placeholder: '<Clan>',
          type: 'Ork Clan',
          name: 'Bad Moons',
          description: 'The Bad Moons Clan is the richest of their kind, for their teeth the '
          + 'basis of Ork economy grow at twice the normal rate. Because of their wealth, Bad '
          + 'Moons possess the best and shiniest gear, and are not shy about bragging about it.',
          effect: '+2 Wealth',
          modification: {},
        },
        {
          placeholder: '<Clan>',
          type: 'Ork Clan',
          name: 'Deathskulls',
          description: 'Deathskulls are light-fingered thieves who share an almost Mekboylike '
          + 'knack for tinkering with Ork technology. Though Deathskulls enjoy a good fight as '
          + 'much as the next Ork, their innate kleptomania makes them see every battle as an '
          + 'excuse to scavenge or loot anything they can get their hands on.',
          effect: '+1 bonus dice to Tech tests and Influence tests to acquire items.',
          modification: {},
        },
        {
          placeholder: '<Clan>',
          type: 'Ork Clan',
          name: 'Blood Axe',
          description: 'The Blood Axe Clan is unique amongst orks for their belief that battles '
          + 'should be fought according to an actual plan. Blood Axes are not less courageous or '
          + 'violent, they simply possess a rudimentary comprehension of strategy, tactics, and '
          + 'stealth.',
          effect: '+1 bonus dice to Leadership or Stealth tests.',
          modification: {},
        },
        {
          placeholder: '<Clan>',
          type: 'Ork Clan',
          name: 'Snakebites',
          description: 'Snakebites see themselves as staunch traditionalists, caring little that '
          + 'the other clans mock them for their backward ways. Snakebites specialise in the '
          + 'breeding of squigs (or squiggly beasts), the strange fungoid monsters that make up '
          + 'much of the Orks’ bizarre ecosystem.',
          effect: '+2 bonus dice to Survival tests.',
          modification: {},
        },

        // PAX Navigator Houses
        { type: 'Navigator House', placeholder: '<Navis House>', name: 'Magisterial House', description: 'Greatest in size and power are the Magisterial Houses. The roots of the original Navigator families, these Houses maintain mighty palaces on Terra and their influence reaches to the very edges of the light of the Astronomican. The Magisterial Houses maintain traditions and practices that have served them for millennia. They are masters of the traditional Navigator crafts and have more control over the malign mutations that afflict those with the gene. To be part of a Magisterial House is to know without question the purity of your blood and the ancient power and nobility of your family.' },
        { type: 'Navigator House', placeholder: '<Navis House>', name: 'Nomadic House', description: 'Some of the Great Houses have forsaken ties of sector and system, relinquishing their terrestrial holdings. Instead, over the centuries, these Navigator Houses have taken wholly to the stars to become wanderers and gypsies, their lines preserved on vast fleets of ships constantly on the move. To be part of a Nomadic House is to be born between the stars and spurn the life of a dirt dweller. It is also this long term exposure to both the void and the Immaterium that hones the skills of Navigators from Nomadic Houses, giving them an understanding of space and warp second to none' },
        { type: 'Navigator House', placeholder: '<Navis House>', name: 'Renegade House', description: 'Some of the Great Houses have completely forsaken the traditions and ancient practices of the Navigator families in their quest for power, or may have been turned on by the rest of the Navis Nobilite, harrowed, and driven into exile. Dabbling heavily in the genes of their children in order to improve their lot, their tampering often leads to hideous mutations and unconscionable monsters in their lineage, which in turn leads to rejection by the Paternova and a hunt to extinction by the Inquisition. In some cases, however, it has birthed new strains of the gene and given rise to families with unique abilities and potent powers. To be a part of a Renegade House is to have cast aside the sacred Navigator traditions as small minded and restrictive and instead embraced the glory and limitless potential of your ancestry - or so the houses believe, to comfort themselves.' },
        { type: 'Navigator House', placeholder: '<Navis House>', name: 'Shrouded House', description: 'Shrouded houses have suffered great losses or shame within the more established dominions of the Imperium. They have opted to move their powerbase completely to the edge of known space, where they cling to the barest strands of their former status and power. Though they may be rich in skill, knowledge or lore, something in the past of Shrouded Houses has blighted them and reduced them to a state so far from their once exalted position that they are sometimes cruelly called ‘beggar houses’ by their more successful counterparts. To be part of a Shrouded House is to be part of a fallen line that is slowly rising again to stand defiant against those that once cast them down - or at least, so you are told by your elders. Their loss in standing has often forced such houses to flee to the margins of the Imperium and to develop a cunning and opportunistic mindset alongside a skill that is often lacked by more comfortably indolent houses.' },

        // { placeholder: '<>', name: '', description: '' },
      ];
    return {
      keywordRepository,
      keywordSubwordRepository,
      keywordCombinedRepository: [ ...keywordRepository, ...keywordSubwordRepository],
    };
  },
};
