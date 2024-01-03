"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3811],{5274:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"semapps-news-2","metadata":{"permalink":"/semapps/blog/semapps-news-2","source":"@site/blog/2021-11-12-semapps-news-2.md","title":"SemApps News N\xb02","description":"It has been over a year since we wrote a newsletter. It is not because nothing was happening, but on the contrary: we were thoroughly on many subjects in parallel and we had trouble making time!","date":"2021-11-12T00:00:00.000Z","formattedDate":"November 12, 2021","tags":[{"label":"semapps","permalink":"/semapps/blog/tags/semapps"}],"readingTime":9.685,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Rosset, Guillaume Rouyer, Yannick Duthe, Pierre Bouvier","title":"SemApps Core Team","url":"https://semapps.org","imageURL":"https://www.virtual-assembly.org/wp-content/uploads/2017/05/cropped-ms-icon-60x60.png"}],"frontMatter":{"slug":"semapps-news-2","title":"SemApps News N\xb02","author":"S\xe9bastien Rosset, Guillaume Rouyer, Yannick Duthe, Pierre Bouvier","author_title":"SemApps Core Team","author_url":"https://semapps.org","author_image_url":"https://www.virtual-assembly.org/wp-content/uploads/2017/05/cropped-ms-icon-60x60.png","tags":["semapps"]},"nextItem":{"title":"SemApps News N\xb01","permalink":"/semapps/blog/semapps-news-1"}},"content":"It has been over a year since we wrote a newsletter. It is not because nothing was happening, but on the contrary: we were thoroughly on many subjects in parallel and we had trouble making time!\\n\\nBetter late than never, you will find below, a recap of the progress and the latest news of SemApps.\\n\\nIf you fear in the future that you will be weaned from fresh and hectic information, the best is to join us on our discussion channels, which will allow you to follow the progress of the project as it goes ... and interact with the community:\\n\\n* [SemApps Forum](https://forums.assemblee-virtuelle.org/c/projets/semapps/11)\\n* [SemApps Chat](https://chat.lescommuns.org/channel/semapps_equipe)\\n* [SemApps Github](https://github.com/assemblee-virtuelle/semapps)\\n\\nDo not hesitate (if you have not already done so) to create a profile on [Virtual Assembly Semapps instance](https://archipel.assemblee-virtuelle.org/).\\n\\nGood reading !\\n\\n## Technical advances\\n\\n### WebACL permissions\\n\\nFrom [version 0.2.0](https://github.com/assemblee-virtuelle/semapps/pull/653), SemApps integrated the [WebACL standard](https://github.com/solid/web-access-control-spec) at the level of the triple store (Jena Fuseki), the backend and the frontend. This makes it possible to finely define the rights that are granted on a resource, in particular via the interface that we have developed:\\n\\n![](https://s3.standard.indie.host/pad-lescommuns-org/uploads/upload_0435425a6b90d709e4bdc42396bab033.png)\\n\\nWebACLs are optional. To activate them at the middleware level, you can read [this documentation](https://semapps.org/docs/middleware/webacl/index). This project was financed by **Les Chemins de la Transition**, **Data Players** and  **Virtual Assembly**.\\n\\n### Visualisation\\n\\n#### A lot of ways to visualize semantic datas\\nIn the world of the semantic web, it is easy to separate data, application servers and interfaces. A single SemApps server can thus handle data from a multitude of databases and display them on a variety of interfaces (or frontends).\\n\\nA good number of frontend components are now available to visualize semantic data: in the form of [calendar](https://app.lescheminsdelatransition.org/Event?view=calendar), [geographic map](https://archipel.assemblee-virtuelle.org/Person?view=map), [mozaic](https://payscreillois.colibris-groupeslocaux.org/Project), [circles](https://cercles.assemblee-virtuelle.org/Circle). All these components are developed in open-source and easily reusable.\\n\\nIn addition to these components available for React / React-Admin, interfaces have also been made in Angular and D3.js.\\n\\n#### Focus on graph visualisations\\n![](https://s3.standard.indie.host/pad-lescommuns-org/uploads/upload_1352ffc451af63eb0b05a499282c5767.png)\\n[Screen of carto of wiki R\xe9silience]\\n\\nThis year was also the opportunity to try a **convergence** between the 3 graph visualization projects within the AV: [**Flodio**](https://www.flod.io/), [**IPGS**](https://github.com/scenaristeur/ipgs/) and [**Grezi**](https://grezi.fr/). From end of 2020, 8 reunions took place.\\nThe result is the [visualisation of the same datas between Flodio and IPGS](https://pad.lescommuns.org/B0pn7WnFSWyO72DQ31NE2w#) and the development of a [common library](https://github.com/scenaristeur/ouiz) to access Semapps data, based on standards.\\n[More information about the projet of convergence here.](https://pad.lescommuns.org/k52s_XG-TMue-WTaCsy8Hg?view#)\\n\\nYou can finf all de **Flodio** projects  **[here](https://pad.lescommuns.org/Z2JQtVbwRCiccQu_LxK0HA?view)**. There is also a project of [Time filter](https://pad.lescommuns.org/IItNg9meQ92J8dlMqEbujw?view), and a new project about financial semantic cartography (see [documentation](https://pad.lescommuns.org/5fQOek2wQrOpuybWFNI6jg#)).\\n\\n### Next projects to be carried out by the end of the year\\n\\nSeveral major projects are underway and should be completed by the end of the year:\\n\\n#### Interoperability\\nAllow different SemApps instances to communicate with each other in a secure manner thanks to the implementation of SOLID specifications. ([Voir le chantier d\xe9di\xe9](https://github.com/assemblee-virtuelle/semapps/issues/451), principally financed by **Data Players**.)\\n\\n#### PODs Solid\\nConfigure SemApps as a provider of [PODs Solid](https://solidproject.org/), with the idea of \u200b\u200bbeing able to offer an architecture such as the one presented in [this slides](https://docs.google.com/presentation/d/1RCBjy754e2Fn2HREzjHLBXe0qljOD0Y7D8jbEiO7Fb4/edit) (voluntary work).\\n\\n#### Connectors\\nThanks to funding from Colibris which wishes to open all its data in semantics (and in ActivityPub), we will offer connectors with software as varied as Drupal, YesWiki, Prestashop, Mobilizon, Mattermost, Gogocarto, Discourse ...\\n\\n## Instances deployed\\n\\n![](https://s3.standard.indie.host/pad-lescommuns-org/uploads/upload_13786ff444a804940f8b74cfcc2d5eb3.png)\\n[Screen of \\"chemins de la transition\\" instance]\\n\\n* **Archipel**\\n    * Knowledge base of virtual assembly\\n    * [https://archipel.assemblee-virtuelle.org/](https://archipel.assemblee-virtuelle.org/)\\n* **Colibris Pays Creillois**\\n    * Knowledge base for a local group of Colibris\\n    * [https://payscreillois.colibris-groupeslocaux.org/](https://payscreillois.colibris-groupeslocaux.org/)\\n* **Les Chemins de la Transition**\\n    * Collaborative Knowledge base + networking platform\\n    * [https://app.lescheminsdelatransition.org/](https://app.lescheminsdelatransition.org/)\\n* **Passerelle Normandie**\\n    * Collaborative Knowledge base of \\"pays du bocage\\", a rural area in Orne (61 - Normandie)\\n    * [https://app.passerellenormandie.fr/](https://app.passerellenormandie.fr/)\\n* **100 lieux nourriciers**\\n    * Collaborative Knowledge base about urban agriculture, with AFAUP, Les petits d\xe9brouillards, Si t\'es jardin, Emma\xfcs.\\n    * [https://100lieuxnourriciers.fr/](https://100lieuxnourriciers.fr/)\\n* **Classe dehors**\\n    * Collaborative Knowledge base about educational projects\\n    * [https://classe-dehors.org/](https://classe-dehors.org/)\\n\\n## Projects under development\\n\\n![](https://s3.standard.indie.host/pad-lescommuns-org/uploads/upload_fa157fbdbda0bb3e7a064bbadb113ec9.png)\\n\\n* **Prats de Mollo :**\\n    * Data boards backed by an electricity board + collaborative knowledge base\\n* **PETR macon bourgogne :**\\n    * Knowledge base around third places with semantic search engine\\n* **A\'Urba**\\n    * Grezi mapping based on Semapps for the Bordeaux Urban Planning Agency (A\'Urba).\\n* **Glocal Low Tech**\\n    * Mapping the low-tech world\\n* **Data Food Consortium**\\n    * Creation of standards for the management of food data and short circuits\\n* **Organigraph**\\n    * New interface to represent the organization of VA in the form of circles\\n    * [https://cercles.assemblee-virtuelle.org](https://cercles.assemblee-virtuelle.org)\\n\\n## Need to map SemApps instances\\nWe went in a year from a single instance to ten Semapps instances ... It\'s not yet huge, it\'s the beginning, but it showed us that it was already [difficult for each contributor of the AV](https://github.com/assemblee-virtuelle/semapps/issues/839) to have a global view of all the instances and to know how to find the URLs of the SemApps of each project to participate. A map was therefore essential.\\n\\nThe answer to this need resulted in a SemApps instance mapping project dubbed ** the carto of cartos **. To achieve this, a new specific SemApps instance was created. We have named this instance [Meta](https://semapps.meta.assemblee-virtuelle.org), and it will carry data from multiple future projects:\\n* A graph visualization of SemApps instances\\n* A timeline of the VA\\n* A semantic lexicon\\n* AV financial datas\\n* A carto of carto tools\\n\\nYou can read [documentation](https://pad.lescommuns.org/-ioDLrRJTuCtMh-9xDSjcA?view), [SemApps META instance](https://semapps.meta.assemblee-virtuelle.org/) and [The carto of cartos](https://meta.flod.io)\\n\\n## Perspective projects\\n\\nIn the coming months, the growing ecosystem should launch more than a dozen great projects involving SemApps, with public, private and citizen actors, including one, or even several at European level.\\n\\nSome are (very) uncertain like the [DUST project](https://forums.assemblee-virtuelle.org/t/dust-projet-europeen-autour-de-solid/198) for which we have requested a nice funding from the European Commission.\\n\\nOthers like the [SITI project](https://www.virtual-assembly.org/wp-content/uploads/2021/06/Siti-Final-1.pdf) are very well on board and should be funded shortly .\\n\\nTerritorial Information Systems constitute a strong axis for the development of use cases around SemApps: Several projects are underway, in Normandy, in the B\xe9arn dear to our dear Pierre, in the Dr\xf4me and elsewhere ...\\n\\nThematic information systems constitute the other development axis of SemApps. Several projects around food, Third Places, energy, mobility should also emerge in the coming months.\\n\\n## Community News\\n\\n### Tribute to Gabriel Henry\\nLet\'s start with some sad news. Gabriel Henry, who was involved at the start of the SemApps adventure, died in September. He drowned, like 8 other people that day, while swimming in the Mediterranean. We thank him deeply for his involvement and wish him rest in peace.\\n\\n### Newcomers\\nAt its inception, the SemApps community consisted of a core of 6 people: S\xe9bastien, Simon, Niko, Pierre, Gabriel, Guillaume. That was a long time ago ... Since then, thanks to the tremendous work of Yannick in particular, it has grown and now has more than ten people, which is very good news!\\nYou can find [here the SemApps community and the animation](https://forums.assemblee-virtuelle.org/t/animation-de-la-communaute-dev-de-semapps/117) ...\\n\\nAmong them, let us quote in particular:\\n* **Yannick** : One of the historical figures of the Virtual Assembly! Passionate about graphs, developer of [flod.io](https://www.flod.io/).\\n* **Thomas** is a developer trainer on Angular and Vue. He entered the adventure through the territorial dimension of B\xe9arn.\\n* **Bastien** new SemApps developer at Data Players\\n* **Vincent** has been an independent developer for a few months with the aim of contributing to commons and projects that make sense, he also works on Gogocarto / Transiscope.\\n* **Vivien** holds a pro free software license in Angers, then worked at PMB service on the development of free software for document management, then mobile and a little graphs and semantics!\\n\\n[On accueille tou.te.s les nouvelles contributrices et nouveaux contributeurs sur le Forum de l\'Assembl\xe9e Virtuelle](https://forums.assemblee-virtuelle.org/c/projets/semapps/11)\\n\\n### The beginners club\\n\\n- A permanent welcome for new contributors is offered every Monday at 3 p.m. All connection information is available on the [chat / canal @semapps_debutant](https://chat.lescommuns.org/channel/semapps_debutant). It is a moment of welcome for new developers, to discuss their difficulties or to learn together.\\n- Trainings were offered to beginners on React, Protege and Moleculer.\\n\\n### Animation of the SemApps community\\n\\nAbout twenty interviews were carried out by Yannick with AV partners (developers or not) to find out their wishes for interactions with the SemApps ecosystem.\\n* See the post [Animation of the Semapps community](https://forums.assemblee-virtuelle.org/t/animation-de-la-communaute-dev-de-semapps/117)\\n\\n2 one-week residences were also organized during the year 2021 which, for our greatest happiness, allowed us to meet again after so many remote visios and meetings. On the program ... Aperitifs, banquets, workshops, team building, brainstorming, networking, and even family constellations which allowed us to become better aware of our places, roles, desires. (The family constellation is a sensitive, unique and very powerful workshop to be able to readjust, as a collective.)\\n\\n### Funding\\nSeveral funding (services, grants, donations) from multiple sources feed the SemApps roadmap.\\n\\nThe challenge is to make this funding converge around the development of shared building blocks, and thus fuel the development of the community. We maintain an open documentation on this subject that you can find [here](https://pad.lescommuns.org/mjckrHy3TTuXq3qt7XJ9yw#)\\n\\nWe have also set up an [Open Collective](https://opencollective.com/semapps) which should ultimately allow us to catalyze funding and development strategies ... in full transparency!\\n\\n## And in the ecosystem...\\n\\n### Virtual Assembly\\n\\nShe celebrated her 10th birthday at [El Capitan](https://elcapitan.fr) (Normandy) last June. On the occasion of this memorable anniversary, she took the opportunity to restructure. It now federates an ecosystem of organizations (and individuals as well but above all organizations), which is reflected in its [new board of directors] (https://www.virtual-assembly.org/organisations-membres/), and [in its new social code](https://www.virtual-assembly.org/code-social-de-l-av/). If you want to join the Virtual Assembly as an organization, [it\'s here !](https://forums.assemblee-virtuelle.org/c/accueil/adhesion-organisation/48)\\n\\n### Data Players\\nData Players will for its part transform itself into a Cooperative Society of Collective Interest (SCIC) in the coming weeks: More exactly, we will close the SAS and we will create a SCIC.\\n\\nHaving numerous projects based on SemApps, she contributes substantially, via donations, to the development of the Virtual Assembly and to R&D around SemApps. The last one was \u20ac 7000, we thank her warmly!\\n\\n### Sparna\\nSparnatural is a search engine that allows humans to make complex queries on semantic information systems.\\n\\nIt allows you to easily build queries of the type:\\n* I am looking for \\"People\\"\\n    * who * have * \\"Skills\\" in [...] and / or [...];\\n    * who * are * interested * in \\"Topics\\" [...] and / or [...];\\n    * who * live * in the \\"Region\\" [...]\\n    * and who are * looking * for a \\"Job\\".\\n\\nSparnatural will be used and funded by the Ministry of Culture as well as by the National Library of France.\\nWe are going to integrate it into the ecosystem of SemApps modules.\\n\\n### Projets of Fada (based on SOLID)\\n\\n#### Booklice\\nDavid, alias Fada or Scenaristeur or [...] depending on the context, develops [many projects based on Solid: [Here](https://scenaristeur.github.io/) or [here](https: // github.com/scenaristeur). Here are a few !)\\nA [watch / bookmarks utility](https://scenaristeur.github.io/booklice) (see about page for tutorial) based on SOLID!\\n\\n#### ESS-table\\nAn alternative to Airtable https://scenaristeur.github.io/ess-table\\n\\n#### Contacts\\nTo stock your contacts https://scenaristeur.github.io/ldp-workspace/\\n\\n### Virtual Assembly\'s donation campaign\\n\\nThe Virtual Assembly\'s organization mainly relies on volunteering. In order to maintain its sustainability, its research and development activities as well as its independance, we count on your donations. The more you contribute regularly, the more our association strengthens economically. In this way, we encourage you to choose monthly donations rather than ponctual ones. In any case, we will be gratefull to benefit from your help :)\\n\\n* I would like to make a [regular donation](https://www.virtual-assembly.org/faire-un-don/)\\n* I would like to make a [one-time donation](https://www.virtual-assembly.org/faire-un-don/)"},{"id":"semapps-news-1","metadata":{"permalink":"/semapps/blog/semapps-news-1","source":"@site/blog/2019-09-25-semapps-news-1.md","title":"SemApps News N\xb01","description":"Welcome to this first SemApps newsletter, designed to keep you informed of our progress, in a synthetic and accessible way. The SemApps team plans to publish it on a regular basis, every 2-3 months.","date":"2019-09-25T00:00:00.000Z","formattedDate":"September 25, 2019","tags":[{"label":"semapps","permalink":"/semapps/blog/tags/semapps"}],"readingTime":7.24,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Rosset, Gabriel Henry & Valentine Mathieu","title":"SemApps Core Team","url":"https://semapps.org","imageURL":"https://www.virtual-assembly.org/wp-content/uploads/2017/05/cropped-ms-icon-60x60.png"}],"frontMatter":{"slug":"semapps-news-1","title":"SemApps News N\xb01","author":"S\xe9bastien Rosset, Gabriel Henry & Valentine Mathieu","author_title":"SemApps Core Team","author_url":"https://semapps.org","author_image_url":"https://www.virtual-assembly.org/wp-content/uploads/2017/05/cropped-ms-icon-60x60.png","tags":["semapps"]},"prevItem":{"title":"SemApps News N\xb02","permalink":"/semapps/blog/semapps-news-2"}},"content":"Welcome to this first SemApps newsletter, designed to keep you informed of our progress, in a synthetic and accessible way. The SemApps team plans to publish it on a regular basis, every 2-3 months.\\n\\nThe newsletter below reports on the latest developments since this summer.\\n\\n## Technical advances\\n\\n#### Improvement of the interface\\n\\nWe have done some work on the [React-Admin interface](https://marmelab.com/react-admin/) to make it look like the first version of SemApps, and to offer more user-friendliness.\\n\\nThanks to the great flexibility and modularity of React-Admin, this project has progressed quickly. You can see it on [this new Virtual Assembly website](https://archipel.assemblee-virtuelle.org) (available in french) which aims at mapping projects, actors, ideas and resources related to the Virtual Assembly.\\n\\n#### LDP cache\\n\\nSemApps LDP service is now able to manage the cache of LDP resources and containers. As soon as a resource is called, the result is cached and the second time it is requested, the cached result will be served without the need to make the SPARQL request necessary to fetch the information from the triple store (Jena Fuseki).\\n\\n#### ActivityPub Signature\\n\\nThe implementation in SemApps of the ActivityPub protocol is now complete with the implementation of HTTP signatures, which authenticates the issuer of ActivityPub activities.\\n\\nIt is now possible to deploy in a few minutes an ActivityPub server based on SemApps and make it communicate with a Mastodon account, as you will discover in [this tutorial](https://semapps.org/docs/guides/activitypub).\\n\\n## Human Advances\\n\\n#### J\xe9r\xe9my Dufraisse has joined us\\n\\nNew to web development and passionate about cooperation in all domains, Jeremy joins the SemApps team, aiming to get more involved, especially in programming this software\'s code. \\nMember of the Colibris core team in Lorient, he\'s already working on the first version of the Paths of Transition\'s platform, one of SemApps ecosystem\'s projects.\\n\\n#### Work on governance\\n\\nBy implementing the principles of \\"election by consent\\", the SemApps team was not only able to define several roles, regarding to the effective needs of its organization, but also to fill the roles according to the competencies that were identified.\\n\\nAmong the 13 roles that came out, the following ones deserve a particular attention : \\n* Onboarding / Inclusion / Welcoming role - Gabriel HENRY\\n* Technical partnership / Interoperability role : Simon LOUVET\\n* Communication role : Pierre BOUVIER-MULLER\\n* Information gardening/Informational heritage role : Guillaume ROUYER\\n* The Virtual Assembly\'s coordination role : Garbriel HENRY\\n\\nThanks to an agile governance, these roles will benefits from a regular review, in order to be reajusted if needed. \\n\\n#### Work on economic sustainability\\n\\nWe have paid particular attention to the role of economic sustainability to enable our contributors to feel fairly rewarded. We are moving towards a self-determination of our respective retributions.\\n\\n## Uses\\n\\n#### Launch of the mailer for La Fabrique des Colibris\\n\\nLa Fabrique des Colibris called upon Reconnexion to develop a [small tool](https://alertes.colibris-lafabrique.org/) that allows users to be notified of new projects by email, depending on their location and interests. When a new project is published on the platform, it is sent to an instance of SemApps. An ActivityPub activity is then generated, and then sent to the mailer.\\n\\nThis resolutely open approach should allow in the future to provide other ways to be kept up to date with the latest news from La Fabrique. Other projects with the Colibris movement are already in the pipeline...\\n\\n#### Data Food Consortium migrates to SemApps\\n\\nData Food Consortium had planned from the beginning to rely on a semantic server to store the information entrusted (at the initiative of the owners of this data: producer, intermediary...) by the various platforms of short circuit (catalog, stock, logistics, commercial offer...).\\n\\nSemApps allowed to migrate from a MongoDB database to a semantic database using SPARQL and LDP interfaces. This migration highlighted all the rigor necessary for a semantic, technical and ontological consistency in this project, considered as quite complex by nature (OIDC authentication between platforms, matching directory rather than identity repository...). The data is mineable by a rich business APIs provided by the server which has been adapted to communicate with SemApps. The prototype\'s web interface did not need to be redesigned (thanks to the business APIs) even if some adjustments were necessary to read the data in JSON-LD.\\n\\nSemApps has therefore helped to reach phase 2 CFD technology without waiting for another Solid server capable of making complex SPARQL queries to be operational.\\n\\n## Events\\n\\n#### Meetup Interoperability\\n\\nFollowing the SemApps residency in El Capitan during June, the Virtual Assembly and Startin\'blox showed their ambition to cooperate more closely. This resulted in the co-organization of [a meetup on September 15th at Les Grands Voisins](https://www.facebook.com/events/609531263097830/). We had excellent feedbacks, met new people and even new contributors ! Even if there were not so many participants, they all grasped the message we wanted to convey. We know how to mediate better and better on our subjects ! A big thank you to all the interveners and volunteer contributors (an incredible team <3) present at the event !\\n\\n#### Publication of several SemApps presentation videos!\\nYou will find the May 20th meeting videos on [the Virtual Assembly\'s Youtube channel](https://www.youtube.com/channel/UCg7sYh_Y8cHFT4s82K4SVmA/), with English subtitles in option.\\nWe have also just published [the video](https://youtu.be/wjQSKP4DWmM) of a presentation we made at UTT about SemApps and peer-to-peer architectures. Here is [a document](https://pad.lescommuns.org/IRs8_6lIS_iucxqiPSXwNA?both)  summarizing these interventions, as well as [the Power-point](https://docs.google.com/presentation/d/1lVUx4URcKkV1Z3G4EticbH1uCV_NwtVBlYo5cvqUOOc/edit?usp=sharing) on which Guillaume and S\xe9bastien based their presentation.\\n\\n## And in the ecosystem...\\n\\n#### YesWiki becomes LDP compatible\\n\\nAbout fifteen [YesWiki](https://yeswiki.net) contributors met near Avignon this autumn, and one of the new features that came out of this meeting is an API system that allows you to easily add, edit or delete data via simple HTTP calls.\\n\\nYesWiki was already semantic web compatible, with the ability to output data in JSON-LD. With this new breakthrough, YesWiki becomes a full-fledged LDP server. We hope to be able to show an example soon, when the new version of YesWiki is released.\\n\\nAlso note that, during this sprint, a small synchronization bot has been developed, which allows to listen to an ActivityPub actor (for example Mastodon) and to repost the received data on a YesWiki. This bot is based on SemApps and its source code is available [here](https://github.com/reconnexion/yeswiki-synchronizer).\\n\\nThanks to S\xe9bastien Rosset for these 2 major advances!\\n\\n#### Startin\'Blox\\n\\nAt the beginning of the summer, [Startin\'blox](https://startinblox.com/) launched the beta version of [Hubl](https://hubl.world/), a tool developed for organizations, composed of a chat, a profile directory, a mission directory and a dashboard, all Solid compatible. 25 communities are currently testing Hubl, including a large part of the Happy Dev network and many more are expected to follow in October. The tool is evolving quickly, with an update every Thursday based on user feedbacks. From now on we will communicate all the evolutions on [our twitter account](https://twitter.com/StartinBlox).\\n\\nTo test Hubl, meet us on [the SiB community instance](https://community.startinblox.com) or get invited on [the Virtual Assembly instance](https://virtual-assembly.hubl.world/). All your feedbacks are welcome on the \\"#Make Hubl Better\\" channel :) Since the September 15th event at Les Grands Voisins, we have a channel dedicated to the cooperation between the two structures: \\"Av x SIB\\". Come and join us !\\n\\nOther info, if you\'re struggling to explain the principle of Solid, Philippe Honigman and Alice Poggioli have made [an article](https://blog.orgtech.fr/un-avenir-solid/) vulgarizing this concept. Don\'t hesitate to make it run !\\n\\n#### SOLID / Inrupt\\n\\nSince April, the Solid community has been organizing [video events] (https://www.eventbrite.com/o/solid-project-30026804546) at the beginning of every month. The events start with a presentation of the roadmap updates by Tim Berners Lee, followed by presentations of various community initiatives. On September 3rd, Alex presented Hubl there. If you want to present your own creations you can suggest your intervention by email to info@solidproject.org.\\n\\nMid-August, Inrupt announces the release of the Beta version of its [solid server](https://inrupt.com/products/enterprise-solid-server).\\n\\nHere are two working groups where it would be nice to have representatives from our ecosystem in the Solid community :\\n\\n* [The Interoperability panel](https://github.com/solid/data-interoperability-panel) every Tuesday at 4PM.\\n* [The Authorization panel](https://github.com/solid/authorization-panel) every Wednesday at 4PM.\\nIf you want to share information about the Solid ecosystem, there is a dedicated channel on Hubl \\"Solid Watch\\" :)\\n\\n#### Virtual Assembly\'s donation campaign \\n\\nThe Virtual Assembly\'s organization mainly relies on volunteering. In order to maintain its sustainability, its research and development activities as well as its independance, we count on your donations. The more you contribute regularly, the more our association strengthens economically. In this way, we encourage you to choose monthly donations rather than ponctual ones. In any case, we will be gratefull to benefit from your help :)\\n\\n* I would like to make a [regular donation](https://www.virtual-assembly.org/faire-un-don/)\\n* I would like to make a [one-time donation](https://www.virtual-assembly.org/faire-un-don/)"}]}')}}]);