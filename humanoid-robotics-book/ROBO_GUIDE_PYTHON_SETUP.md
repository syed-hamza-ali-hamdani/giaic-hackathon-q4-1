# RoboGuide AI Python Backend Setup Guide

This document outlines the steps to set up a Python-based AI backend service for the RoboGuide AI widget. This service will be responsible for processing user queries, accessing the Humanoid Robotics Book content, and generating relevant responses using a Retrieval-Augmented Generation (RAG) system.

## 1. Choose a Web Framework (FastAPI or Flask)

You can use either FastAPI (recommended for performance and modern features) or Flask (simpler for smaller projects) to build your API.

### Option A: FastAPI (Recommended)

1.  **Install FastAPI and Uvicorn:**
    ```bash
    pip install fastapi uvicorn "python-multipart"
    ```
2.  **Create `main.py`:**
    ```python
    # main.py
    from fastapi import FastAPI, Request
    from fastapi.responses import HTMLResponse
    from pydantic import BaseModel
    import uvicorn

    # Import your RAG system here
    # from your_rag_module import RoboGuideRAG

    app = FastAPI()

    # Initialize your RAG system (example placeholder)
    # rag_system = RoboGuideRAG(book_content_path="path/to/your/book_content.txt")

    class Query(BaseModel):
        message: str

    @app.post("/ask")
    async def ask_roboguide(query: Query):
        user_message = query.message
        
        # --- AI Logic Placeholder ---
        # Replace this with your actual RAG system call
        # Example:
        # ai_response = rag_system.query(user_message)
        
        # For now, a simple placeholder response
        ai_response = f"Python backend received: '{user_message}'.\n" \
                      f"Integrate your RAG system here to process this query against the book content."
        # --- End AI Logic Placeholder ---

        return {"answer": ai_response}

    if __name__ == "__main__":
        uvicorn.run(app, host="0.0.0.0", port=8000)
    ```

3.  **Run the FastAPI app:**
    ```bash
    uvicorn main:app --reload
    ```
    The API will be available at `http://127.0.0.1:8000`. The `/ask` endpoint will handle POST requests.

### Option B: Flask

1.  **Install Flask:**
    ```bash
    pip install Flask
    ```
2.  **Create `app.py`:**
    ```python
    # app.py
    from flask import Flask, request, jsonify
    
    app = Flask(__name__)

    # Import your RAG system here
    # from your_rag_module import RoboGuideRAG

    # Initialize your RAG system (example placeholder)
    # rag_system = RoboGuideRAG(book_content_path="path/to/your/book_content.txt")

    @app.route('/ask', methods=['POST'])
    def ask_roboguide():
        user_message = request.json.get('message')
        
        # --- AI Logic Placeholder ---
        # Replace this with your actual RAG system call
        # Example:
        # ai_response = rag_system.query(user_message)
        
        # For now, a simple placeholder response
        ai_response = f"Python backend received: '{user_message}'.\n" \
                      f"Integrate your RAG system here to process this query against the book content."
        # --- End AI Logic Placeholder ---

        return jsonify({"answer": ai_response})

    if __name__ == '__main__':
        app.run(debug=True, host='0.0.0.0', port=8000)
    ```
3.  **Run the Flask app:**
    ```bash
    flask run
    ```
    The API will be available at `http://127.0.0.1:8000`. The `/ask` endpoint will handle POST requests.

## 2. Implement Cross-Origin Resource Sharing (CORS)

Since your Docusaurus frontend will likely be running on a different port (e.g., 3000) than your Python backend (e.g., 8000), you'll need to enable CORS to allow the frontend to make requests to your backend.

### For FastAPI:

Install `fastapi-cors`:
```bash
pip install fastapi-cors
```
Modify `main.py`:
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# ... other imports ...

app = FastAPI()

origins = [
    "http://localhost:3000",  # Replace with your Docusaurus development server URL
    "http://127.0.0.1:3000",
    # Add your production Docusaurus URL here when deployed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ... rest of your FastAPI code ...
```

### For Flask:

Install `Flask-CORS`:
```bash
pip install Flask-CORS
```
Modify `app.py`:
```python
from flask import Flask, request, jsonify
from flask_cors import CORS # Import CORS
    
app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Optionally, configure specific origins:
# CORS(app, resources={r"/ask/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:3000"]}})

# ... rest of your Flask code ...
```

## 3. Develop the AI Logic (Retrieval-Augmented Generation - RAG)

This is the core of your RoboGuide AI. You'll need to:

1.  **Load Book Content:**
    *   Read the content of your "Humanoid Robotics Book" (e.g., Markdown files, PDF, plain text).
    *   Consider converting all content into a uniform format.

2.  **Create a Knowledge Base/Vector Database:**
    *   **Chunking:** Break down the book content into smaller, manageable chunks.
    *   **Embeddings:** Generate vector embeddings for each chunk using a pre-trained language model (e.g., from `sentence-transformers`, OpenAI, Google's `text-embedding-gecko`).
    *   **Vector Database:** Store these embeddings in a vector database (e.g., FAISS, ChromaDB, Pinecone, Weaviate) for efficient similarity search.

3.  **Implement Retrieval:**
    *   When a user query comes in, generate an embedding for the query.
    *   Perform a similarity search in your vector database to retrieve the most relevant chunks of the book content.

4.  **Implement Generation:**
    *   Feed the retrieved relevant chunks and the user's query to a Large Language Model (LLM) (e.g., OpenAI GPT series, Google Gemini, Hugging Face models).
    *   Instruct the LLM to generate a coherent and informative answer based *only* on the provided context from the book. This prevents the LLM from hallucinating or providing information not present in your book.

### Example RAG System Structure (Conceptual):

```python
# your_rag_module.py (Conceptual)
from transformers import pipeline
from sentence_transformers import SentenceTransformer
# import your_vector_db_client # e.g., faiss, chromadb

class RoboGuideRAG:
    def __init__(self, book_content_path):
        self.retriever = SentenceTransformer('all-MiniLM-L6-v2') # Or other embedding model
        self.llm = pipeline("text-generation", model="distilgpt2") # Placeholder LLM
        self.vector_db = self._initialize_vector_db(book_content_path)

    def _initialize_vector_db(self, book_content_path):
        # 1. Load and chunk book content
        # 2. Generate embeddings for chunks
        # 3. Store in vector database (e.g., FAISS index)
        print(f"Loading and processing book content from {book_content_path}...")
        # ... actual implementation ...
        return "initialized_vector_db_instance" # Placeholder

    def query(self, user_query: str):
        # 1. Generate query embedding
        query_embedding = self.retriever.encode(user_query)

        # 2. Retrieve relevant chunks from vector_db
        relevant_chunks = self._retrieve_chunks(query_embedding)

        # 3. Construct prompt for LLM
        context = "\n".join(relevant_chunks)
        prompt = f"Based on the following context from the Humanoid Robotics Book:\n\n{context}\n\nAnswer the following question: {user_query}\n\nAnswer:"

        # 4. Generate response using LLM
        response = self.llm(prompt, max_new_tokens=200, num_return_sequences=1)
        return response[0]['generated_text']

    def _retrieve_chunks(self, query_embedding):
        # Perform similarity search against self.vector_db
        # Return top N most similar chunks
        return ["Chunk 1 about robotics...", "Chunk 2 about humanoids..."] # Placeholder

```

## 4. Update Frontend API Call

Once your Python backend is running and accessible (e.g., at `http://localhost:8000/ask`), update the `RoboGuideWidget/index.js` to make actual API calls:

```javascript
// Inside RoboGuideWidget/index.js's handleSendMessage function

// ... (remove the simulated API call delay) ...

try {
  const apiResponse = await fetch('http://localhost:8000/ask', { // Adjust URL if needed
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: input }),
  });

  const data = await apiResponse.json();

  if (apiResponse.ok) {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'ai', text: data.answer },
    ]);
  } else {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'ai', text: data.detail || 'Error: Could not get a response from the AI backend.' },
    ]);
  }
} catch (error) {
  console.error('RoboGuide AI Backend error:', error);
  setMessages((prevMessages) => [
    ...prevMessages,
    { sender: 'ai', text: 'Error: Failed to connect to the RoboGuide AI backend. Please ensure it is running at http://localhost:8000.' },
  ]);
}
```

This completes the setup for the RoboGuide AI widget and its conceptual Python backend. You now have a working frontend component and clear instructions for building out the intelligent backend.
