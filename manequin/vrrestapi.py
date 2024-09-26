from flask import Flask, jsonify, request, make_response, render_template
import random
#from flask import response

# default values of parameters

# Variables
variables = {
    'f_breath_rate': 12,
    'Vt_tidal_volume': 500,
    'I_ratio': 1,
    'E_ratio': 3,
    'pause_value': 0,
    'o2_fraction': 21,
    'patient_state': 2,
    'volume': 0.0023,
    'sO2': 0.95
    }

#breath_rate = 12
#tidal_volume = 500
#i_ratio = 1
#e_ratio = 3
#pause_value = 0
#o2_fraction = 21
#patient_state = 2
#volume = 0.0023
#sO2 = 0.95
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
        #print('default request',request.json)
        value = request.json #['value']
        #print('value 2' ,value)
        response = jsonify(value)
        response.headers.add('Access-Control-Allow-Origin','*')
        return value, response

# specific method to return musclepressure, POST request will also update the value
@app.route('/vrapi/volume', methods=['GET','OPTIONS','POST'])
def volumeget():
    global variables
    volume, myresponse = default_response(variables['volume'])    
    return myresponse

@app.route('/vrapi/sO2', methods=['GET','OPTIONS','POST'])
def sO2get():
    global sO2
    sO2, myresponse = default_response(variables['sO2'])
    return myresponse

#general call to get/update all values in one call
@app.route('/vrapi', methods=['GET','OPTIONS','POST'])
def manequin():
    global variables
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

    i_ratio = random.randint(1,3)
    e_ratio = random.randint(2,3)
    myvalue = variables
    #{ 
    #"frequency" : breath_rate, 
    #"Vt": tidal_volume, 
    #"Iratio": i_ratio, 
    #"Eratio": e_ratio, 
    #"pause": pause_value, 
    #"o2_fraction": o2_fraction, 
    #"patient_state": patient_state,
    #"volume":volume,
    #"sO2":sO2 }
    myvalue, myresponse = default_response(myvalue)

    # POST will change myvalue - it needs to be translated back to individual values
    # musclepressure = myvalue['musclepressure']
    # ...
    if request.method == 'POST':
        for key in variables:
            if key in request.form:
                variables[key] = type(variables[key])(request.form[key])

    return myresponse
    # return 'Available endpoints /musclepressure /rate /blendduration /timestep /resistance /compliance /peep'
    #a = ['radek 1','radek 2'];
    #return '<html><body><pre>'+a.join('\n')+'</pre></body></html>'

@app.route('/',methods=['GET','POST'])
def index():
    if request.method == 'POST':
        for key in variables:
            if key in request.form:
                variables[key] = type(variables[key])(request.form[key])
    return render_template('index.html', variables=variables)
    """<html><body><pre>This is only MOCKUP of REST API:
            /vrapi {frequency,Vt,Iratiom,Eratiompause,o2_fraction,patient_state
               /volume [double] [GET, POST, OPTIONS]
               /sO2 [double] [GET, POST, OPTIONS]</pre>
<h1>Update Variables</h1>
    <form method="POST">
        {% for key, value in variables.items() %}
        <label>{{ key }}:</label>
        <input type="text" name="{{ key }}" value="{{ value }}"><br><br>
        {% endfor %}
        <input type="submit" value="Update">
    </form>
</body></html>"""
