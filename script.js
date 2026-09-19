const sources = {
  family: { label: 'Familiegegevens, door Arthur Tichem gedeeld', url: null },
  philippus: { label: 'Philippuslandt, overzicht van overleden inwoners en familieverbanden', url: 'https://philippuslandt.nl/wp-content/uploads/2025/01/overleden-inwoners-en-oud-inwoners-en-verwanten-uit-Sint-Philipsland-van-1940-tot-en-met-2024.pdf' },
  westplate: { label: 'Genealogie Westplate, Cornelis Tichem (1832–1893)', url: 'https://www.genealogieonline.nl/genealogie-westplate/I1257.php' },
  slager: { label: 'Genealogie Westplate, Neeltje Maria Slager en kinderen', url: 'https://www.genealogieonline.nl/genealogie-westplate/I10293.php' },
  vanes: { label: 'Stamboom Bakker, Pieternella van Es en kinderen', url: 'https://www.genealogieonline.nl/bakker-stamboom/I500156.php' },
  jacob: { label: 'Genealogie Post-Oost, afstamming van Johannis Tichem', url: 'https://www.genealogieonline.nl/genealogie-post-oost/I55735.php' },
  stavenisse: { label: 'NGV Zeeland, klapper op doopboek Stavenisse (1616–1810)', url: 'https://www.ngv-afdelingen.nl/zld/wp-content/uploads/2023/04/Stavenisse_Klapper_DB_1616-1810_v001.pdf' },
  soer: { label: 'NGV Rotterdam, Kwartierstaat Sabrina Soer', url: 'https://ngv-rotterdam.nl/wp-content/uploads/2024/04/kwartierstaat-soer.pdf' },
  leune: { label: 'Kwartierstaat J.M.G. Leune, met archiefverwijzingen bij Jan Klaesse Tichon', url: 'https://www.hanleune.nl/images/Bestanden/Steenbergen/Genealogie%20van%20Steenbergenaren/Kwartierstaat%20van%20J.M.G.%20Leune.pdf' }
};

const people = [
  { id:'arthur-heden', name:'Arthur Tichem', dates:'Levende generatie', place:'Apeldoorn', partner:'—', status:'family', note:'Dit archief begint bij Arthur. Van levende familieleden staan bewust geen geboortedata of privégegevens op deze openbare pagina.', sources:['family'] },
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

const tree = document.getElementById('family-tree');
const generations = document.getElementById('tree-generations');
const lines = document.getElementById('tree-links');
const search = document.getElementById('person-search');
const clearSearch = document.getElementById('clear-search');
const noResults = document.getElementById('no-results');
const treePeople = [...people].reverse();
let selected = { index: treePeople.length - 1, side: 'ancestor' };

function normalized(value) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
function statusLabel(status) { return status === 'tentative' ? 'Nog onzeker' : status === 'family' ? 'Familiegegevens' : 'Gereconstrueerd'; }
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
  button.dataset.search = normalized(`${name} ${side === 'ancestor' ? person.dates + ' ' + person.place : ''}`);
  button.setAttribute('aria-label', `${name}, ${side === 'ancestor' ? 'voorouder' : 'partner'} in generatie ${people.length - index}. Bekijk profiel.`);
  const role = document.createElement('span'); role.className = 'node-role';
  role.textContent = side === 'ancestor' ? 'TICHEM-LIJN' : 'PARTNER';
  const title = document.createElement('strong'); title.textContent = name;
  const detail = document.createElement('small');
  detail.textContent = side === 'ancestor' ? person.dates : `met ${person.name}`;
  button.append(role, title, detail);
  button.addEventListener('click', () => selectNode(index, side));
  return button;
}

function renderTree() {
  generations.replaceChildren();
  treePeople.forEach((person, index) => {
    const row = document.createElement('div'); row.className = 'generation';
    const label = document.createElement('span'); label.className = 'generation-label';
    label.textContent = `${String(people.length - index).padStart(2,'0')} / ${people.length}`;
    const couple = document.createElement('div'); couple.className = 'couple';
    couple.append(makeNode(person, index, 'ancestor'));
    if (spouseName(person)) couple.append(makeNode(person, index, 'partner'));
    else couple.classList.add('single');
    row.append(label, couple);
    generations.append(row);
  });
  requestAnimationFrame(drawConnections);
}

function setText(id, value) { document.getElementById(id).textContent = value; }
function renderProfile() {
  const person = treePeople[selected.index];
  const partner = selected.side === 'partner';
  const name = partner ? spouseName(person) : person.name;
  const statusType = partner && person.partner.includes('naamspelling') ? 'tentative' : person.status;
  setText('profile-generation', `Generatie ${String(people.length - selected.index).padStart(2,'0')} / ${people.length}`);
  const status = document.getElementById('profile-status');
  status.textContent = statusLabel(statusType);
  status.className = `status ${statusType === 'tentative' ? 'tentative' : statusType === 'family' ? 'family' : ''}`;
  setText('profile-name', name);
  setText('profile-dates', partner ? 'Partner in deze generatie' : person.dates);
  setText('profile-story', partner
    ? person.partner.includes('naamspelling')
      ? 'Deze naam komt uit familiegegevens. De spelling van de achternaam moet nog worden bevestigd.'
      : `De bronnen bij deze generatie noemen ${name} als partner van ${person.name}. Meer gegevens zijn nog niet uitgewerkt.`
    : person.note);
  const facts = document.getElementById('profile-facts'); facts.replaceChildren();
  const factRows = partner ? [['Tichem-lijn', person.name]] : [['Plaats',person.place],['Partner',person.partner]].filter(([,value]) => value !== '—');
  factRows.forEach(([label,value]) => {
    const row = document.createElement('div'); const dt = document.createElement('dt'); const dd = document.createElement('dd');
    dt.textContent = label; dd.textContent = value; row.append(dt,dd); facts.append(row);
  });
  const sourceList = document.getElementById('profile-source-list'); sourceList.replaceChildren();
  person.sources.forEach(key => {
    const source = sources[key]; const li = document.createElement('li');
    if (source.url) { const link = document.createElement('a'); link.href = source.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = source.label; li.append(link); }
    else li.textContent = source.label;
    sourceList.append(li);
  });
  document.getElementById('newer-person').disabled = selected.index === treePeople.length - 1;
  document.getElementById('older-person').disabled = selected.index === 0;
}

function updateSelection() {
  generations.querySelectorAll('.tree-node').forEach(node => {
    node.setAttribute('aria-current', Number(node.dataset.index) === selected.index && node.dataset.side === selected.side ? 'true' : 'false');
  });
  renderProfile();
}

function selectNode(index, side, scroll = true) {
  selected = { index, side };
  updateSelection();
  if (scroll && window.matchMedia('(max-width: 900px)').matches) {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function searchTree() {
  const query = normalized(search.value.trim());
  const nodes = [...generations.querySelectorAll('.tree-node')];
  const matches = nodes.filter(node => node.dataset.search.includes(query));
  nodes.forEach(node => node.classList.toggle('is-dimmed', !!query && !matches.includes(node)));
  clearSearch.hidden = !query;
  noResults.hidden = !query || matches.length > 0;
  if (query && matches.length) selectNode(Number(matches[0].dataset.index), matches[0].dataset.side, false);
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
    const child = point(rows[index + 1].querySelector('.tree-node.ancestor'), 'top');
    const joinY = Math.max(ancestor.y, spouse?.y ?? ancestor.y) + 22;
    const joinX = spouse ? (ancestor.x + spouse.x) / 2 : ancestor.x;
    const middleY = joinY + (child.y - joinY) / 2;
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
    generations.querySelector('.tree-node[aria-current="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
clearSearch.addEventListener('click', () => { search.value = ''; searchTree(); search.focus(); });
document.getElementById('newer-person').addEventListener('click', () => selectNode(selected.index + 1, 'ancestor'));
document.getElementById('older-person').addEventListener('click', () => selectNode(selected.index - 1, 'ancestor'));
renderTree();
updateSelection();
new ResizeObserver(drawConnections).observe(generations);
document.fonts?.ready.then(drawConnections);
