import os
import json
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Gemini API Imports
from google import generativeai as genai # Use generativeai as genai to match previous usage
from google.generativeai.types import GenerationConfig # For system_instruction config
from google.api_core.exceptions import GoogleAPIError # More specific error handling

# 1. Load Environment Variables from .env
load_dotenv()

# --- Configuration ---
# Your Docusaurus frontend runs on http://localhost:3000
origins = ["http://localhost:3000", "http://127.0.0.1:3000"]

# Initialize FastAPI App
app = FastAPI(
    title="RoboGuide AI Backend Service",
    description="Backend service for the Humanoid Robotics Book's RoboGuide AI widget.",
    version="1.0.0",
)

# Add CORS Middleware to allow frontend to communicate
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models for Data Validation ---
class QueryInput(BaseModel):
    query: str

class ResponseOutput(BaseModel):
    response: str

# --- Gemini Client Initialization ---
gemini_model = None
try:
    API_KEY = os.getenv("GEMINI_API_KEY")
    if not API_KEY:
        raise ValueError("GEMINI_API_KEY not found in environment variables. Please check your .env file.")
    
    genai.configure(api_key=API_KEY)
    gemini_model = genai.GenerativeModel('gemini-2.5-flash')
    
except ValueError as e:
    print(f"CRITICAL ERROR: {e}")
    gemini_model = None
except Exception as e:
    print(f"Error initializing Gemini client: {e}")
    gemini_model = None


# --- Core AI Logic (The RoboGuide Brain) ---

SYSTEM_INSTRUCTION = (
    "You are RoboGuide AI, the authoritative expert assistant for the 'Humanoid Robotics Book' written by Syed Hamza Ali Hamdani. "
    "Your core function is to answer all user questions based on the book's primary topics: Kinematics, Full-Stack Robotics, Agentic AI, and mechanical integration. "
    "Respond concisely, technically accurately, and always maintain the persona of an expert guide from the book. "
    "If a question is outside the scope of the book (i.e., not related to robotics, AI, or coding), politely state that your expertise is limited to the book's content."
)

@app.post("/api/query", response_model=ResponseOutput)
async def handle_query(input: QueryInput):
    if not gemini_model:
        raise HTTPException(
            status_code=503,
            detail="AI Backend is uninitialized. GEMINI_API_KEY is likely missing or invalid."
        )

    try:
        # Generate the response using the strong system instruction
        # Note: system_instruction is typically passed as a parameter to the model call or a chat session.
        # For a single model.generate_content call, it's often prepended to the prompt or passed via a config dict if supported.
        # The genai.GenerativeModel.generate_content method directly accepts system_instruction in its config.
        response = await gemini_model.generate_content(
            input.query,
            generation_config=GenerationConfig(
                system_instruction=SYSTEM_INSTRUCTION
            )
        )

        # Return the generated text
        return {"response": response.text}

    except GoogleAPIError as e:
        print(f"Gemini API Error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Gemini API encountered an error: {e}"
        )
    except Exception as e:
        print(f"Internal Server Error: {e}")
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred in the backend."
        )

# Simple endpoint for health check
@app.get("/api/health")
async def health_check():
    return {"status": "Backend Online", "gemini_model_initialized": bool(gemini_model)}