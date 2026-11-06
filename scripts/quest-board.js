const MODULE_ID = "quest-board";
const SETTING_KEY = "boards";
const APPEARANCE_KEY = "appearance";
const TEMPLATES_KEY = "templates";
const ARCHIVE_KEY = "archive";
const DEFAULT_APPEARANCE = {
  theme: "medieval",
  customImages: false,
  boardImage: "",
  paperImage: "",
  sealImage: "",
  pinImage: "",
  sceneIcon: "",
  hidePin: false,
  hideCategoryIcons: false
};

function qbLocalize(key) {
  return globalThis.game?.i18n?.localize(`QUEST-BOARD.${key}`) ?? key;
}

function qbFormat(key, data = {}) {
  return globalThis.game?.i18n?.format(`QUEST-BOARD.${key}`, data) ?? key;
}

const QUEST_CATEGORIES = [
  { id: "main", label: "CategoryMain", description: "CategoryMainDescription", color: "gold", icon: `modules/${MODULE_ID}/assets/category-icons/main-story.png` },
  { id: "orders", label: "CategoryOrders", description: "CategoryOrdersDescription", color: "blue", icon: `modules/${MODULE_ID}/assets/category-icons/contracts.png` },
  { id: "bounty", label: "CategoryBounty", description: "CategoryBountyDescription", color: "red", icon: `modules/${MODULE_ID}/assets/category-icons/bounty.png` },
  { id: "exploration", label: "CategoryExploration", description: "CategoryExplorationDescription", color: "purple", icon: `modules/${MODULE_ID}/assets/category-icons/exploration.png` },
  { id: "other", label: "CategoryOther", description: "CategoryOtherDescription", color: "gray", icon: `modules/${MODULE_ID}/assets/category-icons/other.png` }
];

function getQuestCategory(id) {
  return QUEST_CATEGORIES.find(category => category.id === id) ?? null;
}


const THEME_SCENE_ICONS = {
  medieval: `modules/${MODULE_ID}/assets/scene-icons/medieval.webp`,
  "dark-fantasy": `modules/${MODULE_ID}/assets/scene-icons/dark-fantasy.webp`,
  "high-fantasy": `modules/${MODULE_ID}/assets/scene-icons/high-fantasy.webp`,
  "sci-fi": `modules/${MODULE_ID}/assets/scene-icons/sci-fi.webp`,
  cyberpunk: `modules/${MODULE_ID}/assets/scene-icons/cyberpunk.webp`,
  solarpunk: `modules/${MODULE_ID}/assets/scene-icons/solarpunk.webp`,
  steampunk: `modules/${MODULE_ID}/assets/scene-icons/steampunk.webp`,
  modern: `modules/${MODULE_ID}/assets/scene-icons/modern.webp`,
  "post-apocalyptic": `modules/${MODULE_ID}/assets/scene-icons/post-apocalyptic.webp`,
  "gothic-horror": `modules/${MODULE_ID}/assets/scene-icons/gothic-horror.webp`,
  "wild-west": `modules/${MODULE_ID}/assets/scene-icons/wild-west.webp`
}

const UNPUBLISHED_EYE_IMAGES = {
  medieval: `modules/${MODULE_ID}/assets/unpublished-eyes/medieval-high-fantasy.webp`,
  "high-fantasy": `modules/${MODULE_ID}/assets/unpublished-eyes/medieval-high-fantasy.webp`,
  "dark-fantasy": `modules/${MODULE_ID}/assets/unpublished-eyes/dark-fantasy-gothic.webp`,
  "gothic-horror": `modules/${MODULE_ID}/assets/unpublished-eyes/dark-fantasy-gothic.webp`,
  "sci-fi": `modules/${MODULE_ID}/assets/unpublished-eyes/sci-fi-cyberpunk.webp`,
  cyberpunk: `modules/${MODULE_ID}/assets/unpublished-eyes/sci-fi-cyberpunk.webp`,
  solarpunk: `modules/${MODULE_ID}/assets/unpublished-eyes/solarpunk.webp`,
  modern: `modules/${MODULE_ID}/assets/unpublished-eyes/modern.webp`,
  "post-apocalyptic": `modules/${MODULE_ID}/assets/unpublished-eyes/post-apocalyptic-wild-west.webp`,
  "wild-west": `modules/${MODULE_ID}/assets/unpublished-eyes/post-apocalyptic-wild-west.webp`,
  steampunk: `modules/${MODULE_ID}/assets/unpublished-eyes/medieval-high-fantasy.webp`
};

const THEME_PAPER_IMAGES = {
  medieval: `modules/${MODULE_ID}/assets/papers/medieval-fantasy.webp`,
  "dark-fantasy": `modules/${MODULE_ID}/assets/papers/dark-fantasy.webp`,
  "high-fantasy": `modules/${MODULE_ID}/assets/papers/high-fantasy.webp`,
  "sci-fi": `modules/${MODULE_ID}/assets/papers/sci-fi.webp`,
  cyberpunk: `modules/${MODULE_ID}/assets/papers/cyberpunk.webp`,
  solarpunk: `modules/${MODULE_ID}/assets/papers/solarpunk.webp`,
  steampunk: `modules/${MODULE_ID}/assets/papers/steampunk.webp`,
  modern: `modules/${MODULE_ID}/assets/papers/modern.webp`,
  "post-apocalyptic": `modules/${MODULE_ID}/assets/papers/post-apocalyptic.webp`,
  "gothic-horror": `modules/${MODULE_ID}/assets/papers/gothic-horror.webp`,
  "wild-west": `modules/${MODULE_ID}/assets/papers/wild-west.webp`
};

const THEME_SEAL_IMAGES = {
  medieval: `modules/${MODULE_ID}/assets/seals/medieval-fantasy.webp`,
  "dark-fantasy": `modules/${MODULE_ID}/assets/seals/dark-fantasy.webp`,
  "high-fantasy": `modules/${MODULE_ID}/assets/seals/high-fantasy.webp`,
  "sci-fi": `modules/${MODULE_ID}/assets/seals/sci-fi.webp`,
  cyberpunk: `modules/${MODULE_ID}/assets/seals/cyberpunk.webp`,
  solarpunk: `modules/${MODULE_ID}/assets/seals/solarpunk.webp`,
  steampunk: `modules/${MODULE_ID}/assets/seals/steampunk.webp`,
  modern: `modules/${MODULE_ID}/assets/seals/modern.webp`,
  "post-apocalyptic": `modules/${MODULE_ID}/assets/seals/post-apocalyptic.webp`,
  "gothic-horror": `modules/${MODULE_ID}/assets/seals/gothic-horror.webp`,
  "wild-west": `modules/${MODULE_ID}/assets/seals/wild-west.webp`
};

const THEME_BOARD_IMAGES = {
  medieval: `modules/${MODULE_ID}/assets/boards/medieval-fantasy.webp`,
  "dark-fantasy": `modules/${MODULE_ID}/assets/boards/dark-fantasy.webp`,
  "high-fantasy": `modules/${MODULE_ID}/assets/boards/high-fantasy.webp`,
  "sci-fi": `modules/${MODULE_ID}/assets/boards/sci-fi.webp`,
  cyberpunk: `modules/${MODULE_ID}/assets/boards/cyberpunk.webp`,
  solarpunk: `modules/${MODULE_ID}/assets/boards/solarpunk.webp`,
  steampunk: `modules/${MODULE_ID}/assets/boards/steampunk.webp`,
  modern: `modules/${MODULE_ID}/assets/boards/modern.webp`,
  "post-apocalyptic": `modules/${MODULE_ID}/assets/boards/post-apocalyptic.webp`,
  "gothic-horror": `modules/${MODULE_ID}/assets/boards/gothic-horror.webp`,
  "wild-west": `modules/${MODULE_ID}/assets/boards/wild-west.webp`
};
;

const THEME_FASTENER_IMAGES = {
  medieval: `modules/${MODULE_ID}/assets/fasteners/nail.webp`,
  "dark-fantasy": `modules/${MODULE_ID}/assets/fasteners/nail.webp`,
  "high-fantasy": `modules/${MODULE_ID}/assets/fasteners/nail.webp`,
  "sci-fi": "",
  cyberpunk: "",
  solarpunk: "",
  steampunk: `modules/${MODULE_ID}/assets/fasteners/bolt.webp`,
  modern: `modules/${MODULE_ID}/assets/fasteners/pin.webp`,
  "post-apocalyptic": `modules/${MODULE_ID}/assets/fasteners/nail.webp`,
  "gothic-horror": `modules/${MODULE_ID}/assets/fasteners/nail.webp`,
  "wild-west": `modules/${MODULE_ID}/assets/fasteners/nail.webp`
};

const THEME_ASSETS = {
  medieval: {
    boardImage: `modules/${MODULE_ID}/assets/board-placeholder.svg`,
    paperImage: `modules/${MODULE_ID}/assets/papers/parchment-large.webp`,
    sealImage: `modules/${MODULE_ID}/assets/seals/wax-red.svg`,
    pinImage: `modules/${MODULE_ID}/assets/fasteners/medieval.svg`,
    sceneIcon: `modules/${MODULE_ID}/assets/scene-icons/medieval.webp`
  },
  steampunk: {
    boardImage: `modules/${MODULE_ID}/assets/board-placeholder.svg`,
    paperImage: `modules/${MODULE_ID}/assets/papers/parchment-large.webp`,
    sealImage: `modules/${MODULE_ID}/assets/seals/wax-red.svg`,
    pinImage: `modules/${MODULE_ID}/assets/fasteners/steampunk.svg`,
    sceneIcon: `modules/${MODULE_ID}/assets/scene-icons/steampunk.webp`
  },
  cyberpunk: {
    boardImage: `modules/${MODULE_ID}/assets/board-placeholder.svg`,
    paperImage: `modules/${MODULE_ID}/assets/papers/parchment-large.webp`,
    sealImage: `modules/${MODULE_ID}/assets/seals/wax-red.svg`,
    pinImage: `modules/${MODULE_ID}/assets/fasteners/cyberpunk.svg`,
    sceneIcon: `modules/${MODULE_ID}/assets/scene-icons/cyberpunk.webp`
  }
};

function getAppearance() {
  const stored = game.settings.get(MODULE_ID, APPEARANCE_KEY) ?? {};
  const appearance = { ...DEFAULT_APPEARANCE, ...stored };
  // Migrate the former separate small/open announcement images to one shared image.
  // Prefer the former open/large image; fall back to the former small image.
  if (!String(stored.paperImage ?? "").trim()) {
    appearance.paperImage = String(stored.largePaper ?? "").trim() || String(stored.smallPaper ?? "").trim();
  }
  delete appearance.smallPaper;
  delete appearance.largePaper;
  const supportedThemes = [
    "medieval", "dark-fantasy", "high-fantasy", "sci-fi",
    "cyberpunk", "steampunk", "modern", "post-apocalyptic",
    "gothic-horror", "wild-west", "solarpunk"
  ];
  if (!supportedThemes.includes(appearance.theme)) appearance.theme = "medieval";
  // Migrate legacy custom-theme paths into the new per-item override mode.
  if (stored.theme === "custom") {
    appearance.theme = "medieval";
    appearance.customImages = Boolean(
      stored.boardImage || stored.paperImage || stored.largePaper || stored.smallPaper ||
      stored.sealImage || stored.pinImage
    );
  }
  return appearance;
}

function getThemeBase(theme) {
  const aliases = {
    medieval: "medieval",
    "dark-fantasy": "medieval",
    "high-fantasy": "medieval",
    "sci-fi": "cyberpunk",
    cyberpunk: "cyberpunk",
    steampunk: "steampunk",
    modern: "cyberpunk",
    "post-apocalyptic": "medieval",
    "gothic-horror": "medieval",
    "wild-west": "medieval",
    solarpunk: "cyberpunk"
  };
  return aliases[theme] ?? "medieval";
}

function resolveAppearanceAsset(appearance, key) {
  const themeDefaults = THEME_ASSETS[getThemeBase(appearance.theme)] ?? THEME_ASSETS.medieval;
  if (key === "boardImage") {
    return THEME_BOARD_IMAGES[appearance.theme] ?? THEME_BOARD_IMAGES.medieval;
  }
  if (key === "pinImage" && appearance.customImages && appearance.hidePin) return "";
  if (key === "pinImage" && !appearance.customImages) {
    return THEME_FASTENER_IMAGES[appearance.theme] ?? THEME_FASTENER_IMAGES.medieval;
  }
  if (appearance.customImages && String(appearance[key] ?? "").trim()) {
    return String(appearance[key]).trim();
  }
  if (key === "sceneIcon") {
    return THEME_SCENE_ICONS[appearance.theme] ?? THEME_SCENE_ICONS.medieval;
  }
  if (key === "sealImage") {
    return THEME_SEAL_IMAGES[appearance.theme] ?? THEME_SEAL_IMAGES.medieval;
  }
  if (key === "paperImage") {
    return THEME_PAPER_IMAGES[appearance.theme] ?? THEME_PAPER_IMAGES.medieval;
  }
  return themeDefaults[key];
}

function resolveQuestAsset(appearance, quest, key) {
  // The global fastener toggle applies to every theme and every image mode.
  if (key === "pinImage" && appearance.hidePin) return "";
  if (key === "paperImage" && String(quest?.customPaperImage ?? "").trim()) {
    return String(quest.customPaperImage).trim();
  }
  if (key === "sealImage" && String(quest?.customSealImage ?? "").trim()) {
    return String(quest.customSealImage).trim();
  }
  if (!quest?.theme) return resolveAppearanceAsset(appearance, key);
  if (key === "pinImage" && appearance.customImages && appearance.hidePin) return "";
  if (key === "pinImage") {
    return THEME_FASTENER_IMAGES[quest.theme] ?? THEME_FASTENER_IMAGES.medieval;
  }
  if (key === "paperImage") {
    return THEME_PAPER_IMAGES[quest.theme] ?? THEME_PAPER_IMAGES.medieval;
  }
  if (key === "sealImage") {
    return THEME_SEAL_IMAGES[quest.theme] ?? THEME_SEAL_IMAGES.medieval;
  }
  const themeDefaults = THEME_ASSETS[getThemeBase(quest.theme)] ?? THEME_ASSETS.medieval;
  return themeDefaults[key];
}

function themeClass(theme) {
  const exactTheme = String(theme || "medieval");
  const baseTheme = getThemeBase(exactTheme);
  return `qb-theme-${baseTheme} qb-theme-${exactTheme}`;
}

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

function getBoards() {
  return foundry.utils.deepClone(game.settings.get(MODULE_ID, SETTING_KEY) ?? []);
}

async function saveBoards(boards) {
  if (!game.user.isGM) throw new Error("Only the GM can modify Quest Board data.");
  await game.settings.set(MODULE_ID, SETTING_KEY, boards);
}

function getBoard(boardId) {
  return getBoards().find(board => board.id === boardId) ?? null;
}
function getTemplates() { return foundry.utils.deepClone(game.settings.get(MODULE_ID, TEMPLATES_KEY) ?? []); }
function getArchive() { return foundry.utils.deepClone(game.settings.get(MODULE_ID, ARCHIVE_KEY) ?? []); }
async function saveArchive(entries) { await game.settings.set(MODULE_ID, ARCHIVE_KEY, entries); }
function calendarExpiry(days, from = game.time.worldTime) {
  const calendar = game.time?.calendar;
  if (!calendar || !Number.isFinite(Number(days)) || Number(days) <= 0) return null;
  try { return calendar.componentsToTime(calendar.add(from, { day: Number(days) })); }
  catch (error) { console.warn(`${MODULE_ID} | Calendar date calculation failed`, error); return null; }
}
async function archiveExpiredQuests() {
  if (!game.user?.isGM || !game.time?.calendar) return;
  const boards = getBoards();
  const archive = getArchive();
  let changed = false;
  for (const board of boards) {
    const remaining = [];
    for (const note of (board.notes ?? [])) {
      if (note.published && note.status !== "completed" && note.status !== "failed" && note.status !== "expired" && note.status !== "withdrawn" && Number.isFinite(note.expiresAt) && game.time.worldTime >= note.expiresAt) {
        archive.push({ id: foundry.utils.randomID(), boardId: board.id, boardName: board.name, quest: note, status: "expired", archivedAt: game.time.worldTime });
        changed = true;
      } else remaining.push(note);
    }
    board.notes = remaining;
  }
  if (changed) { await saveBoards(boards); await saveArchive(archive); await refreshOpenBoardWindows(); }
}


function notifyError(error) {
  console.error(`${MODULE_ID} |`, error);
  ui.notifications.error(error?.message ?? String(error));
}

function openBoard(boardId, source = "manager") {
  const board = getBoard(boardId);
  if (!board) return ui.notifications.warn(qbLocalize("NoBoardFound"));
  // Hidden boards are excluded from the player manager, but remain accessible
  // through their placed scene tile.
  if (!game.user.isGM && board.showToPlayers === false && source !== "tile") {
    return ui.notifications.warn(qbLocalize("BoardNotAvailable"));
  }
  new QuestBoardWindow({ boardId, openedFromTile: source === "tile" }).render({ force: true });
}

const openBoardWindows = new Set();

async function refreshOpenBoardWindows(boardId = null) {
  const renders = [];
  for (const app of openBoardWindows) {
    if (boardId && app.boardId !== boardId) continue;
    if (!app.rendered) continue;
    renders.push(app.render({ force: true }));
  }
  await Promise.all(renders);
}


/** Determine a readable foreground color from the image actually used by a notice.
 * Samples the central content area rather than decorative edges. If pixel access
 * is blocked (for example by cross-origin restrictions), the stylesheet default remains.
 */
function applyAutomaticTextContrast(root, imageSelector, targetSelector) {
  const rootElement = root instanceof HTMLElement ? root : root?.[0];
  if (!rootElement) return;
  const targets = rootElement.querySelectorAll(targetSelector);
  for (const target of targets) {
    const image = target.querySelector(imageSelector);
    if (!image) continue;
    const analyze = () => {
      if (!image.complete || !image.naturalWidth || !image.naturalHeight) return;
      try {
        const canvas = document.createElement("canvas");
        const width = 48;
        const height = 48;
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) return;
        context.drawImage(image, 0, 0, width, height);
        const pixels = context.getImageData(0, 0, width, height).data;
        let total = 0;
        let count = 0;
        // Ignore outer artwork/decorations; sample the area where text normally sits.
        for (let y = 7; y < 42; y += 1) {
          for (let x = 7; x < 41; x += 1) {
            const index = (y * width + x) * 4;
            const alpha = pixels[index + 3] / 255;
            if (alpha < 0.15) continue;
            const r = pixels[index] / 255;
            const g = pixels[index + 1] / 255;
            const b = pixels[index + 2] / 255;
            const linear = value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
            const luminance = 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
            total += luminance * alpha;
            count += alpha;
          }
        }
        if (!count) return;
        const averageLuminance = total / count;
        target.classList.remove("qb-auto-text-light", "qb-auto-text-dark");
        target.classList.add(averageLuminance > 0.30 ? "qb-auto-text-dark" : "qb-auto-text-light");
      } catch (error) {
        // Keep the CSS fallback if the browser blocks canvas pixel access.
        console.warn("[Quest Board] Could not analyze notice background for text contrast.", error);
      }
    };
    if (image.complete) analyze();
    else image.addEventListener("load", analyze, { once: true });
  }
}

class QuestBoardSettings extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    id: "quest-board-settings",
    classes: ["quest-board", "quest-board-settings"],
    window: { title: "Quest Board", resizable: true },
    position: { width: 560, height: 600 },
    actions: { save: this.save, pickFile: this.pickFile, resetCustom: this.resetCustom }
  };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/settings.hbs` } };

  async _prepareContext() {
    const appearance = getAppearance();
    const fields = [
      { name: "sceneIcon", label: qbLocalize("SceneIconLabel"), value: appearance.sceneIcon },
      { name: "boardImage", label: qbLocalize("BoardImageLabel"), value: appearance.boardImage },
      { name: "paperImage", label: qbLocalize("PaperImageLabel"), value: appearance.paperImage },
      { name: "sealImage", label: qbLocalize("SealImageLabel"), value: appearance.sealImage },
      { name: "pinImage", label: qbLocalize("PinImageLabel"), value: appearance.pinImage }
    ].map(field => ({ ...field, disabled: !appearance.customImages || (field.name === "pinImage" && appearance.hidePin) }));
    return { appearance, fields };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    const customToggle = this.element.querySelector('[name="customImages"]');
    const customFields = this.element.querySelector(".qb-custom-image-fields");
    const hidePin = this.element.querySelector('[name="hidePin"]');
    const sync = () => {
      const enabled = Boolean(customToggle?.checked);
      if (customFields) {
        customFields.classList.toggle("is-disabled", !enabled);
        customFields.hidden = !enabled;
      }
      for (const input of customFields?.querySelectorAll("input") ?? []) {
        input.disabled = !enabled || (input.name === "pinImage" && Boolean(hidePin?.checked));
      }
      for (const button of customFields?.querySelectorAll("button") ?? []) {
        button.disabled = !enabled || (button.dataset.target === "pinImage" && Boolean(hidePin?.checked));
      }
    };
    customToggle?.addEventListener("change", sync);
    hidePin?.addEventListener("change", sync);
    sync();
  }

  static async save() {
    const form = this.element.querySelector("form");
    const data = new FormData(form);
    const previous = getAppearance();
    const appearance = {
      ...previous,
      theme: String(data.get("theme") || "medieval"),
      customImages: data.get("customImages") === "on",
      hidePin: data.get("hidePin") === "on",
      hideCategoryIcons: data.get("hideCategoryIcons") === "on"
    };
    for (const key of ["boardImage", "paperImage", "sealImage", "sceneIcon"]) {
      const value = data.get(key);
      if (value !== null) appearance[key] = String(value).trim();
    }
    if (data.has("pinImage")) appearance.pinImage = String(data.get("pinImage") || "").trim();

    try {
      await game.settings.set(MODULE_ID, APPEARANCE_KEY, appearance);
      const tileTexture = resolveAppearanceAsset(appearance, "sceneIcon");
      for (const scene of game.scenes) {
        const updates = scene.tiles
          .filter(tile => tile.getFlag(MODULE_ID, "isQuestBoard"))
          .map(tile => ({
            _id: tile.id,
            "texture.src": tileTexture
          }));
        if (updates.length) await scene.updateEmbeddedDocuments("Tile", updates);
      }
      ui.notifications.info(qbLocalize("AppearanceSaved"));
      this.close();
      for (const app of Object.values(ui.windows)) {
        if (app instanceof QuestBoardWindow) app.render({ force: true });
      }
    } catch (error) { notifyError(error); }
  }

  static pickFile(_event, target) {
    const field = target.dataset.target;
    const input = this.element.querySelector(`[name="${field}"]`);
    if (!input || input.disabled) return;
    new FilePicker({ type: "image", current: input.value || "", callback: path => { input.value = path; } }).render(true);
  }

  static async resetCustom() {
    const confirmed = await foundry.applications.api.DialogV2.confirm({
      window: { title: qbLocalize("ResetImagesTitle") },
      content: qbLocalize("ResetImagesConfirm")
    });
    if (!confirmed) return;
    const form = this.element.querySelector("form");
    for (const key of ["boardImage", "paperImage", "sealImage", "pinImage", "sceneIcon"]) {
      const input = form.querySelector(`[name="${key}"]`);
      if (input) input.value = "";
    }
    const customToggle = form.querySelector('[name="customImages"]');
    if (customToggle) customToggle.checked = false;
    const hidePin = form.querySelector('[name="hidePin"]');
    if (hidePin) hidePin.checked = false;
    const hideCategoryIcons = form.querySelector('[name="hideCategoryIcons"]');
    if (hideCategoryIcons) hideCategoryIcons.checked = false;
    for (const input of form.querySelectorAll(".qb-custom-image-fields input, .qb-custom-image-fields button")) input.disabled = true;
    const customFields = form.querySelector(".qb-custom-image-fields");
    customFields?.classList.add("is-disabled");
    if (customFields) customFields.hidden = true;
  }
}

class QuestBoardManager extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    id: "quest-board-manager",
    classes: ["quest-board", "quest-board-manager"],
    window: { title: "Quest Board", resizable: true },
    position: { width: 560, height: 560 },
    actions: {
      createBoard: this.createBoard,
      openArchive: this.openArchive,
      openTemplates: this.openTemplates,
      openBoard: this.openBoard,
      editBoard: this.editBoard,
      deleteBoard: this.deleteBoard,
      placeTile: this.placeTile
    }
  };

  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/manager.hbs` } };

  async _prepareContext() {
    const boards = getBoards();
    return {
      boards: game.user.isGM ? boards : boards.filter(board => board.showToPlayers !== false),
      isGM: game.user.isGM
    };
  }

  static async createBoard() {
    const boards = getBoards();
    const board = {
      id: foundry.utils.randomID(),
      name: qbFormat("NewBoardNumber", { number: boards.length + 1 }),
      location: "",
      wood: "oak",
      decoration: "classic",
      showToPlayers: false,
      notes: []
    };
    boards.push(board);
    try {
      await saveBoards(boards);
      new QuestBoardEditor({ boardId: board.id }).render({ force: true });
      this.render({ force: true });
    } catch (error) { notifyError(error); }
  }

  static openArchive() { new QuestArchive().render({ force: true }); }
  static openTemplates() { new QuestTemplates().render({ force: true }); }
  static openBoard(_event, target) { openBoard(target.dataset.boardId); }

  static editBoard(_event, target) {
    new QuestBoardEditor({ boardId: target.dataset.boardId }).render({ force: true });
  }

  static async deleteBoard(_event, target) {
    const boardId = target.dataset.boardId;
    const board = getBoard(boardId);
    if (!board) return;
    const confirmed = await foundry.applications.api.DialogV2.confirm({
      window: { title: qbLocalize("DeleteBoardTitle") },
      content: qbFormat("DeleteBoardConfirm", { name: foundry.utils.escapeHTML(board.name) })
    });
    if (!confirmed) return;
    try {
      await saveBoards(getBoards().filter(item => item.id !== boardId));
      this.render({ force: true });
    } catch (error) { notifyError(error); }
  }

  static async placeTile(_event, target) {
    const boardId = target.dataset.boardId;
    if (!canvas?.scene) return ui.notifications.warn(qbLocalize("OpenSceneFirst"));
    const board = getBoard(boardId);
    if (!board) return;
    const appearance = getAppearance();
    const width = 128, height = 128;
    const x = Math.max(0, Math.round(canvas.scene.width / 2 - width / 2));
    const y = Math.max(0, Math.round(canvas.scene.height / 2 - height / 2));
    try {
      await canvas.scene.createEmbeddedDocuments("Tile", [{
        texture: { src: resolveAppearanceAsset(appearance, "sceneIcon") },
        x, y, width, height,
        overhead: false,
        occlusion: { mode: CONST.TILE_OCCLUSION_MODES.NONE },
        flags: { [MODULE_ID]: { boardId, isQuestBoard: true } }
      }]);
      ui.notifications.info(qbFormat("BoardPlaced", { name: board.name }));
    } catch (error) { notifyError(error); }
  }
}

class QuestBoardEditor extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options = {}) { super(options); this.boardId = options.boardId; }
  static DEFAULT_OPTIONS = {
    id: "quest-board-editor",
    classes: ["quest-board", "quest-board-editor"],
    window: { title: "Quest Board", resizable: true },
    position: { width: 460, height: 420 },
    actions: { save: this.save, pickBoardImage: this.pickBoardImage }
  };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/board-editor.hbs` } };
  async _prepareContext() {
    const board = getBoard(this.boardId);
    return { board: board ? { ...board, showToPlayers: board.showToPlayers !== false } : null };
  }

  static pickBoardImage(_event, target) {
    const input = this.element.querySelector('[name="boardImage"]');
    if (!input) return;
    new FilePicker({
      type: "image",
      current: input.value || "",
      callback: path => { input.value = path; }
    }).render(true);
  }

  static async save(_event) {
    const form = this.element.querySelector("form");
    const data = new FormData(form);
    const boards = getBoards();
    const board = boards.find(item => item.id === this.boardId);
    if (!board) return;
    board.name = String(data.get("name") || qbLocalize("NewBoard")).trim();
    board.location = String(data.get("location") || "").trim();
    board.boardImage = String(data.get("boardImage") || "").trim();
    board.showToPlayers = data.get("showToPlayers") === "on";
    try {
      await saveBoards(boards);
      this.close();
      await refreshOpenBoardWindows(this.boardId);
      ui.notifications.info(qbLocalize("BoardSaved"));
    } catch (error) { notifyError(error); }
  }
}

class QuestEditor extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options = {}) { super(options); this.boardId = options.boardId; this.questId = options.questId ?? null; this.templateData = options.templateData ? foundry.utils.deepClone(options.templateData) : null; }
  static DEFAULT_OPTIONS = {
    id: "quest-board-quest-editor",
    classes: ["quest-board", "quest-board-quest-editor"],
    window: { title: "Quest Board", resizable: true },
    position: { width: 560, height: 680 },
    actions: { save: this.save, cancel: this.cancel, pickSeal: this.pickSeal, pickPaper: this.pickPaper, pickJournal: this.pickJournal, saveTemplate: this.saveTemplate, loadTemplate: this.loadTemplate }
  };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/quest-editor.hbs` } };
  async _prepareContext() {
    const board = getBoard(this.boardId);
    const quest = foundry.utils.deepClone(board?.notes.find(note => note.id === this.questId) ?? this.templateData ?? {});
    if (this.templateData) { delete quest.id; quest.published = false; quest.status = "active"; quest.expiryDays = 0; quest.expiresAt = null; }
    // Migrate the old dedicated reward field into the body as ordinary in-character text.
    if (quest.reward && !quest.legacyRewardMigrated) {
      quest.description = [quest.description, quest.reward].filter(Boolean).join("\n\n");
      quest.legacyRewardMigrated = true;
    }
    quest.category ??= "";
    const categories = QUEST_CATEGORIES.map(category => ({
      id: category.id,
      label: qbLocalize(category.label),
      description: qbLocalize(category.description),
      selected: quest.category === category.id
    }));
    const templates = getTemplates().map(t => ({ id: t.id, name: t.name }));
    const statuses = ["active", "completed", "failed", "withdrawn"].map(id => ({ id, label: qbLocalize(`Status${id[0].toUpperCase()}${id.slice(1)}`), selected: (quest.status ?? "active") === id }));
    return { quest, isNew: !this.questId, fromTemplate: Boolean(this.templateData), categories, templates, statuses, expiryDays: quest.expiryDays ?? "" };
  }
  _onRender(context, options) {
    super._onRender(context, options);
    const toggle = this.element.querySelector('[name="addSeal"]');
    const picker = this.element.querySelector(".qb-seal-picker");
    const sync = () => {
      if (picker) picker.hidden = !toggle?.checked;
    };
    toggle?.addEventListener("change", sync);
    sync();
  }
  static pickPaper(_event, target) {
    const input = this.element.querySelector('[name="customPaperImage"]');
    if (!input) return;
    new FilePicker({
      type: "image",
      current: input.value || "",
      callback: path => { input.value = path; }
    }).render(true);
  }
  static pickSeal(_event, target) {
    const input = this.element.querySelector('[name="customSealImage"]');
    if (!input) return;
    new FilePicker({
      type: "image",
      current: input.value || "",
      callback: path => { input.value = path; }
    }).render(true);
  }
  static pickJournal(_event, _target) {
    // Keep the editor open and show the page picker above it.
    try {
      new JournalPagePicker({ editor: this }).render({ force: true });
    } catch (error) {
      console.error(`${MODULE_ID} | Failed to open journal page picker`, error);
      ui.notifications.error(qbLocalize("JournalPickerError"));
    }
  }
  static async save(_event) {
    const form = this.element.querySelector("form");
    const data = new FormData(form);
    const boards = getBoards();
    const board = boards.find(item => item.id === this.boardId);
    if (!board) return;
    const existing = board.notes.find(note => note.id === this.questId);
    let description = String(data.get("description") || "").trim();
    const note = {
      id: existing?.id ?? foundry.utils.randomID(),
      questType: "standard",
      category: String(data.get("category") || ""),
      title: String(data.get("title") || "").trim(),
      author: String(data.get("author") || "").trim(),
      summary: String(data.get("summary") || "").trim(),
      description,
      image: "",
      addSeal: data.get("addSeal") === "on",
      customPaperImage: String(data.get("customPaperImage") || "").trim(),
      customSealImage: String(data.get("customSealImage") || "").trim(),
      link: String(data.get("link") || "").trim(),
      journalUuid: String(data.get("journalUuid") || "").trim(),
      x: existing?.x ?? 8 + Math.random() * 65,
      y: existing?.y ?? 8 + Math.random() * 55,
      rotation: existing?.rotation ?? 0,
      published: data.get("published") === "on",
      status: String(data.get("status") || existing?.status || "active"),
      expiryDays: Math.max(0, Number(data.get("expiryDays") || 0)),
      expiresAt: Number(data.get("expiryDays") || 0) > 0 && data.get("published") === "on" ? (existing?.published && existing?.expiryDays === Number(data.get("expiryDays")) && Number.isFinite(existing?.expiresAt) ? existing.expiresAt : calendarExpiry(Number(data.get("expiryDays")))) : null,
      legacyRewardMigrated: true
    };
    const archiveStatus = ["completed", "failed", "withdrawn"].includes(note.status);
    if (archiveStatus) {
      const archive = getArchive(); archive.push({ id: foundry.utils.randomID(), boardId: board.id, boardName: board.name, quest: note, status: note.status, archivedAt: game.time.worldTime });
      board.notes = board.notes.filter(item => item.id !== this.questId);
      await saveArchive(archive);
    } else if (existing) Object.assign(existing, note); else board.notes.push(note);
    try { await saveBoards(boards); await this.close(); await refreshOpenBoardWindows(this.boardId); ui.notifications.info(qbLocalize("QuestSaved")); }
    catch (error) { notifyError(error); }
  }
  static async saveTemplate() {
    const form = this.element.querySelector("form"); if (!form) return;
    const data = new FormData(form);
    const name = String(data.get("title") || "").trim() || qbLocalize("Untitled");
    const template = { id: foundry.utils.randomID(), name, category: String(data.get("category") || ""), title: name, summary: String(data.get("summary") || ""), description: String(data.get("description") || ""), author: String(data.get("author") || ""), customPaperImage: String(data.get("customPaperImage") || ""), addSeal: data.get("addSeal") === "on", customSealImage: String(data.get("customSealImage") || ""), link: String(data.get("link") || ""), journalUuid: String(data.get("journalUuid") || "") };
    const templates = getTemplates(); templates.push(template);
    await game.settings.set(MODULE_ID, TEMPLATES_KEY, templates);
    ui.notifications.info(qbLocalize("TemplateSaved"));
    await this.render({ force: true });
  }
  static loadTemplate() {
    const select = this.element.querySelector('[name="templateId"]'); const template = getTemplates().find(t => t.id === select?.value);
    if (!template) return ui.notifications.warn(qbLocalize("SelectTemplate"));
    for (const [key, value] of Object.entries(template)) { const field = this.element.querySelector(`[name="${key}"]`); if (field && key !== "id") { if (field.type === "checkbox") field.checked = Boolean(value); else field.value = value ?? ""; } }
    const published = this.element.querySelector('[name="published"]'); if (published) published.checked = false;
    ui.notifications.info(qbLocalize("TemplateLoaded"));
  }
  static cancel() { this.close(); }
}


class QuestArchive extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = { id: "quest-board-archive", classes: ["quest-board", "quest-board-archive"], window: { title: "Архив объявлений", resizable: true }, position: { width: 700, height: 600 }, actions: { restore: this.restore, preview: this.preview, remove: this.remove } };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/archive.hbs` } };
  async _prepareContext() { return { entries: getArchive().map(e => ({ ...e, title: e.quest?.title || qbLocalize("Untitled"), statusLabel: qbLocalize(`Status${e.status[0].toUpperCase()}${e.status.slice(1)}`) })) }; }
  static preview(_event, target) {
    const entry = getArchive().find(e => e.id === target.dataset.archiveId);
    if (!entry?.quest) return;
    new QuestViewer({ questData: entry.quest }).render({ force: true });
  }
  static async restore(_event, target) {
    const archive = getArchive(); const entry = archive.find(e => e.id === target.dataset.archiveId); if (!entry) return;
    const boards = getBoards(); let board = boards.find(b => b.id === entry.boardId);
    if (!board) { board = { id: foundry.utils.randomID(), name: entry.boardName || qbLocalize("RecoveredBoard"), location: "", wood: "oak", decoration: "classic", showToPlayers: false, notes: [] }; boards.push(board); }
    const quest = foundry.utils.deepClone(entry.quest); quest.status = "active"; quest.published = false; quest.expiresAt = null; quest.expiryDays = 0; board.notes.push(quest);
    await saveBoards(boards); await saveArchive(archive.filter(e => e.id !== entry.id)); await this.render({ force: true }); ui.notifications.info(qbLocalize("ArchiveRestored"));
  }
  static async remove(_event, target) { const id = target.dataset.archiveId; const ok = await foundry.applications.api.DialogV2.confirm({ window: { title: qbLocalize("Delete") }, content: qbLocalize("ArchiveDeleteConfirm") }); if (!ok) return; await saveArchive(getArchive().filter(e => e.id !== id)); await this.render({ force: true }); }
}

class QuestTemplates extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = { id: "quest-board-templates", classes: ["quest-board", "quest-board-templates"], window: { title: "Шаблоны объявлений", resizable: true }, position: { width: 560, height: 520 }, actions: { remove: this.remove, createQuest: this.createQuest, preview: this.preview } };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/templates.hbs` } };
  async _prepareContext() { return { templates: getTemplates().map(t => ({ ...t, categoryLabel: t.category ? qbLocalize(`Category${({main:"Main",orders:"Orders",bounty:"Bounty",exploration:"Exploration",other:"Other"})[t.category] || "Other"}`) : qbLocalize("CategoryUncategorized") })) }; }
  static preview(_event, target) {
    const template = getTemplates().find(t => t.id === target.dataset.templateId);
    if (!template) return;
    new QuestViewer({ questData: template }).render({ force: true });
  }
  static async createQuest(_event, target) {
    const template = getTemplates().find(t => t.id === target.dataset.templateId);
    if (!template) return;
    const boards = getBoards();
    if (!boards.length) return ui.notifications.warn(qbLocalize("CreateBoardFirstForTemplate"));
    new TemplateBoardPicker({ template }).render({ force: true });
  }
  static async remove(_event, target) { const id = target.dataset.templateId; await game.settings.set(MODULE_ID, TEMPLATES_KEY, getTemplates().filter(t => t.id !== id)); await this.render({ force: true }); }
}

class TemplateBoardPicker extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options = {}) { super(options); this.template = options.template; }
  static DEFAULT_OPTIONS = { id: "quest-board-template-board-picker", classes: ["quest-board", "quest-board-template-board-picker"], window: { title: "Quest Board", resizable: false }, position: { width: 420, height: "auto" }, actions: { choose: this.choose } };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/template-board-picker.hbs` } };
  async _prepareContext() { return { boards: getBoards().map(b => ({ id: b.id, name: b.name })), templateName: this.template.name }; }
  static choose(_event) {
    const boardId = this.element.querySelector("[name=boardId]")?.value;
    const board = getBoard(boardId);
    if (!board) return ui.notifications.warn(qbLocalize("SelectBoard"));
    const template = this.template;
    this.close();
    new QuestEditor({ boardId, templateData: template }).render({ force: true });
  }
}

class JournalPagePicker extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options = {}) {
    super(options);
    this.editor = options.editor;
  }
  static DEFAULT_OPTIONS = {
    id: "quest-board-journal-page-picker",
    classes: ["quest-board", "quest-board-journal-picker"],
    window: { title: "Quest Board", resizable: true },
    position: { width: 440, height: 560 },
    actions: { selectPage: this.selectPage, cancel: this.cancel }
  };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/journal-page-picker.hbs` } };
  async _prepareContext() {
    const journals = game.journal.contents
      .map(journal => ({
        id: journal.id,
        name: journal.name,
        pages: journal.pages.contents.map(page => ({
          uuid: page.uuid,
          name: page.name || qbLocalize("Untitled"),
          type: page.type
        }))
      }))
      .filter(journal => journal.pages.length)
      .sort((a, b) => a.name.localeCompare(b.name, game.i18n.lang));
    return { journals, hasJournals: journals.length > 0 };
  }
  static async selectPage(_event, target) {
    const uuid = target.dataset.uuid;
    if (!uuid || !this.editor?.element?.isConnected) return;
    const input = this.editor.element.querySelector('[name="journalUuid"]');
    if (!input) return;
    input.value = uuid;
    input.dispatchEvent(new Event("change", { bubbles: true }));
    await this.close();
    this.editor.bringToTop?.();
    ui.notifications.info(qbLocalize("JournalPageSelected"));
  }
  async _onClose(options) {
    return super._onClose(options);
  }

}

class QuestViewer extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options = {}) { super(options); this.boardId = options.boardId; this.questId = options.questId; this.questData = options.questData ? foundry.utils.deepClone(options.questData) : null; }
  static DEFAULT_OPTIONS = {
    id: "quest-board-quest-viewer",
    classes: ["quest-board", "quest-board-viewer"],
    window: { title: "Quest Board", resizable: true },
    position: { width: 650, height: 700 }
  };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/quest-viewer.hbs` } };
  async _prepareContext() {
    const appearance = getAppearance();
    const board = this.boardId ? getBoard(this.boardId) : null;
    const quest = this.questData ? foundry.utils.deepClone(this.questData) : foundry.utils.deepClone(board?.notes.find(note => note.id === this.questId));
    if (quest) {
      quest.questType ??= quest.image ? "character" : "standard";
      const category = getQuestCategory(quest.category);
      quest.categoryLabel = !appearance.hideCategoryIcons && category ? qbLocalize(category.label) : "";
      quest.categoryClass = category ? `qb-category-${category.color}` : "";
      quest.categoryTextClass = category ? `qb-category-label-${category.color}` : "";
      quest.categoryIcon = appearance.hideCategoryIcons ? "" : (category?.icon ?? "");
      if (quest.reward && !quest.legacyRewardMigrated) quest.description = [quest.description, quest.reward].filter(Boolean).join("\n\n");
    }
    const journal = quest?.journalUuid ? await fromUuid(quest.journalUuid).catch(() => null) : null;
    return {
      quest,
      journalName: journal?.name ?? "",
      enriched: quest ? await TextEditor.enrichHTML(quest.description ?? "", { async: true, secrets: false }) : "",
      themeClass: themeClass(appearance.theme),
      paperImage: resolveQuestAsset(appearance, quest, "paperImage"),
      sealImage: resolveQuestAsset(appearance, quest, "sealImage"),
      pinImage: resolveQuestAsset(appearance, quest, "pinImage")
    };
  }
  _onRender(context, options) {
    super._onRender(context, options);
    applyAutomaticTextContrast(this.element, ".qb-paper-bg-large", ".qb-scroll-paper");
    const journalButton = this.element.querySelector("[data-action='openJournal']");
    if (journalButton) journalButton.addEventListener("click", async () => {
      const quest = this.questData ?? getBoard(this.boardId)?.notes.find(note => note.id === this.questId);
      if (!quest?.journalUuid) return;
      const document = await fromUuid(quest.journalUuid);
      document?.sheet?.render(true);
    });
  }
}

class QuestBoardWindow extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options = {}) {
    super(options);
    this.boardId = options.boardId;
    this.openedFromTile = options.openedFromTile === true;
    this.arrangeMode = false;
    this.categoryFilter = "all";
    openBoardWindows.add(this);
  }
  async _onClose(options) {
    openBoardWindows.delete(this);
    return super._onClose(options);
  }
  static DEFAULT_OPTIONS = {
    id: "quest-board-window",
    classes: ["quest-board", "quest-board-window"],
    window: { title: "Quest Board", resizable: true },
    position: { width: 980, height: 720 },
    actions: {
      addQuest: this.addQuest,
      editQuest: this.editQuest,
      deleteQuest: this.deleteQuest,
      toggleArrange: this.toggleArrange
    }
  };
  static PARTS = { main: { template: `modules/${MODULE_ID}/templates/board.hbs` } };
  _onRender(context, options) {
    super._onRender(context, options);
    applyAutomaticTextContrast(this.element, ".qb-paper-bg-small", ".qb-note-open");
    // Explicit flyer click handling keeps quest opening reliable across Foundry v14 action delegation.
    this.element.querySelectorAll(".qb-note-open").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        const questId = button.dataset.questId;
        if (!questId) return;
        new QuestViewer({ boardId: this.boardId, questId }).render({ force: true });
      });
    });
    const categoryFilter = this.element.querySelector('[name="categoryFilter"]');
    categoryFilter?.addEventListener("change", async event => {
      this.categoryFilter = event.currentTarget.value;
      await this.render({ force: true });
    });
    this._activateArrangeMode();
    const surface = this.element.querySelector(".qb-board-surface");
    const image = this.element.querySelector(".qb-board-background");
    const stage = this.element.querySelector(".qb-board-stage");
    if (!surface || !image || !stage) return;
    const applyImageSize = () => {
      const width = image.naturalWidth || 800;
      const height = image.naturalHeight || 560;
      const content = this.element.querySelector(".window-content");
      const topLine = this.element.querySelector(".qb-board-topline");
      const topLineHeight = topLine?.getBoundingClientRect().height || 58;
      const windowHeader = this.element.querySelector(".window-header");
      const windowChrome = windowHeader?.getBoundingClientRect().height || 40;
      const contentPadding = 48;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 900;
      const availableWidth = Math.max(320, Math.min(content?.clientWidth || stage.clientWidth || 950, 1100));
      // Reserve real space for Foundry's title bar, board controls, footer,
      // window borders and a safety margin. This prevents the image from
      // being clipped by the ApplicationV2 content viewport.
      const maxWindowHeight = Math.max(420, viewportHeight - 48);
      const maxBoardHeight = Math.max(240, maxWindowHeight - windowChrome - topLineHeight - contentPadding - 48);
      const displayWidth = Math.min(width, availableWidth, maxBoardHeight * width / height);
      const displayHeight = displayWidth * height / width;

      surface.style.aspectRatio = `${width} / ${height}`;
      surface.style.width = `${displayWidth}px`;
      surface.style.height = `${displayHeight}px`;
      image.style.width = "100%";
      image.style.height = "100%";
      image.style.maxWidth = "100%";
      image.style.maxHeight = "100%";

      const desiredHeight = Math.ceil(displayHeight + topLineHeight + windowChrome + contentPadding + 48);
      this.setPosition({ height: Math.min(desiredHeight, maxWindowHeight) });
      if (content) {
        content.style.overflowY = "auto";
        content.style.overflowX = "hidden";
      }
    };
    image.addEventListener("load", applyImageSize, { once: true });
    image.addEventListener("error", () => {
      console.error(`${MODULE_ID} | Board background failed to load:`, image.src);
      if (!image.dataset.fallbackTried) {
        image.dataset.fallbackTried = "1";
        image.src = `modules/${MODULE_ID}/assets/board-placeholder.svg`;
      }
    }, { once: true });
    if (image.complete && image.naturalWidth) applyImageSize();
  }
  async _prepareContext() {
    const board = getBoard(this.boardId);
    const appearance = getAppearance();
    const allNotes = (board?.notes ?? [])
      .filter(note => note.published || game.user.isGM);
    const notes = allNotes
      .filter(note => {
        if (this.categoryFilter === "all") return true;
        if (this.categoryFilter === "uncategorized") return !getQuestCategory(note.category);
        return note.category === this.categoryFilter;
      })
      .map(note => {
        const category = getQuestCategory(note.category);
        return {
          ...note,
          categoryLabel: !appearance.hideCategoryIcons && category ? qbLocalize(category.label) : "",
          categoryClass: category ? `qb-category-${category.color}` : "",
          categoryTextClass: category ? `qb-category-label-${category.color}` : "",
          categoryIcon: appearance.hideCategoryIcons ? "" : (category?.icon ?? ""),
          rotation: Number(note.rotation) || 0,
          scale: Number(note.scale) > 0 ? Number(note.scale) : 1,
          questType: note.questType ?? (note.image ? "character" : "standard"),
          themeClass: themeClass(appearance.theme),
          unpublishedEyeImage: game.user.isGM && !note.published
            ? (UNPUBLISHED_EYE_IMAGES[appearance.theme] ?? UNPUBLISHED_EYE_IMAGES.medieval)
            : "",
          paperImage: resolveQuestAsset(appearance, note, "paperImage"),
          sealImage: resolveQuestAsset(appearance, note, "sealImage"),
          pinImage: resolveQuestAsset(appearance, note, "pinImage")
        };
      });
    const theme = appearance.theme;
    const savedBoardImage = String(board?.boardImage ?? "").trim();
    // Ignore the legacy placeholder path saved by older module versions.
    // It must not override the selected theme's dedicated board artwork.
    const isLegacyPlaceholder = /(?:^|\/)board-placeholder\.svg(?:[?#].*)?$/i.test(savedBoardImage);
    const boardImage = savedBoardImage && !isLegacyPlaceholder
      ? savedBoardImage
      : resolveAppearanceAsset(appearance, "boardImage");
    const filterOptions = [
      { id: "all", label: qbLocalize("CategoryFilterAll") },
      ...QUEST_CATEGORIES.map(category => ({ id: category.id, label: qbLocalize(category.label) })),
      { id: "uncategorized", label: qbLocalize("CategoryUncategorized") }
    ].map(option => ({ ...option, selected: this.categoryFilter === option.id }));
    const selectedCategory = getQuestCategory(this.categoryFilter);
    const filterDescription = this.categoryFilter === "uncategorized"
      ? qbLocalize("CategoryUncategorizedDescription")
      : selectedCategory ? qbLocalize(selectedCategory.description) : "";
    return { board, isGM: game.user.isGM, arrangeMode: this.arrangeMode, notes, filterOptions, filterDescription, themeClass: themeClass(theme), hidePin: appearance.hidePin, boardImage };
  }
  static addQuest() { new QuestEditor({ boardId: this.boardId }).render({ force: true }); }
  static editQuest(_event, target) { new QuestEditor({ boardId: this.boardId, questId: target.dataset.questId }).render({ force: true }); }
  static async deleteQuest(_event, target) {
    const questId = target.dataset.questId;
    const boards = getBoards();
    const board = boards.find(item => item.id === this.boardId);
    if (!board) return;
    const note = board.notes.find(item => item.id === questId);
    if (!note) return;
    const confirmed = await foundry.applications.api.DialogV2.confirm({
      window: { title: qbLocalize("DeleteQuestTitle") },
      content: qbFormat("DeleteQuestConfirm", { name: foundry.utils.escapeHTML(note.title || qbLocalize("Untitled")) }),
      yes: { label: qbLocalize("Delete"), icon: "fa-solid fa-trash" },
      no: { label: qbLocalize("Cancel") }
    });
    if (!confirmed) return;
    board.notes = board.notes.filter(item => item.id !== questId);
    try { await saveBoards(boards); this.render({ force: true }); }
    catch (error) { notifyError(error); }
  }
  static openQuest(_event, target) { new QuestViewer({ boardId: this.boardId, questId: target.dataset.questId }).render({ force: true }); }
  static toggleArrange() { this.arrangeMode = !this.arrangeMode; this.render({ force: true }); }

  _activateArrangeMode() {
    if (!game.user.isGM || !this.arrangeMode) return;
    const boardEl = this.element.querySelector(".qb-board-surface");
    if (!boardEl) return;

    const persistNote = async noteEl => {
      const boards = getBoards();
      const board = boards.find(item => item.id === this.boardId);
      const quest = board?.notes.find(item => item.id === noteEl.dataset.questId);
      if (!quest) return;
      quest.x = Number(noteEl.dataset.x ?? quest.x ?? 0);
      quest.y = Number(noteEl.dataset.y ?? quest.y ?? 0);
      quest.rotation = Number(noteEl.dataset.rotation ?? quest.rotation ?? 0);
      quest.scale = Number(noteEl.dataset.scale ?? quest.scale ?? 1);
      try { await saveBoards(boards); }
      catch (error) { notifyError(error); }
    };

    const updateTransform = noteEl => {
      const rotation = Number(noteEl.dataset.rotation ?? 0);
      const scale = Number(noteEl.dataset.scale ?? 1);
      noteEl.style.setProperty("--note-scale", scale);
      noteEl.style.setProperty("--note-rotation", `${rotation}deg`);
      noteEl.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    };

    // Move notes by the dedicated handle.
    this.element.querySelectorAll(".qb-note-grip").forEach(grip => {
      const noteEl = grip.closest(".qb-note");
      grip.addEventListener("pointerdown", event => {
        event.preventDefault();
        event.stopPropagation();
        const rect = boardEl.getBoundingClientRect();
        const startX = event.clientX;
        const startY = event.clientY;
        const initialX = Number(noteEl.dataset.x ?? 0);
        const initialY = Number(noteEl.dataset.y ?? 0);
        const scale = Number(noteEl.dataset.scale ?? 1);
        grip.setPointerCapture(event.pointerId);
        const move = moveEvent => {
          const noteWidth = noteEl.offsetWidth * scale / rect.width * 100;
          const noteHeight = noteEl.offsetHeight * scale / rect.height * 100;
          const x = Math.max(0, Math.min(100 - noteWidth, initialX + (moveEvent.clientX - startX) / rect.width * 100));
          const y = Math.max(0, Math.min(100 - noteHeight, initialY + (moveEvent.clientY - startY) / rect.height * 100));
          noteEl.style.left = `${x}%`;
          noteEl.style.top = `${y}%`;
          noteEl.dataset.x = x;
          noteEl.dataset.y = y;
        };
        const up = async () => {
          grip.removeEventListener("pointermove", move);
          grip.removeEventListener("pointerup", up);
          grip.removeEventListener("pointercancel", up);
          await persistNote(noteEl);
        };
        grip.addEventListener("pointermove", move);
        grip.addEventListener("pointerup", up, { once: true });
        grip.addEventListener("pointercancel", up, { once: true });
      });
    });

    // One combined transform handle: angular movement rotates the note,
    // radial movement changes its scale. Both can be adjusted in one gesture.
    this.element.querySelectorAll(".qb-note-transform").forEach(handle => {
      const noteEl = handle.closest(".qb-note");
      handle.addEventListener("pointerdown", event => {
        event.preventDefault();
        event.stopPropagation();
        const bounds = noteEl.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const startDX = event.clientX - centerX;
        const startDY = event.clientY - centerY;
        const startDistance = Math.max(1, Math.hypot(startDX, startDY));
        const startAngle = Math.atan2(startDY, startDX);
        const initialRotation = Number(noteEl.dataset.rotation ?? 0);
        const initialScale = Number(noteEl.dataset.scale ?? 1);
        handle.setPointerCapture(event.pointerId);

        const move = moveEvent => {
          const dx = moveEvent.clientX - centerX;
          const dy = moveEvent.clientY - centerY;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const angle = Math.atan2(dy, dx);
          // Normalize angular delta to avoid jumps when crossing +/-180 degrees.
          const angleDelta = Math.atan2(Math.sin(angle - startAngle), Math.cos(angle - startAngle));
          let rotation = initialRotation + angleDelta * 180 / Math.PI;
          if (!moveEvent.shiftKey) rotation = Math.round(rotation / 5) * 5;
          const scale = Math.max(0.55, Math.min(1.8, initialScale * distance / startDistance));
          noteEl.dataset.rotation = rotation;
          noteEl.dataset.scale = scale;
          updateTransform(noteEl);
        };
        const up = async () => {
          handle.removeEventListener("pointermove", move);
          handle.removeEventListener("pointerup", up);
          handle.removeEventListener("pointercancel", up);
          await persistNote(noteEl);
        };
        handle.addEventListener("pointermove", move);
        handle.addEventListener("pointerup", up, { once: true });
        handle.addEventListener("pointercancel", up, { once: true });
      });
    });
  }
}

Hooks.on("updateWorldTime", () => archiveExpiredQuests().catch(notifyError));
Hooks.once("ready", () => archiveExpiredQuests().catch(notifyError));

Hooks.on("updateSetting", setting => {
  if (setting?.key !== `${MODULE_ID}.${SETTING_KEY}`) return;
  refreshOpenBoardWindows();
});

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, SETTING_KEY, {
    name: "Quest Board data",
    scope: "world",
    config: false,
    type: Array,
    default: [],
    onChange: () => refreshOpenBoardWindows()
  });
  game.settings.register(MODULE_ID, TEMPLATES_KEY, { name: "Quest Board templates", scope: "world", config: false, type: Array, default: [] });
  game.settings.register(MODULE_ID, ARCHIVE_KEY, { name: "Quest Board archive", scope: "world", config: false, type: Array, default: [] });
  game.settings.register(MODULE_ID, APPEARANCE_KEY, {
    name: qbLocalize("AppearanceSettingName"), hint: qbLocalize("AppearanceSettingHint"),
    scope: "world", config: false, type: Object, default: DEFAULT_APPEARANCE
  });
  game.settings.registerMenu(MODULE_ID, "appearanceMenu", {
    name: qbLocalize("SettingsMenuName"), label: qbLocalize("SettingsMenuLabel"),
    hint: qbLocalize("SettingsMenuHint"),
    icon: "fas fa-palette", type: QuestBoardSettings, restricted: true
  });
});

// v0.7.6: Removed the faulty ready-time texture rewrite. Theme icons are
// assigned directly when a tile is created or when appearance settings change.


// Canvas-level click handling for Quest Board tiles.
// Use Foundry's own client-to-canvas coordinate conversion. This listener is
// independent of the active InteractionLayer and therefore also works for players.
let questBoardCanvasElement = null;
let questBoardCanvasPointerHandler = null;

function removeQuestBoardCanvasClickHandler() {
  if (questBoardCanvasElement && questBoardCanvasPointerHandler) {
    questBoardCanvasElement.removeEventListener("pointerdown", questBoardCanvasPointerHandler, true);
  }
  questBoardCanvasElement = null;
  questBoardCanvasPointerHandler = null;
}

function installQuestBoardCanvasClickHandler() {
  removeQuestBoardCanvasClickHandler();

  if (!canvas?.ready || !canvas?.app?.view || !canvas?.scene) return;

  const view = canvas.app.view;
  const handler = event => {
    if (event.button !== 0 || event.isPrimary === false) return;
    // In GM Tile-edit mode, preserve Foundry's native selection and dragging.
    if (game.user.isGM && canvas.tiles?.active) return;

    const point = canvas.canvasCoordinatesFromClient({
      x: event.clientX,
      y: event.clientY
    });

    const boardTiles = canvas.scene.tiles
      .filter(tile => tile.getFlag(MODULE_ID, "boardId"))
      .sort((a, b) => (Number(b.elevation) || 0) - (Number(a.elevation) || 0));

    for (const tile of boardTiles) {
      const width = Number(tile.width) || 0;
      const height = Number(tile.height) || 0;
      if (width <= 0 || height <= 0) continue;

      // Foundry Tiles use a centered PIXI anchor (0.5, 0.5):
      // document x/y are the visual center, not the top-left corner.
      // Rotate the pointer around that center and test against the centered bounds.
      const centerX = Number(tile.x) || 0;
      const centerY = Number(tile.y) || 0;
      const dx = point.x - centerX;
      const dy = point.y - centerY;
      const angle = -(Number(tile.rotation) || 0) * Math.PI / 180;
      const localX = dx * Math.cos(angle) - dy * Math.sin(angle);
      const localY = dx * Math.sin(angle) + dy * Math.cos(angle);

      if (localX < -width / 2 || localY < -height / 2 ||
          localX > width / 2 || localY > height / 2) continue;

      const boardId = tile.getFlag(MODULE_ID, "boardId");
      if (!boardId) continue;

      // Consume the click before Foundry routes it to the inactive layer.
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      openBoard(boardId, "tile");
      return;
    }
  };

  view.addEventListener("pointerdown", handler, true);
  questBoardCanvasElement = view;
  questBoardCanvasPointerHandler = handler;
  console.log(`${MODULE_ID} | Canvas-level board click handler installed.`);
}

Hooks.on("canvasReady", installQuestBoardCanvasClickHandler);
Hooks.on("canvasTearDown", removeQuestBoardCanvasClickHandler);

// Reinstall after a layer switch because Foundry may rebuild its canvas view.
Hooks.on("activateTilesLayer", removeQuestBoardCanvasClickHandler);
Hooks.on("deactivateTilesLayer", installQuestBoardCanvasClickHandler);

// In GM Tile-edit mode, preserve single-click selection and use native double-click
// to open the board.
Hooks.once("init", () => {
  const TileClass = foundry.canvas?.placeables?.Tile;
  if (!TileClass || TileClass.prototype._questBoardDoubleClickWrapped) {
    console.warn(`${MODULE_ID} | Could not install Tile double-click handler during init.`);
    return;
  }

  const originalDoubleClick = TileClass.prototype._onClickLeft2;
  TileClass.prototype._onClickLeft2 = function(event) {
    const boardId = this.document?.getFlag(MODULE_ID, "boardId");
    if (boardId && game.user.isGM && canvas?.tiles?.active) {
      event?.stopPropagation?.();
      openBoard(boardId, "tile");
      return false;
    }
    return originalDoubleClick.call(this, event);
  };

  Object.defineProperty(TileClass.prototype, "_questBoardDoubleClickWrapped", { value: true });
  console.log(`${MODULE_ID} | Tile double-click handler installed.`);
});

Hooks.on("getSceneControlButtons", controls => {
  if (!controls.tokens) return;
  controls.tokens.tools.questBoard = {
    name: "questBoard",
    title: qbLocalize("SceneToolTitle"),
    icon: "fa-solid fa-clipboard-list",
    order: Object.keys(controls.tokens.tools).length + 1,
    button: true,
    visible: true,
    onChange: () => new QuestBoardManager().render({ force: true })
  };
});

Hooks.on("getHeaderControlsApplicationV2", (app, controls) => {
  // Reserved for future integration with the Foundry header.
});

console.log(`${MODULE_ID} | initialized`);
