from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
import json
import pickle

# Expected format
df_format = [
    'homeworld_Alderaan', 'homeworld_Aleen Minor', 'homeworld_Bestine IV',
    'homeworld_Cerea', 'homeworld_Champala', 'homeworld_Chandrila',
    'homeworld_Concord Dawn', 'homeworld_Corellia', 'homeworld_Dagobah',
    'homeworld_Dathomir', 'homeworld_Dorin', 'homeworld_Eriadu',
    'homeworld_Glee Anselm', 'homeworld_Haruun Kal', 'homeworld_Iktotch',
    'homeworld_Iridonia', 'homeworld_Kalee', 'homeworld_Kashyyyk',
    'homeworld_Malastare', 'homeworld_Mirial', 'homeworld_Mon Cala',
    'homeworld_Muunilinst', 'homeworld_Naboo', 'homeworld_Ojom',
    'homeworld_Quermia', 'homeworld_Rodia', 'homeworld_Ryloth',
    'homeworld_Serenno', 'homeworld_Shili', 'homeworld_Skako',
    'homeworld_Socorro', 'homeworld_Stewjon', 'homeworld_Sullust',
    'homeworld_Tatooine', 'homeworld_Tholoth', 'homeworld_Toydaria',
    'homeworld_Trandosha', 'homeworld_Troiken', 'homeworld_Tund',
    'homeworld_Umbara', 'homeworld_Vulpter', 'homeworld_Zolan',
    'unit_type_at-at', 'unit_type_at-st', 'unit_type_resistance_soldier',
    'unit_type_stormtrooper', 'unit_type_tie_fighter',
    'unit_type_tie_silencer', 'unit_type_unknown', 'unit_type_x-wing'
]

def transform_data(data):
    transformed_data = dict()
    homeworld = data["homeworld"]
    unit_type = data["unit_type"]

    for key in df_format:
        if (homeworld in key) or (unit_type in key):
            transformed_data[key] = True
        else:
            transformed_data[key] = False

    return transformed_data


# Load the model from disk
model = None
with open('../trained_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Instantiate Flask application
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return jsonify({})

@app.route('/api/predict', methods=['POST'])
@cross_origin()
def predict():
    # Get the request data
    data = request.get_json(force=True)

    # Transform data into desired format 
    data = transform_data(data)

    # Ensure the data is a list (even if it's just one dictionary)
    if isinstance(data, dict):
        data = [data]

    # Make a prediction
    prediction = model.predict(pd.DataFrame(data))

    if prediction == None:
        return "prediction failed"

    # Return the prediction
    return jsonify(prediction.tolist())

if __name__ == '__main__':
    app.run(port=5000)