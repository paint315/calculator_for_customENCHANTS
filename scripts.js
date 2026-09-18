// ============================================================
//  ТАБЛИЦА МНОЖИТЕЛЕЙ И МАКС. УРОВНЕЙ
// ============================================================
const ENCHANT_DATA = {
  'Protection':        { multItem: 1, multBook: 1, maxLevel: 4 },
  'Fire Protection':   { multItem: 2, multBook: 1, maxLevel: 4 },
  'Feather Falling':   { multItem: 2, multBook: 1, maxLevel: 4 },
  'Blast Protection':  { multItem: 4, multBook: 2, maxLevel: 4 },
  'Projectile Protection': { multItem: 2, multBook: 1, maxLevel: 4 },
  'Thorns':            { multItem: 8, multBook: 4, maxLevel: 3 },
  'Respiration':       { multItem: 4, multBook: 2, maxLevel: 3 },
  'Depth Strider':     { multItem: 4, multBook: 2, maxLevel: 3 },
  'Aqua Affinity':     { multItem: 4, multBook: 2, maxLevel: 1 },
  'Sharpness':         { multItem: 1, multBook: 1, maxLevel: 5 },
  'Smite':             { multItem: 2, multBook: 1, maxLevel: 5 },
  'Bane of Arthropods':{ multItem: 2, multBook: 1, maxLevel: 5 },
  'Knockback':         { multItem: 2, multBook: 1, maxLevel: 2 },
  'Fire Aspect':       { multItem: 4, multBook: 2, maxLevel: 2 },
  'Looting':           { multItem: 4, multBook: 2, maxLevel: 3 },
  'Efficiency':        { multItem: 1, multBook: 1, maxLevel: 5 },
  'Silk Touch':        { multItem: 8, multBook: 4, maxLevel: 1 },
  'Unbreaking':        { multItem: 2, multBook: 1, maxLevel: 3 },
  'Fortune':           { multItem: 4, multBook: 2, maxLevel: 3 },
  'Power':             { multItem: 1, multBook: 1, maxLevel: 5 },
  'Punch':             { multItem: 4, multBook: 2, maxLevel: 2 },
  'Flame':             { multItem: 4, multBook: 2, maxLevel: 1 },
  'Infinity':          { multItem: 8, multBook: 4, maxLevel: 1 },
  'Luck of the Sea':   { multItem: 4, multBook: 2, maxLevel: 3 },
  'Lure':              { multItem: 4, multBook: 2, maxLevel: 3 },
  'Frost Walker':      { multItem: 4, multBook: 2, maxLevel: 2 },
  'Mending':           { multItem: 4, multBook: 2, maxLevel: 1 },
  'Curse of Binding':  { multItem: 8, multBook: 4, maxLevel: 1 },
  'Curse of Vanishing':{ multItem: 8, multBook: 4, maxLevel: 1 },
  'Impaling':          { multItem: 4, multBook: 2, maxLevel: 5 },
  'Riptide':           { multItem: 4, multBook: 2, maxLevel: 3 },
  'Loyalty':           { multItem: 1, multBook: 1, maxLevel: 3 },
  'Channeling':        { multItem: 8, multBook: 4, maxLevel: 1 },
  'Multishot':         { multItem: 4, multBook: 2, maxLevel: 1 },
  'Piercing':          { multItem: 1, multBook: 1, maxLevel: 4 },
  'Quick Charge':      { multItem: 2, multBook: 1, maxLevel: 3 },
  'Soul Speed':        { multItem: 8, multBook: 4, maxLevel: 3 },
  'Swift Sneak':       { multItem: 8, multBook: 4, maxLevel: 3 },
  'Wind Burst':        { multItem: 4, multBook: 2, maxLevel: 3 },
  'Density':           { multItem: 2, multBook: 1, maxLevel: 5 },
  'Breach':            { multItem: 4, multBook: 2, maxLevel: 4 },
  'Lunge':             { multItem: 2, multBook: 1, maxLevel: 3 },
  'Sweeping Edge':     { multItem: 4, multBook: 2, maxLevel: 3 },
};

// ============================================================
//  ПРЕДМЕТЫ И ИХ ЧАРЫ
// ============================================================
const ITEM_ENCHANTS = {
  'Меч': ['Sharpness', 'Smite', 'Bane of Arthropods', 'Knockback', 'Fire Aspect',
          'Looting', 'Sweeping Edge', 'Unbreaking', 'Mending', 'Curse of Vanishing'],
  'Кирка': ['Efficiency', 'Fortune', 'Silk Touch', 'Unbreaking', 'Mending',
            'Curse of Vanishing'],
  'Топор': ['Efficiency', 'Fortune', 'Silk Touch', 'Sharpness', 'Smite',
            'Bane of Arthropods', 'Unbreaking', 'Mending', 'Curse of Vanishing'],
  'Лопата': ['Efficiency', 'Fortune', 'Silk Touch', 'Unbreaking', 'Mending',
             'Curse of Vanishing'],
  'Мотыга': ['Efficiency', 'Fortune', 'Silk Touch', 'Unbreaking', 'Mending',
             'Curse of Vanishing'],
  'Шлем': ['Protection', 'Fire Protection', 'Blast Protection',
           'Projectile Protection', 'Respiration', 'Aqua Affinity', 'Thorns',
           'Unbreaking', 'Mending', 'Curse of Vanishing', 'Curse of Binding'],
  'Нагрудник': ['Protection', 'Fire Protection', 'Blast Protection',
                'Projectile Protection', 'Thorns', 'Unbreaking', 'Mending',
                'Curse of Vanishing', 'Curse of Binding'],
  'Штаны': ['Protection', 'Fire Protection', 'Blast Protection',
            'Projectile Protection', 'Thorns', 'Unbreaking', 'Mending',
            'Curse of Vanishing', 'Curse of Binding'],
  'Ботинки': ['Protection', 'Fire Protection', 'Blast Protection',
              'Projectile Protection', 'Feather Falling', 'Depth Strider',
              'Frost Walker', 'Soul Speed', 'Swift Sneak', 'Thorns',
              'Unbreaking', 'Mending', 'Curse of Vanishing', 'Curse of Binding'],
  'Лук': ['Power', 'Punch', 'Flame', 'Infinity', 'Unbreaking', 'Mending',
          'Curse of Vanishing'],
  'Арбалет': ['Quick Charge', 'Multishot', 'Piercing', 'Unbreaking', 'Mending',
              'Curse of Vanishing'],
  'Трезубец': ['Loyalty', 'Impaling', 'Riptide', 'Channeling', 'Unbreaking',
               'Mending', 'Curse of Vanishing'],
  'Удочка': ['Luck of the Sea', 'Lure', 'Unbreaking', 'Mending',
             'Curse of Vanishing'],
  'Булава': ['Density', 'Breach', 'Wind Burst', 'Smite', 'Bane of Arthropods',
             'Fire Aspect', 'Unbreaking', 'Mending', 'Curse of Vanishing'],
  'Ножницы': ['Efficiency', 'Silk Touch', 'Unbreaking', 'Mending',
              'Curse of Vanishing'],
};

// ============================================================
//  ГРУППЫ НЕСОВМЕСТИМОСТИ
// ============================================================
const INCOMPATIBLE_GROUPS = {
  'protection': ['Protection', 'Fire Protection', 'Blast Protection', 'Projectile Protection'],
  'damage':     ['Sharpness', 'Smite', 'Bane of Arthropods'],
  'mining':     ['Silk Touch', 'Fortune'],
  'trident':    ['Riptide', 'Loyalty', 'Channeling'],
  'boots':      ['Depth Strider', 'Frost Walker'],
  'crossbow':   ['Multishot', 'Piercing'],
};

const ENCHANT_TO_GROUP = {};
for (const [group, list] of Object.entries(INCOMPATIBLE_GROUPS)){
  for (const name of list) ENCHANT_TO_GROUP[name] = group;
}

// ============================================================
//  СОСТОЯНИЕ
// ============================================================
let currentMode = 'novice';
let selectedItem = null;
let selectedBooks = [];
let extraOptions = { repair: false, rename: false, targetN: 0 };

// ============================================================
//  УТИЛИТЫ
// ============================================================
function penalty(n){ return Math.pow(2, n) - 1; }

function getMultiplier(name, isBook){
  const data = ENCHANT_DATA[name];
  if (data) return isBook ? data.multBook : data.multItem;
  return isBook ? 1 : 2;
}

function getMaxLevel(name){
  const data = ENCHANT_DATA[name];
  return data ? data.maxLevel : 99;
}

function getEffectiveMax(book){
  if (book.maxLevel != null && book.maxLevel > 0) return book.maxLevel;
  return getMaxLevel(book.name) || 99;
}

function enchantCost(e, isBookContext){
  const mult = (e.multiplier != null && e.multiplier > 0)
    ? e.multiplier
    : getMultiplier(e.name, isBookContext);
  return e.level * mult;
}

function itemSum(item){
  return item.enchants.reduce((s, e) => s + enchantCost(e, item.isBook), 0);
}

function itemLabel(item){
  if (!item.enchants.length) return 'Пустой предмет';
  return item.enchants.map(e => `${escapeHtml(e.name)} ${e.level}`).join(' + ');
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}

function isIncompatibleWithSelected(name, customGroup){
  const g = (customGroup && customGroup.trim()) || ENCHANT_TO_GROUP[name];
  if (!g) return false;
  return selectedBooks.some(b => {
    const bGroup = (b.group && b.group.trim()) || ENCHANT_TO_GROUP[b.name];
    return bGroup === g && b.name !== name;
  });
}

// ============================================================
//  ЛОГИКА СЛИЯНИЯ
// ============================================================
function isIncompatible(e, targetEnchants){
  if (!e.group) return false;
  return targetEnchants.some(t => t.group === e.group && t.name !== e.name);
}

function mergeItems(target, sacrifice, isFinal){
  const transferred = [];
  const discarded = [];

  for (const e of sacrifice.enchants){
    if (isIncompatible(e, target.enchants)) discarded.push(e);
    else transferred.push(e);
  }

  let transferSum = 0;
  const transferDetails = [];

  for (const e of transferred){
    const existing = target.enchants.find(x => x.name === e.name);
    const maxLvl = getEffectiveMax(e);
    let finalLevel;

    if (existing){
      if (e.level > existing.level) finalLevel = e.level;
      else if (e.level === existing.level && existing.level < maxLvl) finalLevel = existing.level + 1;
      else finalLevel = existing.level;
    } else {
      finalLevel = e.level;
    }

    const mult = (e.multiplier != null && e.multiplier > 0)
      ? e.multiplier
      : getMultiplier(e.name, sacrifice.isBook);
    const cost = finalLevel * mult;
    transferSum += cost;
    transferDetails.push({ name: e.name, level: finalLevel, cost });
  }

  const targetPen    = penalty(target.n);
  const sacPen       = penalty(sacrifice.n);
  const incompatCost = discarded.length;

  let extraCost = 0;
  const extraDetails = [];
  if (isFinal){
    if (extraOptions.repair){ extraCost += 2; extraDetails.push('ремонт (+2)'); }
    if (extraOptions.rename){ extraCost += 1; extraDetails.push('переименование (+1)'); }
  }

  const cost = transferSum + targetPen + sacPen + incompatCost + extraCost;

  const newEnchants = target.enchants.map(e => ({ ...e }));
  for (const e of transferred){
    const existing = newEnchants.find(x => x.name === e.name);
    const maxLvl = getEffectiveMax(e);
    if (existing){
      if (existing.level === e.level && existing.level < maxLvl) existing.level += 1;
      else if (e.level > existing.level) existing.level = e.level;
    } else {
      newEnchants.push({ ...e });
    }
  }

  const result = {
    enchants: newEnchants,
    n: Math.max(target.n, sacrifice.n) + 1,
    isBook: target.isBook,
  };

  return {
    target, sacrifice, transferred, discarded,
    targetPen, sacPen, transferSum, incompatCost, extraCost, extraDetails,
    cost, result, isFinal: !!isFinal, transferDetails,
  };
}

function calculateSteps(enchantList){
  if (!enchantList.length) return [];

  const items = enchantList.map(e => ({
    enchants: [{ ...e }], n: 0, isBook: e.isBook,
  }));

  const steps = [];
  let current = items;

  while (current.length > 1){
    current.sort((a, b) => itemSum(a) - itemSum(b));
    const next = [];
    for (let i = 0; i + 1 < current.length; i += 2){
      const sacrifice = current[i];
      const target    = current[i + 1];
      const step = mergeItems(target, sacrifice, false);
      steps.push(step);
      next.push(step.result);
    }
    if (current.length % 2 === 1) next.push(current[current.length - 1]);
    current = next;
  }

  const finalBook = current[0];
  const cleanItem = { enchants: [], n: extraOptions.targetN, isBook: false };
  const finalStep = mergeItems(cleanItem, finalBook, true);
  steps.push(finalStep);

  return steps;
}

// ============================================================
//  РЕНДЕР
// ============================================================
function renderItemGrid(){
  const grid = document.getElementById('itemGrid');
  grid.innerHTML = '';
  Object.keys(ITEM_ENCHANTS).forEach(item => {
    const btn = document.createElement('button');
    btn.textContent = item;
    if (selectedItem === item) btn.classList.add('selected');
    btn.addEventListener('click', () => {
      selectedItem = item;
      renderItemGrid();
      renderEnchantGrid();
      document.getElementById('enchantPanel').style.display = 'block';
      document.getElementById('enchantHint').style.display = 'block';
    });
    grid.appendChild(btn);
  });
}

function renderEnchantGrid(){
  const grid = document.getElementById('enchantGrid');
  grid.innerHTML = '';
  if (!selectedItem) return;
  const enchants = ITEM_ENCHANTS[selectedItem] || [];

  enchants.forEach(name => {
    const btn = document.createElement('button');
    const selectedBook = selectedBooks.find(b => b.name === name);
    const maxLvl = selectedBook ? getEffectiveMax(selectedBook) : getMaxLevel(name);
    const levelBadge = selectedBook ? ` (${selectedBook.level}/${maxLvl})` : '';
    btn.textContent = name + levelBadge;

    const isSelected = !!selectedBook;
    const blocked = isIncompatibleWithSelected(name);

    if (isSelected) btn.classList.add('selected');

    if (blocked && !isSelected){
      btn.disabled = true;
      btn.classList.add('disabled');
      btn.title = 'Несовместимо с уже выбранными чарами';
    } else {
      btn.addEventListener('click', () => addBookFromGrid(name));
    }
    grid.appendChild(btn);
  });
}

function addBookFromGrid(name){
  const existing = selectedBooks.find(b => b.name === name);
  if (existing){
    const maxLvl = getEffectiveMax(existing);
    if (existing.level < maxLvl) existing.level++;
  } else {
    selectedBooks.push({
      name, level: 1, multiplier: null, isBook: true,
      group: ENCHANT_TO_GROUP[name] || '',
      maxLevel: null, custom: false,
    });
  }
  renderSelectedList();
  renderEnchantGrid();
  updateConflictWarning();
  document.getElementById('selectedPanel').style.display = 'block';
}

function addCustomEnchant(){
  const name = document.getElementById('customName').value.trim();
  if (!name){ alert('Введите название чара'); return; }

  const level    = Math.max(1, +document.getElementById('customLevel').value || 1);
  const multVal  = document.getElementById('customMult').value;
  const maxVal   = document.getElementById('customMax').value;
  const groupVal = document.getElementById('customGroup').value.trim();

  if (isIncompatibleWithSelected(name, groupVal)){
    alert(`Чар «${name}» несовместим с уже выбранными чарами из той же группы.`);
    return;
  }

  const existing = selectedBooks.find(b => b.name === name);
  if (existing){
    const maxLvl = getEffectiveMax(existing);
    if (existing.level < maxLvl) existing.level++;
  } else {
    selectedBooks.push({
      name, level,
      multiplier: multVal ? +multVal : null,
      isBook: document.getElementById('customIsBook').checked,
      group: groupVal || ENCHANT_TO_GROUP[name] || '',
      maxLevel: maxVal ? +maxVal : null,
      custom: true,
    });
  }

  document.getElementById('customName').value = '';
  document.getElementById('customLevel').value = '1';
  document.getElementById('customMult').value = '';
  document.getElementById('customMax').value = '';
  document.getElementById('customGroup').value = '';
  document.getElementById('customIsBook').checked = true;

  renderSelectedList();
  renderEnchantGrid();
  updateConflictWarning();
  document.getElementById('selectedPanel').style.display = 'block';
}

function updateConflictWarning(){
  const anyConflict = selectedBooks.some((b, i) => {
    const g = (b.group && b.group.trim()) || ENCHANT_TO_GROUP[b.name];
    if (!g) return false;
    return selectedBooks.some((other, j) => {
      if (i === j) return false;
      const otherG = (other.group && other.group.trim()) || ENCHANT_TO_GROUP[other.name];
      return otherG === g;
    });
  });
  document.getElementById('conflictWarning').style.display = anyConflict ? 'block' : 'none';
}

function renderSelectedList(){
  const list = document.getElementById('selectedList');
  list.innerHTML = '';

  if (!selectedBooks.length){
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:15px">Пока ничего не выбрано.</p>';
    return;
  }

  if (currentMode === 'novice'){
    selectedBooks.forEach((book, i) => {
      const div = document.createElement('div');
      div.className = 'book-row';
      const maxLvl = getEffectiveMax(book);
      div.innerHTML = `
        <span>
          <b>${escapeHtml(book.name)}</b>
          ${book.custom ? '<span style="color:var(--accent);font-size:11px"> [кастом]</span>' : ''}
          <span style="color:var(--text-muted);font-size:12px">(макс. ${maxLvl})</span>
        </span>
        <input type="number" value="${book.level}" min="1" max="${maxLvl}" data-idx="${i}" data-field="level">
        <span style="color:var(--text-muted);font-size:12px">ур.</span>
        <button data-action="remove" data-idx="${i}">✕</button>
      `;
      list.appendChild(div);
    });

    list.querySelectorAll('input[data-field="level"]').forEach(inp => {
      inp.addEventListener('input', e => {
        const idx = +e.target.dataset.idx;
        const maxLvl = getEffectiveMax(selectedBooks[idx]);
        let val = +e.target.value;
        if (isNaN(val)) return;
        if (val > maxLvl){ val = maxLvl; e.target.value = val; }
        if (val < 1) val = 1;
        selectedBooks[idx].level = val;
        renderEnchantGrid();
      });
      inp.addEventListener('blur', e => {
        const idx = +e.target.dataset.idx;
        const maxLvl = getEffectiveMax(selectedBooks[idx]);
        let val = +e.target.value || 1;
        val = Math.max(1, Math.min(maxLvl, val));
        e.target.value = val;
        selectedBooks[idx].level = val;
        renderEnchantGrid();
      });
    });
  } else {
    const header = document.createElement('div');
    header.className = 'enchant-row header-row';
    header.innerHTML = `<div>Название</div><div>Ур.</div><div>Множ.</div>
      <div>Источник</div><div>Макс.</div><div>Группа</div><div></div>`;
    list.appendChild(header);

    selectedBooks.forEach((book, i) => {
      const div = document.createElement('div');
      div.className = 'enchant-row';
      const autoMax = getMaxLevel(book.name) || 99;
      const maxDisplay = book.maxLevel != null ? book.maxLevel : autoMax;
      div.innerHTML = `
        <input type="text" value="${escapeHtml(book.name)}" data-idx="${i}" data-field="name">
        <input type="number" value="${book.level}" min="1" data-idx="${i}" data-field="level">
        <input type="number" value="${book.multiplier != null ? book.multiplier : ''}" placeholder="авто" min="1" data-idx="${i}" data-field="multiplier">
        <label><input type="checkbox" ${book.isBook ? 'checked' : ''} data-idx="${i}" data-field="isBook"> Книга</label>
        <input type="number" value="${maxDisplay}" min="1" data-idx="${i}" data-field="maxLevel">
        <input type="text" value="${escapeHtml(book.group || '')}" data-idx="${i}" data-field="group">
        <button class="danger" data-idx="${i}" data-action="remove">✕</button>
      `;
      list.appendChild(div);
    });

    list.querySelectorAll('input').forEach(inp => {
      inp.addEventListener('input', e => {
        const idx = +e.target.dataset.idx;
        const field = e.target.dataset.field;
        if (field === 'isBook') selectedBooks[idx][field] = e.target.checked;
        else if (field === 'level' || field === 'multiplier' || field === 'maxLevel')
          selectedBooks[idx][field] = e.target.value === '' ? null : (+e.target.value || 0);
        else selectedBooks[idx][field] = e.target.value;

        if (field === 'name' || field === 'group'){
          checkRowConflict(idx, e.target);
          updateConflictWarning();
          renderEnchantGrid();
        }
      });
    });
  }

  list.querySelectorAll('button[data-action="remove"]').forEach(btn => {
    btn.addEventListener('click', e => {
      selectedBooks.splice(+e.target.dataset.idx, 1);
      renderSelectedList();
      renderEnchantGrid();
      updateConflictWarning();
      if (!selectedBooks.length){
        document.getElementById('selectedPanel').style.display = 'none';
      }
    });
  });
}

function checkRowConflict(idx, inputEl){
  const book = selectedBooks[idx];
  const g = (book.group && book.group.trim()) || ENCHANT_TO_GROUP[book.name];
  if (!g){ inputEl.classList.remove('conflict'); return; }
  const hasConflict = selectedBooks.some((other, j) => {
    if (idx === j) return false;
    const otherG = (other.group && other.group.trim()) || ENCHANT_TO_GROUP[other.name];
    return otherG === g;
  });
  inputEl.classList.toggle('conflict', hasConflict);
}

function switchMode(mode){
  if (mode !== currentMode){
    selectedBooks = [];
    document.getElementById('selectedPanel').style.display = 'none';
    document.getElementById('results').style.display = 'none';
  }
  currentMode = mode;
  document.getElementById('modeNovice').classList.toggle('active', mode === 'novice');
  document.getElementById('modeExpert').classList.toggle('active', mode === 'expert');
  document.getElementById('customPanel').style.display = mode === 'expert' ? 'block' : 'none';
  renderSelectedList();
  renderEnchantGrid();
  updateConflictWarning();
}

function renderResults(steps){
  const container = document.getElementById('resultContent');
  container.innerHTML = '';

  steps.forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'step';
    const title = step.isFinal
      ? `Шаг ${i + 1} — Наложение на предмет`
      : `Шаг ${i + 1} — Слияние`;

    let html = `<h3>${title}</h3>`;
    html += `<div class="row">🎯 Цель: <b>${itemLabel(step.target)}</b> ` +
            `<span style="color:var(--text-muted)">(n=${step.target.n}, штраф=${step.targetPen})</span></div>`;
    html += `<div class="row">📖 Жертва: <b>${itemLabel(step.sacrifice)}</b> ` +
            `<span style="color:var(--text-muted)">(n=${step.sacrifice.n}, штраф=${step.sacPen})</span></div>`;

    html += `<div class="formula">`;
    html += `Стоимость чар жертвы: <span style="color:var(--teal)">${step.transferSum}</span>`;
    if (step.transferDetails.length){
      html += `<br><span style="font-size:11px;color:var(--text-muted)">`;
      html += step.transferDetails.map(d =>
        `${escapeHtml(d.name)} → ур.${d.level} = ${d.cost}`
      ).join('<br>');
      html += `</span>`;
    }
    html += `<br>Штраф цели: <span style="color:var(--danger)">${step.targetPen}</span>`;
    html += ` + штраф жертвы: <span style="color:var(--danger)">${step.sacPen}</span>`;
    if (step.incompatCost > 0)
      html += ` + несовместимость: <span style="color:var(--accent)">${step.incompatCost}</span>`;
    if (step.extraCost > 0)
      html += ` + ${step.extraDetails.join(' + ')}: <span style="color:var(--accent)">${step.extraCost}</span>`;
    html += `<br>ИТОГО: <b>${step.cost}</b></div>`;

    if (step.discarded.length){
      html += `<div class="discarded">⚠️ Отброшено: ` +
              `${step.discarded.map(e => escapeHtml(e.name)).join(', ')}</div>`;
    }

    html += `<div class="result-row">✅ Результат: <b>${itemLabel(step.result)}</b> ` +
            `<span style="color:var(--text-muted)">(n=${step.result.n})</span></div>`;
    div.innerHTML = html;
    container.appendChild(div);
  });

  const finalStep       = steps[steps.length - 1];
  const finalCost       = finalStep.cost;
  const totalCost       = steps.reduce((s, st) => s + st.cost, 0);
  const anyTooExpensive = steps.some(st => st.cost > 39);

  const finalItem    = finalStep.result;
  const finalN       = finalItem.n;
  const finalPenalty = penalty(finalN);

  const totalDiv = document.createElement('div');
  totalDiv.className = 'total ' + (anyTooExpensive ? 'too-expensive' : 'ok');
  totalDiv.textContent = anyTooExpensive
    ? `Финальная стоимость: ${finalCost} ур. — Слишком дорого!`
    : `Финальная стоимость: ${finalCost} уровней`;
  container.appendChild(totalDiv);

  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.innerHTML =
    `Общий расход опыта: <b>${totalCost}</b> уровней<br>` +
    `Операций: <b>${steps.length}</b><br>` +
    (anyTooExpensive
      ? `<span style="color:var(--danger)">⚠️ Некоторые шаги превышают 39 уровней — в выживании невозможно!</span>`
      : `<span style="color:var(--ok)">✓ Все шаги в пределах 39 уровней.</span>`) +
    `<div class="penalty-line">
       🛠️ Итоговый штраф предмета: n = <b>${finalN}</b> →
       штраф при следующем использовании = <b>${finalPenalty}</b>
     </div>`;
  container.appendChild(summary);

  document.getElementById('results').style.display = 'block';
  document.getElementById('results').scrollIntoView({ behavior:'smooth' });
}

// ============================================================
//  СОБЫТИЯ
// ============================================================
document.getElementById('modeNovice').addEventListener('click', () => switchMode('novice'));
document.getElementById('modeExpert').addEventListener('click', () => switchMode('expert'));
document.getElementById('customAdd').addEventListener('click', addCustomEnchant);

['customName','customLevel','customMult','customMax','customGroup'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', e => {
    if (e.key === 'Enter') addCustomEnchant();
  });
});

document.getElementById('repairCheck').addEventListener('change', e => {
  extraOptions.repair = e.target.checked;
});
document.getElementById('renameCheck').addEventListener('change', e => {
  extraOptions.rename = e.target.checked;
});
document.getElementById('targetN').addEventListener('input', e => {
  extraOptions.targetN = Math.max(0, +e.target.value || 0);
});

document.getElementById('calcBtn').addEventListener('click', () => {
  const valid = selectedBooks.filter(b => b.name.trim() && b.level > 0);
  if (!valid.length){ alert('Добавьте хотя бы одно зачарование'); return; }
  renderResults(calculateSteps(valid));
});

// ============================================================
//  ИНИЦИАЛИЗАЦИЯ
// ============================================================
renderItemGrid();
switchMode('novice');