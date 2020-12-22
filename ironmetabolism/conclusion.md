# Introduction 
you may use markdown to tag **bold** or __italic__ 
## Sections
sections can be added using one or multipla hash symbols `#`. 
## Mathematics
katex is supported thus writing LATEX like syntax between `$` symbol will render the math.
E.g. Dirichlet integral  $\int_{0}^\infty\frac{\sin(x)}{x}dx = \frac{\pi}{2}$
## Bodylight components
Bodylight web components can be rendered directly, use full xml-tags with closing tags not self-closing.
<bdl-range min="10" max="20" step="2" default="15"></bdl-range>
## Animation
Adobe Animate can be exported into CreateJS components, these can be imported.
## Animated GIF
Animated GIF can be imported, component `bdl-animate-gif` can handle animation and controls animation per each frame.