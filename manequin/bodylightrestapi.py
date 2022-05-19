from flask import Flask, jsonify, request, make_response
#from flask import response

# default values of parameters
musclepressure = 100
rate = 17
blendduration = 50 #%
timestep = 1 #s
resistance = 5
compliance = 7
peep = 3

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
@app.route('/musclepressure', methods=['GET','OPTIONS','POST'])
def musclepressureget():
    global musclepressure
    musclepressure, myresponse = default_response(musclepressure)
    return myresponse

@app.route('/rate', methods=['GET','OPTIONS','POST'])
def rateget():
    global rate
    rate, myresponse = default_response(rate)
    return myresponse

@app.route('/blendduration', methods=['GET','OPTIONS','POST'])
def blenddurationget():
    global blendduration
    blendduration, myresponse = default_response(blendduration)
    return myresponse

@app.route('/timestep', methods=['GET','OPTIONS','POST'])
def timestepget():
    global timestep
    timestep, myresponse = default_response(timestep)
    return myresponse

@app.route('/resistance', methods=['GET','OPTIONS','POST'])
def resistanceget():
    global resistance
    resistance, myresponse = default_response(resistance)
    return myresponse

@app.route('/compliance', methods=['GET','OPTIONS','POST'])
def complianceget():
    global compliance
    compliance, myresponse = default_response(compliance)
    return myresponse
@app.route('/peep', methods=['GET','OPTIONS','POST'])
def peepget():
    global peep
    peep, myresponse = default_response(peep)
    return myresponse

#general call to get/update all values in one call
@app.route('/', methods=['GET','OPTIONS','POST'])
def index():
    global musclepressure
    global rate
    global blendduration
    global timestep
    global resistance
    global compliance
    global peep
    myvalue = {
               "musclepressure": musclepressure,
               "rate":rate,
               "blendduration":blendduration,
               "timestep":timestep,
               "resistance":resistance,
               "compliance":compliance,
               "peep":peep,
               "volume":test_generate_volume_value()
               }
    myvalue, myresponse = default_response(myvalue)

    # POST will change myvalue - it needs to be translated back to individual values
    # musclepressure = myvalue['musclepressure']
    # ...
    if request.method == 'POST':
        musclepressure = myvalue['musclepressure']
        rate = myvalue['rate']
        blendduration = myvalue['blendduration']
        timestep = myvalue['timestep']
        resistance = myvalue['resistance']
        compliance = myvalue['compliance']
        peep = myvalue['peep']

    # return myresponse
    # return 'Available endpoints /musclepressure /rate /blendduration /timestep /resistance /compliance /peep'
    a = ['radek 1','radek 2'];
    return '<html><body><pre>'+a.join('\n')+'</pre></body></html>'
