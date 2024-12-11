pipeline {
    agent any
    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/FabricioZavala/integracio_examen.git'
            }
        }
        stage('Construir imagen Docker') {
            steps {
                sh 'docker build -t proyecto-integrantes:latest .'
            }
        }
        stage('Desplegar contenedor') {
            steps {
                sh '''
                    docker stop proyecto-integrantes || true
                    docker rm proyecto-integrantes || true
                    docker run -d --name proyecto-integrantes -p 3000:3000 proyecto-integrantes:latest
                '''
            }
        }
    }
}
