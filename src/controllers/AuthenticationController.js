const loginTest= "test";
const passwordTest = "authTest123";


module.exports = class AuthenticationController {

    static async login(req,res,next){
        try{
            if(!req.headers.authorization)
                return res.status(401).send('Authentification Requise')

            const auth = req.headers.authorization.split(' ')[1]
            const strauth = Buffer.from(auth,'base64').toString('utf-8')
            const splitIndex = strauth.indexOf(':')
            const login = strauth.substring(0, splitIndex)
            const password = strauth.substring(splitIndex + 1) 
            if(login !== loginTest && password !== passwordTest)
                return res.status(401).send('Authentification Invalide')  

            return res.status(200).send('Utilisateur Authentifié');
        }catch(error){
            return next({status:error.status,message:error.message})
        }
    }
}