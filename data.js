const wordList = [
  {
    "definition": "unverified stories or details concerning the actions or private lives of others", 
    "word": "gossip", 
    "diacritic": "ˈgä-səp", 
    "part_of_speech": "noun", 
    "example_sentence": "The office was buzzing with _____ about who would be promoted next.", 
    "etymology": "Noun and Verb Middle English gossib , from Old English godsibb , from god god + sibb kinsman, from sibb related — more at sib"
  }, 
  {
    "definition": "To wriggle or twist around, similar to a worm; to move restlessly.", 
    "word": "squirm", 
    "diacritic": "ˈskwərm", 
    "part_of_speech": "verb", 
    "example_sentence": "The little boy couldn't sit still in his chair and began to _____ with impatience.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "to repeat something multiple times, often causing fatigue or annoyance.", 
    "word": "reiterate", 
    "diacritic": "rē-ˈi-tə-ˌrāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The teacher had to _____ the instructions several times before all the students understood the assignment.", 
    "etymology": "Middle English, from Latin reiteratus , past participle of reiterare to repeat, from re- + iterare to iterate"
  }, 
  {
    "definition": "The condition of being ineffective or pointless; lack of usefulness.", 
    "word": "futility", 
    "diacritic": "fyü-ˈti-lə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "Despite her efforts to convince him, she realized the _____ of trying to change his mind.", 
    "etymology": "borrowed from French and Latin; French futilité, going back to Middle French, borrowed from Latin fūtilitāt-, fūtilitās (also futtilitāt-, futtilitās ) \"unprofitableness, uselessness,\" from fūtilis, futtilis \"brittle, fragile (of containers), serving no purpose, pointless\" + -itāt- -itās -ity — more at futile"
  }, 
  {
    "definition": "An adventurous act that goes against accepted norms or behavior.", 
    "word": "escapade", 
    "diacritic": "ˈe-skə-ˌpād", 
    "part_of_speech": "noun", 
    "example_sentence": "Their weekend trip turned into a wild _____ when they decided to sneak into the abandoned amusement park.", 
    "etymology": "French, action of escaping, from Spanish escapada , from escapar to escape, from Vulgar Latin *excappare"
  }, 
  {
    "definition": "Pertaining to the lower back or the vertebrae located between the chest vertebrae and the sacrum.", 
    "word": "lumbar", 
    "diacritic": "ˈləm-bər, -ˌbär", 
    "part_of_speech": "adjective", 
    "example_sentence": "She experienced pain in her _____ region after lifting heavy boxes all day.", 
    "etymology": "New Latin lumbaris , from Latin lumbus loin — more at loin"
  }, 
  {
    "definition": "making someone feel very surprised or impressed", 
    "word": "astounding", 
    "diacritic": "ə-ˈstau̇n-diŋ", 
    "part_of_speech": "adjective", 
    "example_sentence": "The magician's performance was so _____ that the audience sat in stunned silence, unable to believe their eyes.", 
    "etymology": "from present participle of astound entry 1"
  }, 
  {
    "definition": "To expose someone to public ridicule or criticism, often by putting them in a position where they are openly mocked or shamed.", 
    "word": "pillor", 
    "diacritic": "ˈpilər", 
    "part_of_speech": "verb", 
    "example_sentence": "The scandal caused the media to _____ the politician, subjecting him to relentless mockery and derision.", 
    "etymology": "back-formation from pillory entry 1"
  }, 
  {
    "definition": "A field of science focused on the study of plants.", 
    "word": "botany", 
    "diacritic": "ˈbä-t(ə)-nē", 
    "part_of_speech": "noun", 
    "example_sentence": "She decided to pursue a degree in _____ to learn more about plant life and ecosystems.", 
    "etymology": "botan ic botanical + -y entry 2"
  }, 
  {
    "definition": "From one end to the other; in or to every area of.", 
    "word": "throughout", 
    "diacritic": "thrü-ˈau̇t", 
    "part_of_speech": "preposition", 
    "example_sentence": "The festival attracted visitors _____ the city, making it a vibrant celebration for everyone involved.", 
    "etymology": "Word History First Known Use Preposition 13th century, in the meaning defined at sense 1 Adverb 13th century, in the meaning defined at sense 1 Time Traveler The first known use of throughout was in the 13th century See more words from the same century"
  }, 
  {
    "definition": "An edible underground part of certain European fungi, particularly from the genus Tuber, that can be dark or light in color.", 
    "word": "truffle", 
    "diacritic": "ˈtrə-fəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The gourmet restaurant featured a dish topped with shaved _____, adding a rich, earthy flavor that delighted the guests.", 
    "etymology": "modification of Middle French truffe , from Old Occitan trufa , from Vulgar Latin *tufera ; akin to Latin tuber swelling, truffle — more at tuber"
  }, 
  {
    "definition": "to assess or establish the worth of something", 
    "word": "evaluate", 
    "diacritic": "i-ˈval-yə-ˌwāt, -yü-ˌāt", 
    "part_of_speech": "verb", 
    "example_sentence": "Before making a decision, it's important to _____ all the options available to you.", 
    "etymology": "back-formation from evaluation , from French évaluation , from Middle French evaluacion , from esvaluer to evaluate, from e- + value value"
  }, 
  {
    "definition": "A valuable, heavy metallic element that is grayish-white, resistant to corrosion, and can be easily shaped. It is challenging to melt and is commonly used in laboratory equipment, as a catalyst, and in dental materials and jewelry alloys.", 
    "word": "platinum", 
    "diacritic": "ˈpla-tə-nəm, ˈplat-nəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The ring was made of _____, giving it a stunning shine and durability that made it perfect for everyday wear.", 
    "etymology": "Noun New Latin, from Spanish platina , from diminutive of plata silver — more at plate"
  }, 
  {
    "definition": "The timber from several mainly tropical trees belonging to the Meliaceae family.", 
    "word": "mahogany", 
    "diacritic": "mə-ˈhä-gə-nē", 
    "part_of_speech": "noun", 
    "example_sentence": "The antique table was beautifully crafted from rich, dark _____ wood that showcased its elegant grain.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "To stick tightly and faithfully or to remain steadfastly committed.", 
    "word": "cleave", 
    "diacritic": "ˈklēv", 
    "part_of_speech": "verb", 
    "example_sentence": "She chose to _____ to her principles, even when faced with great opposition.", 
    "etymology": "Verb (1) Middle English clevien , from Old English clifian ; akin to Old High German kleben to stick Verb (2) Middle English cleven , from Old English clēofan ; akin to Old Norse kljūfa to split, Latin glubere to peel, Greek glyphein to carve"
  }, 
  {
    "definition": "Someone who shows extreme passion and unwavering loyalty to a particular issue, often in areas like religion or politics, without being open to other viewpoints.", 
    "word": "fanatic", 
    "diacritic": "fə-ˈna-tik", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ devotion to the cause made it difficult for her to consider opposing opinions.", 
    "etymology": "Adjective Latin fanaticus inspired by a deity, frenzied, from fanum temple — more at feast"
  }, 
  {
    "definition": "The condition of being qualified or appropriate for selection, participation, or permission to do something.", 
    "word": "eligibility", 
    "diacritic": "ˌe-lə-jə-ˈbi-lə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "To participate in the scholarship program, students must meet certain criteria to ensure their _____ is assessed fairly.", 
    "etymology": "Word History First Known Use 1651, in the meaning defined above Time Traveler The first known use of eligibility was in 1651 See more words from the same year"
  }, 
  {
    "definition": "a specific mindset or emotional response that an individual has toward a person, situation, or concept", 
    "word": "attitude", 
    "diacritic": "ˈa-tə-ˌt(y)üd", 
    "part_of_speech": "noun", 
    "example_sentence": "Her positive _____ toward challenges helped her overcome obstacles in her career.", 
    "etymology": "French, from Italian attitudine , literally, aptitude, from Late Latin aptitudin-, aptitudo fitness — more at aptitude"
  }, 
  {
    "definition": "a following event or outcome; a subsequent result.", 
    "word": "sequel", 
    "diacritic": "ˈsē-kwəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The director announced that the new film will be a _____ to the popular blockbuster released last year.", 
    "etymology": "Middle English, from Anglo-French sequele , from Latin sequela , from sequi to follow — more at sue"
  }, 
  {
    "definition": "An incorrect or faulty understanding or belief.", 
    "word": "misconception", 
    "diacritic": "ˌmis-kən-ˈsep-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "Many people have the _____ that all sharks are dangerous to humans.", 
    "etymology": "Word History First Known Use 1614, in the meaning defined above Time Traveler The first known use of misconception was in 1614 See more words from the same year"
  }, 
  {
    "definition": "One from a state located in the northern United States, part of the Great Lakes region, consisting of an upper (northwestern) peninsula and a lower (southeastern) peninsula, bordered by all the Great Lakes except for Lake Ontario. Its capital is Lansing, covering an area of 58,527 square miles (151,585 square kilometers) and having a population of approximately 9,883,640.", 
    "word": "Michigander", 
    "diacritic": "ˌmi-shi-ˈgan-dər", 
    "part_of_speech": "noun", 
    "example_sentence": "As a proud _____, she always enjoyed sharing stories about the beautiful lakes and forests of her home state.", 
    "etymology": ""
  }, 
  {
    "definition": "In a state of decay; decomposed and foul.", 
    "word": "putrid", 
    "diacritic": "ˈpyü-trəd", 
    "part_of_speech": "adjective", 
    "example_sentence": "The smell of the _____ garbage filled the air, making it hard to breathe.", 
    "etymology": "Latin putridus , from putrēre to be rotten, from puter, putris rotten; akin to Latin putēre to stink — more at foul entry 1"
  }, 
  {
    "definition": "shake or vibrate slightly", 
    "word": "quaver", 
    "diacritic": "ˈkwā-vər", 
    "part_of_speech": "verb", 
    "example_sentence": "Her voice began to _____ as she nervously read her poem aloud.", 
    "etymology": "Verb Middle English, frequentative of quaven to tremble"
  }, 
  {
    "definition": "A liquid substance that, when spread on a surface, dries to create a hard, shiny, and usually clear layer.", 
    "word": "varnish", 
    "diacritic": "ˈvär-nish", 
    "part_of_speech": "noun", 
    "example_sentence": "She applied a coat of _____ to the wooden table to enhance its appearance and protect it from scratches.", 
    "etymology": "Noun Middle English vernyz, vernich, vernisch \"dissolved resin used as a decorative or protective coating,\" borrowed from Anglo-French vernis (continental Old French verniz ), borrowed from Medieval Latin veronix, vernix \"resin,\" earlier \"amber,\" restructured from Middle Greek berōnikón, beroníkē \"yellow- or amber-colored glass, amber,\" probably going back to Greek bereníkion \"natron, reddish- or yellowish-hued natron (used in making glass),\" of uncertain origin Note: The Greek word for \"natron\" has no evident connection with the city name Bereníkē in ancient Cyrenaica nor any of the other place-names based on the female given name Bereníkē borne by various Macedonian queens and princesses of the Ptolemaic dynasty in Egypt. Verb Middle English vernysshen , borrowed from Middle French vernicier and Medieval Latin vernizāre , both derivative of Old French verniz varnish entry 1"
  }, 
  {
    "definition": "to open up or spread out from a rolled or folded position", 
    "word": "unfurl", 
    "diacritic": "ˌən-ˈfər(-ə)l", 
    "part_of_speech": "verb", 
    "example_sentence": "As the sun rose, the petals of the flower began to _____, revealing its vibrant colors to the world.", 
    "etymology": "Word History First Known Use 1641, in the meaning defined at transitive sense Time Traveler The first known use of unfurl was in 1641 See more words from the same year"
  }, 
  {
    "definition": "to move a boat forward using oars", 
    "word": "row", 
    "diacritic": "ˈrō", 
    "part_of_speech": "verb", 
    "example_sentence": "They took turns to _____ the small canoe across the calm lake.", 
    "etymology": "Verb (1) Middle English, from Old English rōwan ; akin to Middle High German rüejen to row, Latin remus oar Noun (2) Middle English rawe ; akin to Old English rǣw row, Old High German rīga line, and perhaps to Sanskrit rikhati he scratches Noun (3) origin unknown"
  }, 
  {
    "definition": "To speak in a soft, unclear manner with the lips slightly closed.", 
    "word": "mutter", 
    "diacritic": "ˈmə-tər", 
    "part_of_speech": "verb", 
    "example_sentence": "I could barely hear his _____ as he complained about the long wait.", 
    "etymology": "Middle English muteren , of imitative origin"
  }, 
  {
    "definition": "the process of putting something in place or the condition of being set up.", 
    "word": "installation", 
    "diacritic": "ˌin(t)-stə-ˈlā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ of the new software took several hours to complete.", 
    "etymology": "Word History First Known Use 1543, in the meaning defined at sense 1 Time Traveler The first known use of installation was in 1543 See more words from the same year"
  }, 
  {
    "definition": "the time available when one is not engaged in work or obligations", 
    "word": "leisure", 
    "diacritic": "ˈlē-zhər, ˈle-, ˈlā-", 
    "part_of_speech": "noun", 
    "example_sentence": "During the weekends, I enjoy indulging in various activities during my _____ time.", 
    "etymology": "Middle English leiser , from Anglo-French leisir , from leisir to be permitted, from Latin licēre — see license entry 1"
  }, 
  {
    "definition": "A thin, rope-like piece of hair created by intertwining, braiding, or tangling.", 
    "word": "dreadlocks", 
    "diacritic": "ˈdred-ˌläks", 
    "part_of_speech": "noun", 
    "example_sentence": "She wore her hair in long, beautiful _____ that cascaded down her back.", 
    "etymology": "Word History First Known Use 1960, in the meaning defined at sense 1 Time Traveler The first known use of dreadlock was in 1960 See more words from the same year"
  }, 
  {
    "definition": "A three-dimensional shape that has two parallel polygonal surfaces and additional sides that are parallelograms.", 
    "word": "prism", 
    "diacritic": "ˈpri-zəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The artist used a _____ to create beautiful light patterns on the wall.", 
    "etymology": "Late Latin prismat-, prisma , from Greek, literally, anything sawn, from priein to saw"
  }, 
  {
    "definition": "A lighting device that creates bright light by burning an oxyhydrogen flame on a cylinder of lime, typically featuring a lens to focus the light into a beam.", 
    "word": "limelight", 
    "diacritic": "ˈlīm-ˌlīt", 
    "part_of_speech": "noun", 
    "example_sentence": "The actor stepped into the _____ to deliver his acceptance speech, momentarily blinded by the bright lights shining down on him.", 
    "etymology": "Word History First Known Use Noun 1826, in the meaning defined at sense 1a Verb 1884, in the meaning defined above Time Traveler The first known use of limelight was in 1826 See more words from the same year"
  }, 
  {
    "definition": "providing the essential foundation that underlies existence or shapes core structure or function; essential.", 
    "word": "fundamental", 
    "diacritic": "ˌfən-də-ˈmen-tᵊl", 
    "part_of_speech": "adjective", 
    "example_sentence": "Understanding the principles of mathematics is _____ for anyone pursuing a career in engineering.", 
    "etymology": "Adjective Middle English, borrowed from Late Latin fundāmentālis \"serving as a foundation,\" from Latin fundāmentum \"foundation, basis\" + -ālis -al entry 1 — more at fundament Noun derivative of fundamental entry 1"
  }, 
  {
    "definition": "A recognition of a mistake or rudeness that includes expressing sorrow.", 
    "word": "apology", 
    "diacritic": "ə-ˈpä-lə-jē", 
    "part_of_speech": "noun", 
    "example_sentence": "After realizing she had offended her friend, she quickly offered an _____ to mend their relationship.", 
    "etymology": "Middle English apologe \"formal defense,\" borrowed from Middle French & Late Latin; Middle French apologie \"public defense in speech or writing,\" borrowed from Late Latin apologia, borrowed from Greek apología \"speech in defense\" (Late Greek, \"speech in defense of the Christian faith by a martyr, excuse, vindication before God\"), derivative (with -ia -ia entry 1 ) of apologeîsthai \"to speak in defense, defend oneself\" — more at apologetic entry 1"
  }, 
  {
    "definition": "ineffective; without benefit", 
    "word": "bootless", 
    "diacritic": "ˈbüt-ləs", 
    "part_of_speech": "adjective", 
    "example_sentence": "His efforts to change her mind proved _____, as she remained steadfast in her decision.", 
    "etymology": "boot entry 1 + -less"
  }, 
  {
    "definition": "not as old; younger in age", 
    "word": "junior", 
    "diacritic": "ˈjün-yər", 
    "part_of_speech": "adjective", 
    "example_sentence": "The _____ players showed great potential during the tournament, impressing the coaches with their skills.", 
    "etymology": "Adjective Middle English, from Latin, comparative of juvenis young — more at young Noun Latin, noun & adjective"
  }, 
  {
    "definition": "A knee-length, pleated skirt typically made of tartan, traditionally worn by men in Scotland and by Scottish military units in the British army.", 
    "word": "kilt", 
    "diacritic": "ˈkilt", 
    "part_of_speech": "noun", 
    "example_sentence": "He wore a traditional _____ to the Highland games, proudly displaying the colors of his clan.", 
    "etymology": "Verb Middle English, of Scandinavian origin; akin to Old Norse kjalta lap, fold of a gathered skirt"
  }, 
  {
    "definition": "A small or large creature from Scandinavian mythology that lives in caves or mountains.", 
    "word": "troll", 
    "diacritic": "ˈtrōl", 
    "part_of_speech": "noun", 
    "example_sentence": "In the story, the brave hero ventured into the mountains to confront the fearsome _____ that guarded the treasure.", 
    "etymology": "Noun (1) Norwegian troll & Danish trold , from Old Norse troll giant, demon; probably akin to Middle High German trolle lout Verb Middle English trollen \"to roll, rock (the head),\" of uncertain origin Note: Probably ultimately a sound-symbolic verb whose divergent meanings are difficult to reconcile historically, suggesting multiple creations or sources. The earliest meaning was \"to roll\" in various contexts; perhaps derived from this was \"to sing in the manner of a round or catch.\" The sense \"to roam\" is possibly attested in the Piers Plowman B text (\"And thus hath he [Jesus] trolled forth : this two & thretty wynter\"), though the interpretation is uncertain and comparable instances are only known centuries later. This use has conventionally been linked with Middle French treler, traler, treiller \"(of hunting dogs) look for prey without a trail or the use of a scent hound,\" and 16th-century troller \"to wander from place to place (originally of a dog).\" The sense \"to fish by trailing a lure or bait from a moving boat,\" if not of independent origin, may have been influenced by trail entry 1 and trawl entry 1 ; also perhaps of relevance is French treuil \"winch,\" though most early uses of troll in this sense do not employ a comparable noun in the meaning \"winch\" or \"reel\" (see, for example, Robert Nobbes, The Compleat Troller, or the Art of Trolling, London, 1682). Sense 2, attested from the early 1990's, is probably in part from the fishing sense, in part a derivative of troll entry 3 . Noun (2) earlier, \"the act of trolling\" (in various senses), derivative of troll entry 1 ; sense 1 in part by association with troll entry 1"
  }, 
  {
    "definition": "to completely erase from awareness or memory", 
    "word": "obliterate", 
    "diacritic": "ə-ˈbli-tə-ˌrāt, ō-", 
    "part_of_speech": "verb", 
    "example_sentence": "The flood seemed to _____ all traces of the town, leaving only mud and debris behind.", 
    "etymology": "borrowed from Latin oblīterātus, oblitterātus, past participle of oblīterāre, oblitterāre \"to cause to be forgotten or fall into disuse, make disappear,\" from ob- \"against, facing\" + -līterāre, litterāre, verbal derivative of lītera, littera letter entry 1 — more at ob- Note: The original meaning of oblīterāre was apparently \"to wipe out letters, words, etc.,\" but this sense is not clearly attested in classical Latin. Attested senses appear to have been influenced by oblītus, past participle of oblīvīscī \"to forget, put out of mind\" (cf. oblivion )."
  }, 
  {
    "definition": "Lifeless or lacking expression, particularly due to excessive drinking.", 
    "word": "sodden", 
    "diacritic": "ˈsä-dᵊn", 
    "part_of_speech": "adjective", 
    "example_sentence": "He sat in the corner of the bar, staring blankly into his drink, looking utterly _____.", 
    "etymology": "Adjective Middle English soden , from past participle of sethen to seethe"
  }, 
  {
    "definition": "To gradually enter or settle into a place or group, often in a secretive way for the purpose of undermining or influencing.", 
    "word": "infiltrate", 
    "diacritic": "ˈin-(ˌ)fil-ˌtrāt, in-ˈfil-", 
    "part_of_speech": "verb", 
    "example_sentence": "The spy managed to _____ the organization, gathering sensitive information without anyone noticing.", 
    "etymology": "Word History First Known Use 1758, in the meaning defined at transitive sense 4 Time Traveler The first known use of infiltrate was in 1758 See more words from the same year"
  }, 
  {
    "definition": "A string instrument from the violin family that is tuned one octave lower than the viola.", 
    "word": "cello", 
    "diacritic": "ˈche-(ˌ)lō", 
    "part_of_speech": "noun", 
    "example_sentence": "She played a beautiful piece on her _____ during the concert, captivating the entire audience with its rich, deep tones.", 
    "etymology": "short for violoncello"
  }, 
  {
    "definition": "pertaining to theater or acting; theatrical", 
    "word": "thespian", 
    "diacritic": "ˈthe-spē-ən", 
    "part_of_speech": "adjective", 
    "example_sentence": "The young girl dreamed of becoming a _____ and performing on Broadway one day.", 
    "etymology": "[from the tradition that Thespis was the originator of the actor's role]"
  }, 
  {
    "definition": "to shift direction or alter the path taken", 
    "word": "veered", 
    "diacritic": "ˈvird", 
    "part_of_speech": "verb", 
    "example_sentence": "The car suddenly _____ to avoid hitting the dog that ran into the street.", 
    "etymology": "Verb (1) Middle English veren , probably altered from Anglo-French virer \"to whirl, turn, revolve\" (continental Old French, \"to throw with a twisting motion\"), going back to Vulgar Latin *vīrāre , reduced from Latin vibrāre \"to wave, propel suddenly\" — more at vibrate Note: The vowel change ( e in Middle English, i in French) is of unclear motivation. Cf. Old Scots wyr, wyre \"to throw along a curving trajectory,\" vyre \"to turn about a fixed point,\" apparently borrowed from Anglo-French virer with no alteration of vowel. Noun noun derivative of veer entry 1 Verb (2) Middle English veren , borrowed from Middle Dutch *vieren or Middle Low German vīren , perhaps from a Frisian verbal derivative of Old Frisian fīr \"far\"; akin to Old English feorr far entry 1"
  }, 
  {
    "definition": "someone whose wealth is valued at one million or more, typically in dollars or pounds", 
    "word": "millionaire", 
    "diacritic": "ˌmi(l)-yə-ˈner, ˈmi(l)-yə-ˌner", 
    "part_of_speech": "noun", 
    "example_sentence": "After years of hard work and smart investments, she finally became a _____.", 
    "etymology": "French millionnaire , from million , from Middle French milion"
  }, 
  {
    "definition": "A decorative object, often engraved with a magical phrase or symbol, that is worn for protection or to bring good luck, particularly against harmful forces like illness or sorcery.", 
    "word": "amulet", 
    "diacritic": "ˈam-yə-lət", 
    "part_of_speech": "noun", 
    "example_sentence": "She wore an intricate _____ around her neck, believing it would protect her from misfortune.", 
    "etymology": "borrowed from Latin amulētum, of obscure origin"
  }, 
  {
    "definition": "The elaborate display and organization of public events or performances.", 
    "word": "pageantry", 
    "diacritic": "ˈpa-jən-trē", 
    "part_of_speech": "noun", 
    "example_sentence": "The festival was marked by the stunning _____ of colorful floats and lively performances that captivated the audience.", 
    "etymology": "Word History First Known Use 1609, in the meaning defined at sense 1 Time Traveler The first known use of pageantry was in 1609 See more words from the same year"
  }, 
  {
    "definition": "A structure used for storing and protecting vehicles, especially aircraft.", 
    "word": "hangar", 
    "diacritic": "ˈhaŋ-(g)ər", 
    "part_of_speech": "noun", 
    "example_sentence": "The plane was safely parked inside the _____ after its long journey.", 
    "etymology": "Noun borrowed from French, \"shed open on one or more sides for storing agricultural products, farm implements, and vehicles,\" going back to Middle French, perhaps going back to Old Low Franconian *haimgarda- \"enclosure around a building,\" going back to West Germanic *haima- \"dwelling\" + *garđa- \"enclosure\" — more at home entry 1 , yard entry 1 Note: The French form occurs earliest as a place name, Hangart (1135), in Somme department. Though the persistent attestation of the word with initial h-, diachronically and in dialects, is a certain indication of Germanic origin, the fact that such a compound is apparently not attested as a generic word or place-name in a Germanic language renders the etymology speculative. Verb verbal derivative of hangar entry 1"
  }, 
  {
    "definition": "characterized by a pleasing combination of musical elements that work well together", 
    "word": "harmonious", 
    "diacritic": "här-ˈmō-nē-əs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The choir sang in a way that was truly _____, with each voice blending perfectly to create a beautiful sound.", 
    "etymology": "see harmony"
  }, 
  {
    "definition": "causing a strong and intense discomfort or sensation", 
    "word": "pungent", 
    "diacritic": "ˈpən-jənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The smell of the fish was so _____ that it made several people gag.", 
    "etymology": "Latin pungent-, pungens , present participle of pungere to prick, sting; akin to Latin pugnus fist, pugnare to fight, Greek pygmē fist"
  }, 
  {
    "definition": "A livestock animal that has not been marked or owned.", 
    "word": "maverick", 
    "diacritic": "ˈmav-rik, ˈma-və-", 
    "part_of_speech": "noun", 
    "example_sentence": "The rancher spotted a group of ____ grazing on the outskirts of his property.", 
    "etymology": "Noun and Adjective Samuel A. Maverick †1870 American pioneer who did not brand his calves"
  }, 
  {
    "definition": "A version of a language that is specific to a particular area, characterized by unique vocabulary, grammar, and pronunciation, which together with other versions forms one language.", 
    "word": "dialect", 
    "diacritic": "ˈdī-ə-ˌlekt", 
    "part_of_speech": "noun", 
    "example_sentence": "The local _____ spoken in the mountains has distinct phrases that you won't hear in the city.", 
    "etymology": "Middle French dialecte , from Latin dialectus , from Greek dialektos conversation, dialect, from dialegesthai to converse — more at dialogue"
  }, 
  {
    "definition": "In any manner at all; by any means.", 
    "word": "anyway", 
    "diacritic": "ˈe-nē-ˌwā", 
    "part_of_speech": "adverb", 
    "example_sentence": "I didn't think it would work, but I decided to try it _____.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1 Time Traveler The first known use of anyway was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "possessing a refined or elegant quality; sophisticated in style.", 
    "word": "genteel", 
    "diacritic": "jen-ˈtēl", 
    "part_of_speech": "adjective", 
    "example_sentence": "She attended the gala dressed in a _____ manner, with a stunning gown and delicate accessories that captured everyone's attention.", 
    "etymology": "borrowed from French gentil literally, \"of aristocratic birth,\" going back to Old French — more at gentle entry 1"
  }, 
  {
    "definition": "extremely hot and uncomfortable", 
    "word": "sweltering", 
    "diacritic": "ˈswel-t(ə-)riŋ", 
    "part_of_speech": "adjective", 
    "example_sentence": "During the summer, the days can be so _____ that it's hard to think straight.", 
    "etymology": "Word History First Known Use 1566, in the meaning defined above Time Traveler The first known use of sweltering was in 1566 See more words from the same year"
  }, 
  {
    "definition": "thoughtful reflection or contemplation", 
    "word": "musings", 
    "diacritic": "ˈmyü-ziŋz", 
    "part_of_speech": "plural noun", 
    "example_sentence": "As she sat by the window, her mind filled with _____ about the choices she had made in life.", 
    "etymology": "Noun see muse entry 1 Adjective see muse entry 1"
  }, 
  {
    "definition": "a proposal or action taken to start negotiations or reach an agreement", 
    "word": "overtures", 
    "diacritic": "ˈō-vər-ˌchu̇rz, -chərz, -ˌtyu̇rz, -ˌtu̇rz", 
    "part_of_speech": "plural noun", 
    "example_sentence": "The company's _____ to establish a partnership with local businesses was met with enthusiasm and interest.", 
    "etymology": "Noun Middle English, literally, opening, from Anglo-French, from Vulgar Latin *opertura , alteration of Latin apertura — more at aperture"
  }, 
  {
    "definition": "a way to provide enjoyment or entertainment", 
    "word": "amusement", 
    "diacritic": "ə-ˈmyüz-mənt", 
    "part_of_speech": "noun", 
    "example_sentence": "The carnival offered endless _____ for families, with rides, games, and performances to enjoy.", 
    "etymology": "Word History First Known Use 1603, in the meaning defined at sense 3 Time Traveler The first known use of amusement was in 1603 See more words from the same year"
  }, 
  {
    "definition": "The activity of leaping from an aircraft and usually experiencing an extended free fall before opening a parachute.", 
    "word": "skydiving", 
    "diacritic": "ˈskī-ˌdī-viŋ", 
    "part_of_speech": "verb", 
    "example_sentence": "After months of training, she finally conquered her fear and went _____ for the first time.", 
    "etymology": "Word History First Known Use 1955, in the meaning defined above Time Traveler The first known use of skydiving was in 1955 See more words from the same year"
  }, 
  {
    "definition": "An individual who is granted protection by a feudal lord in exchange for loyalty and service; a tenant in the feudal system.", 
    "word": "vassal", 
    "diacritic": "ˈva-səl", 
    "part_of_speech": "noun", 
    "example_sentence": "The king rewarded his most loyal _____ with lands and privileges for their unwavering support during the war.", 
    "etymology": "Middle English, borrowed from Anglo-French, borrowed from Medieval Latin vassallus \"serf of the manor house, household servant, lord's man who has received a fief,\" borrowed from Gaulish *wassall- , derivative of *wass- \"servant\" (whence Medieval Latin vassus \"serf, servant, holder of a fief\"), going back to Celtic *wosto- , whence Welsh gwas \"boy, servant,\" Middle Breton goas , Old Irish foss \"servant, attendant\" Note: Celtic *wasto- is generally taken to continue Indo-European *upo-sth 2 -o- \"one who stands under,\" which may be correct if Gaulish *wass- shares with British Celtic unrounding of o in this position."
  }, 
  {
    "definition": "Pertaining to heaven or the sky; celestial in nature.", 
    "word": "heavenly", 
    "diacritic": "ˈhe-vən-lē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The sunset painted the sky in _____ hues, making it look like a scene from a dream.", 
    "etymology": "Word History First Known Use before the 12th century, in the meaning defined at sense 1 Time Traveler The first known use of heavenly was before the 12th century See more words from the same century"
  }, 
  {
    "definition": "A Muslim from India who belongs to or is descended from various conquering groups with Mongolian, Turkish, and Persian roots.", 
    "word": "mogul", 
    "diacritic": "ˈmō-(ˌ)gəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ architecture of the palace showcased intricate designs and a rich history influenced by various cultures.", 
    "etymology": "Noun (1) Persian Mughul , from Mongolian mongγol Mongol Noun (2) German dialect; akin to German dialect (Viennese) mugl small hill"
  }, 
  {
    "definition": "Someone who goes to a warm and sunny place, particularly during the winter months.", 
    "word": "sunseeker", 
    "diacritic": "ˈsən-ˌsē-kər", 
    "part_of_speech": "noun", 
    "example_sentence": "Every winter, she becomes a _____, escaping the cold by traveling to tropical beaches.", 
    "etymology": "Word History First Known Use 1890, in the meaning defined above Time Traveler The first known use of sunseeker was in 1890 See more words from the same year"
  }, 
  {
    "definition": "A person who does not follow the practices or beliefs of a recognized religious institution.", 
    "word": "nonconformist", 
    "diacritic": "ˌnän-kən-ˈfȯr-mist", 
    "part_of_speech": "noun", 
    "example_sentence": "She has always been a _____, opting for alternative spiritual practices rather than adhering to traditional religious norms.", 
    "etymology": "Word History First Known Use 1618, in the meaning defined at sense 1 Time Traveler The first known use of nonconformist was in 1618 See more words from the same year"
  }, 
  {
    "definition": "stretched out in one direction, differing from a square, circle, or sphere in shape.", 
    "word": "oblong", 
    "diacritic": "ˈä-ˌblȯŋ", 
    "part_of_speech": "adjective", 
    "example_sentence": "The table was an _____ shape, longer than it was wide, making it perfect for family gatherings.", 
    "etymology": "Adjective Middle English oblonge, oblong, borrowed from Anglo-French & Latin; Anglo-French oblonge, borrowed from Latin oblongus \"of greater length than breadth,\" from ob-, perhaps in sense \"facing, against\" + longus \"having linear extent, long\" — more at ob- , long entry 1 Noun derivative of oblong entry 1"
  }, 
  {
    "definition": "The process of isolating oneself; the state of being isolated.", 
    "word": "seclusion", 
    "diacritic": "si-ˈklü-zhən", 
    "part_of_speech": "noun", 
    "example_sentence": "After a long week of social events, she sought _____ in a quiet cabin in the woods to recharge.", 
    "etymology": "Medieval Latin seclusion-, seclusio , from Latin secludere"
  }, 
  {
    "definition": "To create distance or separation, leading to feelings of unfriendliness, hostility, or indifference, especially when a bond once existed.", 
    "word": "alienate", 
    "diacritic": "ˈā-lē-ə-ˌnāt, ˈāl-yə-", 
    "part_of_speech": "verb", 
    "example_sentence": "His constant criticism began to _____ his closest friends, leaving him feeling isolated and alone.", 
    "etymology": "borrowed from Latin aliēnātus, past participle of aliēnāre \"to transfer (goods, property) to another, lose possession of, render hostile, estrange,\" verbal derivative of aliēnus \"not one's own, of others, foreign, strange\" — more at alien entry 1"
  }, 
  {
    "definition": "The act of illegally taking or using someone else's property or funds that have been entrusted to you for personal benefit.", 
    "word": "embezzlement", 
    "diacritic": "im-ˈbe-zəl-mənt, em-", 
    "part_of_speech": "noun", 
    "example_sentence": "The accountant was charged with _____ after it was discovered that he had been siphoning money from the company's accounts for years.", 
    "etymology": "Middle English embesilen , from Anglo-French embesiller to make away with, from en- + besiller to steal, plunder"
  }, 
  {
    "definition": "James, a notable figure from 1796 to 1836, celebrated for his role in the Texas Revolution.", 
    "word": "bowie", 
    "diacritic": "ˈbü-ē, ˈbō-", 
    "part_of_speech": "biographical name", 
    "example_sentence": "_____ was a key figure in the Texas Revolution, known for his bravery and leadership.", 
    "etymology": ""
  }, 
  {
    "definition": "Stylish in appearance or demeanor; fashionable.", 
    "word": "gallant", 
    "diacritic": "ˈga-lənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "He arrived at the party in a _____ suit that turned heads and drew compliments from everyone.", 
    "etymology": "Adjective Middle English galaunt , borrowed from Middle French galant , from present participle of galer \"to squander in pleasures, have a good time, enjoy oneself,\" going back to Old French, going back to Gallo-Romance *walāre , derivative of Old Low Franconian *wala \"well, with good appearance or effect,\" going back to Germanic *welō — more at well entry 3 Noun Middle English galaunt, gallaunt , borrowed from Middle French, noun derivative of galant gallant entry 1 Verb derivative of gallant entry 1"
  }, 
  {
    "definition": "a specific method for achieving a task or behaving in a certain manner", 
    "word": "procedure", 
    "diacritic": "prə-ˈsē-jər", 
    "part_of_speech": "noun", 
    "example_sentence": "The team followed the standard _____ to ensure that the project was completed on time and within budget.", 
    "etymology": "French procédure , from Middle French, from proceder"
  }, 
  {
    "definition": "Items or products that are traded in commerce.", 
    "word": "merchandise", 
    "diacritic": "ˈmər-chən-ˌdīz, -ˌdīs", 
    "part_of_speech": "noun", 
    "example_sentence": "The store displayed a wide variety of _____, attracting customers with its colorful packaging and enticing promotions.", 
    "etymology": "Noun and Verb Middle English marchaundise , from Anglo-French marchandise , from marcheant"
  }, 
  {
    "definition": "A story told in rhythmic lines that is meant to be sung.", 
    "word": "ballad", 
    "diacritic": "ˈba-ləd", 
    "part_of_speech": "noun", 
    "example_sentence": "The singer captivated the audience with a beautiful _____ that recounted the tale of lost love and longing.", 
    "etymology": "Middle English balad, balade, ballade, balett \"poem or song in stanza form, poem or stanza in rhyme royal or a similar form,\" borrowed from Middle French balade, going back to Old French barade, balade \"song to be danced to, short poem to be sung,\" borrowed from Old Occitan ballada, from ballar \"to dance\" (going back to Late Latin ballāre ) + -ada -ade — more at ball entry 3"
  }, 
  {
    "definition": "The ideal level or extent of something that best achieves a desired outcome.", 
    "word": "optimum", 
    "diacritic": "ˈäp-tə-məm", 
    "part_of_speech": "noun", 
    "example_sentence": "To achieve the best results in your workout, it's important to find the _____ balance between intensity and recovery.", 
    "etymology": "borrowed from Latin, from neuter of optimus (earlier optumus ) \"best,\" probably originally \"foremost, headmost,\" from ob \"toward, in front of\" + -tumus, -timus, superlative suffix (going back to Indo-European *-tm̥mos ) — more at ob- Note: Traditionally the initial element op- has been taken as the stem of op-, *ops \"power, ability, wealth\" (see opus ), though superlative derivatives with -(t)imus are regularly formed from spatial prepositions (as extimus, intimus, postumus ), not nouns. The inscriptional forms opitimus, opitumus probably contain an epenthetic vowel and hence would not be of etymological relevance."
  }, 
  {
    "definition": "To restore youthfulness or vitality; to refresh or energize.", 
    "word": "rejuvenate", 
    "diacritic": "ri-ˈjü-və-ˌnāt", 
    "part_of_speech": "verb", 
    "example_sentence": "A weekend getaway to the mountains helped to _____ her spirit and energy.", 
    "etymology": "re- + Latin juvenis \"young\" + -ate entry 4 , in part after early Modern French rejeunir, Modern French rajeunir — more at young entry 1"
  }, 
  {
    "definition": "In a way that involves diving or falling forward with the head going in first.", 
    "word": "headlong", 
    "diacritic": "ˈhed-ˈlȯŋ", 
    "part_of_speech": "adverb", 
    "example_sentence": "He jumped into the pool _____, eager to make a big splash.", 
    "etymology": "Adverb Middle English hedlong , alteration of hedling , from hed head"
  }, 
  {
    "definition": "A type of large and colorful parrot found in South and Central America, particularly from the genus Ara.", 
    "word": "macaw", 
    "diacritic": "mə-ˈkȯ", 
    "part_of_speech": "noun", 
    "example_sentence": "The bright blue and yellow _____ perched on a branch, drawing the attention of all the visitors at the zoo.", 
    "etymology": "Portuguese (now obsolete) macao"
  }, 
  {
    "definition": "A person, often a priestess in ancient Greece, who is thought to communicate messages from a god.", 
    "word": "oracle", 
    "diacritic": "ˈȯr-ə-kəl, ˈär-", 
    "part_of_speech": "noun", 
    "example_sentence": "The villagers sought guidance from the _____, believing she could reveal the will of the gods through her prophecies.", 
    "etymology": "Middle English, from Anglo-French, from Latin oraculum , from orare to speak — more at oration"
  }, 
  {
    "definition": "A person who hides on a vehicle, such as a ship or plane, to travel secretly without paying.", 
    "word": "stowaway", 
    "diacritic": "ˈstō-ə-ˌwā", 
    "part_of_speech": "noun", 
    "example_sentence": "The authorities discovered a _____ hidden in the cargo hold of the ship after it arrived at the port.", 
    "etymology": "Word History First Known Use Noun 1848, in the meaning defined above Verb 1879, in the meaning defined above Time Traveler The first known use of stowaway was in 1848 See more words from the same year"
  }, 
  {
    "definition": "A distinguishing mark placed on an animal's ear for identification purposes.", 
    "word": "earmark", 
    "diacritic": "ˈir-ˌmärk", 
    "part_of_speech": "noun", 
    "example_sentence": "The farmer used a bright tag as an _____ to easily identify his sheep during the breeding season.", 
    "etymology": "Word History First Known Use Noun 15th century, in the meaning defined at sense 1 Verb 1591, in the meaning defined at sense 1a Time Traveler The first known use of earmark was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "The condition of being legally united in marriage.", 
    "word": "matrimony", 
    "diacritic": "ˈma-trə-ˌmō-nē", 
    "part_of_speech": "noun", 
    "example_sentence": "After years of dating, they finally decided to enter into _____.", 
    "etymology": "Middle English, from Anglo-French matrimoignie , from Latin matrimonium , from matr-, mater mother, matron — more at mother"
  }, 
  {
    "definition": "to delay or avoid doing something on purpose and regularly", 
    "word": "procrastinate", 
    "diacritic": "prə-ˈkra-stə-ˌnāt, prō-", 
    "part_of_speech": "verb", 
    "example_sentence": "I tend to _____ when it comes to starting my assignments, often choosing to watch TV instead.", 
    "etymology": "Latin procrastinatus , past participle of procrastinare , from pro- forward + crastinus of tomorrow, from cras tomorrow"
  }, 
  {
    "definition": "A tabletop game similar to soccer, where players control rods with attached miniature figures to move a ball.", 
    "word": "foosball", 
    "diacritic": "ˈfüz-ˌbȯl", 
    "part_of_speech": "noun", 
    "example_sentence": "After dinner, we gathered around the table to play a few exciting matches of _____.", 
    "etymology": "probably modification of German Tischfussball , from Tisch table + Fussball soccer, from Fuss foot + Ball ball"
  }, 
  {
    "definition": "An individual who owns financial resources, particularly those put into business ventures.", 
    "word": "capitalist", 
    "diacritic": "ˈka-pə-tə-list, ˈkap-tə-", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ invested a significant amount of money in the startup, hoping to see a substantial return on his investment.", 
    "etymology": "Noun probably borrowed from French capitaliste \"person possessing capital,\" from capital capital entry 2 + -iste -ist entry 1 Adjective capital entry 2 + -ist entry 2 , after capitalist entry 1"
  }, 
  {
    "definition": "An expression used to show disgust or disapproval.", 
    "word": "fie", 
    "diacritic": "ˈfī", 
    "part_of_speech": "interjection", 
    "example_sentence": "_____! I can't believe you would say something so rude.", 
    "etymology": "Middle English fi , from Anglo-French"
  }, 
  {
    "definition": "referring to a specific object or category of objects", 
    "word": "concrete", 
    "diacritic": "(ˌ)kän-ˈkrēt, ˈkän-ˌkrēt, kən-ˈkrēt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The artist used a _____ example to illustrate her point about the importance of community in her work.", 
    "etymology": "Adjective Middle English concret \"(of words) denoting a quality as adherent in a substance rather than in isolation,\" borrowed from Medieval Latin concrētus \"composite, solidified, (of words) denoting a quality adherent in a substance rather than in isolation,\" going back to Latin, \"formed, composite, condensed, solid,\" from past participle of concrēscere \"to coalesce, condense, solidify, harden\" — more at concrescence Verb borrowed from Latin concrētus, past participle of concrēscere \"to coalesce, condense, solidify, harden\" — more at concrescence Noun derivative of concrete entry 1"
  }, 
  {
    "definition": "To clarify or explain something in a way that makes it easier to understand, often through detailed analysis.", 
    "word": "elucidate", 
    "diacritic": "i-ˈlü-sə-ˌdāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The professor used diagrams and real-life examples to _____ the complex theories behind quantum mechanics.", 
    "etymology": "borrowed from Late Latin ēlūcidātus, past participle of ēlūcidāre \"to enlighten, explain,\" from Latin ē-, variant of ex- ex- entry 1 + -lūcidāre, derivative of lūcidus \"bright, shining, clear to the understanding\" — more at lucid"
  }, 
  {
    "definition": "A device or person that performs calculations.", 
    "word": "calculator", 
    "diacritic": "ˈkal-kyə-ˌlā-tər", 
    "part_of_speech": "noun", 
    "example_sentence": "I used a _____ to quickly solve the complex math problem.", 
    "etymology": "Middle English calkelatour \"one who counts or computes, mathematician,\" borrowed from Latin calculātōr-, calculātor \"teacher of arithmetic,\" from calculā- (attested in Late Latin as the stem of calculāre \"to count, calculate \") + -tōr-, -tor, agent suffix"
  }, 
  {
    "definition": "to arrange in an orderly manner; to tidy up", 
    "word": "neaten", 
    "diacritic": "ˈnē-tᵊn", 
    "part_of_speech": "verb", 
    "example_sentence": "She took a few minutes to _____ her desk before starting to work.", 
    "etymology": "Word History First Known Use 1828, in the meaning defined at sense 1 Time Traveler The first known use of neaten was in 1828 See more words from the same year"
  }, 
  {
    "definition": "decayed or spoiled", 
    "word": "addle", 
    "diacritic": "ˈa-dᵊl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The _____ smell from the old, abandoned house made it clear that something had been left to rot for years.", 
    "etymology": "Adjective Middle English adel- (in adel eye \"putrid egg\"), attributive use of Old English adela \"filth, filthy or foul-smelling place,\" going back to Germanic *adela-, *adelōn- (whence Middle Dutch ael \"liquid manure,\" Middle Low German ādel, ādele, Middle High German —east Upper German— adel, regional Swedish adel, al \"animal urine\"), of obscure origin Verb probably back-formation from addled"
  }, 
  {
    "definition": "to reveal the truth behind something deceptive or untrue", 
    "word": "debunk", 
    "diacritic": "(ˌ)dē-ˈbəŋk", 
    "part_of_speech": "verb", 
    "example_sentence": "The journalist worked tirelessly to _____ the myths surrounding the controversial topic.", 
    "etymology": "Word History First Known Use 1923, in the meaning defined above Time Traveler The first known use of debunk was in 1923 See more words from the same year"
  }, 
  {
    "definition": "to travel together with someone or something for protection or support", 
    "word": "convoy", 
    "diacritic": "ˈkän-ˌvȯi, kən-ˈvȯi", 
    "part_of_speech": "verb", 
    "example_sentence": "The group decided to _____ through the dangerous area to ensure everyone’s safety.", 
    "etymology": "Verb Middle English, from Middle French convoier , from Old French conveier , from Vulgar Latin *conviare — more at convey"
  }, 
  {
    "definition": "expressing deep regret and guilt for wrongdoing or inappropriate actions.", 
    "word": "contrite", 
    "diacritic": "kən-ˈtrīt, ˈkän-ˌtrīt", 
    "part_of_speech": "adjective", 
    "example_sentence": "She was _____ after realizing how her actions had hurt her friend.", 
    "etymology": "Middle English contrit, borrowed from Anglo-French & Medieval Latin; Anglo-French, borrowed from Medieval Latin contrītus, past participle of Latin conterere \"to pound to pieces, crush, wear out or down, exhaust mentally or physically\" (Medieval Latin also, \"to crush in spirit with a sense of one's sin, render contrite\"), from con- con- + terere \"to rub, grind, crush, wear down\" — more at trite"
  }, 
  {
    "definition": "the area in a public building designated for spectators to sit and watch performances or events", 
    "word": "auditorium", 
    "diacritic": "ˌȯ-də-ˈtȯr-ē-əm", 
    "part_of_speech": "noun", 
    "example_sentence": "The school held its annual concert in the large _____, where parents and friends gathered to enjoy the performances.", 
    "etymology": "borrowed from Latin audītōrium \"lecture room, hall, body of listeners,\" from audīre \"to hear\" + -tōrium, suffix of places, from neuter of -tōrius, deverbal adjective suffix — more at audible entry 1 , auditory entry 2"
  }, 
  {
    "definition": "The ninth month of the calendar system introduced by Pope Gregory XIII.", 
    "word": "September", 
    "diacritic": "sep-ˈtem-bər, səp-", 
    "part_of_speech": "noun", 
    "example_sentence": "The leaves began to change color as _____ arrived, signaling the start of autumn.", 
    "etymology": "Middle English Septembre , from Anglo-French & Old English, both from Latin September (seventh month), from septem seven — more at seven"
  }, 
  {
    "definition": "A unique ability or skill, particularly in sports, creativity, or the arts.", 
    "word": "talent", 
    "diacritic": "ˈta-lənt", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ for painting was evident from a young age, as she could create stunning landscapes with ease.", 
    "etymology": "Middle English, from Old English talente , from Latin talenta , plural of talentum unit of weight or money, from Greek talanton pan of a scale, weight; akin to Greek tlēnai to bear; in senses 3–5, from the parable of the talents in Matthew 25:14–30 — more at tolerate"
  }, 
  {
    "definition": "A weapon featuring a long blade designed for cutting or stabbing, commonly representing honor or power.", 
    "word": "sword", 
    "diacritic": "ˈsȯrd", 
    "part_of_speech": "noun", 
    "example_sentence": "The knight drew his _____ and prepared to defend his kingdom against the invading forces.", 
    "etymology": "Middle English, from Old English sweord ; akin to Old High German swert sword"
  }, 
  {
    "definition": "The bony structure that encases the brain.", 
    "word": "cranium", 
    "diacritic": "ˈkrā-nē-əm", 
    "part_of_speech": "noun", 
    "example_sentence": "The doctor explained that the _____ protects the brain from injury.", 
    "etymology": "Medieval Latin, from Greek kranion ; akin to Greek kara head — more at cerebral"
  }, 
  {
    "definition": "A closed curve on a flat surface formed by a point that moves so that the total distance to two fixed points remains the same; it can also be described as the shape created when a right circular cone is cut by a plane.", 
    "word": "ellipse", 
    "diacritic": "i-ˈlips, e-", 
    "part_of_speech": "noun", 
    "example_sentence": "The planets in our solar system follow an elongated path around the sun that can be described as an _____.", 
    "etymology": "Greek elleipsis"
  }, 
  {
    "definition": "a protruding opening or spout for directing fluid or gas flow", 
    "word": "nozzles", 
    "diacritic": "ˈnä-zəlz", 
    "part_of_speech": "plural noun", 
    "example_sentence": "The gardener adjusted the _____ on the hose to create a fine mist for watering the plants.", 
    "etymology": "diminutive of nose"
  }, 
  {
    "definition": "involving danger or uncertainty; not reliable or stable", 
    "word": "dicey", 
    "diacritic": "ˈdī-sē", 
    "part_of_speech": "adjective", 
    "example_sentence": "Investing in the stock market can be _____, especially during economic downturns.", 
    "etymology": "dice entry 1 + -y"
  }, 
  {
    "definition": "A horse-riding soldier who serves a lord in a feudal system.", 
    "word": "knight", 
    "diacritic": "ˈnīt", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ charged into battle, his armor shining in the sunlight as he fought bravely for his king.", 
    "etymology": "Noun Middle English, from Old English cniht man-at-arms, boy, servant; akin to Old High German kneht youth, military follower"
  }, 
  {
    "definition": "The action or occurrence of changing direction or moving away from a planned path, activity, or purpose; a departure from the usual.", 
    "word": "diversion", 
    "diacritic": "də-ˈvər-zhən, dī-, -shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The unexpected road closure caused a _____ that delayed our journey to the conference.", 
    "etymology": "Middle English dyversioun \"process of diverting superfluous humors,\" borrowed from Late Latin dīversiōn-, dīversiō \"turning away,\" from Latin dīvertere \"to separate oneself (from), be different\" and dēvertere \"to turn away, divert\" + -tiōn-, -tiō, suffix of verbal action — more at divert"
  }, 
  {
    "definition": "traditional, timeless", 
    "word": "classical", 
    "diacritic": "ˈkla-si-kəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The concert featured _____ music that has been appreciated for centuries.", 
    "etymology": "Latin classicus"
  }, 
  {
    "definition": "Referring to the area of the shore that is exposed at low tide.", 
    "word": "intertidal", 
    "diacritic": "ˌin-tər-ˈtī-dᵊl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The marine biologist studied the diverse ecosystems that thrived in the _____ zone where the ocean meets the land.", 
    "etymology": "Word History First Known Use 1883, in the meaning defined above Time Traveler The first known use of intertidal was in 1883 See more words from the same year"
  }, 
  {
    "definition": "A dark brown, fibrous substance created mainly from the incomplete breakdown of organic material, particularly plants like sphagnum moss, in wet, low-oxygen environments such as bogs and swamps. It is commonly collected for use as a heating or cooking fuel, or as an additive to improve soil.", 
    "word": "peat", 
    "diacritic": "ˈpēt", 
    "part_of_speech": "noun", 
    "example_sentence": "The gardener added _____ to the soil to enhance its fertility and improve water retention.", 
    "etymology": "Noun (1) Middle English pete piece of peat, from Medieval Latin peta , probably of Celtic origin; akin to Cornish peyth bit, Welsh peth thing Noun (2) origin unknown"
  }, 
  {
    "definition": "A long outer garment traditionally worn by monks and friars.", 
    "word": "frock", 
    "diacritic": "ˈfräk", 
    "part_of_speech": "noun", 
    "example_sentence": "The monk wore a simple _____ as he walked through the quiet monastery gardens.", 
    "etymology": "Noun Middle English frok , from Anglo-French froc , of Germanic origin; akin to Old High German hroch mantle, coat"
  }, 
  {
    "definition": "A sacred phrase or chant used for spiritual invocation or ritual, particularly in Hindu traditions.", 
    "word": "mantra", 
    "diacritic": "ˈmän-trə also ˈman- or ˈmən-", 
    "part_of_speech": "noun", 
    "example_sentence": "As she meditated, she repeated her favorite _____ to center her thoughts and connect with her spirituality.", 
    "etymology": "Sanskrit, sacred counsel, formula, from manyate he thinks; akin to Latin mens mind — more at mind"
  }, 
  {
    "definition": "a passage that is enclosed on top and typically underground", 
    "word": "tunnel", 
    "diacritic": "ˈtə-nᵊl", 
    "part_of_speech": "noun", 
    "example_sentence": "The workers dug a long _____ to connect the subway stations beneath the city.", 
    "etymology": "Noun Middle English tonel cask, tun, from Anglo-French, from tone tun"
  }, 
  {
    "definition": "A higher education institution that offers teaching and research resources and has the authority to confer academic degrees.", 
    "word": "university", 
    "diacritic": "ˌyü-nə-ˈvər-sə-tē, -ˈvər-stē", 
    "part_of_speech": "noun", 
    "example_sentence": "She decided to enroll in a prestigious _____ to pursue her degree in engineering.", 
    "etymology": "Middle English universite , from Anglo-French université , from Medieval Latin universitat-, universitas , from Latin universus"
  }, 
  {
    "definition": "A portable container with sections designed for holding bottles or cooking and dining tools.", 
    "word": "canteen", 
    "diacritic": "kan-ˈtēn", 
    "part_of_speech": "noun", 
    "example_sentence": "She packed her lunch and filled her _____ with water for the hike.", 
    "etymology": "French cantine bottle case, sutler's shop, from Italian cantina wine cellar, probably from canto corner, from Latin canthus iron tire — more at cant entry 4"
  }, 
  {
    "definition": "a man who is about to be married or has just been married", 
    "word": "groom", 
    "diacritic": "ˈgrüm, ˈgru̇m", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ was nervous as he waited at the altar for his bride to arrive.", 
    "etymology": "Noun Middle English grom"
  }, 
  {
    "definition": "The typically sideways flow of a fluid mass, like air or ocean water.", 
    "word": "advection", 
    "diacritic": "ad-ˈvek-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The meteorologist explained how the _____ of warm air from the ocean can influence coastal weather patterns.", 
    "etymology": "ad- + (con)vection"
  }, 
  {
    "definition": "thorough and complete", 
    "word": "summary", 
    "diacritic": "ˈsə-mə-rē also ˈsəm-rē or -ˌmer-ē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The team presented a _____ overview of the project's progress during the meeting.", 
    "etymology": "Adjective Middle English, from Medieval Latin summarius , from Latin summa sum"
  }, 
  {
    "definition": "A lack of color, particularly in the face; an unusual paleness.", 
    "word": "pallor", 
    "diacritic": "ˈpa-lər", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ was noticeable after she had been ill for several days.", 
    "etymology": "Middle English pallour, borrowed from Anglo-French & Latin; Anglo-French palur, pallor \"paleness, wanness, pale yellow color (of gold), borrowed from Latin pallor \"paleness of complexion, loss of color,\" noun derivative, with the suffix -ōr-, -or (early Latin -ōs ), from the base of pallēre \"to be pale or bloodless, have a pale color,\" pallidus \"pale, colorless\" — more at fallow entry 1"
  }, 
  {
    "definition": "A young lamb or goat.", 
    "word": "yeanling", 
    "diacritic": "ˈyēn-liŋ", 
    "part_of_speech": "noun", 
    "example_sentence": "The farmer was delighted to see the _____ frolicking in the sunny meadow with its mother.", 
    "etymology": "Word History First Known Use 1637, in the meaning defined above Time Traveler The first known use of yeanling was in 1637 See more words from the same year"
  }, 
  {
    "definition": "A person responsible for overseeing and organizing exhibitions in a venue like a museum or zoo.", 
    "word": "curator", 
    "diacritic": "ˈkyu̇r-ˌā-tər, ˈkyər-, kyu̇-ˈrā-, ˈkyu̇r-ə-, ˈkyər-", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ carefully selected the pieces for the new art exhibit to ensure a cohesive theme.", 
    "etymology": "borrowed from Latin cūrātor \"one who looks after, superintendent, guardian,\" from cūrāre \"to watch over, attend\" + -tor , agent suffix — more at cure entry 2"
  }, 
  {
    "definition": "A powerful action of pulling back or separating; a sense of retreat.", 
    "word": "revulsive", 
    "diacritic": "ri-ˈvəl-siv", 
    "part_of_speech": "adjective", 
    "example_sentence": "The sudden change in the atmosphere created a _____ feeling among the crowd, causing everyone to step back in confusion.", 
    "etymology": "Latin revulsion-, revulsio act of tearing away, from revellere to pluck away, from re- + vellere to pluck — more at vulnerable"
  }, 
  {
    "definition": "to start a fire or cause something to burn", 
    "word": "ignite", 
    "diacritic": "ig-ˈnīt", 
    "part_of_speech": "verb", 
    "example_sentence": "The dry leaves were enough to _____ the flames in the campfire.", 
    "etymology": "Latin ignitus , past participle of ignire to ignite, from ignis"
  }, 
  {
    "definition": "composed of various individual components or elements.", 
    "word": "composite", 
    "diacritic": "kəm-ˈpä-zət, käm-ˈpä-", 
    "part_of_speech": "adjective", 
    "example_sentence": "The artist created a stunning mural that was a _____ blend of different styles and techniques.", 
    "etymology": "Adjective and Noun Latin compositus , past participle of componere — see compose"
  }, 
  {
    "definition": "more likely to happen or be true; quite probable", 
    "word": "likelier", 
    "diacritic": "ˈlī-klē-ər", 
    "part_of_speech": "adjective", 
    "example_sentence": "With the storm approaching, it seems _____ that we will have to cancel the outdoor event.", 
    "etymology": "Adjective and Adverb Middle English, from Old English gelīclic fitting (from gelīc like) and Old Norse glīkligr, līkligr , from glīkr like; akin to Old English gelīc"
  }, 
  {
    "definition": "a group of officials representing their government in a foreign country", 
    "word": "embassy", 
    "diacritic": "ˈem-bə-sē", 
    "part_of_speech": "noun", 
    "example_sentence": "The ambassador held a press conference at the _____ to discuss the new trade agreement.", 
    "etymology": "probably alteration (by substitution of the suffix -y entry 2 ) of embassade, variant (with em- after embassador \"ambassador\" and other derivatives based on Romance forms with em- em- replacing am- of ambassade ), going back to Middle English ambassiat, ambassiad, ambassate, ambassade \"office of an ambassador, diplomatic mission, persons trusted with such a mission,\" borrowed from Anglo-French ambassiate, ambassade \"diplomatic mission\" and Middle French ambassade, ambaxade \"diplomatic or political mission, persons sent on such a mission, ambassador,\" borrowed from Italian (13th-century) ambasciata \"diplomatic mission, official message,\" borrowed from Old Occitan ambayssada \"diplomatic mission,\" earlier ambayssat \"message,\" derivatives (with the suffixes of action and result -at, -ada ) of *ambaissa, going back to Late Latin ambascia, ambassia \"mission, errand, task, journey,\" borrowed from Germanic *ambahtja- \"service, office\" (whence Old English ambiht, embiht \"service, ministry,\" Old Saxon ambaht \"office, service,\" Old High German ambahti \"commission, task, obligation, service,\" Old Icelandic embætti \"service, office, task,\" Gothic andbahti \"office, service, assistance\"), derivative of *ambahtjōn- or *ambahta- \"servant, follower\" (whence Old English ombiht, embiht \"servant, attendant, officer,\" Old Saxon ambahtio \"servant,\" Old High German ambaht \"servant, holder of a spiritual or lay office,\" Old Icelandic ambátt \"bondwoman, female servant,\" Gothic andbahts \"servant\"), borrowed from Celtic *ambaχto- (whence Welsh amaeth \"plowman, tillage,\" Gaulish *ambaktos, in Latin texts as ambactus \"servant\"), agentive noun from the verbal adjective of *ambi-ag-, whence Old Irish imm‧aig \"(s/he) drives around, pursues,\" going back to Indo-European *h 2 m̥b h i \"around\" + *h 2 eǵ- \"drive\" — more at -ade , ambient entry 1 , agent Note: Romance and Medieval Latin forms show frequent fluctuation between initial am- and em- in this family of words; this is conditioned by the replacement of am- by the more transparent verb-forming prefix em-, and perhaps in part also by the homonymy of the two suffixes in medieval French. The form embassy competed in early Modern English with ambassy, but the latter apparently declined by the eighteenth century. Samuel Johnson noted in his dictionary (1755) that \"our authors write almost indiscriminately embassador or ambassador, embassage or ambassage ; yet there is scarce an example of ambassy, all concurring to write embassy. \" — The hypothesis that Italian ambasciata represents a loan from Old Occitan rather than a direct borrowing from spoken Latin *ambactiāta or from Germanic is based on phonetic developments in Italian: the cluster -kti̯- regularly results in -cci- ( tracciare \"to trace, mark out,\" from *tractiāre ) or -zz- ( drizzare \"to direct,\" from *dīrectiāre ), but not -sci-. — As noted by Ernout and Meillet ( Dictionaire étymologique de la langue latine ), the word ambactus is not naturalized in Latin (\"Mot étranger—non pas mot d'emprunt\"). Its use is attributed to the early Roman author Ennius by the grammarian Sextus Pompeius Festus: \"apud Ennium lingua gallica seruus appellatur … seruus ambactus, i.e. circumactus dicitur\" (in the work of Ennius servus [\"slave, servant\"] is called [by a word in] Gaulish … servus is ambactus, that is to say, \"one who is made to go around\"); ambactus is not, however, attested in the extant fragments of Ennius's poetry. More light is thrown on the word by Julius Caesar, who uses the word in describing Gaulish social structure ( De bello Gallico, 6.15.2): \"… atque eorum ut quisque est genere copiisque amplissimus, ita plurimos circum se ambactos clientesque habet.\" (\"And as each of them [the equites = \"knights,\" as opposed to the druids and the commoners] is distinguished by birth or resources, so he maintains around himself the greater number of ambacti and clients.\") Here the word more likely means \"follower\" or \"vassal\" than \"servant\" or \"slave,\" corresponding to its meaning in Germanic (\"servant,\" but also \"person fulfilling an official function\"). These senses underlie the rich development of the word in Romance languages. The Welsh word amaeth \"plowman,\" however, retains what must have been the original meaning of the deverbal derivative, \"one who drives (a plowing ox) around.\""
  }, 
  {
    "definition": "A reference book that lists words in a language in alphabetical order along with their meanings; a dictionary.", 
    "word": "lexicon", 
    "diacritic": "ˈlek-sə-ˌkän also -kən", 
    "part_of_speech": "noun", 
    "example_sentence": "Before writing her research paper, she consulted the _____ to ensure she understood the definitions of the technical terms.", 
    "etymology": "Late Greek lexikon , from neuter of lexikos of words, from Greek lexis word, speech, from legein to say — more at legend"
  }, 
  {
    "definition": "The ability to move quickly and easily; quickness and skill in movement.", 
    "word": "agility", 
    "diacritic": "ə-ˈji-lə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "The gymnast's _____ allowed her to perform complex routines with grace and speed.", 
    "etymology": "Middle English agilite, borrowed from Anglo-French agilitee, borrowed from Latin agilitāt-, agilitās, from agilis agile + -itāt-, -itās -ity"
  }, 
  {
    "definition": "A unit of measurement for distance ranging from approximately 2.4 to 4.6 miles (3.9 to 7.4 kilometers).", 
    "word": "league", 
    "diacritic": "ˈlēg", 
    "part_of_speech": "noun", 
    "example_sentence": "The sailors traveled a full _____ from the shore before they spotted the lighthouse.", 
    "etymology": "Noun (1) Middle English leuge, lege , from Late Latin leuga Noun (2) and Verb Middle English (Scots) ligg , from Middle French ligue , from Old Italian liga , from ligare to bind, from Latin — more at ligature"
  }, 
  {
    "definition": "In a lawful and acceptable way; in accordance with what is proper or sensible.", 
    "word": "legitimately", 
    "diacritic": "li-ˈji-tə-mət-lē", 
    "part_of_speech": "adverb", 
    "example_sentence": "She was _____ worried about the consequences of her actions after learning they were against the rules.", 
    "etymology": "Word History First Known Use 1593, in the meaning defined above Time Traveler The first known use of legitimately was in 1593 See more words from the same year"
  }, 
  {
    "definition": "A mythical creature from Greek legend, depicted as a serpent with multiple heads, which was defeated by Hercules; when one head was severed, two more would grow back in its place.", 
    "word": "hydra", 
    "diacritic": "ˈhī-drə", 
    "part_of_speech": "noun", 
    "example_sentence": "In the story, the hero faced the daunting challenge of slaying the _____, knowing that each time he cut off a head, two more would emerge.", 
    "etymology": "Middle English Ydra, Idre, borrowed from Latin Hydra \"any of various mythical monsters, especially the Hydra of Lerna killed by Hercules, a constellation,\" borrowed from Greek hýdra \"aquatic snake, the Hydra of Lerna, a constellation\"; (sense 4) borrowed from New Latin, genus name, going back to Latin — more at otter"
  }, 
  {
    "definition": "A boundary separating two nations.", 
    "word": "frontier", 
    "diacritic": "ˌfrən-ˈtir, ˈfrən-ˌtir,  frän-ˈtir,  ˈfrän-ˌtir ", 
    "part_of_speech": "noun", 
    "example_sentence": "The soldiers were stationed at the _____ to monitor any unusual activity between the two countries.", 
    "etymology": "Middle English fronter , from Anglo-French frountere, fronter , from front"
  }, 
  {
    "definition": "To apply oil or a similar substance by rubbing or spreading it on.", 
    "word": "anoint", 
    "diacritic": "ə-ˈnȯint", 
    "part_of_speech": "verb", 
    "example_sentence": "The priest will _____ the new altar during the ceremony to bless it.", 
    "etymology": "Middle English, from Anglo-French enoint , past participle of enoindre , from Latin inunguere , from in- + unguere to smear — more at ointment"
  }, 
  {
    "definition": "Liquid waste or unwanted materials that are typically transported through drainage systems.", 
    "word": "sewage", 
    "diacritic": "ˈsü-ij", 
    "part_of_speech": "noun", 
    "example_sentence": "The city's outdated infrastructure struggles to effectively manage the increasing amount of _____ that flows through its pipes each day.", 
    "etymology": "sewer entry 3"
  }, 
  {
    "definition": "A thing that is insignificant, lacking in value or importance.", 
    "word": "trifle", 
    "diacritic": "ˈtrī-fəl", 
    "part_of_speech": "noun", 
    "example_sentence": "She considered the argument to be a mere _____ and decided to move on without dwelling on it.", 
    "etymology": "Noun Middle English trufle, trifle , from Anglo-French trufle, triffle fraud, trick, nonsense Verb Middle English truflen, triflen , from Anglo-French trufler to trick, talk nonsense"
  }, 
  {
    "definition": "demonstrating or needing minimal effort", 
    "word": "effortless", 
    "diacritic": "ˈe-fərt-ləs", 
    "part_of_speech": "adjective", 
    "example_sentence": "She completed the puzzle _____, finishing it in just a few minutes.", 
    "etymology": "Word History First Known Use 1801, in the meaning defined above Time Traveler The first known use of effortless was in 1801 See more words from the same year"
  }, 
  {
    "definition": "pertaining to or involving atoms", 
    "word": "atomic", 
    "diacritic": "ə-ˈtä-mik", 
    "part_of_speech": "adjective", 
    "example_sentence": "The scientists conducted experiments that revealed _____ interactions at the molecular level.", 
    "etymology": "Word History First Known Use 1678, in the meaning defined at sense 1a Time Traveler The first known use of atomic was in 1678 See more words from the same year"
  }, 
  {
    "definition": "Concave metal plates, typically made of brass or bronze, that create a bright, crashing sound when hit with a drumstick or when two are struck together at an angle.", 
    "word": "cymbals", 
    "diacritic": "ˈsim-bəlz", 
    "part_of_speech": "plural noun", 
    "example_sentence": "The drummer brought out his _____ and skillfully added them to the rhythm, producing a sharp, vibrant sound that filled the entire room.", 
    "etymology": "Middle English, from Old English cymbal & Anglo-French cymbele , from Latin cymbalum , from Greek kymbalon , from kymbē bowl, boat"
  }, 
  {
    "definition": "relating to or appropriate for legal courts or public arguments and discussions", 
    "word": "forensic", 
    "diacritic": "fə-ˈren(t)-sik, -ˈren-zik ", 
    "part_of_speech": "adjective", 
    "example_sentence": "The lawyer presented the evidence with _____ expertise, ensuring that it would hold up in court.", 
    "etymology": "Adjective and Noun Latin forensis public, forensic, from forum forum"
  }, 
  {
    "definition": "A type of plant belonging to the Lactuca genus, which is part of the composite family.", 
    "word": "lettuce", 
    "diacritic": "ˈle-təs", 
    "part_of_speech": "noun", 
    "example_sentence": "I like to add _____ to my sandwiches for a refreshing crunch.", 
    "etymology": "Middle English letuse , from Anglo-French letuse , probably from plural of letue lettuce plant, from Latin lactuca , from lact-, lac milk; from its milky juice — more at galaxy"
  }, 
  {
    "definition": "Money or benefits received regularly, typically resulting from work or investments.", 
    "word": "income", 
    "diacritic": "ˈin-ˌkəm also ˈin-kəm or ˈiŋ-kəm", 
    "part_of_speech": "noun", 
    "example_sentence": "After reviewing her monthly budget, she realized that her total _____ was enough to cover all her expenses.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 2 Time Traveler The first known use of income was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A type of fern from the genus Adiantum, characterized by its finely divided, fan-shaped leaves.", 
    "word": "maidenhair", 
    "diacritic": "ˈmā-dᵊn-ˌher-", 
    "part_of_speech": "noun", 
    "example_sentence": "The delicate ____ plants added a touch of elegance to the shaded garden.", 
    "etymology": "Word History First Known Use 1833, in the meaning defined above Time Traveler The first known use of maidenhair fern was in 1833 See more words from the same year"
  }, 
  {
    "definition": "relating to or demonstrating a promise, hope, or longing", 
    "word": "votive", 
    "diacritic": "ˈvō-tiv", 
    "part_of_speech": "adjective", 
    "example_sentence": "She lit a candle in a _____ gesture, hoping for a safe return of her friend.", 
    "etymology": "Adjective Latin votivus , from votum vow"
  }, 
  {
    "definition": "to waste time doing nothing productive", 
    "word": "dawdle", 
    "diacritic": "ˈdȯ-dᵊl", 
    "part_of_speech": "verb", 
    "example_sentence": "Instead of finishing her homework, she decided to _____ by scrolling through social media for hours.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "the act of drawing out information or a response from an individual", 
    "word": "elicitation", 
    "diacritic": "i-ˌli-sə-ˈtā-shən, ˌē-", 
    "part_of_speech": "noun", 
    "example_sentence": "The teacher used various techniques for the _____ of students' opinions during the class discussion.", 
    "etymology": "Latin elicitus , past participle of elicere , from e- + lacere to allure"
  }, 
  {
    "definition": "a celebrated female singer, especially in opera, often known for her talent and strong personality.", 
    "word": "diva", 
    "diacritic": "ˈdē-və", 
    "part_of_speech": "noun", 
    "example_sentence": "The audience erupted in applause when the _____ took the stage, her powerful voice captivating everyone in the theater.", 
    "etymology": "Italian, literally, goddess, from Latin, feminine of divus divine, god — more at deity"
  }, 
  {
    "definition": "attached to a typically different part, especially at the edge.", 
    "word": "adnate", 
    "diacritic": "ˈad-ˌnāt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The plant's leaves were _____ to the stem, forming a seamless connection at the edge.", 
    "etymology": "borrowed from Latin adnātus, agnātus, past participle of adnāscī, agnāscī \"to be born in addition (to), grow later, grow as an addition (to)\" — more at agnate entry 1"
  }, 
  {
    "definition": "A stiff, pointed projection found on a plant.", 
    "word": "thorn", 
    "diacritic": "ˈthȯrn", 
    "part_of_speech": "noun", 
    "example_sentence": "The rosebush was covered in _____ that made it difficult to pick the flowers without getting scratched.", 
    "etymology": "Middle English, from Old English; akin to Old High German dorn thorn, Sanskrit tṛṇa grass, blade of grass"
  }, 
  {
    "definition": "possessing a lot of money or valuable assets; extremely rich", 
    "word": "wealthy", 
    "diacritic": "ˈwel-thē, ˈwelt-thē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The ____ businessman donated a large sum to the local charity, helping to improve the community.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1 Time Traveler The first known use of wealthy was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "possessing significant physical strength or force", 
    "word": "strong", 
    "diacritic": "ˈstrȯŋ", 
    "part_of_speech": "adjective", 
    "example_sentence": "He is a _____ athlete who can lift more than twice his body weight.", 
    "etymology": "Adjective Middle English, from Old English strang ; akin to Old High German strengi strong, Latin stringere to bind tight — more at strain"
  }, 
  {
    "definition": "the process of dividing or breaking into smaller sections", 
    "word": "fission", 
    "diacritic": "ˈfi-shᵊn, -zhᵊn", 
    "part_of_speech": "noun", 
    "example_sentence": "The scientist explained that the _____ of the atom releases a significant amount of energy.", 
    "etymology": "Noun borrowed from Latin fissiōn-, fissiō, from fid-, variant stem of findere \"to split, cleave\" + -tiōn-, -tiō, suffix of verbal action — more at bite entry 1 Verb derivative of fission entry 1"
  }, 
  {
    "definition": "Showing kindness and generosity towards others; caring and supportive.", 
    "word": "charitable", 
    "diacritic": "ˈcher-ə-tə-bəl, ˈcha-rə-", 
    "part_of_speech": "adjective", 
    "example_sentence": "Her _____ nature was evident as she volunteered every weekend at the local soup kitchen.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1 Time Traveler The first known use of charitable was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A decorative surface created by embedding small, differently colored pieces of material to create images or designs.", 
    "word": "mosaic", 
    "diacritic": "mō-ˈzā-ik", 
    "part_of_speech": "noun", 
    "example_sentence": "The artist created a stunning _____ mural on the wall using colorful tiles and glass.", 
    "etymology": "Noun Middle English musycke , from Medieval Latin musaicum , alteration of Late Latin musivum , from Latin museum, musaeum Adjective (2) New Latin Mosaicus , from Moses Moses"
  }, 
  {
    "definition": "A body of knowledge or a structured system that explores fundamental truths and the workings of universal principles, primarily acquired and verified through scientific methods.", 
    "word": "science", 
    "diacritic": "ˈsī-ən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "The study of _____ has led to many advancements in technology and medicine.", 
    "etymology": "Middle English, \"knowledge, the ability to know, learning, branch of knowledge,\" borrowed from Anglo-French science, cience, borrowed from Latin scientia \"knowledge, awareness, understanding, branch of knowledge, learning,\" noun derivative from scient-, sciens, present participle of sciō, scīre \"to know,\" perhaps going back to Indo-European *skh 2 -i(e/o)-, present tense formation from a verbal base *skeh 2 -, *skh 2 - \"cut open, flay\" (if sense development was \"cut, incise, mark\" > \"distinguish\" > \"know\"), whence also Sanskrit -chyati \"(s/he) flays, pulls off (skin)\" (verbal adjective chātaḥ, chitáḥ ) and perhaps Greek scházō, scházein, also scháō, schân \"to make an incision, open (a vein), let flow\" Note: Regarding earlier use of the words science and scientist see the reference to the article by Sydney Ross in the note at scientist . — Lexikon der indogermanischen Verben (2. Auflage, 2001) regards Latin sciō as a back-formation from nesciō, nescīre \"to not know, be unfamiliar with,\" going back to *ne-skH-ii̯e-, a negative compound from the base of secō, secāre \"to cut, sever, make an incision\" (see saw entry 2 ), going back to *sekai̯e-, going back to *sekH-i̯e-. M. de Vaan ( Etymological Dictionary of Latin and the Other Italic Languages, Brill, 2008), on the other hand, hypothesizes that sciō is formed with an athematic suffix from *skh 2 -, so that as a present formation it is directly comparable with Sanskrit -chyati. The semantic progression producing a verb meaning \"know\" is in any case questionable, if, as the Indo-Iranian and Greek evidence suggests, the base *skeh 2 -, *skh 2 - means primarily \"cut open, flay\" (rather than \"split, separate\"). Ernout and Meillet ( Dictionnaire étymologique de la langue latine ) note that while this is the only plausible comparison for sciō, it is not at all certain (\"Le rapprochement avec le groupe de 'couper' est en l'air, tout en étant, semble-t-il, le seul possible.\")"
  }, 
  {
    "definition": "to place or leave in isolation or without hope of ready escape", 
    "word": "marooned", 
    "diacritic": "mə-ˈründ", 
    "part_of_speech": "verb", 
    "example_sentence": "The artist chose a rich _____ to give the painting a warm, inviting feel.", 
    "etymology": "Noun (1) French marron Spanish chestnut Noun (2) probably from French maron, marron feral, fugitive, modification of American Spanish cimarrón wild, savage"
  }, 
  {
    "definition": "pertaining to films or the process of making films; evocative of cinema.", 
    "word": "cinematic", 
    "diacritic": "ˌsi-nə-ˈma-tik", 
    "part_of_speech": "adjective", 
    "example_sentence": "The director used _____ techniques to create a more immersive experience for the audience.", 
    "etymology": "Word History Etymology see cinema First Known Use 1912, in the meaning defined at sense 1 Time Traveler The first known use of cinematic was in 1912 See more words from the same year"
  }, 
  {
    "definition": "To add new members in order to strengthen a group or organization.", 
    "word": "recruit", 
    "diacritic": "ri-ˈkrüt", 
    "part_of_speech": "verb", 
    "example_sentence": "The team decided to hold a special event to attract potential _____ for the upcoming season.", 
    "etymology": "Noun French recrute, recrue fresh growth, new levy of soldiers, from Middle French, from recroistre to grow up again, from Latin recrescere , from re- + crescere to grow — more at crescent"
  }, 
  {
    "definition": "A formal request to attend, typically in a legal setting such as a court.", 
    "word": "citation", 
    "diacritic": "sī-ˈtā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The lawyer presented a _____ to the witness, asking them to appear in court next week.", 
    "etymology": "Word History Etymology see cite First Known Use 14th century, in the meaning defined at sense 1 Time Traveler The first known use of citation was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A woman who inherits substantial wealth or property.", 
    "word": "heiress", 
    "diacritic": "ˈer-əs", 
    "part_of_speech": "noun", 
    "example_sentence": "After her father's passing, she became the _____ to a vast fortune and an impressive estate.", 
    "etymology": "heir entry 1 + -ess"
  }, 
  {
    "definition": "being completely engaged or fascinated by something or someone appealing, attractive, or enjoyable.", 
    "word": "captivated", 
    "diacritic": "ˈkap-tə-ˌvā-təd", 
    "part_of_speech": "adjective", 
    "example_sentence": "She was _____ by the magician's incredible performance, unable to look away from the stage.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined above Time Traveler The first known use of captivated was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A genuine feeling or expression of care for someone going through a tough or painful situation.", 
    "word": "sympathy", 
    "diacritic": "ˈsim-pə-thē", 
    "part_of_speech": "noun", 
    "example_sentence": "She felt a deep sense of _____ for her friend after hearing about his loss.", 
    "etymology": "Latin sympathia , from Greek sympatheia , from sympathēs having common feelings, sympathetic, from syn- + pathos feelings, emotion, experience — more at pathos"
  }, 
  {
    "definition": "The fourth character in the Greek alphabet; refer to the Alphabet Table for more details.", 
    "word": "delta", 
    "diacritic": "ˈdel-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "The scientist labeled the variables in his equation with the _____ symbol to indicate change.", 
    "etymology": "Noun and Adjective (1) Middle English deltha , from Greek delta , of Semitic origin; akin to Hebrew dāleth daleth"
  }, 
  {
    "definition": "A place or venue designed for entertainment and recreational activities.", 
    "word": "casino", 
    "diacritic": "kə-ˈsē-(ˌ)nō", 
    "part_of_speech": "noun", 
    "example_sentence": "We decided to spend the evening at the _____, enjoying the games and live entertainment.", 
    "etymology": "Italian, from casa house, from Latin, cottage"
  }, 
  {
    "definition": "A fabric, usually soft and made of wool, featuring vibrant, curved abstract designs that are either woven or printed on it.", 
    "word": "paisley", 
    "diacritic": "ˈpāz-lē", 
    "part_of_speech": "noun", 
    "example_sentence": "She wore a beautiful scarf with a colorful _____ pattern that caught everyone's attention.", 
    "etymology": "Paisley , Scotland"
  }, 
  {
    "definition": "an area where grapevines are cultivated", 
    "word": "vineyard", 
    "diacritic": "ˈvin-yərd", 
    "part_of_speech": "noun", 
    "example_sentence": "The picturesque landscape was dotted with rows of grapevines in the _____, ready for harvest.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1 Time Traveler The first known use of vineyard was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A lively dance style derived from jazz that involves couples swinging, balancing, and spinning in set patterns, often incorporating energetic acrobatic moves.", 
    "word": "jitterbug", 
    "diacritic": "ˈji-tər-ˌbəg", 
    "part_of_speech": "noun", 
    "example_sentence": "The couple took to the floor and began to _____, twirling and lifting each other with infectious energy.", 
    "etymology": "Word History First Known Use Noun 1938, in the meaning defined at sense 1 Verb 1939, in the meaning defined at sense 1 Time Traveler The first known use of jitterbug was in 1938 See more words from the same year"
  }, 
  {
    "definition": "a collection of valuable or interesting items that has been found or uncovered", 
    "word": "trove", 
    "diacritic": "ˈtrōv", 
    "part_of_speech": "noun", 
    "example_sentence": "The archaeologists discovered a _____ of ancient artifacts hidden in the cave.", 
    "etymology": "short for treasure trove"
  }, 
  {
    "definition": "A kitchen tool shaped like a hollow cone with a tube at the narrow end, used to catch and guide liquids or substances downward.", 
    "word": "funnel", 
    "diacritic": "ˈfə-nᵊl", 
    "part_of_speech": "noun", 
    "example_sentence": "She used a _____ to pour the sauce into the bottle without spilling.", 
    "etymology": "Noun Middle English funell, fonel, borrowed from Anglo-French fonyle, borrowed from Old Occitan (Gascony, Périgord) fonilh, going back to early Medieval Latin fundibulum , shortened from Latin infundibulum, from infundere \"to pour in, fill (with something poured in)\" + -i- -i- + -bulum, instrumental suffix (going back to Indo-European *-d h lom ) — more at infuse Note: As noted by Französisches etymologisches Wörterbuch, the incidence of this Occitan word in English (and Anglo-French) is most likely due to commercial contacts between England and the wine merchants of the Bordeaux region. Verb verbal derivative of funnel entry 1"
  }, 
  {
    "definition": "An event or occurrence where two or more things strike each other; a clash.", 
    "word": "collision", 
    "diacritic": "kə-ˈli-zhən", 
    "part_of_speech": "noun", 
    "example_sentence": "The sudden _____ between the two cars caused a significant traffic jam on the highway.", 
    "etymology": "Middle English, from Latin collision-, collisio , from collidere"
  }, 
  {
    "definition": "A light, quick laugh that occurs in short bursts.", 
    "word": "giggle", 
    "diacritic": "ˈgi-gəl", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ was contagious, making everyone around her start laughing as well.", 
    "etymology": "Verb imitative"
  }, 
  {
    "definition": "A square cloth or blanket typically worn as a cloak or shawl in the southwestern United States and Latin America.", 
    "word": "manta", 
    "diacritic": "ˈman-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "She wrapped herself in a colorful _____ to keep warm during the cool evening breeze.", 
    "etymology": "Spanish, alteration of manto cloak, from Late Latin mantus , probably back-formation from Latin mantellum mantle"
  }, 
  {
    "definition": "The examination of human communication, focusing on the elements, characteristics, organization, and changes of language.", 
    "word": "linguistics", 
    "diacritic": "liŋ-ˈgwi-stiks", 
    "part_of_speech": "noun", 
    "example_sentence": "She decided to study _____ to better understand how languages evolve and influence each other.", 
    "etymology": "linguist(ic) + -ics , probably after German Linguistik or French linguistique (itself probably after the German word) Note: The word linguistic in the sense \"linguistics\" is attested slightly earlier (1825). German Linguistik in the approximate sense \"knowledge of languages\" is attested as early as 1778, in Einleitung in die Bücherkunde, 2. Theil, Literargeschicht (Vienna, 1778) by the Austrian priest and writer Michael Denis (1729-1800). The usual equivalent of linguistics in nineteenth- and twentieth-century German is Sprachwissenschaft."
  }, 
  {
    "definition": "a person who provides items for purchase", 
    "word": "seller", 
    "diacritic": "ˈse-lər", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ at the local market had fresh produce and homemade goods for sale.", 
    "etymology": "Word History First Known Use 13th century, in the meaning defined at sense 1 Time Traveler The first known use of seller was in the 13th century See more words from the same century"
  }, 
  {
    "definition": "A soft pillow or pad typically used for sitting, resting, or kneeling.", 
    "word": "cushion", 
    "diacritic": "ˈku̇-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "She placed a _____ on the chair to make it more comfortable for sitting.", 
    "etymology": "Noun Middle English cusshin , from Anglo-French cussin, quissin , from Vulgar Latin *coxinus , from Latin coxa hip — more at coxa"
  }, 
  {
    "definition": "To astonish someone to the point of speechlessness; to leave them utterly amazed.", 
    "word": "flabbergast", 
    "diacritic": "ˈfla-bər-ˌgast", 
    "part_of_speech": "verb", 
    "example_sentence": "The magician's final trick was so incredible that it left the audience _____, unable to find words to express their disbelief.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "A short written overview of a document; a summary or abstract.", 
    "word": "docket", 
    "diacritic": "ˈdä-kət", 
    "part_of_speech": "noun", 
    "example_sentence": "The lawyer reviewed the _____ to ensure all key points were highlighted before the court hearing.", 
    "etymology": "Noun Middle English doggette"
  }, 
  {
    "definition": "To twist or squeeze something tightly to remove moisture or liquid.", 
    "word": "wring", 
    "diacritic": "ˈriŋ", 
    "part_of_speech": "verb", 
    "example_sentence": "She decided to _____ the wet cloth before hanging it up to dry.", 
    "etymology": "Middle English, from Old English wringan ; akin to Old High German ringan to struggle, Lithuanian rengtis to bend down, Old English wyrgan to strangle — more at worry"
  }, 
  {
    "definition": "the land that lies next to a typically large area of water", 
    "word": "shore", 
    "diacritic": "ˈshȯr", 
    "part_of_speech": "noun", 
    "example_sentence": "We walked along the _____, collecting seashells and enjoying the sound of the waves.", 
    "etymology": "Noun (1) Middle English, from Old English *scor ; akin to Middle Low German schōr foreland and perhaps to Old English scieran to cut — more at shear Noun (2) Middle English; akin to Middle Dutch scōre prop, Middle Low German schōre"
  }, 
  {
    "definition": "The measure of electrical power indicated in watts.", 
    "word": "wattage", 
    "diacritic": "ˈwä-tij", 
    "part_of_speech": "noun", 
    "example_sentence": "The light bulb's _____ determines how bright it will shine and how much energy it will consume.", 
    "etymology": "Word History First Known Use 1903, in the meaning defined at sense 1 Time Traveler The first known use of wattage was in 1903 See more words from the same year"
  }, 
  {
    "definition": "A stretchy cord commonly used for securing items or absorbing shocks.", 
    "word": "bungee", 
    "diacritic": "ˈbən-jē", 
    "part_of_speech": "noun", 
    "example_sentence": "She secured the ladder to the roof with a _____ to prevent it from falling over.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "a mutual understanding or formal arrangement between parties", 
    "word": "convention", 
    "diacritic": "kən-ˈven(t)-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The two countries reached a _____ to limit their nuclear weapons and promote peace in the region.", 
    "etymology": "Middle English, from Middle French or Latin; Middle French, from Latin convention-, conventio , from convenire — see convenient"
  }, 
  {
    "definition": "found throughout or affecting all areas of something.", 
    "word": "pervasive", 
    "diacritic": "pər-ˈvā-siv, -ziv", 
    "part_of_speech": "adjective", 
    "example_sentence": "The smell of fresh bread was _____ in the bakery, making it impossible to resist buying a loaf.", 
    "etymology": "see pervade"
  }, 
  {
    "definition": "with complete honesty; genuinely", 
    "word": "truly", 
    "diacritic": "ˈtrü-lē", 
    "part_of_speech": "adverb", 
    "example_sentence": "She was _____ happy to see her old friend after so many years.", 
    "etymology": "Word History First Known Use 13th century, in the meaning defined at sense 3b Time Traveler The first known use of truly was in the 13th century See more words from the same century"
  }, 
  {
    "definition": "A festive period or celebration filled with fun and festivities that occurs before Lent.", 
    "word": "carnival", 
    "diacritic": "ˈkär-nə-vəl", 
    "part_of_speech": "noun", 
    "example_sentence": "Every year, the town hosts a lively _____ filled with parades, music, and delicious food before Lent begins.", 
    "etymology": "Noun Italian carnevale , alteration of earlier carnelevare , literally, removal of meat, from carne flesh (from Latin carn-, caro ) + levare to remove, from Latin, to raise"
  }, 
  {
    "definition": "a natural inclination towards a specific type of thinking or behavior", 
    "word": "tendency", 
    "diacritic": "ˈten-dən(t)-sē", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ to procrastinate often leads to last-minute stress before deadlines.", 
    "etymology": "borrowed from Medieval Latin tendentia, noun derivative of Latin tendent-, tendens, present participle of tendere \"to extend outward, stretch, spread out, direct (one's course), aim (at a purpose)\" (Medieval Latin, \"to lead toward, move in a particular direction\") — more at tender entry 3"
  }, 
  {
    "definition": "a compact chunk or piece", 
    "word": "nuggets", 
    "diacritic": "ˈnə-gəts", 
    "part_of_speech": "noun", 
    "example_sentence": "The chef prepared delicious chicken _____ that were crispy on the outside and tender on the inside.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "Connected to or characteristic of the genre that explores imaginative concepts based on science and technology.", 
    "word": "sci-fi", 
    "diacritic": "ˈsī-ˈfī", 
    "part_of_speech": "adjective", 
    "example_sentence": "She loves reading _____ novels because they take her on adventures through futuristic worlds and advanced technologies.", 
    "etymology": "shortened from science fiction"
  }, 
  {
    "definition": "the quantity that is left over after meeting needs or requirements", 
    "word": "surplus", 
    "diacritic": "ˈsər-(ˌ)pləs", 
    "part_of_speech": "noun", 
    "example_sentence": "After the harvest, the farmer had a _____ of vegetables that he sold at the market.", 
    "etymology": "Noun Middle English, from Anglo-French, from Medieval Latin superplus , from Latin super- + plus more — more at plus"
  }, 
  {
    "definition": "A tangy liquid created through the fermentation of weak alcoholic beverages, commonly used to enhance flavor or preserve food.", 
    "word": "vinegar", 
    "diacritic": "ˈvi-ni-gər", 
    "part_of_speech": "noun", 
    "example_sentence": "She added a splash of _____ to the salad dressing for a bright, zesty flavor.", 
    "etymology": "Middle English vinegre , from Anglo-French vin egre , from vin wine (from Latin vinum ) + egre keen, sour — more at eager"
  }, 
  {
    "definition": "toward or at the back of a ship; behind", 
    "word": "abaft", 
    "diacritic": "ə-ˈbaft", 
    "part_of_speech": "adverb", 
    "example_sentence": "The captain ordered the crew to secure the cargo _____ the main mast.", 
    "etymology": "Adverb Middle English, from a- + baft in the rear, from Old English bæftan , from be- + æftan behind — more at aft"
  }, 
  {
    "definition": "The exercise of royal power; the state of having control or authority.", 
    "word": "reign", 
    "diacritic": "ˈrān", 
    "part_of_speech": "noun", 
    "example_sentence": "The queen's _____ was marked by a time of great prosperity and peace in the kingdom.", 
    "etymology": "Noun Middle English regne , from Anglo-French, from Latin regnum , from reg-, rex king — more at royal"
  }, 
  {
    "definition": "Lacking brightness or clarity, often due to tiredness or lack of sleep.", 
    "word": "bleary", 
    "diacritic": "ˈblir-ē", 
    "part_of_speech": "adjective", 
    "example_sentence": "She woke up with _____ eyes, struggling to focus on the bright morning light.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1 Time Traveler The first known use of bleary was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "The process or occurrence of making something clean or free from impurities.", 
    "word": "purification", 
    "diacritic": "ˌpyu̇r-ə-fə-ˈkā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ of the water was essential to ensure it was safe for drinking.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined above Time Traveler The first known use of purification was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A type of elongated, flat-bodied arthropod belonging to the class Chilopoda, characterized by numerous segments, each having one pair of legs, with the front pair adapted into venomous fangs.", 
    "word": "centipede", 
    "diacritic": "ˈsen-tə-ˌpēd", 
    "part_of_speech": "noun", 
    "example_sentence": "While hiking in the forest, she was startled to see a _____ scurrying across the path, its many legs moving rapidly.", 
    "etymology": "Latin centipeda , from centi- + ped-, pes foot — more at foot"
  }, 
  {
    "definition": "A person who rents a room and shares meals with others.", 
    "word": "boarders", 
    "diacritic": "ˈbȯr-dərz", 
    "part_of_speech": "noun", 
    "example_sentence": "The house was filled with _____ who enjoyed sharing stories over dinner each night.", 
    "etymology": "Word History First Known Use 1530, in the meaning defined at sense 1 Time Traveler The first known use of boarder was in 1530 See more words from the same year"
  }, 
  {
    "definition": "extremely unpleasant and alarming to experience; deeply frightening", 
    "word": "ghastly", 
    "diacritic": "ˈgast-lē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The haunted house was filled with _____ sights that made even the bravest visitors scream in terror.", 
    "etymology": "Middle English gastly , from gasten to terrify — more at gast"
  }, 
  {
    "definition": "a mistake or blunder made while trying to do something.", 
    "word": "foozle", 
    "diacritic": "ˈfü-zəl", 
    "part_of_speech": "noun", 
    "example_sentence": "His attempt to fix the leaky faucet ended in a _____ when he accidentally turned off the wrong valve.", 
    "etymology": "Verb perhaps from German dialect fuseln to work carelessly"
  }, 
  {
    "definition": "a lavish display or spending spree that is meant to attract attention", 
    "word": "splurge", 
    "diacritic": "ˈsplərj", 
    "part_of_speech": "noun", 
    "example_sentence": "After months of saving, she finally decided to treat herself to a _____ at the luxury boutique.", 
    "etymology": "Noun perhaps blend of splash and surge"
  }, 
  {
    "definition": "A group of various plants belonging to the mustard family.", 
    "word": "rocket", 
    "diacritic": "ˈrä-kət", 
    "part_of_speech": "noun", 
    "example_sentence": "In the garden, we planted a bed of _____ to add a peppery flavor to our salads.", 
    "etymology": "Noun (1) borrowed from Middle French roquete, borrowed from Italian (15th-century) ruchetta, rochetta, from ruca \"arugula\" (going back to Latin ērūca \"arugula, caterpillar,\" of uncertain origin) + -etta, diminutive suffix, going back to Latin -itta Note: The sense \"caterpillar\" of Latin ērūca has been taken as the original one, with the plant so called from the resemblance of its hairy stems to a caterpillar. If this is the case, ērūca could be a derivative of *ēr \"hedgehog\" (see urchin ); the suffix may be the same as in festūca \"stalk, straw,\" lactūca \"lettuce,\" and verrūca \"wart.\" Noun (2) Italian rocchetta , literally, small distaff, from diminutive of rocca distaff, of Germanic origin; akin to Old High German rocko distaff"
  }, 
  {
    "definition": "To excessively profit, particularly by selling necessary items at inflated prices during emergencies.", 
    "word": "profiteer", 
    "diacritic": "ˌprä-fə-ˈtir", 
    "part_of_speech": "verb", 
    "example_sentence": "During the crisis, some individuals chose to _____ by raising the prices of essential goods like water and medicine.", 
    "etymology": "Word History First Known Use 1912, in the meaning defined above Time Traveler The first known use of profiteer was in 1912 See more words from the same year"
  }, 
  {
    "definition": "In a serious and sincere way; not done casually or with a lack of importance.", 
    "word": "earnestly", 
    "diacritic": "ˈər-nəst-lē", 
    "part_of_speech": "adverb", 
    "example_sentence": "She spoke _____ about the need for community support during the crisis.", 
    "etymology": "Word History First Known Use before the 12th century, in the meaning defined above Time Traveler The first known use of earnestly was before the 12th century See more words from the same century"
  }, 
  {
    "definition": "A raised platform or tall desk used for delivering sermons or leading a religious service.", 
    "word": "pulpit", 
    "diacritic": "ˈpu̇l-ˌpit, ˈpəl-, -pət", 
    "part_of_speech": "noun", 
    "example_sentence": "The pastor stood at the _____, passionately delivering his sermon to the congregation.", 
    "etymology": "Middle English, from Anglo-French, from Late Latin pulpitum , from Latin, staging, platform"
  }, 
  {
    "definition": "A typically fruity frozen dessert that is enjoyed on its own or used to cleanse the palate between meals.", 
    "word": "sorbet", 
    "diacritic": "sȯr-ˈbā also ˈsȯr-bət", 
    "part_of_speech": "noun", 
    "example_sentence": "After the main course, we were served a refreshing _____ to cleanse our palates before dessert.", 
    "etymology": "French, from Middle French, sweetened fruit juice, from Old Italian sorbetto , from Turkish şerbet — more at sherbet"
  }, 
  {
    "definition": "the act of putting into effect or utilizing in practice: application", 
    "word": "exercise", 
    "diacritic": "ˈek-sər-ˌsīz", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ of patience during the difficult situation impressed everyone around her.", 
    "etymology": "Noun Middle English, from Anglo-French exercice , from Latin exercitium , from exercitare to train, exercise, frequentative of exercēre to train, occupy, from ex- + arcēre to enclose, hold off — more at ark"
  }, 
  {
    "definition": "The process of adding marks to writing to clarify meaning; the condition of being marked in this way.", 
    "word": "punctuation", 
    "diacritic": "ˌpəŋk-chə-ˈwā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "Proper _____ in writing can greatly enhance the clarity of the message being conveyed.", 
    "etymology": "Word History First Known Use 1593, in the meaning defined at sense 1 Time Traveler The first known use of punctuation was in 1593 See more words from the same year"
  }, 
  {
    "definition": "to take or borrow something without permission or to take something in a sneaky way.", 
    "word": "scrounge", 
    "diacritic": "ˈskrau̇nj", 
    "part_of_speech": "verb", 
    "example_sentence": "He always tries to _____ food from his friends instead of buying his own.", 
    "etymology": "alteration of English dialect scrunge to wander about idly"
  }, 
  {
    "definition": "A piece of land that is completely surrounded by water and is smaller than a continent.", 
    "word": "island", 
    "diacritic": "ˈī-lənd", 
    "part_of_speech": "noun", 
    "example_sentence": "The family spent their vacation on a beautiful _____ in the middle of the ocean.", 
    "etymology": "Noun alteration (influenced by Anglo-French isle ) of earlier iland , from Middle English, from Old English īgland (akin to Old Norse eyland ), from īg island (akin to Old English ēa river, Latin aqua water) + land land"
  }, 
  {
    "definition": "A spiced blend of ground meat, typically pork, and cornmeal that is formed in a mold, sliced, and then fried.", 
    "word": "scrapple", 
    "diacritic": "ˈskra-pəl", 
    "part_of_speech": "noun", 
    "example_sentence": "For breakfast, I decided to try a traditional dish of _____ served with eggs and toast.", 
    "etymology": "diminutive of scrap entry 1"
  }, 
  {
    "definition": "a brief and light sleep", 
    "word": "catnap", 
    "diacritic": "ˈkat-ˌnap", 
    "part_of_speech": "noun", 
    "example_sentence": "After a long morning of meetings, she decided to take a quick _____ on the couch to recharge.", 
    "etymology": "Word History First Known Use 1801, in the meaning defined above Time Traveler The first known use of catnap was in 1801 See more words from the same year"
  }, 
  {
    "definition": "A pipe equipped with a valve and nozzle that allows access to water from a main supply, typically used for firefighting.", 
    "word": "hydrant", 
    "diacritic": "ˈhī-drənt", 
    "part_of_speech": "noun", 
    "example_sentence": "The firefighters quickly connected their hoses to the nearest _____ to put out the blazing fire.", 
    "etymology": "Greek hydr-, form in derivatives and compounds of hýdōr \"water\" + -ant entry 1 — more at hydro- Note: Though the above is the only likely etymology, the formation is peculiar, as the suffix -ant is normally associated with verbs of French and/or Latin origin. This peculiarity suggests a deliberate coinage, but its source is apparently unknown. The word is attested earliest in Philadelphia city ordinances from the first decade of the nineteenth century."
  }, 
  {
    "definition": "Pertaining to or marked by a sense of joy and festivity associated with a celebration.", 
    "word": "celebratory", 
    "diacritic": "ˈse-lə-brə-ˌtȯr-ē, ˌse-lə-ˈbrā-tə-rē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The atmosphere at the party was _____, with laughter, music, and decorations everywhere.", 
    "etymology": "Word History First Known Use 1809, in the meaning defined above Time Traveler The first known use of celebratory was in 1809 See more words from the same year"
  }, 
  {
    "definition": "A tall yearly grass (Zea mays) first cultivated in Mexico, commonly grown for its long, starchy seed pods, known as corn.", 
    "word": "maize", 
    "diacritic": "ˈmāz", 
    "part_of_speech": "noun", 
    "example_sentence": "Farmers in the Midwest often grow _____ to produce a variety of food products and animal feed.", 
    "etymology": "Spanish maíz , from Taino mahiz"
  }, 
  {
    "definition": "to relinquish control or influence to someone else.", 
    "word": "abandon", 
    "diacritic": "ə-ˈban-dən", 
    "part_of_speech": "verb", 
    "example_sentence": "After years of hard work, she decided to give her company an _____ by allowing her partner to take over management.", 
    "etymology": "Verb Middle English abandounen , borrowed from Anglo-French abanduner , derivative of abandun \"surrender, abandonment,\" from the phrase a bandun \"in one's power, at one's disposal,\" from a \"at, to\" (going back to Latin ad \"to\") + bandun \"jurisdiction,\" going back to a Gallo-Romance derivative of Old Low Franconian *bann- \"summons, command\" (with -d- probably from outcomes of Germanic *bandwō \"sign\") — more at at entry 1 , ban entry 1 , banner entry 1 Noun borrowed from French, in part derivative of abandonner \"to abandon,\" in part going back to Old French abandon, abandun \"surrender\" — more at abandon entry 1"
  }, 
  {
    "definition": "to directly disrespect or offend someone through actions or words", 
    "word": "affront", 
    "diacritic": "ə-ˈfrənt", 
    "part_of_speech": "verb", 
    "example_sentence": "His rude comments during the meeting were meant to _____ her in front of everyone.", 
    "etymology": "Verb Middle English afronten, afrounten, borrowed from Anglo-French afrunter \"to strike the front of, shame,\" derivative from the phrase a frunt \"facing, openly, blatantly,\" from a \"to, at\" (going back to Latin ad ) + frunt \" front entry 1 , forehead\" — more at at entry 1 Noun borrowed from Middle French, noun derivative of affronter \"to affront entry 1 \""
  }, 
  {
    "definition": "a young creature that has flippers, like a baby seal.", 
    "word": "flipperling", 
    "diacritic": "ˈfli-pər-liŋ", 
    "part_of_speech": "noun", 
    "example_sentence": "The cute _____ played joyfully in the shallow water, basking in the sun alongside its mother.", 
    "etymology": "flipper entry 1 + -ling"
  }, 
  {
    "definition": "Produced by or marked by sudden changes in mood or ideas.", 
    "word": "whimsical", 
    "diacritic": "ˈ(h)wim-zi-kəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "Her _____ nature made every conversation feel like a delightful surprise.", 
    "etymology": "Word History Etymology whimsy First Known Use 1653, in the meaning defined at sense 2 Time Traveler The first known use of whimsical was in 1653 See more words from the same year"
  }, 
  {
    "definition": "the process of successfully reaching a goal or completing a task", 
    "word": "achievement", 
    "diacritic": "ə-ˈchēv-mənt", 
    "part_of_speech": "noun", 
    "example_sentence": "Winning the championship was a great _____ for the team after years of hard work and dedication.", 
    "etymology": "borrowed from Anglo-French achevement, from achever \"to achieve \" + -ment -ment"
  }, 
  {
    "definition": "Marked by a dark discoloration from bruises; showing a black-and-blue appearance.", 
    "word": "livid", 
    "diacritic": "ˈli-vəd", 
    "part_of_speech": "adjective", 
    "example_sentence": "After falling off his bike, his arm was covered in _____ bruises.", 
    "etymology": "French livide , from Latin lividus , from livēre to be blue; akin to Welsh lliw color and probably to Russian sliva plum"
  }, 
  {
    "definition": "A dry, tough biscuit or cracker that is made without salt.", 
    "word": "hardtack", 
    "diacritic": "ˈhärd-ˌtak", 
    "part_of_speech": "noun", 
    "example_sentence": "The sailors survived on _____ for weeks during their long voyage at sea.", 
    "etymology": "Word History First Known Use 1830, in the meaning defined at sense 1 Time Traveler The first known use of hardtack was in 1830 See more words from the same year"
  }, 
  {
    "definition": "a unique belief system, movement, or concept", 
    "word": "isms", 
    "diacritic": "ˈi-zəm", 
    "part_of_speech": "noun", 
    "example_sentence": "Many political debates are influenced by various _____ that shape people's perspectives and actions.", 
    "etymology": "Noun -ism Noun suffix Middle English -isme , from Middle French & Latin; Middle French, partly from Latin -isma (from Greek) & partly from Latin -ismus , from Greek -ismos ; Greek -isma & -ismos , from verbs in -izein -ize"
  }, 
  {
    "definition": "A two-year plant (Daucus carota, belonging to the Apiaceae family, also known as the carrot family) that has a typically orange, tapering root that is edible.", 
    "word": "carrot", 
    "diacritic": "ˈker-ət, ˈka-rət", 
    "part_of_speech": "noun", 
    "example_sentence": "She added sliced _____ to the salad for a crunchy texture and a pop of color.", 
    "etymology": "Middle French carotte , from Late Latin carota , from Greek karōton"
  }, 
  {
    "definition": "A term used to get someone's attention or to call out to people.", 
    "word": "yoo-hoo", 
    "diacritic": "ˈyü-(ˌ)hü", 
    "part_of_speech": "interjection", 
    "example_sentence": "She waved her hand in the air and called out, '_____, over here!", 
    "etymology": "probably alteration of yo-ho , interjection used to attract attention — more at yahoo"
  }, 
  {
    "definition": "A viscous syrup ranging from dark to light brown, obtained during the production of sugar from raw sugarcane or sugar beets.", 
    "word": "molasses", 
    "diacritic": "mə-ˈla-səz", 
    "part_of_speech": "noun", 
    "example_sentence": "The recipe called for a generous amount of _____ to add sweetness and richness to the cookies.", 
    "etymology": "modification of Portuguese melaço , from Late Latin mellaceum grape juice, from Latin mell-, mel honey — more at mellifluous"
  }, 
  {
    "definition": "A type of plant from the genus Paeonia, mainly found in Eurasia, known for its large, often double blooms.", 
    "word": "peony", 
    "diacritic": "ˈpē-ə-nē", 
    "part_of_speech": "noun", 
    "example_sentence": "In her garden, the vibrant _____ added a burst of color with its lush, fragrant flowers.", 
    "etymology": "Middle English piony , from Anglo-French peonie, pioiné , from Latin paeonia , from Greek paiōnia , from Paiōn Paeon, physician of the gods"
  }, 
  {
    "definition": "A diet grounded in Chinese cosmological concepts of yin and yang, primarily focusing on whole grains and cereals, along with beans and vegetables, which in its earlier, stricter variations has been associated with nutritional shortcomings.", 
    "word": "macrobiotics", 
    "diacritic": "ˌma-krō-bī-ˈä-tiks, -bē-", 
    "part_of_speech": "noun", 
    "example_sentence": "She decided to adopt a _____ lifestyle to improve her health and well-being.", 
    "etymology": "borrowed from French macrobiotique, probably adapted from German Macrobiotic, noun (defined by its coiner as \"the art of prolonging life\"), from Greek makrobiótēs \"longevity, long life\" (from makróbios \"long-lived\" —from makrós \"long\" + -o- -o- + -bios \"having life [of the kind specified]\"— + -tēs, abstract noun suffix) + German -ic -ic entry 2 — more at macro- , amphibious Note: French macrobiotique was used by the Japanese author George Ohsawa (Nyoichi Sakurazawa, 1893-1966) in La Philosophie de la Médecine d'Extrême-Orient (1956) and later works that popularized macrobiotic diet practices. He most likely adapted the word from German Macrobiotic (in later spelling Makrobiotik ), apparently originated by the German physician Christoph Wilhelm Hufeland (1762-1836) in Die Kunst das menschliche Leben zu verlängern (Jena, 1797). Hufeland defined Macrobiotic in the preface (p. vi) as \"the art of prolonging life\" (\"die Kunst das Leben zu verlängern\"), and in later editions used Makrobiotik as the title of the book, with the original title as subtitle."
  }, 
  {
    "definition": "The region or territory ruled by a prince, along with the power and position associated with that role.", 
    "word": "principality", 
    "diacritic": "ˌprin(t)-sə-ˈpa-lə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "The small _____ was known for its beautiful landscapes and rich cultural heritage, drawing visitors from all over the world.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1a Time Traveler The first known use of principality was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "not in the right direction; out of order or not as planned", 
    "word": "awry", 
    "diacritic": "ə-ˈrī", 
    "part_of_speech": "adverb or adjective", 
    "example_sentence": "When the project's budget went over, everything seemed to go _____ from there.", 
    "etymology": "see wry entry 1"
  }, 
  {
    "definition": "A brief lyrical poem from the medieval period that follows a specific poetic structure.", 
    "word": "madrigal", 
    "diacritic": "ˈma-dri-gəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The composer was inspired by the beauty of the nature around him and wrote a lovely _____ that captured the essence of spring.", 
    "etymology": "Italian madrigale , probably from Medieval Latin matricale , from neuter of *matricalis simple, from Late Latin, of the womb, from Latin matric-, matrix womb, from mater mother"
  }, 
  {
    "definition": "The craftsmanship performed by a joiner.", 
    "word": "joinery", 
    "diacritic": "ˈjȯi-nə-rē, ˈjȯin-rē", 
    "part_of_speech": "noun", 
    "example_sentence": "The intricate designs in the staircase were a testament to the skillful _____ of the carpenter.", 
    "etymology": "Word History First Known Use 1678, in the meaning defined at sense 2 Time Traveler The first known use of joinery was in 1678 See more words from the same year"
  }, 
  {
    "definition": "a disclosure or announcement of sacred truth", 
    "word": "revelation", 
    "diacritic": "ˌre-və-ˈlā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The ancient text contained a profound _____ that changed the community's understanding of their beliefs.", 
    "etymology": "Middle English revelacioun , from Anglo-French, from Late Latin revelation-, revelatio , from Latin revelare to reveal"
  }, 
  {
    "definition": "The process or art of shaping materials, such as stone or metal, through techniques like carving, molding, or welding to create artistic pieces.", 
    "word": "sculpture", 
    "diacritic": "ˈskəlp-chər", 
    "part_of_speech": "noun", 
    "example_sentence": "The museum featured a stunning _____ made entirely of recycled metal, showcasing the artist's incredible talent and creativity.", 
    "etymology": "Noun Middle English, from Latin sculptura , from sculptus , past participle of sculpere to carve, alteration of scalpere to scratch, carve"
  }, 
  {
    "definition": "a casual note or written message", 
    "word": "memorandum", 
    "diacritic": "ˌme-mə-ˈran-dəm", 
    "part_of_speech": "noun", 
    "example_sentence": "She left a _____ on my desk to remind me about the meeting tomorrow.", 
    "etymology": "Middle English, to be remembered, from Latin, neuter of memorandus , gerundive of memorare"
  }, 
  {
    "definition": "To throw back or respond to something with a reply.", 
    "word": "retorts", 
    "diacritic": "ri-ˈtȯrts", 
    "part_of_speech": "verb", 
    "example_sentence": "When he made a sarcastic comment, she quickly _____ with a witty comeback.", 
    "etymology": "Verb (1) Latin retortus , past participle of retorquēre , literally, to twist back, hurl back, from re- + torquēre to twist — more at torture entry 1 Noun (2) Middle French retorte , from Medieval Latin retorta , from Latin, feminine of retortus ; from its shape"
  }, 
  {
    "definition": "to flow out in small amounts and at irregular intervals", 
    "word": "dribbles", 
    "diacritic": "ˈdri-bəlz", 
    "part_of_speech": "verb", 
    "example_sentence": "The faucet was old and leaked _____ all over the sink.", 
    "etymology": "Verb frequentative of drib to dribble"
  }, 
  {
    "definition": "to split or distribute among individuals", 
    "word": "divvy", 
    "diacritic": "ˈdi-vē", 
    "part_of_speech": "verb", 
    "example_sentence": "Let's _____ the pizza equally so everyone gets a fair share.", 
    "etymology": "by shortening & alteration from divide"
  }, 
  {
    "definition": "Having qualities or traits typical of a rude or ill-mannered person; uncivilized.", 
    "word": "churlish", 
    "diacritic": "ˈchər-lish", 
    "part_of_speech": "adjective", 
    "example_sentence": "Despite her attempts to be friendly, his responses were often _____, making it difficult for her to engage in conversation.", 
    "etymology": "Middle English cherlyssh \"of churls, rustic, uncouth,\" going back to Old English ceorlisc, cyrlisc, from ceorl \"male person, countryman, member of the lowest class of free men\" + -isc -ish — more at churl"
  }, 
  {
    "definition": "A situation or condition that is difficult or challenging.", 
    "word": "predicament", 
    "diacritic": "pri-ˈdi-kə-mənt", 
    "part_of_speech": "noun", 
    "example_sentence": "After losing his job and facing mounting bills, he found himself in a difficult _____.", 
    "etymology": "Middle English, from Late Latin praedicamentum , from praedicare — see predicate entry 2"
  }, 
  {
    "definition": "A curved construction made of stone or brick that typically serves as a ceiling or roof.", 
    "word": "vault", 
    "diacritic": "ˈvȯlt", 
    "part_of_speech": "noun", 
    "example_sentence": "The ancient cathedral featured a stunning _____ that created a sense of grandeur in the main hall.", 
    "etymology": "Noun (1) Middle English vaute, voute , borrowed from Anglo-French voute, volte , going back to Vulgar Latin *volvita \"turn, arched structure,\" noun derivative from feminine of *volvitus , re-formation of Latin volūtus , past participle of volvere \"to travel (a circular course), bring round, roll\" — more at wallow entry 1 Verb (1) Middle English vowten , borrowed from Anglo-French vouter , verbal derivative of voute vault entry 1 Verb (2) probably borrowed from Middle French vouster \"to turn about (on horseback), wheel, prance,\" going back to Vulgar Latin *volvitāre , frequentative of Latin volvere \"to travel (a circular course), bring round, roll\" — more at wallow entry 1 Noun (2) noun derivative of vault entry 3"
  }, 
  {
    "definition": "A swinging punch aimed upward with a bent arm, commonly used in boxing.", 
    "word": "uppercut", 
    "diacritic": "ˈə-pər-ˌkət", 
    "part_of_speech": "noun", 
    "example_sentence": "He delivered a powerful _____ that caught his opponent off guard, sending him stumbling back.", 
    "etymology": "Word History First Known Use 1842, in the meaning defined above Time Traveler The first known use of uppercut was in 1842 See more words from the same year"
  }, 
  {
    "definition": "The process of handing over a suspected criminal from one authority, like a state, to another that has the legal right to prosecute them, typically based on a treaty or law.", 
    "word": "extradition", 
    "diacritic": "ˌek-strə-ˈdi-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The government is currently negotiating the _____ of the fugitive to ensure he faces justice for his crimes.", 
    "etymology": "French, from ex- + Latin tradition-, traditio act of handing over — more at treason"
  }, 
  {
    "definition": "pertaining to or featuring a cathedra, which is a bishop's chair or throne.", 
    "word": "cathedral", 
    "diacritic": "kə-ˈthē-drəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The grand altar was adorned with _____ decorations that reflected the importance of the bishop's seat.", 
    "etymology": "Word History First Known Use Adjective 13th century, in the meaning defined at sense 1 Noun 1587, in the meaning defined at sense 1 Time Traveler The first known use of cathedral was in the 13th century See more words from the same century"
  }, 
  {
    "definition": "A type of fruit from the Pyrus genus, particularly P. communis, belonging to the rose family. It usually has light green or brown skin, a crunchy, juicy interior, and an elongated shape that widens at the bottom and narrows towards the top.", 
    "word": "pear", 
    "diacritic": "ˈper", 
    "part_of_speech": "noun", 
    "example_sentence": "I enjoyed a refreshing _____ for dessert, savoring its sweet and juicy flavor.", 
    "etymology": "Middle English pere , from Old English peru , from Vulgar Latin *pira , from Latin, plural of pirum"
  }, 
  {
    "definition": "A type of large, strong dog with a short coat, typically in shades of apricot, fawn, or brindle, commonly used for guarding.", 
    "word": "mastiff", 
    "diacritic": "ˈma-stəf", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ lay protectively in front of the house, its imposing size deterring any potential intruders.", 
    "etymology": "Middle English mastif , from Medieval Latin mastivus , from Vulgar Latin *masuetivus , from Latin mansuetus tame — more at mansuetude"
  }, 
  {
    "definition": "Pertaining to tasks associated with servants; humble or unskilled.", 
    "word": "menial", 
    "diacritic": "ˈmē-nē-əl, -nyəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "She took on _____ jobs to support her family while pursuing her education.", 
    "etymology": "Adjective and Noun Middle English meynial , from Anglo-French meignal , from mesnee, mayné household, retinue, from Vulgar Latin *mansionata , from Latin mansion-, mansio dwelling — more at mansion"
  }, 
  {
    "definition": "foolish or meaningless talk or ideas", 
    "word": "drivel", 
    "diacritic": "ˈdri-vəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The meeting was filled with so much _____ that I struggled to stay focused on the important issues.", 
    "etymology": "Verb and Noun Middle English, from Old English dreflian ; perhaps akin to Old Norse draf malt dregs"
  }, 
  {
    "definition": "A disorganized group or collection of individuals.", 
    "word": "gaggle", 
    "diacritic": "ˈga-gəl", 
    "part_of_speech": "noun", 
    "example_sentence": "As we walked through the park, we stumbled upon a noisy _____ of geese waddling toward the pond.", 
    "etymology": "derivative of gaggle \"to cackle,\" going back to Middle English gagelyn , of imitative origin"
  }, 
  {
    "definition": "To change from a solid form to a liquid form, typically due to heat.", 
    "word": "melted", 
    "diacritic": "ˈmeltəd", 
    "part_of_speech": "verb", 
    "example_sentence": "The ice had _____ under the warm sun, creating small puddles on the ground.", 
    "etymology": "Verb Middle English, from Old English meltan ; akin to Old Norse melta to digest, Greek meldein to melt — more at mollify Noun (2) Middle English milte , from Old English; akin to Old High German miltzi spleen"
  }, 
  {
    "definition": "A type of large sea snail with a spiral shell, typically belonging to the genus Strombus.", 
    "word": "conch", 
    "diacritic": "ˈkäŋk, ˈkänch, ˈkȯŋk", 
    "part_of_speech": "noun", 
    "example_sentence": "While walking along the beach, I found a beautiful _____ hidden among the rocks.", 
    "etymology": "Middle English, from Latin concha mussel, mussel shell, from Greek konchē ; akin to Sanskrit śaṅkha conch shell"
  }, 
  {
    "definition": "A four-year period that was used to measure time in ancient Greece, marking the intervals between the Olympic Games.", 
    "word": "olympiad", 
    "diacritic": "ə-ˈlim-pē-ˌad, ō-", 
    "part_of_speech": "noun", 
    "example_sentence": "The ancient Greeks celebrated each _______ with great festivities and athletic competitions.", 
    "etymology": "Middle English Olympias , from Latin Olympiad-, Olympias , from Greek, from Olympia , site of ancient Olympic Games"
  }, 
  {
    "definition": "a particular harm or damage caused by a specific source", 
    "word": "mischief", 
    "diacritic": "ˈmis-chəf, ˈmish-", 
    "part_of_speech": "noun", 
    "example_sentence": "The children were always up to some harmless _____, playing pranks that left everyone laughing.", 
    "etymology": "Middle English meschief , from Anglo-French, misfortune, hardship, from Old French meschever to come out badly, mes- + chief head, end — more at chief"
  }, 
  {
    "definition": "", 
    "word": "Spellebrity", 
    "diacritic": "", 
    "part_of_speech": "", 
    "example_sentence": "", 
    "etymology": ""
  }, 
  {
    "definition": "Behavior that is appropriate or suitable.", 
    "word": "comportment", 
    "diacritic": "kəm-ˈpȯrt-mənt", 
    "part_of_speech": "noun", 
    "example_sentence": "His _____ during the formal event impressed everyone and showed his understanding of proper etiquette.", 
    "etymology": "Verb Middle French comporter to bear, conduct, from Latin comportare to bring together, from com- + portare to carry — more at fare"
  }, 
  {
    "definition": "marked by an unusual, strange, or extraordinary style or method", 
    "word": "bizarro", 
    "diacritic": "bə-ˈzär-ō", 
    "part_of_speech": "adjective", 
    "example_sentence": "The film took a _____ approach to storytelling, combining surreal visuals with unconventional characters that kept the audience guessing.", 
    "etymology": "extension of bizarre entry 1 , probably after Bizarro, grotesque duplicate of Superman in the Superman comic-book series who inhabits a \"bizarro world\""
  }, 
  {
    "definition": "A person who usually follows a vegetarian diet but sometimes eats meat or fish.", 
    "word": "flexitarian", 
    "diacritic": "ˌflek-sə-ˈter-ē-ən", 
    "part_of_speech": "noun", 
    "example_sentence": "As a _____, she enjoys preparing vegetable-based meals but occasionally treats herself to a steak on special occasions.", 
    "etymology": "flexi(ble) + (vege)tarian entry 1"
  }, 
  {
    "definition": "A style of cooking food outdoors over an open flame or hot coals, typically involving grilling.", 
    "word": "barbie", 
    "diacritic": "ˈbär-bē", 
    "part_of_speech": "noun", 
    "example_sentence": "We decided to host a _____ in the backyard this weekend, grilling burgers and vegetables for our friends.", 
    "etymology": "Noun (1) by shortening & alteration"
  }, 
  {
    "definition": "A small boat used on a ship, often referred to as a jolly boat.", 
    "word": "yawl", 
    "diacritic": "ˈyȯl", 
    "part_of_speech": "noun", 
    "example_sentence": "The sailors lowered the _____ into the water to row ashore for supplies.", 
    "etymology": "Low German jolle"
  }, 
  {
    "definition": "A pouch-like part of the digestive system in vertebrates, situated between the esophagus and the duodenum, which usually has a curved shape, a tough muscular wall that moves in a rhythmic manner, and an inner lining made of mucous membrane with gastric glands.", 
    "word": "stomach", 
    "diacritic": "ˈstə-mək, -mik", 
    "part_of_speech": "noun", 
    "example_sentence": "After eating a large meal, she felt a heavy sensation in her _____ as it began to digest the food.", 
    "etymology": "Noun Middle English stomak , from Anglo-French estomac , from Latin stomachus gullet, esophagus, stomach, from Greek stomachos , from stoma mouth; akin to Middle Breton staffn mouth, Avestan staman-"
  }, 
  {
    "definition": "A pleasing series or combination of musical notes.", 
    "word": "melody", 
    "diacritic": "ˈme-lə-dē", 
    "part_of_speech": "noun", 
    "example_sentence": "The song's _____ lingered in my mind long after it ended.", 
    "etymology": "Middle English melodie , from Anglo-French, from Late Latin melodia , from Greek melōidia chanting, music, from melos limb, musical phrase, song (probably akin to Breton mell joint) + aeidein to sing — more at ode"
  }, 
  {
    "definition": "A thin rod used during a formal ceremony or parade.", 
    "word": "wand", 
    "diacritic": "ˈwänd", 
    "part_of_speech": "noun", 
    "example_sentence": "The magician waved his _____ to make the rabbit disappear from the hat.", 
    "etymology": "Middle English, slender stick, from Old Norse vǫndr ; probably akin to Old English windan to wind, twist — more at wind entry 3"
  }, 
  {
    "definition": "a tiny settlement or village", 
    "word": "hamlet", 
    "diacritic": "ˈham-lət", 
    "part_of_speech": "noun", 
    "example_sentence": "Nestled between the mountains, the quaint little _____ was home to just a handful of families.", 
    "etymology": "Noun (1) Middle English, from Anglo-French hamelet , diminutive of ham village, of Germanic origin; akin to Old English hām village, home"
  }, 
  {
    "definition": "Unwilling to be controlled; difficult to manage.", 
    "word": "restive", 
    "diacritic": "ˈre-stiv", 
    "part_of_speech": "adjective", 
    "example_sentence": "The crowd became _____ as they grew impatient waiting for the concert to start.", 
    "etymology": "Middle English restyf , from Anglo-French restif , from rester to stop, resist, remain"
  }, 
  {
    "definition": "a brief pause or break from something stressful or demanding", 
    "word": "respite", 
    "diacritic": "ˈre-spət", 
    "part_of_speech": "noun", 
    "example_sentence": "After weeks of intense studying, she finally took a weekend trip to the mountains for a much-needed _____ from her academic pressures.", 
    "etymology": "Noun, Verb, and Adjective Middle English respit , from Anglo-French, from Medieval Latin respectus , from Latin, act of looking back — more at respect"
  }, 
  {
    "definition": "A short, rigid, and rough hair or thread-like structure.", 
    "word": "bristle", 
    "diacritic": "ˈbri-səl", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ of the brush helped to effectively clean the stubborn dirt from the surface.", 
    "etymology": "Noun Middle English bristil , from brust bristle, from Old English byrst ; akin to Old High German burst bristle, and perhaps to Latin fastigium top Verb verbal derivative of bristle entry 1"
  }, 
  {
    "definition": "A discussion or conversation with someone, typically to negotiate or reach an agreement.", 
    "word": "parley", 
    "diacritic": "ˈpär-lē", 
    "part_of_speech": "noun", 
    "example_sentence": "After hours of disagreement, the two leaders finally agreed to a _____ to discuss the terms of the peace treaty.", 
    "etymology": "Verb derivative of parley entry 2 Noun Middle English parlay \"speech,\" borrowed from Anglo-French parlee, parly \"speech, conversation, debate,\" probably noun derivative from feminine of parlé, past participle of parler \"to speak, talk,\" going back to early Medieval Latin parabolāre, noun derivative of Late Latin parabola \"comparison, allegory, proverb, discourse, speech\" — more at parable"
  }, 
  {
    "definition": "A building material made by mixing sand, gravel, water, and a binding substance, often used for construction.", 
    "word": "cement", 
    "diacritic": "si-ˈment also ˈsē-ment", 
    "part_of_speech": "noun", 
    "example_sentence": "The workers poured _____ into the foundation to ensure it was strong and durable.", 
    "etymology": "Noun Middle English sement , from Anglo-French ciment , from Latin caementum stone chips used in making mortar, from caedere to cut"
  }, 
  {
    "definition": "a tiny or insignificant detail", 
    "word": "minutia", 
    "diacritic": "mə-ˈnü-sh(ē-)ə, mī-, -ˈnyü-", 
    "part_of_speech": "noun", 
    "example_sentence": "He often gets lost in the _____ of the project, overlooking the bigger picture.", 
    "etymology": "Latin minutiae trifles, details, from plural of minutia smallness, from minutus"
  }, 
  {
    "definition": "A person who initiates and manages a business project.", 
    "word": "entrepreneur", 
    "diacritic": "ˌän-trə-p(r)ə-ˈnər, -ˈn(y)u̇r,  ˌäⁿn-", 
    "part_of_speech": "noun", 
    "example_sentence": "After years of planning and hard work, she finally became a successful _____, launching her own tech startup.", 
    "etymology": "French, from Old French, from entreprendre to undertake — more at enterprise"
  }, 
  {
    "definition": "to damage or impair by introducing a defect", 
    "word": "blemish", 
    "diacritic": "ˈble-mish", 
    "part_of_speech": "verb", 
    "example_sentence": "The heavy rain during the outdoor event did not _____ the enjoyment of the crowd, who danced in the puddles.", 
    "etymology": "Verb Middle English blemisshen , to damage, injure, sully, from Anglo-French blemiss- , stem of blemir, blesmir , from Old French, literally, to make pale by wounding, of Germanic origin; akin to Old High German blas ros horse with a blaze, Old Norse blesi blaze — more at blaze"
  }, 
  {
    "definition": "Executed or designed with considerable attention to detail.", 
    "word": "elaborative", 
    "diacritic": "i-ˈla-b(ə-)rət", 
    "part_of_speech": "adjective", 
    "example_sentence": "The artist worked _____ to ensure that every brushstroke added depth and texture to the painting.", 
    "etymology": "Adjective and Verb Latin elaboratus , from past participle of elaborare to work out, acquire by labor, from e- + laborare to work — more at laboratory"
  }, 
  {
    "definition": "A unit of weight that is equivalent to one-twelfth of a troy pound.", 
    "word": "ounce", 
    "diacritic": "ˈau̇n(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "He added a little more than an _____ of salt to the recipe to enhance the flavor.", 
    "etymology": "Noun (1) Middle English, from Anglo-French unce , from Latin uncia 12th part, ounce, from unus one — more at one Noun (2) Middle English unce lynx, from Middle French, alteration (by misdivision, as if l'once the ounce) of lonce , probably from Old Italian lonza , from Middle Greek lynk-, lynx , from Greek"
  }, 
  {
    "definition": "The complete or partial blocking of one celestial object by another.", 
    "word": "eclipse", 
    "diacritic": "i-ˈklips", 
    "part_of_speech": "noun", 
    "example_sentence": "During the solar _____, the moon passes between the Earth and the sun, casting a shadow on our planet.", 
    "etymology": "Noun borrowed from Middle English eclipse, clips, borrowed from Anglo-French eclyps, eclypse, borrowed from Latin eclīpsis, borrowed from Greek ékleipsis \"abandonment, failure, cessation, obscuring of a celestial body by another,\" from ekleípein \"to leave out, abandon, cease, die, be obscured (of a celestial body)\" (from ek- ec- + leípein \"to leave, quit, be missing\") + -sis -sis — more at delinquent entry 2 Verb Middle English eclypsen, clypsen, derivative of eclipse eclipse entry 1 , probably after Medieval Latin eclīpsāre or Middle French esclipser"
  }, 
  {
    "definition": "A nearby area or region; a neighborhood.", 
    "word": "vicinity", 
    "diacritic": "və-ˈsi-nə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "There are several restaurants in the _____ that we can try for dinner.", 
    "etymology": "Middle French vicinité , from Latin vicinitat-, vicinitas , from vicinus neighboring, from vicus row of houses, village; akin to Goth weihs village, Old Church Slavic vĭsĭ , Greek oikos, oikia house"
  }, 
  {
    "definition": "A person or item that replaces or serves the role of someone or something else.", 
    "word": "substitute", 
    "diacritic": "ˈsəb-stə-ˌtüt, -ˌtyüt", 
    "part_of_speech": "noun", 
    "example_sentence": "The coach decided to use a _____ for the injured player in the next game.", 
    "etymology": "Noun Middle English, from Anglo-French substitut , from Latin substitutus , past participle of substituere to put in place of, from sub- + statuere to set up, place — more at statute"
  }, 
  {
    "definition": "An individual who was born in, lives in, or has citizenship in the same nation as someone else.", 
    "word": "compatriots", 
    "diacritic": "kəm-ˈpā-trē-əts, käm-, -trē-ˌäts", 
    "part_of_speech": "noun", 
    "example_sentence": "During the international conference, she was pleased to meet several _____ who shared her passion for environmental conservation.", 
    "etymology": "French compatriote , from Late Latin compatriota , from Latin com- + Late Latin patriota fellow countryman — more at patriot"
  }, 
  {
    "definition": "the action or process of evaluating the similarities and differences between two or more things", 
    "word": "comparison", 
    "diacritic": "kəm-ˈper-ə-sən, -ˈpa-rə-", 
    "part_of_speech": "noun", 
    "example_sentence": "In her _____ of the two novels, she highlighted their contrasting themes and writing styles.", 
    "etymology": "Middle English, from Anglo-French comparison , from Latin comparation-, comparatio , from comparare — see compare entry 1"
  }, 
  {
    "definition": "The condition of being easily annoyed or prone to anger.", 
    "word": "irritability", 
    "diacritic": "ˌir-ə-tə-ˈbi-lə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "Her constant lack of sleep contributed to her increasing _____ during family gatherings.", 
    "etymology": "Word History First Known Use 1755, in the meaning defined at sense 2 Time Traveler The first known use of irritability was in 1755 See more words from the same year"
  }, 
  {
    "definition": "to force someone to serve in the military", 
    "word": "commandeer", 
    "diacritic": "ˌkä-mən-ˈdir", 
    "part_of_speech": "verb", 
    "example_sentence": "The government decided to _____ young men from the local community to bolster their forces during the conflict.", 
    "etymology": "Afrikaans kommandeer , from French commander to command, from Old French comander"
  }, 
  {
    "definition": "in a strict or exact sense; for example", 
    "word": "literally", 
    "diacritic": "ˈli-tə-rə-lē, ˈli-trə-lē, ˈli-tər-lē", 
    "part_of_speech": "adverb", 
    "example_sentence": "She was so tired that she could _____ fall asleep standing up.", 
    "etymology": "see literal entry 1"
  }, 
  {
    "definition": "Something that has been surrendered or is at risk of being surrendered due to wrongdoing, an offense, or failure to fulfill a responsibility; a consequence or penalty.", 
    "word": "forfeit", 
    "diacritic": "ˈfȯr-fət", 
    "part_of_speech": "noun", 
    "example_sentence": "The team faced a _____ of their championship title after several players were found to have violated the rules.", 
    "etymology": "Noun, Verb, and Adjective Middle English forfait , from Anglo-French, from past participle of forfaire, forsfaire to commit a crime, forfeit, from fors outside (from Latin foris ) + faire to do, from Latin facere — more at forum , do"
  }, 
  {
    "definition": "A type of burrowing mammal from the family Dasypodidae, found from the southern United States to Argentina, characterized by a body and head covered in a protective layer of small bony plates.", 
    "word": "armadillo", 
    "diacritic": "ˌär-mə-ˈdi-(ˌ)lō", 
    "part_of_speech": "noun", 
    "example_sentence": "While exploring the desert, we spotted an _____ scurrying across the sandy ground, its shell glistening in the sunlight.", 
    "etymology": "borrowed from Spanish, noun derivative, with -illo, diminutive suffix, of armado, past participle of armar \"to arm,\" going back to Latin armāre — more at arm entry 2"
  }, 
  {
    "definition": "the careful handling and saving of resources, particularly money", 
    "word": "thrift", 
    "diacritic": "ˈthrift", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ allowed her to save enough money to buy a house.", 
    "etymology": "Noun Middle English, from Old Norse, prosperity, from thrīfask to thrive Verb derivative of thrift entry 1 (from its attributive use in thrift shop )"
  }, 
  {
    "definition": "A route or opening that allows entry or exit; a path, road, or channel through which something travels.", 
    "word": "passage", 
    "diacritic": "ˈpa-sij", 
    "part_of_speech": "noun", 
    "example_sentence": "The old castle had a hidden _____ that led to the forest beyond.", 
    "etymology": "Word History First Known Use Noun 13th century, in the meaning defined at sense 1a Verb 1824, in the meaning defined at intransitive sense Time Traveler The first known use of passage was in the 13th century See more words from the same century"
  }, 
  {
    "definition": "a publication that contains news and information, often issued regularly.", 
    "word": "gazette", 
    "diacritic": "gə-ˈzet", 
    "part_of_speech": "noun", 
    "example_sentence": "The local _____ published an article about the upcoming community events.", 
    "etymology": "Noun French, from Italian gazetta"
  }, 
  {
    "definition": "Robert, born in 1532 or 1533 and died in 1588, was an English nobleman and court figure who held the title of the 1st Earl of Leicester.", 
    "word": "Dudley", 
    "diacritic": "ˈdəd-lē", 
    "part_of_speech": "biographical name", 
    "example_sentence": "The historical figure _____ was known for his close relationship with Queen Elizabeth I and played a significant role in the politics of the time.", 
    "etymology": ""
  }, 
  {
    "definition": "A record that traces the lineage of ancestors.", 
    "word": "pedigree", 
    "diacritic": "ˈpe-də-ˌgrē", 
    "part_of_speech": "noun", 
    "example_sentence": "The dog was awarded first place at the competition due to its impressive _____, showcasing generations of champion lineage.", 
    "etymology": "Middle English pedegru , from Anglo-French pé de grue , literally, crane's foot; from the shape made by the lines of a genealogical chart"
  }, 
  {
    "definition": "To decorate or engrave with symbols, designs, or coats of arms.", 
    "word": "emblazoned", 
    "diacritic": "im-ˈblā-zᵊnd", 
    "part_of_speech": "verb", 
    "example_sentence": "The family crest was proudly _____ on the front of the shield, making it a striking piece of art.", 
    "etymology": "Word History First Known Use 1589, in the meaning defined at sense 1a Time Traveler The first known use of emblazon was in 1589 See more words from the same year"
  }, 
  {
    "definition": "to produce saliva, particularly in larger amounts than usual", 
    "word": "salivate", 
    "diacritic": "ˈsa-lə-ˌvāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The delicious aroma of the freshly baked cookies made me _____ in anticipation.", 
    "etymology": "Word History First Known Use circa 1706, in the meaning defined at sense 1 Time Traveler The first known use of salivate was circa 1706 See more words from the same year"
  }, 
  {
    "definition": "marked by disgrace or dishonor", 
    "word": "inglorious", 
    "diacritic": "(ˌ)in-ˈglȯr-ē-əs", 
    "part_of_speech": "adjective", 
    "example_sentence": "He left the competition in an _____ manner, overshadowed by his previous failures.", 
    "etymology": "Latin inglorius , from in- + gloria glory"
  }, 
  {
    "definition": "A layer of soil or rock that remains frozen all year round, found at different depths in extremely cold areas of a planet, like Earth.", 
    "word": "permafrost", 
    "diacritic": "ˈpər-mə-ˌfrȯst", 
    "part_of_speech": "noun", 
    "example_sentence": "The construction workers had to dig deep into the ground, but they quickly encountered _____, making it nearly impossible to continue their project.", 
    "etymology": "perma nent + frost"
  }, 
  {
    "definition": "a positive evaluation or approval of someone or something; a commendation.", 
    "word": "praise", 
    "diacritic": "ˈprāz", 
    "part_of_speech": "noun", 
    "example_sentence": "The teacher's _____ of her hard work motivated her to continue striving for excellence.", 
    "etymology": "Verb Middle English preisen , from Anglo-French preiser, priser to appraise, esteem — more at prize"
  }, 
  {
    "definition": "A person in the military who specializes in engineering tasks.", 
    "word": "engineer", 
    "diacritic": "ˌen-jə-ˈnir", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ was responsible for constructing bridges and clearing obstacles during the mission.", 
    "etymology": "Noun Middle English engineour , from Anglo-French, from enginer to devise, construct, from engin"
  }, 
  {
    "definition": "The condition or experience of being a mother; motherhood.", 
    "word": "maternity", 
    "diacritic": "mə-ˈtər-nə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "Her experience of _____ was filled with both challenges and joys as she welcomed her first child.", 
    "etymology": "Word History First Known Use Noun 1611, in the meaning defined at sense 1a Adjective 1852, in the meaning defined at sense 2 Time Traveler The first known use of maternity was in 1611 See more words from the same year"
  }, 
  {
    "definition": "A type of flat fish.", 
    "word": "flounder", 
    "diacritic": "ˈflau̇n-dər", 
    "part_of_speech": "noun", 
    "example_sentence": "The chef prepared a delicious meal featuring freshly caught _____ from the local market.", 
    "etymology": "Noun Middle English, of Scandinavian origin; akin to Norwegian flundra flounder Verb probably alteration of founder"
  }, 
  {
    "definition": "In a way that is muscular and powerful.", 
    "word": "nervily", 
    "diacritic": "ˈnər-və-lē", 
    "part_of_speech": "adverb", 
    "example_sentence": "He approached the weights _____, demonstrating his strength and determination.", 
    "etymology": "Word History First Known Use 1598, in the meaning defined at sense 1 Time Traveler The first known use of nervy was in 1598 See more words from the same year"
  }, 
  {
    "definition": "The area of skin on the human head that is typically covered with hair in both males and females.", 
    "word": "scalp", 
    "diacritic": "ˈskalp", 
    "part_of_speech": "noun", 
    "example_sentence": "She gently massaged her _____ to relieve the tension after a long day.", 
    "etymology": "Noun Middle English, crown of the head, perhaps of Scandinavian origin; akin to Old Norse skālpr sheath; akin to Middle Dutch schelpe shell"
  }, 
  {
    "definition": "The process of coming together to form a union or alliance.", 
    "word": "coalition", 
    "diacritic": "ˌkō-ə-ˈli-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The two parties formed a _____ to work together on the new environmental policy.", 
    "etymology": "French, from Latin coalescere — see coalesce"
  }, 
  {
    "definition": "pertaining to or characteristic of a palace", 
    "word": "palatial", 
    "diacritic": "pə-ˈlā-shəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The hotel was decorated in a style that felt _____, with grand chandeliers and luxurious furnishings.", 
    "etymology": "Latin palatium palace"
  }, 
  {
    "definition": "A term used to show that someone is present, typically in response to being called.", 
    "word": "adsum", 
    "diacritic": "ˈad-ˌsəm", 
    "part_of_speech": "interjection", 
    "example_sentence": "When the teacher called the roll, each student answered with \"_____.", 
    "etymology": "Latin, I am present, 1st person singular present indicative of adesse to be present"
  }, 
  {
    "definition": "Something that comes before and signals the arrival of something else.", 
    "word": "precursor", 
    "diacritic": "pri-ˈkər-sər, ˈprē-ˌkər-", 
    "part_of_speech": "noun", 
    "example_sentence": "The dark clouds were a _____ to the heavy rain that followed shortly after.", 
    "etymology": "Middle English precursoure , from Latin praecursor , from praecurrere to run before, from prae- pre- + currere to run — more at current entry 1"
  }, 
  {
    "definition": "A significant remark or declaration.", 
    "word": "dictum", 
    "diacritic": "ˈdik-təm", 
    "part_of_speech": "noun", 
    "example_sentence": "The professor's latest _____ on the importance of ethics in technology sparked a lively debate among the students.", 
    "etymology": "borrowed from Latin, \"utterance, order, promise, saying, witticism,\" noun derivative from neuter of dictus, past participle of dīcere \"to talk, speak, say, utter\" — more at diction"
  }, 
  {
    "definition": "A board game that uses dice and pieces where players aim to move all their pieces to one corner and then take them off the board before their opponent.", 
    "word": "backgammon", 
    "diacritic": "ˈbak-ˌga-mən, ˌbak-ˈga-", 
    "part_of_speech": "noun", 
    "example_sentence": "After dinner, we decided to play a game of _____ to unwind and have some fun.", 
    "etymology": "perhaps from back entry 3 + Middle English gamen, game game"
  }, 
  {
    "definition": "Associated with, happening in, or appropriate for the tropical regions.", 
    "word": "tropical", 
    "diacritic": "ˈträ-pi-kəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The island is known for its _____ climate, characterized by warm temperatures and frequent rainfall.", 
    "etymology": "(sense 1) Middle English tropikal \"pertaining to the three circles of the celestial sphere (the two tropics and the equinoctial circle),\" from tropik tropic entry 1 + -al -al entry 1 ; (sense 2) Latin tropicus \"pertaining to figures of speech\" (borrowed from Greek tropikós, from trópos \"figurative expression, trope \" + -ikos -ic entry 1 ) + -al entry 1"
  }, 
  {
    "definition": "A leader of a choir or musical group; also known as a precentor.", 
    "word": "cantor", 
    "diacritic": "ˈkan-tər", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ guided the choir through the complex harmonies during the performance.", 
    "etymology": "Latin, singer, from canere to sing"
  }, 
  {
    "definition": "to remain in a particular condition or to persist over time", 
    "word": "endure", 
    "diacritic": "in-ˈdu̇r, -ˈdyu̇r, en-", 
    "part_of_speech": "verb", 
    "example_sentence": "Despite the hardships they faced, the community managed to _____ the challenges and remain united.", 
    "etymology": "Middle English, from Anglo-French endurer , from Vulgar Latin *indurare , from Latin, to harden, from in- + durare to harden, endure — more at during"
  }, 
  {
    "definition": "The action or process of removing or getting rid of something.", 
    "word": "clearance", 
    "diacritic": "ˈklir-ən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "The store is having a big sale to make room for new inventory, so there are plenty of items available at a steep _____ right now.", 
    "etymology": "Word History First Known Use 1540, in the meaning defined at sense 1 Time Traveler The first known use of clearance was in 1540 See more words from the same year"
  }, 
  {
    "definition": "the essential basis or main point of a legal case", 
    "word": "gist", 
    "diacritic": "ˈjist", 
    "part_of_speech": "noun", 
    "example_sentence": "The attorney summarized the _____ of the case in just a few sentences, making it easy for the jury to understand the key points.", 
    "etymology": "Anglo-French, it lies, from gisir to lie, ultimately from Latin jacēre — more at adjacent"
  }, 
  {
    "definition": "To persuade someone by using compliments or sweet talk.", 
    "word": "blandish", 
    "diacritic": "ˈblan-dish", 
    "part_of_speech": "verb", 
    "example_sentence": "She tried to _____ him into lending her the money by complimenting his taste in clothes.", 
    "etymology": "Middle English blaundyshen, blaundissen \"to flatter, be enticing, (of the sea) become calm,\" borrowed from Anglo-French blandiss-, long stem of blandir \"to flatter, cajole,\" going back to Latin blandīrī \"to behave or speak in an ingratiating way, flatter,\" derivative of blandus \"influencing others by flattery, ingratiating\" — more at bland"
  }, 
  {
    "definition": "To keep a liquid in the mouth or throat and mix it with air from the lungs.", 
    "word": "gargle", 
    "diacritic": "ˈgär-gəl", 
    "part_of_speech": "verb", 
    "example_sentence": "After losing his voice, he decided to _____ with salt water to soothe his throat.", 
    "etymology": "Verb Middle French gargouiller , of imitative origin"
  }, 
  {
    "definition": "the act of carrying out a task or activity", 
    "word": "performance", 
    "diacritic": "pər-ˈfȯr-mən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "The dancer's _____ at the competition left the audience in awe.", 
    "etymology": "perform + -ance"
  }, 
  {
    "definition": "driven by feelings of deep regret or guilt", 
    "word": "remorseful", 
    "diacritic": "ri-ˈmȯrs-fəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "She spoke _____ about the hurtful things she had said during their argument.", 
    "etymology": "Word History First Known Use 1592, in the meaning defined above Time Traveler The first known use of remorseful was in 1592 See more words from the same year"
  }, 
  {
    "definition": "A soldier in a European military group that used to be made up of well-armed cavalry.", 
    "word": "dragoon", 
    "diacritic": "drə-ˈgün, dra-", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ charged into battle on horseback, their uniforms shining in the sunlight.", 
    "etymology": "Noun borrowed from French dragon \"dragon, military standard, kind of cavalry soldier,\" going back to Old French, \"dragon, military standard\" — more at dragon Note: The French word in reference to a cavalry soldier is apparently first attested in La Satyre Ménippée de la vertu du Catholicon d'Espagne, a political satire attacking the Catholic League and the pretensions of the Spanish monarchy, written by an authorial collective and first printed in 1594. The Oxford English Dictionary, first edition, acknowledges that the word is borrowed from French, but then seems to contradict itself by treating the sense \"cavalry soldier\" as derivative of a contemporaneous sense \"short-barreled firearm.\" There appears to be no evidence of the latter use for French dragon. Note that the ending -oon [u:n] is a frequent outcome in English of French -on [ɔ͂], as well as Spanish -ón and Italian -one, in words borrowed in the sixteenth and seventeenth centuries. Early evidence for dragoon in English is in Francis Markham's Five Decades of Epistles of Warre (London, 1622). Markham uses both the firearm and cavalryman senses without explicitly linking them and at times simultaneously, as in \"… a Lieutenant of a Troupe of compleat armed French Pistoliers, is reputed better in degree then a Captaine of an hundred Foot, a Lieutenant of the late inuented Dragoones (being not aboue sixteene inche Barrell, and full Musquet bore) the Foot-Captaines equall …\" (pp. 137-38). (He uses carbine in the same manner, for both the weapon and the soldier carrying it.) This might suggest that the weapon was named after the soldier, despite the Oxford dictionary's note that the firearm was \"so called from its 'breathing fire' like the fabulous dragon.\" Verb derivative of dragoon entry 1"
  }, 
  {
    "definition": "to experience a feeling of queasiness or discomfort in the stomach", 
    "word": "wamble", 
    "diacritic": "ˈwäm-bəl", 
    "part_of_speech": "verb", 
    "example_sentence": "After eating that large meal, I began to _____ and knew I needed to sit down for a moment.", 
    "etymology": "Verb Middle English wamlen ; akin to Danish vamle to become nauseated, Latin vomere to vomit — more at vomit"
  }, 
  {
    "definition": "A slim, lightweight boat with pointed ends that is typically moved by paddling.", 
    "word": "canoe", 
    "diacritic": "kə-ˈnü", 
    "part_of_speech": "noun", 
    "example_sentence": "They glided across the lake in a bright red _____, enjoying the peaceful scenery around them.", 
    "etymology": "Noun French, from New Latin canoa , from Spanish, from Arawakan, of Cariban origin; akin to Carib kana:wa canoe"
  }, 
  {
    "definition": "To earnestly request or ask for something, often with the hope of convincing someone.", 
    "word": "entreat", 
    "diacritic": "in-ˈtrēt, en-", 
    "part_of_speech": "verb", 
    "example_sentence": "She decided to _____ her parents for permission to attend the concert, hoping they would understand how much it meant to her.", 
    "etymology": "Middle English entreten , from Anglo-French entreter , from en- + treter to treat"
  }, 
  {
    "definition": "Punitive confinement, exhausting tasks, or drills assigned to military personnel as a form of discipline.", 
    "word": "jankers", 
    "diacritic": "ˈjaŋkə(r)z", 
    "part_of_speech": "noun", 
    "example_sentence": "After being caught violating the rules, the soldier was placed in _____ for a week as a punishment.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "The action of alerting someone to a danger or problem; the condition of having received such an alert.", 
    "word": "warning", 
    "diacritic": "ˈwȯr-niŋ", 
    "part_of_speech": "noun", 
    "example_sentence": "The weather service issued a _____ about the approaching storm, advising residents to take precautions.", 
    "etymology": "Noun Middle English warnyng, warnynge, going back to Old English warnung, wearning, from wearnian \"to warn \" + -ung, -ing -ing entry 3 Adjective from attributive use of warning entry 1"
  }, 
  {
    "definition": "The payment made for the delivery of goods.", 
    "word": "freight", 
    "diacritic": "ˈfrāt", 
    "part_of_speech": "noun", 
    "example_sentence": "The company increased the _____ costs due to rising transportation fees.", 
    "etymology": "Noun Middle English freghte, freight, freyte, freythe \"transport of goods, charge for transportation, cargo of a ship,\" borrowed from Middle Dutch vrecht \"cargo, charge for transport,\" going back to West Germanic *fraihti-, probably \"what is given over or consigned to someone\" (whence also Old Frisian fracht, frecht \"charge for freight,\" Middle Low German vracht [ vrecht- in vrechtman \"consigner of a cargo\"], Old High German frêht \"reward, recompense\") from *fra- \"away, off\" (going back to Indo-European *pro- ) + Germanic *aihti- \"property, possession\" (whence Old English ǣht \"possession, [in plural] property, goods,\" Old Saxon ēht \"property,\" Old Icelandic ætt, átt \"kindred, pedigree,\" Gothic aihtins [accusative plural] \"property\"), derivative, with the abstract noun suffix *-ti-, from the base of *aigan \"to possess\" — more at for entry 1 , owe Note: Compare fraught entry 2 and see note there. Verb Middle English freighten, derivative of freghte, freight freight entry 1"
  }, 
  {
    "definition": "to move around selling goods", 
    "word": "peddle", 
    "diacritic": "ˈpe-dᵊl", 
    "part_of_speech": "verb", 
    "example_sentence": "He would often _____ his handmade crafts at local markets on the weekends.", 
    "etymology": "back-formation from peddler , from Middle English pedlere , alteration of pedder peddler"
  }, 
  {
    "definition": "A small printed booklet or pamphlet that provides information about a particular topic or service.", 
    "word": "brochure", 
    "diacritic": "brō-ˈshu̇r", 
    "part_of_speech": "noun", 
    "example_sentence": "I picked up a _____ at the travel agency to learn more about their holiday packages.", 
    "etymology": "French, from brocher to sew, from Middle French, to prick, from Old French brochier , from broche"
  }, 
  {
    "definition": "A substantial sandwich made with a long, sliced roll and filled with various ingredients; also known as a submarine sandwich.", 
    "word": "hoagies", 
    "diacritic": "ˈhō-gēz", 
    "part_of_speech": "noun", 
    "example_sentence": "For lunch, I ordered two delicious _____ filled with meats, cheeses, and fresh vegetables.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "A brown nut that comes from a hazel tree.", 
    "word": "hazelnut", 
    "diacritic": "ˈhā-zəl-ˌnət", 
    "part_of_speech": "noun", 
    "example_sentence": "She added chopped _____ to the cookie dough for a delightful crunch.", 
    "etymology": "Word History First Known Use before the 12th century, in the meaning defined above Time Traveler The first known use of hazelnut was before the 12th century See more words from the same century"
  }, 
  {
    "definition": "In a manner that shows disdain or a lack of respect.", 
    "word": "scornfully", 
    "diacritic": "ˈskȯrn-fə-lē", 
    "part_of_speech": "adverb", 
    "example_sentence": "She looked at the proposal ____ and dismissed it as unworthy of consideration.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined above Time Traveler The first known use of scornful was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "capable of moving swiftly, effortlessly, and with agility; nimble.", 
    "word": "spry", 
    "diacritic": "ˈsprī", 
    "part_of_speech": "adjective", 
    "example_sentence": "At the age of 80, she was still quite _____, easily keeping up with her grandchildren during their games in the park.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "A person who helps or participates with someone else, particularly in illegal activities.", 
    "word": "accomplice", 
    "diacritic": "ə-ˈkäm-pləs, -ˈkəm-", 
    "part_of_speech": "noun", 
    "example_sentence": "The police arrested him for being an _____ in the bank robbery.", 
    "etymology": "borrowed from Anglo-French acomplice , alteration of complice \"associate\" — more at complice Note: The source of initial a(c)- is unclear. The earlier notion that a- represents fusion of the indefinite article cannot be maintained given the much earlier occurrences of the word in Anglo-French (in a 1384 petition of the Drapers guild, and in vol. 2 of the Rotuli Parliamentorum [1279-1377]). The suggestion that complice has been assimilated to accomplir , \"to fulfill, etc.,\" (see accomplish ) is not very compelling semantically."
  }, 
  {
    "definition": "A person who searches for discarded food from places like stores and restaurants to minimize resource use and promote sustainability.", 
    "word": "freegan", 
    "diacritic": "ˈfrē-gən", 
    "part_of_speech": "noun", 
    "example_sentence": "_____ often rummage through dumpsters behind grocery stores to find perfectly edible food that has been thrown away.", 
    "etymology": "Word History First Known Use 1997, in the meaning defined above Time Traveler The first known use of freegan was in 1997 See more words from the same year"
  }, 
  {
    "definition": "having no contents", 
    "word": "empty", 
    "diacritic": "ˈem(p)-tē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The room felt cold and unwelcoming, with its walls painted a dull gray and furniture that was stark and _____.", 
    "etymology": "Adjective Middle English, from Old English ǣmettig unoccupied, from ǣmetta leisure, perhaps from ǣ- without + -metta (probably akin to mōtan to have to) — more at must"
  }, 
  {
    "definition": "the ringing of a bell in the evening", 
    "word": "curfew", 
    "diacritic": "ˈkər-(ˌ)fyü", 
    "part_of_speech": "noun", 
    "example_sentence": "The children rushed home when they heard the _____ signaling it was time to go inside for the night.", 
    "etymology": "Middle English, from Anglo-French coverfeu , signal given to bank the hearth fire, curfew, from coverir to cover + fu, feu fire, from Latin focus hearth"
  }, 
  {
    "definition": "pertaining to the side or a position to the side", 
    "word": "lateral", 
    "diacritic": "ˈla-tə-rəl also ˈla-trəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The road curves _____, leading us away from the main highway and into a quiet neighborhood.", 
    "etymology": "Adjective, Noun, and Verb Middle English laterale , from Latin lateralis , from later-, latus side"
  }, 
  {
    "definition": "An adult female sheep.", 
    "word": "ewe", 
    "diacritic": "ˈyü", 
    "part_of_speech": "noun", 
    "example_sentence": "The farmer watched as the _____ and her lamb grazed peacefully in the meadow.", 
    "etymology": "Noun (1) Middle English, from Old English ēowu ; akin to Old High German ouwi ewe, Latin ovis sheep, Greek ois Noun (2) Ewe eβe, βe , a self-designation"
  }, 
  {
    "definition": "someone who is present at a specific event or location", 
    "word": "attendee", 
    "diacritic": "ə-ˌten-ˈdē, ˌa-", 
    "part_of_speech": "noun", 
    "example_sentence": "The conference was well-attended, with each _____ eager to participate in the workshops.", 
    "etymology": "Word History Etymology see attend First Known Use 1908, in the meaning defined above Time Traveler The first known use of attendee was in 1908 See more words from the same year"
  }, 
  {
    "definition": "someone who performs various small tasks or repairs", 
    "word": "handyman", 
    "diacritic": "ˈhan-dē-ˌman", 
    "part_of_speech": "noun", 
    "example_sentence": "I called a _____ to fix the leaky faucet and install new shelves in my garage.", 
    "etymology": "Word History First Known Use 1742, in the meaning defined at sense 1 Time Traveler The first known use of handyman was in 1742 See more words from the same year"
  }, 
  {
    "definition": "to speak quickly or without much consideration; to chatter.", 
    "word": "gab", 
    "diacritic": "ˈgab", 
    "part_of_speech": "verb", 
    "example_sentence": "The coffee shop was filled with the sound of _____ as friends caught up with each other over steaming cups.", 
    "etymology": "Verb of uncertain origin Note: Perhaps continuing a divergent sense of Middle English gabben \"to speak mockingly, scoff, tell lies\" (borrowed from Anglo-French gaber \"to mock, sneer at,\" ultimately from Old Norse gabba ) if occurrences in Chaucer, perhaps meaning \"to speak foolishly, talk nonsense,\" are the same verb. However, the scarcity of attestation between Chaucer and the 18th century, when gab appears in Scots, suggests that Modern English gab is a new onomatopoeic formation, akin to gabble . Noun (1) derivative of gab entry 1 Noun (2) by shortening"
  }, 
  {
    "definition": "at the time of", 
    "word": "pending", 
    "diacritic": "ˈpen-diŋ", 
    "part_of_speech": "preposition", 
    "example_sentence": "The decision regarding the new policy is still _____ a final vote from the committee.", 
    "etymology": "Preposition probably as partial translation of French pendant \"during,\" present participle of pendre \"to hang\" — more at pendent Note: In French, pendant, the present participle of pendre \"to hang,\" developed into a preposition through its use in legal language in Old and Middle French (as well as in Anglo-French). In expressions such as le plait pendant \"the lawsuit [being] not yet settled\" (literally \"the suit hanging\"), le debat pendant \"deliberation not having concluded,\" if the word pendant was preposed ( pendant le plait, pendant le debat ), it could be construed as a preposition and extended to non-legal uses. The le plait pendant construction is a calque of post-classical Latin ablative absolute constructions such as judicio pendente \"the judgment not yet made\" (literally, \"hanging\"), lite pendente \"the lawsuit not yet settled.\" Pending might be taken as a partial anglicization of pendent in the sense \"remaining undetermined,\" rather than an adaptation of French pendant, but pendent in this meaning is first attested about the same time as pending, in the early seventeenth century. The late date is striking given the frequency of these constructions in both Anglo-French and British Medieval Latin. Adjective Note: See etymology and note at pending entry 1 ."
  }, 
  {
    "definition": "a liquid mixture containing solid particles that do not dissolve, such as mud, lime, or plaster.", 
    "word": "slurry", 
    "diacritic": "ˈslər-ē, ˈslə-rē", 
    "part_of_speech": "noun", 
    "example_sentence": "The workers mixed the cement with water to create a thick _____ that could be easily applied to the walls.", 
    "etymology": "Noun Middle English slory"
  }, 
  {
    "definition": "A particular organism, like a bacterium or virus, that causes disease.", 
    "word": "pathogen", 
    "diacritic": "ˈpa-thə-jən", 
    "part_of_speech": "noun", 
    "example_sentence": "The scientist studied the _____ responsible for the outbreak of illness in the community.", 
    "etymology": "patho- + -gen , after pathogenic , pathogenesis"
  }, 
  {
    "definition": "A dried grape from various types, processed either by sunlight or artificial heating.", 
    "word": "raisin", 
    "diacritic": "ˈrā-zᵊn", 
    "part_of_speech": "noun", 
    "example_sentence": "I love adding _____ to my oatmeal for a touch of sweetness.", 
    "etymology": "Middle English, from Anglo-French, grape, raisin, from Latin racemus cluster of grapes or berries — more at raceme"
  }, 
  {
    "definition": "the process or occurrence of getting something back or returning to a normal state after a setback or loss", 
    "word": "recovery", 
    "diacritic": "ri-ˈkə-və-rē, -ˈkəv-rē", 
    "part_of_speech": "noun", 
    "example_sentence": "After months of physical therapy, her _____ from the injury was finally evident as she returned to playing soccer.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1 Time Traveler The first known use of recovery was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "A person responsible for maintaining and managing official records.", 
    "word": "registrar", 
    "diacritic": "ˈre-jə-ˌsträr", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ carefully reviewed all the applications before finalizing the list of accepted students.", 
    "etymology": "alteration of Middle English registrer , from registren to register, from Anglo-French registrer , from Medieval Latin registrare , from registrum"
  }, 
  {
    "definition": "The action or process of becoming more concentrated or compact.", 
    "word": "condensation", 
    "diacritic": "ˌkän-ˌden-ˈsā-shən, -dən-", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ of the vapor on the cold surface created small droplets of water.", 
    "etymology": "Word History First Known Use 1594, in the meaning defined at sense 1 Time Traveler The first known use of condensation was in 1594 See more words from the same year"
  }, 
  {
    "definition": "A systematic arrangement of words and phrases, typically organized in alphabetical order, along with their meanings or explanations.", 
    "word": "vocabulary", 
    "diacritic": "vō-ˈka-byə-ˌler-ē, və-", 
    "part_of_speech": "noun", 
    "example_sentence": "To improve her writing skills, she decided to expand her _____ by reading more diverse literature.", 
    "etymology": "Middle French vocabulaire , probably from Medieval Latin vocabularium , from neuter of vocabularius verbal, from Latin vocabulum"
  }, 
  {
    "definition": "The study of human beings and their behaviors.", 
    "word": "anthropology", 
    "diacritic": "ˌan(t)-thrə-ˈpä-lə-jē", 
    "part_of_speech": "noun", 
    "example_sentence": "The professor specializes in _____, focusing on cultural practices and social dynamics of various societies.", 
    "etymology": "borrowed from New Latin anthropologia \"study of humanity, science of human nature,\" from anthropo- anthropo- + -logia -logy"
  }, 
  {
    "definition": "referring to the original or earliest inhabitants of a particular area; native or indigenous.", 
    "word": "aboriginal", 
    "diacritic": "ˌa-bə-ˈri-jə-nᵊl, -ˈrij-nəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The museum features artwork created by _____ peoples, showcasing their rich cultural heritage.", 
    "etymology": "Adjective aborigine + -al entry 1 Noun noun derivative of aboriginal entry 1"
  }, 
  {
    "definition": "to waste time or engage in trivial activities", 
    "word": "fribble", 
    "diacritic": "ˈfri-bəl", 
    "part_of_speech": "verb", 
    "example_sentence": "Instead of studying for the final exam, he decided to _____ by playing video games and browsing social media.", 
    "etymology": "Verb origin unknown"
  }, 
  {
    "definition": "A flat, rectangular piece, typically made of wood or plastic, that has its surface split into two equal sections, which may be plain or marked with one to six dots like those on dice.", 
    "word": "domino", 
    "diacritic": "ˈdä-mə-ˌnō", 
    "part_of_speech": "noun", 
    "example_sentence": "The children gathered around the table to set up the _____ for their game, excited to see how many they could knock down in a row.", 
    "etymology": "French, probably from Latin (in the ritual formula benedicamus Domino let us bless the Lord)"
  }, 
  {
    "definition": "A type of animation that comes from Japan, known for its bright, colorful visuals and dynamic characters, often featuring exciting stories with imaginative or futuristic elements.", 
    "word": "anime", 
    "diacritic": "ˈa-nə-ˌmā, ˈä-nē-", 
    "part_of_speech": "noun", 
    "example_sentence": "Many fans gather at conventions to celebrate their favorite _____ series and meet fellow enthusiasts.", 
    "etymology": "Japanese, animation, short for animēshiyon , from English"
  }, 
  {
    "definition": "A type of flowering plant with many cultivated varieties, typically featuring double blooms, belonging to the species Dianthus caryophyllus, and available in various colors.", 
    "word": "carnation", 
    "diacritic": "kär-ˈnā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "She received a beautiful bouquet of _____ in shades of pink and white for her birthday.", 
    "etymology": "Middle French, from Old Italian carnagione , from carne flesh, from Latin carn-, caro"
  }, 
  {
    "definition": "a surprising and often unsettling challenge, discovery, or trick.", 
    "word": "gotcha", 
    "diacritic": "ˈgä-chə", 
    "part_of_speech": "noun", 
    "example_sentence": "When he thought he had the project all figured out, she revealed a major flaw that turned out to be a real _____ in his plans.", 
    "etymology": "alteration of got you"
  }, 
  {
    "definition": "A tiny, shiny disc made of metal or plastic, often used as decoration on garments.", 
    "word": "spangled", 
    "diacritic": "ˈspaŋ-gəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The dress was adorned with colorful _____ that caught the light beautifully as she moved.", 
    "etymology": "Noun Middle English spangel , diminutive of spang shiny ornament, probably from Middle Dutch spange ; akin to Old English spang buckle, Middle Dutch spannen to stretch"
  }, 
  {
    "definition": "Pertaining to or reminiscent of the heavens or divine qualities.", 
    "word": "celestial", 
    "diacritic": "sə-ˈles-chəl, -ˈlesh-, -ˈle-stē-əl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The music had a _____ quality that transported the listeners to a realm beyond the ordinary.", 
    "etymology": "Adjective Middle English, from Anglo-French, from Latin caelestis celestial, from caelum sky"
  }, 
  {
    "definition": "a recognized guideline or standard", 
    "word": "rubric", 
    "diacritic": "ˈrü-brik, -ˌbrik", 
    "part_of_speech": "noun", 
    "example_sentence": "The teacher provided a detailed _____ to help students understand the expectations for their project.", 
    "etymology": "Middle English rubrike red ocher, heading in red letters of part of a book, from Anglo-French, from Latin rubrica , from rubr-, ruber red"
  }, 
  {
    "definition": "Pertaining to or forming the core nature of something.", 
    "word": "essential", 
    "diacritic": "i-ˈsen(t)-shəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "Understanding the basic principles of physics is _____ for anyone studying engineering.", 
    "etymology": "Word History First Known Use Adjective 14th century, in the meaning defined at sense 1 Noun circa 1620, in the meaning defined at sense 1 Time Traveler The first known use of essential was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "The process of being part of a group or the condition of being embraced within something.", 
    "word": "inclusion", 
    "diacritic": "in-ˈklü-zhən", 
    "part_of_speech": "noun", 
    "example_sentence": "The school's emphasis on _____ ensures that every student feels valued and accepted in the community.", 
    "etymology": "Latin inclusion-, inclusio , from includere"
  }, 
  {
    "definition": "A departure from the main topic in a lengthy spoken or written expression, often occurring in organized literary works.", 
    "word": "digression", 
    "diacritic": "dī-ˈgre-shən, də-", 
    "part_of_speech": "noun", 
    "example_sentence": "The lecture was informative, but the professor's frequent _____ made it difficult to follow the main argument.", 
    "etymology": "see digress"
  }, 
  {
    "definition": "A historical area in the eastern Indian subcontinent that encompasses the Ganges and Brahmaputra river delta; it was a province of British India from 1937 to 1947 and was split between Pakistan and India in 1947, leading to the creation of East Bengal (later East Pakistan) and West Bengal.", 
    "word": "Bengal", 
    "diacritic": "ben-ˈgȯl, beŋ-, -ˈgäl", 
    "part_of_speech": "geographical name", 
    "example_sentence": "The rich culture and history of _____ make it a significant region in South Asian history.", 
    "etymology": ""
  }, 
  {
    "definition": "A large, meat-eating reptile with tough skin and a long body, found in tropical and subtropical waters, characterized by its long, pointed, V-shaped snout.", 
    "word": "crocodile", 
    "diacritic": "ˈkrä-kə-ˌdī(-ə)l", 
    "part_of_speech": "noun", 
    "example_sentence": "The children were amazed when they saw a _____ basking on the riverbank during their safari.", 
    "etymology": "Middle English & Latin; Middle English cocodrille , from Anglo-French, from Medieval Latin cocodrillus , alteration of Latin crocodilus , from Greek krokodilos lizard, crocodile, from krokē shingle, pebble + drilos worm; akin to Sanskrit śarkara pebble"
  }, 
  {
    "definition": "A clear, colorless liquid that falls from the sky as rain, creates rivers, lakes, and oceans, and is essential for all living organisms. When pure, it has no smell or taste, is slightly compressible, and is made of hydrogen and oxygen (H2O). It appears bluish in large quantities, freezes at 0°C, boils at 100°C, reaches its highest density at 4°C, has a high specific heat capacity, weakly dissociates into hydrogen and hydroxyl ions, is a poor conductor of electricity, and acts as an effective solvent.", 
    "word": "water", 
    "diacritic": "ˈwȯ-tər, ˈwä-", 
    "part_of_speech": "noun", 
    "example_sentence": "The hikers filled their bottles with _____ from the nearby stream to stay hydrated on their journey.", 
    "etymology": "Noun Middle English, from Old English wæter ; akin to Old High German wazzar water, Greek hydōr , Latin unda wave"
  }, 
  {
    "definition": "A device that changes signals from one type of equipment, like a computer, into a format that another device, such as a telephone, can understand. It is primarily used for sending and receiving data between computers over telephone lines.", 
    "word": "modem", 
    "diacritic": "ˈmō-dəm, -ˌdem", 
    "part_of_speech": "noun", 
    "example_sentence": "To connect to the internet, you need a _____ that translates the data from your computer into a signal that can be sent over the phone line.", 
    "etymology": "Noun mo dulator + dem odulator"
  }, 
  {
    "definition": "A platform or structure located by the shore of navigable waters that allows ships to dock for loading and unloading cargo and passengers.", 
    "word": "wharf", 
    "diacritic": "ˈ(h)wȯrf", 
    "part_of_speech": "noun", 
    "example_sentence": "The cargo ship slowly approached the _____ to unload its goods for the bustling market nearby.", 
    "etymology": "Middle English, from Old English hwearf embankment, wharf; akin to Old English hweorfan to turn, Old High German hwerban , Greek karpos wrist"
  }, 
  {
    "definition": "feeling easily sick or uncomfortable; prone to nausea", 
    "word": "squeamish", 
    "diacritic": "ˈskwē-mish", 
    "part_of_speech": "adjective", 
    "example_sentence": "She felt _____ at the sight of the gruesome scene in the movie.", 
    "etymology": "Middle English squaymisch , modification of Anglo-French escoymous"
  }, 
  {
    "definition": "a lavish meal or celebration", 
    "word": "banquet", 
    "diacritic": "ˈbaŋ-kwət, ˈban- also -ˌkwet", 
    "part_of_speech": "noun", 
    "example_sentence": "The community organized a grand _____ to celebrate the anniversary of the town's founding.", 
    "etymology": "Noun Middle French, from Old Italian banchetto , from diminutive of banca bench, bank Verb borrowed from Middle French banqueter, derivative of banquet banquet entry 1"
  }, 
  {
    "definition": "Clothing or garments worn by an individual, often of a specific style or type.", 
    "word": "apparel", 
    "diacritic": "ə-ˈper-əl, -ˈpa-rəl", 
    "part_of_speech": "noun", 
    "example_sentence": "She always chooses her _____ carefully to reflect her personal style.", 
    "etymology": "Noun Middle English apparaile, apparell \"furnishings, equipment, dress,\" borrowed from Anglo-French apparail, noun derivative of apparailler \"to prepare, equip, dress\" — more at apparel entry 2 Verb Middle English apparailen, apareilen \"to prepare, equip, dress,\" borrowed from Anglo-French apparailler, apareiller, going back to Vulgar Latin *appariculāre, probably verbal derivative of *appariculum, re-formation (with Latin -culum, suffix of instrument) of Latin apparātus \"act of preparing, equipment, apparatus \""
  }, 
  {
    "definition": "The process or occurrence of stirring something up; a shaking or rocking motion that is erratic, swift, or intense.", 
    "word": "agitation", 
    "diacritic": "ˌa-jə-ˈtā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The sudden _____ of the water in the pond startled the nearby ducks.", 
    "etymology": "borrowed from Middle French & Latin; Middle French, borrowed from Latin agitātiōn-, agitātiō \"violent moving or movement,\" from agitāre \"to set in motion, agitate \" + -tiōn-, -tiō, suffix of verbal action"
  }, 
  {
    "definition": "A varied group of mainly photosynthetic organisms that live in water, which can be single-celled or large, multicellular forms. They are usually classified as protists and include green, yellow-green, brown, golden-brown, and red types, as well as cyanobacteria, which were once considered prokaryotes.", 
    "word": "algae", 
    "diacritic": "ˈal-(ˌ)jē", 
    "part_of_speech": "noun", 
    "example_sentence": "The pond was covered in a thick layer of _____, creating a vibrant green surface and providing habitat for various aquatic life.", 
    "etymology": "Latin, seaweed"
  }, 
  {
    "definition": "Characterized by the presence of bubbles; sparkling or fizzy.", 
    "word": "bubbly", 
    "diacritic": "ˈbə-b(ə-)lē", 
    "part_of_speech": "adjective", 
    "example_sentence": "She poured herself a glass of _____ water to enjoy with her dinner.", 
    "etymology": "Word History First Known Use Adjective 1568, in the meaning defined at sense 1 Noun 1916, in the meaning defined above Time Traveler The first known use of bubbly was in 1568 See more words from the same year"
  }, 
  {
    "definition": "An earlier indication or alert about something that may happen; a sign of what is to come.", 
    "word": "premonition", 
    "diacritic": "ˌprē-mə-ˈni-shən, ˌpre-", 
    "part_of_speech": "noun", 
    "example_sentence": "As she walked through the darkened hallway, a feeling of _____ filled her with an unsettling sense that something was about to go wrong.", 
    "etymology": "Middle English premunition , from Anglo-French, from Medieval Latin premunition-, premunitio , alteration of Late Latin praemonitio , from Latin praemonēre to warn in advance, from prae- + monēre to warn — more at mind"
  }, 
  {
    "definition": "The predominantly hilly region in northern Scotland, located above an imaginary line that links the Firth of Clyde and the Firth of Tay.", 
    "word": "Highlands", 
    "diacritic": "ˈhī-ləndz", 
    "part_of_speech": "geographical name", 
    "example_sentence": "The stunning landscapes of _____ attract tourists from all over the world, eager to experience its rugged beauty and rich history.", 
    "etymology": ""
  }, 
  {
    "definition": "A person who creates, supports, or keeps up with the newest trends in clothing and style.", 
    "word": "fashionista", 
    "diacritic": "ˌfa-shə-ˈnē-stə", 
    "part_of_speech": "noun", 
    "example_sentence": "She always knows the latest trends and effortlessly puts together outfits, making her a true _____.", 
    "etymology": "fashion entry 1 + -ista (as in sandinista )"
  }, 
  {
    "definition": "A loud and intense argument or disagreement filled with anger.", 
    "word": "altercation", 
    "diacritic": "ˌȯl-tər-ˈkā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The heated _____ between the neighbors could be heard from down the street.", 
    "etymology": "Middle English altercacioun, borrowed from Anglo-French & Latin; Anglo-French altercacion, borrowed from Latin altercātiōn-, altercātiō, from altercārī, altercāre \"to dispute vehemently, wrangle\" + -tiōn-, -tiō, suffix of verbal action — more at altercate"
  }, 
  {
    "definition": "captivated by the theater", 
    "word": "stagestruck", 
    "diacritic": "ˈstāj-ˌstrək", 
    "part_of_speech": "adjective", 
    "example_sentence": "Ever since she saw her first play, she has been _____ and dreams of performing on stage one day.", 
    "etymology": "Word History First Known Use 1813, in the meaning defined above Time Traveler The first known use of stagestruck was in 1813 See more words from the same year"
  }, 
  {
    "definition": "a person who is particularly tiny and often charming", 
    "word": "munchkin", 
    "diacritic": "ˈmənch-ˌkin", 
    "part_of_speech": "noun", 
    "example_sentence": "The little boy in the blue overalls was such a _____, running around the playground with a big smile on his face.", 
    "etymology": "the Munchkins , diminutive creatures in The Wonderful Wizard of Oz (1900) by L. Frank Baum"
  }, 
  {
    "definition": "Pertaining to feelings or the senses.", 
    "word": "sensory", 
    "diacritic": "ˈsen(t)-sə-rē, ˈsen(t)s-rē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The artist used vibrant colors and textures to create a _____ experience that captivated everyone who viewed her work.", 
    "etymology": "Word History First Known Use 1651, in the meaning defined at sense 1 Time Traveler The first known use of sensory was in 1651 See more words from the same year"
  }, 
  {
    "definition": "A resource, such as a document, book, video, or software, that offers helpful guidance on a particular topic.", 
    "word": "tutorial", 
    "diacritic": "tü-ˈtȯr-ē-əl, tyü-", 
    "part_of_speech": "noun", 
    "example_sentence": "I watched a _____ on how to cook pasta perfectly before I started making dinner.", 
    "etymology": "Word History First Known Use Noun 1923, in the meaning defined at sense 2 Adjective 1822, in the meaning defined above Time Traveler The first known use of tutorial was in 1822 See more words from the same year"
  }, 
  {
    "definition": "A yearly celebration of a significant event that occurs on the same date.", 
    "word": "anniversary", 
    "diacritic": "ˌa-nə-ˈvərs-rē, -ˈvər-sə-", 
    "part_of_speech": "noun", 
    "example_sentence": "They planned a romantic dinner to celebrate their fifth _____ together.", 
    "etymology": "Middle English anniversarie , from Medieval Latin anniversarium , from Latin, neuter of anniversarius returning annually, from annus year + versus , past participle of vertere to turn — more at annual , worth"
  }, 
  {
    "definition": "shaped with six corners and six edges", 
    "word": "hexagonal", 
    "diacritic": "hek-ˈsa-gə-nᵊl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The table had a _____ design, making it stand out in the otherwise square and rectangular room.", 
    "etymology": "Word History First Known Use 1571, in the meaning defined at sense 1 Time Traveler The first known use of hexagonal was in 1571 See more words from the same year"
  }, 
  {
    "definition": "A brief promotional statement, often found on a book cover.", 
    "word": "blurb", 
    "diacritic": "ˈblərb", 
    "part_of_speech": "noun", 
    "example_sentence": "The back cover of the novel featured an enticing _____ that promised an unforgettable adventure.", 
    "etymology": "Noun coined by Gelett Burgess"
  }, 
  {
    "definition": "lacking sense or judgment; absurd", 
    "word": "daft", 
    "diacritic": "ˈdaft", 
    "part_of_speech": "adjective", 
    "example_sentence": "It was so _____ to think that he could finish the project in just one day without any help.", 
    "etymology": "Middle English daffte, daft, defte \"well-mannered, gentle, dull, foolish,\" going back to Old English gedæfte \"gentle, mild, meek,\" adjective derivative of a Germanic base *daƀ- \"becoming, fit\" (whence also Old English gedafen \"appropriate, fitting,\" Gothic gadaban \"to happen, be suitable,\" with lengthened grade Old English gedēfe \"fitting, worthy, quiet, tranquil,\" Middle Dutch onghedoef \"wild, rough,\" Gothic gadob ist \"it is fitting\"), going back to dialectal Indo-European *d h ab h - or *d h ob h -, whence also Old Church Slavic podobati \"to become, be fitting,\" dobrŭ \"good, pleasant,\" Bosnian/Croatian/Serbian dôba, dȍba \"time, season,\" Lithuanian dabà \"nature, character,\" dabnùs \"well-dressed, elegant\" Note: The sense progression from Germanic to Modern English is apparently \"fit, becoming\" to \"well-mannered, modest\" to \"dull, stupid\" to \"foolish, irrational.\" See also deft ."
  }, 
  {
    "definition": "A natural event occurring in the atmosphere, like lightning or snowfall.", 
    "word": "meteor", 
    "diacritic": "ˈmē-tē-ər, -ˌȯr", 
    "part_of_speech": "noun", 
    "example_sentence": "During the storm, we witnessed a spectacular _____ illuminating the sky.", 
    "etymology": "Middle English metheour , from Middle French meteore , from Medieval Latin meteorum , from Greek meteōron , from neuter of meteōros high in air, from meta- + -eōros , from aeirein to lift"
  }, 
  {
    "definition": "To grow dry, shriveled, and wrinkled, typically due to aging or a decline in health.", 
    "word": "wizened", 
    "diacritic": "ˈwi-zᵊn also ˈwē-", 
    "part_of_speech": "verb", 
    "example_sentence": "The old tree stood in the field, its bark _____ and gnarled from years of harsh weather.", 
    "etymology": "Verb Middle English wisenen , from Old English wisnian ; akin to Old High German wesanēn to wither, Lithuanian vysti Adjective alteration of wizened"
  }, 
  {
    "definition": "a suggestion or plan presented for others to think about or evaluate", 
    "word": "proposal", 
    "diacritic": "prə-ˈpō-zəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The committee reviewed the _____ to improve the park and decided to hold a community meeting to gather more feedback.", 
    "etymology": "Word History First Known Use circa 1629, in the meaning defined at sense 1 Time Traveler The first known use of proposal was circa 1629 See more words from the same year"
  }, 
  {
    "definition": "a designated portion or share of something", 
    "word": "quota", 
    "diacritic": "ˈkwō-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "Each student is required to complete a certain _____ of community service hours to graduate.", 
    "etymology": "Medieval Latin, from Latin quota pars how great a part"
  }, 
  {
    "definition": "a created entity or organization, such as", 
    "word": "establishment", 
    "diacritic": "i-ˈsta-blish-mənt", 
    "part_of_speech": "noun", 
    "example_sentence": "The local coffee shop has become a popular _____ in the community, known for its cozy atmosphere and friendly staff.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 3a Time Traveler The first known use of establishment was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "able to be restored or replaced", 
    "word": "renewable", 
    "diacritic": "ri-ˈnü-ə-bəl, -ˈnyü-", 
    "part_of_speech": "adjective", 
    "example_sentence": "Solar energy is a _____ resource that can be harnessed repeatedly without depleting the Earth's natural reserves.", 
    "etymology": "Word History First Known Use 1661, in the meaning defined at sense 1 Time Traveler The first known use of renewable was in 1661 See more words from the same year"
  }, 
  {
    "definition": "A leftover part that stays after something has been removed or after a process has finished.", 
    "word": "residue", 
    "diacritic": "ˈre-zə-ˌdü, -ˌdyü", 
    "part_of_speech": "noun", 
    "example_sentence": "After the cleaning process, there was still a greasy _____ on the kitchen counter.", 
    "etymology": "Middle English, from Anglo-French, from Latin residuum , from neuter of residuus left over, from residēre to remain"
  }, 
  {
    "definition": "The role or duty of a representative who acts on behalf of someone else.", 
    "word": "proxy", 
    "diacritic": "ˈpräk-sē", 
    "part_of_speech": "noun", 
    "example_sentence": "She acted as a _____ for her colleague during the important meeting, conveying his ideas and opinions to the team.", 
    "etymology": "Middle English proxi, procucie , contraction of procuracie , from Anglo-French, from Medieval Latin procuratia , alteration of Latin procuratio procuration"
  }, 
  {
    "definition": "A dog that is a mix of a Labrador retriever and a poodle.", 
    "word": "labradoodle", 
    "diacritic": "ˈla-brə-ˌdü-dᵊl", 
    "part_of_speech": "noun", 
    "example_sentence": "My friend adopted a adorable _____ that loves to play fetch at the park.", 
    "etymology": "Labrad or (retriever) + p oodle"
  }, 
  {
    "definition": "transportation by sea on a vessel", 
    "word": "shipping", 
    "diacritic": "ˈshi-piŋ", 
    "part_of_speech": "noun", 
    "example_sentence": "The company specializes in _____ goods from Asia to North America.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1a Time Traveler The first known use of shipping was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A small bag typically worn over the shoulder.", 
    "word": "satchel", 
    "diacritic": "ˈsa-chəl", 
    "part_of_speech": "noun", 
    "example_sentence": "She carried her books and supplies in a stylish _____ as she walked to class.", 
    "etymology": "Middle English sachel , from Anglo-French sachel, sacel , from Late Latin saccellum , diminutive of Latin sacculus , diminutive of saccus bag — more at sack"
  }, 
  {
    "definition": "causing a person to breathe quickly or struggle to catch their breath; exhausting.", 
    "word": "breathtaking", 
    "diacritic": "ˈbreth-ˌtā-kiŋ", 
    "part_of_speech": "adjective", 
    "example_sentence": "The hike up the steep mountain was so _____ that I had to stop several times to catch my breath.", 
    "etymology": "Word History First Known Use 1840, in the meaning defined at sense 1 Time Traveler The first known use of breathtaking was in 1840 See more words from the same year"
  }, 
  {
    "definition": "Having a similar nature or quality; comparable.", 
    "word": "kindred", 
    "diacritic": "ˈkin-drəd", 
    "part_of_speech": "adjective", 
    "example_sentence": "The two artists had _____ spirits, often creating works that reflected their shared experiences and emotions.", 
    "etymology": "Adjective attributive use of kindred entry 2 Noun Middle English kynrede \"family, lineage, blood relations, kinship, nation,\" going back to late Old English cynrǣden \"kinship\" (attested once as kynrædan, accusative or dative), from cynn \"progeny, kin entry 1 \" + -rǣden, suffixal use of rǣden \"condition, stipulation,\" derivative (in -enn-, feminine noun suffix, going back to *inj- ) probably from the base of gerǣde \"prepared, ready,\" gerād \"conditioned, disposed\" — more at ready entry 1 Note: The noun rǣden, also attested in the senses \"rule, direction\" and \"estimation,\" has been taken as a derivative of the verb rǣdan \"to advise, deliberate, direct,\" etc. (see read entry 1 ), though these usages may reflect partial merger with rǣding, the verbal noun of rǣdan. In general, the outcomes of Germanic *raidja- and *rēd- can be difficult to separate in Old English."
  }, 
  {
    "definition": "a gathering of people summoned for a meeting", 
    "word": "convocation", 
    "diacritic": "ˌkän-və-ˈkā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The university held a formal _____ to discuss important changes to the academic curriculum.", 
    "etymology": "Middle English, from Middle French & Latin; Middle French, from Latin convocation-, convocatio , from convocare — see convoke"
  }, 
  {
    "definition": "To free someone entirely from a charge or responsibility.", 
    "word": "acquit", 
    "diacritic": "ə-ˈkwit", 
    "part_of_speech": "verb", 
    "example_sentence": "The jury decided to _____ him of all charges, concluding that there was insufficient evidence to prove his guilt.", 
    "etymology": "Middle English aquiten, borrowed from Anglo-French aquiter, from a-, prefix forming transitive verbs (going back to Latin ad- ad- ) + -quiter, verbal derivative of quite \"free, discharged\" — more at quit entry 1"
  }, 
  {
    "definition": "to gradually invade or trespass upon someone else's property or rights, often in a sneaky manner", 
    "word": "encroach", 
    "diacritic": "in-ˈkrōch, en-", 
    "part_of_speech": "verb", 
    "example_sentence": "The developer's plans to build a new shopping center began to _____ on the neighboring park's land, causing concern among local residents.", 
    "etymology": "Middle English encrochen to get, seize, from Anglo-French encrocher , from en- + croc, croche hook — more at crochet"
  }, 
  {
    "definition": "A small, fast-baked bread made from dough that is either rolled out and cut into shapes or spooned onto a baking sheet.", 
    "word": "biscuit", 
    "diacritic": "ˈbi-skət", 
    "part_of_speech": "noun", 
    "example_sentence": "I enjoyed a warm _____ with my breakfast, topped with butter and honey.", 
    "etymology": "Middle English bisquite , from Anglo-French besquit , from ( pain ) besquit twice-cooked bread"
  }, 
  {
    "definition": "to think deeply about a topic or to consider it thoughtfully", 
    "word": "speculate", 
    "diacritic": "ˈspe-kyə-ˌlāt", 
    "part_of_speech": "verb", 
    "example_sentence": "During the meeting, she began to _____ about the reasons for the sudden change in management.", 
    "etymology": "Latin speculatus , past participle of speculari to spy out, examine, from specula lookout post, from specere to look, look at — more at spy"
  }, 
  {
    "definition": "A long sound made by a horse.", 
    "word": "neigh", 
    "diacritic": "ˈnā", 
    "part_of_speech": "noun", 
    "example_sentence": "The sound of the _____ echoed through the quiet pasture as the horse called out to its companion.", 
    "etymology": "Middle English neyen , from Old English hnǣgan ; akin to Middle High German nēgen to neigh"
  }, 
  {
    "definition": "to suddenly release energy in a violent manner, often accompanied by a loud noise.", 
    "word": "explode", 
    "diacritic": "ik-ˈsplōd", 
    "part_of_speech": "verb", 
    "example_sentence": "The fireworks will _____ in the sky, lighting up the night with brilliant colors and sounds.", 
    "etymology": "Latin explodere to drive off the stage by clapping, from ex- + plaudere to clap"
  }, 
  {
    "definition": "an item that is included as an extra or supplementary addition", 
    "word": "addendum", 
    "diacritic": "ə-ˈden-dəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The author included an _____ at the end of the book to provide additional insights and updates on the research.", 
    "etymology": "borrowed from Latin, neuter of addendus, gerundive of addere \"to add \""
  }, 
  {
    "definition": "A rapid flow of a large amount of snow, ice, earth, rock, or other substances sliding down a mountain or cliff.", 
    "word": "avalanche", 
    "diacritic": "ˈa-və-ˌlanch", 
    "part_of_speech": "noun", 
    "example_sentence": "The hikers were warned to stay away from the steep slopes, as an _____ could occur at any moment.", 
    "etymology": "Noun and Verb French, from French dialect (Franco-Provençal) lavantse, avalantse"
  }, 
  {
    "definition": "inclined to seek retribution; having a desire for revenge", 
    "word": "vindictive", 
    "diacritic": "vin-ˈdik-tiv", 
    "part_of_speech": "adjective", 
    "example_sentence": "She made a _____ remark after being insulted, clearly wanting to get back at him.", 
    "etymology": "Latin vindicta revenge, vindication, from vindicare"
  }, 
  {
    "definition": "a sale where items are offered to the highest bidder", 
    "word": "auction", 
    "diacritic": "ˈȯk-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The rare painting was sold at an _____, where collectors eagerly placed their bids.", 
    "etymology": "Noun Latin auction-, auctio , from augēre to increase — more at eke"
  }, 
  {
    "definition": "someone who is new to a specific activity; a beginner or newcomer", 
    "word": "newbie", 
    "diacritic": "ˈnü-bē, ˈnyü-", 
    "part_of_speech": "noun", 
    "example_sentence": "As a _____ in the coding bootcamp, she found the first few lessons challenging but exciting.", 
    "etymology": "irregular from new"
  }, 
  {
    "definition": "Not well-lit; lacking brightness.", 
    "word": "obscure", 
    "diacritic": "äb-ˈskyu̇r, əb-", 
    "part_of_speech": "adjective", 
    "example_sentence": "The attic was so _____ that we could barely see our hands in front of our faces.", 
    "etymology": "Adjective Middle English, \"dark, unenlightened, incomprehensible,\" borrowed from Anglo-French & Latin; Anglo-French oscur, obscur \"dark, dull, enigmatic,\" borrowed from Latin obscūrus \"dim, dark, appearing faintly, imperfectly known, concealed from knowledge, incomprehensible,\" of uncertain origin Note: Latin obscūrus has traditionally been linked to a presumed Indo-European verbal base *skeu̯- \"cover, conceal,\" and hence to an assortment of Germanic etyma, most formed with hypothesized root extensions of this base (compare shower entry 1 , sky entry 1 )—hence, J. Pokorny, Indogermanisches etymologisches Wörterbuch, p. 951, American Heritage Dictionary, Oxford Latin Dictionary, and the Oxford English Dictionary, third edition. However, etymological work of the last half-century has thrown doubt on the existence of such an etymon; in particular, the Sanskrit verb skunā́ti, glossed as \"covers,\" has now been judged a late and isolated semantic development of a verb that meant \"push, poke\" in Vedic. The difficulty with any analysis of obscūrus that posits a meaning \"cover\" for -scūr- is that it makes little sense semantically compounded with the prefix and preposition ob ( s )- \"facing, in front of, toward/against\" (compare ob oculōs \"before one's eyes,\" obviam \"in the way of\"). It is not even certain that the word is correctly parsed as ob-scūrus, rather than obs-cūrus, as has been proposed by E. Hamp (\"Some Italic and Celtic correspondences II,\" Zeitschrift für vergleichende Sprachforschung, 96. Band, 1. Heft [1982/83], pp. 98-99). While acknowledging this problem, M. de Vaan suggests a relationship with the bases of Latin scaevus \"left-hand\" and obscēnus, obscaenus \"ill-omened\" (see obscene ), though he admits that supporting cognates in other Indo-European languages are lacking ( Etymological Dictionary of Latin and the Other Italic Languages, Brill, 2008). Verb Middle English obscuren, borrowed from Anglo-French & Latin; Anglo-French obscurer, oscurir, borrowed from Latin obscūrāre \"to darken, eclipse, dim, conceal from knowledge, make difficult to comprehend,\" verbal derivative of obscūrus \"dim, dark, imperfectly known, concealed from knowledge, incomprehensible\" — more at obscure entry 1 Noun derivative of obscure entry 1"
  }, 
  {
    "definition": "a regularly interacting or interdependent group of items forming a unified whole", 
    "word": "system", 
    "diacritic": "ˈsi-stəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The car's engine was a very complicated ____.", 
    "etymology": "Late Latin systemat-, systema, from Greek systēmat-, systēma, from synistanai to combine, from syn- + histanai to cause to stand"
  }, 
  {
    "definition": "Having the power to affect or change someone or something.", 
    "word": "influential", 
    "diacritic": "ˌin-(ˌ)flü-ˈen(t)-shəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "Her speech was so _____ that it inspired many people to take action.", 
    "etymology": "Word History First Known Use Adjective 1570, in the meaning defined above Noun 1831, in the meaning defined above Time Traveler The first known use of influential was in 1570 See more words from the same year"
  }, 
  {
    "definition": "experiencing favorable circumstances or fortune", 
    "word": "lucky", 
    "diacritic": "ˈlə-kē", 
    "part_of_speech": "adjective", 
    "example_sentence": "She considered herself a _____ person for finding a $100 bill on the sidewalk.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 4 Time Traveler The first known use of lucky was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "to decrease the power or effectiveness of a character, skill, or weapon in a video game.", 
    "word": "nerfing", 
    "diacritic": "ˌnər-ˈfiŋ", 
    "part_of_speech": "verb", 
    "example_sentence": "The developers decided to _____ the character's damage output to create a more balanced gameplay experience.", 
    "etymology": "perhaps an expressive coinage Note: Sense 1 is alleged to have originated in the early years of the video game Ultima Online, released in September 1997, one of the earliest online role-playing games that could support thousands of participants. According to Raph Koster, the lead designer, \"… the term 'nerfing' entered online gaming vocabulary because of U[ltima]O[nline]. At some point, we reduced the power of swords in melee combat, and players started complaining that they were hitting each other with nerf swords\" (raphkoster.com/games/snippets/nerfing, accessed 10/12/2023). The \"nerf swords\" in question were play weapons with blades made of cell foam, first produced in 1988 by the toy and game manufacturer Parker Brothers. The Nerf brand, which by this time embraced a wide variety of toys, most notably foam dart blasters, began in 1969 with the Nerf Ball, marketed as \"the world's first indoor ball.\" The origin of nerf in this sense is not certain, though it is almost certainly not an acronym from \"non-expanding recreational foam\" (a creative backronym). The ball's principal originator, the toy and game developer Reyn Guyer, did not coin the name, but explained it as follows: \"It was after our line of foam products hit the market under the name NERF that we learned where the name came from. One of the people involved in promoting the line [at Parker Brothers] suggested naming it after the foam-padded roll bars on Jeeps, which off-roaders had dubbed 'NERF bars.' The name stuck\" (reynguyer.com/nerf.html, accessed 10/12/2023). There are two problems with this explanation. First, roll bars were first installed in the CJ-5 Jeep in the 1969 model year, and not provided with foam padding until the early 1970's. More significantly, however, nerf bar was never a name for a roll bar. The nerf bar, earlier nerfing bar (with sense 2 of the verb, \"to bump [another vehicle] in a race\") is described in an early reference as \"a special bumper contrivance both in the front and along the side of the [midget] racer near the rear wheels and around the tail piece. It is designed to keep rival car owners from crashing through the beautifully polished aluminum bodies, as well as to use as an offensive weapon if a slow car gets in the way\" ( Los Angeles Evening Citizen-News, June 17, 1941, p. 14). (More recently nerf bar refers to tubing mounted below the door of a pickup truck or SUV that is similar in function to a running board.) The nerf trail seems to end with the verb as defined in sense 2. The word is perhaps an expressive coinage; compare final [rf] in barf , scarf entry 3 , snarf , Scots swarf \"swoon,\" scurf ."
  }, 
  {
    "definition": "The use of warm, damp materials on the body to relieve discomfort.", 
    "word": "fomentation", 
    "diacritic": "ˌfō-mən-ˈtā-shən, -ˌmen-", 
    "part_of_speech": "noun", 
    "example_sentence": "After a long day of manual labor, she found relief from her aching muscles through the soothing application of _____ on her back.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1a Time Traveler The first known use of fomentation was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A two-wheeled vehicle designed for standing riders, featuring a narrow footboard between or on top of the wheels, an upright steering handle at the front, and propelled by pushing off the ground with one foot.", 
    "word": "scooter", 
    "diacritic": "ˈskü-tər", 
    "part_of_speech": "noun", 
    "example_sentence": "He quickly zipped past his friends on his new _____ at the park.", 
    "etymology": "Word History First Known Use 1912, in the meaning defined at sense 1a Time Traveler The first known use of scooter was in 1912 See more words from the same year"
  }, 
  {
    "definition": "A person or thing that acts as a model or representative example.", 
    "word": "exemplar", 
    "diacritic": "ig-ˈzem-ˌplär, -plər, eg-", 
    "part_of_speech": "noun", 
    "example_sentence": "The teacher used a famous painting as an _____ of creativity and technique for her art class.", 
    "etymology": "Middle English, from Latin, from exemplum example"
  }, 
  {
    "definition": "A woodwind instrument with a single reed, featuring a cylindrical body that widens at the bell, typically capable of producing notes from D below middle C to three and a half octaves higher.", 
    "word": "clarinet", 
    "diacritic": "ˌkler-ə-ˈnet, ˌkla-rə-; ˈkler-ə-nət, ˈkla-rə-", 
    "part_of_speech": "noun", 
    "example_sentence": "She played a beautiful melody on her _____ during the school concert.", 
    "etymology": "French clarinette , probably ultimately from Medieval Latin clarion-, clario"
  }, 
  {
    "definition": "A long, worm-shaped young stage of a butterfly or moth.", 
    "word": "caterpillar", 
    "diacritic": "ˈka-tər-ˌpi-lər, -tə-", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ crawled slowly along the leaf, munching on the greenery as it prepared to transform into a butterfly.", 
    "etymology": "Noun Middle English catyrpel , from Anglo-French *catepelose , literally, hairy cat"
  }, 
  {
    "definition": "to spend time in a slow or aimless manner; to procrastinate or hesitate.", 
    "word": "dillydally", 
    "diacritic": "ˈdi-lē-ˌda-lē", 
    "part_of_speech": "verb", 
    "example_sentence": "We didn't have time to _____ if we wanted to catch the train on time.", 
    "etymology": "reduplication of dally"
  }, 
  {
    "definition": "the collective group of deities worshipped by a particular culture or society", 
    "word": "pantheon", 
    "diacritic": "ˈpan(t)-thē-ˌän, -ən", 
    "part_of_speech": "noun", 
    "example_sentence": "The ancient Greeks believed in a diverse _____ of gods and goddesses, each representing different aspects of life and nature.", 
    "etymology": "Middle English Panteon , a temple at Rome, from Latin Pantheon , from Greek pantheion temple of all the gods, from neuter of pantheios of all gods, from pan- + theos god"
  }, 
  {
    "definition": "A small, round, savory bread that is cooked on a flat surface and typically cut in half and toasted before being served.", 
    "word": "crumpet", 
    "diacritic": "ˈkrəm-pət", 
    "part_of_speech": "noun", 
    "example_sentence": "She enjoyed her tea with a buttered _____ on the side.", 
    "etymology": "perhaps from Middle English crompid ( cake ) wafer, literally, curled-up cake, from crumped , past participle of crumpen to curl up, from crump, crumb crooked, from Old English crumb ; akin to Old High German krump crooked"
  }, 
  {
    "definition": "a location where financial assets and valuable resources are stored", 
    "word": "treasury", 
    "diacritic": "ˈtre-zh(ə-)rē", 
    "part_of_speech": "noun", 
    "example_sentence": "The country’s _____ is responsible for managing its finances and ensuring the security of its wealth.", 
    "etymology": "Middle English tresorie , from Anglo-French, from tresor treasure"
  }, 
  {
    "definition": "excessively proud or confident; overly self-important", 
    "word": "overweening", 
    "diacritic": "ˌō-vər-ˈwē-niŋ", 
    "part_of_speech": "adjective", 
    "example_sentence": "His _____ arrogance made it difficult for others to work with him effectively.", 
    "etymology": "Middle English overwening , present participle of overwenen to be arrogant, from over + wenen to ween"
  }, 
  {
    "definition": "Sticking out or extending beyond a surface or edge; bulging.", 
    "word": "prominent", 
    "diacritic": "ˈprä-mə-nənt, ˈpräm-nənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The rock had a _____ ledge that made it easy for climbers to rest during their ascent.", 
    "etymology": "Middle English promynent, borrowed from Latin prōminent-, prōminens \"projecting, standing out,\" from present participle of prōminēre \"to project beyond a surface, stick out, stick up,\" from prō- pro- entry 2 + -minēre, taken to mean \"stand out, rise above\" (unattested without a prefix) — more at minatory"
  }, 
  {
    "definition": "An opening in the surface of the Earth, another planet, or a moon that releases hot rock and steam, often in a molten state.", 
    "word": "volcano", 
    "diacritic": "väl-ˈkā-(ˌ)nō, vȯl-", 
    "part_of_speech": "noun", 
    "example_sentence": "The island was formed by the eruption of a _____ that spewed lava and ash into the sky.", 
    "etymology": "Italian or Spanish; Italian vulcano , from Spanish volcán , ultimately from Latin Volcanus Vulcan"
  }, 
  {
    "definition": "To cook food by placing it directly under a heat source, similar to grilling.", 
    "word": "broil", 
    "diacritic": "ˈbrȯi(-ə)l", 
    "part_of_speech": "verb", 
    "example_sentence": "To make a delicious steak, you can simply _____ it in the oven for a few minutes until it reaches your desired level of doneness.", 
    "etymology": "Verb (1) Middle English, from Anglo-French bruiller to burn, broil, modification of Latin ustulare to singe, from urere to burn Noun (1) noun derivative of broil entry 1 Verb (2) Middle English, from Anglo-French broiller to jumble, mix, from Vulgar Latin *brodiculare , from *brod- , of Germanic origin; akin to Old High German brod broth — more at broth Noun (2) noun derivative of broil entry 3"
  }, 
  {
    "definition": "A military member who is killed, injured, sick, captured, interned, or unaccounted for during action.", 
    "word": "casualty", 
    "diacritic": "ˈka-zhəl-tē, ˈkazh-wəl-, ˈka-zhə-wəl- ", 
    "part_of_speech": "noun", 
    "example_sentence": "The conflict resulted in a high number of _____, leaving many families devastated by the loss of their loved ones.", 
    "etymology": "see casual entry 1"
  }, 
  {
    "definition": "to express an opinion or belief; to suggest something is likely true", 
    "word": "daresay", 
    "diacritic": "ˌder-ˈsā", 
    "part_of_speech": "verb", 
    "example_sentence": "I would _____ that we will finish the project ahead of schedule.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at transitive sense Time Traveler The first known use of daresay was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "That which forces or strongly urges action; for example.", 
    "word": "compelling", 
    "diacritic": "kəm-ˈpe-liŋ", 
    "part_of_speech": "adjective", 
    "example_sentence": "The speaker presented a _____ argument that convinced everyone to support the new initiative.", 
    "etymology": "from present participle of compel"
  }, 
  {
    "definition": "similar to the character from the fairy tale; for example,", 
    "word": "cinderella", 
    "diacritic": "ˌsin-də-ˈre-lə", 
    "part_of_speech": "adjective", 
    "example_sentence": "After years of hard work, she finally got the promotion she deserved, transforming her from the office's overlooked employee to a _____ success story.", 
    "etymology": "after Cinderella , fairy-tale heroine who is used as a drudge by her stepmother but ends up married to a prince"
  }, 
  {
    "definition": "An assessment of the population and an evaluation of property that took place in ancient Rome.", 
    "word": "census", 
    "diacritic": "ˈsen(t)-səs", 
    "part_of_speech": "noun", 
    "example_sentence": "The government decided to _____ the population to better understand the distribution of resources in the empire.", 
    "etymology": "borrowed from Latin cēnsus , from cēnsēre \"to give as an opinion, assess, appraise, perform the duties of a censor\" + -tus , suffix of verbal action — more at censor entry 1"
  }, 
  {
    "definition": "A type of upright, short-legged bird that cannot fly and lives in water, belonging to the Spheniscidae family, primarily found in the southern hemisphere.", 
    "word": "penguin", 
    "diacritic": "ˈpen-gwən, ˈpeŋ-", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ waddled across the icy landscape, searching for fish in the cold waters.", 
    "etymology": "obsolete English penguin great auk, perhaps from Welsh pen gwyn white head (applied to the bird in winter plumage)"
  }, 
  {
    "definition": "A type of sugar made up of two smaller sugars, C12H22O11, found in milk. When broken down, it produces glucose and galactose, and it can also produce lactic acid during fermentation.", 
    "word": "lactose", 
    "diacritic": "ˈlak-ˌtōs, -ˌtōz", 
    "part_of_speech": "noun", 
    "example_sentence": "Many people who are intolerant to _____ experience digestive discomfort after consuming dairy products.", 
    "etymology": "International Scientific Vocabulary"
  }, 
  {
    "definition": "Making amends for a wrongdoing or harm done; a way to seek forgiveness or compensation.", 
    "word": "atonement", 
    "diacritic": "ə-ˈtōn-mənt", 
    "part_of_speech": "noun", 
    "example_sentence": "He sought _____ for his past mistakes by volunteering in the community and helping those in need.", 
    "etymology": "Word History Etymology see atone First Known Use 1513, in the meaning defined at sense 3 Time Traveler The first known use of atonement was in 1513 See more words from the same year"
  }, 
  {
    "definition": "The condition of being by oneself or away from others; isolation.", 
    "word": "solitude", 
    "diacritic": "ˈsä-lə-ˌtüd, -ˌtyüd", 
    "part_of_speech": "noun", 
    "example_sentence": "After a long week of social gatherings, she found comfort in the peacefulness of her _____ at home.", 
    "etymology": "Middle English, from Middle French & Latin; Middle French, from Latin solitudin-, solitudo , from solus"
  }, 
  {
    "definition": "no longer active or in operation", 
    "word": "extinct", 
    "diacritic": "ik-ˈstiŋ(k)t, ˈek-ˌstiŋ(k)t", 
    "part_of_speech": "adjective", 
    "example_sentence": "The once-thriving factory is now _____, leaving behind only memories of its bustling past.", 
    "etymology": "Adjective Middle English, from Latin exstinctus , past participle of exstinguere"
  }, 
  {
    "definition": "The act or process of becoming smaller or tighter.", 
    "word": "contraction", 
    "diacritic": "kən-ˈtrak-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ of the rubber band made it easier to fit in the small box.", 
    "etymology": "Middle English contraccioun, borrowed from Anglo-French & Latin; Anglo-French contractiun, borrowed from Latin contractiōn-, contractiō \"drawing together, compression of language,\" from contrac-, variant stem of contrahere \"to draw together, reduce in size\" + -tiōn-, -tiō, suffix of verbal action — more at contract entry 2"
  }, 
  {
    "definition": "to show disrespect or disregard for something; to mock or scorn it.", 
    "word": "flout", 
    "diacritic": "ˈflau̇t", 
    "part_of_speech": "verb", 
    "example_sentence": "Many students choose to _____ the rules by arriving late to class without any consequences.", 
    "etymology": "Verb probably from Middle English flouten to play the flute, from floute flute Noun derivative of flout entry 1"
  }, 
  {
    "definition": "Pertaining to, connected with, or created using a specific rhythmic structure.", 
    "word": "metrical", 
    "diacritic": "ˈme-tri-kəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The poet carefully crafted each line to ensure that it followed a strict _____ pattern.", 
    "etymology": "metrical going back to Middle English metricalle, from Latin metricus \"relating to or composed in meter\" + Middle English -alle -al entry 1 ; metric borrowed from Latin metricus \"relating to or composed in meter, rhythmic (of the pulse),\" borrowed from Greek metrikós \"by measurement, relating to meter in verse,\" from métron \"measure, space measure, poetic meter\" + -ikos -ic entry 1 — more at meter entry 1"
  }, 
  {
    "definition": "The soft light in the sky that occurs before sunrise or after sunset, created by sunlight scattering through the atmosphere and its particles.", 
    "word": "twilight", 
    "diacritic": "ˈtwī-ˌlīt", 
    "part_of_speech": "noun", 
    "example_sentence": "The park looked enchanting as the colors of the sky shifted during _____, casting a gentle glow over the trees.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1 Time Traveler The first known use of twilight was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "helping to enhance or finalize something by adding to it", 
    "word": "complementary", 
    "diacritic": "ˌkäm-plə-ˈmen-t(ə-)rē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The chef added a _____ flavor of lemon to the dish to enhance its taste.", 
    "etymology": "complement entry 1 + -ary entry 2 , probably in part after French complémentaire"
  }, 
  {
    "definition": "A team sport played with an oval ball, where the game flows continuously without breaks or player changes. Players cannot interfere with opponents or pass the ball forward; instead, they focus on kicking, dribbling, passing sideways, and tackling.", 
    "word": "rugby", 
    "diacritic": "ˈrəg-bē", 
    "part_of_speech": "noun", 
    "example_sentence": "After school, the boys gathered at the park to play _____ and enjoy the fresh air.", 
    "etymology": "Rugby School, Rugby, England"
  }, 
  {
    "definition": "The ability or tendency to remain calm and composed while waiting or dealing with difficulties.", 
    "word": "patience", 
    "diacritic": "ˈpā-shən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "She showed great _____ while waiting for the bus in the pouring rain.", 
    "etymology": "see patient entry 1"
  }, 
  {
    "definition": "A herb from Europe, belonging to the carrot family, known scientifically as Apium graveolens.", 
    "word": "celery", 
    "diacritic": "ˈse-lə-rē, ˈsel-rē", 
    "part_of_speech": "noun", 
    "example_sentence": "I added chopped _____ to the salad for a refreshing crunch.", 
    "etymology": "borrowed from French céleri (17th-century celeris, sceleri , Middle French scellerin ), borrowed from an Upper Italian form (as Ligurian sèlarʼu , Lombard sèleri ), altered from Vulgar Latin *selinum (Late Latin selīnon ), borrowed from Greek sélīnon , perhaps from a pre-Greek substratal language"
  }, 
  {
    "definition": "the diligent and accountable oversight of something that has been entrusted to someone’s care", 
    "word": "stewardship", 
    "diacritic": "ˈstü-ərd-ˌship, ˈstyü-; ˈst(y)u̇rd-", 
    "part_of_speech": "noun", 
    "example_sentence": "The community praised her for her exceptional _____ of the local park, ensuring it remained a beautiful space for everyone to enjoy.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 2 Time Traveler The first known use of stewardship was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "To shape or define something in a specific way.", 
    "word": "formalize", 
    "diacritic": "ˈfȯr-mə-ˌlīz", 
    "part_of_speech": "verb", 
    "example_sentence": "The committee decided to _____ the rules to ensure everyone understood the guidelines clearly.", 
    "etymology": "Word History First Known Use 1646, in the meaning defined at sense 1 Time Traveler The first known use of formalize was in 1646 See more words from the same year"
  }, 
  {
    "definition": "The action or occurrence of struggling or wrestling.", 
    "word": "grapple", 
    "diacritic": "ˈgra-pəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The two competitors engaged in a fierce _____ for the championship title.", 
    "etymology": "Noun and Verb Middle English grappel grappling hook, from Old French *grappelle , diminutive of grape hook — more at grape"
  }, 
  {
    "definition": "The sound made by a sheep or goat.", 
    "word": "bleat", 
    "diacritic": "ˈblēt", 
    "part_of_speech": "noun", 
    "example_sentence": "The soft _____ of the sheep echoed across the quiet pasture.", 
    "etymology": "Verb Middle English bleten , from Old English blǣtan ; akin to Latin flēre to weep, Old English bellan to roar — more at bellow"
  }, 
  {
    "definition": "The state of having a range of different elements, such as forms, types, or ideas; a mixture of various characteristics.", 
    "word": "diversity", 
    "diacritic": "də-ˈvər-sə-tē, dī-", 
    "part_of_speech": "noun", 
    "example_sentence": "The city's _____ is reflected in its vibrant neighborhoods, each showcasing unique cultures and traditions.", 
    "etymology": "Middle English dyversite \"difference, separateness, variety,\" borrowed from Anglo-French & Latin; Anglo-French diverseté, diversité, borrowed from Latin dīversitāt-, dīversitās \"separateness, condition of being different, difference of opinion,\" from dīversus \"turned in different directions, situated apart, differing\" + -itāt-, -itās -ity — more at diverse"
  }, 
  {
    "definition": "a specific arrangement or design of elements in a space, often used to enhance visual appeal or create a certain atmosphere.", 
    "word": "decor", 
    "diacritic": "dā-ˈkȯr, di-ˈkȯr, ˈde-ˌkȯr, ˈdā-ˌkȯr", 
    "part_of_speech": "noun", 
    "example_sentence": "The restaurant's _____ was elegantly designed, featuring soft lighting and beautiful artwork that created a cozy atmosphere.", 
    "etymology": "French décor , from décorer to decorate, from Latin decorare"
  }, 
  {
    "definition": "A series of low hills located at the base of taller mountains.", 
    "word": "foothills", 
    "diacritic": "ˈfu̇t-ˌhilz", 
    "part_of_speech": "noun", 
    "example_sentence": "The hikers began their journey through the lush green _____ before ascending the steep mountain trail.", 
    "etymology": "Word History First Known Use 1788, in the meaning defined at sense 1 Time Traveler The first known use of foothill was in 1788 See more words from the same year"
  }, 
  {
    "definition": "a means of reaching a destination; a path or route.", 
    "word": "avenue", 
    "diacritic": "ˈa-və-ˌnü, -ˌnyü", 
    "part_of_speech": "noun", 
    "example_sentence": "She took a different _____ to avoid the traffic jam on her way to work.", 
    "etymology": "Middle French, from feminine of avenu , past participle of avenir to come to, from Latin advenire — more at adventure"
  }, 
  {
    "definition": "A long-distance race typically covering 26 miles and 385 yards (42.2 kilometers) on a public route.", 
    "word": "marathon", 
    "diacritic": "ˈmer-ə-ˌthän, ˈma-rə-", 
    "part_of_speech": "noun", 
    "example_sentence": "She trained for months to prepare for the _____ race in her city.", 
    "etymology": "Marathon , Greece, site of a victory of Greeks over Persians in 490 b.c. , the news of which was carried to Athens by a long-distance runner"
  }, 
  {
    "definition": "A professional with expertise in the technical aspects of a particular field or job.", 
    "word": "technician", 
    "diacritic": "tek-ˈni-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ carefully diagnosed the issue with the computer and efficiently repaired it.", 
    "etymology": "techn(ic) or techn(ical) entry 1 + -ician"
  }, 
  {
    "definition": "people of low social status or bad reputation", 
    "word": "riffraff", 
    "diacritic": "ˈrif-ˌraf", 
    "part_of_speech": "noun", 
    "example_sentence": "The wealthy neighborhood had strict rules against allowing any ____ to enter the exclusive community events.", 
    "etymology": "Middle English ryffe raffe , from rif and raf every single one, from Anglo-French rif e raf altogether"
  }, 
  {
    "definition": "a failure to include or complete something", 
    "word": "omission", 
    "diacritic": "ō-ˈmi-shən, ə-", 
    "part_of_speech": "noun", 
    "example_sentence": "The report was incomplete due to the _____ of several important facts.", 
    "etymology": "Middle English omissioun , from Anglo-French omission , from Late Latin omission-, omissio , from Latin omittere"
  }, 
  {
    "definition": "Relating to a miracle; extraordinary and beyond natural explanation.", 
    "word": "miraculous", 
    "diacritic": "mə-ˈra-kyə-ləs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The team made a _____ recovery from a seemingly insurmountable deficit to win the championship.", 
    "etymology": "Middle English myraclous, borrowed from Middle French miraculeus, borrowed from Medieval Latin mīrāculōsus, from Late Latin mīrāculum miracle + Latin -ōsus -ose entry 1"
  }, 
  {
    "definition": "A type of plant belonging to the Cactaceae family, characterized by thick, fleshy stems and branches covered in scales or spines instead of leaves, commonly found in arid regions like deserts.", 
    "word": "cactus", 
    "diacritic": "ˈkak-təs", 
    "part_of_speech": "noun", 
    "example_sentence": "The desert was filled with various types of _____, each one adapted to survive in the harsh conditions.", 
    "etymology": "New Latin, genus name, from Latin, cardoon, from Greek kaktos"
  }, 
  {
    "definition": "A person who produces or sells eyewear and optical devices.", 
    "word": "optician", 
    "diacritic": "äp-ˈti-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "After realizing her glasses were scratched, Sarah decided to visit the _____ to get a new pair.", 
    "etymology": "Word History First Known Use 1737, in the meaning defined at sense 1 Time Traveler The first known use of optician was in 1737 See more words from the same year"
  }, 
  {
    "definition": "Having long, rough, or tangled hair.", 
    "word": "shaggy", 
    "diacritic": "ˈsha-gē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The dog looked adorable with its _____ fur, making it seem extra cuddly and inviting.", 
    "etymology": "Word History First Known Use 1581, in the meaning defined at sense 1a Time Traveler The first known use of shaggy was in 1581 See more words from the same year"
  }, 
  {
    "definition": "A breed of large dogs originating from Scotland, available in both rough and smooth coat types, characterized by upright ears and a long snout.", 
    "word": "collie", 
    "diacritic": "ˈkä-lē", 
    "part_of_speech": "noun", 
    "example_sentence": "The child was delighted when her parents surprised her with a playful _____ that she had always wanted.", 
    "etymology": "probably from English dialect colly black"
  }, 
  {
    "definition": "A musical device that adds a buzzing sound to the voice, typically made of a small metal or plastic tube with a side opening covered by a delicate membrane.", 
    "word": "kazoo", 
    "diacritic": "kə-ˈzü", 
    "part_of_speech": "noun", 
    "example_sentence": "The children giggled as they took turns playing the _____ during the talent show.", 
    "etymology": "Noun (1) imitative Noun (2) origin unknown"
  }, 
  {
    "definition": "A small ax with a short handle, typically featuring a hammerhead, designed for use with one hand.", 
    "word": "hatchet", 
    "diacritic": "ˈha-chət", 
    "part_of_speech": "noun", 
    "example_sentence": "He used a _____ to chop kindling for the fire.", 
    "etymology": "Middle English hachet , from Anglo-French hachette , diminutive of hache battle-ax — more at hash"
  }, 
  {
    "definition": "A long, narrow fruit from tropical regions, featuring soft, mushy flesh covered by a tender, typically yellow skin.", 
    "word": "banana", 
    "diacritic": "bə-ˈna-nə", 
    "part_of_speech": "noun", 
    "example_sentence": "I like to have a _____ with my breakfast for a healthy boost of energy.", 
    "etymology": "Spanish or Portuguese; Spanish, from Portuguese, of African origin; akin to Wolof banaana banana"
  }, 
  {
    "definition": "to persuade or attract someone using gentle talk or praise", 
    "word": "wheedle", 
    "diacritic": "ˈ(h)wē-dᵊl", 
    "part_of_speech": "verb", 
    "example_sentence": "She tried to _____ her parents into letting her stay up late by complimenting their cooking.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "to legally transfer ownership of a freehold property.", 
    "word": "seize", 
    "diacritic": "ˈsēz", 
    "part_of_speech": "verb", 
    "example_sentence": "The court decided to _____ the property due to the owner's failure to pay taxes.", 
    "etymology": "Middle English saisen , from Anglo-French seisir , from Medieval Latin sacire , of Germanic origin; perhaps akin to Old High German sezzen to set — more at set"
  }, 
  {
    "definition": "A flat, slender tool primarily designed for spreading, mixing soft materials, scooping, or lifting.", 
    "word": "spatula", 
    "diacritic": "ˈspa-chə-lə, ˈspach-lə", 
    "part_of_speech": "noun", 
    "example_sentence": "She used a _____ to spread the frosting evenly over the cake.", 
    "etymology": "Late Latin, spoon, spatula — more at epaulet"
  }, 
  {
    "definition": "pertaining to or similar to a garden", 
    "word": "gardenesque", 
    "diacritic": "¦gärdᵊn¦esk", 
    "part_of_speech": "adjective", 
    "example_sentence": "The landscape was filled with _____ features, including vibrant flowers and neatly trimmed hedges that created a picturesque setting.", 
    "etymology": ""
  }, 
  {
    "definition": "appropriate for a specific use or intention", 
    "word": "suitable", 
    "diacritic": "ˈsü-tə-bəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The dress she chose for the wedding was not only beautiful but also very _____.", 
    "etymology": "Word History First Known Use 1563, in the meaning defined at sense 2 Time Traveler The first known use of suitable was in 1563 See more words from the same year"
  }, 
  {
    "definition": "to carry out a robbery using weapons", 
    "word": "heist", 
    "diacritic": "ˈhīst", 
    "part_of_speech": "verb", 
    "example_sentence": "The gang plan to _____ a bank in broad daylight, using masks and guns to intimidate the staff.", 
    "etymology": "Verb variant of hoist entry 1"
  }, 
  {
    "definition": "An attachment added to the end of a word, base, or phrase; see also prefix.", 
    "word": "suffix", 
    "diacritic": "ˈsə-fiks", 
    "part_of_speech": "noun", 
    "example_sentence": "In the word \"happiness,\" the part \"ness\" is a _____ that transforms the adjective \"happy\" into a noun.", 
    "etymology": "Noun borrowed from New Latin suffīxum, noun derivative from neuter of Latin suffīxus, past participle of suffīgere \"to fasten from below, attach to the top of,\" from suf-, assimilated form of sub- sub- + fīgere \"to drive in, insert, fasten\" — more at fix entry 1 Verb derivative of suffix entry 1"
  }, 
  {
    "definition": "A device that moves objects upward or lifts them.", 
    "word": "elevator", 
    "diacritic": "ˈe-lə-ˌvā-tər", 
    "part_of_speech": "noun", 
    "example_sentence": "I took the _____ to the top floor of the building to enjoy the view.", 
    "etymology": "Word History First Known Use 1646, in the meaning defined at sense 1 Time Traveler The first known use of elevator was in 1646 See more words from the same year"
  }, 
  {
    "definition": "Communicating thoughts and emotions openly and truthfully.", 
    "word": "candid", 
    "diacritic": "ˈkan-dəd", 
    "part_of_speech": "adjective", 
    "example_sentence": "She spoke _____ about her feelings regarding the situation, ensuring everyone understood her perspective.", 
    "etymology": "Adjective borrowed from Middle French & Latin; Middle French candide \"brilliant, favorably disposed,\" borrowed from Latin candidus \"bright, white, light-colored, clear (of liquids), favorable, kind,\" adjective derivative corresponding to candēre \"to shine, be white, gleam,\" going back to Indo-European *(s)kn̥d-C-, zero-grade stative derivative of *(s)kend- \"shine/make shine,\" whence Latin -cendere in accendere, incendere \"to set on fire, kindle\"; in nominal derivatives Middle Welsh cann \"white, shining,\" Middle Breton cann \"full moon,\" Sanskrit candráḥ, ścandráḥ \"bright, the moon\" Noun derivative of candid entry 1"
  }, 
  {
    "definition": "In a state of sadness and gloominess.", 
    "word": "morose", 
    "diacritic": "mə-ˈrōs, mȯ-", 
    "part_of_speech": "adjective", 
    "example_sentence": "After receiving the bad news, she walked around _____ and didn't say a word to anyone.", 
    "etymology": "Latin morosus , literally, capricious, from mor-, mos will"
  }, 
  {
    "definition": "A person who is aged 13 to 19 years.", 
    "word": "teenagers", 
    "diacritic": "ˈtēn-ˌā-jər", 
    "part_of_speech": "noun", 
    "example_sentence": "During the summer, many _____ enjoy hanging out at the local park with their friends.", 
    "etymology": "Word History First Known Use 1913, in the meaning defined above Time Traveler The first known use of teenager was in 1913 See more words from the same year"
  }, 
  {
    "definition": "A type of vitamin B known as folic acid.", 
    "word": "folate", 
    "diacritic": "ˈfō-ˌlāt", 
    "part_of_speech": "noun", 
    "example_sentence": "Eating leafy green vegetables is a great way to increase your intake of _____.", 
    "etymology": "Word History First Known Use 1944, in the meaning defined above Time Traveler The first known use of folate was in 1944 See more words from the same year"
  }, 
  {
    "definition": "A type of horse race that takes place every year, typically featuring only horses that are three years old.", 
    "word": "derby", 
    "diacritic": "ˈdər-bē", 
    "part_of_speech": "noun", 
    "example_sentence": "Every year, fans eagerly await the prestigious _____ that showcases the best young thoroughbreds in the country.", 
    "etymology": "Edward Stanley †1834, 12th earl of Derby"
  }, 
  {
    "definition": "An item, often a decorative piece, that is seen as unusual, uncommon, or interesting.", 
    "word": "curio", 
    "diacritic": "ˈkyu̇r-ē-ˌō, ˈkyər-", 
    "part_of_speech": "noun", 
    "example_sentence": "She displayed her collection of _____ on the shelf, each piece telling a unique story.", 
    "etymology": "short for curiosity"
  }, 
  {
    "definition": "The state of being small or unimportant in strength, size, or significance; feeble.", 
    "word": "puniness", 
    "diacritic": "ˈpyü-nē-nəs", 
    "part_of_speech": "noun", 
    "example_sentence": "Despite its _____, the little plant managed to survive against all odds.", 
    "etymology": "Anglo-French puisné younger, weakly, literally, born afterward, from puis afterward + né born"
  }, 
  {
    "definition": "The characteristic or condition of being able to stretch and return to its original shape.", 
    "word": "elasticity", 
    "diacritic": "i-ˌla-ˈsti-sə-tē, ˌē-ˌla-, -ˈti-stē", 
    "part_of_speech": "noun", 
    "example_sentence": "The rubber band's _____ allows it to stretch when pulled and return to its original form when released.", 
    "etymology": "Word History First Known Use 1664, in the meaning defined at sense 1 Time Traveler The first known use of elasticity was in 1664 See more words from the same year"
  }, 
  {
    "definition": "to create or plan something, often using cleverness or skill; to scheme.", 
    "word": "compass", 
    "diacritic": "ˈkəm-pəs, ˈkäm-", 
    "part_of_speech": "verb", 
    "example_sentence": "She managed to _____ a solution to the problem that satisfied everyone involved.", 
    "etymology": "Verb and Noun Middle English, from Anglo-French cumpasser to measure, from Vulgar Latin *compassare to pace off, from Latin com- + passus pace"
  }, 
  {
    "definition": "a time that has long since passed", 
    "word": "yore", 
    "diacritic": "ˈyȯr", 
    "part_of_speech": "noun", 
    "example_sentence": "In the stories of _____, knights and dragons captured the imagination of young and old alike.", 
    "etymology": "Middle English, from yore , adverb, long ago, from Old English gēara , from gēar year — more at year"
  }, 
  {
    "definition": "A sport that involves quickly and skillfully moving over obstacles in the environment by running, climbing, and jumping.", 
    "word": "parkour", 
    "diacritic": "pär-ˈku̇r, ˈpär-ˌku̇r", 
    "part_of_speech": "noun", 
    "example_sentence": "He amazed everyone with his ability to perform incredible stunts while practicing _____.", 
    "etymology": "French, alteration of parcours course, route, from Medieval Latin percursus , from Latin percurrere to run through, from per- + currere to run"
  }, 
  {
    "definition": "A phrase used to show joyful excitement or victory.", 
    "word": "yippee", 
    "diacritic": "ˈyi-pē", 
    "part_of_speech": "interjection", 
    "example_sentence": "When she found out she had won the contest, she jumped up and shouted, \"_____!", 
    "etymology": "Word History First Known Use 1906, in the meaning defined above Time Traveler The first known use of yippee was in 1906 See more words from the same year"
  }, 
  {
    "definition": "consisting of multiple different types or kinds; not just one.", 
    "word": "various", 
    "diacritic": "ˈver-ē-əs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The store offered _____ types of fruits, including apples, bananas, and exotic berries.", 
    "etymology": "Adjective Middle English, from Latin varius \"having contrasting colors, of different kinds, changeable\" (of uncertain origin) + Middle English -ous, -os -ous"
  }, 
  {
    "definition": "To work together with others or to align actions with someone else.", 
    "word": "cooperate", 
    "diacritic": "kō-ˈä-pə-ˌrāt", 
    "part_of_speech": "verb", 
    "example_sentence": "In order to complete the project successfully, we need to have good _____ among all team members.", 
    "etymology": "Late Latin cooperatus , past participle of cooperari , from Latin co- + operari to work — more at operate"
  }, 
  {
    "definition": "able to catch fire and burn", 
    "word": "combustible", 
    "diacritic": "kəm-ˈbə-stə-bəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The factory stores several _____ materials, so safety precautions must be strictly followed.", 
    "etymology": "borrowed from Medieval Latin combustibilis, from Latin combustus (past participle of combūrere \"to destroy with fire, combust \") + -ibilis -ible"
  }, 
  {
    "definition": "Having or displaying a desire to harm or annoy others; intentionally cruel.", 
    "word": "spiteful", 
    "diacritic": "ˈspīt-fəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "She made a _____ remark that hurt his feelings, even though she knew it would upset him.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined above Time Traveler The first known use of spiteful was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "to reach out to someone with a request or appeal", 
    "word": "solicit", 
    "diacritic": "sə-ˈli-sət", 
    "part_of_speech": "verb", 
    "example_sentence": "The charity organization decided to _____ donations from the local community to support their cause.", 
    "etymology": "Middle English, to disturb, promote, from Anglo-French solliciter , from Latin sollicitare to disturb, from sollicitus anxious, from sollus whole (from Oscan; akin to Greek holos whole) + citus , past participle of ciēre to move — more at safe , -kinesis"
  }, 
  {
    "definition": "A cowboy from the grasslands of South America.", 
    "word": "gaucho", 
    "diacritic": "ˈgau̇-(ˌ)chō", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ rode across the vast plains, expertly herding cattle and showcasing his skills with a lasso.", 
    "etymology": "American Spanish"
  }, 
  {
    "definition": "Pertaining to or derived from a module or modulus.", 
    "word": "modular", 
    "diacritic": "ˈmä-jə-lər", 
    "part_of_speech": "adjective", 
    "example_sentence": "The designer used a _____ approach to create a flexible living space that could be easily reconfigured.", 
    "etymology": "Word History First Known Use 1815, in the meaning defined at sense 1 Time Traveler The first known use of modular was in 1815 See more words from the same year"
  }, 
  {
    "definition": "an elderly man; see also \"gammer.\"", 
    "word": "gaffer", 
    "diacritic": "ˈga-fər", 
    "part_of_speech": "noun", 
    "example_sentence": "The children enjoyed listening to the stories shared by their wise old _____ sitting by the fire.", 
    "etymology": "phonetic reduction of godfather entry 1 (with initial vowel perhaps from grandfather entry 1 )"
  }, 
  {
    "definition": "An inheritance of items or money that a deceased person leaves to someone in their will.", 
    "word": "legacy", 
    "diacritic": "ˈle-gə-sē", 
    "part_of_speech": "noun", 
    "example_sentence": "After her grandmother passed away, she discovered that her _____ included a beautiful collection of antique jewelry.", 
    "etymology": "Noun Middle English legacie office of a legate, bequest, from Anglo-French or Medieval Latin; Anglo-French, office of a legate, from Medieval Latin legatia , from Latin legatus Adjective from attributive use of legacy entry 1"
  }, 
  {
    "definition": "To lessen intensity or severity; to adjust or temper.", 
    "word": "modify", 
    "diacritic": "ˈmä-də-ˌfī", 
    "part_of_speech": "verb", 
    "example_sentence": "The teacher decided to _____ the assignment to make it more manageable for the students.", 
    "etymology": "Middle English modifien , from Anglo-French modifier , from Latin modificare to measure, moderate, from modus"
  }, 
  {
    "definition": "Twisted and marked by bumps or knots; rough and knotted in texture.", 
    "word": "gnarled", 
    "diacritic": "ˈnär(-ə)ld", 
    "part_of_speech": "adjective", 
    "example_sentence": "The old tree had _____ branches that twisted in all directions, giving it a unique character.", 
    "etymology": "probably alteration of knurled"
  }, 
  {
    "definition": "to give something as a present or contribution", 
    "word": "donate", 
    "diacritic": "ˈdō-ˌnāt", 
    "part_of_speech": "verb", 
    "example_sentence": "She decided to _____ her old clothes to the local shelter to help those in need.", 
    "etymology": "back-formation from donation"
  }, 
  {
    "definition": "Filled with sympathy and kindness.", 
    "word": "pitiful", 
    "diacritic": "ˈpi-ti-fəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "She spoke to the stray dog in a _____ tone, hoping to comfort it.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1 Time Traveler The first known use of pitiful was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "The section of a sword or foil blade located between the midpoint and the tip.", 
    "word": "foible", 
    "diacritic": "ˈfȯi-bəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The skilled fencer expertly manipulated the blade's _____ to execute a precise thrust against his opponent.", 
    "etymology": "obsolete French (now faible ), from obsolete foible weak, from Old French feble feeble"
  }, 
  {
    "definition": "to move or travel through or across something", 
    "word": "traverse", 
    "diacritic": "trə-ˈvərs also tra-ˈvərs or ˈtra-(ˌ)vərs", 
    "part_of_speech": "verb", 
    "example_sentence": "We decided to _____ the dense forest to reach the hidden waterfall on the other side.", 
    "etymology": "Verb Middle English, from Anglo-French traverser , from Late Latin transversare , from Latin transversus Noun Middle English travers , from Anglo-French travers (as in a travers, de travers across), from Latin transversum (as in in transversum set crosswise), neuter of transversus lying across; senses 5–9 in part from traverse entry 1 — more at transverse entry 1"
  }, 
  {
    "definition": "showing or marked by great wealth and luxury; lavish.", 
    "word": "opulent", 
    "diacritic": "ˈä-pyə-lənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The mansion was decorated in an _____ style, featuring gold fixtures and extravagant furnishings.", 
    "etymology": "borrowed from Middle French & Latin; Middle French, borrowed from Latin opulentus \"abounding in resources, wealthy,\" from op-, *ops \"power, ability, wealth\" + -ulentus \"having in quantity, full of\" (probably dissimilated from *-o-u̯ent-os, with Indo-European *-u̯ent-, suffix of possession) — more at opus"
  }, 
  {
    "definition": "A type of hazel tree found in Europe and Asia, specifically Corylus avellana or C. maxima.", 
    "word": "filbert", 
    "diacritic": "ˈfil-bərt", 
    "part_of_speech": "noun", 
    "example_sentence": "The dessert was garnished with toasted nuts, including some deliciously crunchy _____.", 
    "etymology": "Middle English, from Anglo-French philber , from St. Philibert †684 Frankish abbot whose feast day falls in the nutting season"
  }, 
  {
    "definition": "a man who is married; a spouse.", 
    "word": "mister", 
    "diacritic": "ˈmi-stər, ˌmi-stər", 
    "part_of_speech": "noun", 
    "example_sentence": "She introduced her husband as her _____ at the family gathering.", 
    "etymology": "Noun (1) alteration of master entry 1 Noun (2) mist entry 2 + -er entry 2"
  }, 
  {
    "definition": "Feeling anxious or fearful about what is to come; showing concern or worry about the future.", 
    "word": "apprehensive", 
    "diacritic": "ˌa-pri-ˈhen(t)-siv", 
    "part_of_speech": "adjective", 
    "example_sentence": "She felt _____ about starting her new job, unsure of what to expect from her coworkers and the work environment.", 
    "etymology": "see apprehension"
  }, 
  {
    "definition": "to look over carefully and thoughtfully; to analyze closely", 
    "word": "peruse", 
    "diacritic": "pə-ˈrüz", 
    "part_of_speech": "verb", 
    "example_sentence": "Before making a decision, she decided to _____ the contract one last time to ensure she understood all the terms.", 
    "etymology": "Middle English, to use up, deal with in sequence, from Latin per- thoroughly + Middle English usen to use"
  }, 
  {
    "definition": "to terminate someone's employment", 
    "word": "cashier", 
    "diacritic": "ka-ˈshir, kə-", 
    "part_of_speech": "verb", 
    "example_sentence": "The company had to _____ several employees due to budget cuts.", 
    "etymology": "Verb Dutch casseren , from Middle French casser to discharge, annul — more at quash Noun Dutch or Middle French; Dutch kassier , from Middle French cassier , from casse money box"
  }, 
  {
    "definition": "Practically completely; close to total.", 
    "word": "virtually", 
    "diacritic": "ˈvər-chə-wə-lē, -chə-lē; ˈvərch-wə-lē", 
    "part_of_speech": "adverb", 
    "example_sentence": "The project is _____ finished, with only a few minor details left to complete.", 
    "etymology": "Word History First Known Use circa 1600, in the meaning defined at sense 1b Time Traveler The first known use of virtually was circa 1600 See more words from the same year"
  }, 
  {
    "definition": "Selected or determined without a specific reason or plan, often appearing random or impulsive.", 
    "word": "arbitrary", 
    "diacritic": "ˈär-bə-ˌtrer-ē, -ˌtre-rē", 
    "part_of_speech": "adjective", 
    "example_sentence": "She made her decision _____, choosing a color without considering any of the options carefully.", 
    "etymology": "Middle English, \"depending on individual discretion,\" borrowed from Anglo-French & Latin; Anglo-French arbitraire, arbitrarie \"relating to arbitration,\" borrowed from Latin arbitrārius \"relating to or depending on the discretion of an arbiter,\" from arbitr-, arbiter arbiter + -ārius -ary entry 2"
  }, 
  {
    "definition": "a confidential gathering or hidden meeting.", 
    "word": "conclave", 
    "diacritic": "ˈkän-ˌklāv", 
    "part_of_speech": "noun", 
    "example_sentence": "The leaders of the organization met in a secret _____ to discuss their future plans away from public scrutiny.", 
    "etymology": "Middle English, from Middle French or Medieval Latin; Middle French, from Medieval Latin, from Latin, room that can be locked up, from com- + clavis key — more at clavicle"
  }, 
  {
    "definition": "Having a lot of wealth or resources; rich.", 
    "word": "affluent", 
    "diacritic": "ˈa-(ˌ)flü-ənt also a-ˈflü- or ə-", 
    "part_of_speech": "adjective", 
    "example_sentence": "The neighborhood is known for its _____ residents who enjoy luxurious homes and upscale amenities.", 
    "etymology": "Adjective Middle English, \"flowing in abundance, copious,\" borrowed from Latin affluent-, affluens \"flowing with, abundant,\" present participle of affluere \"to flow in, come streaming along, be abundantly present,\" from ad- ad- + fluere \"to flow, run\" — more at fluid entry 1 Noun borrowed from French, borrowed from Latin affluent-, affluens \"flowing in\" — more at affluent entry 1"
  }, 
  {
    "definition": "The act of enrolling in a school, particularly a college or university, or the condition of being enrolled.", 
    "word": "matriculation", 
    "diacritic": "mə-ˌtri-kyə-ˈlā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "After completing her high school education, she eagerly looked forward to her _____ at the university.", 
    "etymology": "Word History First Known Use 1557, in the meaning defined above Time Traveler The first known use of matriculation was in 1557 See more words from the same year"
  }, 
  {
    "definition": "An agent or factor that provokes or encourages action or response.", 
    "word": "stimuli", 
    "diacritic": "ˈstim-yə-ləs", 
    "part_of_speech": "noun", 
    "example_sentence": "Bright colors and loud noises are common _____ that can attract a child's attention.", 
    "etymology": "Word History Etymology Latin First Known Use 1684, in the meaning defined above Time Traveler The first known use of stimulus was in 1684 See more words from the same year"
  }, 
  {
    "definition": "A person who is against war.", 
    "word": "peacenik", 
    "diacritic": "ˈpēs-ˌnik", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ organized a rally to promote nonviolent solutions to conflicts around the world.", 
    "etymology": "Word History First Known Use 1962, in the meaning defined above Time Traveler The first known use of peacenik was in 1962 See more words from the same year"
  }, 
  {
    "definition": "A command or decree issued by someone in power, often made without consideration of fairness.", 
    "word": "fiat", 
    "diacritic": "ˈfē-ət", 
    "part_of_speech": "noun", 
    "example_sentence": "The new policy was implemented by _____ without any consultation with the affected communities.", 
    "etymology": "Latin, let it be done, 3rd singular present subjunctive of fieri to become, be done — more at be"
  }, 
  {
    "definition": "A big, circular tuba with a bell that can be adjusted and flares outward, similar to a helicon.", 
    "word": "sousaphone", 
    "diacritic": "ˈsü-zə-ˌfōn", 
    "part_of_speech": "noun", 
    "example_sentence": "The marching band featured a musician playing a _____, producing deep, resonant tones that filled the stadium.", 
    "etymology": "John Philip Sousa"
  }, 
  {
    "definition": "A type of fat made up of one glycerol molecule and three fatty acid molecules, commonly found in body fat and circulating in the bloodstream as part of lipoproteins.", 
    "word": "triglycerides", 
    "diacritic": "(ˌ)trī-ˈgli-sə-ˌrīd", 
    "part_of_speech": "noun", 
    "example_sentence": "High levels of _____ in the bloodstream can increase the risk of heart disease.", 
    "etymology": "International Scientific Vocabulary"
  }, 
  {
    "definition": "ready to be overly forgiving, generous, or accommodating; marked by a tendency to indulge.", 
    "word": "indulgent", 
    "diacritic": "in-ˈdəl-jənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "She was _____ towards her children, often letting them stay up late and eat dessert before dinner.", 
    "etymology": "Latin indulgent-, indulgens , present participle of indulgēre"
  }, 
  {
    "definition": "a mutual reliance between different bacterial strains to fulfill their nutritional requirements", 
    "word": "syntrophism", 
    "diacritic": "ˈsin-trə-ˌfiz-əm", 
    "part_of_speech": "noun", 
    "example_sentence": "In the complex ecosystem of the human gut, various bacteria engage in _____ to ensure they all receive the nutrients they need to thrive.", 
    "etymology": ""
  }, 
  {
    "definition": "An individual who has retired from their career but is allowed to keep an honorary title reflecting their most recent position.", 
    "word": "emeritus", 
    "diacritic": "i-ˈmer-ə-təs", 
    "part_of_speech": "noun", 
    "example_sentence": "After a long and distinguished career, the professor was honored with the title of _____, allowing him to continue his research and mentor students.", 
    "etymology": "Adjective Latin, past participle of emereri to serve out one's term, from e- + mereri, merēre to earn, deserve, serve — more at merit entry 1"
  }, 
  {
    "definition": "a customs office in Italy", 
    "word": "dogana", 
    "diacritic": "dōˈgänə", 
    "part_of_speech": "noun", 
    "example_sentence": "We had to stop at the _____ to declare our goods before continuing our journey through Italy.", 
    "etymology": "Italian, from Arabic dīwān , from Persian, account book"
  }, 
  {
    "definition": "A person who specializes in collecting and analyzing statistical data.", 
    "word": "statistician", 
    "diacritic": "ˌsta-tə-ˈsti-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ provided valuable insights into the survey results by analyzing the data meticulously.", 
    "etymology": "Word History First Known Use 1800, in the meaning defined above Time Traveler The first known use of statistician was in 1800 See more words from the same year"
  }, 
  {
    "definition": "the area around the waist or upper part of a dress", 
    "word": "corsage", 
    "diacritic": "kȯr-ˈsäzh", 
    "part_of_speech": "noun", 
    "example_sentence": "She chose a beautiful ribbon to tie around the _____ of her new evening gown.", 
    "etymology": "French, bust, bodice, from Old French, bust, from cors body, from Latin corpus"
  }, 
  {
    "definition": "A field of medicine focused on the treatment, growth, and health issues of newborn babies.", 
    "word": "neonatology", 
    "diacritic": "ˌnē-ə-nā-ˈtä-lə-jē", 
    "part_of_speech": "noun", 
    "example_sentence": "After her baby was born prematurely, she was referred to a specialist in _____ for specialized care and support.", 
    "etymology": "neonate or neonat(al) + -o- + -logy Note: Word introduced, along with neonatalogist, by American pediatrician Alexander J. Schaffer (1902-81) in Diseases of the Newborn (Philadelphia, 1960), p. 1."
  }, 
  {
    "definition": "happening or taking place once every seven years", 
    "word": "septennial", 
    "diacritic": "sep-ˈte-nē-əl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The community holds a festival _____ to celebrate their heritage and traditions.", 
    "etymology": "Late Latin septennium period of seven years, from Latin sept em + -ennium (as in biennium )"
  }, 
  {
    "definition": "A person who creates and sells medicines or chemical mixtures for health-related uses.", 
    "word": "apothecary", 
    "diacritic": "ə-ˈpä-thə-ˌker-ē", 
    "part_of_speech": "noun", 
    "example_sentence": "In the old town, the _____ was well-known for her remedies made from herbs and spices.", 
    "etymology": "Middle English apothecarie, apotecarie, pothecarie, borrowed from Anglo-French & Medieval Latin; Anglo-French apothecaire, ipotecaire, borrowed from Medieval Latin apotēcārius, apothēcārius, going back to Late Latin, \"shopkeeper,\" from Latin apothēca \"storeroom, storehouse, repository\" (borrowed from Greek apothḗkē, from apothē-, variant stem of apotithénai \"to put away, stow away\" —from apo- apo- + tithénai \"to put, place\"— + -kē, noun suffix) + -ārius -ary entry 1 — more at do entry 1"
  }, 
  {
    "definition": "Referring to items, like money or goods, that can be easily exchanged or substituted for one another in transactions or to settle debts.", 
    "word": "fungible", 
    "diacritic": "ˈfən-jə-bəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "In many economic transactions, cash is considered _____, as it can be easily exchanged for goods and services.", 
    "etymology": "Adjective and Noun New Latin fungibilis , from Latin fungi to perform — more at function"
  }, 
  {
    "definition": "A typically dome-shaped building, often resembling a mound, that functions as a shrine in Buddhism.", 
    "word": "stupa", 
    "diacritic": "ˈstü-pə", 
    "part_of_speech": "noun", 
    "example_sentence": "The ancient _____ stood majestically in the center of the temple complex, symbolizing the burial site of a revered Buddhist teacher.", 
    "etymology": "Sanskrit stūpa"
  }, 
  {
    "definition": "to scold harshly; to point out someone's mistakes or shortcomings.", 
    "word": "upbraid", 
    "diacritic": "ˌəp-ˈbrād", 
    "part_of_speech": "verb", 
    "example_sentence": "After realizing his mistake, she didn't hesitate to _____ him in front of the whole team.", 
    "etymology": "Middle English upbreyden , from Old English ūpbregdan , probably from ūp up + bregdan to snatch, move suddenly — more at braid"
  }, 
  {
    "definition": "A field of biology focused on the study of fish.", 
    "word": "ichthyology", 
    "diacritic": "ˌik-thē-ˈä-lə-jē", 
    "part_of_speech": "noun", 
    "example_sentence": "She decided to pursue a career in _____ because of her lifelong fascination with marine life and fish species.", 
    "etymology": "Word History First Known Use 1646, in the meaning defined above Time Traveler The first known use of ichthyology was in 1646 See more words from the same year"
  }, 
  {
    "definition": "Related to or similar to a farce; absurd and laughable.", 
    "word": "farcical", 
    "diacritic": "ˈfär-si-kəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The plot of the play was so _____ that the audience couldn't help but burst into laughter at the ridiculous situations.", 
    "etymology": "Word History First Known Use 1710, in the meaning defined at sense 1 Time Traveler The first known use of farcical was in 1710 See more words from the same year"
  }, 
  {
    "definition": "A person who executes or engages in an act, particularly one that is illegal or deceitful.", 
    "word": "perpetrator", 
    "diacritic": "ˈpər-pə-ˌtrāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The police arrested the _____ who had been responsible for the series of burglaries in the neighborhood.", 
    "etymology": "Latin perpetratus , past participle of perpetrare , from per- through + patrare to accomplish, from pater father — more at father"
  }, 
  {
    "definition": "a small potted plant, typically a tree, that has been carefully pruned and shaped to create an artistic appearance.", 
    "word": "bonsai", 
    "diacritic": "(ˌ)bōn-ˈsī", 
    "part_of_speech": "noun", 
    "example_sentence": "She has a beautiful _____ in her living room that she spends hours tending to and shaping.", 
    "etymology": "Japanese, literally, tray planting"
  }, 
  {
    "definition": "Composed of or relying on two separate legislative bodies.", 
    "word": "bicameral", 
    "diacritic": "(ˌ)bī-ˈkam-rəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The country has a _____ legislature, consisting of both a Senate and a House of Representatives.", 
    "etymology": "bi- entry 1 + Late Latin camera chamber — more at chamber"
  }, 
  {
    "definition": "empty of people and visitors; abandoned.", 
    "word": "desolate", 
    "diacritic": "ˈde-sə-lət", 
    "part_of_speech": "adjective", 
    "example_sentence": "The once-bustling town square now lay _____, with only the wind whistling through the empty streets.", 
    "etymology": "Adjective Middle English desolat, desolate \"deserted, lonely, distressed,\" borrowed from Latin dēsōlātus, past participle of dēsōlāre \"to leave all alone, forsake, empty of inhabitants,\" from dē- de- + -sōlāre, verbal derivative of sōlus \"lone, acting without a partner, lonely, deserted,\" of uncertain origin Verb Middle English desolaten (in past participle desolatid \"deserted, ruined\"), borrowed from Latin dēsōlātus, past participle of dēsōlāre \"to leave all alone, forsake, empty of inhabitants\" — more at desolate entry 1"
  }, 
  {
    "definition": "Crossing or positioned at 90-degree angles.", 
    "word": "orthogonal", 
    "diacritic": "ȯr-ˈthä-gə-nᵊl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The two lines on the graph are _____ to each other, forming a perfect right angle at their intersection.", 
    "etymology": "Middle French, from Latin orthogonius , from Greek orthogōnios , from orth- + gōnia angle — more at -gon"
  }, 
  {
    "definition": "In a way that hides or could hide the actual truth or reality.", 
    "word": "ostensibly", 
    "diacritic": "ä-ˈsten(t)-sə-blē", 
    "part_of_speech": "adverb", 
    "example_sentence": "She was _____ helping him with his project, but in reality, she was trying to take credit for his work.", 
    "etymology": "ostensible + -ly entry 2"
  }, 
  {
    "definition": "A painful or inflamed area around a fingernail or toenail.", 
    "word": "agnail", 
    "diacritic": "ˈag-ˌnāl", 
    "part_of_speech": "noun", 
    "example_sentence": "After working in the garden all day, she developed an _____ that made it difficult to use her hands.", 
    "etymology": ""
  }, 
  {
    "definition": "A sweet treat from Spain and Mexico, churros are long, deep-fried sticks of dough that are not sweetened before cooking and are typically coated in sugar.", 
    "word": "churros", 
    "diacritic": "ˈchu̇r-ō", 
    "part_of_speech": "noun", 
    "example_sentence": "After dinner, we enjoyed a plate of _____ dusted with cinnamon sugar and served with a side of chocolate sauce for dipping.", 
    "etymology": "Word History Etymology Spanish First Known Use 1929, in the meaning defined above Time Traveler The first known use of churro was in 1929 See more words from the same year"
  }, 
  {
    "definition": "Pertaining to a police officer or police force.", 
    "word": "constabulary", 
    "diacritic": "kən-ˈsta-byə-ˌler-ē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The town's _____ officers were tasked with maintaining order during the festival.", 
    "etymology": "Word History First Known Use Adjective 1824, in the meaning defined above Noun 1837, in the meaning defined at sense 1 Time Traveler The first known use of constabulary was in 1824 See more words from the same year"
  }, 
  {
    "definition": "A developing animal in its initial growth stages, marked by cell division, the establishment of basic tissues, and the creation of early organs and systems.", 
    "word": "embryo", 
    "diacritic": "ˈem-brē-ˌō", 
    "part_of_speech": "noun", 
    "example_sentence": "During the early stages of pregnancy, the _____ begins to form and grow rapidly, eventually developing into a fully formed fetus.", 
    "etymology": "Noun Middle English embrioun \"embryo, fetus,\" borrowed from Medieval Latin embrion-, embrio, embryo, borrowed from Greek émbryon \"newborn creature (in reference to a lamb), young, embryo or fetus,\" from em- em- + -bryon, derivative of bry-, stem of brýein \"to swell with an abundance of growth, bloom, abound,\" of obscure origin Note: In Medieval Latin the Greek neuter noun émbryon was reanalyzed as the base of Latin nasal stems (such as sermōn-, sermō \"speech\"), resulting in the nominative singular form embryo, which was borrowed into English. The stem embryon- was employed in New Latin derivatives, the sources of embryonal and embryonic . Compare bryo- . Combining form Late Latin, from Greek, from embryon"
  }, 
  {
    "definition": "A chain mail shirt used for protection, typically worn as armor between the 12th and 14th centuries.", 
    "word": "hauberk", 
    "diacritic": "ˈhȯ-(ˌ)bərk", 
    "part_of_speech": "noun", 
    "example_sentence": "The knight donned his _____ before entering the battlefield, knowing it would provide him with vital protection against enemy swords.", 
    "etymology": "Middle English hauberk, haubrek, borrowed from Anglo-French hauberc (also continental Old French), borrowed from Old Low Franconian *halsberg- (cognate with Old English healsbearh, halsbearh \"mail tunic,\" Middle Dutch halsberch, Old High German halsberg, halsberga ), from Germanic *halsa- \"neck\" + *-berga-, *-bergō- \"protection\" — more at harbor entry 1 , collar entry 1"
  }, 
  {
    "definition": "The belief that society fully shapes the thoughts, emotions, and behaviors of individuals.", 
    "word": "agelicism", 
    "diacritic": "ˈje-lə-ˌsi-zəm", 
    "part_of_speech": "noun", 
    "example_sentence": "Many philosophers argue against _____ by emphasizing the role of innate human nature in shaping individual behavior.", 
    "etymology": "Greek agelikós \"of the herd\" (from agélē \"herd\" + -ikos -ic entry 1 ) + -ism"
  }, 
  {
    "definition": "Having lanolin as an ingredient.", 
    "word": "lanolated", 
    "diacritic": "ˈlan", 
    "part_of_speech": "adjective", 
    "example_sentence": "The moisturizer felt incredibly soothing on my skin because it was _____ and deeply hydrating.", 
    "etymology": "lanol in + -ate + -ed"
  }, 
  {
    "definition": "Characterized by a calm and serious demeanor, often displaying a reserved and dignified attitude.", 
    "word": "staid", 
    "diacritic": "ˈstād", 
    "part_of_speech": "adjective", 
    "example_sentence": "Despite the festive atmosphere of the party, she remained _____, preferring to observe rather than join in the celebrations.", 
    "etymology": "Adjective from past participle of stay entry 3"
  }, 
  {
    "definition": "showing fear or weakness; lacking courage", 
    "word": "recreant", 
    "diacritic": "ˈre-krē-ənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "Despite the danger, she refused to be _____ and stood her ground.", 
    "etymology": "Adjective Middle English, from Anglo-French, from present participle of ( se ) recreire to give up, yield, from Medieval Latin ( se ) recredere to resign oneself (to a judgment), from Latin re- + credere to believe — more at creed"
  }, 
  {
    "definition": "a desolate high flat area found in the Scandinavian mountains", 
    "word": "fjeld", 
    "diacritic": "fēˈel,  ˈfyel", 
    "part_of_speech": "noun", 
    "example_sentence": "The hikers marveled at the breathtaking landscape as they crossed the vast _____, surrounded by jagged peaks and a serene silence.", 
    "etymology": "Danish; akin to Old Norse fjall mountain"
  }, 
  {
    "definition": "A fatty, waxy substance with the chemical formula C 27 H 46 O, present in the cells, tissues, and bodily fluids of humans and animals. It plays a crucial role in making up cell membranes and is a building block for vitamin D and steroid hormones like cortisol and estrogen.", 
    "word": "cholesterol", 
    "diacritic": "kə-ˈle-stə-ˌrȯl", 
    "part_of_speech": "noun", 
    "example_sentence": "Eating foods high in _____ can lead to an increase in heart disease risk if consumed in excess.", 
    "etymology": "International Scientific Vocabulary, from chol- + Greek stereos solid"
  }, 
  {
    "definition": "A person who is hated or excluded; an outcast.", 
    "word": "pariah", 
    "diacritic": "pə-ˈrī-ə", 
    "part_of_speech": "noun", 
    "example_sentence": "After his controversial remarks, he became a _____ in his community, shunned by friends and neighbors alike.", 
    "etymology": "Tamil paṟaiyan , literally, drummer"
  }, 
  {
    "definition": "A symbol (¶) used to indicate the start of a new paragraph.", 
    "word": "pilcrow", 
    "diacritic": "ˈpilˌkrō", 
    "part_of_speech": "noun", 
    "example_sentence": "The editor marked the beginning of each new section with a _____ to help organize the text.", 
    "etymology": "probably alteration of Middle English pylcrafte , modification of Late Latin paragraphus"
  }, 
  {
    "definition": "A delicate, thin layer of spider silk drifting in the air during still, clear weather.", 
    "word": "gossamer", 
    "diacritic": "ˈgä-sə-mər", 
    "part_of_speech": "noun", 
    "example_sentence": "The morning sunlight glinted off the _____ strands that floated gracefully in the breeze.", 
    "etymology": "Noun Middle English gossomer , from gos goose + somer summer Adjective from attributive use of gossamer entry 1"
  }, 
  {
    "definition": "A piece of cloth, typically square-shaped, that is worn on the head or around the neck as a scarf.", 
    "word": "kerchief", 
    "diacritic": "ˈkər-chəf", 
    "part_of_speech": "noun", 
    "example_sentence": "She tied a colorful _____ around her head to keep her hair in place while gardening.", 
    "etymology": "Middle English courchef , from Anglo-French coverchef, cuerchief , from coverir to cover + chef head — more at chief"
  }, 
  {
    "definition": "A group of mainly tropical trees, shrubs, and woody vines from the mulberry family, which can have either seasonal or permanent leaves. Many start as epiphytes, and some species, like F. benjamina, are commonly kept as houseplants, while others, such as F. carica, are grown for their edible fig fruit.", 
    "word": "Ficus", 
    "diacritic": "ˈfī-kəs", 
    "part_of_speech": "noun", 
    "example_sentence": "The gardener decided to add a _____ to her collection because she had heard they are great at purifying the air indoors.", 
    "etymology": "New Latin, from Latin, fig"
  }, 
  {
    "definition": "An old form of currency used by Native Americans in California, made up of disk-shaped shells or buttons.", 
    "word": "hawok", 
    "diacritic": "ˈhäˌwäk", 
    "part_of_speech": "noun", 
    "example_sentence": "The archaeologists discovered a cache of _____ buried near the ancient tribal site, revealing the trade practices of the indigenous people.", 
    "etymology": "Maidu howok"
  }, 
  {
    "definition": "A substance that helps clear mucus from the lungs and airways.", 
    "word": "expectorant", 
    "diacritic": "ik-ˈspek-t(ə-)rənt", 
    "part_of_speech": "noun", 
    "example_sentence": "The doctor recommended an _____ medication to help relieve her persistent cough by thinning the mucus in her chest.", 
    "etymology": "Word History First Known Use 1782, in the meaning defined above Time Traveler The first known use of expectorant was in 1782 See more words from the same year"
  }, 
  {
    "definition": "Having a feather-like appearance, particularly with similar components positioned on either side of a central axis, similar to the barbs along the shaft of a feather.", 
    "word": "pinnate", 
    "diacritic": "ˈpi-ˌnāt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The leaves of the plant were arranged in a _____ pattern, with smaller leaflets branching out from each side of the central stem.", 
    "etymology": "New Latin pinnatus , from Latin, feathered, from pinna feather, wing, fin"
  }, 
  {
    "definition": "Causing harm or likely to cause harm; harmful.", 
    "word": "injurious", 
    "diacritic": "in-ˈju̇r-ē-əs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The chemicals in the product were deemed _____ to the environment, prompting the company to reconsider its ingredients.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1 Time Traveler The first known use of injurious was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "A rare species of great ape (Pan paniscus) characterized by a slimmer body and longer limbs compared to the common chimpanzee (P. troglodytes), found in a limited area of equatorial Africa south of the Congo River.", 
    "word": "bonobo", 
    "diacritic": "bə-ˈnō-bō", 
    "part_of_speech": "noun", 
    "example_sentence": "The researchers observed a group of _____s in their natural habitat, noting their unique social behaviors and peaceful interactions.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "A type of four-legged, plant-eating dinosaur from the Jurassic period, characterized by prominent back plates and spikes, belonging to the suborder Stegosauria.", 
    "word": "stegosaur", 
    "diacritic": "ˈste-gə-ˌsȯr", 
    "part_of_speech": "noun", 
    "example_sentence": "The museum displayed a life-sized model of a _____ that fascinated children and adults alike with its distinctive plates and spiked tail.", 
    "etymology": "New Latin Stegosauria , from Stegosaurus"
  }, 
  {
    "definition": "In a determined and unwavering manner, holding firmly to or pursuing something important or wanted.", 
    "word": "tenaciously", 
    "diacritic": "tə-ˈnā-shəs", 
    "part_of_speech": "adjective", 
    "example_sentence": "She pursued her dreams _____, refusing to give up despite the obstacles she faced.", 
    "etymology": "Latin tenāc-, tenāx \"holding fast, clinging, persistent\" (from tenēre \"to hold, occupy, possess\" + -āc-, deverbal suffix denoting habitual or successful performance) + -ious — more at tenant entry 1 , audacious"
  }, 
  {
    "definition": "Located on the outside of the dura mater or given in that area.", 
    "word": "epidural", 
    "diacritic": "ˌe-pi-ˈd(y)u̇r-əl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The doctor administered the anesthesia through an _____ injection to help manage the patient's pain during labor.", 
    "etymology": "Word History First Known Use Adjective 1882, in the meaning defined above Noun 1970, in the meaning defined above Time Traveler The first known use of epidural was in 1882 See more words from the same year"
  }, 
  {
    "definition": "Shedding leaves or parts at certain times of the year or during specific stages of growth.", 
    "word": "deciduous", 
    "diacritic": "di-ˈsi-jə-wəs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The _____ trees in our park turn vibrant shades of red and gold before shedding their leaves in autumn.", 
    "etymology": "Latin deciduus , from decidere to fall off, from de- + cadere to fall — more at chance"
  }, 
  {
    "definition": "A type of clay that has been baked and can be either shiny or matte, commonly used for making small sculptures, vases, and in building design for things like roofing, exterior finishes, and decorative elements.", 
    "word": "terra-cotta", 
    "diacritic": "ˌter-ə-ˈkä-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "The artist chose to create a beautiful vase out of _____, showcasing its rich, warm color and smooth texture.", 
    "etymology": "Italian terra cotta , literally, baked earth"
  }, 
  {
    "definition": "Characterized by or encouraging metabolic processes that create complex substances like proteins or nucleic acids; related to or promoting anabolism.", 
    "word": "anabolic", 
    "diacritic": "ˌa-nə-ˈbä-lik", 
    "part_of_speech": "adjective", 
    "example_sentence": "The athlete followed an _____ diet to help build muscle mass and improve performance.", 
    "etymology": "ana- + (meta)bolic"
  }, 
  {
    "definition": "Excessive boldness or disregard for risks or challenges; acting with rashness or recklessness.", 
    "word": "temerity", 
    "diacritic": "tə-ˈmer-ə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "His _____ in challenging the experienced coach surprised everyone on the team.", 
    "etymology": "Middle English temeryte, borrowed from Latin temeritāt- temeritās, from temere \"blindly, recklessly, haphazardly\" + -itāt- -itās -ity ; temere going back to adverbialized locative singular of a noun *temes- \"darkness,\" going back to Indo-European *temH-es-, whence also Sanskrit tamas- \"darkness, gloom,\" Avestan tǝmah-, and, from the base *temH-, Lithuanian témsta, témti \"to become dark,\" tamsà \"darkness,\" tim͂sras \"dark red (of a horse), sorrel,\" Old Church Slavic tĭma \"darkness,\" tĭmĭnŭ \"dark, gloomy,\" and from a *-ro- adjectival derivative Sanskrit tamra- \"darkening, oppressive,\" Germanic *þemra- \"darkness,\" whence Old High German demar \"dusk, twilight\" Note: See also tenebrae ."
  }, 
  {
    "definition": "pertaining to a specific group of people or a particular family", 
    "word": "gentilitial", 
    "diacritic": "¦jentə¦lishəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The historian focused on the _____ names of the various tribes that settled in the region.", 
    "etymology": "Latin gentilicius, gentilitius (from gent-, gens clan, family, race, people) + English -al"
  }, 
  {
    "definition": "To deliberately stay away from something, especially for ethical or practical reasons; to reject.", 
    "word": "eschew", 
    "diacritic": "e-ˈshü", 
    "part_of_speech": "verb", 
    "example_sentence": "To maintain a healthy lifestyle, she decided to _____ processed foods and stick to fresh ingredients.", 
    "etymology": "Middle English, from Anglo-French eschiver (3rd present eschiu ) of Germanic origin; akin to Old High German sciuhen to frighten off — more at shy"
  }, 
  {
    "definition": "Not straight up or down, nor directly across; slanted or tilted.", 
    "word": "oblique", 
    "diacritic": "ō-ˈblēk", 
    "part_of_speech": "adjective", 
    "example_sentence": "The sunlight cast an _____ angle through the trees, creating interesting shadows on the ground.", 
    "etymology": "Adjective Middle English oblique, oblike, borrowed from Anglo-French oblic, oblique, borrowed from Latin oblīquus \"slanting, transverse,\" from ob- \"against, facing\" + -līquus, of uncertain meaning and origin — more at ob- Noun derivative of oblique entry 1 Adverb derivative of oblique entry 1"
  }, 
  {
    "definition": "resourcefulness and determination in taking action", 
    "word": "gumption", 
    "diacritic": "ˈgəm(p)-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "It took a lot of _____ to start her own business in a competitive market.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "A long, flowing garment typically made of cotton or silk, featuring long sleeves and often worn in the Middle East.", 
    "word": "caftan", 
    "diacritic": "ˈkaf-(ˌ)tan", 
    "part_of_speech": "noun", 
    "example_sentence": "She wore a beautifully embroidered _____ to the festival, its vibrant colors flowing elegantly in the breeze.", 
    "etymology": "Russian & Turkish; Russian kaftan , from Turkish, from Persian qaftān"
  }, 
  {
    "definition": "A symbol placed above, below, or through a letter that alters its pronunciation or meaning compared to the unmarked version.", 
    "word": "diacritic", 
    "diacritic": "ˌdī-ə-ˈkri-tik", 
    "part_of_speech": "noun", 
    "example_sentence": "The word \"café\" uses a _____ to indicate that the final 'e' is pronounced as a separate syllable.", 
    "etymology": "Word History First Known Use 1866, in the meaning defined above Time Traveler The first known use of diacritic was in 1866 See more words from the same year"
  }, 
  {
    "definition": "Having the nature of a warning or sign of something significant to come.", 
    "word": "portentous", 
    "diacritic": "pȯr-ˈten-təs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The sky grew dark and cloudy, creating a _____ atmosphere that suggested a storm was imminent.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1 Time Traveler The first known use of portentous was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "a person who belongs to the home team in a sports event", 
    "word": "homester", 
    "diacritic": "ˈhōmztə", 
    "part_of_speech": "noun", 
    "example_sentence": "The crowd erupted in cheers as the _____ celebrated their victory on the field.", 
    "etymology": "home entry 1 + -ster"
  }, 
  {
    "definition": "Pertaining to or similar to ostriches and other flightless birds in the ratite group.", 
    "word": "struthious", 
    "diacritic": "ˈstrü-thē-əs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The large, flightless bird displayed a _____ appearance with its long neck and powerful legs.", 
    "etymology": "Late Latin struthio ostrich, irregular from Greek strouthos"
  }, 
  {
    "definition": "A tool for cutting grass, grain, or other plants, featuring a long, curved blade attached at an angle to a lengthy handle.", 
    "word": "scythe", 
    "diacritic": "ˈsīṯẖ", 
    "part_of_speech": "noun", 
    "example_sentence": "The farmer used a _____ to harvest the tall grass in the field.", 
    "etymology": "Noun Middle English sithe , from Old English sīthe ; akin to Old English sagu saw — more at saw"
  }, 
  {
    "definition": "happening at the end of a term in office", 
    "word": "exaugural", 
    "diacritic": "(ˈ)ek¦sȯgyərəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The president delivered an inspiring speech during the _____ ceremony, reflecting on the achievements of his administration.", 
    "etymology": "ex- entry 1 + -augural (as in inaugural )"
  }, 
  {
    "definition": "A structure featuring a row of columns or a covered walkway, commonly found in classical architecture and typically situated at the entrance of a building.", 
    "word": "portico", 
    "diacritic": "ˈpȯr-ti-ˌkō", 
    "part_of_speech": "noun", 
    "example_sentence": "The grand entrance of the museum was adorned with a magnificent _____ that welcomed visitors with its elegant columns.", 
    "etymology": "Italian, from Latin porticus — more at porch"
  }, 
  {
    "definition": "The stage of life during which a child grows into an adult, beginning at puberty and ending when they reach the legal age of adulthood.", 
    "word": "adolescence", 
    "diacritic": "ˌa-də-ˈle-sᵊn(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "During _____, many teenagers experience significant physical, emotional, and social changes as they transition into adulthood.", 
    "etymology": "Middle English, borrowed from Middle French & Latin; Middle French, borrowed from Latin adolēscentia, adulēscentia, noun derivative of adolēscent-, adolēscens adolescent entry 2"
  }, 
  {
    "definition": "a musical composition designed to develop a specific technical skill.", 
    "word": "étude", 
    "diacritic": "ˈā-ˌtüd", 
    "part_of_speech": "noun", 
    "example_sentence": "The pianist practiced an _____ to improve her finger dexterity and agility.", 
    "etymology": "French, literally, study, from Middle French estude, estudie , from Old French — more at study"
  }, 
  {
    "definition": "Concerning or associated with a bishop.", 
    "word": "episcopal", 
    "diacritic": "i-ˈpi-skə-pəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The church was governed in an _____ manner, following the directives set forth by the bishop.", 
    "etymology": "Adjective Middle English, from Late Latin episcopalis , from episcopus bishop — more at bishop"
  }, 
  {
    "definition": "A list of mistakes found in a published work after it has been printed, along with the correct information.", 
    "word": "errata", 
    "diacritic": "e-ˈrä-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "The author issued a printed _____ to correct several errors discovered after the book was published.", 
    "etymology": "Latin, plural of erratum"
  }, 
  {
    "definition": "A device that records the total distance traveled by a vehicle.", 
    "word": "odometer", 
    "diacritic": "ō-ˈdä-mə-tər", 
    "part_of_speech": "noun", 
    "example_sentence": "I checked the _____ to see how many miles we had driven on our road trip.", 
    "etymology": "French odomètre , from Greek hodometron , from hodos way, road + metron measure — more at measure"
  }, 
  {
    "definition": "A humorous portrayal that amplifies certain features or traits in an absurd way.", 
    "word": "caricature", 
    "diacritic": "ˈker-i-kə-ˌchu̇r", 
    "part_of_speech": "noun", 
    "example_sentence": "The artist created a _____ of the politician that exaggerated his big ears and wide smile, making everyone laugh at the absurdity.", 
    "etymology": "Noun and Verb Italian caricatura , literally, act of loading, from caricare to load, from Late Latin carricare"
  }, 
  {
    "definition": "A sizable, multi-lobed gland found in vertebrates that produces digestive enzymes along with the hormones insulin and glucagon.", 
    "word": "pancreas", 
    "diacritic": "ˈpaŋ-krē-əs", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ plays a crucial role in regulating blood sugar levels and aiding in digestion.", 
    "etymology": "New Latin, from Greek pankreas sweetbread, from pan- + kreas flesh, meat — more at raw"
  }, 
  {
    "definition": "A statement that shows genuine or feigned doubt or uncertainty, often used for rhetorical impact.", 
    "word": "aporia", 
    "diacritic": "ə-ˈpȯr-ē-ə", 
    "part_of_speech": "noun", 
    "example_sentence": "The speaker used _____ to highlight the contradictions in the argument, leaving the audience questioning their own beliefs.", 
    "etymology": "French aporie , ultimately from Greek aporia difficulty, perplexity, from aporos impassable, from a- + poros passage — more at fare"
  }, 
  {
    "definition": "a hollow space within a body part or organ", 
    "word": "ventricle", 
    "diacritic": "ˈven-tri-kəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The doctor explained that the heart has four chambers, including the left and right _____, which pump blood throughout the body.", 
    "etymology": "Middle English, borrowed from Latin ventriculus \"belly, stomach, cavity in an organ,\" from ventr-, venter \"belly, womb\" + -culus , diminutive suffix (variant of -ulus -ule with nouns of the 3rd, 4th and 5th declensions) — more at venter"
  }, 
  {
    "definition": "A type of small mandarin orange with typically bright orange skin and flesh.", 
    "word": "tangerine", 
    "diacritic": "ˈtan-jə-ˌrēn", 
    "part_of_speech": "noun", 
    "example_sentence": "I grabbed a juicy _____ from the fruit basket for a healthy snack.", 
    "etymology": "Tangerine ( orange ), from French Tanger Tangier, Morocco + English -ine entry 1"
  }, 
  {
    "definition": "The 20th character in the Greek alphabet.", 
    "word": "upsilon", 
    "diacritic": "ˈüp-sə-ˌlän", 
    "part_of_speech": "noun", 
    "example_sentence": "In the Greek alphabet, the letter that follows the letter tau is called _____.", 
    "etymology": "Middle Greek y psilon , literally, simple y ; from the desire to distinguish it from oi , which was pronounced the same in later Greek"
  }, 
  {
    "definition": "A metallic element from the rare-earth group known for creating strongly magnetic compounds, primarily sourced from monazite.", 
    "word": "holmium", 
    "diacritic": "ˈhō(l)-mē-əm", 
    "part_of_speech": "noun", 
    "example_sentence": "Scientists are exploring the unique properties of _____ for use in advanced magnetic materials.", 
    "etymology": "New Latin, from Holmia Stockholm, Sweden"
  }, 
  {
    "definition": "The trait of being frugal and managing money or resources wisely.", 
    "word": "parsimony", 
    "diacritic": "ˈpär-sə-ˌmō-nē", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ allowed her to save enough money for a down payment on a house while still enjoying life's little pleasures.", 
    "etymology": "Middle English parcimony, borrowed from Latin parsimōnia, from pars-, perfect stem of parcere \"to act sparingly, be thrifty (with), refrain from\" (of uncertain origin) + -i- -i- + -mōnia, suffix of abstract nouns (going back to the Indo-European noun-forming suffix *-mĕ̄n-/*mŏ̄n- + the abstract noun formative *-i- )"
  }, 
  {
    "definition": "To place two or more items in the same location or to exist alongside each other.", 
    "word": "colocate", 
    "diacritic": "(ˌ)kō-ˈlō-ˌkāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The new office policy encourages teams to _____ their resources in a shared space for better collaboration.", 
    "etymology": "Word History First Known Use 1897, in the meaning defined above Time Traveler The first known use of colocate was in 1897 See more words from the same year"
  }, 
  {
    "definition": "A baked dish, often made with potatoes or noodles, typically served as a side.", 
    "word": "kugel", 
    "diacritic": "ˈkü-gəl", 
    "part_of_speech": "noun", 
    "example_sentence": "For dinner, we enjoyed a delicious _____ alongside the roast chicken and vegetables.", 
    "etymology": "Yiddish kugl , from Middle High German kugel ball — more at cudgel"
  }, 
  {
    "definition": "A type of plant from the Agave genus in the asparagus family, characterized by leaves with spiny edges and tall clusters of flowers; some varieties are grown for their fiber, sap, or decorative purposes.", 
    "word": "agave", 
    "diacritic": "ə-ˈgä-vē", 
    "part_of_speech": "noun", 
    "example_sentence": "The bartender used the sweet sap of the _____ to create a delicious and refreshing cocktail.", 
    "etymology": "borrowed from New Latin, borrowed from Greek agauḗ, feminine of agauós \"admirable, illustrious, brilliant,\" of uncertain origin Note: First distinguished as a genus separate from aloe by Linnaeus in Hortus Upsaliensis v. 1 (Stockholm, 1748), p. 87-88: \"The African and Asian [species of aloe], naturally of pharmacological use and known for a longer time, would retain their everyday pharmacological name; another name should be conferred on these [species of Agave], and since among the synonyms nothing worthy presents itself, and an ancient name may be applied to an ancient genus, thereby I have called it Agave as it is an admirable plant\" (\"Africanae & Asiaticae utpote officinales, diutius notae retineant nomen officinale & usitatissimum; aliud his imponatur, inter synonyma nullum dignum occur[r]it, licet antiquo generi antiquum nomen competeret, ideoque dixi Agave quasi plantam admirabilem.\"). The non-Latinization of final eta may have been motivated by the various mythological personages named Agave in Latin versions of Greek tales. The etymology of Greek agauós is uncertain; a connection with agánai/ágamai, \"wonder at, admire,\" is plausible semantically, but the internal upsilon seems justified neither by the root nor by ordinary derivation."
  }, 
  {
    "definition": "A type of small, bushy rose that produces large flowers in loose clusters, resulting from a cross between polyantha and tea roses.", 
    "word": "floribunda", 
    "diacritic": "ˌflȯr-ə-ˈbən-də", 
    "part_of_speech": "noun", 
    "example_sentence": "The garden was filled with vibrant colors as the _____ bloomed profusely, attracting the attention of all the passersby.", 
    "etymology": "borrowed from New Latin, originally a specific epithet of various plants, from feminine of flōribundus, apparently taken to mean \"full of flowers, flowering freely,\" from Latin flōrēre \"to bloom\" + -bundus \"carrying on (the activity denoted by the verb)\" — more at florescence Note: The sense of the New Latin coinage appears to depend on allusion to Latin abundāre \"to be rich in, abound with\" (see abound )."
  }, 
  {
    "definition": "to disperse and scatter away", 
    "word": "dissipate", 
    "diacritic": "ˈdi-sə-ˌpāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The fog began to _____ as the sun rose higher in the sky.", 
    "etymology": "Latin dissipatus , past participle of dissipare, dissupare , from dis- + supare to throw"
  }, 
  {
    "definition": "A type of cheese with a texture ranging from semisoft to hard and a flavor that is mild to moderately sharp.", 
    "word": "fontina", 
    "diacritic": "fän-ˈtē-nə", 
    "part_of_speech": "noun", 
    "example_sentence": "The creamy risotto was enhanced by the rich flavor of _____, making it a decadent dish.", 
    "etymology": "Word History Etymology Italian First Known Use 1898, in the meaning defined above Time Traveler The first known use of fontina was in 1898 See more words from the same year"
  }, 
  {
    "definition": "the sound made by frogs, particularly their croaking noise", 
    "word": "coaxation", 
    "diacritic": "ˌkōakˈs", 
    "part_of_speech": "noun", 
    "example_sentence": "As the sun set, the peaceful _____ of frogs filled the air, creating a soothing backdrop to the evening.", 
    "etymology": "Latin coaxat us (past participle of coaxare to croak, probably from Greek koax noise made by a frog, of imitative origin) + English -ion"
  }, 
  {
    "definition": "a nut coated in sugar", 
    "word": "dragée", 
    "diacritic": "dra-ˈzhā", 
    "part_of_speech": "noun", 
    "example_sentence": "She offered me a _____ as a sweet treat after dinner.", 
    "etymology": "French, from Middle French dragie — more at dredge"
  }, 
  {
    "definition": "To take exclusive control or ownership of something.", 
    "word": "monopolize", 
    "diacritic": "mə-ˈnä-pə-ˌlīz", 
    "part_of_speech": "verb", 
    "example_sentence": "She tried to _____ the conversation, making it difficult for anyone else to share their opinions.", 
    "etymology": "Word History First Known Use 1601, in the meaning defined above Time Traveler The first known use of monopolize was in 1601 See more words from the same year"
  }, 
  {
    "definition": "A three-dimensional shape with twenty flat surfaces.", 
    "word": "icosahedron", 
    "diacritic": "(ˌ)ī-ˌkō-sə-ˈhē-drən", 
    "part_of_speech": "noun", 
    "example_sentence": "The artist designed a stunning sculpture in the shape of an _____, showcasing its twenty flat surfaces.", 
    "etymology": "Greek eikosaedron , from eikosi twenty + -edron -hedron — more at vigesimal"
  }, 
  {
    "definition": "the process of removing material from a surface, often through melting, vaporization, or other means.", 
    "word": "ablation", 
    "diacritic": "a-ˈblā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The surgeon used a laser to perform _____ of the damaged tissue, ensuring a quicker recovery for the patient.", 
    "etymology": "Middle English ablacioun \"removal,\" borrowed from Late Latin ablātiōn-, ablātiō , from Latin ablā- , suppletive stem of auferre \"to carry away, remove\" + -tiōn-, tiō , suffix of action nouns — more at ablate"
  }, 
  {
    "definition": "The quality of being true or accurate; truthfulness.", 
    "word": "veracity", 
    "diacritic": "və-ˈra-sə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "The lawyer questioned the witness's _____ to ensure that the testimony was reliable and credible.", 
    "etymology": "borrowed from New Latin vērācitāt-, vērācitās , from Latin vērāc-, vērāx \"truthful\" + -itāt-, -itās -ity — more at very entry 2"
  }, 
  {
    "definition": "to steal or misappropriate funds or resources, especially in a position of trust.", 
    "word": "peculate", 
    "diacritic": "ˈpe-kyə-ˌlāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The accountant was found guilty of _____ when it was discovered that he had embezzled thousands from the company's accounts.", 
    "etymology": "Latin peculatus , past participle of peculari , from peculium"
  }, 
  {
    "definition": "pertaining to bread or the process of making bread", 
    "word": "panary", 
    "diacritic": "ˈpanərē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The bakery was filled with the delightful aroma of freshly baked goods, showcasing the artistry of _____ skills in every loaf.", 
    "etymology": "French panaire , from Latin panis bread + French -aire -ary"
  }, 
  {
    "definition": "Referring to the act of unlawfully entering a building, like a home or business, with the purpose of committing a serious crime, such as stealing.", 
    "word": "burglarious", 
    "diacritic": "ˈbər-glə-rē", 
    "part_of_speech": "noun", 
    "example_sentence": "The police increased patrols in the neighborhood after a series of _____ incidents were reported.", 
    "etymology": "Anglo-French burglarie , modification of Medieval Latin burgaria , from burgare to break into (a house)"
  }, 
  {
    "definition": "The membrane that separates the outer ear from the middle ear, commonly known as the eardrum.", 
    "word": "tympanum", 
    "diacritic": "ˈtim-pə-nəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The doctor examined my ear and noted that my _____ appeared healthy and intact.", 
    "etymology": "Medieval Latin & Latin; Medieval Latin, eardrum, from Latin, drum, architectural panel, from Greek tympanon drum, kettledrum; perhaps akin to Greek typtein to beat"
  }, 
  {
    "definition": "to reduce in wealth or resources", 
    "word": "impoverish", 
    "diacritic": "im-ˈpä-v(ə-)rish", 
    "part_of_speech": "verb", 
    "example_sentence": "The harsh economic policies could potentially _____ many families in the community.", 
    "etymology": "Middle English enpoverisshen , from Anglo-French empoveriss- , stem of empoverir , from en- + povre poor — more at poor"
  }, 
  {
    "definition": "A humorous theatrical performance that typically includes a mix of silent acting, conversation, dancing, and music.", 
    "word": "vaudeville", 
    "diacritic": "ˈvȯd-vəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The theater was filled with laughter as the performers put on a lively _____ show, featuring a blend of skits, songs, and dance routines.", 
    "etymology": "borrowed from French, \"satirical song, comic theatrical piece,\" going back to Middle French ( chançons de ) vaul de ville \"topical satirical songs,\" earlier vau de vire , named (according to 16th-century French authors) after the val de Vire , valley of the Vire River in Normandy, where such songs were allegedly composed"
  }, 
  {
    "definition": "A colorless, mostly non-reactive gas that occurs in small quantities in the atmosphere and is primarily used in electric lamps.", 
    "word": "krypton", 
    "diacritic": "ˈkrip-ˌtän", 
    "part_of_speech": "noun", 
    "example_sentence": "The scientist explained that _____ is often used in high-intensity lamps because of its ability to produce a bright light when electrified.", 
    "etymology": "Greek, neuter of kryptos hidden — more at crypt"
  }, 
  {
    "definition": "Not moving from one place; established in one location.", 
    "word": "sedentary", 
    "diacritic": "ˈse-dᵊn-ˌter-ē", 
    "part_of_speech": "adjective", 
    "example_sentence": "After years of a _____ lifestyle, she decided to take up jogging to improve her health.", 
    "etymology": "Middle French sedentaire , from Latin sedentarius , from sedent-, sedens , present participle of sedēre to sit — more at sit"
  }, 
  {
    "definition": "in a moderate or restrained manner", 
    "word": "mässig", 
    "diacritic": " ˈmāsiḵ", 
    "part_of_speech": "adjective", 
    "example_sentence": "Er trinkt _____ Wein, um seinen Kopf klar zu halten.", 
    "etymology": "German, moderate, from Old High German māzīg , from māza moderation + -īg -y; akin to Old High German mezzan to measure"
  }, 
  {
    "definition": "Describing an animal that exhibits bilateral symmetry, meaning its body can be divided into two identical halves along one plane.", 
    "word": "bilaterian", 
    "diacritic": "ˌbī-lə-ˈtir-ē-ən", 
    "part_of_speech": "noun", 
    "example_sentence": "Most _____ animals, such as humans and butterflies, have a distinct head and tail end that mirror each other on either side of their bodies.", 
    "etymology": "Word History First Known Use 1983, in the meaning defined above Time Traveler The first known use of bilaterian was in 1983 See more words from the same year"
  }, 
  {
    "definition": "The process of changing something genuine or disturbing into a sanitized and enjoyable form of entertainment or a similar atmosphere.", 
    "word": "Disneyfication", 
    "diacritic": "ˌdiz-nē-fə-ˈkā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ of classic fairy tales has made them more appealing to children, often stripping away darker themes to create a more family-friendly version.", 
    "etymology": "Walt Disney + -fication"
  }, 
  {
    "definition": "characterized by slow and natural growth or progress", 
    "word": "crescive", 
    "diacritic": "ˈkre-siv", 
    "part_of_speech": "adjective", 
    "example_sentence": "The garden flourished _____, gradually transforming into a lush paradise over the years.", 
    "etymology": "Latin crescere to grow"
  }, 
  {
    "definition": "A yearly herb native to Eurasia (Pimpinella anisum) from the carrot family, known for its fragrant seeds that aid digestion.", 
    "word": "anise", 
    "diacritic": "ˈa-nəs", 
    "part_of_speech": "noun", 
    "example_sentence": "I added a pinch of _____ to the cookies for a subtle licorice flavor.", 
    "etymology": "Middle English anis , from Anglo-French, from Latin anisum , from Greek annēson, anison"
  }, 
  {
    "definition": "Tending to scratch the soil while looking for food.", 
    "word": "rasorial", 
    "diacritic": "ˈsōrēəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The _____ birds searched diligently in the dirt for seeds and insects.", 
    "etymology": "New Latin, Rasores + English -ial"
  }, 
  {
    "definition": "A type of corundum gem that appears in clear or semi-clear crystals and comes in colors other than red.", 
    "word": "sapphire", 
    "diacritic": "ˈsa-ˌfī(-ə)r", 
    "part_of_speech": "noun", 
    "example_sentence": "The ring was adorned with a beautiful _____ gemstone that sparkled in the light.", 
    "etymology": "Middle English safir , from Anglo-French, from Latin sapphirus , from Greek sappheiros , perhaps of Semitic origin; akin to Hebrew sappīr sapphire"
  }, 
  {
    "definition": "to remove or blur something to the point of being unrecognizable, as if it has been worn down.", 
    "word": "efface", 
    "diacritic": "i-ˈfās", 
    "part_of_speech": "verb", 
    "example_sentence": "The rain and wind had _____ the inscriptions on the old tombstone, making them nearly impossible to read.", 
    "etymology": "Middle English, from Anglo-French esfacer, effacer , from e- + face face"
  }, 
  {
    "definition": "Delicate, curled pieces of wood used primarily for cushioning delicate items during shipping.", 
    "word": "excelsior", 
    "diacritic": "ik-ˈsel-sē-ər", 
    "part_of_speech": "noun", 
    "example_sentence": "The fragile porcelain vase was carefully packed in a box filled with _____ to ensure it arrived safely at its destination.", 
    "etymology": "Noun trade name, from Latin, higher, comparative of excelsus high, from past participle of excellere"
  }, 
  {
    "definition": "The tiniest unit of a substance that maintains all its characteristics and is made up of one or more atoms.", 
    "word": "molecule", 
    "diacritic": "ˈmä-li-ˌkyül", 
    "part_of_speech": "noun", 
    "example_sentence": "Water is made up of two hydrogen atoms and one oxygen atom, forming a single _____.", 
    "etymology": "French molécule , from New Latin molecula , diminutive of Latin moles mass"
  }, 
  {
    "definition": "Swelling of the heart muscle.", 
    "word": "myocarditis", 
    "diacritic": "ˌmī-ə-(ˌ)kär-ˈdī-təs", 
    "part_of_speech": "noun", 
    "example_sentence": "After experiencing chest pain and fatigue, the doctor diagnosed her with _____, which required immediate treatment to reduce the inflammation of her heart muscle.", 
    "etymology": "Word History Etymology New Latin First Known Use circa 1848, in the meaning defined above Time Traveler The first known use of myocarditis was circa 1848 See more words from the same year"
  }, 
  {
    "definition": "A chemical element belonging to the alkali metals, recognized as the lightest metal, commonly utilized in alloys, glass production, mechanical lubricants, and rechargeable batteries.", 
    "word": "lithium", 
    "diacritic": "ˈli-thē-əm", 
    "part_of_speech": "noun", 
    "example_sentence": "The technician explained that _____ is essential for the performance of most modern smartphones due to its use in rechargeable batteries.", 
    "etymology": "borrowed from New Latin (in German context) Lithium, taken as the metallic component of the alkali Lithion, probably based on Greek litheîon, neuter of litheîos \"of stone,\" derivative of líthos \"stone, rock,\" of obscure origin Note: The alkali was discovered and analyzed, apparently in late 1817, by the Swedish chemist Johan August Arfwedson (1792-1841), who at the time was working in the Stockholm laboratory of J.J. berzelius . Berzelius reported on the discovery and named the components in letters written to the editors of learned publications, as J. S. C. Schweiggers' Journal für Chemie und Physik. Schweiggers published the letter, dated January 27, 1818, as \"Ein neues mineralisches Alkali und ein Neues Metall\" (\"a new mineral alkali and a new metal\") in vol. 21 of the journal (pp. 44-48). According to Berzelius, \"we have named it [the new alkali] Lithion, thereby alluding to its first discovery in the mineral kingdom, as the two others [the alkali metals sodium and potassium] were first discovered in organic substances [literally, \"organic nature\"]. Its radical will then be named Lithium. \" (\"Wir haben es Lithion genannt, um dadurch auf seine erste Entdeckung im Mineralreich anzuspielen, da die beiden anderen erst in der organischen Natur entdeckt wurden. Sein Radical wird dann Lithium genannt werden.\")"
  }, 
  {
    "definition": "Complete nonsense or absurdity.", 
    "word": "tommyrot", 
    "diacritic": "ˈtä-mē-ˌrät", 
    "part_of_speech": "noun", 
    "example_sentence": "The idea that we can travel back in time is just a load of _____.", 
    "etymology": "English dialect tommy fool + English rot"
  }, 
  {
    "definition": "Having a jagged or saw-like edge with notches or teeth.", 
    "word": "serrated", 
    "diacritic": "ˈser-ˌāt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The chef preferred to use a _____ knife for slicing bread, as its jagged edge made clean cuts without crushing the loaf.", 
    "etymology": "Adjective Latin serratus , from serra saw Verb Late Latin serratus , past participle of serrare to saw, from Latin serra"
  }, 
  {
    "definition": "to connect or communicate effectively with someone for cooperation or coordination", 
    "word": "liaise", 
    "diacritic": "lē-ˈāz", 
    "part_of_speech": "verb", 
    "example_sentence": "She will _____ with the marketing team to ensure the campaign runs smoothly.", 
    "etymology": "back-formation from liaison"
  }, 
  {
    "definition": "A vast area in the southern part of Argentina and Chile, characterized by a dry plateau located between the Andes Mountains and the Atlantic Ocean, extending south of approximately 40° south latitude, and often encompassing Tierra del Fuego.", 
    "word": "Patagonia", 
    "diacritic": "ˌpa-tə-ˈgō-nyə", 
    "part_of_speech": "geographical name", 
    "example_sentence": "Many adventurers dream of exploring the stunning landscapes and unique wildlife found in _____.", 
    "etymology": ""
  }, 
  {
    "definition": "The condition of being seen or noticeable.", 
    "word": "visibility", 
    "diacritic": "ˌvi-zə-ˈbi-lə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "The heavy fog reduced the _____ on the road, making it difficult for drivers to see ahead.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1 Time Traveler The first known use of visibility was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "The study of the relationship between politics and economic systems.", 
    "word": "plutonomy", 
    "diacritic": "ˈtänəmē", 
    "part_of_speech": "noun", 
    "example_sentence": "Many universities now offer courses in _____ to help students understand the complexities of wealth distribution in society.", 
    "etymology": "International Scientific Vocabulary plut- + -nomy"
  }, 
  {
    "definition": "A field of medicine focused on managing and treating obesity.", 
    "word": "bariatrics", 
    "diacritic": "ˌber-ē-ˈa-triks", 
    "part_of_speech": "noun", 
    "example_sentence": "She decided to consult a specialist in _____ to help her develop a comprehensive weight loss plan.", 
    "etymology": "bar- + -iatrics Note: According to the blog ConscienHealth (conscienhealth.org), August 1, 2015, the word bariatrics was coined by the physician Raymond E. Dietz in 1961. The professional organization with which he was associated, formed as the National Obesity Society in 1950, later became the National Glandular Society, then the American College of Endocrinology and Nutrition, and the American Society of Bariatrics by 1963 (later the American Society of Bariatric Physicians, then the Obesity Medicine Association in 2015). The word bariatric can be found earlier in the name of a corporate entity, the Bariatric Corporation of Coral Gables, Florida, which introduced a weight reduction drug neo-barine in 1958 (withdrawn by order of the Food and Drug Administration in 1964). There appears to be no connection between the Bariatric Corporation and Raymond Dietz."
  }, 
  {
    "definition": "The clear, outer layer of the eye that protects the iris and pupil while allowing light to enter.", 
    "word": "cornea", 
    "diacritic": "ˈkȯr-nē-ə", 
    "part_of_speech": "noun", 
    "example_sentence": "The doctor examined the patient's _____ to check for any signs of damage or disease.", 
    "etymology": "Middle English, borrowed from Medieval Latin (short for cornea tēla \"horny web,\" cornea tunica \"horny covering,\" translating Greek kerātoeidḕs chitṓn ), from feminine of Latin corneus \"horny\" — more at corneous"
  }, 
  {
    "definition": "Having read a vast array of material; marked by extensive and comprehensive reading.", 
    "word": "omnilegent", 
    "diacritic": "(ˈ)äm¦niləjənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "Her _____ knowledge made her an invaluable resource for anyone seeking information on a wide range of topics.", 
    "etymology": "omn- + Latin legent-, legens , present participle of legere to read"
  }, 
  {
    "definition": "A type of public transport in the Philippines, modified from a jeep to serve as a shared taxi bus.", 
    "word": "jeepney", 
    "diacritic": "ˈjēp-nē", 
    "part_of_speech": "noun", 
    "example_sentence": "We hopped on a _____ to travel through the bustling streets of Manila.", 
    "etymology": "jeep + jit ney"
  }, 
  {
    "definition": "A group of various plants belonging to the genus Senecio, commonly found in many regions, characterized by their alternate or basal leaves and flower clusters that typically feature yellow ray petals.", 
    "word": "senecio", 
    "diacritic": "si-ˈnē-sh(ē-ˌ)ō", 
    "part_of_speech": "noun", 
    "example_sentence": "In the garden, the vibrant yellow blooms of _____ added a cheerful touch to the landscape.", 
    "etymology": "borrowed from New Latin Senecio, genus name, going back to Latin seneciōn-, seneciō \"old man, groundsel,\" from senec-, variant stem of sen-, senex \"old, aged, old man\" + -iōn-, -iō, suffix forming appellatives from adjectives — more at senior entry 2 Note: This marginally attested derivative appears to have extracted senec- from senex ; it must have originated after vowel weakening, which would have resulted in *seniciō, or have been dependent on analogy. The sense \"groundsel\" was suggested by the plant's hoary pappus."
  }, 
  {
    "definition": "the act of returning to a previous state or condition", 
    "word": "retrocedence", 
    "diacritic": "-dᵊn(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "The company's decision to embrace outdated technology was seen as a troubling _____ in its innovative approach to business.", 
    "etymology": ""
  }, 
  {
    "definition": "A vertical architectural feature that has a rectangular shape and functions like a pier, but is designed to resemble a column, typically extending no more than a third of its width from the wall.", 
    "word": "pilaster", 
    "diacritic": "pi-ˈla-stər", 
    "part_of_speech": "noun", 
    "example_sentence": "The grand entrance of the building was flanked by elegant _____ that added a touch of classical beauty to the facade.", 
    "etymology": "Middle French pilastre , from Italian pilastro"
  }, 
  {
    "definition": "The daughter of Priam who has the ability to predict the future but is doomed to never have her predictions trusted.", 
    "word": "Cassandra", 
    "diacritic": "kə-ˈsan-drə", 
    "part_of_speech": "noun", 
    "example_sentence": "Like _____, she warned everyone about the impending disaster, but no one believed her.", 
    "etymology": "Latin, from Greek Kassandra"
  }, 
  {
    "definition": "difficult or strenuous effort, often involving hardship or struggle.", 
    "word": "travails", 
    "diacritic": "trə-ˈvāl", 
    "part_of_speech": "verb", 
    "example_sentence": "After months of _____, she finally completed her manuscript and felt a sense of relief.", 
    "etymology": "Noun Middle English, from Anglo-French, from travailler to torment, labor, journey, from Vulgar Latin *trepaliare to torture, from Late Latin trepalium instrument of torture, from Latin tripalis having three stakes, from tri- + palus stake — more at pole"
  }, 
  {
    "definition": "a lengthy seat that has a backrest", 
    "word": "settee", 
    "diacritic": "se-ˈtē", 
    "part_of_speech": "noun", 
    "example_sentence": "They sat together on the _____ in the cozy living room, enjoying each other's company.", 
    "etymology": "alteration of settle"
  }, 
  {
    "definition": "The process or occupation of guiding a ship or aircraft.", 
    "word": "pilotage", 
    "diacritic": "ˈpī-lə-tij", 
    "part_of_speech": "noun", 
    "example_sentence": "The captain relied on the expertise of the local _____ expert to safely navigate the narrow channel.", 
    "etymology": "Word History First Known Use circa 1618, in the meaning defined at sense 1 Time Traveler The first known use of pilotage was circa 1618 See more words from the same year"
  }, 
  {
    "definition": "The transformation of land into desert due to poor management or changes in climate.", 
    "word": "desertification", 
    "diacritic": "di-ˌzər-tə-fə-ˈkā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The area suffered from _____ after years of overgrazing and deforestation.", 
    "etymology": "desert entry 1 + -ification"
  }, 
  {
    "definition": "a young oak tree", 
    "word": "flittern", 
    "diacritic": "ˈflitə", 
    "part_of_speech": "noun", 
    "example_sentence": "The forest was filled with small _____ swaying gently in the breeze, each one a hopeful sign of the future.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "A speech quality characterized by a nasal tone or sound.", 
    "word": "twang", 
    "diacritic": "ˈtwaŋ", 
    "part_of_speech": "noun", 
    "example_sentence": "Her voice had a distinct _____ that made her accent easily recognizable.", 
    "etymology": "Noun (1) imitative Noun (2) alteration of tang"
  }, 
  {
    "definition": "a strong belief in someone or something; reliance on their integrity or abilities.", 
    "word": "affianced", 
    "diacritic": "ə-ˈfī-ən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ in his leadership abilities was evident as she supported every decision he made.", 
    "etymology": "Noun Middle English affiaunce, borrowed from Anglo-French affiance, afiance, from affier, afier \"to pledge faith (to), pledge oneself to marry, trust\" (going back to Medieval Latin affīdāre, from Latin ad- ad- + Vulgar Latin *fīdāre \"to trust\") + -ance -ance — more at fiancé Verb borrowed from Anglo-French affiancer, afiancer, verbal derivative of afiance affiance entry 1"
  }, 
  {
    "definition": "soothing or reducing heat or fever", 
    "word": "refrigerant", 
    "diacritic": "ri-ˈfri-jə-rənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The doctor recommended a _____ gel to help lower her temperature and provide relief from the fever.", 
    "etymology": "Word History First Known Use Adjective 1599, in the meaning defined above Noun 1676, in the meaning defined above Time Traveler The first known use of refrigerant was in 1599 See more words from the same year"
  }, 
  {
    "definition": "devoid of newness or creativity; overused and clichéd.", 
    "word": "hackneyed", 
    "diacritic": "ˈhak-nēd", 
    "part_of_speech": "adjective", 
    "example_sentence": "The movie was criticized for its _____ plot, which followed the same predictable formula as countless other films.", 
    "etymology": "from past participle of hackney entry 3"
  }, 
  {
    "definition": "The process of forgiving someone for a wrongdoing or sin, or the condition of being forgiven.", 
    "word": "absolution", 
    "diacritic": "ˌab-sə-ˈlü-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "After a long confession, she felt a sense of _____ wash over her, lifting the burden of her guilt.", 
    "etymology": "Middle English absoluciun , borrowed from Anglo-French, borrowed from Latin absolūtiōn-, absolūtiō \"completion, acquittal, release,\" from absolū- (stem, before consonants, of absolvere \"to set free, acquit, finish\") + -tiōn-, -tiō suffix of action nouns — more at absolve"
  }, 
  {
    "definition": "A person who is overly concerned or picky, especially about minor details.", 
    "word": "fussbudget", 
    "diacritic": "ˈfəs-ˌbə-jət", 
    "part_of_speech": "noun", 
    "example_sentence": "My grandmother is such a _____; she insists that the table settings must be absolutely perfect for every meal.", 
    "etymology": "Word History First Known Use circa 1904, in the meaning defined above Time Traveler The first known use of fussbudget was circa 1904 See more words from the same year"
  }, 
  {
    "definition": "Characterized by exceptional physical, mental, or emotional strength and energy.", 
    "word": "stalwart", 
    "diacritic": "ˈstȯl-wərt", 
    "part_of_speech": "adjective", 
    "example_sentence": "Despite the challenges they faced, she remained _____ in her determination to succeed.", 
    "etymology": "Adjective Middle English, alteration of stalworth , from Old English stǣlwierthe serviceable"
  }, 
  {
    "definition": "A dance style that originated in Cuba, similar to both the rumba and the cha-cha, typically performed in ballroom settings.", 
    "word": "mambo", 
    "diacritic": "ˈmäm-(ˌ)bō", 
    "part_of_speech": "noun", 
    "example_sentence": "At the wedding, the couple surprised their guests by performing a lively _____ that got everyone on the dance floor.", 
    "etymology": "American Spanish"
  }, 
  {
    "definition": "A strong, grayish metallic element that is tough and can be shaped, known for its high melting point. It is commonly found in compounds like zircon, is very resistant to rust, and is primarily used in metal mixtures and heat-resistant materials like ceramics.", 
    "word": "zirconium", 
    "diacritic": "ˌzər-ˈkō-nē-əm", 
    "part_of_speech": "noun", 
    "example_sentence": "The engineer chose _____ for the high-temperature components due to its excellent durability and resistance to corrosion.", 
    "etymology": "New Latin, from International Scientific Vocabulary zircon"
  }, 
  {
    "definition": "The ability of a material to return to its original size and shape after being changed, particularly due to pressure or stress.", 
    "word": "resilience", 
    "diacritic": "ri-ˈzil-yən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ of the rubber band allows it to stretch and then return to its original form after being pulled.", 
    "etymology": "see resilient"
  }, 
  {
    "definition": "characterized by intense passion or enthusiasm", 
    "word": "fervorous", 
    "diacritic": "-v(ə)rəs", 
    "part_of_speech": "adjective", 
    "example_sentence": "Her _____ support for the cause inspired everyone around her to get involved.", 
    "etymology": ""
  }, 
  {
    "definition": "expressing approval or praise", 
    "word": "approbatory", 
    "diacritic": "ˌa-prə-ˈbā-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "The teacher gave an _____ nod after reviewing the student's impressive project.", 
    "etymology": "see approbate"
  }, 
  {
    "definition": "lacking strength or ability; powerless and unproductive", 
    "word": "feckless", 
    "diacritic": "ˈfek-ləs", 
    "part_of_speech": "adjective", 
    "example_sentence": "Despite his good intentions, his _____ attempts to improve the situation only led to more confusion and frustration.", 
    "etymology": "from Scots, earlier fectles \"valueless, futile,\" from fek, fect (later feck ) \"value, efficacy\" (aphetic form of effect effect entry 1 ) + -les -less"
  }, 
  {
    "definition": "Grilled or broiled strips of marinated beef or chicken, typically served with a flour tortilla and a variety of tasty fillings.", 
    "word": "fajitas", 
    "diacritic": "fə-ˈhē-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "We ordered a platter of _____ at the restaurant, and the aroma of the grilled meat filled the air.", 
    "etymology": "American Spanish, diminutive of Spanish faja sash, belt, probably from Catalan faixa , from Latin fascia band — more at fascia"
  }, 
  {
    "definition": "A giant sea creature that was overcome by Yahweh in several religious stories.", 
    "word": "leviathan", 
    "diacritic": "li-ˈvī-ə-thən", 
    "part_of_speech": "noun", 
    "example_sentence": "In the ancient texts, the battle between Yahweh and the _____ symbolizes the triumph of good over chaos.", 
    "etymology": "Middle English, from Late Latin, from Hebrew liwyāthān"
  }, 
  {
    "definition": "A suggested state in the U.S. located south of the 42nd parallel and west of the Rocky Mountains, established in 1849 by a group of Mormons, but not acknowledged by Congress.", 
    "word": "Deseret", 
    "diacritic": "ˌde-zə-ˈret", 
    "part_of_speech": "geographical name", 
    "example_sentence": "The settlers dreamed of creating a thriving community in _____, where they could practice their beliefs freely.", 
    "etymology": ""
  }, 
  {
    "definition": "To eliminate something that is unnecessary or burdensome; to leave out or give up as part of a strategy or due to a different choice.", 
    "word": "jettison", 
    "diacritic": "ˈje-tə-sən", 
    "part_of_speech": "verb", 
    "example_sentence": "In order to succeed in the competition, the team decided to _____ any outdated strategies that were holding them back.", 
    "etymology": "Verb derivative of jettison entry 2 Noun Middle English jetteson , from Anglo-French geteson , literally, action of throwing, from Latin jactation-, jactatio , from jactare — more at jet"
  }, 
  {
    "definition": "A person who installs glass.", 
    "word": "glazier", 
    "diacritic": "ˈglā-zhər", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ carefully measured the window frame before cutting the glass to fit perfectly.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined above Time Traveler The first known use of glazier was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "A component in experiences or artistic works that stirs feelings of sorrow or sympathy.", 
    "word": "pathos", 
    "diacritic": "ˈpā-ˌthäs", 
    "part_of_speech": "noun", 
    "example_sentence": "The film's powerful use of _____ made the audience tear up during the emotional climax.", 
    "etymology": "borrowed from Greek páthos \"experience, misfortune, emotion, condition,\" noun derivative of a verbal base path- \"experience, undergo, suffer\" (present páschō, páschein, aorist épathon ), going back to *p (h) nt h -, zero ablaut grade of a base seen also in pénthos \"grief, sorrow,\" of uncertain origin Note: The Greek verb has been compared with Lithuanian kentù, kę͂sti \"to undergo, suffer\" (assuming that t for d is secondary) and Old Irish césaid \"(s/he) suffers, endures\" (< *k w endh-s- ?), though this would require Indo-European *k w endh-, with a normally unacceptable combination of voiceless stop and voiced aspirated stop in a single root. Alternatively, Greek path-, penth- has been explained as an idiosyncratic semantic development of Indo-European *bhendh- \"bind\" (\"be bound\" > \"suffer\"?) (see bind entry 1 )."
  }, 
  {
    "definition": "A type of pasta shaped like short, broad tubes with ridges.", 
    "word": "rigatoni", 
    "diacritic": "ˌri-gə-ˈtō-nē", 
    "part_of_speech": "noun", 
    "example_sentence": "For dinner, I decided to make a hearty marinara sauce to serve over the _____ I bought at the store.", 
    "etymology": "Italian, plural, from rigato furrowed, fluted, from past participle of rigare to furrow, flute, from riga line, of Germanic origin; akin to Old High German rīga line — more at row"
  }, 
  {
    "definition": "A lengthy iron rod equipped with movable shackles designed to restrain the feet of prisoners, particularly on ships.", 
    "word": "bilbo", 
    "diacritic": "ˈbil-(ˌ)bō", 
    "part_of_speech": "noun", 
    "example_sentence": "The captain ordered the crew to secure the prisoner with a _____ to prevent any chance of escape during the voyage.", 
    "etymology": "Noun (1) perhaps from Bilboa , Spain Noun (2) Bilboa, Bilbao , Spain"
  }, 
  {
    "definition": "A person who chooses to consume food that is produced nearby whenever they can.", 
    "word": "locavore", 
    "diacritic": "ˈlō-kə-ˌvȯr", 
    "part_of_speech": "noun", 
    "example_sentence": "As a committed _____, she makes an effort to buy all her fruits and vegetables from local farmers' markets.", 
    "etymology": "loca l + - vore (as in carnivore )"
  }, 
  {
    "definition": "A strange and frightening being said to suck the blood of farm animals, claimed to inhabit regions in both North and South America.", 
    "word": "chupacabra", 
    "diacritic": "ˌchü-pə-ˈkä-brə", 
    "part_of_speech": "noun", 
    "example_sentence": "The farmer was terrified when he discovered the remains of his livestock and suspected that a _____ was responsible for the gruesome attacks.", 
    "etymology": "borrowed from American Spanish chupacabra, chupacabras , from Spanish chupa , 3rd person singular present tense of chupar \"to suck\" (probably of imitative origin) + cabra \"goat\" ( cabras , plural) Note: Perhaps originally a calque on Latin caprimulgus , English goatsucker , and numerous other vernacular names for birds of the nightjar family. The corresponding Spanish name for the bird is not chupacabras , but rather chotacabras , in which chota is perhaps a now obsolete verb for \"suck\" (cf. choto \"kid, suckling goat\")."
  }, 
  {
    "definition": "able to be put underwater", 
    "word": "submersible", 
    "diacritic": "səb-ˈmər-sə-bəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The researchers designed a special _____ vehicle to explore the depths of the ocean.", 
    "etymology": "Word History First Known Use Adjective 1807, in the meaning defined above Noun 1900, in the meaning defined above Time Traveler The first known use of submersible was in 1807 See more words from the same year"
  }, 
  {
    "definition": "carefree and frivolous behavior", 
    "word": "hoity-toity", 
    "diacritic": "ˌhȯi-tē-ˈtȯi-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "The party was filled with _____ as the guests danced and laughed without a care in the world.", 
    "etymology": "Noun rhyming compound from English dialect hoit to play the fool"
  }, 
  {
    "definition": "The condition of having mutual reliance, interaction, or impact between parties.", 
    "word": "reciprocity", 
    "diacritic": "ˌre-sə-ˈprä-s(ə-)tē", 
    "part_of_speech": "noun", 
    "example_sentence": "In a successful partnership, _____ is essential, as both parties benefit from their collaboration and support for one another.", 
    "etymology": "Word History First Known Use 1753, in the meaning defined at sense 1 Time Traveler The first known use of reciprocity was in 1753 See more words from the same year"
  }, 
  {
    "definition": "To estimate or infer future outcomes by extending from previous experiences or existing information.", 
    "word": "extrapolate", 
    "diacritic": "ik-ˈstra-pə-ˌlāt", 
    "part_of_speech": "verb", 
    "example_sentence": "Using the data from last year's sales, we can _____ the potential revenue for this year.", 
    "etymology": "Latin extra outside + English -polate (as in interpolate ) — more at extra-"
  }, 
  {
    "definition": "generous donations or gifts, especially to someone in a lower position.", 
    "word": "largesses", 
    "diacritic": "lär-ˈzhes", 
    "part_of_speech": "noun", 
    "example_sentence": "The wealthy businessman was known for his _____ to local charities, often providing funds to help those in need.", 
    "etymology": "Middle English largesse , from Anglo-French, from large"
  }, 
  {
    "definition": "a group of disreputable or low-class people", 
    "word": "canaille", 
    "diacritic": "kə-ˈnī", 
    "part_of_speech": "noun", 
    "example_sentence": "The town was known for its beautiful parks, but the nearby alley was often frequented by a rowdy group of _____ causing trouble after dark.", 
    "etymology": "French, from Italian canaglia , from cane dog, from Latin canis — more at hound"
  }, 
  {
    "definition": "To determine the value of a penalty or fine; to evaluate.", 
    "word": "affeer", 
    "diacritic": "ˈfir", 
    "part_of_speech": "verb", 
    "example_sentence": "The judge decided to _____ the amount of the fine based on the severity of the offense.", 
    "etymology": "Middle English afferen, affuren , from Middle French affeurer, afforer , from a- (from Latin ad- ) + feur, fuer market price, tax, from Medieval Latin forum market price, from Latin, market place"
  }, 
  {
    "definition": "Previously; in earlier times.", 
    "word": "erstwhile", 
    "diacritic": "ˈərst-ˌ(h)wī(-ə)l", 
    "part_of_speech": "adverb", 
    "example_sentence": "She met her _____ friend at the coffee shop after many years apart.", 
    "etymology": "Word History First Known Use Adverb 1569, in the meaning defined above Adjective 1849, in the meaning defined above Time Traveler The first known use of erstwhile was in 1569 See more words from the same year"
  }, 
  {
    "definition": "Seriousness and dignity, particularly in a person's demeanor or when addressing a topic.", 
    "word": "gravitas", 
    "diacritic": "ˈgra-və-ˌtäs", 
    "part_of_speech": "noun", 
    "example_sentence": "The speaker's _____ gave weight to his arguments, making the audience listen more attentively.", 
    "etymology": "borrowed from Latin gravitās \"heaviness, weight, dignity, seriousness\" — more at gravity"
  }, 
  {
    "definition": "A body part or feature, like teeth or thorns, that serves as a means of attack or protection.", 
    "word": "armature", 
    "diacritic": "ˈär-mə-ˌchu̇r", 
    "part_of_speech": "noun", 
    "example_sentence": "The cactus's sharp spines act as an effective _____ against hungry animals.", 
    "etymology": "Middle English, \"armor, armed force,\" borrowed from Latin armātūra \"armament, troop\" (Medieval Latin, \"suit of armor, defensive equipment of an animal\"), from armātus, past participle of armāre \"to arm entry 2 , equip\" + -ūra -ure"
  }, 
  {
    "definition": "A big wild ox found in India and Southeast Asia, characterized by a wide forehead and short, thick, curved horns.", 
    "word": "gaur", 
    "diacritic": "ˈgau̇(-ə)r", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ grazed peacefully in the lush grasslands, its impressive horns and strong build making it a majestic sight.", 
    "etymology": "Hindi, from Sanskrit gaura ; akin to Sanskrit go bull, cow — more at cow"
  }, 
  {
    "definition": "In a direction that is perpendicular or across something.", 
    "word": "thwartwise", 
    "diacritic": "ˈthwȯrt-ˌwīz", 
    "part_of_speech": "adjective", 
    "example_sentence": "The path ran _____ to the river, providing a perfect view of the flowing water.", 
    "etymology": "Word History First Known Use 1589, in the meaning defined above Time Traveler The first known use of thwartwise was in 1589 See more words from the same year"
  }, 
  {
    "definition": "the state of happening or existing at the same moment; occurring together.", 
    "word": "simultaneity", 
    "diacritic": "ˌsī-məl-ˈtā-nē-əs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The _____ of the fireworks display and the music performance created an unforgettable experience for all the attendees.", 
    "etymology": "borrowed from Medieval Latin simultāneus \"occurring at the same time,\" from Latin simul \"in company, together, at the same time\" (going back to an apocopated neuter form of similis \"having characteristics in common, like\") + Medieval Latin -tāneus, as in instantāneus instantaneous , Late Latin momentāneus \"momentary,\" spontāneus \"voluntary, unconstrained, spontaneous \" — more at similar Note: The Dictionary of Medieval Latin from British Sources records one occurrence of simultāneus, in the Tractatus de logica of John Wycliffe. At the entry in that dictionary the word is parsed as from simultās \"occurrence at the same time\" (distinct from classical Latin simultās \"state of animosity\") + the suffix -āneus. This analysis is possible but seems less likely. Regarding the suffix -āneus see the etymology and note at spontaneous ."
  }, 
  {
    "definition": "a name taken on by an author that actually belongs to someone else", 
    "word": "allonym", 
    "diacritic": "ˈaləˌnim", 
    "part_of_speech": "noun", 
    "example_sentence": "The author chose to write under an _____, adopting the identity of a renowned poet from the past.", 
    "etymology": "French allonyme , from all- + -onyme -onym"
  }, 
  {
    "definition": "utter nonsense; foolishness", 
    "word": "tosh", 
    "diacritic": "ˈtäsh", 
    "part_of_speech": "noun", 
    "example_sentence": "What he said was complete _____ and not worth considering.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "a wrong or incorrect belief", 
    "word": "fallacy", 
    "diacritic": "ˈfa-lə-sē", 
    "part_of_speech": "noun", 
    "example_sentence": "Believing that all politicians are corrupt is a common _____ that many people hold.", 
    "etymology": "Latin fallacia , from fallac-, fallax deceitful, from fallere to deceive"
  }, 
  {
    "definition": "Cured, unsmoked pork belly commonly used in Italian dishes.", 
    "word": "pancetta", 
    "diacritic": "(ˌ)pan-ˈche-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "She added small cubes of _____ to the pasta for extra flavor and richness.", 
    "etymology": "Italian, from diminutive of pancia belly, paunch, from Latin pantic-, pantex"
  }, 
  {
    "definition": "not open to discussion or alteration", 
    "word": "nonnegotiable", 
    "diacritic": "ˌnän-ni-ˈgō-sh(ē-)ə-bəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The terms of the contract were _____, leaving no room for further discussion.", 
    "etymology": "Word History First Known Use 1859, in the meaning defined above Time Traveler The first known use of nonnegotiable was in 1859 See more words from the same year"
  }, 
  {
    "definition": "Shaped like a tiny star; resembling stars.", 
    "word": "stellular", 
    "diacritic": "ˈstelyələ", 
    "part_of_speech": "adjective", 
    "example_sentence": "The night sky was filled with countless tiny lights, each one a _____ sparkle against the dark backdrop.", 
    "etymology": "Late Latin stellula (diminutive of Latin stella star) + English -ar"
  }, 
  {
    "definition": "a classification of body shape or build", 
    "word": "somatotype", 
    "diacritic": "sō-ˈma-tə-ˌtīp", 
    "part_of_speech": "adjective", 
    "example_sentence": "The fitness trainer assessed each athlete's _____ to tailor their workout programs effectively.", 
    "etymology": "Word History First Known Use 1940, in the meaning defined above Time Traveler The first known use of somatotype was in 1940 See more words from the same year"
  }, 
  {
    "definition": "A type of durable and smooth ceramic material that is typically white or translucent, made primarily from kaolin, quartz, and a feldspar rock, and baked at high temperatures.", 
    "word": "porcelain", 
    "diacritic": "ˈpȯr-s(ə-)lən", 
    "part_of_speech": "noun", 
    "example_sentence": "The delicate figurine was crafted from _____, giving it a beautiful shine and a fragile appearance.", 
    "etymology": "Middle French porcelaine cowrie shell, porcelain, from Italian porcellana , from porcello vulva, literally, little pig, from Latin porcellus , diminutive of porcus pig, vulva; from the shape of the shell — more at farrow"
  }, 
  {
    "definition": "A young salmon that is feeding in freshwater.", 
    "word": "parr", 
    "diacritic": "ˈpär", 
    "part_of_speech": "noun", 
    "example_sentence": "The river was teeming with _____, darting among the rocks as they searched for food.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "A constellation located on the equator, situated to the east of Taurus, depicted in star maps as a hunter with a belt and sword.", 
    "word": "Orion", 
    "diacritic": "ə-ˈrī-ən", 
    "part_of_speech": "noun", 
    "example_sentence": "On clear nights, you can easily spot _____ in the sky by looking for its distinctive belt of three stars.", 
    "etymology": "Latin, from Greek Ōriōn"
  }, 
  {
    "definition": "A European shrub from the olive family, known as Ligustrum vulgare, that loses its leaves in winter but retains some throughout the year, featuring small white flowers and commonly used for creating hedges.", 
    "word": "privet", 
    "diacritic": "ˈpri-vət", 
    "part_of_speech": "noun", 
    "example_sentence": "The garden was lined with _____, providing a neat and tidy border that offered some privacy.", 
    "etymology": "origin unknown"
  }, 
  {
    "definition": "To remove completely, erase, or indicate for removal.", 
    "word": "expunge", 
    "diacritic": "ik-ˈspənj", 
    "part_of_speech": "verb", 
    "example_sentence": "The court decided to _____ the criminal records of individuals who had demonstrated rehabilitation.", 
    "etymology": "Latin expungere to mark for deletion by dots, from ex- + pungere to prick — more at pungent"
  }, 
  {
    "definition": "The act of undermining or overthrowing established systems or authority; the condition of being overthrown.", 
    "word": "subversive", 
    "diacritic": "səb-ˈvər-zhən", 
    "part_of_speech": "noun", 
    "example_sentence": "The group's _____ activities were aimed at challenging the government's control over the media.", 
    "etymology": "Middle English, from Anglo-French, from Late Latin subversion-, subversio , from Latin subvertere"
  }, 
  {
    "definition": "a closed-off waterway that branches off from a river", 
    "word": "billabong", 
    "diacritic": "ˈbi-lə-ˌbȯŋ", 
    "part_of_speech": "noun", 
    "example_sentence": "The kids spent the afternoon fishing and playing in the shallow waters of the _____.", 
    "etymology": "Wiradhuri (Australian aboriginal language of central New South Wales) bilabaŋ"
  }, 
  {
    "definition": "The title or position held by a baronet.", 
    "word": "baronetcy", 
    "diacritic": "ˈber-ə-nət-sē", 
    "part_of_speech": "noun", 
    "example_sentence": "After inheriting the _____ from his father, he became part of the British aristocracy.", 
    "etymology": "Word History First Known Use 1795, in the meaning defined above Time Traveler The first known use of baronetcy was in 1795 See more words from the same year"
  }, 
  {
    "definition": "a formal gift or tribute presented to someone of higher status in India", 
    "word": "nuzzer", 
    "diacritic": "ˈnəzə", 
    "part_of_speech": "noun", 
    "example_sentence": "During the ceremony, the villagers presented a beautiful _____ to the visiting dignitary as a sign of respect and admiration.", 
    "etymology": "Hindi nazr , from Arabic"
  }, 
  {
    "definition": "born after the father's death", 
    "word": "posthumous", 
    "diacritic": "ˈpäs-chə-məs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The author received critical acclaim for his _____ novel, which was published a year after his passing.", 
    "etymology": "Latin posthumus , alteration of postumus late-born, posthumous, from superlative of posterus coming after — more at posterior"
  }, 
  {
    "definition": "Statistical data about human populations, like age or income, primarily used to target specific markets.", 
    "word": "demographics", 
    "diacritic": "ˌde-mə-ˈgra-fik", 
    "part_of_speech": "noun", 
    "example_sentence": "The marketing team analyzed the _____ of the region to better understand their potential customers.", 
    "etymology": "Noun derivative of demographic entry 2 Adjective demography + -ic entry 1"
  }, 
  {
    "definition": "A term used to signal a sudden change or emergence.", 
    "word": "shazam", 
    "diacritic": "shəˈzam", 
    "part_of_speech": "interjection", 
    "example_sentence": "With a flick of his wand, the magician shouted \"_____\" and transformed the ordinary rabbit into a dazzling bird.", 
    "etymology": "incantation used by the comic-strip hero Captain Marvel, from S olomon, H ercules, A tlas, Z eus, A chilles, and M ercury, on whom he called"
  }, 
  {
    "definition": "To categorize and prioritize patients, particularly those affected by emergencies or disasters, in order to provide treatment that maximizes the chances of survival.", 
    "word": "triage", 
    "diacritic": "trē-ˈäzh", 
    "part_of_speech": "noun", 
    "example_sentence": "In the chaos of the emergency room, the nurse had to _____ the patients to ensure that those in critical condition received immediate attention.", 
    "etymology": "French, sorting, sifting, from trier to sort, from Old French — more at try entry 1"
  }, 
  {
    "definition": "A snug, cylindrical hat without a brim.", 
    "word": "kufi", 
    "diacritic": "ˈkü-fē", 
    "part_of_speech": "noun", 
    "example_sentence": "He wore a colorful _____ to celebrate the cultural festival.", 
    "etymology": "ultimately from Arabic kūfīya kaffiyeh"
  }, 
  {
    "definition": "Characterized by chaotic and high-energy activity that is often driven by anxiety or excitement; wildly frantic.", 
    "word": "freneticism", 
    "diacritic": "fri-ˈne-tik", 
    "part_of_speech": "adjective", 
    "example_sentence": "The crowd moved through the streets with a sense of _____, buzzing with excitement as the festival began.", 
    "etymology": "Middle English frenetik, frentik, frantike \"temporarily deranged, delirious,\" borrowed from Anglo-French frenetic, frenetique, borrowed from Latin phrenēticus \"suffering from madness,\" borrowed from Greek phrenētikós, late variant of phrenītikós, from phrenîtis \"inflammation of the brain, delirium, insanity\" (from phren-, phrḗn \"midriff, seat of the passions, mind, wit\" —of uncertain origin— + -ītis -itis ) + -ikos -ic entry 1 Note: The variants frentik and frantike suggest that frenetic was originally stressed on the first syllable; compare frantic , frenzy . — It has been assumed since antiquity that Greek phrḗn originally referred to a body part, but the nature of that part has never been completely clarified. Of the instances of the word in the Iliad and Odyssey (usually in the plural phrénes ) that do not unambiguously refer to mental faculties, the consensus has been since the Homeric scholiasts that the word refers to the midriff and more specifically to the diaphragm. But occurrences in the Iliad such as the following passage (XVI, 503-04) would appear to indicate otherwise: \"ho dè làx en stḗthesi baínōn / ek chroòs hélke dóru, protì dè phrénes autôi héponto\" (\"… and Patroklos stepping heel braced to chest dragged / the spear out of his [the Lycian hero Sarpedon's] body, and the midriff came away with it\"—Richmond Lattimore translation). The phrénes that come out with the spear cannot reasonably refer to the entire midsection of Sarpedon's torso, nor does it seem likely that the diaphragm—mostly a thin sheet of tissue between the lungs and abdominal organs—would be pulled out either. (For detailed discussion of Greek usage see S. Ireland and F. L. D. Steel, \"Greek φρένες as an anatomical Organ in the Works of Homer,\" Glotta, 53. Band, Heft 3/4 [1975], pp. 183-95.) Though ablaut variants of phrḗn have a rich derivational history in Greek, the word has no sure Indo-European etymology. A connection with Old Icelandic grunr \"suspicion,\" gruna, grunda \"to suspect\" (presumed Indo-European *g wh ren- ?, with no other Germanic congeners) is doubtful at best. The formation of phrḗn is paralleled by several other body part words, as adḗn \"gland\" (see adeno- ), auchḗn \"neck, throat,\" splḗn \"spleen\" (see spleen )."
  }, 
  {
    "definition": "Wealth or valuable possessions.", 
    "word": "pelf", 
    "diacritic": "ˈpelf", 
    "part_of_speech": "noun", 
    "example_sentence": "He was more interested in his family and friends than in accumulating _____ and status.", 
    "etymology": "Middle English, from Anglo-French pelfre booty"
  }, 
  {
    "definition": "The portion of a fraction located below the line that acts as the divisor for the number above it.", 
    "word": "denominator", 
    "diacritic": "di-ˈnä-mə-ˌnā-tər", 
    "part_of_speech": "noun", 
    "example_sentence": "In the fraction 3/4, the _____ is 4, which tells you how many equal parts the whole is divided into.", 
    "etymology": "see denominate"
  }, 
  {
    "definition": "a possibility or uncertainty", 
    "word": "peradventure", 
    "diacritic": "ˈpər-əd-ˌven-chər", 
    "part_of_speech": "noun", 
    "example_sentence": "The scientist considered the results, pondering whether there was _____ that the unexpected data could indicate a new discovery.", 
    "etymology": "Adverb Middle English par aventure , from Anglo-French, by chance"
  }, 
  {
    "definition": "Protection from injury, loss, or damage.", 
    "word": "indemnity", 
    "diacritic": "in-ˈdem-nə-tē", 
    "part_of_speech": "noun", 
    "example_sentence": "The insurance policy provided financial _____ against any potential damages caused by the storm.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1a Time Traveler The first known use of indemnity was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "A winter refuge used by a dormant animal, such as an insect, snake, bat, or marmot.", 
    "word": "hibernaculum", 
    "diacritic": "ˌhī-bər-ˈna-kyə-ləm", 
    "part_of_speech": "noun", 
    "example_sentence": "The bat found safety in a _____ as it slept through the cold winter months.", 
    "etymology": "New Latin, from Latin, winter residence, from hibernare"
  }, 
  {
    "definition": "A type of duck belonging to the shelduck family.", 
    "word": "sheldrake", 
    "diacritic": "ˈshel-ˌdrāk", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ swam gracefully across the pond, its distinctive plumage catching the sunlight.", 
    "etymology": "Middle English, from sheld- (akin to Middle Dutch schillede parti-colored) + drake"
  }, 
  {
    "definition": "A multi-story tower found in East Asia, typically featuring upward-curving roofs at each level, built as a temple or commemorative structure.", 
    "word": "pagoda", 
    "diacritic": "pə-ˈgō-də", 
    "part_of_speech": "noun", 
    "example_sentence": "The tourists marveled at the intricate designs of the ancient _____ standing majestically in the garden.", 
    "etymology": "Portuguese pagode statue of a deity, Hindu or Buddhist temple"
  }, 
  {
    "definition": "A direction in a play indicating that all or specific characters exit the stage.", 
    "word": "exeunt", 
    "diacritic": "ˈek-sē-(ˌ)ənt", 
    "part_of_speech": "script annotation", 
    "example_sentence": "The lights dimmed as the curtain fell, and the director called out \"_____\" to signal the end of the scene.", 
    "etymology": "borrowed from Latin, third person plural present indicative of exeō, exīre \"to come or go out\" — more at exit entry 1"
  }, 
  {
    "definition": "difficult to handle due to being large and heavy", 
    "word": "cumbersome", 
    "diacritic": "ˈkəm-bər-səm", 
    "part_of_speech": "adjective", 
    "example_sentence": "The package was so _____ that I struggled to lift it off the ground.", 
    "etymology": "see cumber entry 1"
  }, 
  {
    "definition": "A country in central Europe without coastlines, previously a kingdom and now a republic since 1946; its capital is Budapest, covering an area of 35,918 square miles (93,028 square kilometers) and has a population of approximately 9.8 million.", 
    "word": "Hungary", 
    "diacritic": "ˈhəŋ-gə-rē", 
    "part_of_speech": "geographical name", 
    "example_sentence": "She traveled to _____ to explore its rich history and vibrant culture.", 
    "etymology": ""
  }, 
  {
    "definition": "to walk or move in a showy or noticeable way", 
    "word": "sashay", 
    "diacritic": "sa-ˈshā", 
    "part_of_speech": "verb", 
    "example_sentence": "She decided to _____ down the runway, drawing everyone's attention with her confident stride.", 
    "etymology": "Verb alteration of chassé"
  }, 
  {
    "definition": "The artistic choice to use ordinary, modern elements instead of heroic or legendary themes, particularly in grand opera.", 
    "word": "verism", 
    "diacritic": "ˈvir-ˌi-zəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The composer embraced _____ in his latest opera, opting to portray the struggles of everyday life rather than mythical heroes.", 
    "etymology": "borrowed from Italian verismo , from vero \"true\" (going back to Latin vērus ) + -ismo -ism — more at very entry 2"
  }, 
  {
    "definition": "Referring to the power to which a base number must be raised in order to equal a specific number.", 
    "word": "logarithmic", 
    "diacritic": "ˈlȯ-gə-ˌri-t͟həm", 
    "part_of_speech": "noun", 
    "example_sentence": "The growth of the population can be modeled using a _____ scale, which allows us to understand the exponential increase over time.", 
    "etymology": "New Latin logarithmus , from log- + Greek arithmos number — more at arithmetic"
  }, 
  {
    "definition": "to give in to a stronger force or an irresistible temptation or desire", 
    "word": "succumb", 
    "diacritic": "sə-ˈkəm", 
    "part_of_speech": "verb", 
    "example_sentence": "Despite her determination to stay on her diet, she couldn't help but _____ to the delicious chocolate cake at the party.", 
    "etymology": "French & Latin; French succomber , from Latin succumbere , from sub- + -cumbere to lie down; akin to Latin cubare to lie"
  }, 
  {
    "definition": "Characterized by deceit; misleading in speech or behavior.", 
    "word": "duplicitous", 
    "diacritic": "du̇-ˈpli-sə-təs", 
    "part_of_speech": "adjective", 
    "example_sentence": "She spoke in a way that was clearly _____, promising one thing while planning to do the opposite.", 
    "etymology": "see duplicity"
  }, 
  {
    "definition": "To earnestly request or demand someone to do something, often with a sense of urgency or under threat of a serious consequence.", 
    "word": "adjure", 
    "diacritic": "ə-ˈju̇r", 
    "part_of_speech": "verb", 
    "example_sentence": "She had to _____ him to reconsider his decision before it was too late.", 
    "etymology": "Middle English adjuren, borrowed from Anglo-French ajurer, borrowed from Latin adjūrāre \"to affirm with an oath, swear,\" from ad- ad- + jūrāre \"to swear\" — more at jury entry 1"
  }, 
  {
    "definition": "a person who supports or believes in the principles of utilitarianism", 
    "word": "utilitarian", 
    "diacritic": "(ˌ)yü-ˌti-lə-ˈter-ē-ən", 
    "part_of_speech": "noun", 
    "example_sentence": "As a strong advocate for social reform, the _____ argued that policies should be designed to maximize overall happiness for the greatest number of people.", 
    "etymology": "Word History First Known Use Noun 1781, in the meaning defined above Adjective 1802, in the meaning defined at sense 1 Time Traveler The first known use of utilitarian was in 1781 See more words from the same year"
  }, 
  {
    "definition": "A type of carnivorous mammal from the Old World, characterized by a long body, short legs, and typically a long tail.", 
    "word": "civet", 
    "diacritic": "ˈsi-vət", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ is known for its distinct appearance and is often found in tropical forests.", 
    "etymology": "Middle French civette , from Old Italian zibetto , from Arabic zabād civet perfume"
  }, 
  {
    "definition": "A specialized language or set of terms used by a specific group, often with a unique vocabulary that may not be easily understood by outsiders.", 
    "word": "argot", 
    "diacritic": "ˈär-(ˌ)gō", 
    "part_of_speech": "noun", 
    "example_sentence": "The tech startup's employees communicated in an _____ that included acronyms and jargon unfamiliar to those outside the industry.", 
    "etymology": "Word History Etymology French First Known Use 1825, in the meaning defined above Time Traveler The first known use of argot was in 1825 See more words from the same year"
  }, 
  {
    "definition": "The skill of creating and illustrating visual scenes, particularly in the context of designing and painting backgrounds for theatrical productions.", 
    "word": "scenographer", 
    "diacritic": "sē-ˈnä-grə-fē", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ transformed the empty stage into a vibrant forest, captivating the audience with his stunning backdrop designs.", 
    "etymology": "Greek skēnographia painting of scenery, from skēnē + -graphia -graphy"
  }, 
  {
    "definition": "a person who engages in boxing or fights professionally", 
    "word": "pugilist", 
    "diacritic": "ˈpyü-jə-list", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ trained tirelessly in the gym, preparing for his next big match in the boxing ring.", 
    "etymology": "Word History First Known Use circa 1740, in the meaning defined above Time Traveler The first known use of pugilist was circa 1740 See more words from the same year"
  }, 
  {
    "definition": "A location where ships can secure themselves or a suitable spot for anchoring.", 
    "word": "anchorage", 
    "diacritic": "ˈaŋ-k(ə-)rij", 
    "part_of_speech": "noun", 
    "example_sentence": "The captain decided to wait for the storm to pass before heading to the _____.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1a Time Traveler The first known use of anchorage was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "The typical condition of firmness and pressure within living cells.", 
    "word": "turgor", 
    "diacritic": "ˈtər-gər", 
    "part_of_speech": "noun", 
    "example_sentence": "The plant wilted quickly due to a loss of _____, indicating that the cells were lacking the necessary pressure to maintain their structure.", 
    "etymology": "Late Latin, turgidity, swelling, from Latin turgēre"
  }, 
  {
    "definition": "A heavy, rugged shoe that was traditionally worn in Ireland and the Scottish Highlands.", 
    "word": "brogue", 
    "diacritic": "ˈbrōg", 
    "part_of_speech": "noun", 
    "example_sentence": "He laced up his _____ before heading out for a long walk in the countryside.", 
    "etymology": "Noun (1) Irish bróg & Scottish Gaelic bròg , from Middle Irish bróc , probably from Old Norse brōk leg covering; akin to Old English brōc leg covering — more at breech Noun (2) Irish barróg accent, speech impediment, literally, wrestling hold, tight grip"
  }, 
  {
    "definition": "a tribute or commemorative object", 
    "word": "agalma", 
    "diacritic": "ˈgal-mə", 
    "part_of_speech": "noun", 
    "example_sentence": "Visitors to the ancient temple were often moved by the beauty of the _____ dedicated to the goddess, which symbolized devotion and respect.", 
    "etymology": "borrowed from Greek ágalma \"ornament, finery, statue offered to a god, any statue,\" from agal- , stem of agállein \"to glorify, exalt, pay honor to\" and agállesthai \"to glory, exult in\" + -ma , resultative noun suffix"
  }, 
  {
    "definition": "the leading position in a particular initiative or movement", 
    "word": "vanguard", 
    "diacritic": "ˈvan-ˌgärd", 
    "part_of_speech": "noun", 
    "example_sentence": "The organization is at the _____ of environmental conservation efforts, pushing for innovative policies and practices.", 
    "etymology": "Middle English vauntgard , borrowed from Anglo-French vantgarde, avantgarde , from avant- \"fore-\" (from avant \"before,\" going back to Late Latin abante ) + garde guard entry 1 — more at advance entry 1"
  }, 
  {
    "definition": "A white, crystalline organic compound with the formula C3H6N6, known for its high melting point, commonly used in the production of melamine resins.", 
    "word": "melamine", 
    "diacritic": "ˈme-lə-ˌmēn", 
    "part_of_speech": "noun", 
    "example_sentence": "The kitchen countertops were made of a durable material that included _____ to enhance their resistance to heat and scratches.", 
    "etymology": "German Melamin"
  }, 
  {
    "definition": "Loud and disruptive, often in a rude or unpleasant way.", 
    "word": "blatant", 
    "diacritic": "ˈblā-tᵊnt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The child's _____ behavior during the movie annoyed everyone in the theater.", 
    "etymology": "perhaps from Latin blatire to chatter"
  }, 
  {
    "definition": "A person who experiences partial or total loss of movement in the lower body, affecting both legs, typically as a result of spinal cord injury or illness in the chest or lower back area.", 
    "word": "paraplegic", 
    "diacritic": "ˌper-ə-ˈplē-j(ē-)ə", 
    "part_of_speech": "noun", 
    "example_sentence": "After the accident, he became a _____ and had to adapt to life in a wheelchair.", 
    "etymology": "New Latin, from Greek paraplēgiē hemiplegia, from para- + -plēgia -plegia"
  }, 
  {
    "definition": "A term used to convey surprise or admiration, particularly in reaction to something unexpected or fast.", 
    "word": "zowie", 
    "diacritic": "ˈzau̇-ē", 
    "part_of_speech": "interjection", 
    "example_sentence": "_____! That roller coaster was even more thrilling than I expected!", 
    "etymology": "imitative of the sound of a speeding vehicle"
  }, 
  {
    "definition": "designed to force or pressure someone into a certain action or decision.", 
    "word": "coercive", 
    "diacritic": "kō-ˈər-siv", 
    "part_of_speech": "adjective", 
    "example_sentence": "The manager used _____ tactics to ensure the team met the tight deadline, leaving little room for negotiation.", 
    "etymology": "coerce + -ive"
  }, 
  {
    "definition": "Actions or remarks made in a humorous way; marked by playful joking.", 
    "word": "jocularity", 
    "diacritic": "ˈjä-kyə-lər", 
    "part_of_speech": "adjective", 
    "example_sentence": "His _____ during the meeting lightened the mood and made everyone laugh.", 
    "etymology": "borrowed from Latin joculāris \"laughable, facetious,\" from joculus \"joke, jest\" (diminutive of jocus \"jest\") + -āris -ar — more at joke entry 1"
  }, 
  {
    "definition": "A fruit from a tree native to Central Asia (Cydonia oblonga) belonging to the rose family, which looks like a firm yellow apple and is commonly used for making preserves.", 
    "word": "quince", 
    "diacritic": "ˈkwin(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "She made a delicious jelly from the ripe _____ she harvested from the orchard.", 
    "etymology": "Middle English quynce quinces, plural of coyn, quyn quince, from Anglo-French coign , from Latin cotoneum , alteration cydonium , from Greek kydōnion"
  }, 
  {
    "definition": "A type of compound with the chemical formula C7H15NO3, found mainly in the muscles of vertebrates. In its levorotatory form, it plays a role in transporting fatty acids through mitochondrial membranes. In humans, it can be acquired from dietary sources like meat and milk or produced primarily in the liver and kidneys from a derivative of lysine.", 
    "word": "carnitine", 
    "diacritic": "ˈkär-nə-ˌtēn", 
    "part_of_speech": "noun", 
    "example_sentence": "Athletes often supplement their diets with _____ to help improve their energy levels during intense workouts.", 
    "etymology": "International Scientific Vocabulary, from Latin carn-, caro"
  }, 
  {
    "definition": "resulting in a reduction of data quality or quantity", 
    "word": "lossy", 
    "diacritic": "ˈlȯ-sē", 
    "part_of_speech": "adjective", 
    "example_sentence": "The video file was compressed in a _____ format, leading to a noticeable decline in image clarity.", 
    "etymology": "Word History First Known Use 1948, in the meaning defined at sense 2 Time Traveler The first known use of lossy was in 1948 See more words from the same year"
  }, 
  {
    "definition": "A musical piece where one or two themes are echoed or mirrored by voices that enter one after the other, creating a complex interplay of the vocal parts.", 
    "word": "fugue", 
    "diacritic": "ˈfyüg", 
    "part_of_speech": "noun", 
    "example_sentence": "The composer skillfully wrote a piece in which the voices entered at different times, creating a beautiful _____ that captivated the audience.", 
    "etymology": "probably from Italian fuga flight, fugue, from Latin, flight, from fugere"
  }, 
  {
    "definition": "An overwhelming and unquenchable longing for money or gain; an intense greed.", 
    "word": "avarice", 
    "diacritic": "ˈa-və-rəs", 
    "part_of_speech": "noun", 
    "example_sentence": "His _____ drove him to make unethical business decisions that ultimately harmed his reputation.", 
    "etymology": "Middle English, from Anglo-French, from Latin avaritia , from avarus avaricious, from avēre to crave — more at avid"
  }, 
  {
    "definition": "The set of rules for polite behavior when interacting online.", 
    "word": "netiquette", 
    "diacritic": "ˈne-ti-kət", 
    "part_of_speech": "noun", 
    "example_sentence": "When participating in online discussions, it's important to follow _____ to ensure respectful communication.", 
    "etymology": "blend of net and etiquette"
  }, 
  {
    "definition": "To hang down in a relaxed or loose manner; to sag.", 
    "word": "lolled", 
    "diacritic": "ˈläl", 
    "part_of_speech": "verb", 
    "example_sentence": "The dog's tongue hung out as he _____ in the shade, enjoying the cool breeze.", 
    "etymology": "Verb and Noun Middle English"
  }, 
  {
    "definition": "anxiety about being unable to use a functioning mobile phone", 
    "word": "nomophobia", 
    "diacritic": "ˌnō-mə-ˈfō-bē-ə", 
    "part_of_speech": "noun", 
    "example_sentence": "She felt a wave of _____ when she realized she had left her phone at home.", 
    "etymology": "nomo- (from no mo bile \"no cell phone\") + -phobia"
  }, 
  {
    "definition": "Connected to or concerning the outer edge or surface area.", 
    "word": "peripheral", 
    "diacritic": "pə-ˈri-f(ə-)rəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The artist focused on the main subject of the painting, while using softer colors for the background to create a sense of _____ detail.", 
    "etymology": "Word History First Known Use Adjective 1808, in the meaning defined at sense 1 Noun 1966, in the meaning defined above Time Traveler The first known use of peripheral was in 1808 See more words from the same year"
  }, 
  {
    "definition": "the action or process of rising to a higher position or level", 
    "word": "ascension", 
    "diacritic": "ə-ˈsen(t)-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "Her rapid _____ within the company surprised everyone, as she went from intern to manager in just two years.", 
    "etymology": "Middle English, from Latin ascension-, ascensio , from ascendere"
  }, 
  {
    "definition": "pertaining to or characteristic of an attribute; assigning qualities or characteristics.", 
    "word": "attributive", 
    "diacritic": "ə-ˈtri-byə-tiv", 
    "part_of_speech": "adjective", 
    "example_sentence": "In English grammar, an adjective used in an _____ position describes a quality of the noun it modifies.", 
    "etymology": "Word History First Known Use 1606, in the meaning defined at sense 1 Time Traveler The first known use of attributive was in 1606 See more words from the same year"
  }, 
  {
    "definition": "Characterized by a willingness to oppose, resist, or confront; demonstrating boldness and impudence.", 
    "word": "defiant", 
    "diacritic": "di-ˈfī-ənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "She spoke _____ly to the teacher, refusing to back down from her opinion despite the consequences.", 
    "etymology": "in part borrowed from French défiant \"mistrustful,\" from present participle of défier \"to mistrust, challenge, defy entry 1 ,\" going back to Old French; in part from defi(ance) + -ant entry 2"
  }, 
  {
    "definition": "A person who comes from or lives in Acadia.", 
    "word": "Acadians", 
    "diacritic": "ə-ˈkā-dē-ən", 
    "part_of_speech": "noun", 
    "example_sentence": "The festival celebrated the rich culture and traditions of the _____, showcasing their unique music and cuisine.", 
    "etymology": "Word History First Known Use 1705, in the meaning defined at sense 1 Time Traveler The first known use of Acadian was in 1705 See more words from the same year"
  }, 
  {
    "definition": "showing or suggesting a cause; having a causative effect.", 
    "word": "causal", 
    "diacritic": "ˈkȯ-zəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The researchers found that the lack of sleep was _____ linked to an increase in anxiety levels.", 
    "etymology": "borrowed from Late Latin causālis, from Latin causa cause entry 1 + -ālis -al entry 1"
  }, 
  {
    "definition": "pertaining to the study of Earth's structural features and movements", 
    "word": "tectonic", 
    "diacritic": "tek-ˈtä-nik", 
    "part_of_speech": "adjective", 
    "example_sentence": "The scientists conducted research to understand the _____ shifts that shape mountains and valleys.", 
    "etymology": "probably borrowed from German tektonisch \"pertaining to broader structural features of the earth's crust,\" earlier \"of building or construction,\" borrowed from Late Latin tectonicus \"of a builder or architect,\" borrowed from Greek tektonikós \"of a carpenter, skilled in carpentry or building,\" from tekton-, téktōn \"woodworker, carpenter, craftsman\" + -ikos -ic entry 1 ; téktōn going back to Indo-European *tetḱ-on- (whence also Sanskrit takṣan-, tákṣā \"carpenter,\" Avestan tašan-, tašā \"builder, creator\"), n-stem derivative from a verbal base *tetḱ- \"fashion, produce,\" whence Sanskrit tákṣati \"(s/he) fashions, builds from wood,\" Avestan tāšt \"(s/he) forms,\" Latvian tešu, tèst \"to hew,\" Old Church Slavic tešǫ, tesati \"to hew, fell,\" (with o-grade) Lithuanian tašýti \"to hew\" Note: A root of the form *tetḱ- would be peculiar for Indo-European. Helmut Rix, et al., ( Lexikon der indogermanischen Verben, 2. Ausgabe, Wiesbaden, 2001) rescue the situation by hypothesizing that *tetḱ- represents a pre-Indo-European reduplicated aorist, *te-tḱ-, of a root *teḱ-, seen in unreduplicated form in Greek téknon \"child, young of an animal\" and étekon, tekeîn, aorist of tíktō, tíktein \"to give birth to, beget, generate\" (see dystocia ). However—aside from the certain correspondence of Greek téktōn with Vedic Sanskrit takṣan-, Avestan tašan- —all other outcomes of this supposed root can be accounted for as *teḱ-s-, an extended form of *teḱ-. To explain this anomaly, Andrew Sihler ( New Comparative Grammar of Greek and Latin, Oxford, 1995, p. 225) hypothesizes that téktōn is a conflation of a regular derivative *texōn and an unattested agentive derivative *téktōr, going back to *teks-tor-, (with cluster simplification as in hektós \"sixth\" corresponding to héx \"six\"). Traditionally added to the compared forms given in the etymology above are Latin texere \"to weave, form by plaiting or twining, construct\" and other words (see at text entry 1 ). See also technical entry 1 ."
  }, 
  {
    "definition": "A facility where animals are housed and trained, primarily for display purposes.", 
    "word": "menagerie", 
    "diacritic": "-ˈna-jə-", 
    "part_of_speech": "noun", 
    "example_sentence": "The children were excited to visit the _____ and see all the exotic animals up close.", 
    "etymology": "French ménagerie , from Middle French, management of a household or farm, from menage"
  }, 
  {
    "definition": "Pertaining to a musical scale, like a major or minor scale, that consists of five whole tones and two semitones.", 
    "word": "diatonic", 
    "diacritic": "ˌdī-ə-ˈtä-nik", 
    "part_of_speech": "adjective", 
    "example_sentence": "The melody moved smoothly through the notes, following a _____ scale that felt both familiar and uplifting.", 
    "etymology": "borrowed from Late Latin diatonicus, borrowed from Greek diatonikós \"(of a tetrachord) comprising two steps and a half step,\" from diátonos \"a scale so comprised\" (noun use of diátonos, adjective—with génos \"type, kind\" understood—nominal ablaut derivative of diateínein \"to stretch as far as possible, extend,\" from dia- dia- + teínein \"to stretch, extend\") + -ikos -ic entry 1 — more at tenant entry 1"
  }, 
  {
    "definition": "a likeness or representation of a person, usually created through painting or photography", 
    "word": "portrait", 
    "diacritic": "ˈpȯr-trət", 
    "part_of_speech": "noun", 
    "example_sentence": "The artist spent hours capturing the subject's expression in the _____ hanging in the gallery.", 
    "etymology": "Noun borrowed from Middle French pourtraict, portraict \"image, representation,\" going back to Old French portret, noun derivative from past participle of pourtraire \"to represent, depict\" — more at portray Adjective from attributive use of portrait entry 1 ; so called because such a format is customarily used for portraits"
  }, 
  {
    "definition": "deeply established in a routine; habitual", 
    "word": "inveterate", 
    "diacritic": "in-ˈve-t(ə-)rət", 
    "part_of_speech": "adjective", 
    "example_sentence": "He was an _____ smoker, lighting up a cigarette every morning without fail.", 
    "etymology": "Middle English, from Latin inveteratus , from past participle of inveterare to age (transitive verb), from in- + veter-, vetus old — more at wether"
  }, 
  {
    "definition": "beyond the limits set by the law", 
    "word": "exorbitant", 
    "diacritic": "ig-ˈzȯr-bə-tənt", 
    "part_of_speech": "adjective", 
    "example_sentence": "The fees for the service were so _____ that many customers decided to look for alternatives.", 
    "etymology": "Middle English, from Late Latin exorbitant-, exorbitans , present participle of exorbitare to deviate, from Latin ex- + orbita track of a wheel, rut, from orbis disk, hoop"
  }, 
  {
    "definition": "A type of plant belonging to the genus Hydrangea, primarily consisting of shrubs with paired leaves and striking clusters of generally non-reproductive flowers that are typically white, pink, or blue. This genus is classified within either the saxifrage family or the hydrangea family.", 
    "word": "hydrangea", 
    "diacritic": "hī-ˈdrān-jə", 
    "part_of_speech": "noun", 
    "example_sentence": "In her garden, she planted a beautiful _____ that bloomed with vibrant blue flowers in the summer.", 
    "etymology": "borrowed from New Latin, genus name, from Greek hydr- hydr- + New Latin -angēa, feminine derivative from Greek angeîon \"vessel, container\" — more at angio- Note: The genus name dates from linnaeus's Species plantarum, vol. 1 (1753), p. 397. Linnaeus took the name from Jan Frederik Gronovius and John Clayton's Flora Virginica, pars prima (Leiden, 1739), p. 50. Since the 19th century the name Hydrangea, taken to mean \"water vessel,\" is said to refer to the \"cup-like form of the seed-capsule\" (hence Oxford English Dictionary, first edition, 1899). However, Gronovius, presumably the immediate author of the text, gives no indication of the name's significance. He describes the fruit of Hydrangea arborescens as \"a small two-chambered vessel filled with tiny seeds, crowned with two small threads or little horns bent backward\" (\"… vasculo parvo bicapsulari seminibus minutissimis repleto, duobus parvis filamentis seu corniculis recurvis cornato\"). This accords well with pictures of the plant's small seed capsules, though it takes some imagination to see an individual capsule as a water vessel."
  }, 
  {
    "definition": "A severe bacterial infection that leads to intense muscle spasms, particularly in the jaw, caused by a toxin from the Clostridium tetani bacteria, typically entering the body through a wound; also known as lockjaw.", 
    "word": "tetanus", 
    "diacritic": "ˈte-tə-nəs", 
    "part_of_speech": "noun", 
    "example_sentence": "After stepping on a rusty nail, she was worried about the possibility of contracting _____ if she didn't get her booster shot.", 
    "etymology": "Middle English, from Latin, from Greek tetanos , from tetanos stretched, rigid; akin to Greek teinein to stretch — more at thin"
  }, 
  {
    "definition": "A thin, clear material made from processed cellulose, primarily used for wrapping and packaging items.", 
    "word": "cellophane", 
    "diacritic": "ˈse-lə-ˌfān", 
    "part_of_speech": "noun", 
    "example_sentence": "She used _____ to wrap the gift, making it look shiny and presentable.", 
    "etymology": "French, from cellulose + -phane (as in diaphane diaphanous, from Medieval Latin diaphanus )"
  }, 
  {
    "definition": "To calm someone's feelings or attitude; to bring peace or comfort.", 
    "word": "mollify", 
    "diacritic": "ˈmä-lə-ˌfī", 
    "part_of_speech": "verb", 
    "example_sentence": "She tried to _____ her upset friend by offering a listening ear and kind words.", 
    "etymology": "Middle English mollifien , from Middle French mollifier , from Late Latin mollificare , from Latin mollis soft; akin to Greek amaldynein to soften, Sanskrit mṛdu soft, and probably to Greek malakos soft, amblys dull, Old English meltan to melt"
  }, 
  {
    "definition": "a female singer", 
    "word": "cantatrice", 
    "diacritic": "ˌkän-tə-ˈtrē-(ˌ)chā", 
    "part_of_speech": "noun", 
    "example_sentence": "The audience was captivated by the performance of the talented _____ who effortlessly hit the highest notes.", 
    "etymology": "Italian & French; French, from Italian, from Late Latin cantatric-, cantatrix , feminine of Latin cantator singer, from cantare"
  }, 
  {
    "definition": "expressing a single clear meaning", 
    "word": "univocal", 
    "diacritic": "yü-ˈni-və-kəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The instructions were written in a way that left no room for confusion, making them _____ and easy to follow.", 
    "etymology": "Late Latin univocus , from Latin uni- + voc-, vox voice — more at voice"
  }, 
  {
    "definition": "A highly infectious and deadly disease that spreads rapidly within a population.", 
    "word": "pestilence", 
    "diacritic": "ˈpe-stə-lən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "The village was struck by a _____ that decimated the population within months.", 
    "etymology": "Word History First Known Use 14th century, in the meaning defined at sense 1 Time Traveler The first known use of pestilence was in the 14th century See more words from the same century"
  }, 
  {
    "definition": "Featuring castle-like battlements.", 
    "word": "castellated", 
    "diacritic": "ˈka-stə-ˌlā-təd", 
    "part_of_speech": "adjective", 
    "example_sentence": "The ancient fortress had a _____ design, complete with towering battlements and ornate stonework.", 
    "etymology": "Medieval Latin castellatus , past participle of castellare to fortify, from Latin castellum"
  }, 
  {
    "definition": "A writing system used in Japan that features symbols taken or modified from Chinese characters.", 
    "word": "kanji", 
    "diacritic": "ˈkän-(ˌ)jē", 
    "part_of_speech": "noun", 
    "example_sentence": "In order to read Japanese literature, one must learn to recognize and write the different _____ characters.", 
    "etymology": "Word History Etymology Japanese First Known Use 1920, in the meaning defined above Time Traveler The first known use of kanji was in 1920 See more words from the same year"
  }, 
  {
    "definition": "a storage place for aging wine", 
    "word": "bodega", 
    "diacritic": "bō-ˈdā-gə", 
    "part_of_speech": "noun", 
    "example_sentence": "The old mansion had a hidden _____ in the cellar where the owner kept his finest vintages.", 
    "etymology": "Spanish, from Latin apotheca storehouse — more at apothecary"
  }, 
  {
    "definition": "Relating to or happening in cycles that last about 24 hours, especially regarding biological activities or functions.", 
    "word": "circadian", 
    "diacritic": "sər-ˈkā-dē-ən", 
    "part_of_speech": "adjective", 
    "example_sentence": "The scientist studied how light exposure affected the _____ rhythms of sleep and wakefulness in humans.", 
    "etymology": "Latin circa about + dies day + English -an entry 2 — more at deity"
  }, 
  {
    "definition": "The study of how evolutionary processes influence the development of organisms.", 
    "word": "evo-devo", 
    "diacritic": "ˈē-vō-ˈdē-vō", 
    "part_of_speech": "noun", 
    "example_sentence": "Researchers in the field of _____ are uncovering the genetic mechanisms that drive the development of various species over time.", 
    "etymology": "Word History First Known Use 1997, in the meaning defined above Time Traveler The first known use of evo-devo was in 1997 See more words from the same year"
  }, 
  {
    "definition": "A religious ceremony in Christianity, like baptism or communion, that is thought to have been established by Christ and is considered a way to receive divine grace or represents a deeper spiritual truth.", 
    "word": "sacrament", 
    "diacritic": "ˈsa-krə-mənt", 
    "part_of_speech": "noun", 
    "example_sentence": "During the church service, the priest explained the significance of _____ as a means to connect with God's grace.", 
    "etymology": "Middle English sacrement, sacrament , from Anglo-French & Late Latin; Anglo-French, from Late Latin sacramentum , from Latin, oath of allegiance, obligation, from sacrare to consecrate"
  }, 
  {
    "definition": "Relating to or giving a state of perfect happiness or bliss.", 
    "word": "beatific", 
    "diacritic": "ˌbē-ə-ˈti-fik", 
    "part_of_speech": "adjective", 
    "example_sentence": "She looked at her newborn baby with a _____ smile that radiated pure joy.", 
    "etymology": "borrowed from Latin beātificus \"making happy,\" from beātus \"happy, fortunate\" (from past participle of beāre \"to make happy, gladden, bless,\" perhaps, if going back to *dwe-jo- , akin to bonus \"good,\" going back to *dwe-nos ) + -ficus -fic — more at bounty"
  }, 
  {
    "definition": "A type of succulent plant belonging to the Sedum genus, which is part of the orpine family and is commonly found in various regions.", 
    "word": "sedum", 
    "diacritic": "ˈsē-dəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The garden was vibrant with colorful flowers, but the most intriguing plants were the clusters of _____ thriving in the rocky soil.", 
    "etymology": "New Latin, from Latin, houseleek"
  }, 
  {
    "definition": "A type of edible sea cucumber, often harvested for food.", 
    "word": "Bêche-de-Mer", 
    "diacritic": "ˌbesh-də-ˈmer", 
    "part_of_speech": "noun", 
    "example_sentence": "The local market was bustling with vendors selling fresh seafood, and one stall featured a unique delicacy known as _____.", 
    "etymology": "French, alteration of biche de mer , from Portuguese bicho do mar , literally, sea worm"
  }, 
  {
    "definition": "A systematic change in vowel sounds within the same root or related forms, particularly in Indo-European languages, often corresponding to differences in usage or meaning (such as in the words sing, sang, sung, and song).", 
    "word": "ablaut", 
    "diacritic": "ˈä-ˌblau̇t", 
    "part_of_speech": "noun", 
    "example_sentence": "The linguist explained that the changes in vowel sounds between the words \"bring,\" \"brought,\" and \"broughten\" illustrate the concept of _____.", 
    "etymology": "borrowed from German Ablaut , from ab \"down, from\" (going back to Old High German ab, aba , preposition) + Laut \"sound,\" going back to Middle High German lūt , going back to Old High German hlūtī, lūtī, liutī , derivative from the base of hlūt \"loud, strident\"; akin to Old English hlūd \"loud\" — more at of entry 1 , loud Note: As a term in Germanic and Indo-European comparative linguistics, ablaut was introduced in 1819 by Jacob Grimm in Deutsche Grammatik , vol. 1, p. 543. The word was used by earlier German grammarians pejoratively to refer to strong verbs—hence perhaps literally, \"discordance,\" with ab- alluding to the deviation of the \"irregular\" strong verbs from \"regular\" weak verbs."
  }, 
  {
    "definition": "A feeling of superiority or disdain toward others; an attitude of excessive pride.", 
    "word": "hauteur", 
    "diacritic": "hȯ-ˈtər", 
    "part_of_speech": "noun", 
    "example_sentence": "Her _____ was evident as she looked down her nose at the other guests at the party.", 
    "etymology": "French, from haut high — more at haughty"
  }, 
  {
    "definition": "The dwelling place of the gods in Norse mythology.", 
    "word": "Asgard", 
    "diacritic": "ˈas-ˌgärd", 
    "part_of_speech": "noun", 
    "example_sentence": "In Norse mythology, the great hall of the gods is located in _____, where they gather to feast and hold counsel.", 
    "etymology": "Old Norse āsgarthr"
  }, 
  {
    "definition": "A soldier equipped with a musket.", 
    "word": "musketeers", 
    "diacritic": "ˌmə-skə-ˈtir", 
    "part_of_speech": "noun", 
    "example_sentence": "The historic parade featured a group of brave _____ marching in their traditional uniforms, showcasing their skills with the musket.", 
    "etymology": "modification of Middle French mousquetaire , from mousquet"
  }, 
  {
    "definition": "bold and adventurous deeds", 
    "word": "derring-do", 
    "diacritic": "ˌder-iŋ-ˈdü", 
    "part_of_speech": "noun", 
    "example_sentence": "The hero's _____ during the daring rescue captured the admiration of everyone in the town.", 
    "etymology": "Middle English dorring don daring to do, from dorring (gerund of dorren to dare) + don to do"
  }, 
  {
    "definition": "A soft wool resembling cashmere, derived from the underfur of domestic goats found in the Himalayas.", 
    "word": "pashmina", 
    "diacritic": "ˌpəsh-ˈmē-nə", 
    "part_of_speech": "noun", 
    "example_sentence": "She wrapped herself in a warm _____ shawl as the chilly evening air settled in.", 
    "etymology": "Persian, from pashmin woolen, from pashm wool"
  }, 
  {
    "definition": "the areas surrounding a city", 
    "word": "environs", 
    "diacritic": "in-ˈvī-rənz", 
    "part_of_speech": "noun", 
    "example_sentence": "The picturesque countryside in the _____ is perfect for weekend getaways.", 
    "etymology": "Word History First Known Use circa 1660, in the meaning defined at sense 2a Time Traveler The first known use of environs was circa 1660 See more words from the same year"
  }, 
  {
    "definition": "To apply an electric current to something, primarily to stimulate physiological activity.", 
    "word": "galvanize", 
    "diacritic": "ˈgal-və-ˌnīz", 
    "part_of_speech": "verb", 
    "example_sentence": "The researchers used a device to _____ the muscles of the patient, aiming to improve their movement.", 
    "etymology": "borrowed from French galvaniser , from Luigi galvani (who conducted pioneering experiments in bioelectricity) + -iser -ize Note: See note at galvanism ."
  }, 
  {
    "definition": "pointing outward", 
    "word": "extrorse", 
    "diacritic": "ˈek-ˌstrȯrs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The flower's petals were _____, allowing them to catch the sunlight more effectively.", 
    "etymology": "probably from New Latin *extrorsus , from Late Latin, adverb, outward, from Latin extra- + -orsus (as in introrsus ) — more at introrse"
  }, 
  {
    "definition": "to allocate mental or emotional energy to something", 
    "word": "cathect", 
    "diacritic": "kə-ˈthekt", 
    "part_of_speech": "verb", 
    "example_sentence": "She began to _____ her thoughts on art, spending hours at the gallery and discussing her favorite pieces with friends.", 
    "etymology": "back-formation from cathectic"
  }, 
  {
    "definition": "The condition of being the eldest child among siblings of the same parents.", 
    "word": "primogeniture", 
    "diacritic": "ˌprī-mō-ˈje-nə-ˌchu̇r", 
    "part_of_speech": "noun", 
    "example_sentence": "In many royal families, the system of _____ determines that the eldest son inherits the throne.", 
    "etymology": "borrowed from Middle French & Late Latin; Middle French, borrowed from Late Latin prīmogenitūra, from prīmogenitus \"firstborn\" (from Latin prīmus \"first, earliest\" + -o- -o- —for expected -i- -i- — + genitus, past participle of gignere \"to bring into being, beget, give birth to\") + Latin -ūra -ure — more at prime entry 1 , kin entry 1 Note: The employment of -o- as a linking vowel in a compound rather than normal Latin -i- is peculiar. As noted in the Thesaurus Linguae Latinae, prīmogenitus is a loan-translation of Greek prōtótokos, and it is possible that the compositional -o- was taken over from the Greek word. Alternatively, the compound could be read as prīmōgenitus, with prīmō- being the Latin adverb prīmō \"at first, for the first time.\""
  }, 
  {
    "definition": "a baby swan", 
    "word": "cygnet", 
    "diacritic": "ˈsig-nət", 
    "part_of_speech": "noun", 
    "example_sentence": "The fluffy _____ paddled alongside its mother on the serene lake.", 
    "etymology": "Middle English sygnett , from Anglo-French cignet , from cigne swan, from Latin cycnus, cygnus , from Greek kyknos"
  }, 
  {
    "definition": "The scientific examination of blindness, including its causes, impacts, and management; a field that focuses on the study of blindness.", 
    "word": "typhlology", 
    "diacritic": "ˈfläləjē", 
    "part_of_speech": "noun", 
    "example_sentence": "Researchers in _____ strive to improve the quality of life for those affected by vision loss through innovative therapies and support systems.", 
    "etymology": "typhl- + -logy"
  }, 
  {
    "definition": "subject to being judged in a court of law", 
    "word": "justiciable", 
    "diacritic": "ˌjə-ˈsti-sh(ē-)ə-bəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The dispute over the property rights was deemed _____, allowing the parties to seek resolution in court.", 
    "etymology": "Word History First Known Use 15th century, in the meaning defined at sense 1 Time Traveler The first known use of justiciable was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "A person who serves a king or noble in their private sleeping quarters.", 
    "word": "chamberlain", 
    "diacritic": "ˈchām-bər-lən", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ quietly adjusted the curtains in the royal bedroom before the king awoke.", 
    "etymology": "Middle English chaumberlein, caumberleyn, borrowed from Anglo-French chamberlein, chamberlenc (continental Old French cambrelenc, chamberlent ), going back to Old Low Franconian *kamerling- \"servant, steward\" (cognate with Middle Dutch kamerlinc, Middle Low German kemerlinc, Old High German kemerlinc, chamerling ), from *kamera \"room, chamber\" (borrowed from Late Latin camera ) + *-ling- -ling entry 1 — more at chamber entry 1"
  }, 
  {
    "definition": "Characterized by the division or absence of normally connected parts or individuals.", 
    "word": "disjunct", 
    "diacritic": "dis-ˈjəŋ(k)t", 
    "part_of_speech": "adjective", 
    "example_sentence": "The presentation was confusing because it included _____ ideas that seemed unrelated to the main topic.", 
    "etymology": "Adjective Middle English, from Latin disjunctus , past participle of disjungere to disjoin"
  }, 
  {
    "definition": "pertaining to the period just before a meal, particularly dinner", 
    "word": "preprandial", 
    "diacritic": "(ˌ)prē-ˈpran-dē-əl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The aroma of spices filled the air during the _____ gathering, as everyone eagerly anticipated the feast to come.", 
    "etymology": "Word History First Known Use 1820, in the meaning defined above Time Traveler The first known use of preprandial was in 1820 See more words from the same year"
  }, 
  {
    "definition": "extremely loud", 
    "word": "fortissimo", 
    "diacritic": "fȯr-ˈti-sə-ˌmō", 
    "part_of_speech": "adjective", 
    "example_sentence": "The orchestra played the final movement of the symphony at _____, leaving the audience in awe of the powerful sound.", 
    "etymology": "Adverb or adjective Italian, superlative of forte"
  }, 
  {
    "definition": "able to be subdued or overthrown", 
    "word": "expugnable", 
    "diacritic": "ˈspəgnəbəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The fortress, once thought to be invulnerable, was revealed to be _____ after a well-coordinated attack by the enemy forces.", 
    "etymology": "Latin expugnabilis , from expugnare + -abilis -able"
  }, 
  {
    "definition": "A condition that affects a person's ability to write, resulting in handwriting that is typically difficult to read, often slow, and requiring significant effort to produce.", 
    "word": "dysgraphia", 
    "diacritic": "(ˌ)dis-ˈgra-fē-ə", 
    "part_of_speech": "noun", 
    "example_sentence": "Many students with _____ struggle to keep up with their peers in written assignments due to their challenging handwriting.", 
    "etymology": "dys- + Greek -graphia \"writing\" (from gráphein \"to write\" + -ia -ia entry 1 ), probably after French dysgraphie — more at carve"
  }, 
  {
    "definition": "The quality of being impressive or magnificent.", 
    "word": "grandeur", 
    "diacritic": "ˈgran-jər", 
    "part_of_speech": "noun", 
    "example_sentence": "The palace was known for its breathtaking _____.", 
    "etymology": "French, from Old French, from grand"
  }, 
  {
    "definition": "a split or division between groups or ideas", 
    "word": "schism", 
    "diacritic": "ˈsi-zəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The long-standing _____ within the organization has made it difficult to reach a consensus on important issues.", 
    "etymology": "Middle English scisme, sisme, cisme \"division in the church, dissension in belief, civil strife,\" borrowed from Anglo-French scisme, borrowed from Late Latin scisma, schisma \"division of opinion, dissension in the church,\" borrowed from Greek schismat-, schísma \"cleft, division, (New Testament) division of opinion,\" from schid-, stem of schízein \"to split, separate\" + -smat-, -sma, resultative noun suffix — more at shed entry 1 Note: As the spellings suggest, the Middle English and early Modern English pronunciation of this word was with initial [s] rather than [sk]. Hellenized spellings with initial sch- became general in the seventeenth century, though the old pronunciation with initial [s] has persisted until recently."
  }, 
  {
    "definition": "The original example or model from which all similar things are derived or imitated; a standard representation.", 
    "word": "archetype", 
    "diacritic": "ˈär-ki-ˌtīp", 
    "part_of_speech": "noun", 
    "example_sentence": "The detective in the novel served as the _____ of a classic noir hero, with his sharp wit and troubled past.", 
    "etymology": "Latin archetypum , from Greek archetypon , from neuter of archetypos archetypal, from archein + typos type"
  }, 
  {
    "definition": "a symbol or emblem representing authority or distinction", 
    "word": "insignia", 
    "diacritic": "in-ˈsig-nē-ə", 
    "part_of_speech": "noun", 
    "example_sentence": "The general wore his _____ with pride, as it signified his rank and accomplishments in the military.", 
    "etymology": "Latin insignia , plural of insigne mark, badge, from neuter of insignis marked, distinguished, from in- + signum mark — more at sign"
  }, 
  {
    "definition": "a spacious enclosure for birds; an aviary.", 
    "word": "volary", 
    "diacritic": "ˈvōlərē", 
    "part_of_speech": "noun", 
    "example_sentence": "The children were delighted as they watched the colorful birds flutter around in the large _____ at the zoo.", 
    "etymology": "Latin vol are to fly + English -ary"
  }, 
  {
    "definition": "The smaller bone located on the outer side between the knee and ankle in the lower limbs of vertebrates.", 
    "word": "fibula", 
    "diacritic": "ˈfi-byə-lə", 
    "part_of_speech": "noun", 
    "example_sentence": "The doctor explained that the _____ is crucial for stabilizing the ankle and supporting the lower leg.", 
    "etymology": "Latin, pin, clasp; akin to Latin figere to fasten"
  }, 
  {
    "definition": "The act of damaging or destroying something, often by stealing or causing harm.", 
    "word": "depredation", 
    "diacritic": "ˈde-prə-ˌdāt", 
    "part_of_speech": "verb", 
    "example_sentence": "The forest suffered significant _____ after the illegal logging operation cleared large areas of trees.", 
    "etymology": "Late Latin depraedatus , past participle of depraedari , from Latin de- + praedari to plunder — more at prey entry 2"
  }, 
  {
    "definition": "A structure or holder specifically designed for a piece of jewelry.", 
    "word": "monture", 
    "diacritic": "ˈmänchə", 
    "part_of_speech": "noun", 
    "example_sentence": "The brilliant gemstone was set in an elegant _____ that accentuated its beauty perfectly.", 
    "etymology": "French, from Middle French, from monter to mount + -ure"
  }, 
  {
    "definition": "The outer, more solid layer of cytoplasm that lacks granules and can change between a gel and a liquid state.", 
    "word": "ectoplasm", 
    "diacritic": "ˈek-tə-ˌpla-zəm", 
    "part_of_speech": "noun", 
    "example_sentence": "The scientist observed the behavior of _____ under different temperatures to understand its properties better.", 
    "etymology": "Word History First Known Use 1883, in the meaning defined at sense 1 Time Traveler The first known use of ectoplasm was in 1883 See more words from the same year"
  }, 
  {
    "definition": "An opening for breathing; an air vent.", 
    "word": "spiracle", 
    "diacritic": "ˈspir-i-kəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The insect's _____ allowed it to take in air while remaining submerged in water.", 
    "etymology": "Middle English, from Latin spiraculum , from spirare to breathe"
  }, 
  {
    "definition": "A name that comes from the father or a male ancestor, typically formed by adding a prefix or suffix.", 
    "word": "patronymic", 
    "diacritic": "ˌpa-trə-ˈni-mik", 
    "part_of_speech": "noun", 
    "example_sentence": "His _____ surname indicated his lineage, tracing back to his grandfather's name.", 
    "etymology": "ultimately from Greek patronymia patronymic, from patr- + onyma name — more at name"
  }, 
  {
    "definition": "a device used to restrain the hands or wrists; a handcuff.", 
    "word": "manacle", 
    "diacritic": "ˈma-ni-kəl", 
    "part_of_speech": "noun", 
    "example_sentence": "The police officer had to _____ the suspect to ensure he wouldn't escape during the transport to the station.", 
    "etymology": "Noun Middle English manicle , from Anglo-French, from Latin manicula handle, diminutive of manicae shackles, armor for the hand, from manus hand — more at manual"
  }, 
  {
    "definition": "A person who studies handwriting to analyze character and personality traits.", 
    "word": "graphologist", 
    "diacritic": "gra-ˈfä-lə-jist", 
    "part_of_speech": "noun", 
    "example_sentence": "The _____ examined the letter closely to uncover insights about the writer's personality.", 
    "etymology": "Word History First Known Use 1885, in the meaning defined above Time Traveler The first known use of graphologist was in 1885 See more words from the same year"
  }, 
  {
    "definition": "A neighborhood located in the west-central part of London, England, within the Kensington and Chelsea borough, situated south of Hyde Park.", 
    "word": "Belgravia", 
    "diacritic": "bel-ˈgrā-vē-ə", 
    "part_of_speech": "geographical name", 
    "example_sentence": "She dreamed of living in _____, where the streets are lined with elegant townhouses and beautiful gardens.", 
    "etymology": ""
  }, 
  {
    "definition": "Referring to a word, phrase, or grammatical form that indicates ownership or a similar relationship to ownership.", 
    "word": "possessive", 
    "diacritic": "pə-ˈze-siv", 
    "part_of_speech": "adjective", 
    "example_sentence": "She used a _____ pronoun to show that the book belonged to her.", 
    "etymology": "Word History First Known Use Adjective 15th century, in the meaning defined at sense 1 Noun 15th century, in the meaning defined at sense 1 Time Traveler The first known use of possessive was in the 15th century See more words from the same century"
  }, 
  {
    "definition": "A person who prepares and handles the bodies of deceased individuals, typically involved in funeral services.", 
    "word": "mortician", 
    "diacritic": "mȯr-ˈti-shən", 
    "part_of_speech": "noun", 
    "example_sentence": "After the passing of her grandmother, the family consulted a _____ to arrange the funeral and prepare her for the service.", 
    "etymology": "Latin mort-, mors death"
  }, 
  {
    "definition": "flashy decoration", 
    "word": "gaudery", 
    "diacritic": "ˈgȯ-də-rē", 
    "part_of_speech": "noun", 
    "example_sentence": "The wedding was filled with an excessive amount of _____, from the glittering centerpieces to the elaborate floral arrangements.", 
    "etymology": "Word History First Known Use circa 1598, in the meaning defined above Time Traveler The first known use of gaudery was circa 1598 See more words from the same year"
  }, 
  {
    "definition": "Knee-length shorts typically worn in warm weather or casual settings.", 
    "word": "bermudas", 
    "diacritic": "(ˌ)bər-ˈmyü-dəz", 
    "part_of_speech": "noun", 
    "example_sentence": "He wore a bright yellow t-shirt and a pair of _____ to the beach.", 
    "etymology": "Word History First Known Use 1950, in the meaning defined above Time Traveler The first known use of Bermudas was in 1950 See more words from the same year"
  }, 
  {
    "definition": "Connected to or organized in a specific order; in a series.", 
    "word": "sequential", 
    "diacritic": "si-ˈkwen(t)-shəl", 
    "part_of_speech": "adjective", 
    "example_sentence": "The steps to complete the project must be done _____ to ensure everything is finished on time.", 
    "etymology": "Word History First Known Use 1844, in the meaning defined at sense 1 Time Traveler The first known use of sequential was in 1844 See more words from the same year"
  }, 
  {
    "definition": "a greater amount of weight, influence, significance, or force", 
    "word": "preponderance", 
    "diacritic": "pri-ˈpän-d(ə-)rən(t)s", 
    "part_of_speech": "noun", 
    "example_sentence": "The ____ of evidence presented in the trial ultimately led to the defendant's acquittal.", 
    "etymology": "Word History First Known Use 1681, in the meaning defined at sense 1 Time Traveler The first known use of preponderance was in 1681 See more words from the same year"
  }, 
  {
    "definition": "A heraldic term for the color red.", 
    "word": "gules", 
    "diacritic": "ˈgyülz", 
    "part_of_speech": "noun", 
    "example_sentence": "The knight's shield was emblazoned with a lion passant in _____, symbolizing courage and strength.", 
    "etymology": "Middle English goules , from Anglo-French"
  }, 
  {
    "definition": "A type of mint plant from Eurasia, known for its small, fragrant, and flavorful leaves.", 
    "word": "thyme", 
    "diacritic": "ˈtīm", 
    "part_of_speech": "noun", 
    "example_sentence": "I added some fresh _____ to the soup for extra flavor.", 
    "etymology": "Middle English time, thyme, borrowed from Anglo-French, borrowed from Latin thymum, borrowed from Greek thýmon \"the plants Thymus capitatus or Satureja thymbra, \" perhaps of pre-Greek substratal origin Note: The Greek word would not originally have referred to Thymus vulgaris, the original range of which was restricted to the western Mediterranean. The pronunciation without an initial fricative, as exemplified by Middle English time, has been preserved in Modern English, though the spelling has been conformed to the Latin and Greek source. — The Greek word has conventionally been linked to the verb thýō, thýein \"to sacrifice,\" and hence Indo-European *d h u̯eh 2 - or *d h eu̯h 2 - \"produce smoke by burning,\" though the short u cannot be easily explained; compare Greek thȳmós \"spirit, mind, courage\" and see etymology and note at fume entry 1 ."
  }, 
  {
    "definition": "a brief solo vocal piece", 
    "word": "arietta", 
    "diacritic": "ˌär-ē-ˈe-tə", 
    "part_of_speech": "noun", 
    "example_sentence": "The singer captivated the audience with a beautiful _____ that showcased her range and emotion.", 
    "etymology": "Italian, diminutive of aria"
  }, 
  {
    "definition": "The strong, typically light brown coat of a nutria.", 
    "word": "nutria", 
    "diacritic": "ˈnü-trē-ə", 
    "part_of_speech": "noun", 
    "example_sentence": "The farmer was concerned about the damage the _____ were causing to his crops along the riverbank.", 
    "etymology": "borrowed from American Spanish, from Spanish, \"otter,\" altered (with n of uncertain origin) from Latin lutra — more at otter Note: Joan Coromines ( Diccionario crítico etimológico castellano e hispánico, 1981) suggests that Greek énydris \"otter\" may have been the source of the n in nutria ; he notes dialectal forms such as lóndriga that maintain l."
  }, 
  {
    "definition": "having a pleasant sound", 
    "word": "euphonious", 
    "diacritic": "yü-ˈfō-nē-əs", 
    "part_of_speech": "adjective", 
    "example_sentence": "The choir's _____ harmonies filled the auditorium, captivating everyone in attendance.", 
    "etymology": "Late Latin euphōnia euphony + -ous"
  }
];