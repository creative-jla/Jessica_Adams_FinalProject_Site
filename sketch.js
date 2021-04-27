const key = 'pk.eyJ1IjoiamxhLWNyZWF0aXZlIiwiYSI6ImNrbTJkbDVsMjE0cmsybnFzOG16NDFvcjQifQ.I0icT4IfRzmuTeV4YYgzdQ';

const options = {
  lat: 14.5994,
  lng: -28.6731,
  zoom: 1,
  style: 'mapbox://styles/jla-creative/ckn7nyopt0ei217mt0kopkh6w',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

var d;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  Navy = loadTable('Jessica_Adams_FinalProject_Data.csv','csv','header');
}


function draw() {
  clear();
  const zoom = myMap.zoom();
  let one = 5*zoom;
  let two = 10*zoom;
  let three = 15*zoom;
  
  
  //stationed
  stroke(255,255,0);
    const Char = myMap.latLngToPixel(32.7765,-79.9311);
      if(dist(Char.x,Char.y,mouseX,mouseY) < (zoom * 10)/2){
        fill(255,100); 
        }else{
        fill(0,60);
        }     
    ellipse(Char.x,Char.y,three,three);
  
    const DamN = myMap.latLngToPixel(36.7982,-75.9754);
      if(dist(DamN.x,DamN.y,mouseX,mouseY) < (zoom * 10)/2){
        fill(255,100);
        }else{ 
        fill(0,60);
        }
    ellipse(DamN.x,DamN.y,two,two);
  
    const Pens = myMap.latLngToPixel(30.4213,-87.2169);
      if(dist(Pens.x,Pens.y,mouseX,mouseY) < (zoom * 10)/2){
        fill(255,100);
        }else{
        fill(0,60);
        }
    ellipse(Pens.x,Pens.y,three,three);
  
    const Pasc = myMap.latLngToPixel(30.3658,-88.5561);
      if(dist(Pasc.x,Pasc.y,mouseX,mouseY) < (zoom * 10)/2){
        fill(255,100);
        }else{
        fill(0,60);
        }
    ellipse(Pasc.x,Pasc.y,three,three);
  
  
  //ops
  const Arub = myMap.latLngToPixel(12.5211,-69.9683);
    if(dist(Arub.x,Arub.y,mouseX,mouseY) < (zoom * 10)/2){
        fill(255,100); 
        }else{
        fill(0,60);
        } 
  ellipse(Arub.x,Arub.y,two,two);
  
  const Bahr = myMap.latLngToPixel(26.0667,50.5577);
    if(dist(Bahr.x,Bahr.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Bahr.x,Bahr.y,two,two);
  
  const Balt = myMap.latLngToPixel(39.2904,-76.6122);
    if(dist(Balt.x,Balt.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Balt.x,Balt.y,two,two);
  
  const Barb = myMap.latLngToPixel(13.1939,-59.5432);
    if(dist(Barb.x,Barb.y,mouseX,mouseY) < (zoom * 10)/2){
       fill(255,100); 
       }else{
       fill(0,60);
       } 
  ellipse(Barb.x,Barb.y,two,two);
  
  const Beau = myMap.latLngToPixel(32.4316,-80.6698);
    if(dist(Beau.x,Beau.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      }
  ellipse(Beau.x,Beau.y,two,two);
  
  const RdeJ = myMap.latLngToPixel(-22.9068,-43.1726);
    if(dist(RdeJ.x,RdeJ.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(RdeJ.x,RdeJ.y,two,two);
  
  const Guan = myMap.latLngToPixel(20.1400,-75.2129);
    if(dist(Guan.x,Guan.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Guan.x,Guan.y,two,two);
  
  const Cura = myMap.latLngToPixel(12.1696,-68.9900);
    if(dist(Cura.x,Cura.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Cura.x,Cura.y,two,two);
  
  const Djib = myMap.latLngToPixel(11.8251,42.5903);
    if(dist(Djib.x,Djib.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Djib.x,Djib.y,two,two);
  
  const SaDo = myMap.latLngToPixel(18.4861,-69.9312);
    if(dist(SaDo.x,SaDo.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(SaDo.x,SaDo.y,two,two);
  
  const Eapo = myMap.latLngToPixel(44.9062,-66.9900);
    if(dist(Eapo.x,Eapo.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Eapo.x,Eapo.y,two,two);
  
  const FoLa = myMap.latLngToPixel(26.1224,-80.1373);
    if(dist(FoLa.x,FoLa.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(FoLa.x,FoLa.y,two,two);
  
  const Fran = myMap.latLngToPixel(46.2276,2.2137);
    if(dist(Fran.x,Fran.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Fran.x,Fran.y,two,two);
  
  const Gdan = myMap.latLngToPixel(54.3520,18.6466);
    if(dist(Gdan.x,Gdan.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Gdan.x,Gdan.y,two,two);
  
  const Brem = myMap.latLngToPixel(53.3376,8.3436);
    if(dist(Brem.x,Brem.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Brem.x,Brem.y,two,two);
  
  const Gree = myMap.latLngToPixel(39.0742,21.8243);
    if(dist(Gree.x,Gree.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Gree.x,Gree.y,two,two);
  
  const PauP = myMap.latLngToPixel(18.5944,-72.3074);
    if(dist(PauP.x,PauP.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(PauP.x,PauP.y,two,two);
  
  const Isra = myMap.latLngToPixel(31.0461,34.8516);
    if(dist(Isra.x,Isra.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Isra.x,Isra.y,two,two);
  
  const Napl = myMap.latLngToPixel(40.8518,14.2681);
    if(dist(Napl.x,Napl.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Napl.x,Napl.y,two,two);
  
  const King = myMap.latLngToPixel(18.0179,-76.8099);
    if(dist(King.x,King.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(King.x,King.y,two,two);
  
  const KeWe = myMap.latLngToPixel(24.5551,-81.7800);
    if(dist(KeWe.x,KeWe.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(KeWe.x,KeWe.y,two,two);
  
  const Lond = myMap.latLngToPixel(51.5074,0.1278);
    if(dist(Lond.x,Lond.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Lond.x,Lond.y,two,two);
  
  const Mayp = myMap.latLngToPixel(30.3924,-81.4300);
    if(dist(Mayp.x,Mayp.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Mayp.x,Mayp.y,two,two);
  
  const Miam = myMap.latLngToPixel(25.7617,-80.1918);
    if(dist(Miam.x,Miam.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Miam.x,Miam.y,two,two);
  
  const Mobi = myMap.latLngToPixel(30.6954,-88.0399);
    if(dist(Mobi.x,Mobi.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100);
      }else{
      fill(0,60);
      } 
  ellipse(Mobi.x,Mobi.y,three,three);
      
  const Nepo = myMap.latLngToPixel(41.4901,-71.3128);
    if(dist(Nepo.x,Nepo.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Nepo.x,Nepo.y,two,two);
  
  const Oslo = myMap.latLngToPixel(59.9139,10.7522);
    if(dist(Oslo.x,Oslo.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Oslo.x,Oslo.y,two,two);
  
  const Pana = myMap.latLngToPixel(8.5380,-80.7821);
    if(dist(Pana.x,Pana.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Pana.x,Pana.y,two,two);
  
  const PortGB = myMap.latLngToPixel(50.8198,1.0880);
    if(dist(PortGB.x,PortGB.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(PortGB.x,PortGB.y,two,two);
  
  const Port = myMap.latLngToPixel(39.3999,-8.2245);
    if(dist(Port.x,Port.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Port.x,Port.y,two,two);
  
  const RoRo = myMap.latLngToPixel(18.2372,-65.6480);
    if(dist(RoRo.x,RoRo.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(RoRo.x,RoRo.y,two,two);
  
  const Qata = myMap.latLngToPixel(25.3548,51.1839);
    if(dist(Qata.x,Qata.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Qata.x,Qata.y,two,two);
  
  const StCr = myMap.latLngToPixel(17.7246,-64.8348);
    if(dist(StCr.x,StCr.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(StCr.x,StCr.y,two,two);
  
  const StJo = myMap.latLngToPixel(18.3368,-64.7281);
    if(dist(StJo.x,StJo.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      }
  ellipse(StJo.x,StJo.y,two,two);
  
  const StTh = myMap.latLngToPixel(18.3381,-64.8941);
    if(dist(StTh.x,StTh.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(StTh.x,StTh.y,two,two);
  
  const Sard = myMap.latLngToPixel(40.1209,9.0129);
    if(dist(Sard.x,Sard.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Sard.x,Sard.y,two,two);
  
  const PdeM = myMap.latLngToPixel(39.5696,2.6502);
    if(dist(PdeM.x,PdeM.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(PdeM.x,PdeM.y,three,three);
  
  const TrTo = myMap.latLngToPixel(10.6918,-61.2225);
    if(dist(TrTo.x,TrTo.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(TrTo.x,TrTo.y,two,two);
  
  const UAE = myMap.latLngToPixel(23.4241,53.8478);
    if(dist(UAE.x,UAE.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(UAE.x,UAE.y,two,two);
  
  const West = myMap.latLngToPixel(41.3915,-73.9560);
    if(dist(West.x,West.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(West.x,West.y,two,two);
  
  const Plat = myMap.latLngToPixel(19.7808,-70.6871);
    if(dist(Plat.x,Plat.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100); 
      }else{
      fill(0,60);
      } 
  ellipse(Plat.x,Plat.y,two,two);
  
  const Berm = myMap.latLngToPixel(32.3078,-64.7505);
    if(dist(Berm.x,Berm.y,mouseX,mouseY) < (zoom * 10)/2){
      fill(255,100);
      }else{
      fill(0,60);
      }
  ellipse(Berm.x,Berm.y,two,two);
  
  const Nass = myMap.latLngToPixel(25.0443,-77.3504);
    if(dist(Nass.x,Nass.y,mouseX,mouseY) < (zoom * 10)/2){
    fill(255,100);
    }else{
    fill(0,60);
    }
  ellipse(Nass.x,Nass.y,two,two);
  
  //lived
  stroke(0,0,255);
  fill(0,0,255,150);
  
  const Gaut = myMap.latLngToPixel(30.3858,-88.6117);
  ellipse(Gaut.x,Gaut.y,one,one);
  
  const Semi = myMap.latLngToPixel(30.5152,-87.4739);
  ellipse(Semi.x,Semi.y,one,one);
  
  const Cool = myMap.latLngToPixel(39.227500,-81.863290);
  ellipse(Cool.x,Cool.y,one,one);
  
  
  //info boxes
    if(dist(Char.x,Char.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Charleston, SC',75,50);
      fill(0);
      textSize(30);
      text('Chris: Ships stationed out of here', 25,100);
      textSize(25);
      text('Chris: 84-94', 20,190);
      text('Teresa: 1995', 175,190);
      text('Jessica: 2004', 340, 190);
    }
    if(dist(DamN.x,DamN.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Dam Neck, VA', 75,50);
      fill(0);
      textSize(30);
      text('Chris: Training facility', 100,100);
      textSize(25);
      text('Chris: 94-97', 20,190);
      text('Teresa: 95-97', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Pens.x,Pens.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Pensacola, FL', 75,50);
      fill(0);
      textSize(30);
      text('Chris: Saufley Field Federal Prison', 20,100);
      textSize(25);
      text('Chris: 01-04', 20,190);
      text('Teresa: 01-03', 165,190);
      text('Jessica: 01-03', 330, 190);
    }
    if(dist(Pasc.x,Pasc.y,mouseX,mouseY) < two){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Pascagoula, MS',65,50);
      fill(0);
      textSize(30);
      text('Chris: Favorite station', 100,100);
      textSize(25);
      text('Chris: 97-01', 20,190);
      text('Teresa: 97-01', 175,190);
      text('Jessica: 2000', 340, 190);
    }
      
    if(dist(PdeM.x,PdeM.y,mouseX,mouseY) < one){
      fill(255,175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Palma de Mallorca',40,50);
      fill(0);
      textSize(30);
      text('Chris: Good night clubs', 80,100);
      text('Teresa & Jessica: Architecture', 45,140);
      textSize(25);
      text('Chris: 1999', 20,190);
      text('Teresa: 2018', 175,190);
      text('Jessica: 2018', 340,190);
      
    }
    if(dist(Arub.x,Arub.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Aruba',175,50);
      fill(0);
      textSize(30);
      text('Chris: Golf tour', 135,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Bahr.x,Bahr.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Bahrain',160,50);
      fill(0);
      textSize(30);
      text('Chris: Best lo mein noodles', 60,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Balt.x,Balt.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Baltimore, MD',85,50);
      fill(0);
      textSize(30);
      text('Chris: U.S.S. Constellation', 65,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Barb.x,Barb.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Barbados',130,50);
      fill(0);
      textSize(30);
      text('Chris: Golf tour', 135,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Beau.x,Beau.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Beaufort, SC', 100,50);
      fill(0);
      textSize(30);
      text('Chris: Controlled aircraft from', 35,100);
      text('protable radar station', 90,140);
      textSize(25);
      text('Chris: 90-94', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(RdeJ.x,RdeJ.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Rio de Janerio',90,50);
      fill(0);
      textSize(30);
      text('Chris: Initiation', 150,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Guan.x,Guan.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Guantanamo (gitmo)',20,50);
      fill(0);
      textSize(30);
      text('Chris: Charlie Daniels concert', 45,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Cura.x,Cura.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Curacao',140,50);
      fill(0);
      textSize(30);
      text('Chris: Golf tour', 135,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Djib.x,Djib.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Djibouti',160,50);
      fill(0);
      textSize(30);
      text('Chris: Smells like death', 90,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(SaDo.x,SaDo.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Santo Domingo',75,50);
      fill(0);
      textSize(30);
      text('Chris: Port call', 140,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Eapo.x,Eapo.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Eastport, ME', 100,50);
      fill(0);
      textSize(30);
      text('Chris: Best seafood', 115,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(FoLa.x,FoLa.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Fort Lauderdale, FL', 25,50);
      fill(0); 
      textSize(30);
      text('Chris: Spring break', 120,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Fran.x,Fran.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('France', 160,50);
      fill(0);
      textSize(30);
      text('Chris: Michael Jackson Concert', 35,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Gdan.x,Gdan.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Gdansk',150,50);
      fill(0);
      textSize(30);
      text('Chris: Submarine search', 75,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Brem.x,Brem.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Bremerhaven',100,50);
      fill(0);
      textSize(30);
      text('Chris: Bought a watch at', 85,100);
      text('the flea market', 150,140)
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Gree.x,Gree.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Greece',175,50);
      fill(0);
      textSize(30);
      text('Chris: Local bike gangs drove', 50,100);
      text('mopeds and attacked sailors', 60,140)
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(PauP.x,PauP.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Port au Prince',85,50);
      fill(0);
      textSize(30);
      text('Chris: Poor nations', 120,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Isra.x,Isra.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Israel',175,50);
      fill(0);
      textSize(30);
      text('Chris: Variety of religions', 75,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Napl.x,Napl.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Naples',175,50);
      fill(0);
      textSize(30);
      text('Chris: Very busy, old port', 75,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(King.x,King.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Kingston',150,50);
      fill(0);
      textSize(30);
      text('Chris: Threw money off ship,', 50,100);
      text('kids jumped in after it', 100,140);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(KeWe.x,KeWe.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Key West, FL', 90,50);
      fill(0); 
      textSize(30);
      text('Chris: Jimmy Buffet bar', 85,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Lond.x,Lond.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('London, GB',115,50);
      fill(0);
      textSize(30);
      text('Chris: Made friends with', 85,100);
      text('the locals', 185,140)
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Mayp.x,Mayp.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Mayport, FL',115,50);
      fill(0);
      textSize(30);
      text('Chris: Training', 120,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Miam.x,Miam.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Miami, FL',130,50);
      fill(0);
      textSize(30);
      text('Chris: Layover for Rio de Janerio', 25,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Mobi.x,Mobi.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Mobile, AL',125,50);
      fill(0);
      textSize(30);
      text('Chris: Shipyard', 135,100);
      textSize(25);
      text('Chris: 1997', 20,190);
      text('Teresa: 1997', 175,190);
      text('Jessica: 2000', 340, 190);
    }
    if(dist(Nepo.x,Nepo.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Newport, RI',115,50);
      fill(0);
      textSize(30);
      text('Chris: Submarine naval base', 60,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Oslo.x,Oslo.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Oslo',195,50);
      fill(0);
      textSize(30);
      text('Chris: Beautiful scenery', 90,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Pana.x,Pana.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Panama',150,50);
      fill(0);
      textSize(30);
      text('Chris: Caught peacock bass', 50,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(PortGB.x,PortGB.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Portsmouth, GB',75,50);
      fill(0);
      textSize(30);
      text('Chris: Shipyard', 150,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Port.x,Port.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Portugal', 150,50);
      fill(0);
      textSize(30);
      text('Chris: Painted the whole ship', 50,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(RoRo.x,RoRo.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Roosevelt Roads', 60,50);
      fill(0);
      textSize(30);
      text('Chris: Golf tour', 135,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Qata.x,Qata.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Qatar',175,50);
      fill(0);
      textSize(30);
      text('Chris: Uneventful fuel stop', 65,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(StCr.x,StCr.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Saint Croix',120,50);
      fill(0);
      textSize(30);
      text('Chris: Good food', 130,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(StJo.x,StJo.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Saint John',120,50);
      fill(0);
      textSize(30);
      text('Chris: Good food', 125,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(StTh.x,StTh.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Saint Thomas',85,50);
      fill(0);
      textSize(30);
      text('Chris: Golf tour', 135,100);
      text('"Devils Triangle"', 130,140)
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Sard.x,Sard.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Sardinia',150,50);
      fill(0);
      textSize(30);
      text('Chris: Submarine search', 75,100);
      text('Won softball championship', 60,140)
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(TrTo.x,TrTo.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Trinidad & Tobago', 50,50);
      fill(0);
      textSize(30);
      text('Chris: Golf Tour', 135,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(UAE.x,UAE.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('United Arab Emirates',10,50);
      fill(0);
      textSize(30);
      text('Chris: Floated around in', 85,100);
      text('a minefield', 175,140)
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(West.x,West.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Westpoint, NY', 85,50);
      fill(0);
      textSize(30);
      text('Chris: Great history lesson', 65,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Plat.x,Plat.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Puerto Plata',85,50);
      fill(0);
      textSize(30);
      text('Chris: Depletion of resources', 120,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Berm.x,Berm.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Bermuda',150,50);
      fill(0);
      textSize(30);
      text('Chris: Port call', 155,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
    if(dist(Nass.x,Nass.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(255,255,0);
      rect(0,0,500,200);
      fill(0,0,255);
      noStroke();
      textSize(50);
      text('Nassau',155,50);
      fill(0);
      textSize(30);
      text('Chris: Port call', 140,100);
      textSize(25);
      text('Chris: ?', 20,190);
      text('Teresa: N/A', 175,190);
      text('Jessica: N/A', 340, 190);
    }
  
  
    if(dist(Cool.x,Cool.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(0,0,255);
      rect(0,0,400,80);
      fill(0);
      noStroke();
      textSize(50);
      text('Coolville, OH', 50,55);
    }
    if(dist(Semi.x,Semi.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(0,0,255);
      rect(0,0,400,80);
      fill(0);
      noStroke();
      textSize(50);
      text('Seminole, AL', 50,55);
    }
    if(dist(Gaut.x,Gaut.y,mouseX,mouseY) < one){
      fill(255, 175);
      stroke(0,0,255);
      rect(0,0,400,80);
      fill(0);
      noStroke();
      textSize(50);
      text('Gautier, MS', 55,55);
    }
  
  fill(255, 175);
  stroke(0);
  rect(windowWidth-90,0, 90,75);
  fill(0);
  noStroke();
  textSize(15);
  text('Key', windowWidth-50, 20);
  
  stroke(0,0,255);
  fill(0,0,255,150);
  ellipse(windowWidth-70, 35, 15,15);
  textSize(12);
  text('Lived', windowWidth-55,40);
  
  stroke(255,255,0);
  fill(0,60);
  ellipse(windowWidth-70,60, 15,15);
  fill(0);
  textSize(12);
  text('Stationed', windowWidth-55,65)
  
//   var d = ('.div-block');
//   d.show
  
//   d = select('.div-block');
//   d.position(0,0);
  
  print(zoom);
  }
  

//resize canvas when the window is resized...
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});




