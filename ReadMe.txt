Python Venv-Windows:
cd path/to/your/project
python -m venv venv
source venv/bin/activate
Run:
cd path/to/your/project
venv\Scripts\activate
Stop:
deactivate

Python Venv-Linux:
cd /path/to/your/project
python3 -m venv venv
Run:
source venv/bin/activate
Stop:
deactivate
Than copy files in folder of you venv and run app.py

Librarys:
Flask              3.1.0
influxdb-client    1.48.0
requests           2.32.3
selenium           4.27.1

Influx:
bucket = "data"
org = "family"
token = ""
url="http://192.168.1.120:8086" 



OpenWeather:
https://home.openweathermap.org/api_keys
API_KEY = '2ad521340e75e70795e40edd342d8db7'
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
BASE_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast"
CITY = "London"
INTERVAL = 60 


Selnioum:
    URL = "http://192.168.1.180/"  # Replace with the login page URL
    PASSWORD = "helios"            # Replace with your password
    PASSWORD_FIELD_ID = "v00402"   # Replace with the ID/name/class of the password field
    LOGIN_BUTTON_ID = "but0" 

Html:

        <!-- External Stylesheets -->
        <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css'>
        <script src="https://kit.fontawesome.com/818da673e2.js" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/d5fba335cd.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js"></script>
<script src="{{ url_for('static', filename='js/script.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/ag-charts-enterprise@10.3.3/dist/umd/ag-charts-enterprise.js"></script>
