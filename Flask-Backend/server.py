from email.headerregistry import ContentTypeHeader
# from urllib import request
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests;

from webs import webs

# app = Flask(__name__)
# CORS(app)

# url = "https://fraudfreeze-phishing-check.p.rapidapi.com/"

# headers = {
# 	"url": "",
# 	"X-RapidAPI-Key": "e68c4670ddmshc17375931006d9cp124b02jsn0866f15f9fc8",
# 	"X-RapidAPI-Host": "fraudfreeze-phishing-check.p.rapidapi.com"
# }

# return response = requests.request(url, headers=headers)


@app.route('/',methods=['GET', 'POST']) 
def getURL():
      
      print(response.json())


# @app.route('/')
# def index():
#     return 'Hello'
# Random API names route
# @app.route("/names", methods=['GET'])
# def names():
#         app.logger.info('sending names correctly')
#         return {"names": ["NAME1", "NAME2","NAME3","NAME4"]}


# @app.route('/webs') #All URLS of API
# def getURLs():
      # return jsonify(webs) 
# other method to put url inside urls: {"urls": urls, "data"}

# @app.route('/webs',methods=['GET', 'POST']) #specifying only one; string type in order to compare it to the 2 examples
# def getURL():
#       body = request.json
#       print(body['url'])
#       URLFound = [web for web in webs if web['url'] == body['url'].lower()] #checking all items in the local jsons anc compares it with the json sent
#       print(URLFound)
#       if (len(URLFound) > 0): #  len used to see longitude of list 
#             return ({'Safe site': URLFound[0] }) # 0 for the initial value, if not all would appear
#             # return (<h1> The language value is: {URLFound[0]}  </h1>) 
#       else ()
#       return ({'message': 'This is probably a phishing site'})

# @app.route("/web", methods=['POST'])
# def sendURL():
#         print(request.json)
#         return 'URLFound'



# @app.route("/names", methods=['POST'])
# def addURL():
#         print(request.json)
#         return 'received'


if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)

