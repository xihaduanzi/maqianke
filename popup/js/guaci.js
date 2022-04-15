

var span=document.querySelector('#desc');
var d=document.querySelector('#jiegua');
 
const sendMessageId = document.getElementById("k_g");

let jie_gua=[
  "<div class=\"card\"> <div class=\"card-body\"> <p> 大安:身未动时.属木 青龙.谋事一五七(属四肢)有静止、心安。吉祥之含义。贵人西南.冲犯东方.大人青面阴神.小孩婆祖六畜惊。解曰:大安事事昌,求财在坤方。失物去不远,宅舍保安康。行人身未动,病者主无妨。 将军回田野,仔细更推详。</p></div></div>",
  "<div class=\"card\"> <div class=\"card-body\"> <p> 留连:卒未归时.属水 玄武.谋事二八十(属肾胃)有喑味不明,延迟。纠缠.拖延、漫长之含义。贵人南方.冲犯北方.大人乌面夫人.小孩游路亡魂。解曰:留连事难成,求谋日未明。官事凡宜缓。去者未回程。失物南方见,急讨方心称。 更须防口舌,人口且平平。</p></div></div>",
  "<div class=\"card\"> <div class=\"card-body\"> <p> 速喜:人便至时.属火 朱雀.谋事三六九(属心脑)有消息、快速、喜庆、吉利之含义。指时机已到。贵人西南.冲犯南方.大心火箭将军.小孩婆祖动物惊。解曰:速喜喜来临,求财向南行。失物申未午,逢人路上寻。官事有福德,病者无祸侵。 田宅六畜吉,行人有信音。</p></div></div>",
  "<div class=\"card\"> <div class=\"card-body\"> <p> 赤口:官事凶时.属金 白虎.谋事四七十(属肺胃)有不吉、惊恐,凶险、口舌、道路、交通是非之含义。贵人东方.冲犯西方.大人金神七煞.小孩迷魂童子。解曰:赤口主口舌,官非切宜防。失物速速讨,行人有惊慌。六畜多作怪,病者出西方。 更须防咀咒,诚恐染瘟殃。</p></div></div>",
  "<div class=\"card\"> <div class=\"card-body\"> <p> 小吉:人来喜时.属木 六合.谋事一五七(属肝肠)有和合、吉利、贵人、婚姻之含义。贵人西南.冲犯东方.大人无主家神.小孩婆祖六畜惊.解曰:小吉最吉昌,路上好商量。阴人来报喜,失物在坤方。行人即便至,交易甚是强。 凡事皆和合,病者告上苍。</p></div></div>",
  "<div class=\"card\"> <div class=\"card-body\"> <p> 空亡:音信稀时.属土勾陈.主事三六九(属脾脑)有不吉、无结果、忧虑、虚空、不实、阻隔之含义。贵人北方.冲犯厝地.大人土压夫人.小孩土瘟神煞。解曰:空亡事不详,阴人多乖张。求财无利益,行人有灾殃。失物寻不见,官事有刑伤。 病人逢暗鬼,禳解保安康。</p></div></div>",
]

if (sendMessageId) {
   sendMessageId.onclick = function(){
    // do something
    let a = jie_gua[qigua];
    document.getElementById('g_5').innerHTML=a;
  };
}