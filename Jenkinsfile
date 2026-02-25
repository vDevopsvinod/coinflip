pipeline {
    agent any

    environment {
        // Your Docker Hub username
        DOCKER_HUB_USER = "vdevopsvinod"
        // The name of your GitHub repo
        REPO_URL = "https://github.com/vDevopsvinod/coinflip.git"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Pulls the latest code from your main branch
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                script {
                    // Using the 'docker' credentials ID from your screenshot
                    docker.withRegistry('', 'docker') {
                        
                        // Build and Push Backend
                        def backendImg = docker.build("${DOCKER_HUB_USER}/coin-backend:${BUILD_NUMBER}", "./backend")
                        backendImg.push()

                        // Build and Push Frontend
                        def frontendImg = docker.build("${DOCKER_HUB_USER}/coin-frontend:${BUILD_NUMBER}", "./frontend")
                        frontendImg.push()
                    }
                }
            }
        }

        stage('Update Helm Manifests') {
            steps {
                // Using the 'git' credentials ID from your screenshot
                withCredentials([usernamePassword(credentialsId: 'git', passwordVariable: 'GIT_PASS', usernameVariable: 'GIT_USER')]) {
                    sh """
                        # Update the image tags in values.yaml to the current Jenkins Build Number
                        sed -i "s/tag: .*/tag: ${BUILD_NUMBER}/g" k8s-spec/values.yaml
                        
                        # Git configuration
                        git config user.email "jenkins@devops.com"
                        git config user.name "Jenkins Automation"
                        
                        # Commit and Push the change back to GitHub
                        git add k8s-spec/values.yaml
                        git commit -m "Deployment: Update image tag to ${BUILD_NUMBER} [skip ci]"
                        git push https://${GIT_USER}:${GIT_PASS}@github.com/vDevopsvinod/coinflip.git main
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline successful! ArgoCD should now pick up build #${BUILD_NUMBER}."
        }
        failure {
            echo "Pipeline failed. Check the logs for Docker build or Git push errors."
        }
    }
}
