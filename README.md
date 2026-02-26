# 🚀 Nest AI Starter Template

A minimal, production-ready NestJS starter template for building AI-powered applications using Google Gemini.

This template focuses on:
- Clean modular architecture
- AI text & audio generation
- API key rotation
- Retry & throttling control
- Multi-speaker TTS support

It is designed to be scalable, resilient, and easy to extend for real-world AI systems.

---

## 🏗 Modules Overview

| Module | Responsibility |
|--------|---------------|
| **Intel** | Handles all AI interactions (text generation & TTS audio generation) |
| **Common** | Provides retry logic, throttling, and shared utility helpers |
| **Utils** | Manages API key rotation and voice selection |
| **Wav** | Saves generated PCM audio into `.wav` files |
| **Interfaces** | Defines strong TypeScript types for AI input/output |
| **Statics** | Stores predefined voice configurations |

---

## 🎯 Purpose

This starter template gives you a solid AI-ready NestJS foundation so you can focus on building features instead of infrastructure.