define c = Character("塞德里克")
define a = Character("安塔莉亚")
define g = Character("大将军")
define m = Character("大臣")

default closeness = 0
default vigilance = 0
default observation = 0
default cold_route = False
default teaser_seen = False

image bg throne = "assets/backgrounds/throne_hall.png"
image bg bed = "assets/backgrounds/bedchamber.png"
image bg council = "assets/backgrounds/council_chamber.png"
image bg entrance = "assets/backgrounds/forbidden_entrance.png"
image bg library = "assets/backgrounds/forbidden_library.png"
image antalia = "assets/characters/antalia.png"
image antalia_cat = "assets/characters/antalia_cat.png"

label start:
    scene bg throne
    "圣历一七四年，灭国战争结束后的第三十日。北境大将军凯旋而归，献上的不是敌国国王的首级，而是一只笼子。"
    g "陛下！臣在猫族王宫废墟中寻得此物。布偶猫族最后的王室血脉，特献于陛下。"
    show antalia_cat
    "金丝笼被抬上殿来。笼中蜷缩着一只布偶猫，蓝宝石般的眼睛藏在蓬松浅杏色长毛下。"
    c "长得倒是不错。可惜是只不能化人的兽族。养着玩吧。"
    c "她在发抖。不是因为害怕，而是因为愤怒。有意思。"

    menu:
        "沉默地转身回王座":
            pass
        "临走前多看她一眼":
            $ observation += 1
            c "刚才那一瞬间，她的眼睛里有光。不是猫的光，是人的光。"

    scene bg bed
    show antalia_cat
    "当夜，金丝笼被摆在国王寝宫一角。塞德里克下令打开了笼门。"
    c "出来。我不喜欢养笼中鸟。"
    "猫从笼中慢慢走出，每一步都带着戒备。"
    c "你听得懂我说话，对吧？"
    "猫的耳朵猛地动了一下。"
    c "晚安，小猫。做个好梦，如果猫会做梦的话。"

    "晨光洒入寝宫。塞德里克从床上坐起，发现猫正趴在他胸口。"
    c "你什么时候跑上来的？胆子不小。"

    menu:
        "伸手去摸她":
            $ closeness += 2
            "她没有立刻躲开，只是用尾巴挡住自己的脸。"
        "叫侍从送早饭，不理她":
            $ closeness = max(0, closeness - 1)
            $ cold_route = True
            "她蹲在窗台上梳理毛发，偶尔扫过来一眼。"
        "拿出逗猫棒逗她玩":
            $ closeness += 5
            $ observation += 1
            $ teaser_seen = True
            "黑檀木杆，银色丝线，末端缀着羽毛和铃铛。猫的耳朵瞬间竖直。"
            c "啧，明明很想扑过来吧？行，有骨气。"

    scene bg council
    show antalia_cat
    "议事厅里，大臣们为边境粮草争吵不休。"
    m "陛下！议事之时携带兽族玩物，实在有失体统。"
    c "她比你们安静多了。"
    "猫似乎听懂了，尾巴轻轻拍了一下塞德里克的手背。"
    c "这个动作不像猫会做的。更像是一个不耐烦的女孩子，在表达：闭嘴。"

    scene bg entrance
    hide antalia_cat
    "月圆之夜，猫窝里只剩一团被精心整理过的毯子。"
    "王宫深处的死胡同前，幽蓝色术式一条接一条熄灭。"
    show antalia
    "月光照在猫的身上，然后皮毛褪去，少女的身影缓缓成形。"
    a "破。"
    c "玩够了。"

    scene bg library
    show antalia
    "禁书库内，安塔莉亚背对入口，俯身阅读摊开的羊皮纸。"
    c "三年来，你每天晚上从我的床上爬起来，变成人，光着脚走到这里，就是为了偷看一本七百年前的旧书？"

    menu:
        "继续逼近，看她还能忍多久":
            $ vigilance += 3
            $ closeness = max(0, closeness - 1)
            "她的尾巴炸成一团，蓝眼睛里翻起尖锐的敌意。"
        "收回逗猫棒，退后一步":
            $ vigilance = max(0, vigilance - 2)
            $ closeness += 2
            c "行了，不逗你了。"
            a "你什么时候发现的？"
            c "第一天。"
        "伸手捏住她的猫耳朵" if closeness >= 5 and observation >= 1:
            $ closeness += 3
            $ vigilance += 1
            "指尖触到猫耳的一瞬间，她猛地按住你的手腕，却没有真的推开。"
            a "你什么时候发现的？"
            c "第一天。"

    c "灵魂切割术。你查这个，是为了找猫族覆灭的真相？"
    c "你有没有想过，也许我留着你的命，不是为了养着玩，而是因为我和你在找同一样东西。"
    "长明灯的火光跳了一下。羊皮纸右下角的小字一闪而过：施术者亦可自我切割。"
    "第一章结束。第二章解锁：两人的秘密。"
    return
