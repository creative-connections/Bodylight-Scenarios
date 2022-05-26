# Manequin demo

This folder shows a demo with HW manequine obtaining and sending data

## Prerequisites

Either connect manequin in the local network, or launch the bodylightrestapi.py (e.g. use startflask.sh script) providing test api to manequin.

## Demo section

This section is visualised only if the bodylight.js web components are registered (e.g. via index.html) (see https://bodylight.physiome.cz/Bodylight-docs/reference/).

<bdl-remote-value manequinurl="http://localhost:5000/" fetchinterval="500" id="id4"></bdl-remote-value>
<bdl-chartjs-time id="id11" width="400" height="300" fromid="id4" refindex="7" refvalue="1" ></bdl-chartjs-time>
<bdl-chartjs-time id="id11" width="400" height="300" fromid="id4" refindex="0" refvalue="6" ></bdl-chartjs-time>

API:
```
/manequin
   /canula_connected [bool] [GET, OPTIONS]
   /o2_connected [bool] [GET, OPTIONS]
   /ecmo_connected [bool] [GET, OPTIONS]
/cardiohelp
   /oxi_connected [bool] [GET, OPTIONS] oxigenator with pump are connected
   /bubble_connected [bool] [GET, OPTIONS] bubble sensor with flowmeter is connected and clipped on hose
   /rpm [int] [GET, OPTIONS] pump revolutions per minute
   /dot_v [double] [GET, OPTIONS, POST] blood flow through pump to show on display
   /p_art [double] [GET, OPTIONS, POST] pump outlet blood pressure in mmHg to show on display
   /p_ven [double] [GET, OPTIONS, POST] pump inlet blood pressure in mmHg to show on display
   /temp [double] [GET, OPTIONS, POST] blood temperature in deg C to show on display
/lungsim
   /tidal_volume [double] [GET, OPTIONS] tidal volume of the last breath in ml
   /run [bool] [GET, OPTIONS, POST] initiates lung drive and starts the simulation
   /muscle_pressure [int] [GET, OPTIONS, POST] (0-100) breath effort in cmH2O
   /rate [int] [GET, OPTIONS, POST] breath (0-100) effort in breaths per minute
   /resistance [int] [GET, OPTIONS, POST] (8-150) lung model parameter in cmH2O/(l/s)
   /compliance [int] [GET, OPTIONS, POST] (0.5-250) lung model parameter in ml/cmH2O
   /peep [int] [GET, OPTIONS, POST] (4-8) lung model parameter in cmH2O
   /blend_duration [int] [GET, OPTIONS, POST] (>0) number of breaths for gradual acceptance of new parameter values
```
