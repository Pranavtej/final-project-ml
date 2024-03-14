from flask import Flask,render_template,request
from flask_cors import CORS
# model = pickle.load(open('model.pkl','rb'))
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pickle
from sklearn.model_selection import train_test_split

data = pd.read_csv('./Training.csv')

data.head()

data.isnull().sum()

data.info()

data.describe()

data.shape

data.drop(['Unnamed: 133'] , axis = 1 , inplace = True )

data.prognosis.value_counts()

data.columns

dict1 = {'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,'Peptic ulcer diseae':5,
                         'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,'Migraine':11,'Cervical spondylosis':12,
                         'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,'Hepatitis B':20,
                         'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
                         'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
                         'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,'(vertigo) Paroymsal  Positional Vertigo':36,
                         'Acne':37,'Urinary tract infection':38,'Psoriasis':39,'Impetigo':40}
data.replace({'prognosis':dict1},inplace=True)

X = data.iloc[:,:131].values
Y = data.iloc[:,-1].values
x_train,x_dev,y_train,y_dev = train_test_split(X,Y,test_size = 0.3 , random_state = 42)
model = pickle.load(open('./Multiple_disease_prediction_rf.pkl','rb'))
app = Flask(__name__)

CORS(app , resources={r"/*": {"origins": "*"}})  

columns_dict = {}
columns_list = data.columns.tolist()
for i in range(len(columns_list)):
  columns_dict[columns_list[i]] = i


predict_ans = {}
for i in dict1:
  predict_ans[dict1[i]] = i


def generate_input(selected_options ,columns_dict ):
  print()
  new_input = np.zeros((1,x_train.shape[1]))
  for i in selected_options:
    new_input[0][columns_dict[i]] = 1

  return new_input


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict_desease():
    selected_options = request.get_json(force=True)
    print("Selected Options", selected_options)
    # prediction
    new_input =  generate_input(selected_options["options"] ,columns_dict )

    # prediction
    result = model.predict(new_input)

    return predict_ans[result];

if __name__ == '__main__':
    app.run()