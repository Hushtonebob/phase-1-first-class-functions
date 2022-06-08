function spy(){
    return 777;
};

function receivesAFunction(spy){
    spy();
};

function returnsAnAnonymousFunction(){
return () => 777;
};

function blam(){
    console.log(777);
}

function returnsANamedFunction(){
    return blam;
}