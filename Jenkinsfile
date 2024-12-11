pipeline {
    agent any
    triggers {
        pollSCM('* * * * *') 
    }
    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/FabricioZavala/integracio_examen.git'
            }
        }
        stage('Construir imagen Docker') {
            steps {
                script {
                    docker.build("proyecto-integrantes:latest")
                }
            }
        }
        stage('Desplegar contenedor') {
            steps {
                script {
                    sh 'docker stop proyecto-integrantes || true'
                    sh 'docker rm proyecto-integrantes || true'
                    
                    sh 'docker run -d --name proyecto-integrantes -p 3000:3000 proyecto-integrantes:latest'
                }
            }
        }
    }
}
