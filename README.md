# school-web-tools

## How to run this project:

Clone repository:
```
git clone https://github.com/kirill-imanuilov/school-web-tools.git
cd ./school-web-tools/
```

Run backend:
```
cd ./server/
mkdir ./data/
python3 -m venv env-school-web-tools
. ./env-school-web-tools/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Run frontend:
```
cd ./client/
npm i
npm start
```
