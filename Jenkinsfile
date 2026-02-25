pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = "vdevopsvinod"
        REPO_URL = "https://github.com/vDevopsvinod/coinflip.git"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', 
                    credentialsId: 'git', 
                    url: "${REPO_URL}"
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                script {
                    // This block sets up the Docker login using your 'docker' credentials
                    // Empty URL '' defaults to Docker Hub
                    withDockerRegistry([credentialsId: 'docker', url: '', toolName: 'docker']) {
                        
                        // Build and Push Backend
                        sh "docker build -t ${DOCKER_HUB_USER}/coin-backend:${BUILD_NUMBER} ./backend"
                        sh "docker push ${DOCKER_HUB_USER}/coin-backend:${BUILD_NUMBER}"

                        // Build and Push Frontend
                        sh "docker build -t ${DOCKER_HUB_USER}/coin-frontend:${BUILD_NUMBER} ./frontend"
                        sh "docker push ${DOCKER_HUB_USER}/coin-frontend:${BUILD_NUMBER}"
                    }
                }
            }
        }

        stage('Update Helm Manifests') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'git', passwordVariable: 'GIT_PASS', usernameVariable: 'GIT_USER')]) {
                    sh """
                        sed -i "s/tag: .*/tag: ${BUILD_NUMBER}/g" k8s-spec/values.yaml
                        
                        git config user.email "jenkins@devops.com"
                        git config user.name "Jenkins Automation"
                        
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
            echo "Successfully built #${BUILD_NUMBER}. ArgoCD will now sync the new version."
        }
        failure {
            echo "Build failed. Check Docker login or Git permissions."
        }
    }
}
