'use strict';

const TRANSLATIONS = {
  ro: {
    welcome:        'Bine ai venit!',
    welcomeSub:     'Cum te numești? Vom personaliza experiența ta.',
    namePlaceholder:'Numele tău...',
    continue:       'Continuă',
    hi:             'Salut,',
    changeUser:     'Schimbă utilizatorul',
    deleteTitle:    'Ștergi obiectivul?',
    deleteMsg:      'Această acțiune nu poate fi anulată.',
    cancel:         'Anulează',
    delete:         'Șterge',
    addNew:           'Adaugă obiectiv nou',
    titleLabel:       'Titlu *',
    titlePlaceholder: 'Ex: Citesc 30 min/zi...',
    descLabel:        'Descriere',
    descPlaceholder:  'Detalii despre obiectiv...',
    categoryLabel:    'Categorie',
    priorityLabel:    'Prioritate',
    dueDateLabel:     'Data limită',
    optional:         '(opțional)',
    addGoal:          'Add Goal',
    low:              'Low',
    medium:           'Medium',
    high:             'High',
    total:          'Total',
    done:           'Finalizate',
    pending:        'Pending',
    goalsProgress:  'Goals Progress',
    habitsProgress: 'Habits Progress',
    resetsDaily:    'Se resetează zilnic',
    filterAll:       'Toate',
    filterCompleted: 'Finalizate',
    filterPending:   'În așteptare',
    filterGoals:     'Obiective',
    filterHabits:    'Obiceiuri',
    filterOverdue:   'Depășite',
    pageTitleAll:       'Toate obiectivele',
    pageTitleCompleted: 'Finalizate',
    pageTitlePending:   'În așteptare',
    pageTitleGoals:     'Obiectivele mele',
    pageTitleHabits:    'Obiceiurile mele',
    pageTitleOverdue:   'Obiective depășite',
    welcomeMsg:         'Bună ziua',
    searchPlaceholder: 'Caută obiective...',
    darkMode:  'Dark Mode',
    lightMode: 'Light Mode',
    complete:    'Completează',
    undo:        'Anulează',
    overdue:     'Depășit',
    statusPending:   'În așteptare',
    statusCompleted: 'Finalizat',
    statusOverdue:   'Depășit',
    dailyHabit:      'Zilnic · se resetează',
    itemSingular: 'obiectiv',
    itemPlural:   'obiective',
    emptyTitle:      'Niciun obiectiv adăugat încă',
    emptyMsg:        'Adaugă primul tău obiectiv sau obicei folosind formularul de mai sus.',
    emptySearchTitle:'Niciun rezultat găsit',
    emptySearchMsg:  'Încearcă un alt termen de căutare sau filtru.',
    emptyOverdueTitle:'Nicio întârziere!',
    emptyOverdueMsg: 'Toate obiectivele tale sunt la zi. Excelent!',
    errNameRequired:  'Introduceți un nume de utilizator.',
    errNameShort:     'Numele trebuie să aibă minim 2 caractere.',
    errTitleRequired: 'Titlul este obligatoriu.',
    errTitleShort:    'Titlul trebuie să aibă minim 3 caractere.',
    errDateInvalid:   'Data introdusă nu este validă.',
    toastAdded:     'Obiectiv adăugat cu succes!',
    toastDeleted:   'Obiectiv șters.',
    toastCompleted: 'Marcat ca finalizat! 🎉',
    toastUndo:      'Marcat ca în așteptare.',
    toastWelcome:   'Bine ai venit,',
    toastHabitReset:'Obiceiurile au fost resetate pentru ziua de azi.',
  },
  en: {
    welcome:        'Welcome!',
    welcomeSub:     "What's your name? We'll personalize your experience.",
    namePlaceholder:'Your name...',
    continue:       'Continue',
    hi:             'Hi,',
    changeUser:     'Change user',
    deleteTitle: 'Delete this item?',
    deleteMsg:   'This action cannot be undone.',
    cancel:      'Cancel',
    delete:      'Delete',
    addNew:           'Add new goal',
    titleLabel:       'Title *',
    titlePlaceholder: 'Ex: Read 30 min/day...',
    descLabel:        'Description',
    descPlaceholder:  'Details about your goal...',
    categoryLabel:    'Category',
    priorityLabel:    'Priority',
    dueDateLabel:     'Due date',
    optional:         '(optional)',
    addGoal:          'Add Goal',
    low:              'Low',
    medium:           'Medium',
    high:             'High',
    total:          'Total',
    done:           'Completed',
    pending:        'Pending',
    goalsProgress:  'Goals Progress',
    habitsProgress: 'Habits Progress',
    resetsDaily:    'Resets daily',
    filterAll:       'All',
    filterCompleted: 'Completed',
    filterPending:   'Pending',
    filterGoals:     'Goals',
    filterHabits:    'Habits',
    filterOverdue:   'Overdue',
    pageTitleAll:       'All items',
    pageTitleCompleted: 'Completed',
    pageTitlePending:   'Pending',
    pageTitleGoals:     'My Goals',
    pageTitleHabits:    'My Habits',
    pageTitleOverdue:   'Overdue items',
    welcomeMsg:         'Good day',
    searchPlaceholder: 'Search goals...',
    darkMode:  'Dark Mode',
    lightMode: 'Light Mode',
    complete:        'Complete',
    undo:            'Undo',
    overdue:         'Overdue',
    statusPending:   'Pending',
    statusCompleted: 'Completed',
    statusOverdue:   'Overdue',
    dailyHabit:      'Daily · resets',
    itemSingular: 'item',
    itemPlural:   'items',
    emptyTitle:       'No items added yet',
    emptyMsg:         'Add your first goal or habit using the form above.',
    emptySearchTitle: 'No results found',
    emptySearchMsg:   'Try a different search term or filter.',
    emptyOverdueTitle:'No overdue items!',
    emptyOverdueMsg:  "You're all caught up. Great work!",
    errNameRequired:  'Please enter a username.',
    errNameShort:     'Name must be at least 2 characters.',
    errTitleRequired: 'Title is required.',
    errTitleShort:    'Title must be at least 3 characters.',
    errDateInvalid:   'The date entered is not valid.',
    toastAdded:     'Goal added successfully!',
    toastDeleted:   'Item deleted.',
    toastCompleted: 'Marked as completed! 🎉',
    toastUndo:      'Marked as pending.',
    toastWelcome:   'Welcome,',
    toastHabitReset:'Habits have been reset for today.',
  },
  ru: {
    welcome:        'Добро пожаловать!',
    welcomeSub:     'Как вас зовут? Мы персонализируем ваш опыт.',
    namePlaceholder:'Ваше имя...',
    continue:       'Продолжить',
    hi:             'Привет,',
    changeUser:     'Сменить пользователя',
    deleteTitle: 'Удалить цель?',
    deleteMsg:   'Это действие нельзя отменить.',
    cancel:      'Отмена',
    delete:      'Удалить',
    addNew:           'Добавить новую цель',
    titleLabel:       'Название *',
    titlePlaceholder: 'Пример: читать 30 мин/день...',
    descLabel:        'Описание',
    descPlaceholder:  'Подробности о цели...',
    categoryLabel:    'Категория',
    priorityLabel:    'Приоритет',
    dueDateLabel:     'Крайний срок',
    optional:         '(необязательно)',
    addGoal:          'Добавить цель',
    low:              'Низкий',
    medium:           'Средний',
    high:             'Высокий',
    total:          'Всего',
    done:           'Выполнено',
    pending:        'В ожидании',
    goalsProgress:  'Прогресс целей',
    habitsProgress: 'Прогресс привычек',
    resetsDaily:    'Сбрасывается ежедневно',
    filterAll:       'Все',
    filterCompleted: 'Выполненные',
    filterPending:   'В ожидании',
    filterGoals:     'Цели',
    filterHabits:    'Привычки',
    filterOverdue:   'Просроченные',
    pageTitleAll:       'Все элементы',
    pageTitleCompleted: 'Выполненные',
    pageTitlePending:   'В ожидании',
    pageTitleGoals:     'Мои цели',
    pageTitleHabits:    'Мои привычки',
    pageTitleOverdue:   'Просроченные',
    welcomeMsg:         'Добрый день',
    searchPlaceholder: 'Поиск целей...',
    darkMode:  'Тёмная тема',
    lightMode: 'Светлая тема',
    complete:        'Выполнить',
    undo:            'Отменить',
    overdue:         'Просрочено',
    statusPending:   'В ожидании',
    statusCompleted: 'Выполнено',
    statusOverdue:   'Просрочено',
    dailyHabit:      'Ежедневно · сброс',
    itemSingular: 'элемент',
    itemPlural:   'элементов',
    emptyTitle:       'Ещё ничего не добавлено',
    emptyMsg:         'Добавьте первую цель или привычку с помощью формы выше.',
    emptySearchTitle: 'Ничего не найдено',
    emptySearchMsg:   'Попробуйте другой поисковый запрос или фильтр.',
    emptyOverdueTitle:'Нет просроченных!',
    emptyOverdueMsg:  'Все ваши задачи выполнены вовремя. Отлично!',
    errNameRequired:  'Введите имя пользователя.',
    errNameShort:     'Имя должно содержать минимум 2 символа.',
    errTitleRequired: 'Название обязательно.',
    errTitleShort:    'Название должно содержать минимум 3 символа.',
    errDateInvalid:   'Введённая дата недействительна.',
    toastAdded:     'Цель успешно добавлена!',
    toastDeleted:   'Элемент удалён.',
    toastCompleted: 'Отмечено как выполненное! 🎉',
    toastUndo:      'Отмечено как ожидающее.',
    toastWelcome:   'Добро пожаловать,',
    toastHabitReset:'Привычки сброшены на сегодня.',
  },
};

const KEY = {
  USER:         'gt_username',
  GOALS:        'gt_goals',
  THEME:        'gt_theme',
  LANG:         'gt_lang',
  FORM_OPEN:    'gt_form_open',
  LAST_DATE:    'gt_last_date',
};

const state = {
  goals:           [],
  username:        '',
  theme:           'light',
  lang:            'ro',
  activeFilter:    'all',
  searchQuery:     '',
  pendingDeleteId: null,
  formOpen:        true,
};

const storage = {
  get:    (key, fb = null)  => { try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : fb; } catch { return fb; } },
  set:    (key, val)        => { try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) { console.warn('Storage:', e); } },
  remove: (key)             => { try { localStorage.removeItem(key); } catch {} },
};

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const genId = () => `${Date.now()}-${Math.random().toString(36).slice(2,9)}`;
const todayStr = () => new Date().toISOString().slice(0, 10);

const formatDate = (str) => {
  if (!str) return null;
  return new Date(str + 'T00:00:00').toLocaleDateString(
    state.lang === 'ru' ? 'ru-RU' : state.lang === 'en' ? 'en-GB' : 'ro-RO',
    { day: 'numeric', month: 'short', year: 'numeric' }
  );
};

const isOverdue = (goal) => {
  if (goal.completed || !goal.dueDate) return false;
  const today = new Date(); today.setHours(0,0,0,0);
  return new Date(goal.dueDate + 'T00:00:00') < today;
};

const esc = (str) => String(str).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
const t = (key) => (TRANSLATIONS[state.lang] || TRANSLATIONS.ro)[key] || key;

const applyTranslations = () => {
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t(key)) el.textContent = t(key);
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t(key)) el.placeholder = t(key);
  });
  $$('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (t(key)) el.title = t(key);
  });
  $$('[data-i18n-seg]').forEach(el => {
    const key = el.dataset.i18nSeg;
    if (t(key)) {
      const svg = el.querySelector('svg');
      el.textContent = t(key);
      if (svg) el.prepend(svg);
    }
  });

  const themeLabelEl = $('#theme-label');
  if (themeLabelEl) themeLabelEl.textContent = state.theme === 'dark' ? t('lightMode') : t('darkMode');
  document.documentElement.lang = state.lang;
};

const setLanguage = (lang) => {
  if (!TRANSLATIONS[lang]) return;
  state.lang = lang;
  storage.set(KEY.LANG, lang);
  $$('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  applyTranslations();
  renderUserInfo();
  renderGoals();
  updateStats();
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  const iconEl  = $('#theme-icon');
  const labelEl = $('#theme-label');
  if (iconEl)  iconEl.textContent  = theme === 'dark' ? '☀' : '🌙';
  if (labelEl) labelEl.textContent = theme === 'dark' ? t('lightMode') : t('darkMode');
  state.theme = theme;
  storage.set(KEY.THEME, theme);
};

const checkDailyHabitReset = () => {
  const lastDate = storage.get(KEY.LAST_DATE, null);
  const today    = todayStr();

  if (lastDate !== today) {
    let resetCount = 0;
    state.goals.forEach(g => {
      if (g.category === 'habit' && g.completed) {
        g.completed  = false;
        g.completedAt = null;
        resetCount++;
      }
    });
    storage.set(KEY.LAST_DATE, today);
    if (resetCount > 0) {
      persistGoals();
      if (lastDate !== null) toast(t('toastHabitReset'), 'info');
    }
  }
};

const toast = (() => {
  let container = null;
  const getContainer = () => {
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    return container;
  };
  return (msg, type = 'success', duration = 3200) => {
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    const icons = { success: '✓', error: '✕', info: 'ℹ', habit: '✦' };
    el.innerHTML = `<span aria-hidden="true">${icons[type] || '•'}</span> ${msg}`;
    getContainer().appendChild(el);
    setTimeout(() => {
      el.classList.add('fade-out');
      el.addEventListener('animationend', () => el.remove(), { once: true });
    }, duration);
  };
})();

const setFieldError = (elId, msg) => {
  const el = $(`#${elId}`);
  if (el) el.textContent = msg || '';
};
const clearFormErrors = () => { setFieldError('title-error', ''); setFieldError('date-error', ''); };

const validate = {
  username(v) { const s = v.trim(); return (!s) ? t('errNameRequired') : (s.length < 2) ? t('errNameShort') : null; },
  title(v) { const s = v.trim(); return (!s) ? t('errTitleRequired') : (s.length < 3) ? t('errTitleShort') : null; },
  date(v) { return (!v) ? null : (isNaN(new Date(v + 'T00:00:00').getTime()) ? t('errDateInvalid') : null); },
};

const renderUserInfo = () => {
  const name = state.username || t('filterAll');
  const avatarEl    = $('#user-avatar');
  const usernameEl  = $('#sidebar-username');
  const welcomeMsgEl = $('#welcome-msg');
  if (avatarEl)    avatarEl.textContent   = name.charAt(0).toUpperCase();
  if (usernameEl)  usernameEl.textContent = name;
  if (welcomeMsgEl) welcomeMsgEl.textContent = `${t('welcomeMsg')}, ${name}!`;
};

const saveUsername = () => {
  const input = $('#username-input');
  const error = validate.username(input.value);
  if (error) { setFieldError('username-error', error); input.focus(); return; }

  const name = input.value.trim();
  state.username = name;
  storage.set(KEY.USER, name);
  $('#onboarding-overlay').classList.add('hidden');
  renderUserInfo();
  toast(`${t('toastWelcome')} ${name}!`, 'success');
};

const updateFormForCategory = (category) => {
  const dueDateField = $('#due-date-field');
  if (!dueDateField) return;
  if (category === 'habit') {
    dueDateField.classList.add('hidden-field');
    const dateInput = $('#goal-date');
    if (dateInput) dateInput.value = '';
  } else {
    dueDateField.classList.remove('hidden-field');
  }
};

const getSegValue = (el) => ($('.seg-btn.active', el) || {}).dataset?.value || null;

const initSegControl = (el, onChange) => {
  el.addEventListener('click', (e) => {
    const btn = e.target.closest('.seg-btn');
    if (!btn) return;
    $$('.seg-btn', el).forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    if (onChange) onChange(btn.dataset.value);
  });
};

const persistGoals = () => storage.set(KEY.GOALS, state.goals);

const addGoal = () => {
  clearFormErrors();
  const titleInput = $('#goal-title');
  const dateInput  = $('#goal-date');
  const category   = getSegValue($('#category-control')) || 'goal';

  const titleErr = validate.title(titleInput.value);
  const dateErr  = category === 'goal' ? validate.date(dateInput.value) : null;

  if (titleErr) { setFieldError('title-error', titleErr); titleInput.focus(); return; }
  if (dateErr)  { setFieldError('date-error', dateErr); return; }

  const goal = {
    id:          genId(),
    title:       titleInput.value.trim(),
    description: ($('#goal-desc').value || '').trim(),
    category,
    priority:    getSegValue($('#priority-control')) || 'medium',
    dueDate:     category === 'goal' ? (dateInput.value || null) : null,
    completed:   false,
    completedAt: null,
    createdAt:   new Date().toISOString(),
  };

  state.goals.unshift(goal);
  persistGoals();
  resetForm();
  renderGoals();
  updateStats();
  toast(t('toastAdded'), 'success');
};

const deleteGoal = (id) => {
  state.pendingDeleteId = id;
  $('#delete-overlay').classList.remove('hidden');
};

const confirmDelete = () => {
  if (!state.pendingDeleteId) return;
  state.goals = state.goals.filter(g => g.id !== state.pendingDeleteId);
  state.pendingDeleteId = null;
  $('#delete-overlay').classList.add('hidden');
  persistGoals();
  renderGoals();
  updateStats();
  toast(t('toastDeleted'), 'info');
};

const toggleComplete = (id) => {
  const goal = state.goals.find(g => g.id === id);
  if (!goal) return;
  goal.completed  = !goal.completed;
  goal.completedAt = goal.completed ? new Date().toISOString() : null;
  persistGoals();
  renderGoals();
  updateStats();
  toast(goal.completed ? t('toastCompleted') : t('toastUndo'), goal.category === 'habit' && goal.completed ? 'habit' : (goal.completed ? 'success' : 'info'));
};

const resetForm = () => {
  $('#goal-title').value = '';
  $('#goal-desc').value  = '';
  $('#goal-date').value  = '';
  clearFormErrors();
  $$('.seg-btn', $('#category-control')).forEach(b => {
    const isTarget = b.dataset.value === 'goal';
    b.classList.toggle('active', isTarget);
    b.setAttribute('aria-pressed', isTarget);
  });
  $$('.seg-btn', $('#priority-control')).forEach(b => {
    const isTarget = b.dataset.value === 'medium';
    b.classList.toggle('active', isTarget);
    b.setAttribute('aria-pressed', isTarget);
  });
  updateFormForCategory('goal');
};

const toggleForm = () => {
  state.formOpen = !state.formOpen;
  const body    = $('#form-body');
  const chevron = $('#form-chevron');
  body.classList.toggle('hidden', !state.formOpen);
  chevron.classList.toggle('rotated', state.formOpen);
  $('#form-toggle-header').setAttribute('aria-expanded', state.formOpen);
  storage.set(KEY.FORM_OPEN, state.formOpen);
};

const animateBar = (barEl, pctEl, pct) => {
  if (!barEl || !pctEl) return;
  
  barEl.style.transform = `scaleX(${pct / 100})`;

  const current = parseInt(pctEl.textContent) || 0;
  const diff    = pct - current;
  if (diff === 0) return;

  const duration = 600; 
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    pctEl.textContent = `${Math.round(current + (diff * progress))}%`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);

  barEl.classList.remove('glow');
  void barEl.offsetWidth; 
  barEl.classList.add('glow');
  setTimeout(() => barEl.classList.remove('glow'), 700);
};

const updateStats = () => {
  const all       = state.goals;
  const total     = all.length;
  const completed = all.filter(g => g.completed).length;
  const pending   = total - completed;

  const safeSet = (id, val) => { const el = $(`#${id}`); if (el) el.textContent = val; };
  safeSet('stat-total',   total);
  safeSet('stat-done',    completed);
  safeSet('stat-pending', pending);

  const goals      = all.filter(g => g.category === 'goal');
  const goalsDone  = goals.filter(g => g.completed).length;
  const goalsPct   = goals.length > 0 ? Math.round((goalsDone / goals.length) * 100) : 0;
  animateBar($('#goals-bar'), $('#goals-pct'), goalsPct);

  const habits     = all.filter(g => g.category === 'habit');
  const habitsDone = habits.filter(g => g.completed).length;
  const habitsPct  = habits.length > 0 ? Math.round((habitsDone / habits.length) * 100) : 0;
  animateBar($('#habits-bar'), $('#habits-pct'), habitsPct);

  const overdueN = state.goals.filter(g => {
    if (g.completed) return false;
    if (g.category === 'goal')  return isOverdue(g);
    if (g.category === 'habit') return !g.completed;
    return false;
  }).length;
  
  const badge = $('#overdue-badge');
  if (badge) {
    badge.textContent = overdueN;
    badge.style.display = overdueN > 0 ? 'flex' : 'none';
  }
};

const createGoalCard = (goal) => {
  const el          = document.createElement('article');
  const overdueGoal = goal.category === 'goal' && isOverdue(goal);
  const overdueHabit= goal.category === 'habit' && !goal.completed && state.activeFilter === 'overdue';
  const isOver      = overdueGoal || overdueHabit;

  el.className = [
    'goal-card',
    `category-${goal.category}`,
    `priority-${goal.priority}`,
    goal.completed ? 'completed' : '',
    isOver ? 'overdue-card' : '',
  ].filter(Boolean).join(' ');
  el.dataset.id = goal.id;

  let statusClass = 'status-pending';
  let statusLabel = t('statusPending');
  if (goal.completed) { statusClass = 'status-completed'; statusLabel = t('statusCompleted'); }
  else if (isOver)    { statusClass = 'status-overdue';   statusLabel = t('statusOverdue'); }

  const dateHtml = goal.dueDate && goal.category === 'goal' ? `
    <div class="card-meta">
      <span class="card-date${overdueGoal ? ' overdue-date' : ''}">
        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        ${overdueGoal ? '⚠ ' : ''}${formatDate(goal.dueDate)}
      </span>
    </div>` : '';

  const habitNoteHtml = goal.category === 'habit' ? `
    <div class="card-meta">
      <span class="card-habit-note">
        <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/>
        </svg>
        ${t('dailyHabit')}
      </span>
    </div>` : '';

  const overdueBadge = isOver && !goal.completed ? `<span class="badge badge-overdue">${t('overdue')}</span>` : '';

  el.innerHTML = `
    <div class="card-top">
      <div class="card-badges">
        <span class="badge badge-${goal.category}">${goal.category === 'goal' ? 'Goal' : 'Habit'}</span>
        <span class="badge badge-priority-${goal.priority}">${t(goal.priority)}</span>
        ${overdueBadge}
      </div>
      <button class="card-delete-btn" data-action="delete" aria-label="${t('delete')} ${esc(goal.title)}">
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14H6L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4h6v2"/>
        </svg>
      </button>
    </div>
    <div class="card-body">
      <h3 class="card-title">${esc(goal.title)}</h3>
      ${goal.description ? `<p class="card-desc">${esc(goal.description)}</p>` : ''}
    </div>
    ${dateHtml}
    ${habitNoteHtml}
    <div class="card-bottom">
      <div class="card-status ${statusClass}">
        <span class="status-dot" aria-hidden="true"></span>
        ${statusLabel}
      </div>
      <button class="card-complete-btn" data-action="toggle" aria-pressed="${goal.completed}">
        <svg aria-hidden="true" class="check-svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        ${goal.completed ? t('undo') : t('complete')}
      </button>
    </div>
  `;
  return el;
};

const PAGE_TITLE_KEYS = { all: 'pageTitleAll', completed: 'pageTitleCompleted', pending: 'pageTitlePending', goal: 'pageTitleGoals', habit: 'pageTitleHabits', overdue: 'pageTitleOverdue' };

const renderGoals = () => {
  let filtered = [...state.goals];
  switch (state.activeFilter) {
    case 'completed': filtered = filtered.filter(g => g.completed); break;
    case 'pending':   filtered = filtered.filter(g => !g.completed); break;
    case 'goal':      filtered = filtered.filter(g => g.category === 'goal'); break;
    case 'habit':     filtered = filtered.filter(g => g.category === 'habit'); break;
    case 'overdue':
      filtered = filtered.filter(g => {
        if (g.completed) return false;
        if (g.category === 'goal')  return isOverdue(g);
        if (g.category === 'habit') return !g.completed;
        return false;
      });
      break;
    default: break;
  }

  const q = state.searchQuery.toLowerCase().trim();
  if (q) {
    filtered = filtered.filter(g => g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q));
  }

  const grid = $('#goals-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const listTitleEl = $('#list-title');
  const listCountEl = $('#list-count');
  if (listTitleEl) listTitleEl.textContent = t(PAGE_TITLE_KEYS[state.activeFilter] || 'pageTitleAll');
  if (listCountEl) {
    const n = filtered.length;
    listCountEl.textContent = `${n} ${n === 1 ? t('itemSingular') : t('itemPlural')}`;
  }

  const emptyEl    = $('#empty-state');
  const emptyTitle = $('#empty-title');
  const emptyMsg   = $('#empty-msg');
  const hasGoals   = state.goals.length > 0;
  const hasResults = filtered.length > 0;

  if (!hasResults) {
    if (emptyEl) emptyEl.classList.remove('hidden');
    if (!hasGoals) {
      if (emptyTitle) emptyTitle.textContent = t('emptyTitle');
      if (emptyMsg)   emptyMsg.textContent   = t('emptyMsg');
    } else if (state.activeFilter === 'overdue') {
      if (emptyTitle) emptyTitle.textContent = t('emptyOverdueTitle');
      if (emptyMsg)   emptyMsg.textContent   = t('emptyOverdueMsg');
    } else {
      if (emptyTitle) emptyTitle.textContent = t('emptySearchTitle');
      if (emptyMsg)   emptyMsg.textContent   = t('emptySearchMsg');
    }
    return;
  }

  if (emptyEl) emptyEl.classList.add('hidden');
  const frag = document.createDocumentFragment();
  filtered.forEach(goal => frag.appendChild(createGoalCard(goal)));
  grid.appendChild(frag);
};

$('#goals-grid').addEventListener('click', (e) => {
  const actionEl = e.target.closest('[data-action]');
  if (!actionEl) return;
  const card = actionEl.closest('.goal-card');
  if (!card) return;
  const { id } = card.dataset;
  if (actionEl.dataset.action === 'delete') deleteGoal(id);
  if (actionEl.dataset.action === 'toggle') toggleComplete(id);
});

$$('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    $$('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    state.activeFilter = item.dataset.filter;
    renderGoals();
    if (window.innerWidth <= 680) closeSidebar();
  });
});

initSegControl($('#category-control'), (val) => updateFormForCategory(val));
initSegControl($('#priority-control'));

$('#add-goal-btn').addEventListener('click', addGoal);
$('#goal-title').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addGoal(); } });

$('#form-toggle-header').addEventListener('click', toggleForm);
$('#form-toggle-header').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleForm(); }
});

let searchTimer = null;
$('#search-input').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { state.searchQuery = e.target.value; renderGoals(); }, 200);
});

$('#save-username-btn').addEventListener('click', saveUsername);
$('#username-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') saveUsername(); });
$('#change-user-btn').addEventListener('click', () => {
  storage.remove(KEY.USER);
  state.username = '';
  const inp = $('#username-input');
  if (inp) { inp.value = ''; setFieldError('username-error', ''); }
  $('#onboarding-overlay').classList.remove('hidden');
  setTimeout(() => inp && inp.focus(), 150);
});

$('#confirm-delete-btn').addEventListener('click', confirmDelete);
$('#cancel-delete-btn').addEventListener('click', () => {
  state.pendingDeleteId = null;
  $('#delete-overlay').classList.add('hidden');
});
$('#delete-overlay').addEventListener('click', (e) => {
  if (e.target === $('#delete-overlay')) {
    state.pendingDeleteId = null;
    $('#delete-overlay').classList.add('hidden');
  }
});

$('#theme-toggle').addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));

$('#lang-selector').addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) setLanguage(btn.dataset.lang);
});

const openSidebar  = () => {
  const sb = $('.sidebar');
  if (sb) sb.classList.add('open');
  const ov = $('#sidebar-overlay');
  if (ov) ov.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};
const closeSidebar = () => {
  const sb = $('.sidebar');
  if (sb) sb.classList.remove('open');
  const ov = $('#sidebar-overlay');
  if (ov) ov.classList.add('hidden');
  document.body.style.overflow = '';
};
$('#hamburger-btn').addEventListener('click', openSidebar);
$('#sidebar-overlay').addEventListener('click', closeSidebar);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const delOv = $('#delete-overlay');
    if (delOv && !delOv.classList.contains('hidden')) {
      state.pendingDeleteId = null;
      delOv.classList.add('hidden');
    }
    closeSidebar();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const si = $('#search-input');
    if (si) si.focus();
  }
});

const init = () => {
  const savedLang = storage.get(KEY.LANG, 'ro');
  state.lang = TRANSLATIONS[savedLang] ? savedLang : 'ro';
  $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
  applyTranslations();

  applyTheme(storage.get(KEY.THEME, 'light'));
  state.goals = storage.get(KEY.GOALS, []);
  checkDailyHabitReset();

  const formSaved = storage.get(KEY.FORM_OPEN, true);
  state.formOpen  = formSaved;
  $('#form-toggle-header').setAttribute('aria-expanded', state.formOpen);
  if (!formSaved) {
    const fb = $('#form-body');
    const fc = $('#form-chevron');
    if (fb) fb.classList.add('hidden');
    if (fc) fc.classList.remove('rotated');
  }

  const savedUser = storage.get(KEY.USER, '');
  if (!savedUser) {
    $('#onboarding-overlay').classList.remove('hidden');
    setTimeout(() => { const i = $('#username-input'); if (i) i.focus(); }, 300);
  } else {
    state.username = savedUser;
    renderUserInfo();
  }

  renderGoals();
  updateStats();
  updateFormForCategory('goal');
};

init();