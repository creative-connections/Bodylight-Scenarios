# Bodylight-Scenarios
Scenarios using Bodylight platform.

# Installation
This repository contains text in markdown, additionaly contains web-based simulators using
Bodylight.js-Components. To render it follow https://github.com/creative-connections/Bodylight.js-Components

To install full Bodylight toolchain including this Scenarios, you may use scripts to create virtual machine at
https://github.com/creative-connections/Bodylight-VirtualMachine

# Convention

(1) every directory should contain at least 
  * `index.md` a default MD text
  * `summary.md` Summary - List of all MD documents as links, this is rendered in sidebar
  
(2) For language specific documents
  * `index.[lang].md` default MD text in language variant `[lang]`
  * `summary.[lang].md` Summary in language variant `[lang]`
  * replace `[lang]` by Internet language tags, as defined in RFC 3066. E.g. `en` for English, `cs` for Czech, `sk` for Slovak ...
    

(3) All internal links should be relative in form `#[directory]/[document].md` or `#index=[directory]/[document].md`.
E.g. for hemodynamics/hemo1.cs.md `[Hemo 1](#index=hemodynamics/hemo1.cs.md)`   

(4) name file and directories without spaces and special characters

# Bodylight Components

Markdown-it is used to render markdown with following plugins enabled: 
* **highlight.js** to highlight source code specifying language, e.g. Python 
 ```markdown
    ```javascript
     // some javascript code
    ``` 
```

```markdown
    ```python
    //some python code
    ```
```
* **markdown-it-katex** to render math formula between `$` or multiline `$$` using KaTEX and HTML.

Example:
```markdown
  Pythagoran theorem is $a^2 + b^2 = c^2$.
  
  
```
is rendered as:

Inline pythagoran theorem is $a^2 + b^2 = c^2$.
Pythagoran theorem is 
$$a^2 + b^2 = c^2$$

Use bodylight components with prefix `<bdl-`:
These webcomponents are available:

* `<bdl-range></bdl-range>` Renders a range input which may trigger a value
* `<bdl-value></bdl-value>` Renders value of attribute `value` into DOM, it can be bind as output from FMI.
* `<bdl-bind2previous></bdl-bind2previous>` Binds values of 2 components 
* `<bdl-fmi></bdl-fmi>` Creates control buttons in order to control simulation of the model
* `<bdl-receptacle></bdl-receptacle>` Renders a receptacle graphics which is full or empty based on the values provided
* `<bdl-dygraph></bdl-dygraph>` Creates a graph controlled by Dygraph library [^2]
* `<bdl-chartjs></bdl-chartjs>` Creates a chartjs element controlled by Chartjs library.

For further doc about components, see 
https://bodylight.physiome.cz/Bodylight.js-Components/#index=doc/usersguide.md
 
