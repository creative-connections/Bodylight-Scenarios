from flask import Flask, jsonify, request, make_response
#from flask import response

# default values of parameters

breath_rate = 12
tidal_volume = 500
i_ratio = 1
e_ratio = 2
pause_value = 0
o2_fraction = 21
patient_state = 1
volume = 0.0023
sO2 = 0.95
count = 0

#volume = 2500
#sO2 = 0.95



# default value of some variable - readonly
import time
import math

app = Flask(__name__)

# this function adds headers need to be present for CORS request/response exchange
def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "content-type")
    response.headers.add('Access-Control-Allow-Methods', "POST, PUT, OPTIONS")
    response.headers.add('Access-Control-Max-Age', "600")
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

# specific method to return musclepressure, POST request will also update the value
@app.route('/vrapi/volume', methods=['GET','OPTIONS','POST'])
def volumeget():
    global volume
    volume, myresponse = default_response(volume)
    return myresponse

@app.route('/vrapi/sO2', methods=['GET','OPTIONS','POST'])
def sO2get():
    global sO2
    sO2, myresponse = default_response(sO2)
    return myresponse

#general call to get/update all values in one call
@app.route('/vrapi', methods=['GET','OPTIONS','POST'])
def manequin():
    global volume
    global sO2
    global breath_rate
    global tidal_volume
    global i_ratio
    global e_ratio
    global pause_value
    global o2_fraction
    global patient_state
    global count
    count = count + 1 
    if (count == 10):
        patient_state = 1 
    if (count == 20):
        patient_state = 2 
    if (count == 30):
        patient_state = 3
    if (count == 40):
        patient_state = 0


    myvalue = { 
    "frequency" : breath_rate, 
    "Vt": tidal_volume, 
    "Iratio": i_ratio, 
    "Eratio": e_ratio, 
    "pause": pause_value, 
    "o2_fraction": o2_fraction, 
    "patient_state": patient_state,
    "volume":volume,
    "sO2":sO2 }
    myvalue, myresponse = default_response(myvalue)

    # POST will change myvalue - it needs to be translated back to individual values
    # musclepressure = myvalue['musclepressure']
    # ...
    if request.method == 'POST':
        breath_rate = myvalue['frequency']
        tidal_volume = myvalue['Vt']
        i_ratio = myvalue['Iratio']
        e_ratio = myvalue['Eratio']
        pause_value = myvalue['pause']
        patient_state = myvalue['patient_state']
        o2_fraction = myvalue['o2_fraction']
        volume = myvalue['volume']
        sO2 = myvalue['sO2']

    return myresponse
    # return 'Available endpoints /musclepressure /rate /blendduration /timestep /resistance /compliance /peep'
    #a = ['radek 1','radek 2'];
    #return '<html><body><pre>'+a.join('\n')+'</pre></body></html>'

@app.route('/',methods=['GET'])
def index():
    return """<html><body><pre>This is only MOCKUP of REST API:
            /vrapi {frequency,Vt,Iratiom,Eratiompause,o2_fraction,patient_state
               /volume [double] [GET, POST, OPTIONS]
               /sO2 [double] [GET, POST, OPTIONS]</pre></body></html"""
