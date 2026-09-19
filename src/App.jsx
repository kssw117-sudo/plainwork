import React, { useEffect, useRef, useState } from 'react';

const INK = '#2D2A26';
const INK_SOFT = '#87837A';
const BG = '#F5F4EE';
const CARD = '#FFFFFF';
const LINE = '#E4E1D6';
const RUST = '#D97757';
const RUST_DEEP = '#A56A45';

const products = [
  {
    tag: '01',
    name: 'TagGenerator AI',
    line: {
      en: 'Turn any post idea into captions and hashtags in seconds.',
      ru: 'Превращает любую идею поста в подпись и хэштеги за секунды.',
      es: 'Convierte cualquier idea de publicación en subtitulos y hashtags en segundos.',
      fr: 'Transforme n\u2019importe quelle id\u00e9e de post en l\u00e9gendes et hashtags en quelques secondes.',
      de: 'Verwandelt jede Post-Idee in Sekunden in Bildunterschriften und Hashtags.',
      pt: 'Transforma qualquer ideia de post em legendas e hashtags em segundos.',
      zh: '\u5c06\u4efb\u4f55\u5e16\u5b50\u521b\u610f\u5728\u6570\u79d2\u5185\u8f6c\u5316\u4e3a\u914d\u6587\u548c\u6807\u7b7e\u3002',
      ja: '\u3069\u3093\u306a\u6295\u7a3f\u30a2\u30a4\u30c7\u30a2\u3082\u6570\u79d2\u3067\u30ad\u30e3\u30d7\u30b7\u30e7\u30f3\u3068\u30cf\u30c3\u30b7\u30e5\u30bf\u30b0\u306b\u5909\u63db\u3057\u307e\u3059\u3002',
    },
    problem: {
      en: 'You spend 15-20 minutes staring at a blank caption box before every post.',
      ru: 'Ты тратишь 15-20 минут на придумывание подписи перед каждым постом.',
      es: 'Pasas 15-20 minutos mirando un cuadro de texto vac\u00edo antes de cada publicaci\u00f3n.',
      fr: 'Tu passes 15 \u00e0 20 minutes devant une l\u00e9gende vide avant chaque post.',
      de: 'Du starrst vor jedem Post 15-20 Minuten auf ein leeres Textfeld.',
      pt: 'Voc\u00ea gasta 15-20 minutos olhando para uma legenda em branco antes de cada post.',
      zh: '\u6bcf\u6b21\u53d1\u5e16\u524d\u4f60\u90fd\u8981\u76ef\u7740\u7a7a\u767d\u6587\u672c\u6846\u770b15-20\u5206\u949f\u3002',
      ja: '\u6295\u7a3f\u524d\u306b\u7a7a\u306e\u30ad\u30e3\u30d7\u30b7\u30e7\u30f3\u6b04\u3092\u524d\u306b15\u301c20\u5206\u60a9\u3080\u3002',
    },
    result: {
      en: 'Saves roughly 2 hours a week on content planning.',
      ru: 'Экономит примерно 2 часа в неделю на планировании контента.',
      es: 'Ahorra unas 2 horas por semana en la planificaci\u00f3n de contenido.',
      fr: '\u00c9conomise environ 2 heures par semaine sur la planification de contenu.',
      de: 'Spart etwa 2 Stunden pro Woche bei der Content-Planung.',
      pt: 'Economiza cerca de 2 horas por semana no planejamento de conte\u00fado.',
      zh: '\u6bcf\u5468\u8282\u7701\u5927\u7ea62\u5c0f\u65f6\u7684\u5185\u5bb9\u89c4\u5212\u65f6\u95f4\u3002',
      ja: '\u30b3\u30f3\u30c6\u30f3\u30c4\u8a08\u753b\u306e\u624b\u9593\u3092\u9031\u7d042\u6642\u9593\u524a\u6e1b\u3002',
    },
    price: '$49',
    stat: { en: '20 languages', ru: '20 языков', es: '20 idiomas', fr: '20 langues', de: '20 Sprachen', pt: '20 idiomas', zh: '20\u79cd\u8bed\u8a00', ja: '20\u8a00\u8a9e' },
    url: 'https://taggenerator.plainwork.website/',
    widget: 'https://widget.lava.top/d058ad7b-f43f-45a9-9d8a-e255697c8f46',
    fullDescription: {
      en: "You know the feeling: you shot a genuinely good photo, coffee on the table by the window, and then twenty minutes of staring at a blank caption box. TagGenerator AI fixes exactly that moment. Upload a photo or video, and the AI actually looks at it, not just spins text from nothing. It sees the foam on the latte, the cinnamon, the autumn leaves on the table, and writes a post about exactly that.",
      ru: "Знакомая ситуация: сняла отличное фото кофе на столе у окна, а дальше — двадцать минут ступора перед пустым полем подписи. TagGenerator AI решает именно этот момент. Загружаешь фото или видео — и AI реально смотрит на картинку, а не сочиняет текст из воздуха: видит пенку на латте, корицу, осенние листья на столе — и пишет пост именно про это.",
      es: "Ya conoces la sensación: tomaste una foto realmente buena, café en la mesa junto a la ventana, y luego veinte minutos mirando un cuadro de texto vacío. TagGenerator AI resuelve exactamente ese momento. Subes una foto o video, y la IA realmente la mira, no inventa texto de la nada: ve la espuma del latte, la canela, las hojas de otoño en la mesa, y escribe sobre exactamente eso.",
      fr: "Tu connais cette sensation : tu as pris une superbe photo, un café sur la table pres de la fenetre, puis vingt minutes a fixer une legende vide. TagGenerator AI resout exactement ce moment. Tu importes une photo ou une video, et l'IA la regarde vraiment, elle n'invente pas un texte de nulle part : elle voit la mousse du latte, la cannelle, les feuilles d'automne sur la table, et ecrit un post a propos de ca exactement.",
      de: "Du kennst das Gefuehl: du hast ein wirklich gutes Foto gemacht, Kaffee auf dem Tisch am Fenster, und dann zwanzig Minuten auf ein leeres Textfeld gestarrt. TagGenerator AI loest genau diesen Moment. Du laedst ein Foto oder Video hoch, und die KI schaut es sich wirklich an, statt Text aus dem Nichts zu erfinden: sie sieht den Milchschaum auf dem Latte, den Zimt, die Herbstblaetter auf dem Tisch, und schreibt einen Post genau darueber.",
      pt: "Voce conhece a sensacao: tirou uma foto genuinamente boa, cafe na mesa perto da janela, e depois vinte minutos encarando uma caixa de legenda vazia. TagGenerator AI resolve exatamente esse momento. Voce envia uma foto ou video, e a IA realmente olha para ela, nao apenas inventa texto do nada: ela ve a espuma do latte, a canela, as folhas de outono na mesa, e escreve um post sobre exatamente isso.",
      zh: "你一定有过这种感觉：拍了一张真正好看的照片，靠窗桌上的咖啡，然后盯着空白的配文框二十分钟。TagGenerator AI 解决的正是这个瞬间。上传照片或视频，AI 会真正去看它，而不是凭空编造文字：它能看到拿铁上的奶泡、肉桂、桌上的秋叶，然后就写这些内容的帖子。",
      ja: "その感覚、わかる。窓際のテーブルに置いたコーヒーの、本当にいい写真を撮った。それなのに、空白のキャプション欄を前に20分固まってしまう。TagGenerator AIが解決するのは、まさにその瞬間だ。写真や動画をアップロードすると、AIは本当にそれを見る。何もないところから文章をひねり出すのではなく、ラテの泡、シナモン、テーブルの上の紅葉を実際に見て、まさにそれについての投稿を書く。",
    },
    benefits: [
      'The AI actually sees your photo - no need to describe what\u2019s in it.',
      'One input, every platform: Instagram, TikTok, WhatsApp, YouTube Shorts, X, Pinterest.',
      'Your brand voice in every line - friendly, expert, playful, or formal.',
      'Batch mode plans a full week of posts in one click.',
    ],
  },
  {
    tag: '02',
    name: 'ReviewReply AI',
    line: {
      en: 'Paste any customer review, get thoughtful replies in seconds.',
      ru: 'Вставляешь любой отзыв клиента — получаешь продуманный ответ за секунды.',
      es: 'Pega cualquier rese\u00f1a de cliente y obt\u00e9n respuestas reflexivas en segundos.',
      fr: 'Collez n\u2019importe quel avis client, obtenez des r\u00e9ponses r\u00e9fl\u00e9chies en quelques secondes.',
      de: 'F\u00fcge jede Kundenbewertung ein und erhalte durchdachte Antworten in Sekunden.',
      pt: 'Cole qualquer avalia\u00e7\u00e3o de cliente e receba respostas cuidadosas em segundos.',
      zh: '\u7c98\u8d34\u4efb\u4f55\u5ba2\u6237\u8bc4\u4ef7\uff0c\u6570\u79d2\u5185\u83b7\u5f97\u7ecf\u8fc7\u601d\u8003\u7684\u56de\u590d\u3002',
      ja: '\u9867\u5ba2\u30ec\u30d3\u30e5\u30fc\u3092\u8cbc\u308a\u4ed8\u3051\u308b\u3060\u3051\u3067\u3001\u6570\u79d2\u3067\u4e01\u5be7\u306a\u8fd4\u4fe1\u304c\u5f97\u3089\u308c\u307e\u3059\u3002',
    },
    problem: {
      en: 'A negative review sits unanswered for days because you don\u2019t know what to say.',
      ru: 'Негативный отзыв висит без ответа днями, потому что не знаешь, что написать.',
      es: 'Una rese\u00f1a negativa queda sin respuesta durante d\u00edas porque no sabes qu\u00e9 decir.',
      fr: 'Un avis n\u00e9gatif reste sans r\u00e9ponse pendant des jours parce que tu ne sais pas quoi dire.',
      de: 'Eine negative Bewertung bleibt tagelang unbeantwortet, weil du nicht wei\u00dft, was du sagen sollst.',
      pt: 'Uma avalia\u00e7\u00e3o negativa fica sem resposta por dias porque voc\u00ea n\u00e3o sabe o que dizer.',
      zh: '\u56e0\u4e3a\u4e0d\u77e5\u9053\u8be5\u8bf4\u4ec0\u4e48\uff0c\u5dee\u8bc4\u5c31\u8fd9\u6837\u653e\u7740\u597d\u51e0\u5929\u65e0\u4eba\u56de\u590d\u3002',
      ja: '\u4f55\u3092\u66f8\u3051\u3070\u3044\u3044\u304b\u5206\u304b\u3089\u305a\u3001\u60aa\u3044\u30ec\u30d3\u30e5\u30fc\u304c\u4f55\u65e5\u3082\u653e\u7f6e\u3055\u308c\u308b\u3002',
    },
    result: {
      en: 'Replies go out in minutes, not hours of second-guessing.',
      ru: 'Ответы уходят за минуты, а не после часов раздумья.',
      es: 'Las respuestas salen en minutos, no tras horas de dudas.',
      fr: 'Les r\u00e9ponses partent en quelques minutes, pas apr\u00e8s des heures d\u2019h\u00e9sitation.',
      de: 'Antworten gehen in Minuten raus, nicht nach Stunden des Z\u00f6gerns.',
      pt: 'As respostas saem em minutos, n\u00e3o depois de horas de d\u00favida.',
      zh: '\u56de\u590d\u5728\u51e0\u5206\u949f\u5185\u53d1\u51fa\uff0c\u800c\u4e0d\u662f\u7ea0\u7ed3\u597d\u51e0\u4e2a\u5c0f\u65f6\u3002',
      ja: '\u8fd4\u4fe1\u306f\u4f55\u6642\u9593\u3082\u60a9\u3080\u3053\u3068\u306a\u304f\u3001\u6570\u5206\u3067\u9001\u4fe1\u3067\u304d\u308b\u3002',
    },
    price: '$79',
    stat: { en: '20 languages', ru: '20 языков', es: '20 idiomas', fr: '20 langues', de: '20 Sprachen', pt: '20 idiomas', zh: '20\u79cd\u8bed\u8a00', ja: '20\u8a00\u8a9e' },
    url: 'https://reviewreply.plainwork.website/',
    widget: 'https://widget.lava.top/f30c6c97-507b-4591-b810-dd62ff16fb66',
    fullDescription: {
      en: "One unanswered bad review costs more than it looks like, every customer after it reads it too. Paste the review into ReviewReply AI and get three reply options at once, different in tone and length. But the real feature is the private \"for your eyes only\" note: the AI reads between the lines and flags it if the review is quietly pointing at a systemic issue, a gap in staff training, a recurring complaint about wait times. A free mini-audit of your business with every single reply.",
      ru: "Один плохой отзыв без ответа стоит дороже, чем кажется — его читают все следующие клиенты. Вставляешь отзыв в ReviewReply AI — получаешь сразу три варианта ответа, разных по тону и длине. Но настоящая фишка — эксклюзивная заметка «только для твоих глаз»: AI читает между строк и подсказывает, если за отзывом прячется системная проблема — пробел в обучении персонала, повторяющаяся жалоба на время ожидания. Бесплатный мини-аудит бизнеса при каждом ответе.",
      es: "Una mala resena sin respuesta cuesta mas de lo que parece, todos los clientes siguientes la leen. Pegas la resena en ReviewReply AI y obtienes tres opciones de respuesta a la vez, diferentes en tono y longitud. Pero la verdadera ventaja es la nota privada solo para tus ojos: la IA lee entre lineas y te avisa si la resena esconde un problema sistemico, un vacio en la capacitacion del personal, una queja recurrente sobre el tiempo de espera. Una mini auditoria gratuita de tu negocio con cada respuesta.",
      fr: "Un mauvais avis sans reponse coute plus cher qu'il n'y parait, tous les clients suivants le lisent aussi. Tu colles l'avis dans ReviewReply AI et obtiens trois options de reponse a la fois, differentes en ton et en longueur. Mais la vraie fonctionnalite, c'est la note privee pour tes yeux seulement : l'IA lit entre les lignes et te signale si l'avis cache un probleme systemique, une lacune dans la formation du personnel, une plainte recurrente sur le temps d'attente. Un mini-audit gratuit de ton entreprise a chaque reponse.",
      de: "Eine unbeantwortete schlechte Bewertung kostet mehr, als es scheint, jeder folgende Kunde liest sie auch. Du fuegst die Bewertung in ReviewReply AI ein und erhaeltst sofort drei Antwortoptionen, unterschiedlich in Ton und Laenge. Das eigentliche Feature ist aber die private Notiz nur fuer deine Augen: die KI liest zwischen den Zeilen und weist dich darauf hin, wenn die Bewertung ein systemisches Problem verbirgt, eine Luecke in der Mitarbeiterschulung, eine wiederkehrende Beschwerde ueber Wartezeiten. Ein kostenloses Mini-Audit deines Unternehmens bei jeder Antwort.",
      pt: "Uma avaliacao ruim sem resposta custa mais do que parece, todos os proximos clientes a leem tambem. Voce cola a avaliacao no ReviewReply AI e recebe tres opcoes de resposta de uma vez, diferentes em tom e comprimento. Mas o verdadeiro diferencial e a nota privada so para seus olhos: a IA le nas entrelinhas e avisa se a avaliacao esconde um problema sistemico, uma lacuna no treinamento da equipe, uma reclamacao recorrente sobre tempo de espera. Uma mini auditoria gratuita do seu negocio a cada resposta.",
      zh: "一条没有回复的差评，代价比看起来的更大——之后的每一位顾客都会看到它。把评论粘贴进 ReviewReply AI，立刻获得三种语气和长度都不同的回复选项。但真正的亮点是私密的仅你可见笔记：AI 会读出字里行间的含义，如果评论背后藏着系统性问题——员工培训的缺口、反复出现的等待时间投诉——它会提醒你。每次回复都附带一次免费的商业迷你诊断。",
      ja: "返信のない悪いレビューは、見た目以上に高くつく。その後に来るすべての顧客がそれを読むからだ。レビューをReviewReply AIに貼り付けると、トーンも長さも異なる3つの返信案が一度に手に入る。しかし本当の特長は「あなただけが見る」プライベートメモだ。AIは行間を読み取り、レビューの裏に構造的な問題——スタッフ研修の不足や、待ち時間への繰り返しの苦情——が隠れていないか教えてくれる。返信のたびに無料のビジネスミニ診断がついてくる。",
    },
    benefits: [
      'Reads between the lines - understands what an unhappy customer actually needs.',
      'Three reply options every time, different lengths and tones.',
      '\u201cFor your eyes only\u201d - spots systemic issues hiding inside a single review.',
      'Drafts a private follow-up message, and turns positive reviews into social posts.',
    ],
  },
  {
    tag: '03',
    name: 'Local Signal',
    line: {
      en: 'Get found on Google Search and Maps - posts, replies, SEO copy.',
      ru: 'Помогает найти вас в Google Поиске и Картах — посты, ответы, SEO-тексты.',
      es: 'Hazte visible en Google B\u00fasqueda y Maps: publicaciones, respuestas, textos SEO.',
      fr: 'Soyez visible sur Google Recherche et Maps : posts, r\u00e9ponses, textes SEO.',
      de: 'Werde auf Google Suche und Maps gefunden - Beitr\u00e4ge, Antworten, SEO-Texte.',
      pt: 'Seja encontrado no Google Pesquisa e Maps - posts, respostas, textos de SEO.',
      zh: '\u5728Google\u641c\u7d22\u548c\u5730\u56fe\u4e2d\u88ab\u53d1\u73b0\u2014\u2014\u5e16\u6587\u3001\u56de\u590d\u3001SEO\u6587\u6848\u3002',
      ja: 'Google\u691c\u7d22\u3068\u30de\u30c3\u30d7\u3067\u898b\u3064\u3051\u3066\u3082\u3089\u3048\u308b\u2014\u2014\u6295\u7a3f\u3001\u8fd4\u4fe1\u3001SEO\u6587\u3002',
    },
    problem: {
      en: 'Your Google Business Profile sits untouched for months, quietly losing ground in search.',
      ru: 'Профиль в Google Business месяцами стоит без обновлений, теряя позиции в поиске.',
      es: 'Tu perfil de Google Business lleva meses sin actualizar, perdiendo posiciones en la b\u00fasqueda.',
      fr: 'Votre fiche Google Business reste inchang\u00e9e pendant des mois, perdant du terrain dans les recherches.',
      de: 'Dein Google-Business-Profil bleibt monatelang unber\u00fchrt und verliert leise an Sichtbarkeit.',
      pt: 'Seu perfil do Google Business fica meses sem atualiza\u00e7\u00e3o, perdendo posi\u00e7\u00f5es na busca.',
      zh: '\u4f60\u7684Google\u5546\u5bb6\u4e2a\u4eba\u8d44\u6599\u6570\u6708\u672a\u66f4\u65b0\uff0c\u6392\u540d\u6094\u6094\u4e0b\u6ed1\u3002',
      ja: 'Google\u30d3\u30b8\u30cd\u30b9\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u304c\u6570\u30f6\u6708\u653e\u7f6e\u3055\u308c\u3001\u691c\u7d22\u9806\u4f4d\u304c\u4f4e\u4e0b\u3002',
    },
    result: {
      en: 'Stays active without you having to invent something to post every week.',
      ru: 'Остаётся активным без необходимости каждую неделю придумывать, что постить.',
      es: 'Se mantiene activo sin que tengas que inventar algo que publicar cada semana.',
      fr: 'Reste actif sans que vous ayez \u00e0 inventer quelque chose \u00e0 publier chaque semaine.',
      de: 'Bleibt aktiv, ohne dass du dir jede Woche etwas Neues ausdenken musst.',
      pt: 'Permanece ativo sem que voc\u00ea precise inventar algo para postar toda semana.',
      zh: '\u65e0\u9700\u6bcf\u5468\u60f3\u53d1\u4ec0\u4e48\uff0c\u4fdd\u6301\u6d3b\u8dc3\u3002',
      ja: '\u6bce\u9031\u6295\u7a3f\u5185\u5bb9\u3092\u8003\u3048\u308b\u5fc5\u8981\u306a\u304f\u3001\u30a2\u30af\u30c6\u30a3\u30d6\u3092\u7dad\u6301\u3002',
    },
    price: '$99',
    stat: { en: '5 tools', ru: '5 инструментов', es: '5 herramientas', fr: '5 outils', de: '5 Werkzeuge', pt: '5 ferramentas', zh: '5\u4e2a\u5de5\u5177', ja: '5\u3064\u306e\u30c4\u30fc\u30eb' },
    url: 'https://localsignal.plainwork.website/',
    widget: 'https://widget.lava.top/cb430a7a-32e3-4578-9806-817d65bb3a26',
    fullDescription: {
      en: "The most feature-dense of the five, six tools in one. Open it, and the first thing you see is \"This Week\\'s 3 Actions\", not vague advice, a concrete list of exactly what to do right now to get your Google Business Profile working for you again. From there: posts, Q&A replies, SEO copy, a full month of content planned at once, and \"Stand Out\", paste a competitor\\'s post, find their weak spot and your unique angle.",
      ru: "Самый насыщенный из пяти — шесть инструментов в одном. Открываешь — и сразу видишь «3 действия на эту неделю»: не абстрактный совет, а конкретный список, что именно сделать прямо сейчас, чтобы карточка компании в Google снова начала работать на тебя. Дальше — посты для Google Business Profile, ответы на вопросы клиентов, SEO-тексты, полный месячный контент-план, и «Stand Out» — вставляешь пост конкурента, находишь его слабое место и свой уникальный угол.",
      es: "El mas completo de los cinco, seis herramientas en una. Lo abres, y lo primero que ves es 3 acciones para esta semana: no un consejo abstracto, sino una lista concreta de que hacer exactamente ahora mismo para que tu perfil de Google Business vuelva a trabajar para ti. Luego: publicaciones para Google Business Profile, respuestas a preguntas de clientes, textos SEO, un plan de contenido mensual completo de una vez, y Stand Out, pegas el post de un competidor, encuentras su punto debil y tu angulo unico.",
      fr: "Le plus riche des cinq, six outils en un. Tu l'ouvres, et la premiere chose que tu vois, ce sont les 3 actions de la semaine : pas un conseil vague, mais une liste concrete de ce qu'il faut faire maintenant pour que ta fiche Google Business se remette a travailler pour toi. Ensuite : posts pour Google Business Profile, reponses aux questions des clients, textes SEO, un plan de contenu mensuel complet en une fois, et Stand Out, tu colles le post d'un concurrent, tu trouves son point faible et ton angle unique.",
      de: "Das umfangreichste der fuenf, sechs Tools in einem. Du oeffnest es, und das Erste, was du siehst, sind die 3 Aktionen dieser Woche: kein vager Ratschlag, sondern eine konkrete Liste, was genau jetzt zu tun ist, damit dein Google-Unternehmensprofil wieder fuer dich arbeitet. Dann: Beitraege fuer Google Business Profile, Antworten auf Kundenfragen, SEO-Texte, ein kompletter Monats-Content-Plan auf einmal, und Stand Out, du fuegst den Beitrag eines Mitbewerbers ein, findest seine Schwachstelle und deinen einzigartigen Winkel.",
      pt: "O mais completo dos cinco, seis ferramentas em uma. Voce abre, e a primeira coisa que ve sao 3 acoes para esta semana: nao um conselho vago, mas uma lista concreta do que fazer agora mesmo para que seu perfil do Google Business volte a trabalhar para voce. Depois: posts para o Google Business Profile, respostas a perguntas de clientes, textos SEO, um plano de conteudo mensal completo de uma vez, e Stand Out, voce cola o post de um concorrente, encontra o ponto fraco dele e seu angulo unico.",
      zh: "五款产品中功能最丰富的一个，六个工具合而为一。打开它，首先看到的是「本周三项行动」：不是空泛的建议，而是一份具体清单，告诉你现在到底该做什么，才能让你的 Google 商家资料重新为你发挥作用。接下来是：Google 商家资料帖子、顾客问题回复、SEO 文案、一次生成整月内容计划，以及「Stand Out」——粘贴竞争对手的帖子，找出他们的弱点和你的独特角度。",
      ja: "5つの中で最も機能が充実、6つのツールが1つに。開くとまず目に入るのは「今週の3つのアクション」——曖昧なアドバイスではなく、Googleビジネスプロフィールを再び働かせるために、今すぐ何をすべきかの具体的なリストだ。そこから先は：Googleビジネスプロフィール向けの投稿、顧客からの質問への返信、SEOコピー、一度に作成する月間コンテンツプラン、そして「Stand Out」——競合の投稿を貼り付けると、その弱点とあなただけの切り口が見つかる。",
    },
    benefits: [
      '\u201cThis Week\u2019s 3 Actions\u201d - a concrete plan, not just data.',
      'GBP posts and Q&A replies, matched to your tone and location.',
      'A full month\u2019s content calendar - 12 post ideas, ready to publish.',
      'Stand Out: paste a competitor\u2019s post, find the gap you can fill.',
    ],
  },
  {
    tag: '04',
    name: 'SayItRight AI',
    line: {
      en: 'Write in your own language - get natural, professional English back.',
      ru: 'Пишешь на своём языке — получаешь естественный профессиональный английский.',
      es: 'Escribe en tu idioma - recibe ingl\u00e9s natural y profesional.',
      fr: '\u00c9crivez dans votre langue - recevez un anglais naturel et professionnel.',
      de: 'Schreibe in deiner Sprache - erhalte nat\u00fcrliches, professionelles Englisch.',
      pt: 'Escreva no seu idioma - receba ingl\u00eas natural e profissional.',
      zh: '\u7528\u4f60\u81ea\u5df1\u7684\u8bed\u8a00\u5199\u4f5c\u2014\u2014\u83b7\u5f97\u81ea\u7136\u4e13\u4e1a\u7684\u82f1\u8bed\u3002',
      ja: '\u81ea\u5206\u306e\u8a00\u8a9e\u3067\u66f8\u3044\u3066\u2014\u2014\u81ea\u7136\u3067\u30d7\u30ed\u306e\u82f1\u8a9e\u306b\u3002',
    },
    problem: {
      en: 'You write to a client in broken English and just hope they understand.',
      ru: 'Ты пишешь клиенту на ломаном английском и надеешься, что он поймёт.',
      es: 'Le escribes a un cliente en ingl\u00e9s roto y solo esperas que te entienda.',
      fr: 'Vous \u00e9crivez \u00e0 un client dans un anglais approximatif en esp\u00e9rant qu\u2019il comprenne.',
      de: 'Du schreibst einem Kunden in gebrochenem Englisch und hoffst, dass er es versteht.',
      pt: 'Voc\u00ea escreve para um cliente em ingl\u00eas quebrado e s\u00f3 espera que ele entenda.',
      zh: '\u4f60\u7528\u751f\u786c\u7684\u82f1\u8bed\u7ed9\u5ba2\u6237\u5199\u4fe1\uff0c\u53ea\u80fd\u5e0c\u671b\u5bf9\u65b9\u770b\u61c2\u3002',
      ja: '\u30d6\u30ed\u30fc\u30af\u30f3\u82f1\u8a9e\u3067\u9867\u5ba2\u306b\u66f8\u304d\u3001\u4f1d\u308f\u308b\u3053\u3068\u3092\u9858\u3046\u3060\u3051\u3002',
    },
    result: {
      en: 'Every fix is explained in your own language, so you actually learn.',
      ru: 'Каждое исправление объясняется на твоём языке — ты реально учишься.',
      es: 'Cada correcci\u00f3n se explica en tu idioma - realmente aprendes.',
      fr: 'Chaque correction est expliqu\u00e9e dans votre langue - vous apprenez vraiment.',
      de: 'Jede Korrektur wird in deiner Sprache erkl\u00e4rt - du lernst wirklich dazu.',
      pt: 'Cada corre\u00e7\u00e3o \u00e9 explicada no seu idioma - voc\u00ea realmente aprende.',
      zh: '\u6bcf\u4e2a\u4fee\u6539\u90fd\u7528\u4f60\u7684\u8bed\u8a00\u89e3\u91ca\u2014\u2014\u4f60\u771f\u6b63\u5b66\u5230\u4e1c\u897f\u3002',
      ja: '\u4fee\u6b63\u306f\u3059\u3079\u3066\u81ea\u5206\u306e\u8a00\u8a9e\u3067\u8aac\u660e\u3055\u308c\u308b\u2014\u2014\u672c\u5f53\u306b\u5b66\u3079\u308b\u3002',
    },
    price: '$59',
    stat: { en: '35 languages', ru: '35 языков', es: '35 idiomas', fr: '35 langues', de: '35 Sprachen', pt: '35 idiomas', zh: '35\u79cd\u8bed\u8a00', ja: '35\u8a00\u8a9e' },
    url: 'https://sayitright.plainwork.website/',
    widget: 'https://widget.lava.top/a60a430e-55eb-4989-9881-a98ad2a99e45',
    fullDescription: {
      en: "Built for anyone who writes to a client in English and hesitates before hitting send. Write however comes naturally, in your own language or in rough English, and get back more than a correction: every fix explained in your own native language. Not just \"this is right\", but why. Listen to the result read aloud before you send it, so you actually hear how it lands.",
      ru: "Для тех, кто пишет клиенту на английском и боится нажать «отправить». Пишешь как получается — на родном языке или на ломаном английском — и получаешь не просто исправленный текст, а объяснение каждой правки на своём родном языке. Не просто «вот так правильно», а «почему именно так». Можно прослушать результат вслух — узнать, как он звучит на самом деле, до того как отправить.",
      es: "Para quienes escriben a un cliente en ingles y dudan antes de pulsar enviar. Escribes como te sale, en tu idioma natal o en ingles imperfecto, y obtienes mas que una correccion: cada arreglo explicado en tu propio idioma nativo. No solo asi esta bien, sino por que. Puedes escuchar el resultado en voz alta antes de enviarlo, para saber realmente como suena.",
      fr: "Pour ceux qui ecrivent a un client en anglais et hesitent avant d'appuyer sur envoyer. Tu ecris comme ca vient, dans ta langue maternelle ou en anglais approximatif, et tu obtiens plus qu'une correction : chaque modification expliquee dans ta propre langue. Pas juste c'est comme ca qu'on dit, mais pourquoi. Tu peux ecouter le resultat a voix haute avant de l'envoyer, pour vraiment entendre comment ca sonne.",
      de: "Fuer alle, die einem Kunden auf Englisch schreiben und zoegern, bevor sie auf Senden klicken. Du schreibst, wie es dir natuerlich kommt, in deiner Muttersprache oder in holprigem Englisch, und bekommst mehr als eine Korrektur zurueck: jede Aenderung in deiner eigenen Muttersprache erklaert. Nicht nur so ist es richtig, sondern warum. Du kannst dir das Ergebnis vor dem Senden vorlesen lassen, um wirklich zu hoeren, wie es klingt.",
      pt: "Para quem escreve para um cliente em ingles e hesita antes de clicar em enviar. Voce escreve como vem naturalmente, no seu idioma nativo ou em ingles tosco, e recebe mais do que uma correcao: cada ajuste explicado no seu proprio idioma nativo. Nao apenas assim esta certo, mas o porque. Voce pode ouvir o resultado em voz alta antes de enviar, para realmente saber como soa.",
      zh: "献给那些用英语给客户写信、却在按下「发送」前犹豫不决的人。你用最自然的方式写作，无论是母语还是不太流利的英语，得到的不只是一次纠正：每一处修改都会用你的母语解释清楚。不只是「这样才对」，而是「为什么这样才对」。发送之前，还可以听一听朗读的结果，真正听出它听起来是什么样子。",
      ja: "英語でクライアントにメッセージを書き、「送信」を押す前に躊躇してしまう人のために。自然に出てくる言葉で書けばいい——母国語でも、たどたどしい英語でも。得られるのは単なる修正以上のもの、すべての修正点が自分の母国語で説明される。「これが正しい」だけでなく、「なぜそうなのか」まで。送信前に結果を音声で聞くこともでき、実際にどう聞こえるかを確認できる。",
    },
    benefits: [
      'Write however you want - your language or rough English, either works.',
      'Every fix explained in your own language, so you actually learn.',
      'A formality slider - from very formal to casual, in one move.',
      'Listen to the result read aloud, and save your last 5 rewrites.',
    ],
  },
  {
    tag: '05',
    name: 'Content Strategist AI',
    line: {
      en: 'A week of content ideas - built for the platform you\u2019re actually posting on.',
      ru: 'Неделя идей для контента — под ту платформу, где ты реально публикуешься.',
      es: 'Una semana de ideas de contenido - pensadas para la plataforma en la que realmente publicas.',
      fr: 'Une semaine d\u2019id\u00e9es de contenu - pens\u00e9e pour la plateforme sur laquelle vous publiez vraiment.',
      de: 'Eine Woche Content-Ideen - gemacht f\u00fcr die Plattform, auf der du wirklich postest.',
      pt: 'Uma semana de ideias de conte\u00fado - feitas para a plataforma onde voc\u00ea realmente publica.',
      zh: '\u4e00\u5468\u7684\u5185\u5bb9\u60f3\u6cd5\u2014\u2014\u4e13\u4e3a\u4f60\u771f\u6b63\u53d1\u5e03\u7684\u5e73\u53f0\u6253\u9020\u3002',
      ja: '\u5b9f\u969b\u306b\u6295\u7a3f\u3059\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u305f\u3081\u306e\u3001\u4e00\u9031\u9593\u5206\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u30a2\u30a4\u30c7\u30a2\u3002',
    },
    problem: {
      en: 'You stare at an empty content calendar every single week, and every idea feels the same.',
      ru: 'Каждую неделю смотришь на пустой контент-план, и все идеи звучат одинаково.',
      es: 'Miras un calendario de contenido vac\u00edo cada semana, y todas las ideas suenan igual.',
      fr: 'Vous fixez un calendrier de contenu vide chaque semaine, et toutes les id\u00e9es se ressemblent.',
      de: 'Du starrst jede Woche auf einen leeren Content-Kalender, und jede Idee klingt gleich.',
      pt: 'Voc\u00ea encara um calend\u00e1rio de conte\u00fado vazio toda semana, e todas as ideias parecem iguais.',
      zh: '\u4f60\u6bcf\u5468\u90fd\u76ef\u7740\u7a7a\u767d\u7684\u5185\u5bb9\u65e5\u5386\u53d1\u6101\uff0c\u6240\u6709\u60f3\u6cd5\u90fd\u5927\u540c\u5c0f\u5f02\u3002',
      ja: '\u6bce\u9031\u7a7a\u3063\u307d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30ec\u30f3\u30c0\u30fc\u3092\u524d\u306b\u3057\u3066\u3001\u3069\u306e\u30a2\u30a4\u30c7\u30a2\u3082\u540c\u3058\u3088\u3046\u306b\u611f\u3058\u3066\u3057\u307e\u3046\u3002',
    },
    result: {
      en: 'A full week of ideas, balanced across five content pillars, ready to publish.',
      ru: 'Полная неделя идей, сбалансированных по пяти content pillars, готовых к публикации.',
      es: 'Una semana completa de ideas, equilibradas en cinco pilares de contenido, listas para publicar.',
      fr: 'Une semaine compl\u00e8te d\u2019id\u00e9es, \u00e9quilibr\u00e9es sur cinq piliers de contenu, pr\u00eates \u00e0 publier.',
      de: 'Eine ganze Woche Ideen, ausgewogen \u00fcber f\u00fcnf Content-S\u00e4ulen, bereit zur Ver\u00f6ffentlichung.',
      pt: 'Uma semana inteira de ideias, equilibradas em cinco pilares de conte\u00fado, prontas para publicar.',
      zh: '\u6574\u6574\u4e00\u5468\u7684\u60f3\u6cd5\uff0c\u5728\u4e94\u4e2a\u5185\u5bb9\u652f\u67f1\u4e4b\u95f4\u5e73\u8861\u5206\u5e03\uff0c\u968f\u65f6\u53ef\u53d1\u3002',
      ja: '5\u3064\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u30d4\u30e9\u30fc\u306b\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u5206\u914d\u3055\u308c\u305f\u3001\u4e00\u9031\u9593\u5206\u306e\u6295\u7a3f\u6e96\u5099\u5b8c\u4e86\u306e\u30a2\u30a4\u30c7\u30a2\u3002',
    },
    price: '$129',
    stat: { en: '4 modes', ru: '4 режима', es: '4 modos', fr: '4 modes', de: '4 Modi', pt: '4 modos', zh: '4\u79cd\u6a21\u5f0f', ja: '4\u3064\u306e\u30e2\u30fc\u30c9' },
    url: 'https://contentstrategist.plainwork.website/',
    widget: 'https://widget.lava.top/bfbe4e9d-a890-48eb-82a6-8d081e6bec26',
    fullDescription: {
      en: "The most ambitious product in the lineup. It doesn\\'t write posts, it builds the strategy: what to publish, where, and when. Four modes, including a photo planner that assigns each uploaded image a day, a platform, and a content pillar on its own. Five content pillars automatically balanced across the week, each color-coded. Don\\'t like one day\\'s idea? Regenerate just that one, the rest of the week stays untouched.",
      ru: "Самый концептуально амбициозный продукт линейки. Не пишет посты — строит стратегию: что публиковать, где и когда. Четыре режима, включая фото-планировщик — загружаешь до 7 фото, AI распределяет их по дням, площадкам и content pillars сам. Пять content pillars автоматически сбалансированы по неделе, каждый — свой цвет. Не понравился один день — перегенерируй именно его, не трогая всю неделю.",
      es: "El producto mas ambicioso conceptualmente de la linea. No escribe publicaciones, construye la estrategia: que publicar, donde y cuando. Cuatro modos, incluyendo un planificador de fotos, subes hasta 7 fotos y la IA las asigna a dias, plataformas y pilares de contenido por si sola. Cinco pilares de contenido equilibrados automaticamente durante la semana, cada uno con su color. No te gusta la idea de un dia? Regenera solo esa, el resto de la semana queda intacto.",
      fr: "Le produit le plus ambitieux conceptuellement de la gamme. Il n'ecrit pas de posts, il construit la strategie : quoi publier, ou et quand. Quatre modes, dont un planificateur photo, tu importes jusqu'a 7 photos et l'IA les assigne elle-meme a des jours, des plateformes et des piliers de contenu. Cinq piliers de contenu equilibres automatiquement sur la semaine, chacun avec sa couleur. Une idee d'un jour ne te plait pas ? Regenere juste celle-la, le reste de la semaine reste intact.",
      de: "Das konzeptionell ambitionierteste Produkt der Reihe. Es schreibt keine Beitraege, es baut die Strategie: was zu veroeffentlichen ist, wo und wann. Vier Modi, darunter ein Foto-Planer, du laedst bis zu 7 Fotos hoch und die KI ordnet sie selbst Tagen, Plattformen und Content-Saeulen zu. Fuenf Content-Saeulen automatisch ueber die Woche ausbalanciert, jede mit eigener Farbe. Gefaellt dir die Idee fuer einen Tag nicht? Generiere nur diesen neu, der Rest der Woche bleibt unberuehrt.",
      pt: "O produto conceitualmente mais ambicioso da linha. Nao escreve posts, constroi a estrategia: o que publicar, onde e quando. Quatro modos, incluindo um planejador de fotos, voce envia ate 7 fotos e a IA as atribui sozinha a dias, plataformas e pilares de conteudo. Cinco pilares de conteudo equilibrados automaticamente ao longo da semana, cada um com sua cor. Nao gostou da ideia de um dia? Regenere so aquele, o resto da semana fica intacto.",
      zh: "该系列中概念上最具野心的产品。它不写帖子，而是构建策略：发布什么、在哪里发布、何时发布。四种模式，包括照片规划器——上传最多 7 张照片，AI 会自主将它们分配到具体日期、平台和内容支柱。五大内容支柱在一周内自动保持平衡，每个都有自己的颜色标注。不喜欢某一天的创意？只需重新生成那一天，其余部分保持不变。",
      ja: "ラインナップの中で最も概念的に野心的な製品。投稿を書くのではなく、戦略を構築する——何を、どこに、いつ投稿するか。写真プランナーを含む4つのモード。最大7枚の写真をアップロードすると、AIが自ら曜日、プラットフォーム、コンテンツの柱に割り振る。5つのコンテンツの柱が週全体で自動的にバランスよく配分され、それぞれに色分けがされる。ある日のアイデアが気に入らない？その日だけを再生成すればよく、残りの週はそのまま残る。",
    },
    benefits: [
      'Single platform, cross-platform calendar, competitor gap analysis, or upload photos for a strategic posting plan.',
      '5 content pillars, automatically balanced so your feed never feels one-note.',
      'Regenerate a single day without redoing the whole week - and hashtags, best posting times included.',
      'Available in 25 languages - interface and generation both.',
    ],
  },
];

const principles = [
  {
    n: '1',
    title: { en: 'One job, done well', ru: 'Одна задача, сделанная хорошо', es: 'Una tarea, bien hecha', fr: 'Une t\u00e2che, bien faite', de: 'Eine Aufgabe, gut gemacht', pt: 'Uma tarefa, bem feita', zh: '\u4e00\u9879\u4efb\u52a1\uff0c\u505a\u5230\u6781\u81f4', ja: '\u4e00\u3064\u306e\u4ed5\u4e8b\u3092\u3001\u3057\u3063\u304b\u308a\u3068' },
    body: { en: 'Every tool solves exactly one repetitive task. No dashboards to learn, no features you\u2019ll never open.', ru: 'Каждый инструмент решает ровно одну повторяющуюся задачу. Никаких панелей для изучения, никаких функций, которые ты никогда не откроешь.', es: 'Cada herramienta resuelve exactamente una tarea repetitiva. Sin paneles que aprender, sin funciones que nunca usar\u00e1s.', fr: 'Chaque outil r\u00e9sout exactement une t\u00e2che r\u00e9p\u00e9titive. Pas de tableau de bord \u00e0 apprendre, pas de fonctions que vous n\u2019ouvrirez jamais.', de: 'Jedes Tool l\u00f6st genau eine wiederkehrende Aufgabe. Kein Dashboard zum Lernen, keine Funktionen, die du nie \u00f6ffnest.', pt: 'Cada ferramenta resolve exatamente uma tarefa repetitiva. Sem pain\u00e9is para aprender, sem recursos que voc\u00ea nunca vai abrir.', zh: '\u6bcf\u4e2a\u5de5\u5177\u53ea\u89e3\u51b3\u4e00\u4e2a\u91cd\u590d\u6027\u4efb\u52a1\u3002\u65e0\u9700\u5b66\u4e60\u4eea\u8868\u76d8\uff0c\u6ca1\u6709\u4f60\u6c38\u8fdc\u4e0d\u4f1a\u6253\u5f00\u7684\u529f\u80fd\u3002', ja: '\u5404\u30c4\u30fc\u30eb\u306f\u305f\u3060\u4e00\u3064\u306e\u53cd\u5fa9\u4f5c\u696d\u3092\u89e3\u6c7a\u3002\u5b66\u3076\u3079\u304d\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3082\u3001\u4f7f\u308f\u306a\u3044\u6a5f\u80fd\u3082\u306a\u3057\u3002' },
  },
  {
    n: '2',
    title: { en: 'Try before you trust', ru: 'Попробуй, прежде чем довериться', es: 'Prueba antes de confiar', fr: 'Essayez avant de faire confiance', de: 'Testen, bevor man vertraut', pt: 'Experimente antes de confiar', zh: '\u5148\u4f53\u9a8c\uff0c\u540e\u4fe1\u4efb', ja: '\u4fe1\u983c\u3059\u308b\u524d\u306b\u8a66\u3059' },
    body: { en: 'You can see what a tool does before you hand over any details. No account required just to look.', ru: 'Ты можешь увидеть, что делает инструмент, до того как что-то указывать. Аккаунт не нужен даже чтобы просто посмотреть.', es: 'Puedes ver qu\u00e9 hace una herramienta antes de dar ning\u00fan dato. No hace falta cuenta solo para mirar.', fr: 'Vous pouvez voir ce que fait un outil avant de fournir la moindre information. Aucun compte requis juste pour regarder.', de: 'Du siehst, was ein Tool tut, bevor du irgendwelche Angaben machst. Kein Konto n\u00f6tig, nur um zu schauen.', pt: 'Voc\u00ea pode ver o que uma ferramenta faz antes de fornecer qualquer dado. N\u00e3o \u00e9 preciso conta s\u00f3 para olhar.', zh: '\u5728\u63d0\u4f9b\u4efb\u4f55\u4fe1\u606f\u4e4b\u524d\uff0c\u4f60\u5c31\u80fd\u770b\u5230\u5de5\u5177\u7684\u5b9e\u9645\u6548\u679c\u3002\u4ec5\u4ec5\u67e5\u770b\u65e0\u9700\u6ce8\u518c\u8d26\u53f7\u3002', ja: '\u60c5\u5831\u3092\u5165\u529b\u3059\u308b\u524d\u306b\u3001\u30c4\u30fc\u30eb\u306e\u52d5\u304d\u3092\u78ba\u8a8d\u3067\u304d\u308b\u3002\u898b\u308b\u3060\u3051\u306a\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4e0d\u8981\u3002' },
  },
  {
    n: '3',
    title: { en: 'Ships in days, not quarters', ru: 'Запускается за дни, не за кварталы', es: 'Se lanza en d\u00edas, no en trimestres', fr: 'Livr\u00e9 en jours, pas en trimestres', de: 'Fertig in Tagen, nicht in Quartalen', pt: 'Lan\u00e7ado em dias, n\u00e3o em trimestres', zh: '\u6570\u5929\u5373\u53ef\u4e0a\u7ebf\uff0c\u800c\u975e\u6570\u4e2a\u5b63\u5ea6', ja: '\u56db\u534a\u671f\u3067\u306f\u306a\u304f\u6570\u65e5\u3067\u30ea\u30ea\u30fc\u30b9' },
    body: { en: 'Small enough that one person can build it end to end - so it goes from idea to live product fast.', ru: 'Достаточно просто, чтобы один человек построил всё целиком — от идеи до живого продукта быстро.', es: 'Lo bastante peque\u00f1o para que una sola persona lo construya de principio a fin, as\u00ed que pasa de idea a producto real r\u00e1pido.', fr: 'Assez petit pour qu\u2019une seule personne le construise de bout en bout - donc \u00e7a passe vite de l\u2019id\u00e9e au produit r\u00e9el.', de: 'Klein genug, dass eine Person es komplett allein baut - von der Idee zum fertigen Produkt, schnell.', pt: 'Pequeno o suficiente para que uma pessoa construa tudo sozinha - da ideia ao produto real, r\u00e1pido.', zh: '\u89c4\u6a21\u5c0f\u5230\u4e00\u4e2a\u4eba\u5c31\u80fd\u5b8c\u6210\u5f00\u53d1\u2014\u2014\u4ece\u60f3\u6cd5\u5230\u4e0a\u7ebf\u4ea7\u54c1\u5f88\u5feb\u3002', ja: '\u4e00\u4eba\u3067\u5b8c\u7d50\u3067\u304d\u308b\u898f\u6a21\u3060\u304b\u3089\u3001\u30a2\u30a4\u30c7\u30a2\u304b\u3089\u5b9f\u969b\u306e\u88fd\u54c1\u307e\u3067\u304c\u65e9\u3044\u3002' },
  },
  {
    n: '4',
    title: { en: 'Pay once, keep it', ru: 'Оплатил раз — пользуйся всегда', es: 'Paga una vez, qu\u00e9datelo', fr: 'Payez une fois, gardez-le', de: 'Einmal zahlen, für immer behalten', pt: 'Pague uma vez, fique com ele', zh: '\u4ed8\u8d39\u4e00\u6b21\uff0c\u6c38\u4e45\u62e5\u6709', ja: '\u4e00\u5ea6\u306e\u652f\u6255\u3044\u3067\u3001\u305a\u3063\u3068\u4f7f\u3048\u308b' },
    body: { en: 'No subscriptions to track or cancel. You buy access, it\u2019s yours.', ru: 'Никаких подписок, которые надо отслеживать или отменять. Купил доступ — он твой.', es: 'Sin suscripciones que rastrear ni cancelar. Compras el acceso y es tuyo.', fr: 'Aucun abonnement \u00e0 suivre ou annuler. Vous achetez l\u2019acc\u00e8s, il est \u00e0 vous.', de: 'Keine Abos zum Verfolgen oder K\u00fcndigen. Du kaufst Zugang, er geh\u00f6rt dir.', pt: 'Sem assinaturas para rastrear ou cancelar. Voc\u00ea compra o acesso, ele \u00e9 seu.', zh: '\u65e0\u9700\u8ffd\u8e2a\u6216\u53d6\u6d88\u8ba2\u9605\u3002\u4e00\u6b21\u8d2d\u4e70\uff0c\u6c38\u4e45\u5c5e\u4e8e\u4f60\u3002', ja: '\u8ffd\u8de1\u3084\u89e3\u7d04\u304c\u5fc5\u8981\u306a\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306a\u3057\u3002\u8cfc\u5165\u3057\u305f\u30a2\u30af\u30bb\u30b9\u306f\u3042\u306a\u305f\u306e\u3082\u306e\u3002' },
  },
];

const capabilities = [
  {
    label: { en: 'AI integration', ru: 'AI-интеграция', es: 'Integraci\u00f3n de IA', fr: 'Int\u00e9gration IA', de: 'KI-Integration', pt: 'Integra\u00e7\u00e3o de IA', zh: 'AI\u96c6\u6210', ja: 'AI\u7d71\u5408' },
    body: { en: 'Every tool is built around the Claude API - prompt design, structured output, and multimodal input like photo understanding.', ru: 'Каждый инструмент построен вокруг Claude API — дизайн промптов, структурированный вывод и мультимодальный ввод, например понимание фото.', es: 'Cada herramienta se construye sobre la API de Claude: dise\u00f1o de prompts, salida estructurada y entrada multimodal como comprensi\u00f3n de fotos.', fr: 'Chaque outil est con\u00e7u autour de l\u2019API Claude - conception de prompts, sortie structur\u00e9e et entr\u00e9e multimodale comme la compr\u00e9hension de photos.', de: 'Jedes Tool basiert auf der Claude API - Prompt-Design, strukturierte Ausgabe und multimodale Eingabe wie Bildverst\u00e4ndnis.', pt: 'Cada ferramenta \u00e9 constru\u00edda em torno da API Claude - design de prompts, sa\u00edda estruturada e entrada multimodal como compreens\u00e3o de fotos.', zh: '\u6bcf\u4e2a\u5de5\u5177\u90fd\u57fa\u4e8eClaude API\u6784\u5efa\u2014\u2014\u63d0\u793a\u8bcd\u8bbe\u8ba1\u3001\u7ed3\u6784\u5316\u8f93\u51fa\u4ee5\u53ca\u7167\u7247\u7406\u89e3\u7b49\u591a\u6a21\u6001\u8f93\u5165\u3002', ja: '\u5404\u30c4\u30fc\u30eb\u306fClaude API\u3092\u57fa\u76e4\u306b\u69cb\u7bc9\u2014\u2014\u30d7\u30ed\u30f3\u30d7\u30c8\u8a2d\u8a08\u3001\u69cb\u9020\u5316\u3055\u308c\u305f\u51fa\u529b\u3001\u5199\u771f\u7406\u89e3\u306a\u3069\u306e\u30de\u30eb\u30c1\u30e2\u30fc\u30c0\u30eb\u5165\u529b\u3002' },
  },
  {
    label: { en: 'Localization', ru: 'Локализация', es: 'Localizaci\u00f3n', fr: 'Localisation', de: 'Lokalisierung', pt: 'Localiza\u00e7\u00e3o', zh: '\u672c\u5730\u5316', ja: '\u30ed\u30fc\u30ab\u30e9\u30a4\u30ba' },
    body: { en: '20 languages across all products, including full right-to-left layouts for Arabic and Persian.', ru: '20 языков во всех продуктах, включая полную поддержку справа-налево для арабского и персидского.', es: '20 idiomas en todos los productos, incluyendo dise\u00f1o completo de derecha a izquierda para \u00e1rabe y persa.', fr: '20 langues sur tous les produits, y compris une mise en page compl\u00e8te de droite \u00e0 gauche pour l\u2019arabe et le persan.', de: '20 Sprachen in allen Produkten, inklusive vollst\u00e4ndigem Rechts-nach-links-Layout f\u00fcr Arabisch und Persisch.', pt: '20 idiomas em todos os produtos, incluindo layout completo da direita para a esquerda para \u00e1rabe e persa.', zh: '\u6240\u6709\u4ea7\u54c1\u652f\u628120\u79cd\u8bed\u8a00\uff0c\u5305\u62ec\u963f\u62c9\u4f2f\u8bed\u548c\u6ce2\u65af\u8bed\u7684\u5b8c\u6574\u53f3\u5411\u5de6\u5e03\u5c40\u3002', ja: '\u5168\u88fd\u54c1\u306720\u8a00\u8a9e\u306b\u5bfe\u5fdc\u3002\u30a2\u30e9\u30d3\u30a2\u8a9e\u30fb\u30da\u30eb\u30b7\u30a2\u8a9e\u306e\u53f3\u304b\u3089\u5de6\u30ec\u30a4\u30a2\u30a6\u30c8\u3082\u5b8c\u5168\u5bfe\u5fdc\u3002' },
  },
  {
    label: { en: 'Payment infrastructure', ru: 'Платёжная инфраструктура', es: 'Infraestructura de pagos', fr: 'Infrastructure de paiement', de: 'Zahlungsinfrastruktur', pt: 'Infraestrutura de pagamentos', zh: '\u652f\u4ed8\u57fa\u7840\u8bbe\u65bd', ja: '\u6c7a\u6e08\u30a4\u30f3\u30d5\u30e9' },
    body: { en: 'Card checkout via an embedded widget, license-code gating, and marketplace-ready redemption systems for platforms like AppSumo.', ru: 'Оплата картой через встроенный виджет, доступ по кодам, и системы активации для маркетплейсов вроде AppSumo.', es: 'Pago con tarjeta v\u00eda widget integrado, acceso por c\u00f3digo de licencia y sistemas de canje listos para marketplaces como AppSumo.', fr: 'Paiement par carte via un widget int\u00e9gr\u00e9, acc\u00e8s par code de licence, et syst\u00e8mes d\u2019activation pr\u00eats pour des marketplaces comme AppSumo.', de: 'Kartenzahlung \u00fcber ein eingebettetes Widget, Lizenzcode-Zugang und marktplatzfertige Einl\u00f6sesysteme f\u00fcr Plattformen wie AppSumo.', pt: 'Pagamento por cart\u00e3o via widget incorporado, acesso por c\u00f3digo de licen\u00e7a e sistemas de resgate prontos para marketplaces como AppSumo.', zh: '\u901a\u8fc7\u5d4c\u5165\u5f0f\u63a7\u4ef6\u5b8c\u6210\u5361\u652f\u4ed8\u3001\u8bb8\u53ef\u8bc1\u4ee3\u7801\u9650\u5236\u8bbf\u95ee\uff0c\u4ee5\u53caAppSumo\u7b49\u5e73\u53f0\u7684\u5151\u6362\u7cfb\u7edf\u3002', ja: '\u57cb\u3081\u8fbc\u307f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u306e\u30ab\u30fc\u30c9\u6c7a\u6e08\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u30b3\u30fc\u30c9\u3067\u306e\u30a2\u30af\u30bb\u30b9\u5236\u9650\u3001AppSumo\u306a\u3069\u306e\u30de\u30fc\u30b1\u30c3\u30c8\u5411\u3051\u5f15\u63db\u3048\u30b7\u30b9\u30c6\u30e0\u3002' },
  },
  {
    label: { en: 'Maps & geolocation', ru: 'Карты и геолокация', es: 'Mapas y geolocalizaci\u00f3n', fr: 'Cartes et g\u00e9olocalisation', de: 'Karten & Geolokalisierung', pt: 'Mapas e geolocaliza\u00e7\u00e3o', zh: '\u5730\u56fe\u4e0e\u5730\u7406\u5b9a\u4f4d', ja: '\u5730\u56f3\u3068\u4f4d\u7f6e\u60c5\u5831' },
    body: { en: 'Interactive maps, live address autocomplete, and geocoding - built on open data, no vendor lock-in.', ru: 'Интерактивные карты, автоподсказки адреса и геокодирование — на открытых данных, без привязки к одному поставщику.', es: 'Mapas interactivos, autocompletado de direcciones en vivo y geocodificaci\u00f3n, todo sobre datos abiertos, sin dependencia de un proveedor.', fr: 'Cartes interactives, autocompl\u00e9tion d\u2019adresse en direct et g\u00e9ocodage - sur des donn\u00e9es ouvertes, sans d\u00e9pendance \u00e0 un fournisseur.', de: 'Interaktive Karten, Live-Adressvorschl\u00e4ge und Geocoding - auf offenen Daten, ohne Anbieterbindung.', pt: 'Mapas interativos, autocompletar de endere\u00e7o em tempo real e geocodifica\u00e7\u00e3o - sobre dados abertos, sem depend\u00eancia de fornecedor.', zh: '\u4ea4\u4e92\u5f0f\u5730\u56fe\u3001\u5b9e\u65f6\u5730\u5740\u81ea\u52a8\u8865\u5168\u548c\u5730\u7406\u7f16\u7801\u2014\u2014\u57fa\u4e8e\u5f00\u653e\u6570\u636e\uff0c\u4e0d\u4f9d\u8d56\u5355\u4e00\u4f9b\u5e94\u5546\u3002', ja: '\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u5730\u56f3\u3001\u4f4f\u6240\u306e\u30aa\u30fc\u30c8\u30b3\u30f3\u30d7\u30ea\u30fc\u30c8\u3001\u30b8\u30aa\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u2014\u2014\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf\u306b\u57fa\u3065\u304d\u3001\u30d9\u30f3\u30c0\u30fc\u4f9d\u5b58\u306a\u3057\u3002' },
  },
  {
    label: { en: 'Fast, focused builds', ru: 'Быстрая, сфокусированная разработка', es: 'Desarrollo r\u00e1pido y enfocado', fr: 'D\u00e9veloppement rapide et cibl\u00e9', de: 'Schnelle, fokussierte Entwicklung', pt: 'Desenvolvimento r\u00e1pido e focado', zh: '\u5feb\u901f\u4e13\u6ce8\u7684\u5f00\u53d1', ja: '\u8ff5\u901f\u3067\u96c6\u4e2d\u3057\u305f\u958b\u767a' },
    body: { en: 'React and Vite, deployed the same day an idea is validated. No months-long roadmap before something ships.', ru: 'React и Vite, деплой в тот же день, когда идея подтверждена. Никаких месяцев планирования до запуска.', es: 'React y Vite, desplegado el mismo d\u00eda en que una idea se valida. Sin hojas de ruta de meses antes de lanzar algo.', fr: 'React et Vite, d\u00e9ploy\u00e9 le jour m\u00eame o\u00f9 une id\u00e9e est valid\u00e9e. Pas de feuille de route de plusieurs mois avant de sortir quelque chose.', de: 'React und Vite, am selben Tag deployed, an dem eine Idee validiert wird. Keine monatelange Roadmap vor dem Launch.', pt: 'React e Vite, implantado no mesmo dia em que uma ideia \u00e9 validada. Sem roadmap de meses antes de algo ser lan\u00e7ado.', zh: '\u4f7f\u7528React\u548cVite\uff0c\u60f3\u6cd5\u9a8c\u8bc1\u5f53\u5929\u5373\u53ef\u4e0a\u7ebf\u3002\u65e0\u9700\u6570\u6708\u957f\u7684\u8def\u7ebf\u56fe\u89c4\u5212\u3002', ja: 'React\u3068Vite\u3067\u3001\u30a2\u30a4\u30c7\u30a2\u691c\u8a3c\u5f53\u65e5\u306b\u30c7\u30d7\u30ed\u30a4\u3002\u6570\u30f6\u6708\u5358\u4f4d\u306e\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u306f\u4e0d\u8981\u3002' },
  },
  {
    label: { en: 'End-to-end ownership', ru: 'Полная ответственность', es: 'Responsabilidad total', fr: 'Responsabilit\u00e9 de bout en bout', de: 'Ganzheitliche Verantwortung', pt: 'Responsabilidade total', zh: '\u5168\u7a0b\u8d1f\u8d23', ja: '\u30a8\u30f3\u30c9\u30c4\u30fc\u30a8\u30f3\u30c9\u306e\u8cac\u4efb' },
    body: { en: 'Product, backend, infrastructure, and support - one person, one accountable point of contact. Deployed on Vercel, the same platform behind Next.js sites for Walmart, Apple, Nike, and Netflix.', ru: 'Продукт, бэкенд, инфраструктура и поддержка — один человек, один ответственный контакт. Деплой на Vercel — той же платформе, на которой работают Next.js-сайты Walmart, Apple, Nike и Netflix.', es: 'Producto, backend, infraestructura y soporte: una sola persona, un solo punto de contacto responsable. Desplegado en Vercel, la misma plataforma detr\u00e1s de sitios Next.js de Walmart, Apple, Nike y Netflix.', fr: 'Produit, backend, infrastructure et support - une seule personne, un seul point de contact responsable. D\u00e9ploy\u00e9 sur Vercel, la m\u00eame plateforme que les sites Next.js de Walmart, Apple, Nike et Netflix.', de: 'Produkt, Backend, Infrastruktur und Support - eine Person, ein verantwortlicher Ansprechpartner. Deployed auf Vercel, derselben Plattform hinter Next.js-Seiten von Walmart, Apple, Nike und Netflix.', pt: 'Produto, backend, infraestrutura e suporte - uma pessoa, um ponto de contato respons\u00e1vel. Implantado na Vercel, a mesma plataforma por tr\u00e1s dos sites Next.js da Walmart, Apple, Nike e Netflix.', zh: '\u4ea7\u54c1\u3001\u540e\u7aef\u3001\u57fa\u7840\u8bbe\u65bd\u548c\u652f\u6301\u2014\u2014\u4e00\u4e2a\u4eba\uff0c\u4e00\u4e2a\u8d1f\u8d23\u4eba\u3002\u90e8\u7f72\u5728Vercel\u4e0a\uff0c\u4e0eWalmart\u3001Apple\u3001Nike\u548cNetflix\u7684Next.js\u7ad9\u70b9\u540c\u4e00\u5e73\u53f0\u3002', ja: '\u88fd\u54c1\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3001\u30a4\u30f3\u30d5\u30e9\u3001\u30b5\u30dd\u30fc\u30c8\u5168\u3066\u3092\u4e00\u4eba\u304c\u62c5\u5f53\u3002Walmart\u3001Apple\u3001Nike\u3001Netflix\u306eNext.js\u30b5\u30a4\u30c8\u3068\u540c\u3058Vercel\u4e0a\u3067\u7a3c\u50cd\u3002' },
  },
];

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: '\u0420\u0423' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'pt', label: 'PT' },
  { code: 'zh', label: '\u4e2d\u6587' },
  { code: 'ja', label: '\u65e5\u672c\u8a9e' },
];

const T = {
  en: {
    tagline: 'Plainwork Studio',
    heroTitle: 'Small, useful tools for people running a business alone.',
    heroBody: 'Plainwork builds focused AI tools that solve one repetitive task each - writing captions, replying to reviews, staying visible on Google - so there\u2019s a little more time left for the parts of the business that actually need a person.',
    heroNote: 'A growing set of tools live so far. More on the way.',
    manifesto1: 'I build AI tools that do your marketing for you. Each product solves one job: content, reputation, visibility, language. You just upload your data - the AI does the rest.',
    manifesto2: 'Plainwork is for people tired of being slaves to their own to-do list. We give you back your time, your confidence, and your visibility in front of customers.',
    statProducts: 'products shipped', statLangs: 'languages supported', statPeople: 'person building it',
    workHeading: 'The Work', workSub: 'Everything currently live, in order of release.',
    capHeading: 'Capabilities', capSub: 'What\u2019s actually running under the three products above.',
    approachHeading: 'How things get built here',
    aboutHeading: 'About',
    aboutLead: 'I\u2019m Ksenia, and I build every part of Plainwork myself - the products, the infrastructure behind them, and the support inbox.',
    aboutBody: 'I kept noticing the same pattern with small business owners: a handful of small, repetitive writing tasks - a caption, a reply to a review, a Google post - that never got done because there was always something more urgent. Plainwork is my answer to that: tools narrow enough to actually finish, built by one person who reads every support email personally.',
    basedIn: 'Based in', city: 'Houston, TX',
    footerTag: 'Plainwork \u00b7 built solo, end to end',
    terms: 'Terms of Service', privacy: 'Privacy Policy',
  },
  ru: {
    tagline: 'Студия Plainwork',
    heroTitle: 'Небольшие, полезные инструменты для тех, кто ведёт бизнес один.',
    heroBody: 'Plainwork создаёт сфокусированные AI-инструменты, каждый из которых решает одну повторяющуюся задачу — написать подпись, ответить на отзыв, остаться заметным в Google — чтобы оставалось чуть больше времени на то, что реально требует человека.',
    heroNote: 'Пока три живых инструмента. Дальше — больше.',
    statProducts: 'продукта запущено', statLangs: 'языков поддерживается', statPeople: 'человек строит',
    workHeading: 'Работы', workSub: 'Всё, что сейчас живо, в порядке выпуска.',
    capHeading: 'Возможности', capSub: 'Что реально работает под капотом у трёх продуктов выше.',
    approachHeading: 'Как здесь всё строится',
    aboutHeading: 'Обо мне',
    aboutLead: 'Я Ксения, и я сама строю каждую часть Plainwork — продукты, инфраструктуру за ними, и отвечаю на письма в поддержку.',
    aboutBody: 'Я замечала один и тот же паттерн у владельцев малого бизнеса: небольшие, повторяющиеся задачи написания текста — подпись, ответ на отзыв, пост в Google — так и оставались несделанными, потому что всегда находилось что-то срочнее. Plainwork — мой ответ на это: инструменты достаточно узкие, чтобы их реально доводили до конца, построенные одним человеком, который лично читает каждое письмо в поддержку.',
    basedIn: 'Находимся в', city: '\u0425ьюстон, США',
    footerTag: 'Plainwork \u00b7 сделано одним человеком, от начала до конца',
    terms: 'Пользовательское соглашение', privacy: 'Политика конфиденциальности',
  },
  es: {
    tagline: 'Estudio Plainwork',
    heroTitle: 'Herramientas peque\u00f1as y \u00fatiles para quienes llevan un negocio solos.',
    heroBody: 'Plainwork crea herramientas de IA enfocadas que resuelven una tarea repetitiva cada una - escribir subt\u00edtulos, responder rese\u00f1as, mantenerse visible en Google - para que quede un poco m\u00e1s de tiempo para lo que realmente necesita una persona.',
    heroNote: 'Tres herramientas activas por ahora. Vienen m\u00e1s.',
    statProducts: 'productos lanzados', statLangs: 'idiomas soportados', statPeople: 'persona construy\u00e9ndolo',
    workHeading: 'El trabajo', workSub: 'Todo lo que est\u00e1 activo ahora, en orden de lanzamiento.',
    capHeading: 'Capacidades', capSub: 'Lo que realmente funciona detr\u00e1s de los tres productos de arriba.',
    approachHeading: 'C\u00f3mo se construye todo aqu\u00ed',
    aboutHeading: 'Sobre m\u00ed',
    aboutLead: 'Soy Ksenia, y construyo cada parte de Plainwork yo misma - los productos, la infraestructura detr\u00e1s de ellos, y el buz\u00f3n de soporte.',
    aboutBody: 'Segu\u00eda notando el mismo patr\u00f3n en due\u00f1os de peque\u00f1os negocios: un pu\u00f1ado de tareas de escritura peque\u00f1as y repetitivas - un subt\u00edtulo, una respuesta a una rese\u00f1a, un post de Google - que nunca se hac\u00edan porque siempre hab\u00eda algo m\u00e1s urgente. Plainwork es mi respuesta a eso: herramientas lo bastante acotadas para realmente terminarse, construidas por una sola persona que lee cada correo de soporte personalmente.',
    basedIn: 'Con base en', city: 'Houston, TX',
    footerTag: 'Plainwork \u00b7 hecho en solitario, de principio a fin',
    terms: 'T\u00e9rminos de Servicio', privacy: 'Pol\u00edtica de Privacidad',
  },
  fr: {
    tagline: 'Studio Plainwork',
    heroTitle: 'De petits outils utiles pour ceux qui g\u00e8rent une entreprise seuls.',
    heroBody: 'Plainwork cr\u00e9e des outils IA cibl\u00e9s qui r\u00e9solvent chacun une t\u00e2che r\u00e9p\u00e9titive - r\u00e9diger des l\u00e9gendes, r\u00e9pondre aux avis, rester visible sur Google - pour qu\u2019il reste un peu plus de temps pour ce qui n\u00e9cessite vraiment une personne.',
    heroNote: 'Trois outils actifs pour l\u2019instant. D\u2019autres arrivent.',
    statProducts: 'produits lanc\u00e9s', statLangs: 'langues prises en charge', statPeople: 'personne qui construit',
    workHeading: 'Le travail', workSub: 'Tout ce qui est actif actuellement, dans l\u2019ordre de sortie.',
    capHeading: 'Capacit\u00e9s', capSub: 'Ce qui tourne vraiment sous les trois produits ci-dessus.',
    approachHeading: 'Comment tout est construit ici',
    aboutHeading: '\u00c0 propos',
    aboutLead: 'Je suis Ksenia, et je construis chaque partie de Plainwork moi-m\u00eame - les produits, l\u2019infrastructure derri\u00e8re eux, et la boîte de support.',
    aboutBody: 'Je remarquais toujours le m\u00eame sch\u00e9ma chez les propri\u00e9taires de petites entreprises : une poign\u00e9e de petites t\u00e2ches d\u2019\u00e9criture r\u00e9p\u00e9titives - une l\u00e9gende, une r\u00e9ponse \u00e0 un avis, un post Google - qui ne se faisaient jamais parce qu\u2019il y avait toujours quelque chose de plus urgent. Plainwork est ma r\u00e9ponse \u00e0 \u00e7a : des outils assez cibl\u00e9s pour \u00eatre vraiment termin\u00e9s, construits par une seule personne qui lit personnellement chaque email de support.',
    basedIn: 'Bas\u00e9e \u00e0', city: 'Houston, TX',
    footerTag: 'Plainwork \u00b7 construit en solo, de bout en bout',
    terms: 'Conditions d\u2019utilisation', privacy: 'Politique de confidentialit\u00e9',
  },
  de: {
    tagline: 'Plainwork Studio',
    heroTitle: 'Kleine, n\u00fctzliche Tools f\u00fcr Menschen, die ihr Business allein f\u00fchren.',
    heroBody: 'Plainwork baut fokussierte KI-Tools, die jeweils eine wiederkehrende Aufgabe l\u00f6sen - Bildunterschriften schreiben, auf Bewertungen antworten, bei Google sichtbar bleiben - damit etwas mehr Zeit f\u00fcr die Teile des Business bleibt, die wirklich einen Menschen brauchen.',
    heroNote: 'Bisher drei aktive Tools. Mehr folgt.',
    statProducts: 'Produkte ver\u00f6ffentlicht', statLangs: 'unterst\u00fctzte Sprachen', statPeople: 'Person baut es',
    workHeading: 'Die Arbeit', workSub: 'Alles, was aktuell live ist, in Reihenfolge der Ver\u00f6ffentlichung.',
    capHeading: 'F\u00e4higkeiten', capSub: 'Was tats\u00e4chlich unter den drei Produkten oben l\u00e4uft.',
    approachHeading: 'Wie hier alles gebaut wird',
    aboutHeading: '\u00dcber mich',
    aboutLead: 'Ich bin Ksenia, und ich baue jeden Teil von Plainwork selbst - die Produkte, die Infrastruktur dahinter, und den Support-Posteingang.',
    aboutBody: 'Ich bemerkte immer wieder dasselbe Muster bei Kleinunternehmern: eine Handvoll kleiner, sich wiederholender Schreibaufgaben - eine Bildunterschrift, eine Antwort auf eine Bewertung, ein Google-Beitrag - die nie erledigt wurden, weil immer etwas Dringenderes anlag. Plainwork ist meine Antwort darauf: Tools schmal genug, um wirklich fertig zu werden, gebaut von einer einzigen Person, die jede Support-E-Mail pers\u00f6nlich liest.',
    basedIn: 'Ansässig in', city: 'Houston, TX',
    footerTag: 'Plainwork \u00b7 solo gebaut, von Anfang bis Ende',
    terms: 'Nutzungsbedingungen', privacy: 'Datenschutzrichtlinie',
  },
  pt: {
    tagline: 'Estúdio Plainwork',
    heroTitle: 'Ferramentas pequenas e úteis para quem toca um negócio sozinho.',
    heroBody: 'A Plainwork cria ferramentas de IA focadas que resolvem uma tarefa repetitiva cada - escrever legendas, responder avalia\u00e7\u00f5es, permanecer vis\u00edvel no Google - para sobrar um pouco mais de tempo para as partes do neg\u00f3cio que realmente precisam de uma pessoa.',
    heroNote: 'Três ferramentas ativas até agora. Mais estão a caminho.',
    statProducts: 'produtos lan\u00e7ados', statLangs: 'idiomas suportados', statPeople: 'pessoa construindo',
    workHeading: 'O trabalho', workSub: 'Tudo que está ativo agora, em ordem de lan\u00e7amento.',
    capHeading: 'Capacidades', capSub: 'O que realmente roda por baixo dos tr\u00eas produtos acima.',
    approachHeading: 'Como tudo é construído aqui',
    aboutHeading: 'Sobre',
    aboutLead: 'Sou a Ksenia, e eu mesma construo cada parte da Plainwork - os produtos, a infraestrutura por tr\u00e1s deles, e a caixa de suporte.',
    aboutBody: 'Eu continuava notando o mesmo padr\u00e3o em donos de pequenos neg\u00f3cios: um punhado de tarefas de escrita pequenas e repetitivas - uma legenda, uma resposta a uma avalia\u00e7\u00e3o, um post no Google - que nunca eram feitas porque sempre havia algo mais urgente. A Plainwork \u00e9 minha resposta a isso: ferramentas estreitas o suficiente para realmente serem conclu\u00eddas, constru\u00eddas por uma \u00fanica pessoa que l\u00ea pessoalmente cada e-mail de suporte.',
    basedIn: 'Sediada em', city: 'Houston, TX',
    footerTag: 'Plainwork \u00b7 feito sozinha, do in\u00edcio ao fim',
    terms: 'Termos de Servi\u00e7o', privacy: 'Pol\u00edtica de Privacidade',
  },
  zh: {
    tagline: 'Plainwork \u5de5\u4f5c\u5ba4',
    heroTitle: '\u4e3a\u72ec\u81ea\u7ecf\u8425\u4e1a\u52a1\u7684\u4eba\u6253\u9020\u7684\u5c0f\u800c\u5b9e\u7528\u7684\u5de5\u5177\u3002',
    heroBody: 'Plainwork \u6253\u9020\u4e13\u6ce8\u7684AI\u5de5\u5177\uff0c\u6bcf\u4e2a\u5de5\u5177\u53ea\u89e3\u51b3\u4e00\u4e2a\u91cd\u590d\u6027\u4efb\u52a1\u2014\u2014\u5199\u914d\u6587\u3001\u56de\u590d\u8bc4\u4ef7\u3001\u5728Google\u4fdd\u6301\u53ef\u89c1\u5ea6\u2014\u2014\u8ba9\u4f60\u6709\u66f4\u591a\u65f6\u95f4\u53bb\u505a\u771f\u6b63\u9700\u8981\u4eba\u624b\u7684\u4e8b\u60c5\u3002',
    heroNote: '\u76ee\u524d\u4e09\u4e2a\u5de5\u5177\u5df2\u4e0a\u7ebf\u3002\u66f4\u591a\u5373\u5c06\u63a8\u51fa\u3002',
    statProducts: '\u4e2a\u4ea7\u54c1\u5df2\u4e0a\u7ebf', statLangs: '\u79cd\u8bed\u8a00\u652f\u6301', statPeople: '\u4e2a\u4eba\u5728\u6784\u5efa',
    workHeading: '\u4f5c\u54c1', workSub: '\u76ee\u524d\u6240\u6709\u4e0a\u7ebf\u9879\u76ee\uff0c\u6309\u53d1\u5e03\u987a\u5e8f\u6392\u5217\u3002',
    capHeading: '\u80fd\u529b', capSub: '\u4e0a\u8ff0\u4e09\u4e2a\u4ea7\u54c1\u80cc\u540e\u771f\u6b63\u8fd0\u884c\u7684\u6280\u672f\u3002',
    approachHeading: '\u8fd9\u91cc\u662f\u600e\u4e48\u6784\u5efa\u4e00\u5207\u7684',
    aboutHeading: '\u5173\u4e8e',
    aboutLead: '\u6211\u662fKsenia\uff0c\u6211\u4eb2\u81ea\u6784\u5efaPlainwork\u7684\u6bcf\u4e00\u90e8\u5206\u2014\u2014\u4ea7\u54c1\u3001\u80cc\u540e\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u53ca\u5ba2\u670d\u90ae\u7bb1\u3002',
    aboutBody: '\u6211\u4e00\u76f4\u6ce8\u610f\u5230\u5c0f\u4f01\u4e1a\u4e3b\u4eec\u7684\u76f8\u540c\u6a21\u5f0f\uff1a\u4e00\u4e9b\u5c0f\u800c\u91cd\u590d\u7684\u5199\u4f5c\u4efb\u52a1\u2014\u2014\u4e00\u6761\u914d\u6587\u3001\u4e00\u6761\u8bc4\u4ef7\u56de\u590d\u3001\u4e00\u6761Google\u5e16\u6587\u2014\u2014\u603b\u662f\u56e0\u4e3a\u603b\u6709\u66f4\u7d27\u8feb\u7684\u4e8b\u800c\u65e0\u6cd5\u5b8c\u6210\u3002Plainwork\u5c31\u662f\u6211\u5bf9\u6b64\u7684\u56de\u7b54\uff1a\u8db3\u591f\u805a\u7126\u3001\u771f\u6b63\u80fd\u5b8c\u6210\u7684\u5de5\u5177\uff0c\u7531\u4e00\u4e2a\u4eb2\u81ea\u9605\u8bfb\u6bcf\u5c01\u5ba2\u670d\u90ae\u4ef6\u7684\u4eba\u6784\u5efa\u3002',
    basedIn: '\u603b\u90e8\u4f4d\u4e8e', city: '\u7f8e\u56fd\u4f11\u65af\u987f',
    footerTag: 'Plainwork \u00b7 \u4e00\u4eba\u4ece\u5934\u5230\u5c3e\u6253\u9020',
    terms: '\u670d\u52a1\u6761\u6b3e', privacy: '\u9690\u79c1\u653f\u7b56',
  },
  ja: {
    tagline: 'Plainwork \u30b9\u30bf\u30b8\u30aa',
    heroTitle: '\u4e00\u4eba\u3067\u30d3\u30b8\u30cd\u30b9\u3092\u9053\u3059\u4eba\u306e\u305f\u3081\u306e\u3001\u5c0f\u3055\u304f\u3066\u5f79\u306b\u7acb\u3064\u30c4\u30fc\u30eb\u3002',
    heroBody: 'Plainwork\u306f\u3001\u305d\u308c\u305e\u308c\u4e00\u3064\u306e\u53cd\u5fa9\u4f5c\u696d\u3092\u89e3\u6c7a\u3059\u308b\u5c02\u9580\u7684\u306aAI\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u3066\u3044\u307e\u3059\u2014\u2014\u30ad\u30e3\u30d7\u30b7\u30e7\u30f3\u4f5c\u6210\u3001\u30ec\u30d3\u30e5\u30fc\u8fd4\u4fe1\u3001Google\u3067\u306e\u53ef\u8996\u6027\u7dad\u6301\u2014\u2014\u672c\u5f53\u306b\u4eba\u306e\u624b\u304c\u5fc5\u8981\u306a\u90e8\u5206\u306b\u5c11\u3057\u3067\u3082\u591a\u304f\u306e\u6642\u9593\u3092\u5145\u3066\u3089\u308c\u308b\u3088\u3046\u306b\u3002',
    heroNote: '\u4eca\u306e\u3068\u3053\u308d3\u3064\u306e\u30c4\u30fc\u30eb\u304c\u7a3c\u50cd\u4e2d\u3002\u3055\u3089\u306b\u5897\u3048\u3066\u3044\u304d\u307e\u3059\u3002',
    statProducts: '\u30d7\u30ed\u30c0\u30af\u30c8\u30ea\u30ea\u30fc\u30b9\u6e08\u307f', statLangs: '\u8a00\u8a9e\u306b\u5bfe\u5fdc', statPeople: '\u4eba\u304c\u69cb\u7bc9\u4e2d',
    workHeading: '\u4f5c\u54c1', workSub: '\u73fe\u5728\u7a3c\u50cd\u4e2d\u306e\u5168\u3066\u3092\u30ea\u30ea\u30fc\u30b9\u9806\u306b\u3002',
    capHeading: '\u6a5f\u80fd', capSub: '\u4e0a\u8a18\u306e3\u3064\u306e\u88fd\u54c1\u306e\u88cf\u3067\u5b9f\u969b\u306b\u52d5\u3044\u3066\u3044\u308b\u3082\u306e\u3002',
    approachHeading: '\u3053\u3053\u3067\u306e\u3082\u306e\u3065\u304f\u308a\u306e\u65b9\u6cd5',
    aboutHeading: '\u81ea\u5df1\u7d39\u4ecb',
    aboutLead: '\u79c1\u306fKsenia\u3067\u3059\u3002Plainwork\u306e\u3059\u3079\u3066\u2014\u2014\u88fd\u54c1\u3001\u305d\u306e\u88cf\u306e\u30a4\u30f3\u30d5\u30e9\u3001\u30b5\u30dd\u30fc\u30c8\u5bfe\u5fdc\u2014\u2014\u3092\u81ea\u5206\u3067\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002',
    aboutBody: '\u5c0f\u898f\u6a21\u30d3\u30b8\u30cd\u30b9\u306e\u30aa\u30fc\u30ca\u30fc\u306b\u5171\u901a\u3059\u308b\u30d1\u30bf\u30fc\u30f3\u306b\u6c17\u3065\u304d\u307e\u3057\u305f\u2014\u2014\u30ad\u30e3\u30d7\u30b7\u30e7\u30f3\u3001\u30ec\u30d3\u30e5\u30fc\u8fd4\u4fe1\u3001Google\u6295\u7a3f\u3068\u3044\u3063\u305f\u5c0f\u3055\u304f\u53cd\u5fa9\u7684\u306a\u4f5c\u6587\u4f5c\u696d\u304c\u3001\u5e38\u306b\u3082\u3063\u3068\u7dca\u6025\u306a\u4f55\u304b\u304c\u3042\u308b\u305f\u3081\u306b\u5f8c\u56de\u3057\u306b\u306a\u308b\u3068\u3044\u3046\u3053\u3068\u3002Plainwork\u306f\u305d\u306e\u56de\u7b54\u3067\u3059\u2014\u2014\u3059\u3079\u3066\u306e\u30b5\u30dd\u30fc\u30c8\u30e1\u30fc\u30eb\u3092\u81ea\u3089\u8aad\u3080\u4e00\u4eba\u306e\u4eba\u9593\u304c\u4f5c\u3063\u305f\u3001\u78ba\u5b9f\u306b\u5b8c\u4e86\u3067\u304d\u308b\u307b\u3069\u72ed\u3044\u30c4\u30fc\u30eb\u3002',
    basedIn: '\u62e0\u70b9', city: '\u30d2\u30e5\u30fc\u30b9\u30c8\u30f3\uff08\u30c6\u30ad\u30b5\u30b9\u5dde\uff09',
    footerTag: 'Plainwork \u00b7 \u4e00\u4eba\u3067\u6700\u521d\u304b\u3089\u6700\u5f8c\u307e\u3067\u69cb\u7bc9',
    terms: '\u5229\u7528\u898f\u7d04', privacy: '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',
  },
};



export default function App() {
  const [lang, setLang] = useState('en');
  const [showSupportEmail, setShowSupportEmail] = useState(false);
  const [showHelpBubble, setShowHelpBubble] = useState(false);

  function playPopSound(opening) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(opening ? 520 : 380, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(opening ? 780 : 260, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) { /* звук не критичен */ }
  }

  const [expandedProduct, setExpandedProduct] = useState(null);
  const t = T[lang];
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    function loadMapLibre() {
      return new Promise((resolve) => {
        if (window.maplibregl) { resolve(); return; }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.css';
        document.head.appendChild(link);
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.js';
        script.onload = resolve;
        document.body.appendChild(script);
      });
    }

    loadMapLibre().then(() => {
      if (cancelled || !mapContainerRef.current || mapInstanceRef.current) return;
      const maplibregl = window.maplibregl;
      const houston = [-95.3698, 29.7604];

      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: houston,
        zoom: 12,
        attributionControl: false,
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
      map.addControl(new maplibregl.AttributionControl({ compact: true }));

      const el = document.createElement('div');
      el.style.cssText = 'position:relative;width:22px;height:22px;';
      el.innerHTML = `
        <div style="position:absolute;inset:0;border-radius:50%;border:2px solid #A56A45;opacity:0.6;"></div>
        <div style="position:absolute;top:5px;left:5px;width:12px;height:12px;border-radius:50%;background:#D97757;box-shadow:0 0 8px rgba(217,119,87,0.7);"></div>
      `;
      new maplibregl.Marker({ element: el }).setLngLat(houston).addTo(map);

      mapInstanceRef.current = map;
    });

    return () => { cancelled = true; };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: BG, color: INK, fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        @keyframes runP {
          0%   { transform: translateX(0) translateY(0) rotate(-4deg); }
          25%  { transform: translateX(60px) translateY(-14px) rotate(3deg); }
          50%  { transform: translateX(120px) translateY(0) rotate(-3deg); }
          75%  { transform: translateX(60px) translateY(-10px) rotate(4deg); }
          100% { transform: translateX(0) translateY(0) rotate(-4deg); }
        }
        .running-p-base {
          position: absolute; font-family: 'Fraunces', serif; font-weight: 700;
          color: rgba(217,119,87,0.14); pointer-events: none; user-select: none;
          animation-name: runP; animation-timing-function: ease-in-out; animation-iteration-count: infinite;
        }
        .running-p { animation-duration: 6s; }
        .running-p-2 { animation-duration: 8s; animation-delay: -2s; }
        .running-p-3 { animation-duration: 7s; animation-delay: -4s; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: inline-flex; white-space: nowrap; animation: marquee 18s linear infinite;
        }
      `}</style>

      {/* ----- HERO ----- */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 80px' }}>
        <svg aria-hidden="true" viewBox="0 0 100 124" style={{
          position: 'absolute', top: -60, right: -20, width: 340, height: 420,
          transform: 'rotate(-6deg)', opacity: 0.06,
        }}>
          <path d="M10 4h80a6 6 0 0 1 6 6v90a6 6 0 0 1-6 6h-63L10 88V10a6 6 0 0 1 6-6z" fill={RUST} />
          <circle cx="66" cy="24" r="7" fill={BG} />
        </svg>
        <span className="running-p-base running-p" aria-hidden="true" style={{ bottom: 40, left: 40, fontSize: 90 }}>Р</span>
        <span className="running-p-base running-p-2" aria-hidden="true" style={{ top: 60, right: 60, fontSize: 60 }}>Р</span>
        <span className="running-p-base running-p-3" aria-hidden="true" style={{ top: '45%', left: '65%', fontSize: 44 }}>Р</span>

        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg viewBox="0 0 100 130" style={{ width: 18, height: 23 }}>
                <defs>
                  <linearGradient id="tagGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={RUST} />
                    <stop offset="60%" stopColor={RUST} />
                    <stop offset="60%" stopColor={RUST_DEEP} />
                    <stop offset="100%" stopColor={RUST_DEEP} />
                  </linearGradient>
                </defs>
                <path d="M30 0 L85 0 Q100 0 100 15 L100 115 Q100 130 85 130 L15 130 Q0 130 0 115 L0 30 Z" fill="url(#tagGrad)" />
                <circle cx="20" cy="20" r="9" fill={BG} />
                <circle cx="20" cy="20" r="9" fill="none" stroke="url(#tagGrad)" strokeWidth="4" />
                <text x="58" y="82" textAnchor="middle" fontFamily="'Fraunces', serif" fontWeight="600" fontSize="58" fill={BG}>P</text>
              </svg>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.12em', color: RUST_DEEP, textTransform: 'uppercase' }}>
                {t.tagline}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {!showSupportEmail ? (
                <button onClick={() => setShowSupportEmail(true)} aria-label="Email" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: INK_SOFT, display: 'flex' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24l-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z"/></svg>
                </button>
              ) : (
                <a href="mailto:kssw117@gmail.com"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: INK_SOFT, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  kssw117@gmail.com
                </a>
              )}
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: RUST_DEEP,
                  background: 'rgba(217,119,87,0.10)', border: '1px solid rgba(217,119,87,0.3)',
                  borderRadius: 999, padding: '3px 10px', cursor: 'pointer', appearance: 'none',
                }}
              >
                {LANGS.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.1, margin: '0 0 24px', letterSpacing: '-0.01em' }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: 17, color: INK_SOFT, lineHeight: 1.65, maxWidth: 540, margin: '0 0 12px' }}>
            {t.heroBody}
          </p>
          <p style={{ fontSize: 14, color: RUST_DEEP, lineHeight: 1.6, maxWidth: 540, margin: '0 0 32px', fontWeight: 500 }}>
            {t.heroNote}
          </p>

          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: INK_SOFT }}>
            <span style={{ color: INK }}>A growing suite of tools</span>
            <span><strong style={{ color: INK }}>35</strong> {t.statLangs}</span>
            <span><strong style={{ color: INK }}>1</strong> {t.statPeople}</span>
          </div>
        </div>
      </section>

      {/* ----- MANIFESTO ----- */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: 21, lineHeight: 1.55, color: INK, margin: '0 0 16px' }}>
            {t.manifesto1 || T.en.manifesto1}
          </p>
          <p style={{ fontSize: 15, color: INK_SOFT, lineHeight: 1.6, margin: 0 }}>
            {t.manifesto2 || T.en.manifesto2}
          </p>
        </div>
      </section>

      {/* ----- THE WORK (ledger-style portfolio) ----- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 4 }}>
            {t.workHeading}
          </h2>
          <p style={{ color: INK_SOFT, fontSize: 14, marginBottom: 28 }}>{t.workSub}</p>

          <div style={{ border: `1px solid ${LINE}`, borderRadius: 14, overflow: 'hidden', background: CARD }}>
            {products.map((p, i) => (
              <div key={p.tag} style={{ padding: '22px 24px', borderTop: i === 0 ? 'none' : `1px solid ${LINE}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 18 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: RUST_DEEP, width: 24, flexShrink: 0, marginTop: 3 }}>{p.tag}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 18, marginBottom: 3 }}>{p.name}</div>
                    <div style={{ fontSize: 13.5, color: INK_SOFT, lineHeight: 1.4, marginBottom: 8 }}>{p.line[lang]}</div>
                    <div style={{ display: 'flex', gap: 8, fontSize: 12, lineHeight: 1.45 }}>
                      <span style={{ color: '#B34B3C' }}>{p.problem[lang]}</span>
                      <span style={{ color: RUST_DEEP, flexShrink: 0 }}>&rarr;</span>
                      <span style={{ color: '#3A7A5C' }}>{p.result[lang]}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: INK_SOFT }}>{p.stat[lang]}</span>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{p.price}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 44, flexWrap: 'wrap', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <iframe title={`Buy ${p.name}`} style={{ border: 'none', borderRadius: 10 }} width="250" height="80" src={p.widget}></iframe>
                    <a
                      href={p.url}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: RUST_DEEP,
                        textDecoration: 'underline', textUnderlineOffset: 3, whiteSpace: 'nowrap',
                      }}
                    >
                      Try it free &rarr;
                    </a>
                  </div>
                  <button
                    onClick={() => setExpandedProduct(expandedProduct === p.tag ? null : p.tag)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11, color: RUST_DEEP, textDecoration: 'underline', textUnderlineOffset: 3,
                    }}
                  >
                    {expandedProduct === p.tag ? 'Hide details' : 'Learn more'}
                  </button>
                </div>
                {expandedProduct === p.tag && (
                  <div style={{ paddingLeft: 44, marginTop: 16 }}>
                    {p.fullDescription && p.fullDescription[lang] && (
                      <p style={{ fontSize: 13.5, color: INK, lineHeight: 1.6, marginBottom: 14 }}>
                        {p.fullDescription[lang]}
                      </p>
                    )}
                    {p.benefits.map((b, bi) => (
                      <div key={bi} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>
                        <span style={{ color: RUST_DEEP, flexShrink: 0 }}>&bull;</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- CAPABILITIES ----- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 4 }}>
            {t.capHeading}
          </h2>
          <p style={{ color: INK_SOFT, fontSize: 14, marginBottom: 28 }}>{t.capSub}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: LINE, border: `1px solid ${LINE}`, borderRadius: 14, overflow: 'hidden' }}>
            {capabilities.map((c, i) => (
              <div key={i} style={{ background: CARD, padding: '22px 22px' }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.04em', color: RUST_DEEP, marginBottom: 8 }}>
                  {c.label[lang]}
                </div>
                <p style={{ fontSize: 13.5, color: INK_SOFT, lineHeight: 1.55, margin: 0 }}>{c.body[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- APPROACH ----- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 28 }}>
            {t.approachHeading}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {principles.map((pr) => (
              <div key={pr.n}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28,
                  borderRadius: '50%', border: `1px solid ${RUST}`, color: RUST_DEEP,
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, fontWeight: 600, marginBottom: 14,
                }}>{pr.n}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 17, margin: '0 0 8px' }}>{pr.title[lang]}</h3>
                <p style={{ fontSize: 14, color: INK_SOFT, lineHeight: 1.55, margin: 0 }}>{pr.body[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- ABOUT / FOUNDER ----- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', background: CARD, border: `1px solid ${LINE}`, borderRadius: 16, padding: '40px 36px' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 20 }}>
            {t.aboutHeading}
          </h2>
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: 21, lineHeight: 1.5, margin: '0 0 20px', color: INK }}>
            {t.aboutLead}
          </p>
          <p style={{ fontSize: 15, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>
            {t.aboutBody}
          </p>
        </div>
      </section>

      {/* ----- LOCATION ----- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 4 }}>
            {t.basedIn}
          </h2>
          <p style={{ color: INK_SOFT, fontSize: 14, marginBottom: 20 }}>{t.city}</p>
          <div
            ref={mapContainerRef}
            style={{ width: '100%', height: 260, borderRadius: 14, border: `1px solid ${LINE}`, overflow: 'hidden' }}
          />
        </div>
      </section>

      {/* ----- MARQUEE ----- */}
      <div style={{ background: INK, padding: '14px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{
              fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 22, color: '#FFFFFF',
              padding: '0 28px', display: 'inline-flex', alignItems: 'center', gap: 28,
            }}>
              PLAINWORK
              <span style={{ color: RUST, fontSize: 14 }}>&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ----- FOOTER ----- */}
      <footer style={{ padding: '32px 24px 48px', borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'normal', fontSize: 15, color: RUST_DEEP, textAlign: 'center', margin: '0 0 24px' }}>
            Built for the parts of business nobody has time for
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: INK_SOFT }}>{t.footerTag}</span>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <a href="https://x.com/_plainwork_" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: RUST_DEEP }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.6l-5.2-6.8L5.4 22H2.3l8.2-9.3L1.7 2h6.9l4.7 6.2L18.9 2zm-1.2 18h1.7L7.4 4H5.6l12.1 16z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61594302217798" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: RUST_DEEP }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="https://wa.me/79101537910" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: RUST_DEEP }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.1c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4.2-.4c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.4.1.2 1.6 2.5 3.9 3.4.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z"/></svg>
              </a>
              <a href="https://t.me/+79101537910" target="_blank" rel="noopener noreferrer" aria-label="Telegram" style={{ color: RUST_DEEP }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 3.5L2.5 11l6 2.3L21 5.2c.4-.3.8.2.5.5l-11.7 10.6-.4 5.4c.4 0 .6-.2.8-.4l2.3-2.2 4.6 3.4c.8.5 1.4.2 1.6-.8l3-14c.3-1.2-.4-1.7-1.7-1.2z"/></svg>
              </a>
              {!showSupportEmail ? (
                <button onClick={() => setShowSupportEmail(true)} aria-label="Email" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: RUST_DEEP, display: 'flex' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24l-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z"/></svg>
                </button>
              ) : (
                <a href="mailto:kssw117@gmail.com" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: RUST_DEEP }}>kssw117@gmail.com</a>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, paddingTop: 16, borderTop: `1px solid ${LINE}` }}>
            <a href="/terms.html" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: INK_SOFT }}>{t.terms}</a>
            <a href="/privacy.html" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: INK_SOFT }}>{t.privacy}</a>
          </div>
        </div>
      </footer>

      {/* Плавающая кнопка "нужна помощь" — как на всех продуктах */}
      <button
        onClick={() => {
          playPopSound(!showHelpBubble);
          setShowHelpBubble(v => !v);
        }}
        aria-label="Need help?"
        style={{
          position: 'fixed', bottom: 20, right: 20, width: 48, height: 48, borderRadius: '50%',
          background: RUST, color: '#FFF', border: 'none',
          cursor: 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(217,119,87,0.35)', zIndex: 50,
        }}
      >
        {showHelpBubble ? '\u2715' : '?'}
      </button>

      {showHelpBubble && (
        <div
          style={{
            position: 'fixed', bottom: 80, right: 20, width: 280, maxWidth: 'calc(100vw - 40px)',
            background: '#FFF', borderRadius: 14, padding: 18, boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            border: `1px solid ${LINE}`, zIndex: 50,
          }}
        >
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: INK }}>
            Need help? Have questions? Reach out by email: <a href="mailto:kssw117@gmail.com" style={{ color: RUST_DEEP }}>kssw117@gmail.com</a>
          </p>
        </div>
      )}
    </div>
  );
}
