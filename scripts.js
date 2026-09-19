// ============================================================
//  ТАБЛИЦА МНОЖИТЕЛЕЙ И МАКС. УРОВНЕЙ (русские названия)
// ============================================================
const ENCHANT_DATA = {
  'Защита':                    { multItem: 1, multBook: 1, maxLevel: 4 },
  'Огнеупорность':             { multItem: 2, multBook: 1, maxLevel: 4 },
  'Невесомость':               { multItem: 2, multBook: 1, maxLevel: 4 },
  'Взрывоустойчивость':        { multItem: 4, multBook: 2, maxLevel: 4 },
  'Защита от снарядов':        { multItem: 2, multBook: 1, maxLevel: 4 },
  'Шипы':                      { multItem: 8, multBook: 4, maxLevel: 3 },
  'Подводное дыхание':         { multItem: 4, multBook: 2, maxLevel: 3 },
  'Подводная ходьба':          { multItem: 4, multBook: 2, maxLevel: 3 },
  'Родство с водой':           { multItem: 4, multBook: 2, maxLevel: 1 },
  'Острота':                   { multItem: 1, multBook: 1, maxLevel: 5 },
  'Небесная кара':             { multItem: 2, multBook: 1, maxLevel: 5 },
  'Бич членистоногих':         { multItem: 2, multBook: 1, maxLevel: 5 },
  'Отдача':                    { multItem: 2, multBook: 1, maxLevel: 2 },
  'Заговор огня':              { multItem: 4, multBook: 2, maxLevel: 2 },
  'Добыча':                    { multItem: 4, multBook: 2, maxLevel: 3 },
  'Эффективность':             { multItem: 1, multBook: 1, maxLevel: 5 },
  'Шёлковое касание':          { multItem: 8, multBook: 4, maxLevel: 1 },
  'Прочность':                 { multItem: 2, multBook: 1, maxLevel: 3 },
  'Удача':                     { multItem: 4, multBook: 2, maxLevel: 3 },
  'Сила':                      { multItem: 1, multBook: 1, maxLevel: 5 },
  'Откидывание':               { multItem: 4, multBook: 2, maxLevel: 2 },
  'Воспламенение':             { multItem: 4, multBook: 2, maxLevel: 1 },
  'Бесконечность':             { multItem: 8, multBook: 4, maxLevel: 1 },
  'Удача рыбака':              { multItem: 4, multBook: 2, maxLevel: 3 },
  'Приманка':                  { multItem: 4, multBook: 2, maxLevel: 3 },
  'Ледоход':                   { multItem: 4, multBook: 2, maxLevel: 2 },
  'Починка':                   { multItem: 4, multBook: 2, maxLevel: 1 },
  'Проклятие несъёмности':     { multItem: 8, multBook: 4, maxLevel: 1 },
  'Проклятие утраты':          { multItem: 8, multBook: 4, maxLevel: 1 },
  'Пронзание':                 { multItem: 4, multBook: 2, maxLevel: 5 },
  'Тягун':                     { multItem: 4, multBook: 2, maxLevel: 3 },
  'Верность':                  { multItem: 1, multBook: 1, maxLevel: 3 },
  'Громоотвод':                { multItem: 8, multBook: 4, maxLevel: 1 },
  'Тройной выстрел':           { multItem: 4, multBook: 2, maxLevel: 1 },
  'Пронзающий выстрел':        { multItem: 1, multBook: 1, maxLevel: 4 },
  'Быстрая перезарядка':       { multItem: 2, multBook: 1, maxLevel: 3 },
  'Скорость души':             { multItem: 8, multBook: 4, maxLevel: 3 },
  'Быстрый подкрад':           { multItem: 8, multBook: 4, maxLevel: 3 },
  'Порыв ветра':               { multItem: 4, multBook: 2, maxLevel: 3 },
  'Плотность':                 { multItem: 2, multBook: 1, maxLevel: 5 },
  'Пробой':                    { multItem: 4, multBook: 2, maxLevel: 4 },
  'Выпад':                     { multItem: 2, multBook: 1, maxLevel: 3 },
  'Разящий клинок':            { multItem: 4, multBook: 2, maxLevel: 3 },
};

// ============================================================
//  ПРЕДМЕТЫ И ИХ ЧАРЫ
// ============================================================
const ITEM_ENCHANTS = {
  'Меч': ['Острота', 'Небесная кара', 'Бич членистоногих', 'Отдача', 'Заговор огня',
          'Добыча', 'Разящий клинок', 'Прочность', 'Починка', 'Проклятие утраты'],
  'Кирка': ['Эффективность', 'Удача', 'Шёлковое касание', 'Прочность', 'Починка',
            'Проклятие утраты'],
  'Топор': ['Эффективность', 'Удача', 'Шёлковое касание', 'Острота', 'Небесная кара',
            'Бич членистоногих', 'Прочность', 'Починка', 'Проклятие утраты'],
  'Лопата': ['Эффективность', 'Удача', 'Шёлковое касание', 'Прочность', 'Починка',
             'Проклятие утраты'],
  'Мотыга': ['Эффективность', 'Удача', 'Шёлковое касание', 'Прочность', 'Починка',
             'Проклятие утраты'],
  'Шлем': ['Защита', 'Огнеупорность', 'Взрывоустойчивость',
           'Защита от снарядов', 'Подводное дыхание', 'Родство с водой', 'Шипы',
           'Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'],
  'Нагрудник': ['Защита', 'Огнеупорность', 'Взрывоустойчивость',
                'Защита от снарядов', 'Шипы', 'Прочность', 'Починка',
                'Проклятие утраты', 'Проклятие несъёмности'],
  'Штаны': ['Защита', 'Огнеупорность', 'Взрывоустойчивость',
            'Защита от снарядов', 'Шипы', 'Прочность', 'Починка',
            'Проклятие утраты', 'Проклятие несъёмности'],
  'Ботинки': ['Защита', 'Огнеупорность', 'Взрывоустойчивость',
              'Защита от снарядов', 'Невесомость', 'Подводная ходьба',
              'Ледоход', 'Скорость души', 'Быстрый подкрад', 'Шипы',
              'Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'],
  'Лук': ['Сила', 'Откидывание', 'Воспламенение', 'Бесконечность', 'Прочность', 'Починка',
          'Проклятие утраты'],
  'Арбалет': ['Быстрая перезарядка', 'Тройной выстрел', 'Пронзающий выстрел', 'Прочность', 'Починка',
              'Проклятие утраты'],
  'Трезубец': ['Верность', 'Пронзание', 'Тягун', 'Громоотвод', 'Прочность',
               'Починка', 'Проклятие утраты'],
  'Удочка': ['Удача рыбака', 'Приманка', 'Прочность', 'Починка',
             'Проклятие утраты'],
  'Булава': ['Плотность', 'Пробой', 'Порыв ветра', 'Небесная кара', 'Бич членистоногих',
             'Заговор огня', 'Прочность', 'Починка', 'Проклятие утраты'],
  'Ножницы': ['Эффективность', 'Шёлковое касание', 'Прочность', 'Починка',
              'Проклятие утраты'],
  'Кисточка': ['Прочность', 'Починка'],
  'Элитры': ['Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'],
  'Щит': ['Прочность', 'Починка', 'Проклятие утраты'],
  'Огниво': ['Прочность', 'Починка', 'Проклятие утраты'],
  'Копьё': ['Острота', 'Небесная кара', 'Бич членистоногих', 'Выпад', 'Прочность',
            'Починка', 'Проклятие утраты'],
};

// ============================================================
//  ИКОНКИ ПРЕДМЕТОВ
// ============================================================
const ITEM_ICONS = {
  'Топор': 'icons/diamond_axe.png',
  'Меч': 'icons/diamond_sword.png',
  'Кирка': 'icons/diamond_pickaxe.png',
  'Лопата': 'icons/diamond_shovel.png',
  'Кисточка': 'icons/brush.png',
  'Лук': 'icons/bow.png',
  'Арбалет': 'icons/crossbow.png',
  'Ботинки': 'icons/diamond_boots.png',
  'Штаны': 'icons/diamond_leggings.png',
  'Нагрудник': 'icons/diamond_chestplate.png',
  'Шлем': 'icons/diamond_helmet.png',
  'Мотыга': 'icons/diamond_hoe.png',
  'Копьё': 'icons/diamond_spear.png',
  'Элитры': 'icons/elytra.png',
  'Удочка': 'icons/fishing_rod.png',
  'Булава': 'icons/mace.png',
  'Щит': 'icons/shield.png',
  'Трезубец': 'icons/trident.png',
  'Огниво': 'icons/flint_and_steel.png',
  'Ножницы': 'icons/shears.png',
};

// ============================================================
//  ГРУППЫ НЕСОВМЕСТИМОСТИ
// ============================================================
const INCOMPATIBLE_GROUPS = {
  'protection': ['Защита', 'Огнеупорность', 'Взрывоустойчивость', 'Защита от снарядов'],
  'damage':     ['Острота', 'Небесная кара', 'Бич членистоногих'],
  'mining':     ['Шёлковое касание', 'Удача'],
  'trident':    ['Тягун', 'Верность', 'Громоотвод'],
  'boots':      ['Подводная ходьба', 'Ледоход'],
  'crossbow':   ['Тройной выстрел', 'Пронзающий выстрел'],
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
//  РЕНДЕР СЕТКИ ПРЕДМЕТОВ
// ============================================================
function renderItemGrid(){
  const grid = document.getElementById('itemGrid');
  grid.innerHTML = '';
  Object.keys(ITEM_ENCHANTS).forEach(item => {
    const btn = document.createElement('button');

    const iconPath = ITEM_ICONS[item];
    if (iconPath){
      const img = document.createElement('img');
      img.src = iconPath;
      img.alt = item;
      img.className = 'item-icon';
      img.onerror = () => { img.remove(); };
      btn.appendChild(img);
    }

    const label = document.createElement('span');
    label.className = 'item-label';
    label.textContent = item;
    btn.appendChild(label);

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

// ============================================================
//  РЕНДЕР СЕТКИ ЧАР
// ============================================================
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

// ============================================================
//  ДОБАВЛЕНИЕ ЧАРА ИЗ СЕТКИ
// ============================================================
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

// ============================================================
//  ДОБАВЛЕНИЕ КАСТОМНОГО ЧАРА
// ============================================================
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

// ============================================================
//  ПРОВЕРКА КОНФЛИКТОВ
// ============================================================
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

// ============================================================
//  РЕНДЕР СПИСКА ВЫБРАННЫХ КНИГ
// ============================================================
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

// ============================================================
//  РЕЖИМЫ
// ============================================================
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

  const extraPanel = document.getElementById('extraPanel');
  if (mode === 'expert'){
    extraPanel.style.display = 'block';
  } else {
    // В режиме новичка скрываем шаг 5 и сбрасываем его настройки
    extraPanel.style.display = 'none';
    extraOptions.repair = false;
    extraOptions.rename = false;
    extraOptions.targetN = 0;
    document.getElementById('repairBtn').classList.remove('active');
    document.getElementById('renameBtn').classList.remove('active');
    document.getElementById('targetN').value = '0';
  }

  renderSelectedList();
  renderEnchantGrid();
  updateConflictWarning();
}

// ============================================================
//  ОТРИСОВКА РЕЗУЛЬТАТОВ
// ============================================================
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

// Кнопки-переключатели
const repairBtn = document.getElementById('repairBtn');
const renameBtn = document.getElementById('renameBtn');

repairBtn.addEventListener('click', () => {
  extraOptions.repair = !extraOptions.repair;
  repairBtn.classList.toggle('active', extraOptions.repair);
});

renameBtn.addEventListener('click', () => {
  extraOptions.rename = !extraOptions.rename;
  renameBtn.classList.toggle('active', extraOptions.rename);
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