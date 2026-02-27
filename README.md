# 🪙 Coin Flip Application

![Application Preview](images/coin_flip.png)

## 🚀 Project Overview
A full-stack, containerized web application deployed on **Kubernetes**. 

```mermaid
graph TD
    User((User)) -->|Port 30007| NP[NodePort Service]
    NP --> FE[Frontend Pod]
    FE -->|API Call| BE[Backend Pod]
    BE -->|Query/Store| R[(Redis DB)]
    
    subgraph K8s Cluster
    NP
    FE
    BE
    R
    end

    subgraph CI/CD Pipeline
    J[Jenkins] -->|Build & Push| DH[Docker Hub]
    DH -->|Deploy| K8s
    end
```

## 🛠️ Tech Stack
* **Frontend:** Node.js / HTML / CSS
* **Backend:** Node.js / Express
* **Database:** Redis
* **Orchestration:** Kubernetes
* **CI/CD:** Jenkins
