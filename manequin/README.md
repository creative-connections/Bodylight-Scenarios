# Manequin demo

This folder shows a demo with HW manequine obtaining and sending data

## Prerequisites

Either connect manequin in the local network, or launch the bodylightrestapi.py (e.g. use startflask.sh script) providing test api to manequin.

## Demo section

This section is visualised only if the bodylight.js web components are registered (see https://bodylight.physiome.cz/Bodylight-docs/reference/).

<bdl-remote-value manequinurl="http://localhost:5000/" fetchinterval="500" id="id4"></bdl-remote-value>
<bdl-chartjs-time id="id11" width="400" height="300" fromid="id4" refindex="7" refvalue="1" ></bdl-chartjs-time>
<bdl-chartjs-time id="id11" width="400" height="300" fromid="id4" refindex="0" refvalue="6" ></bdl-chartjs-time>
