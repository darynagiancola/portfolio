export const italianHome = {
  navigation: {
    work: 'WORK',
    about: 'CHI SONO',
    expertise: 'COMPETENZE',
    contact: 'CONTATTI',
    connect: 'PARLIAMONE →',
  },
  hero: {
    title: 'Progetto sistemi intelligenti intorno a esigenze di business reali.',
    body:
      'Unisco strategia di business, marketing e analisi dei processi con AI, automazione e sviluppo di prodotti digitali, trasformando workflow complessi in soluzioni concrete e funzionanti.',
    cv: 'VEDI IL MIO CV →',
  },
  selectedWork: {
    heading: 'Progetti selezionati',
    viewAll: 'VEDI TUTTI I PROGETTI →',
    viewCaseStudy: 'VEDI IL CASE STUDY →',
    descriptions: {
      aurelia:
        "Un ecosistema hospitality integrato che unisce customer experience, ordini assistiti dall'AI, operazioni del ristorante e workflow di cucina in tempo reale.",
      'lead-marketing-automation-system':
        'Un sistema di lead generation e nurturing che collega contenuti, email automation, qualificazione tramite webinar, avanzamento nel CRM e prenotazione di strategy call.',
      'ai-support-ticket-routing':
        "Un sistema di supporto assistito dall'AI che utilizza Fin e una knowledge base strutturata per rispondere alle domande dei clienti, instradare le richieste e collegare le opportunità commerciali qualificate al workflow appropriato.",
    },
  },
  expertise: {
    heading: 'Competenze',
    statement: 'Dal pensiero di business alla progettazione di sistemi.',
    descriptions: [
      'Business analysis, mappatura dei workflow, definizione dei requisiti, analisi di mercato e logiche di revenue. Parto da come funziona realmente il business prima di decidere cosa cambiare e quale tecnologia integrare nella soluzione.',
      'AI agent, workflow intelligenti, business automation e integrazioni tra sistemi progettati intorno a processi specifici, invece di applicare template di automazione generici.',
      'Strategia di marketing, positioning, customer journey, lead generation, CRM, lifecycle automation e performance, supportati da esperienza diretta nella direzione marketing e in contesti commerciali.',
      'Trasformo requisiti e workflow in prodotti digitali utilizzabili, dalle esperienze AI rivolte al cliente agli strumenti operativi interni collegati tramite API, database e automazioni.',
    ],
  },
  about: {
    heading: 'Chi sono',
    title: 'Un approccio business-first alla tecnologia.',
    paragraphs: [
      'Lavoro tra strategia di business, marketing e tecnologia, con un background che comprende direzione marketing, revenue management, vendite, analisi di mercato e business operations, affiancato da esperienza pratica in AI, automazione e prodotti digitali.',
      'Questa combinazione mi permette di guardare oltre il singolo compito tecnico: capire il contesto di business, analizzare il processo alla base del problema e tradurlo in una soluzione che abbia senso dal punto di vista commerciale e funzioni nella pratica.',
    ],
  },
  approach: {
    heading: 'Approccio',
    statement: 'Dal problema di business al sistema funzionante.',
    steps: [
      {
        title: 'CAPIRE',
        body:
          "Partire dall'obiettivo di business, dalle persone coinvolte e dal processo così come funziona realmente. Individuare il problema effettivo prima di scegliere la tecnologia.",
      },
      {
        title: 'PROGETTARE',
        body:
          'Mappare il workflow migliorato, definirne la logica e capire dove AI, automazione o un prodotto digitale possono creare un valore concreto.',
      },
      {
        title: 'COSTRUIRE',
        body:
          "Trasformare la soluzione in qualcosa di utilizzabile, collegando le interfacce, l'AI, le automazioni, le API, gli strumenti di business e i dati necessari.",
      },
    ],
  },
  tools: {
    heading: 'Tools',
    paragraph:
      "Ogni azienda utilizza uno stack diverso. Parto dal processo e dalla logica del sistema, poi lavoro con gli strumenti e le piattaforme già utilizzati dall'azienda o richiesti dalla soluzione.",
  },
  contact: {
    title: 'Hai un problema di business che potrebbe richiedere un sistema migliore?',
    body:
      "Mi interessano ruoli e progetti che coinvolgono implementazione dell'AI, automazione, prodotti digitali e business systems, soprattutto quando comprendere il business è importante quanto costruire la soluzione.",
    cta: 'PARLIAMONE →',
    location: 'Brescia, Italia',
    cv: 'VEDI IL CV →',
  },
} as const

export const italianAurelia = {
  descriptor: 'Ecosistema hospitality AI-powered',
  intro: [
    'Un concept project che esplora come customer experience, operazioni del ristorante e workflow di cucina possano funzionare come un unico sistema hospitality integrato.',
    'Invece di progettare una singola interfaccia, ho sviluppato tre prototipi complementari intorno allo stesso concept di café, ciascuno focalizzato su una parte diversa del percorso operativo.',
    'Aurelia riunisce tre prototipi complementari: un AI Café rivolto al cliente, una piattaforma operativa multi-ruolo e un Kitchen Display System in tempo reale.',
  ],
  metadata: [
    { label: 'RUOLO', value: 'Product concept · UX/UI · AI-assisted development' },
    { label: 'TIPO DI PROGETTO', value: 'Concept project · ecosistema hospitality integrato' },
    { label: 'FOCUS', value: 'Customer experience · workflow operativi · esecuzione in cucina' },
    { label: 'STRUTTURA', value: "3 prototipi complementari all'interno dello stesso workflow hospitality" },
  ],
  customerExperience: {
    title: 'Ordinare con un layer AI',
    copy:
      "Un'esperienza café rivolta al cliente che combina menu consultabile, carrello e logiche promozionali con un AI Barista che aiuta a scegliere i prodotti in base a preferenze, esigenze alimentari e budget.\n\nL'assistente lavora con dati strutturati relativi a menu e prezzi, può suggerire combinazioni, calcolare un ordine e preparare gli articoli selezionati per il carrello.\n\nIl percorso di checkout prosegue con logiche promo code e un flusso di pagamento simulato, permettendo di testare l'intera esperienza di ordinazione senza elaborare pagamenti reali.",
    features: [
      "Raccomandazioni dell'AI Barista",
      'Dati strutturati di menu e pricing',
      'Calcolo di carrello e ordine',
      'Logica promo code',
      'Flusso di pagamento simulato',
    ],
    cta: 'VEDI AI CAFÉ',
  },
  operationsPlatform: {
    title: 'Un unico workspace per il team del ristorante',
    copy:
      "Un prototipo più ampio di hospitality management progettato intorno alle diverse persone coinvolte nelle operazioni quotidiane del ristorante.\n\nI clienti possono consultare il menu, ordinare e prenotare un tavolo, mentre lo staff accede a workspace specifici per i workflow di sala, cucina e management.\n\nL'area management comprende dashboard operative, stato di tavoli e sala, gestione dello staff, controllo del menu, sedi e impostazioni di sistema.",
    features: [
      'Ordini e prenotazioni dei clienti',
      'Accesso dello staff basato sui ruoli',
      'Waiter station e ordini attivi',
      'Workflow di cucina',
      'Gestione di sala e tavoli',
      'Dashboard operativa',
      'Gestione dello staff e del sistema',
    ],
    cta: 'VEDI HOSPITALITY PLATFORM',
  },
  kitchenDisplaySystem: {
    title: 'Esecuzione in cucina in tempo reale',
    copy:
      "Un prototipo KDS standalone focalizzato specificamente su ciò che accade dopo che un ordine raggiunge la cucina.\n\nGli ordini passano attraverso gli stati New, In Progress e Ready to Serve, con sincronizzazione in tempo reale tramite Supabase.\n\nHo inoltre sviluppato un layer di simulazione e recovery per testare problemi operativi come eventi ritardati, ordini mancanti, transizioni di stato errate e stati incoerenti tra le schermate. Il progetto è diventato così un'opportunità per andare oltre l'interfaccia ed esplorare l'affidabilità dei sistemi operativi real-time.",
    features: [
      'Sincronizzazione degli ordini in tempo reale',
      'Workflow degli stati di cucina',
      'Timer e prioritizzazione degli ordini',
      'Modalità live e demo',
      'Simulazione dei failure',
      'Recovery path e coerenza degli stati',
    ],
    cta: 'VEDI KDS',
  },
  approach: {
    label: "L'APPROCCIO",
    copy:
      "I tre prototipi esplorano lo stesso business da prospettive diverse: il cliente che effettua un ordine, il team che gestisce il servizio e la cucina che lo esegue.\n\nL'obiettivo era ragionare sul workflow come sistema, considerando come le informazioni si muovono tra i diversi ruoli, dove l'AI può essere utile e cosa succede quando i dati operativi non si comportano come previsto.",
  },
} as const

export const italianLeadMarketing = {
  intro: [
    "Un sistema multi-step di lead generation e nurturing progettato per accompagnare potenziali acquirenti internazionali di immobili dall'interesse iniziale fino a una strategy call qualificata.",
    'Il workflow collega una guida agli investimenti scaricabile, email nurture, registrazione al webinar, qualificazione, gestione della pipeline CRM e booking automation in un unico percorso coordinato.',
    "Invece di trattare ogni touchpoint come un'attività di marketing separata, ho progettato il sistema intorno alla progressione del lead: intercettare l'intento, reagire al comportamento e accompagnare ogni contatto verso lo step successivo appropriato.",
  ],
  metadata: {
    role: 'RUOLO',
    projectType: 'TIPO DI PROGETTO',
    focus: 'FOCUS',
    system: 'SISTEMA',
  },
  system: {
    label: 'IL SISTEMA',
    title: 'Progettare il percorso prima delle automazioni',
    paragraphs: [
      "Il workflow parte da una guida agli investimenti immobiliari progettata per intercettare l'interesse iniziale di potenziali acquirenti interessati alla Puglia.",
      'Da lì, i contatti entrano in un percorso automatizzato che introduce progressivamente azioni con un livello di intent più alto: email nurture, registrazione al webinar, qualificazione e infine una strategy call.',
      'Registrazione, partecipazione al webinar e prenotazione della call vengono utilizzate come segnali che aggiornano il percorso del contatto e il suo stato nel CRM.',
    ],
  },
  automation: {
    title: "Trasformare l'engagement in decisioni di workflow",
    paragraphs: [
      'ActiveCampaign funziona come layer centrale di automazione e CRM.',
      'I contatti vengono organizzati attraverso liste dedicate, behavioural tag e stage della pipeline. Le automazioni reagiscono ad azioni come la richiesta della guida, la registrazione al webinar o la partecipazione, invece di inviare la stessa sequenza a ogni lead.',
      'Per esempio, la nurture sequence verifica se un contatto si è già registrato al webinar. Quando avviene questa azione con intent più alto, il contatto può uscire dal percorso di nurture generico evitando di ricevere messaggi non più rilevanti.',
    ],
    groups: [
      [
        'Creazione del lead/deal',
        'Invio della guida agli investimenti',
        "Tracciamento dell'interazione con la guida",
        'Applicazione dei behavioural tag',
      ],
      [
        "Trigger dopo l'invio della guida",
        'Sequenza di email di follow-up',
        'Verifica dello stato di registrazione al webinar',
        'Interruzione della nurture generica quando il lead avanza',
      ],
      [
        'Spostamento dei contatti registrati nello stage CRM corrispondente',
        'Invio di conferma e reminder',
        'Spostamento dei partecipanti in Watched Webinar',
        'Proseguimento verso la prenotazione della call',
      ],
    ],
  },
  integration: {
    title: 'Collegare le azioni tra piattaforme',
    paragraphs: [
      'Alcuni eventi importanti avvengono fuori da ActiveCampaign, quindi Make collega queste azioni al sistema di marketing.',
      'La registrazione al webinar viene sincronizzata con il calendario e ActiveCampaign, mentre le prenotazioni delle strategy call aggiornano il contatto e applicano il segnale CRM appropriato.',
      "In questo modo, i dati relativi a booking e registrazioni restano collegati al record del contatto utilizzato dal resto dell'automazione.",
    ],
  },
  crm: {
    title: "Una pipeline basata sull'intent dell'acquirente",
    paragraphs: [
      "La pipeline CRM riflette cambiamenti significativi nell'intent dell'acquirente invece di limitarsi a memorizzare i contatti.",
      "L'automazione sposta il lead dall'acquisizione iniziale attraverso l'engagement con il webinar fino alla prenotazione di una strategy call. Nello stage finale, il workflow può notificare il broker, confermare l'appuntamento e creare un'attività interna di follow-up.",
      'Il risultato è un sistema in cui attività di marketing e follow-up commerciale condividono lo stesso lifecycle invece di funzionare come processi separati.',
    ],
  },
  approach: {
    label: "L'APPROCCIO",
    statement: "L'automazione è stata progettata intorno ai cambiamenti nell'intent, non intorno ai singoli strumenti.",
    paragraphs: [
      'Il download di una guida, la registrazione al webinar, la partecipazione e la prenotazione di una call rappresentano livelli di engagement diversi.',
      "Ho strutturato il workflow in modo che questi segnali influenzino ciò che il lead riceve successivamente, la posizione dell'opportunità nella pipeline e il momento in cui deve intervenire una persona.",
      "Il progetto si è quindi concentrato meno sull'automazione di attività isolate e più sul coordinamento di marketing, CRM e sales follow-up come un unico processo.",
    ],
  },
} as const

export const italianAiSupport = {
  intro: [
    "Un sistema di customer support progettato intorno alla risoluzione di primo livello assistita dall'AI, a una knowledge base strutturata e al routing automatizzato.",
    "Fin gestisce le domande in ingresso utilizzando la knowledge base configurata per il supporto, mentre le regole del workflow determinano cosa deve accadere quando una conversazione richiede l'intervento umano o appartiene a una specifica funzione aziendale.",
    'Il sistema va oltre la semplice risposta alle domande. Le richieste commerciali possono essere identificate, assegnate al team appropriato e trasferite nel sales workflow, collegando il customer support al processo operativo più ampio.',
  ],
  metadata: {
    role: 'RUOLO',
    projectType: 'TIPO DI PROGETTO',
    focus: 'FOCUS',
    system: 'SISTEMA',
  },
  support: {
    title: 'Rispondere alle domande di routine prima che diventino ticket',
    paragraphs: [
      "Il primo layer del sistema è Fin, integrato direttamente nell'esperienza del sito rivolta al cliente.",
      'Utilizzando la knowledge base configurata per il supporto, Fin può rispondere alle domande più comuni direttamente nel punto di contatto.',
      "Le richieste di routine possono essere risolte immediatamente, mentre le conversazioni che richiedono valutazione o un'azione specifica del business restano disponibili per il follow-up umano.",
    ],
  },
  routing: {
    title: "Trasformare l'intent del cliente nell'azione successiva",
    paragraphs: [
      "Le regole del workflow costituiscono il layer operativo dietro l'interazione con l'AI. Quando una richiesta necessita dell'intervento umano, la conversazione può essere instradata in base al suo scopo invece di rimanere in una coda di supporto generica.",
      "Le richieste commerciali sono un esempio. Una richiesta rilevante può essere assegnata al Sales Team e successivamente trasferita in Pipedrive, permettendo alla conversazione di proseguire all'interno del processo aziendale appropriato.",
      "In questo modo l'interfaccia di supporto diventa un punto di ingresso per più workflow invece di funzionare come un chatbot isolato.",
    ],
  },
  handoff: {
    title: 'Mantenere AI e supporto umano nello stesso workflow',
    paragraphs: [
      "L'escalation rimane all'interno dello stesso workflow di supporto.",
      "Quando una conversazione richiede valutazione, risoluzione di ambiguità o un'azione specifica del business, può essere trasferita alla persona o al team appropriato.",
      'Per le conversazioni commerciali instradate, il contesto collegato di Pipedrive rimane disponibile per supportare il follow-up umano.',
    ],
  },
  operations: {
    title: 'Il supporto come parte del sistema aziendale',
    paragraphs: [
      'Il layer finale collega il customer support alle operazioni successive.',
      "Una conversazione può iniziare come domanda sul sito, essere gestita da Fin e successivamente passare a un workflow umano o commerciale quando cambia l'intent del cliente.",
      "Per le richieste commerciali, il routing collega l'interazione di supporto a Pipedrive, mantenendo supporto, vendite e operations come fasi collegate dello stesso customer journey.",
    ],
  },
  outcome: {
    title: 'Un workflow di supporto progettato intorno a resolution ed escalation',
    paragraphs: [
      "Il progetto mostra come un layer di supporto AI possa inserirsi all'interno di un sistema operativo più ampio invece di funzionare come chatbot standalone.",
      'Le risposte basate sulla knowledge base gestiscono le richieste appropriate di primo livello, mentre le regole di routing gestiscono intent ed escalation quando la richiesta necessita di un follow-up umano o commerciale.',
      "L'attenzione è sulla progettazione di transizioni chiare tra questi layer, in modo che l'automazione supporti la qualità del servizio senza separare il customer journey dai team e dai sistemi che lo gestiscono.",
    ],
  },
} as const
