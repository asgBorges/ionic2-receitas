import firebase from 'firebase';

export class AutenticacaoService {

    signin(email:string, senha:string) {
        return firebase.auth().signInWithEmailAndPassword(email, senha);
    }

    registra(email:string, senha:string) {
        return firebase.auth().createUserWithEmailAndPassword(email, senha);
    }


    logout() {
        firebase.auth().signOut();
    }
}