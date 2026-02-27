# 🪙 Coin Flip Application

![Application Preview](images/coin_flip.png)

A full-stack, containerized web application deployed on **Kubernetes**. This project simulates a coin flip game where results are calculated by a backend API and stored in a persistent Redis database.

## 🚀 Project Overview
This project demonstrates a modern **Microservices Architecture**. It focuses on decoupling the frontend, backend, and database layers to ensure scalability and ease of management.

## 🛠️ Tech Stack
* **Frontend:** Node.js / HTML / CSS
* **Backend:** Node.js / Express (Logic & API)
* **Database:** Redis (Persistent tally storage)
* **Orchestration:** Kubernetes (K8s)
* **CI/CD:** Jenkins
* **Containerization:** Docker



## 🏗️ Architecture & Implementation
* **Dockerized Services:** Dedicated Dockerfiles for consistent environments.
* **Kubernetes Deployments:** Manages pod replicas and self-healing.
* **Service Discovery:** * **ClusterIP:** Secure internal communication.
    * **NodePort:** External access on port 30007.

## 🔄 CI/CD Pipeline
The project implements a **Jenkins Declarative Pipeline** to automate the deployment lifecycle:
1. **Source:** Detects changes in GitHub.
2. **Build:** Packages Node.js services into Docker images.
3. **Push:** Images are versioned and pushed to Docker Hub.
4. **Deploy:** K8s manifests are applied to update the cluster automatically.



## 🔧 How to Run
1. **Apply Manifests:** `kubectl apply -f k8s-spec/`
2. **Access App:** Open `http://<Node-IP>:30007`

## 💡 Key Challenges Solved
* **Service Connectivity:** Used K8s Services for dynamic internal DNS discovery.
* **Dependency Resolution:** Optimized Docker builds to ensure all Node.js modules are correctly installed.
