node {
    def app
    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build('armanot/nodejsapp')
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials')
        app.push
    }
}