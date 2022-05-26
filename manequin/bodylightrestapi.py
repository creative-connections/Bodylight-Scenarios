from flask import Flask, jsonify, request, make_response
#from flask import response

# default values of parameters
muscle_pressure = 100
rate = 17
blend_duration = 50 #%
timestep = 1 #s
resistance = 5
compliance = 7
peep = 3
canula_connected = True
o2_connected = True
ecmo_connected = True
oxi_connected = True
bubble_connected = True
rpm = 800
dot_v = 0
p_art = 0
p_ven = 0
temp = 37
tidal_volume = 5000
run = True


# default value of some variable - readonly
import time
import math
volume = 3 #between 1.5 and 4.5
def test_generate_volume_value():
    global volume
    volume = peep + (math.sin(time.time())) * 1.5 # some test volume values between 1.5 and 4.5
    return volume

app = Flask(__name__)

# this function adds headers need to be present for CORS request/response exchange
def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

# this function generates default response and optionally updates the value sent by post request
# for GET request it will return the value - in JSONify from
# for POST request it will parse the body of post in json (expected to be json form) and returns expected response - usually the same body
# or what was updated
def default_response(value):
    if request.method == 'OPTIONS':
        #print('option')
        return value, _build_cors_preflight_response()
    elif request.method == 'GET':
        #print('get')
        response = jsonify(value)
        response.headers.add('Access-Control-Allow-Origin','*')
        return value, response
    elif request.method == 'POST':
        #print('post 3')
        #print('request',request.json)
        value = request.json #['value']
        #print('value 2' ,value)
        response = jsonify(value)
        response.headers.add('Access-Control-Allow-Origin','*')
        return value, response

# specific method to return current volume
@app.route('/volume', methods=['GET','OPTIONS']) #POST is not allowed
def volumeget():
    global volume
    #volume =
    test_generate_volume_value()
    volume, myresponse = default_response(volume)
    return myresponse

# specific method to return musclepressure, POST request will also update the value
@app.route('/lungsim/muscle_pressure', methods=['GET','OPTIONS','POST'])
def musclepressureget():
    global muscle_pressure
    muscle_pressure, myresponse = default_response(muscle_pressure)
    return myresponse

@app.route('/lungsim/rate', methods=['GET','OPTIONS','POST'])
def rateget():
    global rate
    rate, myresponse = default_response(rate)
    return myresponse

@app.route('/lungsim/blend_duration', methods=['GET','OPTIONS','POST'])
def blenddurationget():
    global blend_duration
    blend_duration, myresponse = default_response(blend_duration)
    return myresponse

@app.route('/lungsim/resistance', methods=['GET','OPTIONS','POST'])
def resistanceget():
    global resistance
    resistance, myresponse = default_response(resistance)
    return myresponse

@app.route('/lungsim/compliance', methods=['GET','OPTIONS','POST'])
def complianceget():
    global compliance
    compliance, myresponse = default_response(compliance)
    return myresponse
@app.route('/lungsim/peep', methods=['GET','OPTIONS','POST'])
def peepget():
    global peep
    peep, myresponse = default_response(peep)
    return myresponse

@app.route('/cardiohelp/p_art', methods=['GET','OPTIONS','POST'])
def partget():
    global p_art
    p_art, myresponse = default_response(p_art)
    return myresponse
@app.route('/cardiohelp/p_ven', methods=['GET','OPTIONS','POST'])
def pvenget():
    global p_ven
    p_ven, myresponse = default_response(p_ven)
    return myresponse
@app.route('/cardiohelp/temp', methods=['GET','OPTIONS','POST'])
def tempget():
    global temp
    temp, myresponse = default_response(temp)
    return myresponse
#general call to get/update all values in one call
@app.route('/manequin', methods=['GET','OPTIONS'])
def manequin():
    global canula_connected
    global o2_connected
    global ecmo_connected
    myvalue = {
               "canula_connected": canula_connected,
               "o2_connected":o2_connected,
               "ecmo_connected":ecmo_connected,
               }
    myvalue, myresponse = default_response(myvalue)

    # POST will change myvalue - it needs to be translated back to individual values
    # musclepressure = myvalue['musclepressure']
    # ...

    return myresponse
    # return 'Available endpoints /musclepressure /rate /blendduration /timestep /resistance /compliance /peep'
    #a = ['radek 1','radek 2'];
    #return '<html><body><pre>'+a.join('\n')+'</pre></body></html>'

#general call to get/update all values in one call
@app.route('/cardiohelp', methods=['GET','OPTIONS'])
def cardiohelp():
    global oxi_connected
    global bubble_connected
    global rpm
    global dot_v
    global p_art
    global p_ven
    global temp
    myvalue = {
               "oxi_connected":oxi_connected,
               "bubble_connected":bubble_connected,
                   "rpm": rpm,
                   "dot_v": dot_v,
                   "p_art": p_art,
                   "p_ven": p_ven,
                   "temp": temp
               }
    myvalue, myresponse = default_response(myvalue)

    # POST will change myvalue - it needs to be translated back to individual values
    # musclepressure = myvalue['musclepressure']
    # ...
    return myresponse
#general call to get/update all values in one call
@app.route('/lungsim', methods=['GET','OPTIONS','POST'])
def lungsim():
    global tidal_volume
    global run
    global muscle_pressure
    global rate
    global resistance
    global compliance
    global peep
    global blend_duration
    myvalue = {
               "tidal_volume":test_generate_volume_value(),
               "run":run,
               "muscle_pressure": muscle_pressure,
               "rate":rate,
               "resistance":resistance,
               "compliance":compliance,
               "peep":peep,
                "blend_duration":blend_duration
               }
    myvalue, myresponse = default_response(myvalue)

    # POST will change myvalue - it needs to be translated back to individual values
    # musclepressure = myvalue['musclepressure']
    # ...
    if request.method == 'POST':
        musclepressure = myvalue['musclepressure']
        rate = myvalue['rate']
        blendduration = myvalue['blendduration']
        resistance = myvalue['resistance']
        compliance = myvalue['compliance']
        peep = myvalue['peep']
        run= myvalue['run']
    return myresponse

@app.route('/',methods=['GET'])
def index():
    return """<html><body><pre>This is only MOCKUP of REST API:
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
               /blend_duration [int] [GET, OPTIONS, POST] (>0) number of breaths for gradual acceptance of new parameter values</pre></body></html"""
