---
title: "EzClip"
description: "An AI video generation platform that turns scripts into narrated videos through automated story-to-scene generation."
repository: "https://github.com/legeRise/ezclip-backend"
url: "https://play.google.com/store/apps/details?id=com.ezclip.app"
featured: true
order: 9
---

EzClip is an AI-powered video generation platform I built around an automated story-to-scene workflow. A script is analyzed into scenes, narration is generated automatically, images are generated for the scenes, and the assets are combined into a complete narrated video.

The backend is open source. The Android client is available on Google Play, while the web frontend and a more polished mobile experience remain on my radar. The service is not continuously online because running AI generation and the supporting infrastructure is expensive; I bring it up when I am actively working on it.

## What it does

- Turns a script into a structured sequence of scenes
- Generates narration automatically
- Generates scene imagery
- Combines the generated assets into a fully narrated video
- Processes generation work asynchronously and tracks progress

## Links

- [Open-source backend](https://github.com/legeRise/ezclip-backend)
- [Android app on Google Play](https://play.google.com/store/apps/details?id=com.ezclip.app)

## Stack

Django, Django REST Framework, Celery, Redis, OpenAI, Runware, MoviePy, SSE, and Cloudflare R2.
