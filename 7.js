var hero={
    _name:'John Doe',
    getSecretIdentity:function(){
        return this._name
    }
}
console.log(hero.getSecretIdentity)
var stoleSecretIdentity=hero.getSecretIdentity;
console.log(stoleSecretIdentity())
console.log(hero.getSecretIdentity())