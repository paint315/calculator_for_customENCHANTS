// ============================================================
//  КОНСТАНТЫ
// ============================================================
const MAX_CUSTOM_ENCHANTS = 10;
const LEVEL_LIMIT = 39;
const MAX_BOOKS_FOR_DP = 10;

// ============================================================
//  РЕЕСТРЫ
// ============================================================
const ENCHANTS = {
  'Защита':                { multItem: 1, multBook: 1, maxLevel: 4, group: 'protection' },
  'Огнеупорность':         { multItem: 2, multBook: 1, maxLevel: 4, group: 'protection' },
  'Невесомость':           { multItem: 2, multBook: 1, maxLevel: 4 },
  'Взрывоустойчивость':    { multItem: 4, multBook: 2, maxLevel: 4, group: 'protection' },
  'Защита от снарядов':    { multItem: 2, multBook: 1, maxLevel: 4, group: 'protection' },
  'Шипы':                  { multItem: 8, multBook: 4, maxLevel: 3 },
  'Подводное дыхание':     { multItem: 4, multBook: 2, maxLevel: 3 },
  'Подводная ходьба':      { multItem: 4, multBook: 2, maxLevel: 3, group: 'boots' },
  'Подводник':             { multItem: 4, multBook: 2, maxLevel: 1 },
  'Острота':               { multItem: 1, multBook: 1, maxLevel: 5, group: 'damage' },
  'Небесная кара':         { multItem: 2, multBook: 1, maxLevel: 5, group: 'damage' },
  'Бич членистоногих':     { multItem: 2, multBook: 1, maxLevel: 5, group: 'damage' },
  'Отдача':                { multItem: 2, multBook: 1, maxLevel: 2 },
  'Заговор огня':          { multItem: 4, multBook: 2, maxLevel: 2 },
  'Добыча':                { multItem: 4, multBook: 2, maxLevel: 3 },
  'Эффективность':         { multItem: 1, multBook: 1, maxLevel: 5 },
  'Шёлковое касание':      { multItem: 8, multBook: 4, maxLevel: 1, group: 'mining' },
  'Прочность':             { multItem: 2, multBook: 1, maxLevel: 3 },
  'Удача':                 { multItem: 4, multBook: 2, maxLevel: 3, group: 'mining' },
  'Сила':                  { multItem: 1, multBook: 1, maxLevel: 5 },
  'Откидывание':           { multItem: 4, multBook: 2, maxLevel: 2 },
  'Воспламенение':         { multItem: 4, multBook: 2, maxLevel: 1 },
  'Бесконечность':         { multItem: 8, multBook: 4, maxLevel: 1 },
  'Везучий рыбак':         { multItem: 4, multBook: 2, maxLevel: 3 },
  'Приманка':              { multItem: 4, multBook: 2, maxLevel: 3 },
  'Ледоход':               { multItem: 4, multBook: 2, maxLevel: 2, group: 'boots' },
  'Починка':               { multItem: 4, multBook: 2, maxLevel: 1 },
  'Проклятие несъёмности': { multItem: 8, multBook: 4, maxLevel: 1 },
  'Проклятие утраты':      { multItem: 8, multBook: 4, maxLevel: 1 },
  'Пронзание':             { multItem: 4, multBook: 2, maxLevel: 5 },
  'Тягун':                 { multItem: 4, multBook: 2, maxLevel: 3, group: 'trident' },
  'Верность':              { multItem: 1, multBook: 1, maxLevel: 3, group: 'trident' },
  'Громовержец':           { multItem: 8, multBook: 4, maxLevel: 1, group: 'trident' },
  'Тройной выстрел':       { multItem: 4, multBook: 2, maxLevel: 1, group: 'crossbow' },
  'Пронзающий выстрел':    { multItem: 1, multBook: 1, maxLevel: 4, group: 'crossbow' },
  'Быстрая перезарядка':   { multItem: 2, multBook: 1, maxLevel: 3 },
  'Скорость души':         { multItem: 8, multBook: 4, maxLevel: 3 },
  'Проворство':            { multItem: 8, multBook: 4, maxLevel: 3 },
  'Порыв ветра':           { multItem: 4, multBook: 2, maxLevel: 3 },
  'Плотность':             { multItem: 2, multBook: 1, maxLevel: 5 },
  'Пробитие':              { multItem: 4, multBook: 2, maxLevel: 4 },
  'Выпад':                 { multItem: 2, multBook: 1, maxLevel: 3 },
  'Разящий клинок':        { multItem: 4, multBook: 2, maxLevel: 3 },
};

const ITEMS = {
  'Меч':       { icon: 'icons/diamond_sword.png',      enchants: ['Острота', 'Небесная кара', 'Бич членистоногих', 'Отдача', 'Заговор огня', 'Добыча', 'Разящий клинок', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Кирка':     { icon: 'icons/diamond_pickaxe.png',    enchants: ['Эффективность', 'Удача', 'Шёлковое касание', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Топор':     { icon: 'icons/diamond_axe.png',        enchants: ['Эффективность', 'Удача', 'Шёлковое касание', 'Острота', 'Небесная кара', 'Бич членистоногих', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Лопата':    { icon: 'icons/diamond_shovel.png',     enchants: ['Эффективность', 'Удача', 'Шёлковое касание', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Мотыга':    { icon: 'icons/diamond_hoe.png',        enchants: ['Эффективность', 'Удача', 'Шёлковое касание', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Шлем':      { icon: 'icons/diamond_helmet.png',     enchants: ['Защита', 'Огнеупорность', 'Взрывоустойчивость', 'Защита от снарядов', 'Подводное дыхание', 'Подводник', 'Шипы', 'Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'] },
  'Нагрудник': { icon: 'icons/diamond_chestplate.png', enchants: ['Защита', 'Огнеупорность', 'Взрывоустойчивость', 'Защита от снарядов', 'Шипы', 'Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'] },
  'Штаны':     { icon: 'icons/diamond_leggings.png',   enchants: ['Защита', 'Огнеупорность', 'Взрывоустойчивость', 'Защита от снарядов', 'Шипы', 'Проворство', 'Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'] },
  'Ботинки':   { icon: 'icons/diamond_boots.png',      enchants: ['Защита', 'Огнеупорность', 'Взрывоустойчивость', 'Защита от снарядов', 'Невесомость', 'Подводная ходьба', 'Ледоход', 'Скорость души', 'Шипы', 'Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'] },
  'Лук':       { icon: 'icons/bow.png',                enchants: ['Сила', 'Откидывание', 'Воспламенение', 'Бесконечность', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Арбалет':   { icon: 'icons/crossbow.png',           enchants: ['Быстрая перезарядка', 'Тройной выстрел', 'Пронзающий выстрел', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Трезубец':  { icon: 'icons/trident.png',            enchants: ['Верность', 'Пронзание', 'Тягун', 'Громовержец', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Удочка':    { icon: 'icons/fishing_rod.png',        enchants: ['Везучий рыбак', 'Приманка', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Булава':    { icon: 'icons/mace.png',               enchants: ['Плотность', 'Пробитие', 'Порыв ветра', 'Небесная кара', 'Бич членистоногих', 'Заговор огня', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Ножницы':   { icon: 'icons/shears.png',             enchants: ['Эффективность', 'Шёлковое касание', 'Прочность', 'Починка', 'Проклятие утраты'] },
  'Кисточка':  { icon: 'icons/brush.png',              enchants: ['Прочность', 'Починка'] },
  'Элитры':    { icon: 'icons/elytra.png',             enchants: ['Прочность', 'Починка', 'Проклятие утраты', 'Проклятие несъёмности'] },
  'Щит':       { icon: 'icons/shield.png',             enchants: ['Прочность', 'Починка', 'Проклятие утраты'] },
  'Огниво':    { icon: 'icons/flint_and_steel.png',    enchants: ['Прочность', 'Починка', 'Проклятие утраты'] },
  'Копьё':     { icon: 'icons/diamond_spear.png',      enchants: ['Острота', 'Небесная кара', 'Бич членистоногих', 'Заговор огня', 'Отдача', 'Добыча', 'Выпад', 'Прочность', 'Починка', 'Проклятие утраты'] },
};

const ENCHANT_TO_GROUP = {};
for (const [name, data] of Object.entries(ENCHANTS)) {
  if (data.group) ENCHANT_TO_GROUP[name] = data.group;
}

// ============================================================
//  УВЕДОМЛЕНИЯ
// ============================================================
const TOAST_ICONS = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '⛔' };
let lastToastMessage = '', lastToastTime = 0;

function notify(message, type = 'info', duration = 4500) {
  const now = Date.now();
  if (message === lastToastMessage && now - lastToastTime < 800) return;
  lastToastMessage = message;
  lastToastTime = now;
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = document.createElement('span');
  icon.className = 'toast-icon';
  icon.textContent = TOAST_ICONS[type] || TOAST_ICONS.info;
  const msg = document.createElement('span');
  msg.className = 'toast-message';
  msg.textContent = message;
  const closeBtn = document.createElement('button');
  closeBtn.className = 'toast-close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Закрыть');
  closeBtn.textContent = '×';
  toast.append(icon, msg, closeBtn);
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  let removed = false;
  const close = () => {
    if (removed) return;
    removed = true;
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  };
  closeBtn.addEventListener('click', close);
  if (duration > 0) setTimeout(close, duration);
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
function getEnchantData(name){ return ENCHANTS[name] || null; }
function getMultiplier(name, isBook){
  const data = getEnchantData(name);
  if (data) return isBook ? data.multBook : data.multItem;
  return isBook ? 1 : 2;
}
function getMaxLevel(name){
  const data = getEnchantData(name);
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
function pluralizeChants(n){
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return 'чар';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'чара';
  return 'чаров';
}

// ============================================================
//  ЯДРО СЛИЯНИЯ
// ============================================================
function isIncompatible(e, targetEnchants){
  if (!e.group) return false;
  return targetEnchants.some(t => t.group === e.group && t.name !== e.name);
}

function mergeItems(target, sacrifice, isFinal){
  const transferred = [], discarded = [];
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
    } else finalLevel = e.level;
    const mult = (e.multiplier != null && e.multiplier > 0)
      ? e.multiplier
      : getMultiplier(e.name, sacrifice.isBook);
    const cost = finalLevel * mult;
    transferSum += cost;
    transferDetails.push({ name: e.name, level: finalLevel, cost });
  }
  const targetPen = penalty(target.n);
  const sacPen = penalty(sacrifice.n);
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
    } else newEnchants.push({ ...e });
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

// ============================================================
//  КОМБИНИРОВАНИЕ УРОВНЕЙ
// ============================================================
function combineLevelsSimple(entries){
  if (!entries.length) return 0;
  entries.sort((a, b) => a.level - b.level);
  let cur = entries[0].level;
  const maxLvl = entries[0].maxLvl;
  for (let i = 1; i < entries.length; i++){
    if (cur === entries[i].level && cur < maxLvl) cur++;
    else cur = Math.max(cur, entries[i].level);
  }
  return cur;
}

function precomputeCombined(books){
  const N = books.length;
  const names = [...new Set(books.map(b => b.name))];
  const nameIdx = {};
  names.forEach((n, i) => nameIdx[n] = i);
  const E = names.length;
  const combined = new Array(1 << N);

  for (let S = 0; S < (1 << N); S++){
    const res = new Array(E).fill(0);
    if (S === 0){ combined[S] = res; continue; }
    const byName = {};
    for (let i = 0; i < N; i++){
      if (S & (1 << i)){
        const b = books[i];
        if (!byName[b.name]) byName[b.name] = [];
        byName[b.name].push({ level: b.level, maxLvl: getEffectiveMax(b) });
      }
    }
    for (const [name, entries] of Object.entries(byName)){
      res[nameIdx[name]] = combineLevelsSimple(entries);
    }
    combined[S] = res;
  }
  const multBookByE = names.map(n => getMultiplier(n, true));
  return { combined, nameIdx, names, multBookByE, E };
}

// ============================================================
//  СТОИМОСТЬ ПЕРЕДАЧИ ПОДМНОЖЕСТВА
// ============================================================
function transferCost(books, S1, S, combined, nameIdx, multBookByE, N){
  const namesInS1 = new Set();
  for (let i = 0; i < N; i++){
    if (S1 & (1 << i)) namesInS1.add(books[i].name);
  }
  let cost = 0;
  for (const name of namesInS1){
    const eIdx = nameIdx[name];
    cost += combined[S][eIdx] * multBookByE[eIdx];
  }
  return cost;
}

// ============================================================
//  ПАРЕТО-ОТСЕЧЕНИЕ
// ============================================================
function paretoPruneF(states){
  if (!states.length) return [];
  // Sort by n asc, cost asc
  states.sort((a, b) => a.n - b.n || a.cost - b.cost);
  const out = [];
  let minCost = Infinity;
  for (const s of states){
    if (s.cost < minCost){
      out.push(s);
      minCost = s.cost;
    }
  }
  return out;
}
function paretoPruneH(states){
  if (!states.length) return [];
  states.sort((a, b) => a.k - b.k || a.cost - b.cost);
  const out = [];
  let minCost = Infinity;
  for (const s of states){
    if (s.cost < minCost){
      out.push(s);
      minCost = s.cost;
    }
  }
  return out;
}

// ============================================================
//  ГЛАВНЫЙ РЕШАТЕЛЬ (DP)
// ============================================================
function solveOptimal(books, targetN){
  const N = books.length;
  if (N === 0) return null;

  const { combined, nameIdx, multBookByE } = precomputeCombined(books);

  // f[S] — Парето-список (n, cost) для сборки одной книги из S.
  // n — штраф получившейся книги.
  const f = new Array(1 << N);
  for (let i = 0; i < N; i++){
    f[1 << i] = [{ n: books[i].n || 0, cost: 0, back: null }];
  }

  for (let S = 1; S < (1 << N); S++){
    if (f[S]) continue;
    if ((S & (S - 1)) === 0) continue;
    const lowBit = S & -S;
    const candidates = [];
    for (let S1 = S; S1 > 0; S1 = (S1 - 1) & S){
      if (!(S1 & lowBit)) continue;
      const S2 = S ^ S1;
      if (S2 === 0 || !f[S1] || !f[S2]) continue;
      const cost1 = transferCost(books, S1, S, combined, nameIdx, multBookByE, N);
      const cost2 = transferCost(books, S2, S, combined, nameIdx, multBookByE, N);
      for (let i1 = 0; i1 < f[S1].length; i1++){
        for (let i2 = 0; i2 < f[S2].length; i2++){
          const st1 = f[S1][i1], st2 = f[S2][i2];
          const newN = Math.max(st1.n, st2.n) + 1;
          const pen = penalty(st1.n) + penalty(st2.n);
          if (cost1 <= cost2){
            candidates.push({
              n: newN, cost: st1.cost + st2.cost + cost1 + pen,
              back: { S1, S2, i1, i2, sacIsS1: true },
            });
          }
          if (cost2 <= cost1){
            candidates.push({
              n: newN, cost: st1.cost + st2.cost + cost2 + pen,
              back: { S1, S2, i1, i2, sacIsS1: false },
            });
          }
        }
      }
    }
    f[S] = paretoPruneF(candidates);
  }

  // h[S] — Парето-список (n, cost) для применения всех источников из S к предмету.
  // n — штраф предмета после применения всех источников из S.
  const h = new Array(1 << N);
  h[0] = [{ n: targetN, cost: 0, back: null }];

  for (let S = 1; S < (1 << N); S++){
    const candidates = [];
    for (let T = S; T > 0; T = (T - 1) & S){
      const Sprime = S ^ T;
      if (!h[Sprime] || !f[T]) continue;
      const enchCost = transferCost(books, T, S, combined, nameIdx, multBookByE, N);
      for (let iT = 0; iT < f[T].length; iT++){
        const st = f[T][iT];
        for (let iH = 0; iH < h[Sprime].length; iH++){
          const sp = h[Sprime][iH];
          const targetPen = penalty(sp.n);
          const sacPen = penalty(st.n);
          const newN = Math.max(sp.n, st.n) + 1;
          const applyCost = enchCost + targetPen + sacPen;
          candidates.push({
            n: newN,
            cost: sp.cost + st.cost + applyCost,
            back: { T, iT, iH },
          });
        }
      }
    }
    h[S] = paretoPruneH(candidates);
  }

  const full = (1 << N) - 1;
  if (!h[full] || !h[full].length) return null;
  let bestIdx = 0;
  for (let i = 1; i < h[full].length; i++){
    if (h[full][i].cost < h[full][bestIdx].cost) bestIdx = i;
  }
  const best = h[full][bestIdx];

  // Реконструкция
  const ops = [];

  function rebuildF(S, idx){
    const st = f[S][idx];
    if (!st || !st.back) return;
    const { S1, S2, i1, i2, sacIsS1 } = st.back;
    rebuildF(S1, i1);
    rebuildF(S2, i2);
    ops.push({
      type: 'merge',
      targetSubset: sacIsS1 ? S2 : S1,
      sacrificeSubset: sacIsS1 ? S1 : S2,
      resultSubset: S,
    });
  }

  function rebuildH(S, idx){
    const st = h[S][idx];
    if (!st || !st.back) return;
    const { T, iT, iH } = st.back;
    const Sprime = S ^ T;
    rebuildH(Sprime, iH);
    rebuildF(T, iT);
    ops.push({ type: 'apply', subset: T });
  }

  rebuildH(full, bestIdx);

  // Симуляция
  const itemsBySubset = {};
  for (let i = 0; i < N; i++){
    itemsBySubset[1 << i] = {
      enchants: [{ ...books[i] }],
      n: books[i].n || 0,
      isBook: books[i].isBook,
    };
  }
  let targetItem = { enchants: [], n: targetN, isBook: false };
  const steps = [];

  for (let idx = 0; idx < ops.length; idx++){
    const op = ops[idx];
    const isFinal = (idx === ops.length - 1);
    if (op.type === 'merge'){
      const t = itemsBySubset[op.targetSubset];
      const s = itemsBySubset[op.sacrificeSubset];
      const r = mergeItems(t, s, false);
      itemsBySubset[op.resultSubset] = r.result;
      steps.push(r);
    } else {
      const s = itemsBySubset[op.subset];
      const r = mergeItems(targetItem, s, isFinal);
      targetItem = r.result;
      steps.push(r);
    }
  }

  return { steps, finalItem: targetItem, totalCost: best.cost };
}

// ============================================================
//  ОБЁРТКА
// ============================================================
function calculateSteps(books){
  const N = books.length;
  if (N > MAX_BOOKS_FOR_DP){
    notify(`Слишком много книг (${N}). Точный расчёт поддерживает до ${MAX_BOOKS_FOR_DP}. Использую упрощённый алгоритм.`, 'warning', 6000);
    // Fallback: sequential application (быстро, но не оптимально)
    let target = { enchants: [], n: extraOptions.targetN, isBook: false };
    const sorted = [...books].sort((a, b) => enchantCost(a, a.isBook) - enchantCost(b, b.isBook));
    const steps = [];
    for (let i = 0; i < sorted.length; i++){
      const s = { enchants: [sorted[i]], n: 0, isBook: sorted[i].isBook };
      const r = mergeItems(target, s, i === sorted.length - 1);
      target = r.result;
      steps.push(r);
    }
    return steps;
  }
  const result = solveOptimal(books, extraOptions.targetN);
  return result ? result.steps : [];
}

// ============================================================
//  РЕНДЕР СЕТКИ ПРЕДМЕТОВ
// ============================================================
function renderItemGrid(){
  const grid = document.getElementById('itemGrid');
  grid.innerHTML = '';
  Object.keys(ITEMS).forEach(item => {
    const btn = document.createElement('button');
    const iconPath = ITEMS[item].icon;
    if (iconPath){
      const img = document.createElement('img');
      img.src = iconPath; img.alt = item; img.className = 'item-icon';
      img.onerror = () => { img.remove(); };
      btn.appendChild(img);
    }
    const label = document.createElement('span');
    label.className = 'item-label';
    label.textContent = item;
    btn.appendChild(label);
    if (selectedItem === item) btn.classList.add('selected');
    btn.addEventListener('click', () => selectItem(item));
    grid.appendChild(btn);
  });
}

function selectItem(item){
  if (selectedItem === item) return;
  const hadBooks = selectedBooks.length > 0;
  selectedBooks = [];
  selectedItem = item;
  renderItemGrid();
  renderEnchantGrid();
  renderSelectedList();
  updateConflictWarning();
  document.getElementById('enchantPanel').style.display = 'block';
  document.getElementById('enchantHint').style.display = 'block';
  document.getElementById('results').style.display = 'none';
  if (hadBooks){
    document.getElementById('selectedPanel').style.display = 'none';
    notify(`Предмет изменён на «${item}». Прежние чары сброшены.`, 'info', 3000);
  }
}

function renderEnchantGrid(){
  const grid = document.getElementById('enchantGrid');
  grid.innerHTML = '';
  if (!selectedItem) return;
  const enchants = ITEMS[selectedItem].enchants || [];
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
    else { notify(`«${name}» уже на максимальном уровне (${maxLvl})`, 'warning'); return; }
  } else {
    selectedBooks.push({
      name, level: 1, multiplier: null, isBook: true,
      group: ENCHANT_TO_GROUP[name] || '',
      maxLevel: null, custom: false,
      n: 0,
    });
  }
  renderSelectedList(); renderEnchantGrid(); updateConflictWarning();
  document.getElementById('selectedPanel').style.display = 'block';
}

function resetCustomForm(){
  document.getElementById('customName').value = '';
  document.getElementById('customLevel').value = '1';
  document.getElementById('customMult').value = '';
  document.getElementById('customMax').value = '';
  document.getElementById('customGroup').value = '';
  document.getElementById('customIsBook').checked = true;
}

function addCustomEnchant(){
  const nameInput = document.getElementById('customName');
  const name = nameInput.value.trim();
  if (!name){ notify('Введите название чара', 'warning'); nameInput.focus(); return; }
  const level = Math.max(1, +document.getElementById('customLevel').value || 1);
  const multVal = document.getElementById('customMult').value;
  const maxVal = document.getElementById('customMax').value;
  const groupVal = document.getElementById('customGroup').value.trim();
  if (maxVal){
    const maxNum = +maxVal;
    if (!isNaN(maxNum) && maxNum < level){
      notify(`Максимальный уровень (${maxNum}) не может быть меньше текущего (${level})`, 'error');
      return;
    }
  }
  if (isIncompatibleWithSelected(name, groupVal)){
    notify(`Чар «${name}» несовместим с уже выбранными чарами из той же группы.`, 'error');
    return;
  }
  const existing = selectedBooks.find(b => b.name === name);
  if (!existing){
    const customCount = selectedBooks.filter(b => b.custom).length;
    if (customCount >= MAX_CUSTOM_ENCHANTS){
      notify(`Достигнут лимит кастомных чар (${MAX_CUSTOM_ENCHANTS}). Удалите один из них.`, 'error', 5000);
      return;
    }
  }
  if (existing){
    const maxLvl = getEffectiveMax(existing);
    if (existing.level < maxLvl) existing.level++;
    else { notify(`«${name}» уже на максимальном уровне (${maxLvl})`, 'warning'); return; }
  } else {
    selectedBooks.push({
      name, level,
      multiplier: multVal ? +multVal : null,
      isBook: document.getElementById('customIsBook').checked,
      group: groupVal || ENCHANT_TO_GROUP[name] || '',
      maxLevel: maxVal ? +maxVal : null,
      custom: true,
      n: 0,
    });
  }
  resetCustomForm();
  renderSelectedList(); renderEnchantGrid(); updateConflictWarning();
  document.getElementById('selectedPanel').style.display = 'block';
  notify(`Чар «${name}» добавлен`, 'success', 3000);
}

function clearAllBooks(){
  if (!selectedBooks.length){ notify('Список уже пуст', 'info', 2000); return; }
  const count = selectedBooks.length;
  selectedBooks = [];
  renderSelectedList(); renderEnchantGrid(); updateConflictWarning();
  document.getElementById('selectedPanel').style.display = 'none';
  document.getElementById('results').style.display = 'none';
  notify(`Очищено ${count} ${pluralizeChants(count)}`, 'success', 2500);
}

function updateCounters(){
  const booksCounter = document.getElementById('booksCounter');
  if (booksCounter) booksCounter.textContent = selectedBooks.length;
  const customCounter = document.getElementById('customCounter');
  if (customCounter){
    const customCount = selectedBooks.filter(b => b.custom).length;
    customCounter.textContent = customCount;
    const wrap = customCounter.closest('.custom-counter-wrap');
    if (wrap) wrap.classList.toggle('limit-reached', customCount >= MAX_CUSTOM_ENCHANTS);
  }
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
  updateCounters();
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
    header.innerHTML = `<div>Название</div><div>Ур.</div><div>N</div><div>Множ.</div>
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
        <input type="number" value="${book.n != null ? book.n : 0}" min="0" data-idx="${i}" data-field="n" title="Штраф (число прошлых зачарований этого источника)">
        <input type="number" value="${book.multiplier != null ? book.multiplier : ''}" placeholder="авто" min="1" data-idx="${i}" data-field="multiplier">
        <label class="mini-toggle" title="Книга / Предмет">
          <input type="checkbox" ${book.isBook ? 'checked' : ''} data-idx="${i}" data-field="isBook">
          <span class="mini-switch"></span>
          <span class="mini-text-on">📖</span>
          <span class="mini-text-off">⚔️</span>
        </label>
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
        else if (field === 'n') selectedBooks[idx][field] = Math.max(0, +e.target.value || 0);
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
      renderSelectedList(); renderEnchantGrid(); updateConflictWarning();
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
    selectedItem = null;
    resetCustomForm();
    document.getElementById('selectedPanel').style.display = 'none';
    document.getElementById('enchantPanel').style.display = 'none';
    document.getElementById('enchantHint').style.display = 'none';
    document.getElementById('results').style.display = 'none';
  }
  currentMode = mode;
  document.getElementById('modeNovice').classList.toggle('active', mode === 'novice');
  document.getElementById('modeExpert').classList.toggle('active', mode === 'expert');
  document.getElementById('customPanel').style.display = mode === 'expert' ? 'block' : 'none';
  document.getElementById('selectedStepLabel').textContent = mode === 'novice' ? 'Шаг 3' : 'Шаг 4';
  const extraPanel = document.getElementById('extraPanel');
  if (mode === 'expert'){
    extraPanel.style.display = 'block';
  } else {
    extraPanel.style.display = 'none';
    extraOptions.repair = false;
    extraOptions.rename = false;
    extraOptions.targetN = 0;
    document.getElementById('repairBtn').classList.remove('active');
    document.getElementById('renameBtn').classList.remove('active');
    document.getElementById('targetN').value = '0';
  }
  renderItemGrid(); renderSelectedList(); renderEnchantGrid();
  updateConflictWarning(); updateCounters();
}

// ============================================================
//  ОТРИСОВКА РЕЗУЛЬТАТОВ
// ============================================================
// ============================================================
//  ОТРИСОВКА РЕЗУЛЬТАТОВ
// ============================================================
function renderResults(steps){
  const container = document.getElementById('resultContent');
  container.innerHTML = '';

  if (!steps.length){
    notify('Не удалось найти решение', 'error');
    return;
  }

  const anyTooExpensive = steps.some(st => st.cost > LEVEL_LIMIT);
  const totalCost = steps.reduce((s, st) => s + st.cost, 0);
  const finalStep = steps[steps.length - 1];
  const finalItem = finalStep.result;
  const finalN = finalItem.n;
  const finalPenalty = penalty(finalN);

  // --- Предупреждение о превышении лимита (в самом верху) ---
  if (anyTooExpensive){
    const overLimitSteps = steps
      .map((st, i) => ({ idx: i + 1, cost: st.cost, isFinal: st.isFinal }))
      .filter(st => st.cost > LEVEL_LIMIT);

    const chips = overLimitSteps.map(st => {
      const label = st.isFinal ? `Шаг ${st.idx} (наложение)` : `Шаг ${st.idx}`;
      return `<a class="step-chip" href="#result-step-${st.idx}" data-goto="${st.idx}">
        ${label} <span class="step-cost">${st.cost} ур.</span>
      </a>`;
    }).join('');

    const warning = document.createElement('div');
    warning.className = 'result-warning';
    warning.innerHTML = `
      <div class="result-warning-title">⛔ Превышен лимит 39 уровней</div>
      <div class="result-warning-text">Шаги, которые невозможно выполнить в режиме выживания:</div>
      <div class="result-warning-steps">${chips}</div>
    `;
    container.appendChild(warning);
  }

  // --- Шаги: только цель, жертва и результат ---
  steps.forEach((step, i) => {
    const div = document.createElement('div');
    const overLimit = step.cost > LEVEL_LIMIT;
    div.className = 'step' + (overLimit ? ' too-expensive' : '');
    div.id = `result-step-${i + 1}`;

    const title = step.isFinal
      ? `Шаг ${i + 1} — Наложение на предмет`
      : `Шаг ${i + 1} — Слияние`;
    const badge = overLimit ? '<span class="step-badge">⚠️ Слишком дорого!</span>' : '';

    let html = `<h3>${title}${badge}</h3>`;
    html += `<div class="row">🎯 Цель: <b>${itemLabel(step.target)}</b></div>`;
    html += `<div class="row">📖 Жертва: <b>${itemLabel(step.sacrifice)}</b></div>`;
    html += `<div class="result-row">✅ Результат: <b>${itemLabel(step.result)}</b></div>`;

    div.innerHTML = html;
    container.appendChild(div);
  });

  // --- Сводка внизу ---
  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.innerHTML =
    `Общий расход опыта: <b>${totalCost}</b> уровней<br>` +
    `Операций: <b>${steps.length}</b><br>` +
    (anyTooExpensive
      ? `<span style="color:var(--danger)">⚠️ Некоторые шаги превышают 39 уровней — в выживании невозможно!</span>`
      : `<span style="color:var(--ok)">✓ Все шаги в пределах 39 уровней. Решение оптимально по расходу опыта.</span>`) +
    `<div class="penalty-line">
       🛠️ Итоговый штраф предмета: n = <b>${finalN}</b> →
       штраф при следующем использовании = <b>${finalPenalty}</b>
     </div>`;
  container.appendChild(summary);

  document.getElementById('results').style.display = 'block';
  document.getElementById('results').scrollIntoView({ behavior:'smooth' });

  container.querySelectorAll('.step-chip[data-goto]').forEach(chip => {
    chip.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(`result-step-${chip.dataset.goto}`);
      if (target){
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.3s';
        target.style.boxShadow = '0 0 0 3px rgba(214, 69, 69, 0.4)';
        setTimeout(() => { target.style.boxShadow = ''; }, 1200);
      }
    });
  });

  if (anyTooExpensive){
    notify('Найдено минимальное решение, но часть операций превышает 39 уровней', 'warning');
  } else {
    notify(`Оптимальное решение: общий расход ${totalCost} уровней`, 'success', 4000);
  }
}

// ============================================================
//  СОБЫТИЯ
// ============================================================
document.getElementById('modeNovice').addEventListener('click', () => switchMode('novice'));
document.getElementById('modeExpert').addEventListener('click', () => switchMode('expert'));
document.getElementById('customAdd').addEventListener('click', addCustomEnchant);
document.getElementById('clearBooksBtn').addEventListener('click', clearAllBooks);

['customName','customLevel','customMult','customMax','customGroup'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', e => {
    if (e.key === 'Enter') addCustomEnchant();
  });
});

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
  if (!valid.length){
    notify('Добавьте хотя бы одно зачарование', 'warning');
    return;
  }
  // Проверка конфликтов
  for (let i = 0; i < valid.length; i++){
    for (let j = i + 1; j < valid.length; j++){
      const g1 = (valid[i].group || '').trim() || ENCHANT_TO_GROUP[valid[i].name];
      const g2 = (valid[j].group || '').trim() || ENCHANT_TO_GROUP[valid[j].name];
      if (g1 && g1 === g2){
        notify(`Чары «${valid[i].name}» и «${valid[j].name}» несовместимы. Удалите один из них.`, 'error', 6000);
        return;
      }
    }
  }
  const steps = calculateSteps(valid);
  renderResults(steps);
});

// ============================================================
//  ИНИЦИАЛИЗАЦИЯ
// ============================================================
renderItemGrid();
switchMode('novice');