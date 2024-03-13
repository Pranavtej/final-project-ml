from flask import Flask,render_template,request
import pickle
import numpy as np
from flask_cors import CORS
# model = pickle.load(open('model.pkl','rb'))
app = Flask(__name__)

CORS(app , resources={r"/*": {"origins": "*"}})  
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict_desease():
    selected_options = request.get_json(force=True)

    # prediction
    result = 'SOME Disease'
    
    return result;


if __name__ == '__main__':
    app.run()