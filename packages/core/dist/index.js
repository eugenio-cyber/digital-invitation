"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alias: () => Alias,
  DateParser: () => DateParser,
  Id: () => Id,
  Password: () => Password,
  complementEvent: () => complementEvent,
  complementGuest: () => complementGuest,
  createEmptyEvent: () => createEmptyEvent,
  createEmptyGuest: () => createEmptyGuest,
  events: () => events_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/events.ts
var events = [
  {
    id: "xdlhnq5lwm-esmllp6nie-hzgl0ajulz7",
    alias: "evento-fullstack",
    password: "senha123",
    name: "Evento de Desenvolvimento Fullstack",
    date: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    location: "S\xE3o Paulo, SP",
    description: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imageUrl: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imageBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    expectedAudience: 200,
    guests: [
      {
        id: "h1g2x30pglq-2qy7mc3nd8h-qq494djtbcq",
        name: "Alice Silva",
        email: "alice@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1
      },
      {
        id: "unzgczdy0gp-uqljtf756de-ibfnezyz5f",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        confirmed: false,
        hasCompanions: false,
        qtdCompanions: 0
      },
      {
        id: "hqzmy1wi9gl-rgmibulirh-1k2twwu6waj",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 2
      }
    ]
  },
  {
    id: "2kis8yvhcvv-8um289gg1x5-zw08j0ciytk",
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avan\xE7ado de JavaScript",
    date: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avan\xE7ado para programadores JavaScript.",
    imageUrl: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imageBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    expectedAudience: 100,
    guests: [
      {
        id: "epy7dvzdn-h5ffojxd8xf-4u3dbflvkcs",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0
      },
      {
        id: "q5pb671a0e-3a1txyighat-sbu67d47s8",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1
      }
    ]
  },
  {
    id: "5nef2v2sxhl-80hjydv7qd5-fddre4x4oyr",
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imageBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    expectedAudience: 150,
    guests: [
      {
        id: "8tpp19ouoqi-6nm51io1n5a-lw6itbwufu",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1
      },
      {
        id: "a22ufkd5y2-6quz4dv5wln-qbbzwq551zs",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmed: false,
        hasCompanions: false,
        qtdCompanions: 0
      },
      {
        id: "cyy99oylu4w-s6c387plg5k-uyieywntrh",
        name: "Isabela Martins",
        email: "isabela@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0
      }
    ]
  },
  {
    id: "oz9uvdydcd-nql21g818sa-dwvqulair8l",
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    location: "Florian\xF3polis, SC",
    description: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    imageUrl: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imageBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    expectedAudience: 150,
    guests: [
      {
        id: "6odwyyikpiu-4rm8d4upd7a-2ve4yb8dq2",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1
      },
      {
        id: "eg7lxxznuva-d4cnx48ijqt-iz6xznoo5ts",
        name: "Carla Mendes",
        email: "carla@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0
      }
    ]
  },
  {
    id: "muowo4f7k89-b93nq8qxqqd-0noa74ohiw9",
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    date: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    imageUrl: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imageBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    expectedAudience: 80,
    guests: [
      {
        id: "ir1r1ucu2od-461dkhc72tm-ydo4met07uj",
        name: "Maria Souza",
        email: "maria@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 2
      },
      {
        id: "95qacnirxwr-ffuhv3s0nd9-nsu3rl4djee",
        name: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmed: false,
        hasCompanions: false,
        qtdCompanions: 0
      }
    ]
  },
  {
    id: "81ks0oozc35-ljvo5a8rqzg-qt28hdn6vge",
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inaugura\xE7\xE3o da Loja Estrela",
    date: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    imageUrl: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imageBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    expectedAudience: 300,
    guests: [
      {
        id: "c1a5x0qgus-cfswa77ods5-z4nn6bezylp",
        name: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 3
      },
      {
        id: "npsgd64c31a-c30fsot6cpk-sbsuwwahdda",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0
      }
    ]
  },
  {
    id: "i3sg2jyquog-vnku4n38v4-6dibxujxr56",
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reuni\xE3o da Fam\xEDlia Oliveira",
    date: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    imageUrl: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imageBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    expectedAudience: 50,
    guests: [
      {
        id: "oqsjw6lyayh-q9b8sxtkvu-9cmebgi34ru",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 4
      },
      {
        id: "1wrml69nqd7-re2ywt674ic-vw5dbfxoj4q",
        name: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0
      }
    ]
  }
];
var events_default = events;

// src/event/functions/validateGuest.ts
function validateGuest(guest) {
  const errors = [];
  if (!guest.name) {
    errors.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!guest.email) {
    errors.push("E-mail \xE9 obrigat\xF3rio");
  }
  return errors;
}

// src/event/functions/complementGuest.ts
function complementGuest(guest) {
  const errors = validateGuest(guest);
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
  const qtdCompanions = guest.qtdCompanions ?? 0;
  const hasCompanions = guest.hasCompanions && guest.confirmed && qtdCompanions > 0;
  const guestUpdated = {
    ...guest,
    qtdCompanions: hasCompanions ? qtdCompanions : 0,
    hasCompanions
  };
  return guestUpdated;
}

// src/event/functions/validateEvent.ts
function validateEvent(event) {
  const erros = [];
  if (!event.alias) {
    erros.push("Alias \xE9 obrigat\xF3rio");
  }
  if (!event.name) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!event.description) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!event.date) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!event.location) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!event.expectedAudience || event.expectedAudience < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!event.imageUrl) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!event.imageBackground) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
}

// src/shared/Alias.ts
var Alias = class {
  static format(value) {
    return value.replace(/ /g, "-");
  }
};

// src/shared/Id.ts
var import_uuid = require("uuid");
var Id = class {
  static new() {
    return (0, import_uuid.v4)();
  }
  static isValid(id) {
    return (0, import_uuid.validate)(id);
  }
};

// src/shared/Password.ts
var Password = class {
  static new(length = 8) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const especiais = "!@#$%&*";
    const groups = [lowercase, uppercase, numbers, especiais];
    const password = [];
    for (let i = 0; i < length; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      password.push(group[Math.floor(Math.random() * group.length)]);
    }
    return password.join("");
  }
};

// src/shared/DateParser.ts
var DateParser = class {
  static format(date) {
    const pad = (n) => n.toString().padStart(2, "0");
    const d = date ?? /* @__PURE__ */ new Date();
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hour = pad(d.getHours());
    const minute = pad(d.getMinutes());
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }
  static unformat(date) {
    console.log("date: " + date);
    const [year, month, day] = date.split("T")[0].split("-");
    const [hour, minute] = date.split("T")[1].split(":");
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
};

// src/event/functions/complementEvent.ts
function complementEvent(partialEvent) {
  const errors = validateEvent(partialEvent);
  if (errors.length > 0) {
    throw new Error(errors.join("/n"));
  }
  const event = {
    ...partialEvent,
    id: partialEvent.id || Id.new(),
    password: partialEvent.password || Password.new(10),
    expectedAudience: +(partialEvent.expectedAudience || 1)
  };
  return event;
}

// src/event/functions/createEmptyGuest.ts
function createEmptyGuest() {
  return {
    id: Id.new(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanions: false,
    qtdCompanions: 0
  };
}

// src/event/functions/createEmptyEvent.ts
function createEmptyEvent() {
  return {
    id: Id.new(),
    name: "",
    location: "",
    date: /* @__PURE__ */ new Date(),
    description: "",
    expectedAudience: 1,
    imageUrl: "",
    imageBackground: ""
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  DateParser,
  Id,
  Password,
  complementEvent,
  complementGuest,
  createEmptyEvent,
  createEmptyGuest,
  events
});
