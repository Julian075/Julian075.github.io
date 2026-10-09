// Single source for publications and news.
// Add a new paper at the top of PUBLICATIONS; set selected: true to show it on the home page.
// type: "conference" | "journal" | "workshop"

window.PUBLICATIONS = [
  {
    id: "driftscope",
    title: "DriftScope: Measuring the Hidden Effects of Diffusion Model Adaptation",
    authors: [
      "Héctor Laria",
      "Yiping Han",
      "Julian D. Santamaria",
      "Kai Wang",
      "Bogdan Raducanu",
      "Joost van de Weijer",
      "Alexandra Gomez-Villa",
    ],
    venue: "ECCV 2026",
    venueFull: "European Conference on Computer Vision",
    type: "conference",
    year: 2026,
    selected: true,
    links: {
      paper: "https://arxiv.org/abs/2607.00183",
      pdf: "https://arxiv.org/pdf/2607.00183",
      code: "https://github.com/hyping111/DriftScope",
      project: "https://hyping111.github.io/DriftScope/",
    },
    abstract:
      "Adapting pre-trained text-to-image diffusion models, whether to learn new visual concepts or erase unwanted ones, is routinely evaluated on its intended effects alone. We argue this framing is incomplete. Through sparse autoencoder analysis and zero-shot classification, we demonstrate that adaptation systematically damages semantically unrelated concepts in ways that aggregate metrics structurally cannot surface: when damage is severe enough for FID and KID to respond, the model is already nearly unusable; when the model remains functional, FID and KID stay flat while specific classes silently suffer worst-case zero-shot accuracy drops of up to 18.9 points and concept-level distributions shift dramatically. This pattern appears at both ends of the adaptation spectrum (concept customization and concept unlearning), suggesting it is a systematic consequence of weight-level modification rather than an artifact of any particular method. To surface this hidden drift before deployment, we introduce DriftScope, a prompt-level diagnostic tool that takes any two model checkpoints and returns a ranked list of tokens whose visual concepts have shifted most between them. DriftScope optimizes a soft prompt to attribute drift at the token level without requiring access to real data or model internals. The result is an interpretable, concept-level audit that aggregate evaluation cannot provide.",
    bibtex: `@inproceedings{laria2026driftscope,
  title     = {DriftScope: Measuring The Hidden Effects of Diffusion Model Adaptation},
  author    = {Laria, H{\\'e}ctor and Han, Yiping and Santamaria, Julian D. and Wang, Kai and Raducanu, Bogdan and van de Weijer, Joost and Gomez-Villa, Alexandra},
  booktitle = {European Conference on Computer Vision (ECCV)},
  year      = {2026}
}`,
  },
  {
    id: "wilding",
    title: "WildIng: A Wildlife Image Invariant Representation Model for Geographical Domain Shift",
    authors: ["Julian D. Santamaria", "Claudia Isaza", "Jhony H. Giraldo"],
    venue: "IJCV 2026",
    venueFull: "International Journal of Computer Vision, vol. 134",
    type: "journal",
    year: 2026,
    selected: true,
    links: {
      paper: "https://link.springer.com/article/10.1007/s11263-026-02739-w",
    },
    bibtex: `@article{santamaria2026wilding,
  title   = {WildIng: A Wildlife Image Invariant Representation Model for Geographical Domain Shift},
  author  = {Santamaria, Julian D. and Isaza, Claudia and Giraldo, Jhony H.},
  journal = {International Journal of Computer Vision},
  volume  = {134},
  year    = {2026}
}`,
  },
  {
    id: "catalog",
    title: "CATALOG: A Camera Trap Language-Guided Contrastive Learning Model",
    authors: ["Julian D. Santamaria", "Claudia Isaza", "Jhony H. Giraldo"],
    venue: "WACV 2025",
    venueFull: "IEEE/CVF Winter Conference on Applications of Computer Vision",
    type: "conference",
    year: 2025,
    selected: true,
    note: "Oral presentation",
    links: {
      paper:
        "https://openaccess.thecvf.com/content/WACV2025/papers/Santamaria_CATALOG_A_Camera_Trap_Language-Guided_Contrastive_Learning_Model_WACV_2025_paper.pdf",
      code: "https://github.com/Julian075/CATALOG",
    },
    bibtex: `@inproceedings{Santamaria_2025_WACV,
  author    = {Santamaria, Julian D. and Isaza, Claudia and Giraldo, Jhony H.},
  title     = {CATALOG: A Camera Trap Language-Guided Contrastive Learning Model},
  booktitle = {Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  year      = {2025}
}`,
  },
  {
    id: "blancae",
    title:
      "Audio vs. Visual Approach to Monitor the Critically Endangered Species Atlapetes blancae: Developing Deep Learning Models with Limited Data",
    authors: ["Julian D. Santamaria", "Jhony H. Giraldo", "Angélica Diaz-Pulido", "Claudia Isaza"],
    venue: "IARIA 2024",
    venueFull: "IARIA Annual Congress on Frontiers in Science, Technology, Services, and Applications",
    type: "conference",
    year: 2024,
    selected: false,
    links: {
      paper: "https://www.thinkmind.org/articles/iaria_congress_2024_2_90_50050.pdf",
      code: "https://github.com/Julian075/BlancaeNet",
    },
    bibtex: `@inproceedings{santamariaaudio,
  title     = {Audio vs. Visual Approach to Monitor the Critically Endangered Species Atlapetes blancae: Developing Deep Learning Models with Limited Data},
  author    = {Santamaria P, Julian D. and Giraldo, Jhony H. and Diaz-Pulido, Ang{\\'e}lica and Isaza, Claudia},
  booktitle = {IARIA Annual Congress on Frontiers in Science, Technology, Services, and Applications},
  year      = {2024}
}`,
  },
];

// Newest first. html may contain links. color: 1 = red, 2 = green, 3 = blue, 4 = gold.
window.NEWS = [
  {
    date: "2026·07",
    color: 3,
    html: '<a href="https://hyping111.github.io/DriftScope/">DriftScope</a> accepted at ECCV 2026.',
  },
  {
    date: "2026·03",
    color: 2,
    html: '<a href="https://doi.org/10.1007/s11263-026-02739-w">WildIng</a> published in the International Journal of Computer Vision.',
  },
  {
    date: "2026·01",
    color: 1,
    html: "Started my PhD at the Computer Vision Center, Barcelona.",
  },
  {
    date: "2025",
    color: 4,
    html: "Research stays at Télécom Paris and Universidad de los Andes.",
  },
];
