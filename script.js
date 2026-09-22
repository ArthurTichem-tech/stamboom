const sources = {
  family: { label: 'Familiegegevens, door Arthur Tichem gedeeld', url: null },
  philippus: { label: 'Philippuslandt, overzicht van overleden inwoners en familieverbanden', url: 'https://philippuslandt.nl/wp-content/uploads/2025/01/overleden-inwoners-en-oud-inwoners-en-verwanten-uit-Sint-Philipsland-van-1940-tot-en-met-2024.pdf' },
  vanzanen: { label: 'Genealogie Van Zanen, gezin van Jacoba Verwijs en Cornelis Tichem', url: 'https://www.genealogieonline.nl/genealogie-van-zanen/I6000000001747644345.php' },
  westplate: { label: 'Genealogie Westplate, Cornelis Tichem (1832–1893)', url: 'https://www.genealogieonline.nl/genealogie-westplate/I1257.php' },
  slager: { label: 'Genealogie Westplate, Neeltje Maria Slager en kinderen', url: 'https://www.genealogieonline.nl/genealogie-westplate/I10293.php' },
  vanes: { label: 'Stamboom Bakker, Pieternella van Es en kinderen', url: 'https://www.genealogieonline.nl/bakker-stamboom/I500156.php' },
  jacob: { label: 'Genealogie Post-Oost, afstamming van Johannis Tichem', url: 'https://www.genealogieonline.nl/genealogie-post-oost/I55735.php' },
  stavenisse: { label: 'NGV Zeeland, klapper op doopboek Stavenisse (1616–1810)', url: 'https://www.ngv-afdelingen.nl/zld/wp-content/uploads/2023/04/Stavenisse_Klapper_DB_1616-1810_v001.pdf' },
  soer: { label: 'NGV Rotterdam, Kwartierstaat Sabrina Soer', url: 'https://ngv-rotterdam.nl/wp-content/uploads/2024/04/kwartierstaat-soer.pdf' },
  leune: { label: 'Kwartierstaat J.M.G. Leune, met archiefverwijzingen bij Jan Klaesse Tichon', url: 'https://www.hanleune.nl/images/Bestanden/Steenbergen/Genealogie%20van%20Steenbergenaren/Kwartierstaat%20van%20J.M.G.%20Leune.pdf' },
  visscher: { label: 'Stamboom Visscher, gezin van Cornelis Tichem en Maria Bal', url: 'https://www.genealogieonline.nl/stamboom-visscher/I3547.php' },
  debie: { label: 'Stamboom Jacob de Bie, gezin van Johannes Tichon en Lena Casseband', url: 'https://www.genealogieonline.nl/stamboom-jacob-de-bie/I6400.php' },
  poortvliet: { label: 'NGV Zeeland, reconstructie doopboek Poortvliet', url: 'https://www.ngv-afdelingen.nl/zld/wp-content/uploads/2023/04/Poortvliet_Reconstructie_Doopboek_1640-1810_v005.pdf' },
  stavenisse2024: { label: 'NGV Zeeland, reconstructie doopboek Stavenisse (2024)', url: 'https://www.ngv-afdelingen.nl/zld/wp-content/uploads/2024/12/Stavenisse_Reconstructie_Doopboek_1616-1830_v008.pdf' },
  tychon: { label: 'Genealogische reconstructie familie Tichon/Tichem', url: 'https://philippetychon-ovh.fr/full_genealogy/dat0.htm' },
  kaashoek: { label: 'Stamboom Kaashoek en Van der Kooi, Jacoba Tichem', url: 'https://www.genealogieonline.nl/stamboom-kaashoek-en-van-der-kooi/I5423.php' }
};

const people = [
  { id:'arthur-heden', name:'Arthur Tichem', dates:'Levende generatie', place:'Apeldoorn', partner:'—', status:'family', note:'Dit archief begint bij Arthur. Van levende familieleden staan geen geboortedata, adressen of contactgegevens op deze openbare pagina.', sources:['family'] },
  { id:'arthur-vader', name:'Arthur Tichem', dates:'Levende generatie', place:'Westland · Apeldoorn', partner:'Pia Hardeman', status:'family', note:'Arthur groeide op in het Westland. De gegevens over zijn plaats in de familie komen uit de familie zelf.', sources:['family'] },
  { id:'jan-opa', name:'Jan Tichem', dates:'Levende generatie', place:'Tholen · Westland', partner:'Cor Struijk (naamspelling te verifiëren)', status:'family', note:'Volgens familiegegevens is Jan een zoon van Cornelis “Cees” Tichem en Jacoba Verwijs. Zijn verbinding met de historische lijn is gebaseerd op familieherinnering en verdient nog een direct document.', sources:['family'] },
  { id:'cornelis-1897', name:'Cornelis “Cees” Tichem', dates:'1897–1979', place:'Sint-Philipsland', partner:'Jacoba Verwijs', status:'research', note:'Cornelis, geboren in 1897, was een zoon van Gerard Tichem en Neeltje Maria Slager. Zijn huwelijk met Jacoba Verwijs verbindt de oudere Scherpenisse-tak met Sint-Philipsland.', sources:['philippus','slager'] },
  { id:'gerard-1868', name:'Gerard Tichem', dates:'1868–1934', place:'Scherpenisse', partner:'Neeltje Maria Slager', status:'research', note:'Gerard kwam uit het tweede huwelijk van Cornelis Tichem met Catharina Quaak. In de genealogische publicaties staat hij als vader van Cornelis uit 1897.', sources:['westplate','slager'] },
  { id:'cornelis-1832', name:'Cornelis Tichem', dates:'1832–1893', place:'Scherpenisse', partner:'Catharina Quaak', status:'research', note:'Cornelis werd volgens genealogische publicaties in 1832 in Scherpenisse geboren. Na een eerder huwelijk met Geertruida Feijtel trouwde hij in 1865 met Catharina Quaak; hun zoon Gerard werd in 1868 geboren.', sources:['westplate'] },
  { id:'cornelis-1800', name:'Cornelis Tichem', dates:'ca. 1800–1873', place:'Scherpenisse', partner:'Maria Bal', status:'research', note:'De geboortedatering verschilt tussen stambomen: 1799 of 1801. De verbinding met zoon Cornelis (1832) verschijnt in meerdere genealogische publicaties. Een geboorteakte kan de exacte datum vastleggen.', sources:['westplate'] },
  { id:'johannis-1769', name:'Johannis Tichem', dates:'1769–1820', place:'Poortvliet · Scherpenisse', partner:'Pieternella van Es', status:'research', note:'Johannis wordt in gepubliceerde stambomen genoemd als vader van Cornelis rond 1800 en als zoon van Jacob Tichum. In de bronnen wisselt de spelling van zijn naam.', sources:['vanes','jacob'] },
  { id:'jacob-1740', name:'Jacob Tichum', dates:'1740–1812', place:'Stavenisse · Poortvliet', partner:'Maria Brakelaar', status:'research', note:'Jacob werd in 1740 in Stavenisse gedoopt. De doopboekklapper en genealogische reconstructies plaatsen hem in het gezin van Johannes Tichon en Lena Casseband.', sources:['stavenisse','jacob'] },
  { id:'johannes-1697', name:'Johannes Tichon', dates:'1697–1749', place:'Stavenisse', partner:'Lena Casseband', status:'research', note:'De doop van Johannes is in de Stavenisse-reconstructie op 29 december 1697 geplaatst. Hij wordt als zoon van Jan Klaesse Tichon en Adriaentje Jans Verbeeke genoemd.', sources:['stavenisse','soer'] },
  { id:'jan-1660', name:'Jan Klaesse Tichon', dates:'ca. 1660–1730', place:'Made · Stavenisse', partner:'Adriaentje Jans Verbeeke', status:'research', note:'Jan kwam uit Made. Een kwartierstaat vermeldt zijn komst naar Stavenisse in 1688 en verwijst naar verschillende archiefstukken over zijn leven daar. Zijn patroniem Klaesse wijst op een vader met de voornaam Claes.', sources:['leune','soer'] },
  { id:'claes-1630', name:'Claes Tijgon / Tichon', dates:'mogelijk ca. 1630', place:'Made', partner:'Onbekend', status:'tentative', note:'Een oudere Claes wordt in genealogische reconstructies als mogelijke vader van Jan Klaesse genoemd. De directe akte die deze vader-zoonverbinding bewijst is nog niet gevonden. Dit profiel is daarom nadrukkelijk een onderzoekshypothese.', sources:['soer'] }
];

// Alleen met naam genoemde broers en zussen. Dit is geen bewijs dat een gezin compleet is.
const siblings = {
  'arthur-heden': [
    { name:'Arjan', relation:'Oudere broer', source:'family' },
    { name:'Pia', relation:'Oudere zus', source:'family' },
    { name:'Corinnne', relation:'Oudere zus', source:'family' },
    { name:'Emmy', relation:'Oudere zus', source:'family' },
    { name:'Sanne', relation:'Oudere zus', source:'family' }
  ],
  'arthur-vader': [
    { name:'Erwin', relation:'Oudere broer', source:'family' },
    { name:'Marcel', relation:'Jongere broer', source:'family' }
  ],
  'jan-opa': [
    { name:'Gerard Tichem', years:'1920–2010', source:'philippus' },
    { name:'Janna Tichem', years:'1922–2014', source:'philippus' },
    { name:'Neeltje Maria Tichem', years:'1923–2015', source:'philippus' },
    { name:'Dingeman Tichem', years:'ca. 1925–2011', source:'philippus' },
    { name:'Catharia Maria Tichem', years:'ca. 1928–1993', source:'philippus' },
    { name:'Jacobus Tichem', years:'1928–2013', source:'philippus' },
    { name:'Jannetje Janna Tichem', years:'1932–2024', source:'philippus' },
    { name:'Marinus Jacobus Tichem', years:'1932–1956', source:'vanzanen' },
    { name:'Cornelia Jozina Tichem', years:'1933–1943', source:'vanzanen' }
  ],
  'cornelis-1897': [
    { name:'Catharina Maria Tichem', years:'1894–1959', source:'slager' },
    { name:'Maria Francina Tichem', years:'1895', source:'slager' },
    { name:'Jacoba Tichem', years:'1900–1967', source:'kaashoek' },
    { name:'Pieternella Tichem', years:'1902', source:'slager' },
    { name:'Marinus Jacobus Tichem', years:'1905–1982', source:'slager' },
    { name:'Cornelia Josina Tichem', years:'1907', source:'slager' },
    { name:'Jacob Marinus Tichem', years:'1910–1940', source:'slager' }
  ],
  'gerard-1868': [
    { name:'Cornelis Tichem', years:'1863–1863', relation:'Halfbroer', source:'westplate' },
    { name:'Maria Jozina Tichem', years:'1866–1954', source:'westplate' },
    { name:'Cornelis Tichem', years:'1870–1960', source:'westplate' },
    { name:'Jozua Tichem', years:'1873–1965', source:'westplate' },
    { name:'Pieter Tichem', years:'1876–1971', source:'westplate' }
  ],
  'cornelis-1832': [
    { name:'Pieternella Tichem', years:'1828–1862', source:'visscher' },
    { name:'Johanna Tichem', years:'1836–1901', source:'visscher' }
  ],
  'cornelis-1800': [
    { name:'Jacob Tichem', years:'1797–1861', source:'vanes' },
    { name:'Aaltje (Alida) Tichem', years:'1799–1855', source:'vanes' },
    { name:'Jan Tichum', years:'1807–1857', source:'vanes' },
    { name:'Marinus Tichem', years:'1811–1839', source:'vanes' },
    { name:'Johannis Tichem', years:'1814–1859', source:'vanes' }
  ],
  'johannis-1769': [
    { name:'Lena Tichum', years:'gedoopt 1761', source:'tychon' },
    { name:'Maatje Tichum', years:'gedoopt 1763', source:'poortvliet' },
    { name:'Adriana Tychem', years:'ca. 1766', source:'tychon' },
    { name:'Cornelis Tichom', years:'gedoopt 1773', source:'tychon' },
    { name:'Coba Tichum', years:'gedoopt 1776', source:'tychon' },
    { name:'Sara Tichum', years:'gedoopt 1777', source:'soer' },
    { name:'Johanna Tichum', years:'1782', source:'poortvliet' }
  ],
  'jacob-1740': [
    { name:'Johannes Tichum', years:'gedoopt 1723', source:'stavenisse2024' },
    { name:'Cornelis Tichum', years:'† 1769', source:'debie' },
    { name:'Sara Tijchon', years:'1731–1758', source:'debie' },
    { name:'Adriana Tiggon', years:'1731', source:'debie' },
    { name:'Jan Tijchon', years:'gedoopt 1734', source:'stavenisse2024' },
    { name:'Johannes Tijchon', years:'gedoopt 1736', source:'stavenisse2024' },
    { name:'Abraham Tijchon', years:'gedoopt 1739', source:'stavenisse2024' },
    { name:'Commertje Tijchon', years:'1742', source:'debie' },
    { name:'Commertje Tijchon', years:'1745', source:'debie' }
  ],
  'johannes-1697': [
    { name:'Klaas Tichon', years:'gedoopt 1689', source:'stavenisse2024' },
    { name:'Klaas Tichon', years:'gedoopt 1690', source:'stavenisse2024' },
    { name:'Katelijntie Tichon', years:'gedoopt 1693', source:'stavenisse2024' },
    { name:'Jakob Tichon', years:'gedoopt 1696', source:'stavenisse2024' },
    { name:'Abraham Tichon', years:'gedoopt 1698', source:'stavenisse2024' }
  ]
};
const siblingNotes = {
  'jacob-1740': 'De gepubliceerde stamboom noemt twee kinderen met de naam Commertje. Controle van hun afzonderlijke doopakten blijft gewenst.',
  'johannes-1697': 'Het doopboek noemt tweemaal een Klaas, in 1689 en 1690. Of de eerste jong overleed, is nog niet bevestigd.'
};

const partnerSources = {
  'arthur-vader': ['family'], 'jan-opa': ['family'],
  'cornelis-1897': ['philippus'], 'gerard-1868': ['slager'],
  'cornelis-1832': ['westplate'], 'cornelis-1800': ['westplate'],
  'johannis-1769': ['vanes'], 'jacob-1740': ['jacob'],
  'johannes-1697': ['soer'], 'jan-1660': ['leune', 'soer']
};

const tree = document.getElementById('family-tree');
const generations = document.getElementById('tree-generations');
const lines = document.getElementById('tree-links');
const search = document.getElementById('person-search');
const clearSearch = document.getElementById('clear-search');
const noResults = document.getElementById('no-results');
const treePeople = [...people].reverse();
let selected = { index: treePeople.length - 1, side: 'ancestor' };
const livingPeriods = {
  'arthur-heden': 'jaren 2000',
  'arthur-vader': 'jaren 1960',
  'jan-opa': 'jaren 1930'
};

function normalized(value) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
function statusLabel(status) { return status === 'tentative' ? 'Nog onzeker' : status === 'family' ? 'Familiegegevens' : 'Gereconstrueerd'; }
function timeLabel(person) {
  if (livingPeriods[person.id]) return livingPeriods[person.id];
  const year = person.dates.match(/\d{4}/)?.[0];
  return year ? `${/ca\.|mogelijk/.test(person.dates) ? 'ca. ' : ''}${year}` : 'datum onbekend';
}
function spouseName(person) {
  if (person.partner === '—' || person.partner === 'Onbekend') return null;
  return person.partner.replace(/\s*\(naamspelling te verifiëren\)/, '');
}

function makeNode(person, index, side) {
  const name = side === 'ancestor' ? person.name : spouseName(person);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `tree-node ${side}${person.status === 'tentative' && side === 'ancestor' ? ' tentative' : ''}`;
  button.dataset.index = String(index);
  button.dataset.side = side;
  button.dataset.search = normalized(`${name} ${side === 'ancestor' ? `${person.dates} ${person.place}` : ''}`);
  button.setAttribute('aria-label', `${name}, ${side === 'ancestor' ? 'Tichem-lijn' : 'partner'}, periode ${timeLabel(person)}. Bekijk profiel.`);
  const role = document.createElement('span'); role.className = 'node-role';
  role.textContent = side === 'ancestor' ? 'Tichem-lijn' : 'Partner';
  const title = document.createElement('strong'); title.textContent = name;
  const detail = document.createElement('small');
  detail.textContent = side === 'ancestor' ? person.dates : `met ${person.name}`;
  button.append(role, title, detail);
  button.addEventListener('click', () => selectNode(index, side));
  return button;
}

function makeSiblingNode(person, index, sibling, siblingIndex) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'sibling-node';
  button.dataset.index = String(index);
  button.dataset.side = 'sibling';
  button.dataset.siblingIndex = String(siblingIndex);
  button.dataset.search = normalized(`${sibling.name} ${sibling.years || ''} ${sibling.relation || ''}`);
  button.setAttribute('aria-label', `${sibling.name}, ${sibling.relation || `broer of zus van ${person.name}`}. Bekijk profiel.`);
  const name = document.createElement('strong'); name.textContent = sibling.name;
  const detail = document.createElement('small'); detail.textContent = sibling.relation || sibling.years || '';
  button.append(name, detail);
  button.addEventListener('click', () => selectNode(index, 'sibling', true, siblingIndex));
  return button;
}

function renderTree() {
  generations.replaceChildren();
  treePeople.forEach((person, index) => {
    const row = document.createElement('div'); row.className = `generation${person.status === 'tentative' ? ' tentative' : ''}`;
    const label = document.createElement('span'); label.className = 'time-label';
    label.textContent = timeLabel(person);
    const family = document.createElement('div'); family.className = 'family-unit';
    const known = siblings[person.id] || [];
    const addSiblingSide = (placement) => {
      const entries = known.map((sibling, siblingIndex) => ({ sibling, siblingIndex }))
        .filter(({ sibling }) => (sibling.placement || 'left') === placement);
      if (!entries.length) return;
      const side = document.createElement('div'); side.className = `sibling-side ${placement}`;
      const heading = document.createElement('span'); heading.className = 'sibling-heading';
      heading.textContent = entries.length === 1
        ? (entries[0].sibling.relation?.endsWith('broer') ? 'Broer' : entries[0].sibling.relation?.endsWith('zus') ? 'Zus' : 'Broer of zus')
        : 'Broers en zussen';
      side.append(heading, ...entries.map(({ sibling, siblingIndex }) => makeSiblingNode(person, index, sibling, siblingIndex)));
      family.append(side);
    };
    addSiblingSide('left');
    const couple = document.createElement('div'); couple.className = 'couple';
    couple.append(makeNode(person, index, 'ancestor'));
    if (spouseName(person)) couple.append(makeNode(person, index, 'partner'));
    else couple.classList.add('single');
    family.append(couple);
    addSiblingSide('right');
    row.append(label, family);
    generations.append(row);
  });
  requestAnimationFrame(drawConnections);
}

function setText(id, value) { document.getElementById(id).textContent = value; }
function renderSiblings(person, partner) {
  const section = document.getElementById('profile-siblings');
  section.hidden = partner;
  if (partner) return;
  const container = document.getElementById('profile-sibling-content');
  container.replaceChildren();
  const known = siblings[person.id] || [];
  if (!known.length) {
    const note = document.createElement('p');
    note.textContent = person.status === 'family'
      ? 'Geen namen bevestigd voor deze openbare pagina.'
      : 'Nog geen broer of zus met een controleerbare bron gevonden.';
    container.append(note);
    return;
  }
  const intro = document.createElement('p');
  intro.textContent = person.status === 'family' && person.id !== 'jan-opa'
    ? `${known.length} namen uit familiegegevens, in leeftijdsvolgorde.`
    : `${known.length} met naam gevonden. Dit overzicht hoeft niet volledig te zijn.`;
  if (siblingNotes[person.id]) {
    const caution = document.createElement('p');
    caution.textContent = siblingNotes[person.id];
    container.append(intro, caution);
  } else container.append(intro);
  const list = document.createElement('ul');
  known.forEach(sibling => {
    const item = document.createElement('li');
    const description = document.createElement('span');
    const name = document.createElement('strong'); name.textContent = sibling.name;
    const detail = document.createElement('small');
    detail.textContent = [sibling.years, sibling.relation].filter(Boolean).join(' · ');
    description.append(name, detail);
    const source = sources[sibling.source];
    if (source.url) {
      const link = document.createElement('a');
      link.href = source.url;
      link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = 'Bron ↗';
      link.setAttribute('aria-label', `Bron voor ${sibling.name} ${sibling.years || ''}`.trim());
      item.append(description, link);
    } else {
      const label = document.createElement('small'); label.className = 'family-source';
      label.textContent = 'Familiegegevens';
      item.append(description, label);
    }
    list.append(item);
  });
  container.append(list);
}
function renderProfile() {
  const person = treePeople[selected.index];
  const partner = selected.side === 'partner';
  const sibling = selected.side === 'sibling' ? siblings[person.id]?.[selected.siblingIndex] : null;
  const name = sibling?.name || (partner ? spouseName(person) : person.name);
  const statusType = sibling ? (sibling.source === 'family' ? 'family' : 'research')
    : partner && person.partner.includes('naamspelling') ? 'tentative' : person.status;
  setText('profile-period', sibling?.years || timeLabel(person));
  const status = document.getElementById('profile-status');
  status.textContent = statusLabel(statusType);
  status.className = `status ${statusType === 'tentative' ? 'tentative' : statusType === 'family' ? 'family' : ''}`;
  setText('profile-name', name);
  setText('profile-dates', sibling ? (sibling.years || 'Levende generatie') : partner ? 'Partner' : person.dates);
  const story = sibling
    ? sibling.source === 'family'
      ? `${name} is de ${sibling.relation.toLowerCase()} van ${person.name}. Deze informatie is door Arthur Tichem gedeeld.`
      : `De vermelde bron plaatst ${name} in hetzelfde gezin als ${person.name}. Verdere gegevens zijn hier nog niet uitgewerkt.`
    : partner
      ? person.partner.includes('naamspelling')
        ? 'Deze naam komt uit familiegegevens. De spelling van de achternaam moet nog worden bevestigd.'
        : `De bronnen bij deze familietak noemen ${name} als partner van ${person.name}. Meer gegevens zijn nog niet uitgewerkt.`
      : person.note;
  setText('profile-story', story);
  renderSiblings(person, partner || !!sibling);
  const facts = document.getElementById('profile-facts'); facts.replaceChildren();
  const factRows = sibling ? [['Broer/zus van', person.name]]
    : partner ? [['Tichem-lijn', person.name]]
      : [['Plaats',person.place],['Partner',person.partner]].filter(([,value]) => value !== '—');
  factRows.forEach(([label,value]) => {
    const row = document.createElement('div'); const dt = document.createElement('dt'); const dd = document.createElement('dd');
    dt.textContent = label; dd.textContent = value; row.append(dt,dd); facts.append(row);
  });
  const sourceList = document.getElementById('profile-source-list'); sourceList.replaceChildren();
  (sibling ? [sibling.source] : partner ? partnerSources[person.id] : person.sources).forEach(key => {
    const source = sources[key]; const li = document.createElement('li');
    if (source.url) { const link = document.createElement('a'); link.href = source.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = source.label; li.append(link); }
    else li.textContent = source.label;
    sourceList.append(li);
  });
  document.getElementById('newer-person').disabled = selected.index === treePeople.length - 1;
  document.getElementById('older-person').disabled = selected.index === 0;
}

function updateSelection() {
  generations.querySelectorAll('.tree-node, .sibling-node').forEach(node => {
    const current = Number(node.dataset.index) === selected.index && node.dataset.side === selected.side
      && (selected.side !== 'sibling' || Number(node.dataset.siblingIndex) === selected.siblingIndex);
    node.setAttribute('aria-current', current ? 'true' : 'false');
  });
  renderProfile();
}

function selectNode(index, side, scroll = true, siblingIndex = 0) {
  selected = { index, side, siblingIndex };
  updateSelection();
  if (scroll && window.matchMedia('(max-width: 900px)').matches) {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function searchTree() {
  const query = normalized(search.value.trim());
  const nodes = [...generations.querySelectorAll('.tree-node, .sibling-node')];
  const matches = nodes.filter(node => node.dataset.search.includes(query));
  nodes.forEach(node => node.classList.toggle('is-dimmed', !!query && !matches.includes(node)));
  clearSearch.hidden = !query;
  noResults.hidden = !query || matches.length > 0;
  if (query && matches.length) selectNode(Number(matches[0].dataset.index), matches[0].dataset.side, false, Number(matches[0].dataset.siblingIndex || 0));
}

function drawConnections() {
  const bounds = tree.getBoundingClientRect();
  const width = tree.clientWidth;
  const height = generations.offsetHeight;
  lines.setAttribute('viewBox', `0 0 ${width} ${height}`);
  lines.setAttribute('width', String(width));
  lines.setAttribute('height', String(height));
  lines.replaceChildren();
  const rows = [...generations.querySelectorAll('.generation')];
  const point = (element, edge) => {
    const rect = element.getBoundingClientRect();
    return { x: rect.left - bounds.left + rect.width / 2, y: (edge === 'bottom' ? rect.bottom : rect.top) - bounds.top };
  };
  const addPath = (d, uncertain = false) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('class', `tree-link${uncertain ? ' uncertain' : ''}`);
    lines.append(path);
  };
  rows.slice(0, -1).forEach((row, index) => {
    const ancestor = point(row.querySelector('.tree-node.ancestor'), 'bottom');
    const spouseElement = row.querySelector('.tree-node.partner');
    const spouse = spouseElement ? point(spouseElement, 'bottom') : null;
    const nextRow = rows[index + 1];
    const child = point(nextRow.querySelector('.tree-node.ancestor'), 'top');
    const joinY = Math.max(ancestor.y, spouse?.y ?? ancestor.y) + 22;
    const joinX = spouse ? (ancestor.x + spouse.x) / 2 : ancestor.x;
    const rowBottom = row.getBoundingClientRect().bottom - bounds.top;
    const nextTop = Math.min(child.y, ...[...nextRow.querySelectorAll('.sibling-side')]
      .map(side => side.getBoundingClientRect().top - bounds.top));
    const middleY = rowBottom + (nextTop - rowBottom) / 2;
    const uncertain = treePeople[index].status === 'tentative';
    addPath(`M ${ancestor.x} ${ancestor.y} V ${joinY}`, uncertain);
    if (spouse) {
      addPath(`M ${spouse.x} ${spouse.y} V ${joinY}`, uncertain);
      addPath(`M ${ancestor.x} ${joinY} H ${spouse.x}`, uncertain);
    }
    addPath(`M ${joinX} ${joinY} V ${middleY} H ${child.x} V ${child.y}`, uncertain);
  });
}

search.addEventListener('input', searchTree);
search.addEventListener('keydown', event => {
  if (event.key === 'Enter' && search.value.trim()) {
    event.preventDefault();
    generations.querySelector('.tree-node[aria-current="true"], .sibling-node[aria-current="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
clearSearch.addEventListener('click', () => { search.value = ''; searchTree(); search.focus(); });
document.getElementById('newer-person').addEventListener('click', () => selectNode(selected.index + 1, 'ancestor'));
document.getElementById('older-person').addEventListener('click', () => selectNode(selected.index - 1, 'ancestor'));
renderTree();
updateSelection();
new ResizeObserver(drawConnections).observe(generations);
document.fonts?.ready.then(drawConnections);
