import axios from 'axios';

export const state = () => ({
  id: -1,
  setting: undefined,
  settingSelected: true,
  settingTier: 3,
  customXp: 0,
  settingHomebrewContent: [],
  characterName: 'Simsel Simselman',
  species: { value: undefined, cost: 0 },
  speciesAstartesChapter: undefined,
  archetype: { value: undefined, cost: 0 },
  attributes: {
    strength: 1,
    agility: 1,
    toughness: 1,
    intellect: 1,
    willpower: 1,
    fellowship: 1,
    initiative: 1,
  },
  skills: {
    athletics: 0,
    awareness: 0,
    ballisticSkill: 0,
    cunning: 0,
    deception: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    leadership: 0,
    medicae: 0,
    persuasion: 0,
    pilot: 0,
    psychicMastery: 0,
    scholar: 0,
    stealth: 0,
    survival: 0,
    tech: 0,
    weaponSkill: 0,
  },
  keywords: [],
  talents: [],
  psychicPowers: [],
  ascensionPackages: [],
  wargear: [],
  background: undefined,
  enhancements: [],
});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
  id(state) { return state.id; },
  effectiveCharacterTier(state) {
    const archetypeTier = state.archetype.tier || 0;
    let ascensionTier = 0;
    state.ascensionPackages.forEach((i) => {
      if (i.targetTier > ascensionTier) {
        ascensionTier = i.targetTier;
      }
    });
    return Math.max(archetypeTier, ascensionTier);
  },
  attributeCosts(state) {
    const attributeTotalCost = [0, 0, 4, 10, 18, 33, 51, 72, 104, 140, 180, 235, 307];
    let attributesSpending = 0;
    Object.keys(state.attributes).forEach((key) => {
      attributesSpending += attributeTotalCost[state.attributes[key]];
    });
    return attributesSpending;
  },
  skillCosts(state) {
    const skillTotalCost = [0, 1, 3, 6, 10, 20, 32, 46, 60];
    let skillSpending = 0;
    Object.keys(state.skills).forEach((key) => {
      skillSpending += skillTotalCost[state.skills[key]];
    });
    return skillSpending;
  },
  talentCosts(state) {
    let spending = 0;
    state.talents.forEach((talent) => { spending += talent.cost; });
    return spending;
  },
  ascensionCosts(state) {
    let spending = 0;
    state.ascensionPackages.forEach((ascensionPackage) => {
      spending += ascensionPackage.cost;
    });
    return spending;
  },
  psychicPowerCosts(state) {
    let spending = 0;
    state.psychicPowers.forEach((psychicPower) => {
      spending += psychicPower.cost;
    });
    return spending;
  },
  spendBuildingPoints(state, getters) {
    let spend = 0;

    spend += state.species ? state.species.cost : 0;
    spend += state.archetype ? state.archetype.cost : 0;
    spend += getters.attributeCosts;
    spend += getters.skillCosts;
    spend += getters.talentCosts;
    spend += getters.ascensionCosts;
    spend += getters.psychicPowerCosts;

    return spend;
  },
};

export const mutations = {
  resetState (state) {
    // Merge rather than replace so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  },
  setState (state, newState) {
    Object.assign(state, newState);
  },
  setSetting(state, payload) {
    state.setting = payload.setting;
    state.settingSelected = true;
  },
  /**
   * @param payload { name:String, source:String, type:String, replacement:undefined/String }
   */
  addKeyword(state, payload) {
    console.log(`Adding keyword ${payload.name} of type ${payload.type}.`);
    state.keywords.push(payload);
  },
  /**
   * keyword { name:String, source:String, type:String, replacement:undefined/String }
   * @param payload { placeholder:String, replacement:String, source:String}
   */
  replaceKeyword(state, payload) {
    if ( state.keywords.length > 0) {
      let placeholderKeyword = state.keywords.find(k => {
        return (k.source === payload.source && k.name === payload.placeholder);
      });
      if ( placeholderKeyword ) {
        placeholderKeyword.replacement = payload.replacement;
        state.keywords = state.keywords
          .filter( k => !(k.source === payload.source && k.name === payload.placeholder) )
        state.keywords.push(placeholderKeyword);
      };
    }
  },
  addPower(state, payload) {
    const hasPower = state.psychicPowers.find(t => t.name === payload.name) !== undefined;
    if (!hasPower) {
      state.psychicPowers.push({ name: payload.name, cost: payload.cost, source: payload.source || undefined });
    }
  },
  /**
   * @param payload { source:String }
   */
  clearPowersBySource(state, payload) {
    if ( state.psychicPowers.length > 0 ) {
      console.log(`found ${state.psychicPowers.length} psychic powers, clearing with source ${payload.source}...`);
      state.psychicPowers = state.psychicPowers.filter( k => k.source.indexOf(payload.source) < 0 );
      console.log(`${state.psychicPowers.length} psychic powers remaining`);
    }
  },
  addAscension(state, payload) {
    state.ascensionPackages.push({
      key: payload.key,
      value: payload.value,
      cost: payload.cost,
      storyElementChoice: undefined,
      sourceTier: payload.sourceTier,
      targetTier: payload.targetTier,
    });
  },
  removeAscension(state, payload) {
    // remove the package from the ascension stacks
    state.ascensionPackages = state.ascensionPackages.filter(a => (a.value !== payload.value));

    // remove all enhancements that are related to the package
    state.enhancements = state.enhancements.filter(e => !e.source.startsWith(`ascension.${payload.key}`));

    state.keywords = state.keywords.filter( k => k.source !== `ascension.${payload.key}`);

    // ToDo: remove all wargear that is related to the package
  },
  setAscensionPackageStoryElement(state, payload){
    console.info(payload);
    // find package by payload.ascensionPackageKey and payload.ascensionPackage
    const index = state.ascensionPackages.findIndex(a => (
      a.key === payload.ascensionPackageKey &&
      a.targetTier === payload.ascensionPackageTargetTier
    ));
    if (index >= 0) {
      state.ascensionPackages[index].storyElementChoice = payload.ascensionPackageStoryElementKey;
    }
  },
  setAscensionPackageWargearOption(state, payload){
    console.info(`Set Ascension WargearOption to ${payload.ascensionPackageWargearOptionKey}`);
    // find package by payload.ascensionPackageKey and payload.ascensionPackage
    const index = state.ascensionPackages.findIndex(a => (
      a.key === payload.ascensionPackageKey &&
      a.targetTier === payload.ascensionPackageTargetTier
    ));
    if (index >= 0) {
      state.ascensionPackages[index].wargearChoice = payload.ascensionPackageWargearOptionKey;
    }
  },
  setAscensionModifications(state, payload) {
    console.info(payload);
    // remove previous choice
    state.enhancements = state.enhancements.filter(e => e.source !== payload.source);
    state.enhancements.push(payload);
  },
  addWargear(state, payload) {

    const length = 8;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.info(`Adding '${payload.name}' by '${payload.source}' [${result}]`)
    state.wargear.push({ id: result, name: payload.name, source: payload.source });
  },
  setBackground(state, payload) {
    state.background = payload.name;
  },
  setBackgroundModifications(state, payload) {
    console.info(payload);
    state.enhancements = state.enhancements.filter((e) => e.source !== payload.source);

    payload.modifications.forEach((item) => {
      state.enhancements.push(item);
    });
    console.info(state.enhancements);
  },
  clearEnhancementsBySource(state, payload) {

    state.enhancements = state.enhancements.filter((e) => e.source.indexOf(payload.source) < 0 );
  }
};

const baseApiUrl = 'http://localhost:3000';

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    //commit('user/setUuid', 'ecd016aa-afac-44e8-8448-ddd09197dbb8');
    //commit('user/setUuid', undefined);
  },
  populateState(context, payload) {
    const state = {
      ...context.state,
      ...payload.data,
      };
    context.commit('setState', payload.data);
    console.info(state)
  },
  saveCurrentCharacterToDatabase({ context, state, getters }) {

    const body = {
      state: state,
      version: 'v1.0.0'
    };

    // if current state has no id => create a new character entry and return the ID
    let characterId = getters['id'];
    if ( characterId <= 0 ) {
      axios.post(`${baseApiUrl}/api/characters`, body)
      .then((response) => {
        console.log(response);
        characterId = response.data.id;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
    }
    axios.put(`${baseApiUrl}/api/characters/${characterId}`, body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {});
  },
  /**
   * Character is loaded by a given uuid identifiying the character
   * @param context
   * @param payload
   */
  loadCharacterFromDatabase(context, characterId) {
    console.log(characterId);
    axios.get(`${baseApiUrl}/api/characters/${characterId}`)
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    })
    .finally( () => {
    });
  },
};
