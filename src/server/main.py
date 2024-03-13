from flask import Flask,render_template,request
import pickle
import numpy as np

model = pickle.load(open('model.pkl','rb'))
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict_placement():
    selected_options =  request.body.options

    # prediction
    result = model.predict(np.array(selected_options).reshape(1,6))
    
    return result;


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)