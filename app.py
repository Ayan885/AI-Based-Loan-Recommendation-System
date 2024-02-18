from flask import Flask,render_template,request
import pickle
import numpy as np

app = Flask(__name__)

model=pickle.load(open('model.pkl','rb'))
@app.route("/")
def hello_world():
    return render_template('result.html')


app.route('/predict', methods = ['POST', 'GET'])
def predict():
    init_features = [float(x) for x in request.form.values()]
    final_features = [np.array(init_features)]
    prediction = model.predict(final_features) # Make a prediction

    return render_template('index.html', prediction_text='Predicted Species: {}'.format(prediction)) # Render the predicted result


if __name__ == "__main__":
    app.run(debug=True)
