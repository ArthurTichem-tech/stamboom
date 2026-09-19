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

const list = document.getElementById('person-list');
const search = document.getElementById('person-search');
const clearSearch = document.getElementById('clear-search');
const noResults = document.getElementById('no-results');
let selectedId = people[0].id;
let visiblePeople = people;

function normalized(value) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
function statusLabel(status) { return status === 'tentative' ? 'Nog onzeker' : status === 'family' ? 'Familiegegevens' : 'Gereconstrueerd'; }

function renderList() {
  list.replaceChildren();
  noResults.hidden = visiblePeople.length !== 0;
  visiblePeople.forEach(person => {
    const index = people.indexOf(person);
    const li = document.createElement('li');
    if (person.status === 'tentative') li.className = 'tentative';
    const button = document.createElement('button');
    button.className = 'person-card';
    button.type = 'button';
    button.setAttribute('aria-current', person.id === selectedId ? 'true' : 'false');
    button.setAttribute('aria-label', `Generatie ${index + 1}: ${person.name}, ${person.dates}. Bekijk profiel.`);
    const number = document.createElement('span'); number.className = 'person-index'; number.textContent = String(index + 1).padStart(2,'0');
    const summary = document.createElement('span'); summary.className = 'person-summary';
    const name = document.createElement('strong'); name.textContent = person.name;
    const meta = document.createElement('small'); meta.textContent = `${person.dates} · ${person.place}`;
    summary.append(name,meta);
    const arrow = document.createElement('span'); arrow.className = 'person-arrow'; arrow.setAttribute('aria-hidden','true'); arrow.textContent = '↗';
    button.append(number,summary,arrow);
    button.addEventListener('click', () => selectPerson(person.id));
    li.append(button); list.append(li);
  });
}

function setText(id, value) { document.getElementById(id).textContent = value; }
function renderProfile() {
  const person = people.find(item => item.id === selectedId);
  if (!person) return;
  const index = people.indexOf(person);
  setText('profile-generation', `Generatie ${String(index + 1).padStart(2,'0')} / ${people.length}`);
  const status = document.getElementById('profile-status');
  status.textContent = statusLabel(person.status);
  status.className = `status ${person.status === 'tentative' ? 'tentative' : person.status === 'family' ? 'family' : ''}`;
  setText('profile-name', person.name);
  setText('profile-dates', person.dates);
  setText('profile-story', person.note);
  const facts = document.getElementById('profile-facts'); facts.replaceChildren();
  [['Plaats',person.place],['Partner',person.partner]].filter(([,value]) => value !== '—').forEach(([label,value]) => {
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
  const position = visiblePeople.findIndex(item => item.id === selectedId);
  document.getElementById('newer-person').disabled = position <= 0;
  document.getElementById('older-person').disabled = position < 0 || position === visiblePeople.length - 1;
}

function selectPerson(id) {
  selectedId = id;
  renderList(); renderProfile();
  if (window.matchMedia('(max-width: 900px)').matches) document.getElementById('profile').scrollIntoView({behavior:'smooth',block:'start'});
}

function filterPeople() {
  const query = normalized(search.value.trim());
  visiblePeople = query ? people.filter(person => normalized(`${person.name} ${person.place} ${person.dates} ${person.partner}`).includes(query)) : people;
  clearSearch.hidden = !query;
  if (visiblePeople.length && !visiblePeople.some(item => item.id === selectedId)) selectedId = visiblePeople[0].id;
  renderList(); renderProfile();
}

search.addEventListener('input', filterPeople);
clearSearch.addEventListener('click', () => { search.value = ''; filterPeople(); search.focus(); });
document.getElementById('newer-person').addEventListener('click', () => { const position = visiblePeople.findIndex(item => item.id === selectedId); if (position > 0) selectPerson(visiblePeople[position - 1].id); });
document.getElementById('older-person').addEventListener('click', () => { const position = visiblePeople.findIndex(item => item.id === selectedId); if (position >= 0 && position < visiblePeople.length - 1) selectPerson(visiblePeople[position + 1].id); });
renderList(); renderProfile();
