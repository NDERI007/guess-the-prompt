# feedback_utils.py (or inside your Flask app file)
from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer("all-MiniLM-L6-v2")
embedding_cache = {}

def get_embedding(text: str):
    if text in embedding_cache:
        return embedding_cache[text]
    embedding = model.encode(text, convert_to_tensor=True)
    embedding_cache[text] = embedding
    return embedding

def get_similarity_feedback(guess: str, target: str) -> str:
    guess_embedding = model.encode(guess, convert_to_tensor=True)
    target_embedding = get_embedding(target)

    similarity_score = util.cos_sim(guess_embedding, target_embedding).item()

    if similarity_score > 0.7:
        return "🔥 Hot!"
    elif similarity_score > 0.4:
        return "🌤️ Warm"
    else:
        return "❄️ Cold!"