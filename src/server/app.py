from flask import Flask,render_template,request
import pickle
import numpy as np

# model = pickle.load(open('model.pkl','rb'))
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict_desease():
    selected_options =  request.body.options

    # prediction
    result = selected_options
    
    return result;


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)