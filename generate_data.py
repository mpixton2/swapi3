import csv
import random
from datetime import datetime, timedelta
import json
           
# Generate data for 50 characters
NUM_ROWS = 1000

# Create the CSV file
OUTPUT_FILE = "troop_movements.csv"

# Load home world data from JSON file
with open("home_worlds.json") as json_file:
    home_worlds = json.load(json_file)

# Add weights to particular unit types
# Lower weights are more likely to be rebels
# Higher weights are more likely to be empire
unit_type_weights = {
    "stormtrooper": 0.95,
    "tie_fighter": 0.9, 
    "at-st": 0.9, 
    "x-wing": 0.2, 
    "resistance_soldier": 0.05, 
    "at-at": 0.85, 
    "tie_silencer": 0.99, 
    "unknown": 0.5
}

# Generate data rows
data_rows = []
for i in range(1, NUM_ROWS + 1):
    # Generate unit_type and home world location
    unit_type = random.choice(
        ["stormtrooper", "tie_fighter", "at-st", "x-wing", "resistance_soldier", "at-at", "tie_silencer", "unknown"]
    )

    home_world = random.choice(home_worlds)
    home_world_name = home_world["name"]

    # Generate other features/meta-data
    timestamp = datetime.now() - timedelta(seconds=i)
    unit_id = i
    location_x = random.randint(1, 10) # NOTE: Should location also be impacted?
    location_y = random.randint(1, 10)
    destination_x = random.randint(1, 10)
    destination_y = random.randint(1, 10)

    # Attribute empire or resistance based on unit_type and home world weights
    prob_empire = unit_type_weights[unit_type]
    prob_resistance = 1.0 - prob_empire
    empire_or_resistance = random.choices(["empire", "resistance"], weights=[prob_empire, prob_resistance], k=1)

    # Create the data row
    data_row = [
        timestamp.strftime("%Y-%m-%d %H:%M:%S"),
        unit_id,
        unit_type,
        empire_or_resistance[0],
        location_x,
        location_y,
        destination_x,
        destination_y,
        home_world_name,
    ]
    print(data_row)

    # Add the data row to the list
    data_rows.append(data_row)

# Write the data to the CSV file
with open(OUTPUT_FILE, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(
        ["timestamp", "unit_id", "unit_type", "empire_or_resistance", "location_x", "location_y", "destination_x",
         "destination_y", "homeworld"]
    )
    writer.writerows(data_rows)

print("Data generation complete.")