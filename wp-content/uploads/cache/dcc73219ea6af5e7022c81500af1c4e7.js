 var Ball = function(ref,w,h){
	
	var x = 0;
	var y = 0;
	var reference = ref;
	var width = w;
	var height = h; 
	
	return{
		x:x,
		y:y,
		speedY: -3,
		speedX: -2,
		width:width,
		height: height,

		setX: function(posX){
			//x = posX;
			
			TweenMax.set(reference, {
				x: posX,
			});
			
		},
		
		setY: function(posY){
			//y = posY;
			
			TweenMax.set(reference, {
				y: posY
			});
			
		},
		
		updatePosition: function(){
			
			TweenMax.set(reference, {
				x: parseInt(this.x - this.width*0.5),
				y: parseInt(this.y - this.height*0.5)
			});
			
		}
	}
}

var Player = function(ref,w,h,ai){
	
	var x,y = 0;
	var reference = ref;
	var width = w;
	var height = h;
		
	return{
		x: x,
		y: y,
		width: width,
		height: height,
		updatePosition: function(){
			
			TweenMax.set(reference, {
				x: this.x,
				y: this.y
			});
		}
		
	}
}

	var Pong = function(){
		
		var LEFT_SIDE = "LEFT_SIDE";
		var RIGHT_SIDE = "RIGHT_SIDE";
		var WALL = "WALL";
		var PADDLE = "PADDLE";
		
		var isGameOver = false;
    var isInitialized = false;
		var player1Direction = -1;
		
		var width = 600;
		var height = 420;
		var player1CollisionLine, player2CollisionLine;
		var playerMiddlePosition;
    
    var introSnd, pointSnd, gameoverSnd, touchSnd;
    
    introSnd = new Audio('http://www.mathieu-mence.name/misc/pong/intro.wav');
    pointSnd = new Audio('http://www.mathieu-mence.name/misc/pong/point.wav');
    touchSnd = new Audio('http://www.mathieu-mence.name/misc/pong/touch.wav');    
    gameoverSnd = new Audio('http://www.mathieu-mence.name/misc/pong/gameover.wav'); 
		
		var elapsedTime = 0;
		var scorePlayer1 = 0;
		var scorePlayer2 = 0;
		
		var player1 = new Player( $("#player1"),13, 70, false);
		var player2 = new Player( $("#player2"),13, 70, true);
		var ball = new Ball( $("#ball"), 13, 13);
		var scoreContainer = $("#score");
		
		var printScore = function(){
			return scorePlayer1+"   "+scorePlayer2;
		}
		
		var updateScore = function(){
      pointSnd.play(); 
			scoreContainer.html( printScore() );
			
			if(scorePlayer1 == 3 || scorePlayer2 == 3)
				gameOver();
		}
		
		var resetScore = function(){
			scorePlayer1 = scorePlayer2 = 0;
		}
		
		var resetPositions = function(){
			player1.x = 0;
			player1.y = playerMiddlePosition;
			player1.updatePosition();
			
			player2.x = player2CollisionLine;
			player2.y = playerMiddlePosition;
			player2.updatePosition();
			
			ball.x = width*0.5;
			ball.y = height*0.5;
			ball.updatePosition();
		}
		
		var reset = function(){
			isGameOver = false;
			$("#gameover").hide();
			resetScore();
			resetPositions();
			updateScore();
			TweenMax.ticker.wake();
		}
		
		var playerYCheck = function(){
			
			var player;
			
			if (ball.x < width*0.5)
				player = player1;
			else
				player = player2;
			
			
			if( ball.y > (player.y + player.height) || (ball.y+ball.height) < player.y )
				return WALL;
			else
				return PADDLE;
		}
		
		var checkWall = function(){
			if(ball.x <= ball.width/2){ 
		        ball.x = ball.width/2; 
		        ball.speedX *= -1; 
		        Pong.incPlayer2Score();
		        updateScore();
		    } 
		    
		    else if(ball.x >= width-ball.width/2){ 
		        ball.x = width-ball.width/2; 
		        ball.speedX *= -1; 
		        Pong.incPlayer1Score();
		        updateScore();
		    }
		}
		
		var checkPaddle = function(){
			if(ball.x <= player1CollisionLine + ball.width/2  ){ 
		        ball.x = player1CollisionLine + ball.width/2; 
		        ball.speedX *= -1; 
            touchSnd.play();
		    } 
		    
		    else if(ball.x >= player2CollisionLine-ball.width/2){ 
		        ball.x = player2CollisionLine-ball.width/2; 
		        ball.speedX *= -1; 
            touchSnd.play();
		    }
		}

		var gameOver = function(){
      gameoverSnd.play(); 
			isGameOver = true;
			TweenMax.ticker.sleep();
			$("#gameover").show();
		}
		
		var gameLoop = function(dt){
				
			elapsedTime += 1/60;
					
			ball.x += ball.speedX;
			ball.y += ball.speedY;
		  ball.updatePosition();
		 
		 	player1.y += player1Direction * 3;
		 	
      if(player1.y <=0 ) 
        player1.y = 0;
		 	
      if(player1.y >= height - player1.height ) player1.y = height - player1.height;
		    player1.updatePosition();
		 
		 	amplitude = (1 + Math.sin(elapsedTime)) * 0.5;
		 	player2.y = (height-player2.height) * amplitude;
		 	player2.updatePosition();
		 
		    		
    		switch( playerYCheck() ){
    			case WALL :{
    				checkWall();
    				break;
    			}
    			case PADDLE: {
    				checkPaddle();
    				break;
    			}
    		}

		    if(ball.y <= ball.height/2){ 
		        ball.y = ball.height/2; 
		        ball.speedY *= -1; 
		    } 
		    
		    else if(ball.y >= height-ball.height/2){ 
		        ball.y = height-ball.height/2; 
		        ball.speedY *= -1; 
		    }
			
		}
    
    var init = function(){
      isInitialized = true;
      introSnd.play();  
      $("#title").hide();
      //TweenMax.ticker.fps(30);
			TweenMax.ticker.addEventListener('tick', gameLoop);
    }
		
		var constructor = function(){
			player1CollisionLine = player1.width;
			player2CollisionLine = width - player2.width;
			playerMiddlePosition = (height-player1.height)*0.5;
			reset();
			
			document.onkeypress = function(e) {
			    e = e || window.event;
			    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
			    if (charCode) {
			    	
			    	console.log(charCode);
			    	
			        switch(charCode){
			        	case 13: if(!isInitialized) init(); if(isGameOver) reset();  break;
			        	case 119: player1Direction = -1; break;
			        	case 115: player1Direction = 1; break;
			        }
			    }
			};
		}()
		
		return{
			incPlayer1Score: function(){scorePlayer1++;},
			incPlayer2Score: function(){scorePlayer2++;},
			printScore:printScore,
			resetScore: resetScore,
			reset: reset,
			ball: ball,
			player1: player1,
			player2: player2
		}
	}() 