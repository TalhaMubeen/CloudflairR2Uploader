# Image Uploader to Cloudflare R2

This project provides a simple JavaScript application to upload image files from a local directory to Cloudflare R2 using multi-threading for efficient parallel uploads.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [CORS and Bucket Policy](#cors-and-bucket-policy)
- [Testing](#testing)
- [License](#license)

## Features

- Upload images from a local directory to Cloudflare R2.
- Supports parallel uploads using threads for improved performance.
- Configurable CORS policy for cross-origin resource sharing.

## Prerequisites

- Node.js (v14 or later)
- NPM (Node Package Manager)
- Cloudflare account with R2 setup
- Your R2 bucket created

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/image-uploader.git
   cd image-uploader
