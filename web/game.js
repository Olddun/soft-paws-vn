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
  cg: {
    catIntro: "./assets/cg/antalia_cat_intro.png",
    humanReveal: "./assets/cg/antalia_human_reveal.png",
  },
  music: {
    goldberg: "./assets/music/goldberg_aria.ogg",
    gymnopedie: "./assets/music/gymnopedie_no1.ogg",
    toccata: "./assets/music/toccata_bwv565.ogg",
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
    next: "cat_intro_cg",
  },
  cat_intro_cg: {
    cg: "catIntro",
    cgMotion: "catIntro",
    speaker: "旁白",
    text: "笼门后的蓝眼睛抬了起来。那不是宠物看主人的眼神，而是亡国王女隔着金丝笼，第一次审判她的新敌人。",
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
    next: "opening_image",
  },
  opening_image: {
    speaker: "旁白",
    text: "王座厅的欢呼声像潮水一样涌来。塞德里克坐在最高处，年轻得几乎不该拥有这座阴冷的宫殿，也冷静得几乎不像一个刚赢下战争的人。",
    next: "cedric_mask",
  },
  cedric_mask: {
    speaker: "塞德里克",
    text: "胜利不是结束。胜利只是让所有人开始计算下一次背叛的日子。",
    next: "minister_execute",
  },
  minister_execute: {
    speaker: "大臣",
    text: "陛下，猫族残部尚有俘虏。依臣之见，应当今夜处决，以绝后患。",
    next: "theme_stated",
  },
  theme_stated: {
    speaker: "老书记官",
    text: "陛下，笼子能关住身体，却关不住一个愿意等待的人。若要一个人留下，靠的从来不是锁。",
    next: "cedric_lie",
  },
  cedric_lie: {
    speaker: "塞德里克",
    text: "我没有反驳。因为我从十六岁起就学会了一件事：王不需要被爱，王只需要让所有人不敢离开棋盘。",
    next: "spare_prisoners",
  },
  spare_prisoners: {
    speaker: "塞德里克",
    text: "俘虏押去北门营地，给药，给热汤。明日让他们修桥。死人不会缴税，也不会告诉我猫族王宫里到底发生过什么。",
    next: "court_reacts",
  },
  court_reacts: {
    speaker: "旁白",
    text: "群臣的笑声停了一瞬。有人以为这是仁慈，有人听出了算计。笼中的猫终于抬眼看了他一下，又立刻低下头。",
    next: "injured_paw",
  },
  injured_paw: {
    speaker: "旁白",
    text: "她前爪内侧有一道很细的血痕，被长毛遮住。抬笼的侍从没有看见，献宝的大将军没有看见，满殿大臣也没有看见。",
    next: "soft_order",
  },
  soft_order: {
    speaker: "塞德里克",
    text: "换软垫。让兽医在寝宫外候着，不准进来。若有人问，就说我不想我的战利品第一天就坏掉。",
    next: "mask_cost",
  },
  mask_cost: {
    speaker: "旁白",
    text: "这句话残忍得刚好合乎王的身份。只有笼中那双蓝眼睛轻轻一颤，像是第一次意识到，这个年轻国王的残酷也许有两层皮。",
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
    next: "night_scratch",
  },
  night_scratch: {
    speaker: "旁白",
    text: "几秒后，黑暗中传来极轻的脚步声。不是逃跑的慌乱，而是踩过每一块地砖前都先试探重量的谨慎。",
    next: "cedric_awake",
  },
  cedric_awake: {
    speaker: "塞德里克",
    text: "我没有睁眼。猎物若以为猎人睡着，才会露出真正的路线。",
    next: "cat_checks_door",
  },
  cat_checks_door: {
    speaker: "旁白",
    text: "她没有奔向门口，而是先绕到书桌前。爪子拨开一卷边境地图，停在猫族旧王都的位置。",
    next: "cedric_wound",
  },
  cedric_wound: {
    speaker: "塞德里克",
    text: "那座城不是被我烧掉的。至少，不全是。",
    next: "ring_memory",
  },
  ring_memory: {
    speaker: "旁白",
    text: "他指尖碰到枕下的旧银戒。那是先王留下的遗物，也是他至今不愿给任何人看的弱点。王冠太重，重到每个人都默认他没有伤口。",
    next: "cat_returns",
  },
  cat_returns: {
    speaker: "旁白",
    text: "天亮前，她无声地回到床边。没有偷走地图，也没有碰那枚戒指，只在桌角留下一缕浅杏色长毛。",
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
    next: "morning_paw",
  },
  morning_paw: {
    speaker: "旁白",
    text: "猫缓缓睁眼，先看他的脸，再看他枕边的银戒。她没有碰，只把受伤的前爪藏进胸前长毛里。",
    next: "breakfast_arrives",
  },
  breakfast_arrives: {
    speaker: "侍女",
    text: "陛下，早膳送到了。御厨按您的吩咐，没有放会让猫族不适的香料。",
    next: "cat_surprised",
  },
  cat_surprised: {
    speaker: "旁白",
    text: "安塔莉亚的耳尖动了一下。那一瞬间，她像是忘了自己该装成没有灵智的宠物。",
    next: "cedric_excuse",
  },
  cedric_excuse: {
    speaker: "塞德里克",
    text: "别误会。朕只是讨厌麻烦。战利品病了，还得听一群人争论该不该埋。",
    next: "cat_first_soften",
  },
  cat_first_soften: {
    speaker: "旁白",
    text: "她低头舔了舔爪尖，没有回应。可那条一直紧绷的尾巴，终于不再像弓弦一样僵硬。",
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
    next: "breakfast_result",
  },
  ignore_cat: {
    speaker: "旁白",
    text: "她蹲在窗台上梳理毛发，蓝眼睛偶尔扫过来，像在确认你到底是真冷漠，还是另有打算。",
    next: "breakfast_result",
  },
  teaser_cat: {
    speaker: "旁白",
    text: "黑檀木杆，银色丝线，末端缀着羽毛和铃铛。猫的耳朵瞬间竖直，瞳孔微微放大，却硬是别过脸去。",
    next: "teaser_line",
  },
  teaser_line: {
    speaker: "塞德里克",
    text: "啧，明明很想扑过来吧？行，有骨气。",
    next: "breakfast_result",
  },
  breakfast_result: {
    speaker: "旁白",
    text: "早膳后，她没有钻回笼子，而是选了离书桌最近的地毯趴下。距离仍远，却已经不是逃跑时才会选择的位置。",
    next: "save_the_cat",
  },
  save_the_cat: {
    speaker: "旁白",
    text: "午后，王宫花园传来侍从的呵斥。一只从战俘营跑来的灰白小猫被逼到喷泉边，浑身湿透，爪子还勾着半块发硬的面包。",
    next: "servant_raise_hand",
  },
  servant_raise_hand: {
    speaker: "侍从",
    text: "陛下，这种野东西会弄脏花园，属下这就处理掉。",
    next: "cedric_save_cat",
  },
  cedric_save_cat: {
    speaker: "塞德里克",
    text: "处理？北门营地今天缺一个会抓老鼠的。把它擦干，送过去。再让厨房多煮一锅鱼汤，就说是给士兵的。",
    next: "antalia_watches",
  },
  antalia_watches: {
    speaker: "旁白",
    text: "安塔莉亚站在窗台阴影里看着这一幕。她明明还是猫的模样，眼神却像一个失去国家的人，第一次看见敌人没有踩碎一件小小的东西。",
    next: "cedric_need",
  },
  cedric_need: {
    speaker: "塞德里克",
    text: "我不救猫。我只是不喜欢无意义的损耗。",
    next: "antalia_silent_answer",
  },
  antalia_silent_answer: {
    speaker: "旁白",
    text: "她没有拆穿他，只在经过他脚边时，用尾巴尖很轻地扫了一下他的靴面。像一句不情愿的：我看见了。",
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
    next: "grain_case",
  },
  grain_case: {
    speaker: "大臣",
    text: "北境雪灾，粮草告急。若要救民，就得从南境抽粮；可南境刚被战火掏空，抽粮等于逼他们造反。",
    next: "cedric_hard_choice",
  },
  cedric_hard_choice: {
    speaker: "旁白",
    text: "这是王最熟悉的题。无论选哪边，都有人会死；无论怎么解释，史书只会留下一句轻飘飘的昏聩或残忍。",
    next: "cat_map_signal",
  },
  cat_map_signal: {
    speaker: "旁白",
    text: "膝上的猫忽然伸爪，按住地图上一条废弃水道。那条水道通向猫族旧仓，战报里说那里已经被烧成灰烬。",
    next: "cedric_reads_signal",
  },
  cedric_reads_signal: {
    speaker: "塞德里克",
    text: "北境军走水道。若旧仓还有粮，先救三座城；若没有，就把水道改成撤民路线。",
    next: "minister_mock",
  },
  minister_mock: {
    speaker: "大臣",
    text: "陛下，这是那只猫碰出来的位置，怎能当真？",
    next: "cedric_public_shield",
  },
  cedric_public_shield: {
    speaker: "塞德里克",
    text: "所以功劳归我，错也归我。你们若连一只猫碰过的地图都不敢查，明日就把官印交给她。",
    next: "cat_reaction_council",
  },
  cat_reaction_council: {
    speaker: "旁白",
    text: "满厅寂静里，安塔莉亚低下头，假装自己只是在舔爪。但塞德里克感觉到，她的尾巴没有再离开他的手背。",
    next: "after_council",
  },
  after_council: {
    speaker: "旁白",
    text: "散朝后，塞德里克独自回到寝宫。猫跟在三步之外，始终保持着能逃跑、也能听见他说话的距离。",
    next: "cedric_confesses_little",
  },
  cedric_confesses_little: {
    speaker: "塞德里克",
    text: "我十五岁时，也被人关在这座宫殿里。只是我的笼子比较大，外面的人还会对它下跪。",
    next: "cat_listens",
  },
  cat_listens: {
    speaker: "旁白",
    text: "她停住脚步。那不是信任，甚至谈不上同情。只是某种同类之间的辨认：原来你也知道笼子的形状。",
    next: "false_victory",
  },
  false_victory: {
    speaker: "旁白",
    text: "傍晚，北境传来急报：水道确有旧仓，粮草足够三城撑过七日。朝臣赞颂国王英明，没人知道那是猫族公主给出的路。",
    next: "cedric_reward",
  },
  cedric_reward: {
    speaker: "塞德里克",
    text: "今晚的鱼汤多放一份。理由？朕今日心情好。",
    next: "antalia_almost_purr",
  },
  antalia_almost_purr: {
    speaker: "旁白",
    text: "猫埋头喝汤，喉间差点滚出一声轻微的呼噜。她猛地停住，羞恼地抬眼看他，像是在警告他不准听见。",
    next: "evening_book",
  },
  evening_book: {
    speaker: "旁白",
    text: "入夜前，塞德里克在书桌上摊开一本旧童话。那是王宫里少数没有被战争和政务染脏的东西，纸页边缘已经被翻得发软。",
    next: "cedric_reads_fable",
  },
  cedric_reads_fable: {
    speaker: "塞德里克",
    text: "故事里说，月亮把迷路的猫藏进国王的袖子里。国王以为自己捡到一件宝物，后来才发现，是猫把他从孤独里捡了出来。",
    next: "cat_pretends_sleep",
  },
  cat_pretends_sleep: {
    speaker: "旁白",
    text: "窗台上的猫闭着眼，尾巴却一下比一下慢地晃。她显然在听，又坚决不肯承认自己在听。",
    next: "cedric_tutor_memory",
  },
  cedric_tutor_memory: {
    speaker: "塞德里克",
    text: "老书记官以前也给我念过这段。他说人会把害怕失去的东西叫作所有物，这样失去时就能假装只是财产损坏。",
    next: "antalia_opens_eye",
  },
  antalia_opens_eye: {
    speaker: "旁白",
    text: "安塔莉亚睁开一只眼。那一眼没有温柔，却有判断。她在判断这个国王说这些话，是诱饵，是忏悔，还是他自己也不懂的求救。",
    next: "cedric_not_ready",
  },
  cedric_not_ready: {
    speaker: "塞德里克",
    text: "别这样看我。我还没高尚到能放你走。",
    next: "quiet_bond",
  },
  quiet_bond: {
    speaker: "旁白",
    text: "她轻轻跳下窗台，绕开他的手，最后却选在离他书桌半步远的地毯上蜷下。不是原谅，只是暂时不走。",
    next: "moon",
  },
  moon: {
    chapter: "月圆之夜",
    bg: "entrance",
    sprite: null,
    speaker: "旁白",
    text: "月圆之夜，猫窝里只剩一团被精心整理过的毯子。塞德里克放下酒杯，身形无声地没入走廊阴影。",
    next: "debate_follow",
  },
  debate_follow: {
    speaker: "塞德里克",
    text: "我本可以叫卫兵。本可以封死所有密道。本可以让她永远不知道自己哪一步露了破绽。",
    next: "arc_choice_private",
  },
  arc_choice_private: {
    speaker: "塞德里克",
    text: "可那样我得到的只会是一只真正的笼中猫。老书记官说得对，锁不能让人留下。至少今晚，我想试试不用锁。",
    next: "magic_wall",
  },
  magic_wall: {
    speaker: "旁白",
    text: "王宫深处的死胡同前，幽蓝色术式一条接一条熄灭。月光照在猫的身上，然后皮毛褪去，少女的身影缓缓成形。",
    next: "human_reveal_cg",
  },
  human_reveal_cg: {
    cg: "humanReveal",
    cgMotion: "humanReveal",
    speaker: "旁白",
    text: "月光像银色王冠落在她发间。塞德里克终于看见安塔莉亚真正的样子，也看见她拼命藏住的孤独与骄傲。",
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
    next: "antalia_goal",
  },
  antalia_goal: {
    speaker: "旁白",
    text: "那不是逃跑用的咒。她破开的不是王宫外墙，而是通往禁书库的封印。一个想逃的人不会先去偷一本七百年前的旧书。",
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
    next: "library_page",
  },
  library_page: {
    speaker: "旁白",
    text: "羊皮纸上画着一枚被剖开的月轮。旁边的古语被她用指尖一行行描过：灵魂可切，记忆可封，形体可伪。",
    next: "antalia_private_goal",
  },
  antalia_private_goal: {
    speaker: "安塔莉亚",
    text: "父王说过，王室血脉不会无故退化。若我只能当猫，说明有人把我作为人的那一半藏起来了。",
    next: "cedric_hears_name",
  },
  cedric_hears_name: {
    speaker: "旁白",
    text: "她说“父王”时，声音几乎碎在喉咙里。那不是公主的骄傲，而是一个女儿不肯承认自己已经无处可回。",
    next: "cedric_memory_of_report",
  },
  cedric_memory_of_report: {
    speaker: "塞德里克",
    text: "战报里写的是猫族王族死于宫廷自焚。可自焚的宫殿不会把术式痕迹擦得那么干净。",
    next: "cedric_can_use_her",
  },
  cedric_can_use_her: {
    speaker: "塞德里克",
    text: "如果她真能解开灵魂切割术，我就能拿到先王战争的证据，也能把朝堂上那些老狐狸从暗处逼出来。",
    next: "cedric_catches_self",
  },
  cedric_catches_self: {
    speaker: "旁白",
    text: "他本该只想到利用。可看见她赤足站在寒冷石地上，指节因为翻书太久而发白，他忽然觉得这念头有些刺耳。",
    next: "caught",
  },
  caught: {
    speaker: "塞德里克",
    text: "三年来，你每天晚上从我的床上爬起来，变成人，光着脚走到这里，就是为了偷看一本七百年前的旧书？",
    next: "antalia_startled",
  },
  antalia_startled: {
    speaker: "旁白",
    text: "安塔莉亚猛地回身。猫耳完全竖起，尾巴炸开，蓝眼睛缩成细线。她先看的不是门，而是他手中有没有武器。",
    next: "cedric_no_guards",
  },
  cedric_no_guards: {
    speaker: "塞德里克",
    text: "别找了。没有卫兵，没有锁链，也没有魔法师。今晚这里只有我。",
    next: "antalia_accuse",
  },
  antalia_accuse: {
    speaker: "安塔莉亚",
    text: "所以你是来欣赏战利品会说话的样子？还是来确认我还剩多少价值？",
    next: "cedric_answer_badly",
  },
  cedric_answer_badly: {
    speaker: "塞德里克",
    text: "都有。",
    next: "truth_hurts",
  },
  truth_hurts: {
    speaker: "旁白",
    text: "这句诚实比谎言更伤人。安塔莉亚抿紧嘴唇，刚刚在花园和议事厅里积攒起的一点点松动，又被迫缩回坚硬的壳里。",
    next: "cedric_learns",
  },
  cedric_learns: {
    speaker: "塞德里克",
    text: "话出口的一瞬间，我就知道自己错了。王习惯把真心藏进刀鞘里，可不是每个人都该被刀柄碰到。",
    next: "teaser_reveal",
  },
  teaser_reveal: {
    speaker: "旁白",
    text: "为了不让自己显得太认真，他从身后拿出那根逗猫棒。银铃在禁书库里响起，清脆得近乎残忍。",
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
  cgStage: document.querySelector("#cg-stage"),
  cg: document.querySelector("#event-cg"),
  cgLive: document.querySelector("#cg-live"),
  cgEffects: document.querySelector("#cg-effects"),
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
const musicMoods = {
  throne: "goldberg",
  bed: "gymnopedie",
  council: "goldberg",
  entrance: "toccata",
  library: "toccata",
};

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
let audio = {
  ctx: null,
  tracks: {},
  current: null,
  mood: null,
};

function loadSettings() {
  try {
    return { speed: 18, music: 0.28, ...JSON.parse(localStorage.getItem(settingsKey)) };
  } catch {
    return { speed: 18, music: 0.28 };
  }
}

function saveSettings() {
  localStorage.setItem(settingsKey, JSON.stringify(settings));
}

function preload() {
  [...Object.values(assets.backgrounds), ...Object.values(assets.characters), ...Object.values(assets.cg)].forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}

function initAudio() {
  if (settings.music <= 0) return;
  if (!Object.keys(audio.tracks).length) {
    for (const [key, src] of Object.entries(assets.music)) {
      const track = new Audio(src);
      track.loop = true;
      track.preload = "auto";
      track.volume = 0;
      audio.tracks[key] = track;
    }
  }
  if (!audio.ctx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audio.ctx = new AudioContext();
  }
  if (audio.ctx?.state === "suspended") audio.ctx.resume();
}

function stopMood() {
  if (audio.current) {
    audio.current.pause();
    audio.current.currentTime = 0;
    audio.current.volume = 0;
  }
  audio.current = null;
}

function setMusicVolume(value) {
  settings.music = value;
  saveSettings();
  if (value <= 0) {
    stopMood();
    audio.mood = null;
  } else {
    initAudio();
    if (audio.current) audio.current.volume = value;
    if (state.currentBg) startMood(state.currentBg);
  }
}

function startMood(mood) {
  if (settings.music <= 0 || !musicMoods[mood]) return;
  initAudio();
  if (audio.mood === mood) return;
  const nextTrack = audio.tracks[musicMoods[mood]];
  if (!nextTrack) return;
  if (audio.current && audio.current !== nextTrack) {
    audio.current.pause();
    audio.current.currentTime = 0;
    audio.current.volume = 0;
  }
  audio.mood = mood;
  audio.current = nextTrack;
  audio.current.volume = settings.music;
  audio.current.play().catch(() => {});
}

function playUiTone(kind = "next") {
  if (settings.music <= 0 || !audio.ctx) return;
  const now = audio.ctx.currentTime;
  const osc = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  const master = audio.ctx.createGain();
  master.gain.value = 0.35;
  master.connect(audio.ctx.destination);
  osc.type = "sine";
  osc.frequency.value = kind === "choice" ? 740 : 520;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.035, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
  osc.connect(gain);
  gain.connect(master);
  osc.start(now);
  osc.stop(now + 0.2);
}

function startGame(fromSave = false) {
  initAudio();
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
    startMood(node.bg);
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
  if (Object.hasOwn(node, "cg")) {
    if (!node.cg) {
      dom.cgStage.classList.add("hidden");
    } else {
      dom.cg.src = assets.cg[node.cg];
      dom.cgStage.style.setProperty("--cg-image", `url("${assets.cg[node.cg]}")`);
      dom.cgStage.className = `cg-stage ${node.cgMotion ?? node.cg}`;
      dom.cg.style.animation = "none";
      dom.cgEffects.style.animation = "none";
      for (const part of dom.cgLive.querySelectorAll(".cg-part, .cg-shot")) part.style.animation = "none";
      void dom.cg.offsetWidth;
      dom.cg.style.animation = "";
      dom.cgEffects.style.animation = "";
      for (const part of dom.cgLive.querySelectorAll(".cg-part, .cg-shot")) part.style.animation = "";
      dom.character.classList.add("hidden");
    }
  } else if (!node.choices) {
    dom.cgStage.classList.add("hidden");
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
    playUiTone();
    return;
  }
  const node = story[state.node];
  if (!node || node.choices) return;
  if (!node.next) {
    showModal("通关", resultSummary());
    return;
  }
  state.node = node.next;
  playUiTone();
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
      initAudio();
      applyEffects(choice);
      state.node = choice.next;
      state.history.push({ speaker: "选择", text: choice.label });
      playUiTone("choice");
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
    <label class="settings-row">音乐音量
      <input id="music-range" type="range" min="0" max="0.5" step="0.01" value="${settings.music}" />
    </label>
    <p>文字速度数值越小，文字出现越快。音乐会随场景切换。</p>`,
  );
  document.querySelector("#speed-range").addEventListener("input", (event) => {
    settings.speed = Number(event.target.value);
    saveSettings();
  });
  document.querySelector("#music-range").addEventListener("input", (event) => {
    setMusicVolume(Number(event.target.value));
  });
}

function shouldIgnoreStageAdvance(event) {
  return Boolean(event.target.closest("button, dialog, .choice-panel, .topbar"));
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
dom.stage.addEventListener("click", (event) => {
  if (!shouldIgnoreStageAdvance(event) && !event.target.closest(".dialogue")) next();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dom.modal.open) dom.modal.close();
  if ((event.key === "Enter" || event.key === " ") && !dom.modal.open) next();
});

preload();
dom.continue.disabled = !localStorage.getItem(storeKey);

export { story, assets, initialStats };
