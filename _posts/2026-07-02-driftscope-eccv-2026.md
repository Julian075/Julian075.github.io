---
layout: post
title: "DriftScope Accepted at ECCV 2026!"
date: 2026-07-02 10:00:00
description: "Our paper 'DriftScope: Measuring The Hidden Effects of Diffusion Model Adaptation' has been accepted to ECCV 2026!"
tags: [computer-vision, diffusion-models, generative-ai, eccv]
categories: publications
featured: true
related_posts: false
---

I am thrilled to share that our paper **"DriftScope: Measuring The Hidden Effects of Diffusion Model Adaptation"** has been accepted at the **European Conference on Computer Vision (ECCV 2026)**! 🎉

- **ArXiv:** [arXiv:2607.00183](https://arxiv.org/abs/2607.00183)
- **PDF:** [Download PDF](https://arxiv.org/pdf/2607.00183)
- **Website:** [Project Page](https://hyping111.github.io/DriftScope/)
- **Code:** [GitHub Repository](https://github.com/hyping111/DriftScope)
- **Authors:** Héctor Laria, Yiping Han, **Julian D. Santamaria**, Kai Wang, Bogdan Raducanu, Joost van de Weijer, and Alexandra Gomez-Villa

---

### What is DriftScope?

Adapting pre-trained text-to-image diffusion models—whether to learn novel visual concepts (concept customization) or erase sensitive/unwanted concepts (concept unlearning)—is routinely evaluated only on the target intended effects. 

In this work, we argue that this evaluation protocol is structurally incomplete. Through sparse autoencoder analysis and zero-shot classification, we demonstrate that adaptation systematically damages semantically unrelated concepts:
- **Blind spots in standard metrics:** Aggregate metrics like FID and KID fail to capture concept degradation until the model is already severely broken. When the model remains functional, FID and KID stay virtually flat.
- **Silent failure modes:** Unrelated classes silently suffer worst-case zero-shot accuracy drops of up to **18.9 points**, and concept-level visual distributions shift dramatically.
- **Systematic across adaptation methods:** This degradation occurs at both ends of the adaptation spectrum (customization and unlearning), suggesting it is an intrinsic consequence of weight-level modifications rather than an artifact of any specific technique.

To detect and quantify this hidden drift before deploying adapted models, we introduce **DriftScope**: a prompt-level diagnostic tool that takes any two model checkpoints (base and adapted) and returns a ranked list of tokens whose visual concepts have shifted most between them. DriftScope optimizes a soft prompt to attribute drift at the token level without requiring access to real training data or model internals.

---

### Citation

If you find this work relevant to your research, please consider citing:

```bibtex
@inproceedings{laria2026driftscope,
  title     = {DriftScope: Measuring The Hidden Effects of Diffusion Model Adaptation},
  author    = {Laria, H{\'e}ctor and Han, Yiping and Santamaria, Julian D. and Wang, Kai and Raducanu, Bogdan and van de Weijer, Joost and Gomez-Villa, Alexandra},
  booktitle = {European Conference on Computer Vision (ECCV)},
  year      = {2026},
  url       = {https://arxiv.org/abs/2607.00183}
}
```
