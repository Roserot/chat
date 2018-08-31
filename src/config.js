export default class Config {
    static ChatCredentials() {
        return {
            instanceLocator: 'v1:us1:08332574-79ce-4d95-a0a1-a0e916758805',
            secretKey: '0bd859f0-e433-49e2-944b-fbc855e23b4f:sn7mjbD1IIOqsr/Gn+08easWtRQ+wzNDT5VV6yW3+ms='
        }
    }
    static ChatUser() {
        return {
            id: 'alex.br'
        }
    }

    static ChatTokenProvider() {
        return 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/08332574-79ce-4d95-a0a1-a0e916758805/token'
    }
}