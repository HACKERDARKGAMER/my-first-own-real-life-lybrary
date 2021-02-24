function isTouching(obstacle1,obstacle2){
    if(obstacle1.x - obstacle2.x < obstacle1.width/2+ obstacle2.width/2
      && obstacle2.x - obstacle1.x < obstacle1.width/2+ obstacle2.width/2
      && obstacle1.y - obstacle2.y < obstacle1.height/2+ obstacle2.height/2
     && obstacle2.y - obstacle1.y < obstacle1.height/2+ obstacle2.height/2){
     return true;
    }
    else{
    return false;
    }
  }