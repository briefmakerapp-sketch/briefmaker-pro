// ─── BriefMaker Pro v3 — app.js ───────────────────────────────────────────

const today = new Date().toLocaleDateString("fr-FR");

// ─── DÉFINITION DES 10 DOCUMENTS ──────────────────────────────────────────

const docs = [
  {
    id: "brief", label: "Brief marketing", icon: "📢",
    fields: [
      { id: "ent", l: "Entreprise / marque", ph: "Ex : Créative Dorée" },
      { id: "prod", l: "Produit ou service", ph: "Ex : Transferts DTF personnalisés" },
      { id: "obj", l: "Objectif de la campagne", ph: "Ex : Lancer la boutique Instagram" },
      { id: "cib", l: "Cible", ph: "Ex : Femmes 25-45 ans, créatrices" },
      { id: "bud", l: "Budget estimé", ph: "Ex : 500 € / mois" },
      { id: "can", l: "Canaux envisagés", ph: "Ex : Instagram, email, TikTok" }
    ],
    gen: v => `BRIEF MARKETING
══════════════════════════════════════════
Marque : ${v.ent}
Produit/Service : ${v.prod}
Date : ${today}
══════════════════════════════════════════

1. CONTEXTE ET ENJEUX
${v.ent} lance / développe l'offre "${v.prod}". Cette campagne s'inscrit dans une logique de croissance et de visibilité accrue auprès de la cible définie.

2. OBJECTIFS SMART
• Principal : ${v.obj}
• Mesurable : Suivi via KPIs définis (voir section 6)
• Délai : À définir selon le budget alloué de ${v.bud}

3. CIBLE
Profil principal : ${v.cib}
Comportements : Actifs sur ${v.can}, sensibles aux contenus authentiques et visuels.
Motivations : Qualité, personnalisation, rapport qualité/prix.

4. MESSAGES CLÉS
• Message principal : ${v.prod} par ${v.ent} — qualité, unicité, accessibilité.
• Ton recommandé : Chaleureux, expert, inspirant.
• Angle créatif : Valoriser l'usage concret et les bénéfices émotionnels du produit.

5. CANAUX RECOMMANDÉS
${v.can.split(",").map(c => `• ${c.trim()} : contenu adapté au format natif, régularité et engagement prioritaires.`).join("\n")}

6. KPIs ET INDICATEURS DE SUCCÈS
• Portée et impressions (par publication)
• Taux d'engagement (likes, partages, commentaires)
• Clics vers la boutique / taux de conversion
• Coût par acquisition (si budget publicitaire)

7. CONTRAINTES ET RECOMMANDATIONS
• Budget : ${v.bud} — prioriser les canaux à fort ROI organique
• Cohérence visuelle à maintenir sur tous les canaux
• Fréquence minimale recommandée : 3 publications/semaine
• Tester 2 formats différents le 1er mois avant d'optimiser`
  },

  {
    id: "poste", label: "Fiche de poste", icon: "👤",
    fields: [
      { id: "ent", l: "Nom de l'entreprise", ph: "Ex : CRÉALAB" },
      { id: "pos", l: "Intitulé du poste", ph: "Ex : Chargé(e) de communication digitale" },
      { id: "cnt", l: "Type de contrat", ph: "Ex : CDI, Temps plein" },
      { id: "mis", l: "Missions principales", ph: "Ex : Gérer les réseaux sociaux, créer du contenu..." },
      { id: "pro", l: "Profil recherché", ph: "Ex : Bac+3 communication, 2 ans d'expérience" },
      { id: "ava", l: "Ce que vous offrez", ph: "Ex : Télétravail, primes, formation" }
    ],
    gen: v => `OFFRE D'EMPLOI — ${v.pos.toUpperCase()}
══════════════════════════════════════════
Entreprise : ${v.ent}
Contrat : ${v.cnt}
Date de publication : ${today}
══════════════════════════════════════════

QUI SOMMES-NOUS ?
${v.ent} est une structure dynamique et en pleine croissance. Nous plaçons l'innovation, la qualité et l'humain au cœur de notre développement. Rejoindre notre équipe, c'est intégrer un environnement stimulant où vos initiatives sont valorisées.

LE POSTE : ${v.pos}
Dans le cadre de notre développement, nous recrutons un(e) ${v.pos} en ${v.cnt}.

VOS MISSIONS
${v.mis.split(",").map((m, i) => `${i + 1}. ${m.trim()}`).join("\n")}

Compétences clés attendues :
• Autonomie et sens de l'organisation
• Excellentes qualités rédactionnelles et relationnelles
• Maîtrise des outils numériques et digitaux
• Capacité à travailler en équipe et à prendre des initiatives

PROFIL RECHERCHÉ
${v.pro}

CE QUE NOUS OFFRONS
${v.ava.split(",").map(a => `• ${a.trim()}`).join("\n")}

COMMENT POSTULER ?
Envoyez votre CV et lettre de motivation à l'adresse recrutement de ${v.ent}.
Les candidatures seront traitées dans l'ordre de réception.`
  },

  {
    id: "relance", label: "Relance facture", icon: "🧾",
    fields: [
      { id: "cli", l: "Nom du client", ph: "Ex : Société Martin SARL" },
      { id: "mnt", l: "Montant & référence facture", ph: "Ex : 2 400 € HT — Facture n°2024-087" },
      { id: "ret", l: "Retard", ph: "Ex : 15 jours de retard" },
      { id: "niv", l: "Niveau de relance", ph: "Ex : 1ère relance cordiale" }
    ],
    gen: v => `RELANCE FACTURATION — ${v.niv.toUpperCase()}
══════════════════════════════════════════
Objet : Relance paiement — ${v.mnt}
Date : ${today}
══════════════════════════════════════════

Madame, Monsieur,

Nous faisons suite à notre facture ${v.mnt}, dont l'échéance de règlement est désormais dépassée de ${v.ret}.

Sauf erreur ou omission de notre part, nous n'avons pas encore reçu votre règlement pour le montant indiqué ci-dessus.

Nous vous serions reconnaissants de bien vouloir procéder au règlement de cette somme dans les meilleurs délais, et au plus tard dans les 8 jours suivant la réception de ce message.

Si ce règlement a déjà été effectué, nous vous prions de ne pas tenir compte de ce courrier et de nous en informer afin que nous puissions mettre à jour votre dossier.

En cas de difficulté ou si vous souhaitez convenir d'un arrangement, n'hésitez pas à nous contacter directement.

Sans réponse de votre part dans le délai imparti, nous nous verrons dans l'obligation d'engager les démarches de recouvrement prévues par la loi, incluant l'application de pénalités de retard conformément à la réglementation en vigueur.

Cordialement,

[Votre nom et coordonnées]
[Votre entreprise]`
  },

  {
    id: "cr", label: "Compte-rendu", icon: "📝",
    fields: [
      { id: "suj", l: "Sujet de la réunion", ph: "Ex : Revue mensuelle commerciale Q3" },
      { id: "par", l: "Participants", ph: "Ex : Marie (DG), Tom (Sales)" },
      { id: "pts", l: "Points abordés", ph: "Ex : Chiffres, retards, plan Q4...", type: "textarea" },
      { id: "dec", l: "Décisions et actions prises", ph: "Ex : Lancer appel d'offres avant le 20...", type: "textarea" }
    ],
    gen: v => `COMPTE-RENDU DE RÉUNION
══════════════════════════════════════════
Objet : ${v.suj}
Date : ${today}
Participants : ${v.par}
══════════════════════════════════════════

RÉSUMÉ EXÉCUTIF
Réunion tenue le ${today} portant sur : ${v.suj}. Les points clés ont été examinés et les décisions nécessaires ont été prises pour la suite des opérations.

POINTS ABORDÉS
${v.pts.split("\n").map((p, i) => p.trim() ? `${i + 1}. ${p.trim()}` : "").filter(Boolean).join("\n") || v.pts}

DÉCISIONS PRISES ET PLAN D'ACTION
${v.dec.split("\n").map((d, i) => d.trim() ? `${i + 1}. ${d.trim()}` : "").filter(Boolean).join("\n") || v.dec}

TABLEAU DES ACTIONS
─────────────────────────────────────────
Action | Responsable | Délai
─────────────────────────────────────────
[À compléter selon les décisions ci-dessus]
─────────────────────────────────────────

PROCHAINES ÉTAPES
• Suivi des actions définies ci-dessus
• Prochaine réunion : [date à fixer]
• Ordre du jour prévisionnel : point sur les actions engagées

Document validé par : ___________________
Date : ${today}`
  },

  {
    id: "propcom", label: "Proposition commerciale", icon: "📋",
    fields: [
      { id: "pre", l: "Votre entreprise", ph: "Ex : CRÉALAB" },
      { id: "cli", l: "Client cible", ph: "Ex : Boutique Elara Mode" },
      { id: "bes", l: "Besoin identifié", ph: "Ex : Refonte présence Instagram" },
      { id: "off", l: "Votre offre", ph: "Ex : Pack Community Management 3 mois" },
      { id: "tar", l: "Tarif", ph: "Ex : 1 200 € / mois HT" },
      { id: "dif", l: "Valeur ajoutée", ph: "Ex : Expertise contenu + visuels personnalisés" }
    ],
    gen: v => `PROPOSITION COMMERCIALE
══════════════════════════════════════════
De : ${v.pre}
À : ${v.cli}
Date : ${today}
Objet : ${v.off}
══════════════════════════════════════════

INTRODUCTION
Madame, Monsieur,

Suite à nos échanges, nous avons le plaisir de vous adresser cette proposition commerciale personnalisée. Après analyse de votre situation et de vos enjeux, nous sommes convaincus de pouvoir vous apporter une réponse concrète et efficace.

1. DIAGNOSTIC — VOTRE BESOIN
${v.cli} fait face au défi suivant : ${v.bes}.
Cet enjeu impacte directement votre visibilité, votre notoriété et vos résultats commerciaux. Une action structurée et rapide est nécessaire.

2. NOTRE SOLUTION
Nous vous proposons : ${v.off}

Cette offre a été spécialement conçue pour répondre à votre problématique et vous permettre d'atteindre vos objectifs dans les meilleures conditions.

3. MÉTHODOLOGIE ET DÉROULÉ
• Phase 1 — Audit et cadrage (semaine 1)
• Phase 2 — Mise en œuvre et production (semaines 2 à 10)
• Phase 3 — Suivi, optimisation et reporting (mensuel)

4. LIVRABLES
• Stratégie personnalisée documentée
• Production et diffusion des contenus / livrables définis
• Reporting mensuel avec KPIs et recommandations
• Disponibilité et suivi continu

5. INVESTISSEMENT
Tarif : ${v.tar}
Modalités : Facturation mensuelle, paiement à 30 jours.

6. POURQUOI ${v.pre.toUpperCase()} ?
${v.dif}

Nous nous engageons sur des résultats mesurables et une communication transparente tout au long de la mission.

7. PROCHAINE ÉTAPE
Nous serions ravis d'échanger lors d'un appel de 30 minutes pour affiner cette proposition.

Cordialement,
[Nom, fonction — ${v.pre}]`
  },

  {
    id: "cdc", label: "Cahier des charges", icon: "📌",
    fields: [
      { id: "pro", l: "Nom du projet", ph: "Ex : Refonte site e-commerce" },
      { id: "cmd", l: "Commanditaire", ph: "Ex : CRÉALAB pour cliente Elara" },
      { id: "ctx", l: "Contexte et problématique", ph: "Ex : Site obsolète, taux de rebond 80%" },
      { id: "obj", l: "Objectifs", ph: "Ex : Augmenter les ventes de 30% en 6 mois" },
      { id: "per", l: "Périmètre et contraintes", ph: "Ex : Budget 5 000 €, livraison en 2 mois" },
      { id: "liv", l: "Livrables attendus", ph: "Ex : Maquettes, développement, formation" }
    ],
    gen: v => `CAHIER DES CHARGES
══════════════════════════════════════════
Projet : ${v.pro}
Commanditaire : ${v.cmd}
Date : ${today}
Version : 1.0
══════════════════════════════════════════

1. PRÉSENTATION DU PROJET
Projet : ${v.pro}
Commanditaire : ${v.cmd}
Contexte : ${v.ctx}

2. OBJECTIFS ET CRITÈRES DE SUCCÈS
${v.obj.split(",").map((o, i) => `${i + 1}. ${o.trim()}`).join("\n")}

3. PÉRIMÈTRE DU PROJET
Inclus : ${v.per}
Exclus : [À préciser par le commanditaire]

4. SPÉCIFICATIONS FONCTIONNELLES
• [Fonctionnalité 1 — à détailler]
• [Fonctionnalité 2]
• [Fonctionnalité 3]

5. CONTRAINTES
${v.per.split(",").map(c => `• ${c.trim()}`).join("\n")}

6. LIVRABLES ATTENDUS
${v.liv.split(",").map((l, i) => `${i + 1}. ${l.trim()}`).join("\n")}

7. MODALITÉS DE VALIDATION
• Recette : validation par le commanditaire à chaque livraison
• Délai de retour : 5 jours ouvrés après remise du livrable
• Critères : conformité aux spécifications et objectifs définis

8. PLANNING PRÉVISIONNEL
• Cadrage et validation CDC : J+0
• Lancement production : J+7
• Livraison intermédiaire : J+30
• Livraison finale : selon contrainte — ${v.per}

9. INTERLOCUTEURS
• Commanditaire : ${v.cmd}
• Chef de projet : [À désigner]
• Prestataire retenu : [À compléter après sélection]

Document soumis à validation — Version 1.0 — ${today}`
  },

  {
    id: "contrat", label: "Contrat de prestation", icon: "✍️",
    fields: [
      { id: "pre", l: "Prestataire", ph: "Ex : Céline Martin, auto-entrepreneur" },
      { id: "cli", l: "Client", ph: "Ex : Boutique Elara SARL" },
      { id: "mis", l: "Mission", ph: "Ex : Community management Instagram" },
      { id: "dur", l: "Durée", ph: "Ex : 3 mois renouvelables" },
      { id: "tar", l: "Rémunération", ph: "Ex : 1 200 € HT / mois" },
      { id: "mod", l: "Modalités particulières", ph: "Ex : Propriété intellectuelle, confidentialité" }
    ],
    gen: v => `CONTRAT DE PRESTATION DE SERVICES
══════════════════════════════════════════
⚠ Document à faire valider par un professionnel juridique.
══════════════════════════════════════════

ENTRE LES SOUSSIGNÉS :

Le Prestataire : ${v.pre}
ET
Le Client : ${v.cli}

IL A ÉTÉ CONVENU CE QUI SUIT :

ARTICLE 1 — OBJET DU CONTRAT
Le présent contrat a pour objet de définir les conditions dans lesquelles le Prestataire réalise pour le compte du Client la mission suivante : ${v.mis}.

ARTICLE 2 — DURÉE
Le présent contrat prend effet à la date de signature pour une durée de ${v.dur}. À l'issue de cette période, il pourra être reconduit par accord express des deux parties.

ARTICLE 3 — CONDITIONS FINANCIÈRES
Rémunération : ${v.tar}
Modalités : émission d'une facture en début de période, paiement à réception.
Pénalités de retard : applicables conformément à la loi en vigueur.

ARTICLE 4 — OBLIGATIONS DU PRESTATAIRE
• Réaliser la mission avec soin, diligence et professionnalisme
• Respecter les délais convenus
• Informer le Client de tout obstacle à la bonne exécution
• Maintenir la confidentialité des informations reçues

ARTICLE 5 — OBLIGATIONS DU CLIENT
• Fournir les informations et accès nécessaires
• Régler les factures dans les délais convenus
• Désigner un interlocuteur disponible

ARTICLE 6 — PROPRIÉTÉ INTELLECTUELLE ET CONFIDENTIALITÉ
${v.mod}
Les créations réalisées sont transmises au Client après règlement intégral des prestations.

ARTICLE 7 — RÉSILIATION
Chaque partie peut résilier le présent contrat avec un préavis de 30 jours par lettre recommandée avec accusé de réception.

ARTICLE 8 — LITIGES
En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, le tribunal compétent sera celui du lieu du siège du Prestataire.

Fait en deux exemplaires originaux,
Le ${today}

Prestataire : _____________________     Client : _____________________
${v.pre}                                 ${v.cli}`
  },

  {
    id: "note", label: "Note de synthèse", icon: "📄",
    fields: [
      { id: "suj", l: "Sujet", ph: "Ex : Analyse du marché DTF en France" },
      { id: "des", l: "Destinataire", ph: "Ex : Comité de direction" },
      { id: "ctx", l: "Contexte", ph: "Ex : Décision d'investissement sur nouveau matériel" },
      { id: "src", l: "Sources / données disponibles", ph: "Ex : Données marché 2024, retours clients..." },
      { id: "rec", l: "Recommandation souhaitée", ph: "Ex : Recommander ou non l'investissement" }
    ],
    gen: v => `NOTE DE SYNTHÈSE
══════════════════════════════════════════
À : ${v.des}
Objet : ${v.suj}
Date : ${today}
Niveau : Confidentiel
══════════════════════════════════════════

RÉSUMÉ EXÉCUTIF
Cette note analyse ${v.suj} dans le contexte de : ${v.ctx}. Elle formule une recommandation claire à destination de ${v.des}.

1. CONTEXTE ET PROBLÉMATIQUE
${v.ctx}

2. SOURCES ET DONNÉES UTILISÉES
${v.src.split(",").map(s => `• ${s.trim()}`).join("\n")}

3. ANALYSE PAR AXES

Axe 1 — Situation actuelle
Les données disponibles (${v.src}) indiquent une situation nécessitant une attention particulière sur le sujet traité.

Axe 2 — Enjeux et implications
Les décisions à prendre ont un impact direct sur l'activité et les résultats de l'organisation.

Axe 3 — Options envisageables
• Option A : Action immédiate — impact rapide, ressources à mobiliser
• Option B : Action progressive — moindre risque, résultats différés
• Option C : Statu quo — risque d'inaction à évaluer

4. RISQUES ET OPPORTUNITÉS
Opportunités : Gain de compétitivité, optimisation des ressources, création de valeur.
Risques : Coût de mise en œuvre, résistance au changement, délais d'exécution.

5. RECOMMANDATION
${v.rec}

Cette recommandation devra être validée par ${v.des} avant mise en œuvre.

6. PROCHAINES ÉTAPES SUGGÉRÉES
1. Validation de la présente note par ${v.des}
2. Définition d'un plan d'action détaillé
3. Désignation d'un responsable de suivi
4. Point d'étape dans 30 jours

Rédigé par : [Nom, fonction]
Date : ${today}`
  },

  {
    id: "plancom", label: "Plan de communication", icon: "📡",
    fields: [
      { id: "org", l: "Organisation / marque", ph: "Ex : @goodmybudget" },
      { id: "obj", l: "Objectif de communication", ph: "Ex : Atteindre 5 000 abonnés en 3 mois" },
      { id: "cib", l: "Cible", ph: "Ex : Femmes 28-45 ans, finances perso" },
      { id: "per", l: "Période", ph: "Ex : Juillet–Septembre 2026" },
      { id: "bud", l: "Budget", ph: "Ex : 200 € / mois ou organique" },
      { id: "can", l: "Canaux disponibles", ph: "Ex : Instagram, newsletter, Pinterest" }
    ],
    gen: v => `PLAN DE COMMUNICATION
══════════════════════════════════════════
Organisation : ${v.org}
Période : ${v.per}
Date de rédaction : ${today}
══════════════════════════════════════════

1. DIAGNOSTIC DE DÉPART
${v.org} engage une démarche de communication structurée sur la période ${v.per}. L'enjeu est de renforcer la visibilité et l'engagement auprès de la cible définie, avec un budget de ${v.bud}.

2. OBJECTIFS DE COMMUNICATION
Objectif principal : ${v.obj}
Objectifs secondaires :
• Renforcer la notoriété et la crédibilité de ${v.org}
• Générer de l'engagement et fidéliser la communauté
• Convertir l'audience en clients ou abonnés actifs

3. CIBLE ET PERSONA
Profil principal : ${v.cib}
Attentes : Contenu utile, authentique, inspirant et régulier.

4. AXE ET TERRITOIRE DE COMMUNICATION
Ton : Expert et accessible, chaleureux, bienveillant.
Messages clés : Ce que ${v.org} apporte de concret à sa cible chaque semaine.

5. PLAN D'ACTION PAR CANAL
${v.can.split(",").map(c => `
Canal : ${c.trim()}
• Types de contenus : Éducatif, inspirationnel, coulisses, témoignages
• Fréquence : 3 à 5 publications par semaine
• Formats prioritaires : Carrousels, Reels/vidéos courtes, Stories`).join("\n")}

6. CALENDRIER ÉDITORIAL SYNTHÉTIQUE
Mois 1 — Lancement : présentation, valeurs, 1er contenu pilier
Mois 2 — Développement : séries thématiques, engagement
Mois 3 — Optimisation : analyse des performances, conversion

7. BUDGET DÉTAILLÉ
Budget total : ${v.bud}
Répartition recommandée :
• Création de contenu : 50%
• Promotion / publicité : 30%
• Outils et abonnements : 20%

8. KPIs ET SUIVI
• Abonnés / croissance mensuelle
• Taux d'engagement moyen par publication
• Portée organique vs payante
• Clics vers site / taux de conversion

9. POINTS DE VIGILANCE
• Maintenir la régularité même en période de faible inspiration
• Adapter le contenu aux algorithmes sans sacrifier l'authenticité
• Analyser les données avant de scaler les dépenses publicitaires`
  },

  {
    id: "rapport", label: "Rapport d'activité", icon: "📊",
    fields: [
      { id: "org", l: "Organisation / projet", ph: "Ex : BriefMaker Pro" },
      { id: "per", l: "Période couverte", ph: "Ex : Avril 2026" },
      { id: "rea", l: "Réalisations principales", ph: "Ex : 50 nouveaux utilisateurs...", type: "textarea" },
      { id: "chf", l: "Chiffres clés", ph: "Ex : CA : 800 €, Abonnés : +120" },
      { id: "dif", l: "Difficultés rencontrées", ph: "Ex : Problème Stripe, manque de temps" },
      { id: "nxt", l: "Objectifs du mois suivant", ph: "Ex : Lancer la newsletter, 100 clients" }
    ],
    gen: v => `RAPPORT D'ACTIVITÉ MENSUEL
══════════════════════════════════════════
Organisation : ${v.org}
Période : ${v.per}
Date de rédaction : ${today}
══════════════════════════════════════════

RÉSUMÉ DU MOIS
${v.per} a été un mois marqué par les réalisations suivantes pour ${v.org}. Les chiffres clés permettent d'orienter les actions du mois à venir.

1. RÉALISATIONS PRINCIPALES
${v.rea.split("\n").map((r, i) => r.trim() ? `${i + 1}. ${r.trim()}` : "").filter(Boolean).join("\n") || v.rea}

2. TABLEAU DE BORD CHIFFRÉ
─────────────────────────────────────────
Indicateur              | Réalisé
─────────────────────────────────────────
${v.chf.split(",").map(c => {
  const p = c.split(":");
  return p.length > 1
    ? `${p[0].trim().padEnd(23)}| ${p[1].trim()}`
    : `${c.trim().padEnd(23)}| —`;
}).join("\n")}
─────────────────────────────────────────

3. POINTS D'ALERTE ET DIFFICULTÉS
${v.dif.split(",").map(d => `• ${d.trim()}`).join("\n")}

4. ANALYSE ET ENSEIGNEMENTS
Les réalisations du mois confirment la trajectoire engagée pour ${v.org}. Les difficultés identifiées appellent des ajustements sur : ${v.dif}.

5. PLAN D'ACTION — MOIS SUIVANT
─────────────────────────────────────────
Action                  | Responsable | Délai
─────────────────────────────────────────
${v.nxt.split(",").map((n, i) =>
  `${n.trim().substring(0, 22).padEnd(23)}| [Resp.]     | J+${(i + 1) * 7}`
).join("\n")}
─────────────────────────────────────────

6. BESOINS ET RESSOURCES NÉCESSAIRES
• Ressources humaines : [À compléter]
• Ressources financières : [Budget à allouer]
• Outils / support : [À préciser]

Rapport rédigé le ${today} — ${v.org}`
  }
];

// ─── ÉTAT ─────────────────────────────────────────────────────────────────
let cur = docs[0];
let lastDoc = "";

// ─── INITIALISATION ───────────────────────────────────────────────────────
function init() {
  buildSidebar();
  renderForm();
}

function buildSidebar() {
  const list = document.getElementById("docList");
  docs.forEach((d, i) => {
    const el = document.createElement("div");
    el.className = "doc-item" + (i === 0 ? " active" : "");
    el.onclick = () => pick(i);
    el.innerHTML = `<span class="di">${d.icon}</span><span class="dl">${d.label}</span>`;
    list.appendChild(el);
  });
}

function pick(i) {
  cur = docs[i];
  document.querySelectorAll(".doc-item").forEach((el, j) =>
    el.classList.toggle("active", j === i)
  );
  renderForm();
  document.getElementById("resultCard").style.display = "none";
  document.getElementById("pdfBtn").disabled = true;
  document.getElementById("errMsg").style.display = "none";
  lastDoc = "";
}

function renderForm() {
  document.getElementById("formIcon").textContent = cur.icon;
  document.getElementById("formTitle").textContent = cur.label;
  document.getElementById("formBody").innerHTML = cur.fields.map(f => `
    <div class="field ${f.type === "textarea" ? "field-full" : ""}">
      <label>${f.l}</label>
      ${f.type === "textarea"
        ? `<textarea id="f_${f.id}" placeholder="${f.ph}"></textarea>`
        : `<input type="text" id="f_${f.id}" placeholder="${f.ph}" />`}
    </div>`).join("");
}

// ─── GÉNÉRATION ───────────────────────────────────────────────────────────
function generate() {
  const v = {};
  let empty = false;
  cur.fields.forEach(f => {
    const el = document.getElementById("f_" + f.id);
    v[f.id] = el ? el.value.trim() : "";
    if (!v[f.id]) empty = true;
  });

  const err = document.getElementById("errMsg");
  if (empty) { err.style.display = "block"; return; }
  err.style.display = "none";

  lastDoc = cur.gen(v);

  document.getElementById("resultLabel").textContent = cur.label + " — généré ✓";
  document.getElementById("resultBody").textContent = lastDoc;
  const card = document.getElementById("resultCard");
  card.style.display = "block";
  card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  document.getElementById("pdfBtn").disabled = false;
}

// ─── COPIER ───────────────────────────────────────────────────────────────
function copyDoc() {
  if (!lastDoc) return;
  navigator.clipboard.writeText(lastDoc).then(() => {
    const btn = document.querySelector(".btn-copy");
    btn.textContent = "Copié !";
    setTimeout(() => btn.textContent = "Copier", 2000);
  });
}

// ─── EXPORT PDF ───────────────────────────────────────────────────────────
function exportPDF() {
  if (!lastDoc || !window.jspdf) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const M = 18, W = 210 - M * 2;

  // En-tête
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(26, 24, 21);
  doc.text(cur.label, M, 22);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(138, 128, 112);
  doc.text("BriefMaker Pro · " + today, M, 29);

  doc.setDrawColor(184, 151, 58);
  doc.line(M, 32, 210 - M, 32);

  // Corps
  doc.setFontSize(10.5);
  doc.setTextColor(30, 30, 30);
  const lines = doc.splitTextToSize(lastDoc, W);
  let y = 40;
  lines.forEach(ln => {
    if (y > 280) { doc.addPage(); y = 18; }
    doc.text(ln, M, y);
    y += 5.5;
  });

  // Pied de page
  doc.setFontSize(7.5);
  doc.setTextColor(180, 170, 155);
  doc.text("Généré par BriefMaker Pro — briefmaker-pro.vercel.app", M, 291);

  doc.save(cur.label.replace(/\s+/g, "-").toLowerCase() + ".pdf");
}

// ─── LANCEMENT ────────────────────────────────────────────────────────────
init();
