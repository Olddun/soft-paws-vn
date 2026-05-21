const assets = {
  backgrounds: {
    throne: "./assets/backgrounds/throne_hall.png",
    bed: "./assets/backgrounds/bedchamber.png",
    council: "./assets/backgrounds/council_chamber.png",
    entrance: "./assets/backgrounds/forbidden_entrance.png",
    library: "./assets/backgrounds/forbidden_library.png",
  },
  characters: {
    cat: "./assets/characters/antalia_cat.png",
    antalia: "./assets/characters/antalia.png",
  },
};

const initialStats = {
  closeness: 0,
  vigilance: 0,
  observation: 0,
};

const story = {
  start: {
    chapter: "序章",
    bg: "throne",
    speaker: "旁白",
    text: "圣历一七四年，灭国战争结束后的第三十日。北境大将军凯旋而归，献上的不是敌国国王的首级，而是一只笼子。",
    next: "general_gift",
  },
  general_gift: {
    speaker: "大将军",
    text: "陛下！臣在猫族王宫废墟中寻得此物。布偶猫族最后的王室血脉，特献于陛下。",
    next: "cat_reveal",
  },
  cat_reveal: {
    sprite: "cat",
    speaker: "旁白",
    text: "金丝笼被抬上殿来。笼中蜷缩着一只布偶猫，蓝宝石般的眼睛藏在蓬松浅杏色长毛下，耳尖和尾尖带着深褐色斑纹。",
    next: "cedric_first_line",
  },
  cedric_first_line: {
    speaker: "塞德里克",
    text: "长得倒是不错。可惜是只不能化人的兽族。养着玩吧。",
    next: "inner_observe",
  },
  inner_observe: {
    speaker: "塞德里克",
    text: "她在发抖。不是因为害怕，而是因为愤怒。有意思。明明所有人都认为她只是一只普通的猫。",
    next: "choice_throne",
  },
  choice_throne: {
    choices: [
      {
        label: "沉默地转身回王座",
        hint: "保持常规路线",
        effects: {},
        next: "bedroom_night",
      },
      {
        label: "临走前多看她一眼",
        hint: "观察 +1",
        effects: { observation: 1 },
        next: "observed_light",
      },
    ],
  },
  observed_light: {
    speaker: "塞德里克",
    text: "刚才那一瞬间，她的眼睛里有光。不是猫的光，是人的光。",
    next: "bedroom_night",
  },
  bedroom_night: {
    chapter: "序章",
    bg: "bed",
    sprite: "cat",
    speaker: "旁白",
    text: "当夜，金丝笼被摆在国王寝宫一角。按照惯例，兽族战俘应当关在笼中，但塞德里克下令打开了笼门。",
    next: "bedroom_call",
  },
  bedroom_call: {
    speaker: "塞德里克",
    text: "出来。我不喜欢养笼中鸟。",
    next: "cat_out",
  },
  cat_out: {
    speaker: "旁白",
    text: "猫从笼中慢慢走出，每一步都带着戒备。她在壁炉前蜷成一团，尾巴盖住鼻子。",
    next: "cat_understands",
  },
  cat_understands: {
    speaker: "塞德里克",
    text: "你听得懂我说话，对吧？",
    next: "ear_twitch",
  },
  ear_twitch: {
    speaker: "旁白",
    text: "猫的耳朵猛地动了一下。黑暗中，壁炉火光映在她的蓝色眼睛里，像两颗燃烧的宝石。",
    next: "bedroom_end",
  },
  bedroom_end: {
    speaker: "塞德里克",
    text: "晚安，小猫。做个好梦，如果猫会做梦的话。",
    next: "morning",
  },
  morning: {
    chapter: "第一章",
    bg: "bed",
    sprite: "cat",
    speaker: "旁白",
    text: "晨光洒入寝宫。塞德里克从床上坐起，发现猫正趴在他胸口，蜷成一个毛茸茸的圆团。",
    next: "morning_line",
  },
  morning_line: {
    speaker: "塞德里克",
    text: "你什么时候跑上来的？胆子不小。",
    next: "choice_morning",
  },
  choice_morning: {
    choices: [
      {
        label: "伸手去摸她",
        hint: "亲近 +2",
        effects: { closeness: 2 },
        next: "touch_cat",
      },
      {
        label: "叫侍从送早饭，不理她",
        hint: "亲近 -1，冷漠路线标记",
        effects: { closeness: -1 },
        flags: { cold: true },
        next: "ignore_cat",
      },
      {
        label: "拿出逗猫棒逗她玩",
        hint: "亲近 +5，获得情报：本能克制",
        effects: { closeness: 5, observation: 1 },
        flags: { teaser: true },
        next: "teaser_cat",
      },
    ],
  },
  touch_cat: {
    speaker: "旁白",
    text: "她没有立刻躲开，只是用尾巴挡住自己的脸。那不是认输，更像是一种不愿承认的默许。",
    next: "council",
  },
  ignore_cat: {
    speaker: "旁白",
    text: "她蹲在窗台上梳理毛发，蓝眼睛偶尔扫过来，像在确认你到底是真冷漠，还是另有打算。",
    next: "council",
  },
  teaser_cat: {
    speaker: "旁白",
    text: "黑檀木杆，银色丝线，末端缀着羽毛和铃铛。猫的耳朵瞬间竖直，瞳孔微微放大，却硬是别过脸去。",
    next: "teaser_line",
  },
  teaser_line: {
    speaker: "塞德里克",
    text: "啧，明明很想扑过来吧？行，有骨气。",
    next: "council",
  },
  council: {
    chapter: "第一章",
    bg: "council",
    sprite: "cat",
    speaker: "旁白",
    text: "议事厅里，大臣们为边境粮草争吵不休。塞德里克坐在主位，一只手撑着下巴，另一只手放在膝盖上。",
    next: "minister_cat",
  },
  minister_cat: {
    speaker: "大臣",
    text: "陛下！议事之时携带兽族玩物，实在有失体统。",
    next: "quiet_reply",
  },
  quiet_reply: {
    speaker: "塞德里克",
    text: "她比你们安静多了。",
    next: "cat_pat",
  },
  cat_pat: {
    speaker: "旁白",
    text: "猫似乎听懂了，尾巴轻轻拍了一下塞德里克的手背，然后闭上眼睛继续睡。",
    next: "council_info",
  },
  council_info: {
    speaker: "塞德里克",
    text: "这个动作不像猫会做的。更像是一个不耐烦的女孩子，在用肢体语言表达：闭嘴。",
    next: "moon",
  },
  moon: {
    chapter: "月圆之夜",
    bg: "entrance",
    sprite: null,
    speaker: "旁白",
    text: "月圆之夜，猫窝里只剩一团被精心整理过的毯子。塞德里克放下酒杯，身形无声地没入走廊阴影。",
    next: "magic_wall",
  },
  magic_wall: {
    speaker: "旁白",
    text: "王宫深处的死胡同前，幽蓝色术式一条接一条熄灭。月光照在猫的身上，然后皮毛褪去，少女的身影缓缓成形。",
    next: "human_reveal",
  },
  human_reveal: {
    sprite: "antalia",
    speaker: "旁白",
    text: "金发如瀑，蓝眼如海。她头顶竖着浅杏色猫耳，腰间垂着蓬松长尾，赤足踩在冰凉石板上。",
    next: "antalia_first",
  },
  antalia_first: {
    speaker: "安塔莉亚",
    text: "破。",
    next: "follow_library",
  },
  follow_library: {
    speaker: "塞德里克",
    text: "玩够了。",
    next: "library_inside",
  },
  library_inside: {
    chapter: "禁书库",
    bg: "library",
    sprite: "antalia",
    speaker: "旁白",
    text: "禁书库内，黑色书架与苍白长明灯围住石台。安塔莉亚背对入口，俯身阅读摊开的羊皮纸。",
    next: "caught",
  },
  caught: {
    speaker: "塞德里克",
    text: "三年来，你每天晚上从我的床上爬起来，变成人，光着脚走到这里，就是为了偷看一本七百年前的旧书？",
    next: "choice_library",
  },
  choice_library: {
    choices: [
      {
        label: "继续逼近，看她还能忍多久",
        hint: "警戒 +3，亲近 -1",
        effects: { vigilance: 3, closeness: -1 },
        next: "pressure",
      },
      {
        label: "收回逗猫棒，退后一步",
        hint: "警戒 -2，亲近 +2",
        effects: { vigilance: -2, closeness: 2 },
        next: "step_back",
      },
      {
        label: "伸手捏住她的猫耳朵",
        hint: "需要亲近 ≥ 5 且观察 ≥ 1",
        requires: (stats) => stats.closeness >= 5 && stats.observation >= 1,
        effects: { closeness: 3, vigilance: 1 },
        next: "ear_touch",
      },
    ],
  },
  pressure: {
    speaker: "旁白",
    text: "她的尾巴炸成一团，蓝眼睛里翻起尖锐的敌意。你得到了答案，也把门关得更紧了一些。",
    next: "truth_hint",
  },
  step_back: {
    speaker: "塞德里克",
    text: "行了，不逗你了。",
    next: "ask_discovered",
  },
  ear_touch: {
    speaker: "旁白",
    text: "指尖触到猫耳的一瞬间，她整个人僵住。下一秒，她猛地按住你的手腕，却没有真的推开。",
    next: "ask_discovered",
  },
  ask_discovered: {
    speaker: "安塔莉亚",
    text: "你什么时候发现的？",
    next: "first_day",
  },
  first_day: {
    speaker: "塞德里克",
    text: "第一天。普通猫被挠下巴会舒服得眯眼睛，你却先缩瞳孔，再放松。那是有意识地在控制自己的反应。",
    next: "truth_hint",
  },
  truth_hint: {
    speaker: "塞德里克",
    text: "灵魂切割术。你查这个，是为了找猫族覆灭的真相？",
    next: "same_goal",
  },
  same_goal: {
    speaker: "塞德里克",
    text: "你有没有想过，也许我留着你的命，不是为了养着玩，而是因为我和你在找同一样东西。",
    next: "chapter_end",
  },
  chapter_end: {
    speaker: "旁白",
    text: "长明灯的火光跳了一下。羊皮纸右下角的小字一闪而过：施术者亦可自我切割。",
    next: "result",
  },
  result: {
    choices: [
      {
        label: "查看第一章结算",
        hint: "解锁第二章：两人的秘密",
        next: "ending",
      },
    ],
  },
  ending: {
    chapter: "结算",
    bg: "library",
    sprite: "antalia",
    speaker: "系统",
    text: "第一章结束。温柔与克制会降低警戒，观察与亲近会开启更近的距离。第二章将进入临时同盟、灵魂魔法与宫廷阴谋。",
    next: null,
  },
};

const dom = {
  title: document.querySelector("#title-screen"),
  stage: document.querySelector("#stage"),
  start: document.querySelector("#start-game"),
  continue: document.querySelector("#continue-game"),
  bg: document.querySelector("#background"),
  character: document.querySelector("#character"),
  chapter: document.querySelector("#chapter-label"),
  stats: document.querySelector("#stats-label"),
  speaker: document.querySelector("#speaker"),
  line: document.querySelector("#line"),
  dialogue: document.querySelector("#dialogue"),
  choices: document.querySelector("#choice-panel"),
  modal: document.querySelector("#modal"),
  modalTitle: document.querySelector("#modal-title"),
  modalBody: document.querySelector("#modal-body"),
  history: document.querySelector("#history-button"),
  save: document.querySelector("#save-button"),
  load: document.querySelector("#load-button"),
  settings: document.querySelector("#settings-button"),
};

const storeKey = "soft-paws-save-v1";
const settingsKey = "soft-paws-settings-v1";

let state = {
  node: "start",
  stats: { ...initialStats },
  flags: {},
  history: [],
  currentBg: null,
  currentSprite: null,
};

let typing = false;
let fullText = "";
let textTimer = null;
let settings = loadSettings();

function loadSettings() {
  try {
    return { speed: 18, ...JSON.parse(localStorage.getItem(settingsKey)) };
  } catch {
    return { speed: 18 };
  }
}

function saveSettings() {
  localStorage.setItem(settingsKey, JSON.stringify(settings));
}

function preload() {
  [...Object.values(assets.backgrounds), ...Object.values(assets.characters)].forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}

function startGame(fromSave = false) {
  if (fromSave) {
    loadGame(false);
  } else {
    state = {
      node: "start",
      stats: { ...initialStats },
      flags: {},
      history: [],
      currentBg: null,
      currentSprite: null,
    };
  }
  dom.title.classList.add("hidden");
  dom.stage.classList.remove("hidden");
  renderNode();
}

function applyEffects(node) {
  if (!node.effects) return;
  for (const [key, value] of Object.entries(node.effects)) {
    state.stats[key] = Math.max(0, (state.stats[key] ?? 0) + value);
  }
  if (node.flags) {
    Object.assign(state.flags, node.flags);
  }
}

function renderNode() {
  clearTimeout(textTimer);
  const node = story[state.node];
  if (!node) return;

  dom.stage.classList.remove("has-choices");
  dom.choices.classList.add("hidden");
  dom.choices.innerHTML = "";

  if (node.chapter) dom.chapter.textContent = node.chapter;
  if (Object.hasOwn(node, "bg") && node.bg !== state.currentBg) {
    state.currentBg = node.bg;
    dom.bg.style.opacity = "0";
    window.setTimeout(() => {
      dom.bg.src = assets.backgrounds[node.bg];
      dom.bg.style.opacity = "1";
    }, 90);
  }
  if (Object.hasOwn(node, "sprite")) {
    state.currentSprite = node.sprite;
    if (!node.sprite) {
      dom.character.classList.add("hidden");
    } else {
      dom.character.src = assets.characters[node.sprite];
      dom.character.className = `character ${node.sprite === "cat" ? "cat" : ""}`;
    }
  }

  updateStats();

  if (node.choices) {
    typing = false;
    dom.stage.classList.add("has-choices");
    dom.speaker.textContent = "选择";
    dom.line.textContent = "接下来怎么做？";
    renderChoices(node.choices);
    return;
  }

  dom.speaker.textContent = node.speaker ?? "旁白";
  typeLine(node.text ?? "");
  state.history.push({ speaker: dom.speaker.textContent, text: node.text ?? "" });
  trimHistory();
}

function typeLine(text) {
  typing = true;
  fullText = text;
  dom.line.textContent = "";
  let index = 0;
  const tick = () => {
    index += 1;
    dom.line.textContent = fullText.slice(0, index);
    if (index < fullText.length) {
      textTimer = window.setTimeout(tick, settings.speed);
    } else {
      typing = false;
    }
  };
  tick();
}

function finishTyping() {
  clearTimeout(textTimer);
  dom.line.textContent = fullText;
  typing = false;
}

function next() {
  if (typing) {
    finishTyping();
    return;
  }
  const node = story[state.node];
  if (!node || node.choices) return;
  if (!node.next) {
    showModal("通关", resultSummary());
    return;
  }
  state.node = node.next;
  renderNode();
}

function renderChoices(choices) {
  dom.choices.classList.remove("hidden");
  choices.forEach((choice) => {
    const button = document.createElement("button");
    const enabled = !choice.requires || choice.requires(state.stats, state.flags);
    button.disabled = !enabled;
    button.innerHTML = `${choice.label}<small>${enabled ? choice.hint : `未解锁：${choice.hint}`}</small>`;
    button.addEventListener("click", () => {
      applyEffects(choice);
      state.node = choice.next;
      state.history.push({ speaker: "选择", text: choice.label });
      renderNode();
    });
    dom.choices.appendChild(button);
  });
}

function updateStats() {
  dom.stats.textContent = `亲近 ${state.stats.closeness} · 警戒 ${state.stats.vigilance} · 观察 ${state.stats.observation}`;
}

function trimHistory() {
  if (state.history.length > 80) state.history.splice(0, state.history.length - 80);
}

function saveGame(showToast = true) {
  localStorage.setItem(storeKey, JSON.stringify(state));
  if (showToast) showModal("已存档", "<p>当前进度已保存到浏览器。</p>");
}

function loadGame(showToast = true) {
  const raw = localStorage.getItem(storeKey);
  if (!raw) {
    if (showToast) showModal("没有存档", "<p>还没有可读取的存档。</p>");
    return false;
  }
  state = JSON.parse(raw);
  if (showToast) {
    dom.title.classList.add("hidden");
    dom.stage.classList.remove("hidden");
  }
  renderNode();
  return true;
}

function resultSummary() {
  let route = "双刃之契";
  if (state.stats.closeness >= 8 && state.stats.vigilance <= 2) route = "掌中猫";
  if (state.stats.vigilance >= 5) route = "野猫归林";
  if (state.flags.cold && state.stats.closeness <= 1) route = "笼中鸟";
  return `<p>当前导向：<strong>${route}</strong></p><p>亲近 ${state.stats.closeness} · 警戒 ${state.stats.vigilance} · 观察 ${state.stats.observation}</p><p>第二章已解锁：两人的秘密。</p>`;
}

function showModal(title, html) {
  dom.modalTitle.textContent = title;
  dom.modalBody.innerHTML = html;
  dom.modal.showModal();
}

function showHistory() {
  const rows = state.history
    .slice()
    .reverse()
    .map((item) => `<div class="history-line"><strong>${item.speaker}</strong><br>${item.text}</div>`)
    .join("");
  showModal("历史", rows || "<p>暂无历史。</p>");
}

function showSettings() {
  showModal(
    "设置",
    `<label class="settings-row">文字速度
      <input id="speed-range" type="range" min="4" max="40" value="${settings.speed}" />
    </label>
    <p>数值越小，文字出现越快。</p>`,
  );
  document.querySelector("#speed-range").addEventListener("input", (event) => {
    settings.speed = Number(event.target.value);
    saveSettings();
  });
}

dom.start.addEventListener("click", () => startGame(false));
dom.continue.addEventListener("click", () => startGame(true));
dom.dialogue.addEventListener("click", next);
dom.dialogue.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") next();
});
dom.history.addEventListener("click", showHistory);
dom.save.addEventListener("click", () => saveGame(true));
dom.load.addEventListener("click", () => loadGame(true));
dom.settings.addEventListener("click", showSettings);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dom.modal.open) dom.modal.close();
  if ((event.key === "Enter" || event.key === " ") && !dom.modal.open) next();
});

preload();
dom.continue.disabled = !localStorage.getItem(storeKey);

export { story, assets, initialStats };
