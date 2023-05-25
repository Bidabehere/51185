import passport from 'passport';
import local from 'passport-local';
import userService from '../models/User.model.js';
import GitHubStrategy from 'passport-github2';
import { createHash, validatePassword } from '../utils.js';
//import userModel from '../models/User.model.js';

const LocalStrategy = local.Strategy;

const initializePassport = () => {
    
    passport.use('register', new LocalStrategy(
        {passReqToCallback:true, usernameField:'email'}, 
        async (req,username, password,done) =>{
            const { first_name, last_name, email,age } = req.body;
            try {
                const user = await userService.findOne({email:username}); 
                if(user){
                    console.log('El usuario existe');
                    return done(null,false);
                }
                const newUser = {
                    first_name, 
                    last_name, 
                    email, 
                    age, 
                    password: createHash(password)
                }

                const result = await userService.create(newUser);
                return done(null, result);

            } catch (error) {
                return done("Error al registrar el usuario: " + error);
            }
        }
    ));

    passport.serializeUser((user,done)=>{
        done(null, user._id)
    });
    passport.deserializeUser( async (id, done)=>{
        const user = await userService.findById(id);
        done(null, user)
    });

    passport.use('login', new LocalStrategy({usernameField:'email'}, async (username, password, done)=>{

        try {
           
           const user = await userService.findOne({email:username})
           //console.log(user);
            if(!user){
                console.log('No existe el usuario');
                return done(null, false);
            }
            if(!validatePassword(password,user)) return done (null, false);
            return done(null,user);

        } catch (error) {
            
            return done("Error al intentar ingresar: " + error);
            
        }

    }));

    passport.use('github', new GitHubStrategy({
        clientID:'Iv1.a8bdd442f4853578',
        clientSecret:'08d28253995d4ab209f266195d1dd145c70c10ac',
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'
    }, async (accesToken, refreshToken, profile, done)=>{
        try {
            
            console.log(profile); //vemos la info que nos da GitHub
            const user = await userService.find({email:profile._json.email})

            if(!user){

                const newUser = {
                    first_name: profile._json.name,
                    last_name: '',
                    email: profile._json.email,
                    age: 18,
                    password: ''
                }
                const result = await userService.create(newUser);
                done(null, result)

            }else{
                //ya existe el usuario
                done(null,user)
            }

        } catch (error) {
            return done(null,error)
        }
    }))



}

export default initializePassport;