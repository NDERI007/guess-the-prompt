from flask import Flask, request, jsonify
from feedBack_utils import get_similarity_feedback
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/guess", methods=["POST"])
def handle_guess():
    data = request.json
    guess = data.get("guess")
    target = data.get("target")

    if not guess or not target:
        return {"error": "Missing guess or target"}, 400

    feedback = get_similarity_feedback(guess, target)
    return jsonify({"feedback": feedback})
