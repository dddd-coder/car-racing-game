class Game{

    getState(){
        database.ref('gameState').on("value", (data)=> {
            gameState= data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){

        player = new Player()

        form= new Form()
        form.display()

        var countRef= await database.ref('playerCount').once("value")

if(countRef.exists()){
        player.getCount();
}
        
    }

    play (){

        form.greetings.hide()
        textSize(30)
        text ("game start", 200, 200)

        player.getInfoPlayer()

        if(allPlayers !== notDefined){

            if(keyIsDown(UP_ARROW)){
                player.distance+=50
                player.update();
            }

        var newY=200
        for(var plr in allPlayers){
            var newY=200

            if(plr === "players"  + plater.index  ){

                fill ("red");
            }

                else{

                    fill("blue")
                }
                
            text(allPlayers[plr].name + ";"+ allPlayers[plr].distance, 120, newY)

            newY+=50

            }
        }
    }

    





        
}

