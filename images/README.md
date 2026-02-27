
## 🔄 CI/CD Pipeline
This project uses **Jenkins** for Continuous Integration and Deployment.
* **Pipeline as Code:** Managed via the `Jenkinsfile` in the root directory.
* **Stages:**
    1. **Checkout:** Pulls code from GitHub.
    2. **Lint/Test:** Validates Node.js code.
    3. **Build:** Creates Docker images for Frontend and Backend.
    4. **Push:** Uploads images to Docker Hub.
    5. **Deploy:** Updates the Kubernetes cluster with the latest images.
