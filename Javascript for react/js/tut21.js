console.log('prototype inheritance');
//need to work on
//whenever we make object using constructor a prototype form

const proto={
    slogan:function(){
        return 'All about you';
    },
    changename:function(newname){
        this.name = newname;
    }
}

const gd = Object.create(proto);
gd.name = "gaurav";
gd.work = "coder";
gd.changename = ("dev");
    console.log(gd);

    