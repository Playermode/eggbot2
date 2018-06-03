const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!";


var fortunes = [
    "Yes",
    "No",
    "NOU",
    "Maybe",
    "No you egg thats a horrible idea why did you even ask that in the first place eggling",
    "YES THATS THE BEST IDEA I HAVE HEARD IN MY LIFE",
    "The egg klan says yes so I say yes",
    "Congrats you've proven that you are in fact an egg with that question  (my answer is no eggling if you couldnt tell) https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/f/fb/Sled_Racing_Clapping_%281%29.gif/revision/latest?cb=20170415231449"
]; 

var WOD = [
    "Todays word of the day is Eggtown!",
    "Todays word of the day is Eggs",
    "Todays word of the day is Essay!",
    "Todays word of the day is Homework!",
    "Todays word of the day is Whats up dude!",
    "Todays word of the day is Anime Police",
    "Todays word of the day is President",
    "Todays word of the day is Nefarious",
    "Todays word of the day is Egg Bot!",
    "Todays word of the day is Gab2005",
    "Todays word of the day is Anime",
    "Todays word of the day is Elmo",
    "Todays word of the day is B00t",
    "Hah no word of the day for you my friend :))))))))))))))))))))))))",
    "Todays word of the day is nou",
    "Todays word of the day is Lunax",
    "Todays word of the day is thekippinggamer",
    "Todays word of the day is PlumberMotor",
    "Todays word of the day is LoonAxe",
    "Todays word of the day is English",
    "Todays word of the day is Playermode",
    "Todays word of the day is Bart",
    "Todays word of the day is Bootleg Turtle",
    "Todays word of the day is SkyStone",
    "Todays word of the day is Pingkeplol69",
    "Todays word of the day is Eggmode",
    "Todays word of the day is PonkerPunker",
    "Todays word of the day is Lunax's Server v3284938",
    "Todays word of the day is Pengkip",
    "Todays word of the day is egg klan",
    "Todays word of the day is baby cakes",
    "Todays word of the day is Marie",
    "Todays word of the day is sleep",
    "Todays word of the day is active",
    "Todays word of the day is giant",
    "Todays word of the day is insomnia",
    "Todays word of the day is sleep",
    "Todays word of the day is eggling",
    "Todays word of the day is Grammar",
    "Todays word of the day is Big Time Rush",
    "Todays word of the day is Klub Pengu Rewrotten",
    "Todays word of the day is Money",
    "Todays word of the day is Club Penguin Rewritten",
    "Todays word of the day is Eggs > Muffins",
    "Todays word of the day is :madman:",
    "Todays word of the day is hecc u",
    "Todays word of the day is icarly shouldn't have been ended",
    "Todays word of the day is thank lunarx for some words :egg2:",
    "Todays word of the day is watch lunax's cprmvs",
    "Todays word of the day is i miss club penguin",
    "Todays word of the day is namaste",
    "Todays word of the day is Vert!",
    "Todays word of the day is FabledFish!",
    "Todays word of the day is Baseball",
    "Todays word of the day is Baseball Discord",
    "Todays word of the day is TypicalLlamaJoey"
];

var eggrating = [
    "1 tsk tsk been doing naughty naughty bad egg things I see",
    "2 tsk tsk been doing not so good egg things lately",
    "3 seems as though you've been slacking in the egg department recently ://///",
    "4 I mean you're still a egg but could be better",
    "5 You're the everyday egg.  Not big or small or bad but just an egg",
    "6 You're similar to the everyday egg but you still do better as an egg then them",
    "7 Wowzar you've been doing some eggy things",
    "8 Congrats you're excelling in egg culture",
    "9 Good job!  You are being a big egg and doing very very well in egg culture",
    "10 WOW! You're a big egg!  I see you're an egg of culture",
    "10459954389574845748, I didnt even know you could be that large of an egg.  You might be next in line for egg master in the egg klan."
];

var job = [
    "Egg janitor",
    "Egg officer",
    "Egg mayor",
    "Egg deputy",
    "Egg FBI",
    "Egg pizza maker",
    "Egg police officer",
    "Anime lover",
    "Egg president",
    "Egg lord",
    "Bad egg, wow I egg bot havent commented on any other of these jobs but wow.  You should probably stop being a bad egg and become a good egg :egg2:",
    "Good egg",
    "Egg vice president",
    "Egg accountant",
    "Egg judge",
    "Egg lawyer",
    "Egg",
    "Homeless egg",
    "Shrek"
];

var whodidit = [
    "thekippinggamer",
    "the egg police",
    "scott cawthon",
    "lunarx",
    "pingkeplol69",
    "Pengkips youtube channel",
    "Driver3NO",
    "I don't know go ask gab, he holds the answer to everything",
    "Egg klan",
    "The ugandan commandos",
    "Guyscience",
    "Playermode",
    "Eggmode",
    "Gab",
    "Bag2006 (gab's older brother)",
    "The egg lords of eggtown",
    "The ghost of eggmas past",
    "The locobat company",
    "the mo-gang (play on mojang you uncultured swine)",
    "steven",
    "a long overdue diss track",
    "bad eggs (CALL THE EGG POLICE AAAHHG)",
    "ERROR- NO ONE DID IT, EGGRONA",
    "No you did it you big eggrona why did you even ask :madman:",
    "I don't know go ask gab, he holds the answer to everything",
    "Skystone",
    "Lostindonuts",
    "Lost(Eggs)Cookehs",
    "Nichole",
    "Drewcakes",
    "Arcuness",
    "SHOCKDOGZ THE HUGE EGG",
    "Vert the egg",
    "The egg janitor",
    "The egg president",
    "Codey",
    "Lunax and Skystone",
    "Vert",
    "Shaz",
    "FabledFish",
    "Club Penguin Online",
    "Club Penguin Universe",
    "Drivr3Joesphs Baseball Discord",
    "Drivr3Joesph",
    "Eggmode",
    "Eggneh",
    "Ouattack05",
    "JosetheJbot",
    "PlanetPuffle",
    "DrewCakes",
    "Flame",
    "LiamCPR",
    "SC1 Sam",
    "Shaz",
    "TypicalLlamaJoey",
    "PufflePlanet rawr xD",
    "Storm",
    "club super eggtown pang flip rewritten vintage universe evolved remade dab perfected penguin",
    "Flippr",
    "Club Penguin Rewritten",
    "Club Penguin Rewritten the video",
    "Illustrious Lame",
    "The person who first said rawr xD",
    "Egglando",
    "Club Penguin Adidas",
    "Club Penguin De-Evolved"
];

var aprilfools = [
    "Pengur When",
    "XDDDDDDD",
    "Vert is quite an egg",
    "Gab is my favorite",
    "Baby dont hurt me",
    "Pengur Now",
    "Lunax - Today at 9:54 PM BIG TIME RUSH OH OH OHHH OHHHHH MAKE It COUNT PLAY IT STRAIGHT DONT LOOK BACK DONT HESITATE WHEN U GO B I G T I M E WHAT U KNOW WHAT U FEEL NEVER QUIT AND MAKE IT REAL AND U ROLL BIG TIME OH OH OH HEY OH HEY OH LISTEN TO UR HEART NOWHEY OH HEY OH DONT U FEEL THE RUSH HEY OH HEY OH BETTER TAKE UR SHOT NOW OH OH OH OHH",
    "is your childhood ruinedx2",
    "s u c c  an Eggy",
    "you sunk my eggship",
    "somebody spoiled the egg carton",
    "we're now changing this server to shrektown, all who appose will be destroyed",
    "Has your life been ruined",
    "consume your calcium",
    "HeWWO",
    "01011000 01000100 01000100 01000100 01000100 01000100",
    "JOIN MY BASEBALL SERVER",
    "Stop dab and anime it 2018!!!!!!!!",
    "XDDDDDDDDD",
    "eggroni pizza",
    "ripperoni",
    "https://www.youtube.com/watch?v=2yPX07vho0w",
    "doornax",
    "eggs deeee",
    "Eggtown is shutting down on April 1st 2022.",
    "Maybe",
    "I think Inspector Gadget would say **y e s**",
    "I think Inspector Gadget would say **n o**",
    "https://www.youtube.com/watch?v=LZ3mHEmyycw",
    "you look like the guy from high school musical",
    "you sorta look like shrek",
    "you look like gab which means you're amazing which means yes",
    "hah no",
    "hah yes",
    "Yeah I guess",
    "NO THAT IS THE MOST STUPID THING IVE EVER HEARD",
    "I like eggs tbh",
    "Gab is great amiright?",
    "What is an egg?",
    "I would rather fly to Jupiter than answer that question",
    "Ask me a question? Hah I'm not the one on trial."
];

var when = [
    "Probs Tomorrow",
    "Yesterday :madman:",
    "In one hour",
    "In two hours",
    "In three hours",
    "In four hours",
    "In five hours",
    "In six hours",
    "In seven hours",
    "In eight hours",
    "In nine hours",
    "In ten hours",
    "In eleven hours",
    "In twelve hours",
    "In thirteen hours",
    "In fourteen hours",
    "In sixteen hours",
    "In eighteen hours",
    "In nineteen hours",
    "In twenty hours",
    "In twenty one hours",
    "In twenty two hours",
    "In twenty three hours",
    "In twenty four hours",
    "When pengur releases",
    "At 11:69pm",
    "At 11:61pm",
    "At 4:01am",
    "In one day",
    "In two days",
    "In three days",
    "In four days",
    "In five days",
    "In six days",
    "In seven days",
    "In eight days",
    "In nine days",
    "In ten days",
    "When Eggbot Version 90 comes out XDDDDD",
    "When Pengkip hates Splatoon",
    "Right now",
    "When Lunax makes Club Penguin Rewritten the video three",
    "When this discord gets -100 Members",
    "In 1 year",
    "In 2 years",
    "In 3 years",
    "In 4 years",
    "In 5 years",
    "In 6 years",
    "In 7 years",
    "In 8 years",
    "In 9 years",
    "In 10 years",
    "In 50 years",
    "In 20 years",
    "In 10 years",
    "In 100 years",
    "In 80 years",
    "In 71 years",
    "In 34 years",
    "In 40 years",
    "In 30 years",
    "In 900 years",
    "https://cdn.discordapp.com/attachments/386610342077267968/431265212105097236/unknown.png"
];

var guysciencedms = [
    "t  r  y    s  p  i  n  n  i  n  g",
    "oof ouch owie my ***i  m  m  e  r  s  i  o  n***",
    "A giant lightsaber helicopter army and the emperor riding one and saying “unlimited power” while striking people  with lightning in the process",
    "i guess our next weapon will be the SUPER ULTRA MEGA NUKE, made by general guyscience in under 3 minutes, kills everything in a 1000 mile radius, no exceptions",
    "oh idk what an imbed is nor do i care (guyscience spelt embed wrong :((((( )",
    "Go to sleep"
];

var ponkerpunker = [
    "https://twitter.com/BjarturG1/status/965694635136962561",
    "https://twitter.com/BjarturG1/status/966058656650420224",
    "https://twitter.com/BjarturG1/status/966421049503035392",
    "https://twitter.com/BjarturG1/status/966783428007006208",
    "https://twitter.com/BjarturG1/status/967145821400596480",
    "https://twitter.com/BjarturG1/status/967508205654986754",
    "https://twitter.com/BjarturG1/status/967870596142043136",
    "https://twitter.com/BjarturG1/status/968232982778609665",
    "https://twitter.com/BjarturG1/status/968595354533945350",
    "https://twitter.com/BjarturG1/status/968957762343440385",
    "https://twitter.com/BjarturG1/status/969320147616923648",
    "https://twitter.com/BjarturG1/status/969682528935301121",
    "https://twitter.com/BjarturG1/status/970044922614239232",
    "https://twitter.com/BjarturG1/status/970407307573112833",
    "https://twitter.com/BjarturG1/status/970769698949394433",
    "https://twitter.com/BjarturG1/status/971132089906196519",
    "https://twitter.com/BjarturG1/status/971494472818348032",
    "https://twitter.com/BjarturG1/status/971856867558330368",
    "https://twitter.com/BjarturG1/status/972219249476407296",
    "https://twitter.com/BjarturG1/status/972581639141380096",
    "https://twitter.com/BjarturG1/status/972944028818903040",
    "https://twitter.com/BjarturG1/status/973311442794549250",
    "https://twitter.com/BjarturG1/status/973673835533864960",
    "https://twitter.com/BjarturG1/status/974036219112935424",
    "https://twitter.com/BjarturG1/status/974398609696403459",
    "https://twitter.com/BjarturG1/status/974760995963965440",
    "https://twitter.com/BjarturG1/status/974767290175623168",
    "https://twitter.com/BjarturG1/status/975123370122629120",
    "https://twitter.com/BjarturG1/status/975485770751455232",
    "https://twitter.com/BjarturG1/status/975848169861992449",
    "https://twitter.com/BjarturG1/status/976210550622474241",
    "https://twitter.com/BjarturG1/status/976572932657905664",
    "https://twitter.com/BjarturG1/status/976935334721261570",
    "https://twitter.com/BjarturG1/status/977297713099431937",
    "https://twitter.com/BjarturG1/status/977660098746216448",
    "https://twitter.com/BjarturG1/status/978022486133665794",
    "https://twitter.com/BjarturG1/status/978388650366038017",
    "https://twitter.com/BjarturG1/status/978751020061872128",
    "https://twitter.com/BjarturG1/status/979113425564520449",
    "https://twitter.com/BjarturG1/status/979475815455952896",
    "https://twitter.com/BjarturG1/status/979839439823351814",
    "https://twitter.com/BjarturG1/status/980201849876897795",
    "https://twitter.com/BjarturG1/status/980564233996898304",
    "https://twitter.com/BjarturG1/status/980926623255072769",
    "https://twitter.com/BjarturG1/status/981289010495676416",
    "https://twitter.com/BjarturG1/status/981651398638129153",
    "https://twitter.com/BjarturG1/status/982013790006005764",
    "https://twitter.com/BjarturG1/status/982376171345235968",
    "https://twitter.com/BjarturG1/status/982738562364923905",
    "https://twitter.com/BjarturG1/status/983100952432578560",
    "https://twitter.com/BjarturG1/status/983463350360211462",
    "https://twitter.com/BjarturG1/status/983825706558861312",
    "https://twitter.com/BjarturG1/status/984188115983175681",
    "https://twitter.com/BjarturG1/status/984550502951243776",
    "https://twitter.com/BjarturG1/status/984912902300819456",
    "https://twitter.com/BjarturG1/status/985275276933427200",
    "https://twitter.com/BjarturG1/status/985637668292874241",
    "https://twitter.com/BjarturG1/status/986000053662871554",
    "https://twitter.com/BjarturG1/status/986362441218101249",
    "https://twitter.com/BjarturG1/status/986724828722941952",
    "https://twitter.com/BjarturG1/status/987087219197329409",
    "https://twitter.com/BjarturG1/status/987449587903365122",
    "https://twitter.com/BjarturG1/status/987811991715794950",
    "https://twitter.com/BjarturG1/status/988174378075639810",
    "https://twitter.com/BjarturG1/status/988536767962902528",
    "https://twitter.com/BjarturG1/status/988899153022513157",
    "https://twitter.com/BjarturG1/status/989261537134235648",
    "https://twitter.com/BjarturG1/status/989623928824975360",
    "https://twitter.com/BjarturG1/status/989986318590636032",
    "https://twitter.com/BjarturG1/status/989986318590636032",
    "https://twitter.com/BjarturG1/status/990348704518373378",
    "https://twitter.com/BjarturG1/status/990711095160659968",
    "https://twitter.com/BjarturG1/status/991073480945864704",
    "https://twitter.com/BjarturG1/status/991435869109346304"
];

client.on("message", function(message) {
  if (message.author.equals(client.user)) return;
  
  if (message.content === "listemojis") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send(emojiList);     
}  

  if (message.content === "good") {
    const goodegg = client.emojis.get("439181054792695811");  
    message.react("439181054792695811");
}  

  if (message.content === "shut") {
    const goodegg = client.emojis.get("424609594233323522");  
    message.react("424609594233323522");
}    

  if (message.content === "@everyone") {
    const random245 = client.emojis.get("396057873697734669");                                 
    message.react("396057873697734669");
}       
    
  if (message.content === "what") {
    const k = client.emojis.get("384901286866452491");                                 
    message.react("384901286866452491");
}       

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLocaleLowerCase()) {
    case "8ball":
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)])
      else message.channel.sendMessage("Can't Read that");
      break;
    case "when":
      if (args[1]) message.channel.sendMessage(when[Math.floor(Math.random() * when.length)])
      else message.channel.sendMessage("Please actually ask for something");
      break;
    case "thegreatdms":
      if (args[0]) message.channel.sendMessage(guysciencedms[Math.floor(Math.random() * guysciencedms.length)])
      else message.channel.sendMessage("no xDDDDDD");
      break;       
    case "doit":
        var doit = new Discord.RichEmbed()
            .setImage("https://media2.giphy.com/media/3o84sw9CmwYpAnRRni/giphy.gif")
      message.channel.sendEmbed(doit);
      break;
    case "help":
        var embed = new Discord.RichEmbed()
            .setTitle("**Click here to get all the commands**")
            .setDescription("https://theofficalpm.wixsite.com/eggbot/commands")
            .setImage("https://cdn.discordapp.com/attachments/430414146924969984/430911625088991242/help.gif")
        message.channel.sendEmbed(embed);
        break;
    case "nou":
        var nou = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/430414146924969984/431601099535810581/J7sAzzC.png")
        message.channel.sendEmbed(nou);
        break;
    case "wordoftheday":
    if (args[0]) message.channel.sendMessage(WOD[Math.floor(Math.random() * WOD.length)])
    else message.channel.sendMessage("Please have some text typed after !wordoftheday. Ex. !wordoftheday nou");
    break;
    case "badegg":
        var badegg = new Discord.RichEmbed()
            .setImage("https://m.popkey.co/ab00d3/v0zRG.gif")
        message.channel.sendEmbed(badegg);
        break;
    case "lundab":
        var lundab = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/391980593115693056/411678723998482434/Lunax.jpg")
        message.channel.sendEmbed(lundab);
        break;
    case "dab":
        var lunarxdab = new Discord.RichEmbed() 
            .setImage("https://cdn.discordapp.com/attachments/411658657802092545/411991839453872132/enlarge.png")
            .addField("<o/", "<o/")
        message.channel.sendEmbed(lunarxdab);
        break;
    case "oh":
        message.channel.sendMessage("ok")
        break;
    case "goodegg":
        var gegg = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/386610342077267968/430404036160651284/backwards_walking_egg_by_genshihebi-d3da1ag.gif")
        message.channel.sendEmbed(gegg);
        break;
    case "egg":
        var egg = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/386610342077267968/430773574526304266/realegg.png")
        message.channel.sendEmbed(egg);
        break;
    case "eggrating":
    if (args[1]) message.channel.sendMessage(eggrating[Math.floor(Math.random() * eggrating.length)])
    else message.channel.sendMessage("Please have some text typed after !eggrating. Ex. !eggrating im a big big egg");
    break;
    case "eggjobs":
    if (args[0]) message.channel.sendMessage(job[Math.floor(Math.random() * job.length)])
    else message.channel.sendMessage("Please have some text typed after !eggjob. Ex. !eggjob eggtown mayor please assign me a job!");
    break;
    case "xd":
        var xd = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/411659439993520129/416036716235980823/image.png")
            .addField("ecks deeeeeeeeeeeeeeeeeeeeeeee", "xddddddddddddddddddddddddddddddddddddddd")
            .setTitle("xd")
        message.channel.sendEmbed(xd);
        break;
    case "marie":
      message.channel.sendMessage("https://www.youtube.com/c/pengkip")
    break;
    case "whodidit":
    if (args[1]) message.channel.sendMessage(whodidit[Math.floor(Math.random() * whodidit.length)])
    else message.channel.sendMessage("Please have some text after !whodidit. Ex. !whodidit Who started the eggtown wars");
    break;
    case "thonk":
        var thonk = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/411658657802092545/416691515528839169/enlarge.png")
            .addField("oh", "ok")
        message.channel.sendEmbed(thonk);
        break;
    case "history":
        var history = new Discord.RichEmbed()
            .setTitle("An eggtown story:")
            .setDescription("One day the mayor of eggtown was getting too worked up with all the eggs asking questions and needing help. So he found a random broken down robot on the street and fixed him up.  The Robot had no memory of who they were but they were loyal to eggtown. The end.")
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424370830315618314/fdawkisjufhkhjsdbfvkjdes.jpg")
        message.channel.sendEmbed(history);
        break;
    case "gabstory":
        var gabstory1 = new Discord.RichEmbed()
            .setImage("https://i.gyazo.com/thumb/1200/6466c15f9fdc1116fd937551627eb5e5-png.jpg")
        message.channel.sendEmbed(gabstory1);
        break;
    case "helicopter":
        var helicopter = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424566056368209921/egg32.gif")
        message.channel.sendEmbed(helicopter);
        break;
    case "ahyes":
        message.channel.sendMessage("Of course")
        break;
    case "otherinfo":
         var otherinfo1 = new Discord.RichEmbed()
            .setDescription("We regret to inform you that eggtown will be shutting down April First.  Unfortunately the egg master Eggmode decided it would be a good idea to spill water on the server so its only a matter of time the server short circuits and dies.  Now remember this is MoSt DeFiniTeLy nOt an AprIl f00ls jokE orchestrated by the c00gs.  Thank you for your time.")
         message.channel.sendEmbed(otherinfo1);
         break;
    case "imageinfo":  
         var imageinfo = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424618150969999373/otherinfo.png")
         message.channel.sendEmbed(imageinfo);
         break;
    case "eggman":
         var eggman = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424939614239850517/eggman.png")
         message.channel.sendEmbed(eggman);
         break;
    case "eggrona": 
         var eggronaman = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424939632799514636/eggronaman.png")
         message.channel.sendEmbed(eggronaman);
         break;
    case "pingdingdong":
      message.channel.sendMessage(":pingman: @everyone")
      break;
    case "partner":
         var partner = new Discord.RichEmbed()
            .setDescription("Join our partner: Pengkips Discord!")
          message.channel.sendEmbed(partner);
          break;
    case "partner2":
          var partner2 = new Discord.RichEmbed()
             .setDescription("A server with custom emotes and bots, hang out with friends and listen to music in our variety of channels. Free art and meme sharing")
          message.channel.sendEmbed(partner2);
          break;
    case "partner3":
          var partner3 = new Discord.RichEmbed()
             .setDescription("Click Here to Join! https://discord.gg/SdhVgQn")
             .setImage("https://cdn.discordapp.com/attachments/330847736192827392/424997005861847040/image.jpg")
          message.channel.sendEmbed(partner3);
          break; 
    case "ever1":
      message.channel.sendMessage("@everyone")
      break;
    case "eggtownpartnership":
          var eggtowneggkip = new Discord.RichEmbed()
              .setTitle(":egg: **The Eggtown Discord** :egg:")
              .addField("- A community discord which is based around everyone being a giant egg", " ￼ ")
              .addField("- We have the Egg Bot which is for this server only", " ￼ ")
              .addField("- We have classic emotes such as :eggman: and :eggronaman:", " ￼ ")   
              .addField("- We have the UnbelivaBoat bot which provides a broken great economy", " ￼ ")
              .addField("- We have many eggy channels such as #joeys-shrek-home", " ￼ ") 
              .addField("- We have #mature for all your special needs", " ￼ ")
              .addField(":egg: *We hope to see you join soon!* :egg:", " ￼ ")
              .addField("**Join here:https://discord.gg/DVexW3n**", " ￼ ")
              .setImage("https://cdn.discordapp.com/attachments/343102240766296064/425001985738145812/eggtownlogo.png")                
          message.channel.sendEmbed(eggtowneggkip);
          break;
    case "info":
          var info = new Discord.RichEmbed()
              .setTitle(":egg: **Egg Bot** :egg:")
              .addField("- A bot made specifically for eggtown", " ￼ ")
              .addField("- A highly modified version of bart bot", " ￼ ")
              .addField("- IF you see egg bot in another server please inform @Playermode#8623", " ￼ ")   
              .addField("- Updated Regularly", " ￼ ")
              .addField("- Do !help for all the commands", " ￼ ") 
              .addField("- Made by @Playermode#8623", " ￼ ")
              .addField("- Website: https://theofficalpm.wixsite.com/eggbot", " ￼ ")
              .addField("Current Version: 2.3", " ￼ ")
              .addField("**Please do not ask to add egg bot to your server as they are only meant for this server.**", " ￼ ")
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/430814711622270978/66a8c63b867d4b58895f9048df4d0a0e.png")                
          message.channel.sendEmbed(info);
          break;
    case "can":
      message.channel.sendMessage("u dont")
      break;
    case "question":
      if (args[1]) message.channel.sendMessage(aprilfools[Math.floor(Math.random() * aprilfools.length)])
      else message.channel.sendMessage("Please ask an actual question. eggs deeeeeeeeeeeee");
      break;
    case "explaination":
      message.channel.sendMessage("February. this year, I had an idea to create Eggtown with Eggbot because Playermodes Illegal Corner was shut down. It was originally planned to be exactly like the original corner, new roles and new text channels. However, after critical reception from Guyscience on how 29089453 roles isn't good we decided to change it to eggtown.  But then egg bot stabbed me :((((((")
      break;
    case "randomthing":
          var egg435 = new Discord.RichEmbed()
             .setDescription("Welcome to the eggtown elections.  Today you can vote for **anyone** to be the owner xdddddddd. (winner will be owner for a single day)  (this is going to probably backfire :disappointed:) ")
         message.channel.sendEmbed(egg435);
         break;
    case "reversecard":
          var card = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/430044723705675797/Reverse-Card.png")
          message.channel.sendEmbed(card);
          break;
    case "jesus":
          var jesus = new Discord.RichEmbed()
              .setImage("http://c8.alamy.com/comp/CWBJMN/copy-of-typical-catholic-image-of-jesus-christ-from-slovakia-by-painter-CWBJMN.jpg")
          message.channel.sendEmbed(jesus);
          break;
    case "noanime":
      message.channel.sendMessage("You are an intelligent person, you cleary watch Rick and Morty and don't watch anime.")
      break;
    case "okegger":
         var okegger = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/386610342077267968/431199869336682516/okegger.png")
         message.channel.sendEmbed(okegger);
         break;
    case "rulesegger":
          var rulesegg = new Discord.RichEmbed()
              .setTitle(":egg: **Rules Of Eggtown** :egg:")
              .addField("```- 1.  No swearing```", " ￼ ")
              .addField("```- 2.  Don't Disrespect Others```", " ￼ ")
              .addField("```- 3.  Do not harass anyone at all```", " ￼ ")   
              .addField("```- 4.  Do not ping any staff for no reason.```", " ￼ ")
              .addField("```- 5.  If you can not handle the egg joke please leave```", " ￼ ") 
              .addField("```- 6.  No bad eggs``` :cooking:", " ￼ ")
              .addField("```- 7.  Only use bot commands in #bot-commands, #mature, and #memes.  However eggbot commands are allowed in any channel```", " ￼ ")
              .addField("```- 8.  Only use commands such as !slut in #mature```", " ￼ ")
              .addField("```- 9.  Memes can contain swearing (such as copypastas, and images), but you can not swear in #memes```", " ￼ ")
              .addField("```- 10. Post invites only in #advertisment```", " ￼ ")
              .addField("```- 11. Staff can decide any punishment they see fit.  If you think a punishment is unfair dm the owner @Playermode#8623```", " ￼ ")
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/430404036160651284/backwards_walking_egg_by_genshihebi-d3da1ag.gif")
              .setColor(003366)
          message.channel.sendEmbed(rulesegg);
          break;
    case "gabstory2": 
          var gabstory2 = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/438488578390097921/image.png")
          message.channel.sendEmbed(gabstory2);
          break;
    case "gabstory3": 
          var gabstory3 = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/439150572558483456/image.png")
          message.channel.sendEmbed(gabstory3);
          break;    
    case "gabstory4": 
          var gabstory4 = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/439151207718715411/image.jpg")
          message.channel.sendEmbed(gabstory4);
          break;
    case "dailyponk":
      if (args[0]) message.channel.sendMessage(ponkerpunker[Math.floor(Math.random() * ponkerpunker.length)])
      else message.channel.sendMessage("ponkerpunker is coming to town");
      break;   
    case "gabstory5": 
          var gabstory5 = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/430414146924969984/439838302510776330/5d5eeb5e47ef39c3de34b61e68e7ad20.png")
          message.channel.sendEmbed(gabstory5);
          break;  
    case "gabstory6": 
          var gabstory6 = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/439959252409253908/catareliqu.png")
          message.channel.sendEmbed(gabstory6);
          break; 
    case "rolereactionmessage":
         message.channel.sendMessage("Click ✅ to give yourself the role, click ❌ to remove the role")
         break;
    case "news":
          var news = new Discord.RichEmbed()
              .setTitle("**📰News📰**")
              .addField("- Today is national eggday!", " ￼ ")
              .addField("- There will be many eggy things occuring today", " ￼ ")
              .addField("- Make sure to check #polls-and-giveaways for giveaways today (do !pollsrole to be notified when a new poll or giveaway comes out)", " ￼ ")   
              .addField("- Have an eggy day!", " ￼ ")
              .setImage("https://cdn.discordapp.com/attachments/451836383523242007/452633646650884097/nationaleggyday3.png")                
          message.channel.sendEmbed(news);
          break; 
    case "news2":
          var news2 = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/451836383523242007/452633647393275904/nationaleggyday4.png")                
          message.channel.sendEmbed(news2);
          break;
    case "test1":
         message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
    case "news1":
         message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "📰News📰",
    description: " ￼ ",      
    fields: [{
        name: "- Today is national eggday!",
        value: " ￼ "
      },
      {
        name: "- There will be many eggy things occuring today",
        value: " ￼ "
      },
      {
        name: "- Make sure to check #polls-and-giveaways for giveaways today (do !pollsrole to be notified when a new poll or giveaway comes out)",
        value: " ￼ "
      },
      {       
        name: "- Have an eggy day!",
        value: " ￼ "
      }              
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Eggtown"
    }
  }
});
    case "realnews":
         var realnews = new Discord.RichEmbed()
             .setTitle("This is your title, it can hold 256 characters")
             .setAuthor("Playermode", "https://imgur.com/qtewCuV")
             .setColor(0x00AE86)
             .setDescription("This is the main body of text, it can hold 2048 characters.")
             .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
             .setImage("http://i.imgur.com/yVpymuV.png")
             .setThumbnail("http://i.imgur.com/p2qNFag.png")
             .setTimestamp()
             .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
             .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 2048 characters.")
             .addField("Inline Field", "They can also be inline.", true)
             .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
         message.channel.send(realnews);
         break;        
  }
});

client.on('ready', function() { 
    client.user.setGame("You're an egg like gab");
    client.user.setUsername("Egg Bot");
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === "ping") {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === "you're an egg") {
    	message.reply('nou');
  	}
}); 

client.on('message', message => {
    if (message.content === "yousa big egg") {
    	message.reply('nou, btw nice try ;))))))');
  	}    
});

client.on('message', message => {
    if (message.content === "im going to find a new way to bypass this") {
    	message.reply('you cant :madman:');
  	}    
});

client.on('message', message => {
    if (message.content === "hi") {
    	message.reply('Hello there');
    }    
});

client.on('message', message => {
    if (message.content === "your an egg") {
    	message.reply("Get better grammar");
    }    
});

client.on('message', message => {
    if (message.content === "General Kenobi") {
    	message.reply("You're a **bold** one");
    }    
});

client.on('message', message => {
    if (message.content === "general kenobi") {
    	message.reply("You're a **bold** one");
    }    
});

client.on('message', message => {
    if (message.content === "oh no") {
    	message.reply("oh yes");
    }    
});

client.on('message', message => {
    if (message.content === "gab") {
    	message.reply("```gab is great amiright?```");
    }    
});

client.on('message', message => {
    if (message.content === "egg") {
    	message.reply("https://youtu.be/rf_Go9eLaAM");
    }    
});

client.on('message', message => {
    if (message.content === "oh") {
    	message.reply("ok");
    }    
});

client.on('message', message => {
    if (message.content === "ah yes") {
    	message.reply("of course");
    }    
});

client.on('message', message => {
    if (message.content === "ah") {
    	message.reply("yes of course");
    }    
});

client.on('message', message => {
    if (message.content === "@Egg Bot you're an egg") {
    	message.reply("but you're a bigger :egg:");
    }    
});

client.on('message', message => {
    if (message.content === "Eggbot is an egg") {
    	message.reply("but you're a bigger :egg:");
    }    
});

client.on('message', message => {
    if (message.content === "Eggbot *i*s an egg") {
    	message.reply("but you're a bigger :egg:");
    }    
});

client.on('message', message => {
    if (message.content === "eggbot is an egg") {
    	message.reply("but you're a bigger :egg:");
    }    
});

client.on('message', message => {
    if (message.content === "EggBot is an egg") {
    	message.reply("but you're a bigger :egg:");
    }    
});

client.on('message', message => {
    if (message.content === "Eggbot is a terrible bot") {
    	message.reply("meanie :disappointed:");
    }    
});

client.on('message', message => {
    if (message.content === "drew") {
    	message.reply("https://cdn.discordapp.com/attachments/386610342077267968/439956799102124043/dec7441d6185cbbe563620a3ddccccdf.png");
    }    
});

client.on('message', message => {
    if (message.content === "Drew") {
    	message.reply("https://cdn.discordapp.com/attachments/386610342077267968/439956799102124043/dec7441d6185cbbe563620a3ddccccdf.png");
    }    
});

client.on('message', message => {
    if (message.content === "Hi") {
    	message.reply('Hello there');
    }    
});

client.on('message', message => {
    if (message.content === "Muffin") {
    	message.reply('ah nou');
    }    
});

client.on('message', message => {
    if (message.content === "muffin") {
    	message.reply('ah nou');
    }    
});

//THIS BOT IS ONLY FOR EGGTOWN
client.login(process.env.BOT_TOKEN);
