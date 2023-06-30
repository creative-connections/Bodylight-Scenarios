
<bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/cardiohelp" interval="1000" id="cardiohelp" inputs="p_art;p_ven;temp;dot_v"></bdl-remote-value>
<bdl-value fromid="cardiohelp" refindex="1">

<bdl-range id="dot_v" min="0" max="1" default='"index.md"' title="Helper - use for state"></bdl-range>

<bdl-buttonparams title="SA nomogram" ids="dot_v" values='"k1vysetreniastrup.md"'></bdl-buttonparams>
<bdl-buttonparams title="EN nomogram" ids="dot_v" values='"k1vysetreniastrup2.md"'></bdl-buttonparams>