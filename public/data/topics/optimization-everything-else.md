# Optimization / Everything Else

优化 / 其他优化

12 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Difference of Convex Programming in the Wasserstein Space with Applications to MMD Optimization

**Authors:** Clément Bonet; Pierre\-Cyril Aubin\-Frankowski; Youssef Mroueh

**ID:** 148506 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xKLfU6Cqa2>) | [PDF](<https://openreview.net/pdf?id=xKLfU6Cqa2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148506>)

Optimizing functionals over the space of probability measures is now ubiquitous in machine learning\. A widely used approach is to perform the optimization directly over the Wasserstein space, but many objective functionals of practical interest are non\-convex along Wasserstein geodesics, making the analysis of standard first\-order methods challenging\. In this work, we study a class of objectives over the Wasserstein space that admit a difference\-of\-convex \(DC\) decomposition  and we lift the classical convex\-concave procedure \(CCCP\) to this setting\. Under smoothness and strong convexity assumptions on the convex components of the decomposition, we prove almost stationarity along the iterates of the resulting algorithm\. Our main focus is on the Maximum Mean Discrepancy \(MMD\) and the Energy Distance \(ED\) functionals, for which we develop explicit Wasserstein DC decompositions, and establish local convergence of the scheme under mild assumptions\. Empirically, we show that well\-chosen DC decompositions yield faster and more stable convergence than Wasserstein gradient descent on these MMD objectives\.

## The Multi\-Block DC Function Class: Theory, Algorithms, and Applications

**Authors:** Sayedpouria Fatemi; Hoomaan Maskan; Alp Yurtsever; Suvrit Sra

**ID:** 150842 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=evRzz7MREH>) | [PDF](<https://openreview.net/pdf?id=evRzz7MREH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150842>)

We present the Multi\-Block DC \(BDC\) class, a rich class of structured nonconvex functions that admit a DC \(\`\`difference\-of\-convex''\) decomposition across parameter blocks\. This multi\-block class not only subsumes the usual DC programming, but also turns out to be provably more powerful\. Specifically, we demonstrate how standard models \(e\.g\., polynomials and tensor factorization\) must have DC decompositions of exponential size, while their BDC formulation is polynomial\. This separation in complexity also underscores another key aspect: unlike DC formulations, obtaining BDC formulations for problems is vastly easier and constructive\. We illustrate this aspect by presenting explicit BDC formulations for modern tasks such as deep ReLU networks, a result with no known equivalent in the DC class\. Moreover, we complement the theory by developing algorithms with non\-asymptotic convergence theory, including both batch and stochastic settings, and demonstrate the broad applicability of our method through several applications\.

## A Locality\-Aware Surrogate for Natural\-Gradient Descent in Quantum Optimization

**Authors:** Md Mobasshir Arshed Naved; Wenbo Xie; Wojciech Szpankowski; Ananth Grama

**ID:** 155416 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5qbHr87u5d>) | [PDF](<https://openreview.net/pdf?id=5qbHr87u5d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155416>)

Variational quantum algorithms \(VQAs\) rely on gradient\-based optimization over parameterized circuits whose loss landscape lives on a manifold of quantum states\. Quantum natural gradient \(QNG\) accounts for this geometry through the quantum Fisher information matrix \(QFIM\)\. However, estimating the full QFIM is prohibitively expensive within practical quantum circuit shot budgets\. Existing tractable approximations either discard inter\-block couplings, as in block\-diagonal QNG, or replace the QFIM with a measurement\-induced classical Fisher surrogate, as in random natural gradient \(RNG\)\. We propose a locality\-aware surrogate that targets the QFIM through its covariance representation in terms of propagated generators, retaining a structured subset of informative cross\-parameter couplings while remaining practical to estimate under finite\-shot budgets\. Our construction combines three ingredients: weight\-$k$ Pauli truncation to control estimation variance, support\-overlap masking to exploit sparsity, and single\-dataset classical\-shadow estimation that reuses the same shadow dataset across all retained metric entries\. Truncation level $k$ provides a bias\-\-variance tradeoff: larger $k$ captures more of the propagated\-generator structure but increases estimation cost, making it a budget\-constrained design choice\. Circuit parameters whose truncated generators remain nonzero form an active set receiving surrogate\-QNG updates, while the rest follow standard gradient descent\. We provide finite\-shot concentration bounds for the shadow\-estimated surrogate and convergence guarantees to a stationary neighborhood under standard smoothness assumptions\. Experiments on variational quantum eigensolver \(VQE\) instances with local ans\\"atze for Heisenberg and Ising spin chains show improved convergence per cumulative shot relative to SGD, Adam, block\-diagonal QNG, and RNG baselines under finite\-shot budgets, including on systems up to 16 qubits\.

## Improving the Optimization Landscape of Matrix Completion with $\\epsilon$\-close Surrogates

**Authors:** Ziye Ma

**ID:** 151753 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YJGa7iqmAu>) | [PDF](<https://openreview.net/pdf?id=YJGa7iqmAu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151753>)

_Abstract unavailable from the accessible public sources._

## Difference of Convex Programming in the Wasserstein Space with Applications to MMD Optimization

**Authors:** Clément Bonet; Pierre\-Cyril Aubin\-Frankowski; Youssef Mroueh

**ID:** 148506\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148506

[Paper](<https://openreview.net/forum?id=xKLfU6Cqa2>) | [PDF](<https://openreview.net/pdf?id=xKLfU6Cqa2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148506>)

Optimizing functionals over the space of probability measures is now ubiquitous in machine learning\. A widely used approach is to perform the optimization directly over the Wasserstein space, but many objective functionals of practical interest are non\-convex along Wasserstein geodesics, making the analysis of standard first\-order methods challenging\. In this work, we study a class of objectives over the Wasserstein space that admit a difference\-of\-convex \(DC\) decomposition  and we lift the classical convex\-concave procedure \(CCCP\) to this setting\. Under smoothness and strong convexity assumptions on the convex components of the decomposition, we prove almost stationarity along the iterates of the resulting algorithm\. Our main focus is on the Maximum Mean Discrepancy \(MMD\) and the Energy Distance \(ED\) functionals, for which we develop explicit Wasserstein DC decompositions, and establish local convergence of the scheme under mild assumptions\. Empirically, we show that well\-chosen DC decompositions yield faster and more stable convergence than Wasserstein gradient descent on these MMD objectives\.

## The Multi\-Block DC Function Class: Theory, Algorithms, and Applications

**Authors:** Sayedpouria Fatemi; Hoomaan Maskan; Alp Yurtsever; Suvrit Sra

**ID:** 150842\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150842

[Paper](<https://openreview.net/forum?id=evRzz7MREH>) | [PDF](<https://openreview.net/pdf?id=evRzz7MREH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150842>)

We present the Multi\-Block DC \(BDC\) class, a rich class of structured nonconvex functions that admit a DC \(\`\`difference\-of\-convex''\) decomposition across parameter blocks\. This multi\-block class not only subsumes the usual DC programming, but also turns out to be provably more powerful\. Specifically, we demonstrate how standard models \(e\.g\., polynomials and tensor factorization\) must have DC decompositions of exponential size, while their BDC formulation is polynomial\. This separation in complexity also underscores another key aspect: unlike DC formulations, obtaining BDC formulations for problems is vastly easier and constructive\. We illustrate this aspect by presenting explicit BDC formulations for modern tasks such as deep ReLU networks, a result with no known equivalent in the DC class\. Moreover, we complement the theory by developing algorithms with non\-asymptotic convergence theory, including both batch and stochastic settings, and demonstrate the broad applicability of our method through several applications\.

## Post\-Training Quantization with Gradient\-Projected Fisher Approximation for Vision Transformers

**Authors:** Jincheol Yang; Jaemin Choi; Nahyun Lim; Yun\-Seong Jeong; Matti Zinke; Hyunwoo Yu; Bongjoon Hyun; Kyomin Sohn; Suk\-Ju Kang

**ID:** 151584 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZWDJy4JaBH>) | [PDF](<https://openreview.net/pdf?id=ZWDJy4JaBH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151584>)

_Abstract unavailable from the accessible public sources._

## Difference of Convex Programming in the Wasserstein Space with Applications to MMD Optimization

**Authors:** Clément Bonet; Pierre\-Cyril Aubin\-Frankowski; Youssef Mroueh

**ID:** 148506\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148506

[Paper](<https://openreview.net/forum?id=xKLfU6Cqa2>) | [PDF](<https://openreview.net/pdf?id=xKLfU6Cqa2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148506>)

Optimizing functionals over the space of probability measures is now ubiquitous in machine learning\. A widely used approach is to perform the optimization directly over the Wasserstein space, but many objective functionals of practical interest are non\-convex along Wasserstein geodesics, making the analysis of standard first\-order methods challenging\. In this work, we study a class of objectives over the Wasserstein space that admit a difference\-of\-convex \(DC\) decomposition  and we lift the classical convex\-concave procedure \(CCCP\) to this setting\. Under smoothness and strong convexity assumptions on the convex components of the decomposition, we prove almost stationarity along the iterates of the resulting algorithm\. Our main focus is on the Maximum Mean Discrepancy \(MMD\) and the Energy Distance \(ED\) functionals, for which we develop explicit Wasserstein DC decompositions, and establish local convergence of the scheme under mild assumptions\. Empirically, we show that well\-chosen DC decompositions yield faster and more stable convergence than Wasserstein gradient descent on these MMD objectives\.

## The Multi\-Block DC Function Class: Theory, Algorithms, and Applications

**Authors:** Sayedpouria Fatemi; Hoomaan Maskan; Alp Yurtsever; Suvrit Sra

**ID:** 150842\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150842

[Paper](<https://openreview.net/forum?id=evRzz7MREH>) | [PDF](<https://openreview.net/pdf?id=evRzz7MREH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150842>)

We present the Multi\-Block DC \(BDC\) class, a rich class of structured nonconvex functions that admit a DC \(\`\`difference\-of\-convex''\) decomposition across parameter blocks\. This multi\-block class not only subsumes the usual DC programming, but also turns out to be provably more powerful\. Specifically, we demonstrate how standard models \(e\.g\., polynomials and tensor factorization\) must have DC decompositions of exponential size, while their BDC formulation is polynomial\. This separation in complexity also underscores another key aspect: unlike DC formulations, obtaining BDC formulations for problems is vastly easier and constructive\. We illustrate this aspect by presenting explicit BDC formulations for modern tasks such as deep ReLU networks, a result with no known equivalent in the DC class\. Moreover, we complement the theory by developing algorithms with non\-asymptotic convergence theory, including both batch and stochastic settings, and demonstrate the broad applicability of our method through several applications\.

## SPA\-Q: Structure\-Preserving Adaptive Post\-Training Quantization for Monocular Depth Estimation

**Authors:** Jaemin Choi; Jincheol Yang; Nahyun Lim; Yun\-Seong Jeong; Matti Zinke; Hyunwoo Yu; Suk\-Ju Kang

**ID:** 155959 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1YMesFGTP0>) | [PDF](<https://openreview.net/pdf?id=1YMesFGTP0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155959>)

Monocular depth estimation \(MDE\) has advanced rapidly with the emergence of foundation models such as Depth Anything\.  Their transformer\-based architectures provide strong generalization across diverse scenes and domains, but also incur high computational and memory cost, making efficient deployment challenging\. Post\-Training Quantization \(PTQ\) provides an efficient and practical solution for model compression, yet low\-bit PTQ remains challenging for MDE models\. When applying PTQ to Depth Anything, we identify two key challenges: \(i\) independently minimizing the quantization error of the query and key projections fails to preserve the attention maps induced by their interaction, and \(ii\) quantization errors accumulate across layers, resulting in intermediate feature distribution shifts\. To address these issues, we propose SPA\-Q, a Structure\-Preserving Adaptive PTQ framework for MDE, consisting of two main components\. First, Attention\-Preserving Calibration \(APC\) determines query and key quantization parameters by matching the full\-precision attention distribution\. Second, Channel\-Wise Distribution Alignment \(CWDA\) learns channel\-wise affine transformations to mitigate quantization\-induced distribution shifts, and the learned parameters are absorbed into the weights after training\. Experimental results show that SPA\-Q consistently outperforms existing PTQ methods under 4\-bit quantization, achieving an average 25\.9\\% reduction in AbsRel and a 17\.3\\% improvement in $\\delta\_1$ across NYUv2 and KITTI datasets\.

## Post\-Training Quantization with Gradient\-Projected Fisher Approximation for Vision Transformers

**Authors:** Jincheol Yang; Jaemin Choi; Nahyun Lim; Yun\-Seong Jeong; Matti Zinke; Hyunwoo Yu; Bongjoon Hyun; Kyomin Sohn; Suk\-Ju Kang

**ID:** 151584\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151584

[Paper](<https://openreview.net/forum?id=ZWDJy4JaBH>) | [PDF](<https://openreview.net/pdf?id=ZWDJy4JaBH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151584>)

_Abstract unavailable from the accessible public sources._

## Improving the Optimization Landscape of Matrix Completion with $\\epsilon$\-close Surrogates

**Authors:** Ziye Ma

**ID:** 151753\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151753

[Paper](<https://openreview.net/forum?id=YJGa7iqmAu>) | [PDF](<https://openreview.net/pdf?id=YJGa7iqmAu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151753>)

_Abstract unavailable from the accessible public sources._

