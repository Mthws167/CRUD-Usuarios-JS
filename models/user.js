class User {
    constructor(name, gender, birth, country, email, password, photo, admin) {
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date().toLocaleString('pt-BR');
    }

    //Name
    get name(){
        return this._name;
    }

    //Gender
    get gender(){
        return this._gender;
    }

    //Birth
    get birth(){
        return this._birth;
    }

    //Country
    get country(){
        return this._country;
    }

    //E-mail
    get email(){
        return this._email;
    }

    //Password
    get password(){
        return this._password;
    }

    //Photo 
    get photo(){
        return this._photo;
    }

    set photo(value){
        this._photo=value;
    }

    //Admin
    get admin(){
        return this._admin;
    }

    //Register
    get register(){
        return this._register;
    }
} 